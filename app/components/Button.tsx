import React from "react";

interface ButtonProps {
  classname?: string;
  text: string;
  handleClick?: () => void;
}

export const Button = ({ classname, text, handleClick }: ButtonProps) => {
  return (
    <button className={classname} onClick={handleClick}>
      {text}
    </button>
  );
};
