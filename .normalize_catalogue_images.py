from __future__ import annotations

from pathlib import Path
from tempfile import gettempdir
import sys

from PIL import Image, ImageChops, ImageDraw, ImageFilter


ROOT = Path(__file__).parent
SOURCE_ROOT = ROOT / "public" / "images"
OUTPUT_ROOT = (
    SOURCE_ROOT
    if "--apply" in sys.argv
    else Path(gettempdir()) / "svx-normalized-assets"
)
OUTPUT_ROOT.mkdir(parents=True, exist_ok=True)

CANVAS_SIZE = 1200
SUBJECT_SIZE = 960
FOOTBALL_FOCUS_SIZE = 820

# The first catalogue photos include large, saturated contact shadows. Their
# product bounds are explicit so those shadows do not make the balls render
# smaller than clean cutouts in the same gallery row.
FOOTBALL_FOCUS_BBOXES: dict[str, tuple[int, int, int, int]] = {
    "football-01": (325, 250, 875, 800),
    "football-02": (330, 250, 875, 795),
    "football-03": (350, 250, 850, 750),
}


# Coordinates are measured on the original catalogue photographs. The masks
# intentionally retain only the ball itself; display stands and room surfaces
# are not part of the product.
BALL_ELLIPSES: dict[str, tuple[int, int, int, int]] = {
    "football-04": (242, 195, 802, 755),
    "football-05": (160, 205, 800, 845),
    "football-06": (220, 190, 850, 820),
    "football-07": (455, 265, 895, 705),
    "football-09": (350, 208, 984, 842),
    "football-18": (294, 270, 1010, 986),
    "football-19": (188, 124, 836, 772),
}

CURRENT_BALL_ELLIPSES: dict[str, tuple[int, int, int, int]] = {
    "football-08": (365, 35, 860, 530),
    "football-16": (245, 45, 1180, 980),
    "football-17": (255, 35, 995, 775),
}

CURRENT_CROPS: dict[str, tuple[int, int, int, int]] = {
    "football-12": (250, 290, 1050, 800),
}


def normalize(image: Image.Image) -> Image.Image:
    rgba = image.convert("RGBA")
    bbox = rgba.getchannel("A").getbbox()
    if bbox is None:
        raise ValueError("Image has no visible pixels")

    subject = rgba.crop(bbox)
    scale = min(SUBJECT_SIZE / subject.width, SUBJECT_SIZE / subject.height)
    size = (max(1, round(subject.width * scale)), max(1, round(subject.height * scale)))
    subject = subject.resize(size, Image.Resampling.LANCZOS)

    canvas = Image.new("RGBA", (CANVAS_SIZE, CANVAS_SIZE), (255, 255, 255, 0))
    position = ((CANVAS_SIZE - subject.width) // 2, (CANVAS_SIZE - subject.height) // 2)
    canvas.alpha_composite(subject, position)
    return canvas


def normalize_football(image: Image.Image, name: str) -> Image.Image:
    """Scale around the actual product, excluding neutral floor shadows."""
    rgba = image.convert("RGBA")
    hue, saturation, value = rgba.convert("RGB").convert("HSV").split()
    del hue
    colorful = saturation.point(lambda pixel: 255 if pixel >= 38 else 0)
    dark = value.point(lambda pixel: 255 if pixel <= 88 else 0)
    focus_mask = ImageChops.multiply(
        ImageChops.lighter(colorful, dark),
        rgba.getchannel("A").point(lambda pixel: 255 if pixel >= 96 else 0),
    )
    focus_bbox = FOOTBALL_FOCUS_BBOXES.get(name) or focus_mask.getbbox() or rgba.getchannel("A").getbbox()
    if focus_bbox is None:
        raise ValueError("Image has no visible pixels")

    focus_width = focus_bbox[2] - focus_bbox[0]
    focus_height = focus_bbox[3] - focus_bbox[1]
    focus_size = 600 if name in FOOTBALL_FOCUS_BBOXES else FOOTBALL_FOCUS_SIZE
    scale = focus_size / max(focus_width, focus_height)
    resized = rgba.resize(
        (max(1, round(rgba.width * scale)), max(1, round(rgba.height * scale))),
        Image.Resampling.LANCZOS,
    )
    focus_center_x = ((focus_bbox[0] + focus_bbox[2]) / 2) * scale
    focus_center_y = ((focus_bbox[1] + focus_bbox[3]) / 2) * scale
    position = (
        round(CANVAS_SIZE / 2 - focus_center_x),
        round(CANVAS_SIZE / 2 - focus_center_y),
    )

    canvas = Image.new("RGBA", (CANVAS_SIZE, CANVAS_SIZE), (255, 255, 255, 0))
    canvas.alpha_composite(resized, position)
    return canvas


def ball_from_original(name: str, ellipse: tuple[int, int, int, int]) -> Image.Image:
    source = Image.open(SOURCE_ROOT / "footballs" / f"{name}.jpg").convert("RGBA")
    mask = Image.new("L", source.size, 0)
    ImageDraw.Draw(mask).ellipse(ellipse, fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(1.5))
    source.putalpha(mask)
    return source


def mask_current_ball(source: Image.Image, ellipse: tuple[int, int, int, int]) -> Image.Image:
    mask = Image.new("L", source.size, 0)
    ImageDraw.Draw(mask).ellipse(ellipse, fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(1.5))
    source.putalpha(mask)
    return source


def save_preview_group(group: str, paths: list[Path]) -> None:
    target = OUTPUT_ROOT / group
    target.mkdir(parents=True, exist_ok=True)
    for path in paths:
        name = path.stem
        existing = Image.open(path).convert("RGBA")
        is_normalized = existing.size == (CANVAS_SIZE, CANVAS_SIZE)

        if group == "footballs" and not is_normalized and name in BALL_ELLIPSES:
            source = ball_from_original(name, BALL_ELLIPSES[name])
        else:
            source = existing
            if group == "footballs" and not is_normalized and name in CURRENT_BALL_ELLIPSES:
                source = mask_current_ball(source, CURRENT_BALL_ELLIPSES[name])
            if group == "footballs" and not is_normalized and name in CURRENT_CROPS:
                source = source.crop(CURRENT_CROPS[name])
            if group == "bags" and not is_normalized and name == "bag-06":
                source = source.rotate(90, expand=True)
        normalized = (
            normalize_football(source, name)
            if group == "footballs"
            else source if is_normalized else normalize(source)
        )
        normalized.save(target / f"{name}.png", optimize=True)


save_preview_group(
    "footballs",
    sorted((SOURCE_ROOT / "footballs").glob("*.png")),
)
save_preview_group(
    "bags",
    sorted((SOURCE_ROOT / "bags").glob("*.png")),
)
save_preview_group(
    "socks",
    sorted((SOURCE_ROOT / "socks").glob("*.png")),
)

print(OUTPUT_ROOT)
