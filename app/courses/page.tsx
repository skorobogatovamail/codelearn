import { cn } from "@/lib/utils";
import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CoursesPageContent } from "./components/CoursesPageContent";

interface CoursesPageProps {
  classname?: string;
}

const CoursesPage = ({ classname }: CoursesPageProps) => {
  return (
    <div
      className={cn(
        classname,
        "min-h-screen font-[family-name:var(--font-geist-sans)]"
      )}
    >
      <Header />
      <CoursesPageContent />
      <Footer />
    </div>
  );
};

export default CoursesPage;
