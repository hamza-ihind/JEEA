import React from "react";
import Title from "../shared/Title";
import Image from "next/image";

const About = () => {
  return (
    <main className="relative flex w-full h-[100%] flex-col items-center justify-center gap-3 p-16 max-lg:p-8">
      <Title
        subtitle="Qui sommes-nous?"
        description="Explorez notre collection diversifiée de résumés, exercices pratiques et aides de cours pour soutenir votre apprentissage et vous aider à exceller dans vos études académiques."
      />
      <div className="w-full mt-12 flex items-center justify-evenly">¡</div>
    </main>
  );
};

export default About;
