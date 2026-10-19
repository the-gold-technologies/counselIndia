import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name") || "Psychology-Ebook";
    const fileUrl = searchParams.get("url");

    const cleanFilename = name
      .replace(/[^a-zA-Z0-9\s_-]/g, "")
      .trim()
      .replace(/\s+/g, "_");

    // If an external PDF file URL is explicitly provided and is actually a PDF (not an image)
    if (fileUrl && (fileUrl.startsWith("http://") || fileUrl.startsWith("https://"))) {
      const lowerUrl = fileUrl.toLowerCase();
      // Ensure we never serve JPG/PNG cover images as PDFs
      const isImage =
        lowerUrl.endsWith(".jpg") ||
        lowerUrl.endsWith(".jpeg") ||
        lowerUrl.endsWith(".png") ||
        lowerUrl.endsWith(".webp");
      if (!isImage) {
        try {
          const safeUrl = encodeURI(decodeURI(fileUrl));
          const upstream = await fetch(safeUrl);
          const upstreamContentType = upstream.headers.get("content-type") || "";
          if (upstream.ok && (upstreamContentType.includes("pdf") || lowerUrl.endsWith(".pdf"))) {
            const arrayBuffer = await upstream.arrayBuffer();
            return new NextResponse(arrayBuffer, {
              headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": `attachment; filename="${cleanFilename}.pdf"`,
              },
            });
          }
        } catch (err) {
          console.error("Failed to fetch upstream PDF file, falling back to local PDF:", err);
        }
      }
    }

    // Map ebook to local authentic Counsel India PDFs in public/ebookpdf
    const lowerName = name.toLowerCase();
    const ebookPdfDir = path.join(process.cwd(), "public", "ebookpdf");

    let targetFile = "Counselor Learning Guide.pdf";

    if (lowerName.includes("counselling skill") || lowerName.includes("skills")) {
      targetFile = "COUNSELLING SKILLS.pdf";
    } else if (
      lowerName.includes("career") ||
      lowerName.includes("apa") ||
      lowerName.includes("option") ||
      lowerName.includes("success") ||
      lowerName.includes("personality") ||
      lowerName.includes("selling") ||
      lowerName.includes("mindset")
    ) {
      targetFile = "Career in Psychology by APA.pdf";
    } else if (
      lowerName.includes("research") ||
      lowerName.includes("paper") ||
      lowerName.includes("study")
    ) {
      targetFile = "How to write a research paper in Psychology.docx.pdf";
    } else {
      // Flagship Counsel India comprehensive learning guide PDF
      targetFile = "Counselor Learning Guide.pdf";
    }

    const filePath = path.join(ebookPdfDir, targetFile);

    if (fs.existsSync(filePath)) {
      const fileBuffer = fs.readFileSync(filePath);
      return new NextResponse(fileBuffer, {
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="${cleanFilename}.pdf"`,
          "Content-Length": String(fileBuffer.length),
        },
      });
    }

    return NextResponse.json({ error: "E-book file not found" }, { status: 404 });
  } catch (error: any) {
    console.error("Ebook download error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to download e-book" },
      { status: 500 }
    );
  }
}
