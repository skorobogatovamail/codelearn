import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Clock, Code, Users } from "lucide-react";
import Link from "next/link";

import React from "react";

export interface Card {
  id: number;
  title: string;
  description: string;
  modules: number;
  lectures: number;
  duration: string;
  level: string;
  image: string;
}

interface CourseCardProps {
  classname?: string;
  card: Card;
}

export const CourseCard = ({ classname, card }: CourseCardProps) => {
  return (
    <div className={classname}>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-slate-100">
              {card.level}
            </span>
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <Clock className="h-3 w-3" /> {card.duration}
            </span>
          </div>
          <CardTitle>{card.title}</CardTitle>
          <CardDescription>{card.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Code className="h-4 w-4" />
              <span>{card.modules} modules</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              <span>{card.lectures} lectures</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>1.2k students</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Link href={`/courses/${card.id}`} className="w-full">
            <Button className="w-full">View Course</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
