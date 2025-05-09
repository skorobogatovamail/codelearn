import React from "react";

interface MainContentProps {
  classname?: string;
}

export const MainContent = ({ classname }: MainContentProps) => {
  return <div className={classname}>MainContent</div>;
};
