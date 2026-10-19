import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name") || "Course_Brochure";
    let fileUrl = searchParams.get("url");

    const cleanFilename = name
      .replace(/[^a-zA-Z0-9\s_-]/g, "")
      .trim()
      .replace(/\s+/g, "_");

    // 1. If fileUrl was not provided in the request, look up the course brochure dynamically from the CMS Admin API
    if (!fileUrl && name) {
      try {
        const adminUrl = process.env.NEXT_PUBLIC_ADMIN_API_URL;
        if (adminUrl) {
          const res = await fetch(
            `${adminUrl}/api/courses?search=${encodeURIComponent(name)}&limit=1`,
            { next: { revalidate: 60 } }
          );
          if (res.ok) {
            const json = await res.json();
            const courseList = json.courses || json.data || [];
            if (Array.isArray(courseList) && courseList.length > 0 && courseList[0]?.brochure) {
              fileUrl = courseList[0].brochure;
            }
          }
        }
      } catch (err) {
        console.warn("Could not query dynamic course brochure from CMS API:", err);
      }
    }

    // 2. Fetch and stream the brochure from the uploaded CMS URL (S3, Cloudinary, etc.)
    if (fileUrl && (fileUrl.startsWith("http://") || fileUrl.startsWith("https://"))) {
      try {
        const decodedUrl = decodeURI(fileUrl.replace(/&amp;/g, "&"));
        const safeUrl = encodeURI(decodedUrl);
        const upstream = await fetch(safeUrl);
        const upstreamContentType = upstream.headers.get("content-type") || "";

        if (
          upstream.ok &&
          (upstreamContentType.includes("pdf") || safeUrl.toLowerCase().includes(".pdf"))
        ) {
          const arrayBuffer = await upstream.arrayBuffer();
          return new NextResponse(arrayBuffer, {
            headers: {
              "Content-Type": "application/pdf",
              "Content-Disposition": `attachment; filename="${cleanFilename}_Brochure.pdf"`,
            },
          });
        }
      } catch (err) {
        console.error("Failed to fetch dynamic course brochure from CMS URL:", err);
      }
    }

    // 3. Fallback: Check local public/pdf directory dynamically for any matching course PDF
    const pdfDir = path.join(process.cwd(), "public", "pdf");
    if (fs.existsSync(pdfDir)) {
      const files = fs.readdirSync(pdfDir);
      const lowerName = name.toLowerCase();

      // Look for any file containing key terms from the course name
      const nameWords = lowerName.split(/\s+/).filter((w) => w.length > 3);
      let matchedFile = files.find((f) => {
        const lf = f.toLowerCase();
        return lf.endsWith(".pdf") && nameWords.some((w) => lf.includes(w));
      });

      if (!matchedFile && files.length > 0) {
        matchedFile = files.find((f) => f.endsWith(".pdf"));
      }

      if (matchedFile) {
        const fileBuffer = fs.readFileSync(path.join(pdfDir, matchedFile));
        return new NextResponse(fileBuffer, {
          headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename="${cleanFilename}_Brochure.pdf"`,
          },
        });
      }
    }

    // 4. Default fallback to learning guide
    const fallbackEbook = path.join(
      process.cwd(),
      "public",
      "ebookpdf",
      "Counselor Learning Guide.pdf"
    );
    if (fs.existsSync(fallbackEbook)) {
      const fileBuffer = fs.readFileSync(fallbackEbook);
      return new NextResponse(fileBuffer, {
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="${cleanFilename}_Brochure.pdf"`,
        },
      });
    }

    return NextResponse.json({ error: "Brochure not found" }, { status: 404 });
  } catch (error: any) {
    console.error("Error in /api/download-brochure:", error);
    return NextResponse.json(
      { error: "Internal server error downloading brochure" },
      { status: 500 }
    );
  }
}
