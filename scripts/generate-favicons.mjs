import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const rootDir = process.cwd();
const svgPath = path.join(rootDir, "public", "icon.svg");
const publicDir = path.join(rootDir, "public");

if (!fs.existsSync(svgPath)) {
  console.error(`Source SVG not found at ${svgPath}`);
  process.exit(1);
}

fs.mkdirSync(publicDir, { recursive: true });

const svgBuffer = fs.readFileSync(svgPath);

function createIco(images) {
  const count = images.length;
  const headerSize = 6;
  const entrySize = 16;
  let offset = headerSize + entrySize * count;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type 1 = ICO
  header.writeUInt16LE(count, 4); // Number of images

  const entries = [];
  for (const img of images) {
    const entry = Buffer.alloc(entrySize);
    entry.writeUInt8(img.width === 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height === 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // Palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // Image data size
    entry.writeUInt32LE(offset, 12); // Offset
    entries.push(entry);
    offset += img.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...images.map((img) => img.buffer)]);
}

async function generate() {
  console.log("Generating favicons and raster icons from icon.svg...");

  const png16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
  const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  const png48 = await sharp(svgBuffer).resize(48, 48).png().toBuffer();
  const png96 = await sharp(svgBuffer).resize(96, 96).png().toBuffer();
  const png180 = await sharp(svgBuffer).resize(180, 180).png().toBuffer();
  const png192 = await sharp(svgBuffer).resize(192, 192).png().toBuffer();

  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: png16 },
    { width: 32, height: 32, buffer: png32 },
    { width: 48, height: 48, buffer: png48 },
  ]);

  fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuffer);
  fs.writeFileSync(path.join(publicDir, "icon-48x48.png"), png48);
  fs.writeFileSync(path.join(publicDir, "icon-96x96.png"), png96);
  fs.writeFileSync(path.join(publicDir, "icon-192x192.png"), png192);
  fs.writeFileSync(path.join(publicDir, "apple-touch-icon.png"), png180);
  fs.copyFileSync(svgPath, path.join(publicDir, "icon.svg"));

  console.log("Successfully generated:");
  console.log(" - public/favicon.ico (16x16, 32x32, 48x48)");
  console.log(" - public/icon-48x48.png");
  console.log(" - public/icon-96x96.png");
  console.log(" - public/icon-192x192.png");
  console.log(" - public/apple-touch-icon.png");
  console.log(" - public/icon.svg");
}

generate().catch((err) => {
  console.error("Error generating favicons:", err);
  process.exit(1);
});
