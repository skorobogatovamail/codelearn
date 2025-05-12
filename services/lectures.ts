import { CodeExample, CodingChallenge, Lecture, QuizQuestion } from "@prisma/client";
import { axiosInstance } from "./axiosInstance";

export async function get(moduleId: string, lectureId: string) {
    const { data } = await axiosInstance.get<Lecture & { codeExamples: CodeExample[] } & { quizQuestions: QuizQuestion[] } & { codingChallenges: CodingChallenge[] }>('lectures', { params: { moduleId, lectureId } })
    return data;
}