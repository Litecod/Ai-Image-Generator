import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get("url");

  if (!imageUrl) {
    return new NextResponse("URL parameter missing", { status: 400 });
  }

  try {
    const res = await fetch(imageUrl);

    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);

    const blob = await res.blob();
    const contentType = res.headers.get("content-type") || "image/png";

    return new NextResponse(blob, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="ai-image.${
          contentType.split("/")[1]
        }"`,
      },
    });
  } catch (error) {
    return new NextResponse("Download failed", { status: 500 });
  }
}
