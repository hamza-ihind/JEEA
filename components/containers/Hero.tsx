import React from "react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const socials = [
  "/socials/instagram.png",
  "/socials/facebook.png",
  "/socials/linkedin.png",
];

const Hero = () => {
  return (
    <main className="h-[100vh] w-full flex items-center justify-around p-24">
      <div className="max-w-[60%] flex flex-col items-center gap-8">
        <h1 className="hero-title dark:hero-title-dark">
          FOR EVERY PROBLEM <br />
          WE ENGINEER A SOLUTION
        </h1>
        <p className="text-center text-xl leading-7 text-blue-700 dark:text-blue-300">
          Teaming up with Junior Enterprise ENSA Agadir is your way to get hold
          of a wide range of skills provided by future engineers in different
          fields.
        </p>
        <div className="flex gap-6">
          <Button
            variant={"default"}
            size={"lg"}
            className="text-white text-base"
          >
            Contact us
          </Button>
          <Button
            variant={"secondary"}
            size={"lg"}
            className="text-white text-base"
          >
            Watch a Video
          </Button>
        </div>
        <div className="mt-8 flex gap-8">
          {socials.map((item, index) => (
            <Image key={index} src={item} alt="photo" width={32} height={32} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Hero;
