import { posts } from "#site/content";
import Title from "@/components/shared/Title";
import { PostItem } from "./post-item";
import Image from "next/image";

// import { QueryPagination } from "@/components/query-pagination";
// import { Tag } from "@/components/tag";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/utils";
// import { Metadata } from "next";

export default async function BlogPage() {
  const displayPosts = posts;

  return (
    <main className="flex">
      <Image
        src="/assets/pattern.png"
        alt="pattern"
        width={1700}
        height={1080}
        className="relative opacity-60 dark:opacity-5"
      />
      <div className="absolute flex w-full h-full flex-col items-center gap-24 p-32 max-lg:p-16">
        <Title
          subtitle="Découvrez nos Initiatives: Actualités de la JEEA"
          description="Explorez nos dernières initiatives et événements passionnants organisés par la Junior Entreprise ENSA Agadir (JEEA) à l'ENSA Agadir. Restez à jour avec nos activités entrepreneuriales, ateliers de formation et collaborations inspirantes avec l'industrie."
        />
        <div className="w-full flex items-center justify-center">
          {displayPosts?.length > 0 ? (
            <ul className="grid grid-cols-3 gap-20">
              {displayPosts.map((post: any) => {
                const { slug, date, title, description, tags, image } = post;
                return (
                  <li key={slug}>
                    <PostItem
                      image={image}
                      slug={slug}
                      date={date}
                      title={title}
                      description={description}
                      tags={tags}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Nothing to see here yet</p>
          )}
        </div>
      </div>
    </main>
  );
}
