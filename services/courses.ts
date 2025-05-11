import { Course } from "@prisma/client";
import { axiosInstance } from "./axiosInstance";

export const getAll = async () => {
  const { data } = await axiosInstance.get<Course[]>("courses");
  return data;
};

export const search = async (courseId: string) => {
  const { data } = await axiosInstance.get<Course>("courses/search", {
    params: { courseId },
  });
  return data;
};
