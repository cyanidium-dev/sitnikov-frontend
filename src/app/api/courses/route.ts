import { NextResponse } from "next/server";

import { getCoursesByCategory } from "@/lib/sanity/queries/queries";

export async function GET() {
  const data = await getCoursesByCategory();
  return NextResponse.json(data);
}
