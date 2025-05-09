import React from "react";
import { Logo } from "./Logo";
import Link from "next/link";
import { Button } from "./Button";

interface HeaderProps {
  classname?: string;
}

export const Header = ({ classname }: HeaderProps) => {
  return (
    <div className={classname}>
      <Logo />
      <Link
        href={{
          pathname: "/courses",
        }}
      >
        Courses
      </Link>
      <div>
        <Button text="Login"></Button>
        <Button text="Sign up"></Button>
      </div>
    </div>
  );
};
