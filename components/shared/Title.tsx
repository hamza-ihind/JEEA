import React, { FC, ReactNode } from "react";

interface TitleProps {
  subtitle: string;
  description: string;
  additionalStyles?: string;
}

const Title: FC<TitleProps> = ({
  subtitle,
  description,
  additionalStyles = "",
}: TitleProps) => {
  return (
    <div className={`flex flex-col gap-2 ${additionalStyles}`}>
      <p className="text-gray-900 dark:text-gray-100 text-center text-6xl font-bold mt-4 max-lg:text-4xl">
        {subtitle}
      </p>
      <p className="text-center text-xl leading-7 text-amber-600 dark:text-amber-300 mt-6">
        {description}
      </p>
    </div>
  );
};

export default Title;
