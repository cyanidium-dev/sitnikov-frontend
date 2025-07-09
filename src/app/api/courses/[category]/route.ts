import { NextRequest, NextResponse } from "next/server";

import { getCoursesByCategory } from "@/lib/sanity/queries/courses";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ category: string }> }
) {
  const params = await context.params;

  try {
    const data = await getCoursesByCategory(params.category);
    return NextResponse.json(data);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}
