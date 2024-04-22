import Title from "@/components/shared/Title";
import React from "react";
import ServiceCard from "./ServiceCard";
import { Services } from "@/components/database/services";

const page = () => {
  return (
    <div className="page-config">
      <Title
        subtitle="Services Professionnels pour Vos Projets"
        description="Découvrez une sélection de services haut de gamme proposés par notre association. Bénéficiez de notre expertise en informatique, design et rédaction pour mener à bien vos projets avec excellence et efficacité."
      />
      <div className="mt-24 grid grid-cols-2 gap-16 max-lg:grid-cols-1">
        {Services.map((item, index) => (
          <ServiceCard
            key={index}
            title={item.service}
            description={item.description}
            tags={item.tags}
            estimationDH={item.estimationDH}
            estimationJrs={item.estimationJours}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
