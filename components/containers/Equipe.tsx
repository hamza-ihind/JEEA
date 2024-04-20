import React from "react";
import Title from "../shared/Title";
import Image from "next/image";

const Equipe = () => {
  return (
    <div className="relative flex w-full h-[100vh] flex-col items-center justify-center gap-3 p-16 max-lg:p-8">
      <Title
        title="Rencontrez Notre Équipe"
        subtitle="Rencontrez Notre Équipe Dédiée"
        description="Découvrez les membres talentueux et passionnés qui collaborent pour créer une expérience éducative exceptionnelle."
      />
      <div className="mt-24 w-[90%] flex justify-around">
        <div className="flex flex-col items-center gap-5 w-[40%]">
          <Image
            src="/team/Ihind.jpeg"
            alt="Hamza"
            height={160}
            width={160}
            className="rounded-full border-2 border-primary"
          />
          <div className="flex flex-col items-center gap-4 self-stretch">
            <div className="flex flex-col items-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-gray-200">
                Hamza Ihind
              </p>
              <p className="text-base font-semibold text-primary">
                Développeur • Génie mécanique
              </p>
              <p className="mt-3 text-center text-base font-normal text-gray-500 dark:text-gray-400 leading-normal">
                Représentant APPSCLUB ENSA Agadir. Passionné par l'informatique
                et la psychologie, développeur web. Alliant expertise technique
                et compréhension humaine pour créer des expériences web
                exceptionnelles.
              </p>
              <div className="flex gap-4 mt-4">
                <Image
                  src="/socials/instagram.png"
                  alt="instagram"
                  height={24}
                  width={24}
                />
                <Image
                  src="/socials/medium.png"
                  alt="instagram"
                  height={24}
                  width={24}
                />
                <Image
                  src="/socials/linkedin.png"
                  alt="instagram"
                  height={24}
                  width={24}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 w-[40%]">
          <Image
            src="/team/Founani.jpeg"
            alt="Hamza"
            height={160}
            width={160}
            className="rounded-full border-primary border-2"
          />
          <div className="flex flex-col items-center gap-4 self-stretch">
            <div className="flex flex-col items-center">
              <p className="text-2xl font-semibold text-gray-900 dark:text-gray-200">
                Mohammed El Founani
              </p>
              <p className="text-base font-semibold text-primary">
                Fondateur • Créateur de Contenu • Génie mécanique
              </p>
              <p className="mt-3 text-center text-base font-normal text-gray-500 dark:text-gray-400 leading-normal">
                Représentant Club FSF ENSA Agadir. Passionné par LaTeX, la
                physique théorique, et le génie mécanique. Il excelle dans la
                communication scientifique, la modélisation et l'exploration des
                sciences appliquées.
              </p>
              <div className="flex gap-4 mt-4">
                <Image
                  src="/socials/instagram.png"
                  alt="instagram"
                  height={24}
                  width={24}
                />
                <Image
                  src="/socials/medium.png"
                  alt="instagram"
                  height={24}
                  width={24}
                />
                <Image
                  src="/socials/linkedin.png"
                  alt="instagram"
                  height={24}
                  width={24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipe;
