import React from "react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

interface HeaderProps {
    classname?: string;
}

export const Header = ({ classname }: HeaderProps) => {
    return (
        <header
            className={cn(
                classname,
                "flex justify-between items-center py-5 px-8 sm:px-20  border-b"
            )}
        >
            <Logo />

            <div className="flex justify-between gap-2">
                <Button variant="outline">Login</Button>
                <Button>Sign up</Button>
            </div>
        </header>
    );
};
