import { Badge } from "@/components/ui/badge";
import React from "react";
import Image from "next/image";

interface ServiceProps {
  tags: string[];
  title: string;
  description: string;
  estimationDH: number;
  estimationJrs: number;
}

const ServiceCard = ({
  tags,
  title,
  description,
  estimationDH,
  estimationJrs,
}: ServiceProps) => {
  return (
    <div className="flex flex-col w-full p-8 gap-4 border border-amber-300 rounded-2xl justify-between">
      <div className="flex flex-col w-full gap-4">
        <div className="w-full flex justify-between">
          <div className="flex gap-2">
            {tags.map((item, key) => (
              <Badge key={key} variant={"default"} className="text-sm">
                {item}
              </Badge>
            ))}
          </div>
          <div className="label flex gap-2">
            View more{" "}
            <Image
              src={"/assets/arrow-up-right.svg"}
              alt="image"
              width={18}
              height={18}
            />
          </div>
        </div>
        <h1 className="card-title mt-2">{title}</h1>
        <p className="card-description">{description}</p>
      </div>
      <div className="mt-4 flex gap-12 justify-start">
        <div className="flex gap-2 items-center card-description font-semibold">
          <Image src="/assets/price.png" alt="price" width={28} height={28} />{" "}
          {estimationDH} DH
        </div>
        <div className="flex gap-2 items-center card-description font-semibold">
          <Image src="/assets/clock.png" alt="clock" width={28} height={28} />{" "}
          {estimationJrs} Jours
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
