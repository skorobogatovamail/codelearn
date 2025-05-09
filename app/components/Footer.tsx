import React from "react";
import { Logo } from "./Logo";
import cn from "classnames";

interface FooterProps {
  classname?: string;
}

export const Footer = ({ classname }: FooterProps) => {
  return (
    <footer
      className={cn(
        classname,
        "absolute bottom-0 left-0 p-8 sm:px-20 w-full flex items-center justify-between border-t"
      )}
    >
      <Logo />
      <p>©{new Date().getFullYear()} CodeLearn. All rights reserved.</p>
    </footer>
  );
};
