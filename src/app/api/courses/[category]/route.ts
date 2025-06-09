import { NextResponse } from "next/server";

import { getCoursesByCategory } from "@/lib/sanity/queries/queries";

interface Params {
  params: {
    category: string;
  };
}

export async function GET(req: Request, { params }: Params) {
  const category = params.category;

  try {
    const data = await getCoursesByCategory(category);
    return NextResponse.json(data);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}
