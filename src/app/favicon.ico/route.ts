import fs from "node:fs";
import path from "node:path";

export async function GET() {
  const icoPath = path.join(process.cwd(), "public", "favicon.ico");
  if (fs.existsSync(icoPath)) {
    const icoBuffer = fs.readFileSync(icoPath);
    return new Response(icoBuffer, {
      headers: {
        "Content-Type": "image/x-icon",
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      },
    });
  }

  const svgPath = path.join(process.cwd(), "src", "app", "icon.svg");
  if (fs.existsSync(svgPath)) {
    const svgContent = fs.readFileSync(svgPath, "utf-8");
    return new Response(svgContent, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=86400",
      },
    });
  }

  return new Response("Not found", { status: 404 });
}
