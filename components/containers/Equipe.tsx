import React from "react";
import Title from "../shared/Title";
import Image from "next/image";

type SocialIconProps = {
  src: string;
  alt: string;
};

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => (
  <Image src={src} alt={alt} height={24} width={24} />
);

type TeamMemberProps = {
  name: string;
  position: string;
  description: string;
  imageSrc: string;
};

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  position,
  description,
  imageSrc,
}) => (
  <div className="flex flex-col items-center gap-5 w-[40%]">
    <Image
      src={imageSrc}
      alt={name}
      height={160}
      width={160}
      className="rounded-full border-primary border-2"
    />
    <div className="flex flex-col items-center gap-4 self-stretch">
      <div className="flex flex-col items-center">
        <p className="text-2xl font-semibold text-gray-900 dark:text-gray-200">
          {name}
        </p>
        <p className="text-base font-semibold text-primary">{position}</p>
        <p className="mt-3 text-center text-base font-normal text-gray-500 dark:text-gray-400 leading-normal">
          {description}
        </p>
        <div className="flex gap-4 mt-4">
          <SocialIcon src="/socials/instagram.png" alt="instagram" />
          <SocialIcon src="/socials/medium.png" alt="medium" />
          <SocialIcon src="/socials/linkedin.png" alt="linkedin" />
        </div>
      </div>
    </div>
  </div>
);

const Equipe: React.FC = () => {
  return (
    <div className="relative flex w-full h-[100vh] flex-col items-center justify-center gap-3 p-16 max-lg:p-8">
      <Title
        subtitle="Rencontrez Notre Équipe Dédiée"
        description="Découvrez les membres talentueux et passionnés qui collaborent pour créer une expérience éducative exceptionnelle."
      />
      <div className="mt-24 w-[90%] flex justify-around">
        <TeamMember
          name="Hamza Ihind"
          position="Développeur • Génie mécanique"
          description="Président de JEEA. Passionné par l'informatique et la psychologie, développeur web. Alliant expertise technique et compréhension humaine pour créer des expériences web exceptionnelles."
          imageSrc="/team/Ihind.jpg"
        />
        <TeamMember
          name="Zakaria Ahrbil"
          position="Designer • Génie Informatique"
          description="Responsable Media en JEEA. Passionné par LaTeX, la physique théorique, et le génie mécanique. Il excelle dans la communication scientifique, la modélisation et l'exploration des sciences appliquées."
          imageSrc="/team/Ahrbil.png"
        />
      </div>
    </div>
  );
};

export default Equipe;
