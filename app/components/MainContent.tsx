import { Button } from "@/components/ui/button";
import classNames from "classnames";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface MainContentProps {
  classname?: string;
}

export const MainContent = ({ classname }: MainContentProps) => {
  return (
    <main
      className={classNames(
        classname,
        "px-8 sm:px-20 bg-gradient-to-b  from-slate-50 to-white"
      )}
    >
      <section className="py-20 flex flex-col gap-5 ">
        <h1 className="text-3xl font-bold">Master Frontend Development</h1>
        <p className="text-gray-500 max-w-[600px]">
          Interactive courses with hands-on coding exercises, real-time
          feedback, and comprehensive projects.
        </p>
        <Link href="/courses">
          <Button size="lg" className="gap-1">
            <span>Browse Courses</span>
            <ArrowRight />
          </Button>
        </Link>
      </section>
    </main>
  );
};
