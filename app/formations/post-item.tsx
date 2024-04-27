import { Calendar } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn, formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface PostItemProps {
  image: string;
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
}

export function PostItem({
  image,
  slug,
  title,
  description,
  date,
  tags,
}: PostItemProps) {
  return (
    <main className="flex flex-col gap-6 py-3 max-w-[475px]">
      <Link href={"/" + slug}>
        <Image src={image} alt={title} width={475} height={475} />
      </Link>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <p className="label">
            Equipe JEEA • <time dateTime={date}>{formatDate(date)}</time>
          </p>
          <Link href={"/" + slug}>
            <div className="flex items-center justify-between">
              <p className="card-title">{title}</p>
              <Image
                src="/assets/arrow-up-right.svg"
                alt="title"
                width="24"
                height="24"
              />
            </div>
          </Link>
          <p className="card-description">{description}</p>
        </div>
        <div className="flex-wrap gap-12">
          {tags?.map((tag, index) => (
            <Badge key={index} variant={"outline"} className="text-sm m-1">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </main>
  );
}
