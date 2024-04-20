import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  type: string;
  title: string;
  photo: string;
  description: string;
  chapters: string;
}

const ModuleCard: React.FC<CardProps> = ({
  title,
  photo,
  description,
  chapters,
}) => {
  return (
    <div className="w-[400px]">
      <div className="flex flex-col items-start gap-8">
        <div className="self-stretch w-[400px] object-cover">
          <Image src={photo} alt={title} width={1080} height={120} />
        </div>
        <div className="flex flex-col flex-start gap-6 self-stretch">
          <div className="flex flex-col items-start gap-3">
            <p className="text-sm font-semibold text-primary">{chapters}</p>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400 description">
              {description}
            </p>
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
    </div>
  );
};

export default ModuleCard;
