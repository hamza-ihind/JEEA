"use client";

import React from "react";

import { cp1_modules } from "@/components/database/modules";
import CourseCard from "../CourseCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import Title from "../shared/Title";
import Link from "next/link";
import { Button } from "../ui/button";

const Courses = () => {
  return (
    <div className="relative flex w-full h-[100%] flex-col items-center justify-center gap-3 p-16 max-lg:p-8">
      <Title
        title="Notre Trésor Éducatif"
        subtitle="Ressources Essentielles pour les Étudiants"
        description="Explorez notre collection diversifiée de résumés, exercices pratiques et aides de cours pour soutenir votre apprentissage et vous aider à exceller dans vos études académiques."
      />
      <Carousel className="mt-16 w-[75%]">
        <CarouselContent>
          {cp1_modules.map((element: any) => {
            return (
              <CarouselItem className="md:basis-1/1 lg:basis-1/2 xl:basis-1/3 p-8">
                <Link href={`/courses/${element.courseId}`}>
                  <CourseCard
                    key={element.courseId}
                    title={element.title}
                    image={element.image}
                    description={element.description}
                    files={element.files}
                    teacher={element.teacher}
                    tags={element.tags}
                  />
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Link href="/courses">
        <Button variant={"outline"} size={"lg"} className="font-light">
          Afficher Plus...
        </Button>
      </Link>
    </div>
  );
};

export default Courses;
