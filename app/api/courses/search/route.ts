import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const courseId = req.nextUrl.searchParams.get("courseId") || "";
  const course = await prisma.course.findFirst({
    where: { id: Number.parseInt(courseId) },
    include: { modules: { include: { lectures: true } } },
  });
  return NextResponse.json(course);
}
