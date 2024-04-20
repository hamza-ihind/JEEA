import React from "react";
import Title from "../shared/Title";
import Image from "next/image";

const About = () => {
  return (
    <main className="relative flex w-full h-[100%] flex-col items-center justify-center gap-3 p-16 max-lg:p-8">
      <Title
        title="Simplifier la Complexité"
        subtitle="Qui sommes-nous?"
        description="Explorez notre collection diversifiée de résumés, exercices pratiques et aides de cours pour soutenir votre apprentissage et vous aider à exceller dans vos études académiques."
      />
      <div className="w-full mt-12 flex items-center justify-evenly">
        <Image
          src="/about.jpg"
          alt="about"
          width="550"
          height="1200"
          className="mix-blend-normal border-4 dark:border-blue-950 border-blue-300"
        />
        <p className="w-[50%] text-2xl leading-relaxed font-light">
          Compil'Court est née de l'effort collectif d'étudiants en génie
          engagés à réduire la richesse d'informations présentées dans les cours
          universitaires en résumés LaTeX concis. Dans un environnement
          académique animé où le temps est précieux et la compréhension est
          essentielle, nous avons reconnu le besoin de matériaux d'étude
          efficaces.
          <br />
          <br /> Animés par notre passion pour l'apprentissage et notre désir
          d'aider nos camarades étudiants à réussir, nous nous sommes lancés
          dans un voyage pour créer un répertoire complet de leçons et de cours
          résumés. Grâce à la collaboration, à la dévotion et à un objectif
          commun d'excellence académique, Compil'Court est devenue une ressource
          de confiance pour les étudiants en quête de clarté au milieu des
          complexités de l'enseignement supérieur.
        </p>
      </div>
    </main>
  );
};

export default About;
