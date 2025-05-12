import { Course, Lecture, Module } from "@prisma/client";
import { axiosInstance } from "./axiosInstance";

export const getAll = async () => {
  const { data } = await axiosInstance.get<(Course & { modules: (Module & { lectures: Lecture[] }[]) })[]>("courses");
  return data;
};

export const search = async (courseId: string) => {
  const { data } = await axiosInstance.get<Course & { modules: (Module & { lectures: Lecture[] }[]) }>("courses/search", {
    params: { courseId },
  });
  return data;
};
