import React from "react";
import { cn } from "@/lib/utils";
import { GraduationCap } from "lucide-react";
import Link from "next/link";

interface LogoProps {
  classname?: string;
}

export const Logo = ({ classname }: LogoProps) => {
  return (
    <Link
      href="/"
      className={cn(
        classname,
        "flex justify-between items-center gap-2 text-xl font-bold"
      )}
    >
      <GraduationCap />
      <span>CodeLearn</span>
    </Link>
  );
};
