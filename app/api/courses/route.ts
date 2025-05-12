import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const courses = await prisma.course.findMany({ include: { modules: { include: { lectures: true } } } });
  return NextResponse.json(courses);
}
