import React from "react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <main className="h-[100vh] flex flex-col items-center justify-center p-24">
      <Badge className="!text-lg w-fit text-white font-medium">
        APPSCLUB & CLUB FSF Présentent
      </Badge>
      <Image src="/FSF.svg" alt="logo" width={400} height={400} />
      <h1 className="text-7xl font-bold tracking-wide mt-[-24px]">
        COMPIL'COURT
      </h1>
      <p className="mt-12 w-[85%] dark:text-blue-300 text-blue-500 text-center text-xl font-normal">
        Embarquez pour un voyage transformateur à travers les mers infinies du
        savoir, où notre site Web sert de vaisseau de confiance. Naviguez à
        travers un trésor de cours, d'exercices et de fichiers éducatifs
        méticuleusement sélectionnés pour enrichir votre intellect.
      </p>
      <div className="p-8 flex gap-6">
        <Button
          variant={"default"}
          size={"lg"}
          className="text-white text-base"
        >
          Voir nos cours
        </Button>
        <Button
          variant={"secondary"}
          size={"lg"}
          className="text-white text-base"
        >
          Qui sommes-nous?
        </Button>
      </div>
    </main>
  );
};

export default Hero;
