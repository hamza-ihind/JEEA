import React from "react";
import Image from "next/image";
import { Badge } from "./ui/badge";

interface ModuleProps {
  image: string;
  title: string;
  description: string;
  teacher: string;
  files: string[];
  tags: string[];
}

const CourseCard = ({
  image,
  title,
  description,
  teacher,
  files,
  tags,
}: ModuleProps) => {
  return (
    <div className="flex flex-col items-start gap-8">
      <div className="self-stretch">
        <Image
          src={image}
          alt={title}
          width={1920}
          height={1080}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col flex-start gap-6 self-stretch">
        <div className="flex flex-col items-start gap-3">
          <p className="text-sm font-semibold text-primary">
            {teacher} • {files.length} Chapitres
          </p>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400 description">
            {description}
          </p>
        </div>
        <div className="flex gap-2 items-start">
          {tags.map((key, tag) => {
            return (
              <Badge key={key} variant={"outline"}>
                {tag}
              </Badge>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .description {
          height: 70px; /* Set a fixed height for description */
          overflow: hidden; /* Hide overflow */
          display: -webkit-box;
          -webkit-line-clamp: 4; /* Limit number of lines */
          -webkit-box-orient: vertical;
        }
      `}</style>
    </div>
  );
};

export default CourseCard;
