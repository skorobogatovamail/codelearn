import React from "react";

interface LogoProps {
  classname?: string;
}

export const Logo = ({ classname }: LogoProps) => {
  return <div className={classname}>Logo</div>;
};
