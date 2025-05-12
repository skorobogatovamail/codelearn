import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const moduleId = req.nextUrl.searchParams.get("moduleId") || "";
    const lectureId = req.nextUrl.searchParams.get("lectureId") || "";

    const data = await prisma.lecture.findFirst({
        where: {
            id: Number.parseInt(lectureId),
            moduleId: Number.parseInt(moduleId),
        },
        include: {
            codeExamples: true,
            quizQuestions: true,
            codingChallenges: true,
        },
    });

    return NextResponse.json(data);
}