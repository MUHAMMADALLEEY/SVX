from pathlib import Path
from tempfile import gettempdir
import sys

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).parent
ASSET_ROOT = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "public" / "images"
OUTPUT = Path(gettempdir()) / "svx-image-audit"
OUTPUT.mkdir(parents=True, exist_ok=True)


def checkerboard(size: tuple[int, int], square: int = 12) -> Image.Image:
    image = Image.new("RGB", size, "white")
    draw = ImageDraw.Draw(image)
    for y in range(0, size[1], square):
        for x in range(0, size[0], square):
            if (x // square + y // square) % 2:
                draw.rectangle((x, y, x + square - 1, y + square - 1), fill="#e8e8e8")
    return image


def alpha_bbox(image: Image.Image) -> tuple[int, int, int, int]:
    rgba = image.convert("RGBA")
    return rgba.getchannel("A").getbbox() or (0, 0, rgba.width, rgba.height)


def create_sheet(name: str, paths: list[Path]) -> Path:
    columns = 6
    tile_width = 220
    tile_height = 250
    rows = (len(paths) + columns - 1) // columns
    sheet = Image.new("RGB", (columns * tile_width, rows * tile_height), "#d8d8d8")
    draw = ImageDraw.Draw(sheet)
    font = ImageFont.load_default()

    for index, path in enumerate(paths):
        source = Image.open(path).convert("RGBA")
        bbox = alpha_bbox(source)
        alpha_width = bbox[2] - bbox[0]
        alpha_height = bbox[3] - bbox[1]
        visible_area = (alpha_width * alpha_height) / (source.width * source.height)
        print(
            f"{name},{path.name},{source.width}x{source.height},"
            f"bbox={bbox},visible_box={visible_area:.3f}"
        )

        canvas = checkerboard((tile_width - 12, tile_height - 34))
        max_width = canvas.width - 20
        max_height = canvas.height - 20
        scale = min(max_width / source.width, max_height / source.height)
        display_size = (max(1, round(source.width * scale)), max(1, round(source.height * scale)))
        display = source.resize(display_size, Image.Resampling.LANCZOS)
        canvas.paste(
            display,
            ((canvas.width - display.width) // 2, (canvas.height - display.height) // 2),
            display,
        )

        column = index % columns
        row = index // columns
        x = column * tile_width + 6
        y = row * tile_height + 6
        sheet.paste(canvas, (x, y))
        draw.text((x + 4, y + canvas.height + 5), path.stem, fill="#111111", font=font)

    output_path = OUTPUT / f"{name}-current-canvas.png"
    sheet.save(output_path)
    return output_path


groups = {
    "footballs": sorted((ASSET_ROOT / "footballs").glob("*.png")),
    "bags": sorted((ASSET_ROOT / "bags").glob("*.png")),
    "socks-transparent": sorted((ASSET_ROOT / "socks").glob("*.png")),
}

for group_name, group_paths in groups.items():
    sheet_path = create_sheet(group_name, group_paths)
    print(f"SHEET,{group_name},{sheet_path}")
