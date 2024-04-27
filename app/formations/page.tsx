import { formations } from "#site/content";
import Title from "@/components/shared/Title";
import { PostItem } from "./post-item";
import Image from "next/image";

// import { QueryPagination } from "@/components/query-pagination";
// import { Tag } from "@/components/tag";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/utils";
// import { Metadata } from "next";

export default async function BlogPage() {
  const displayPosts = formations;

  return (
    <div className="relative page-config">
      <Title
        subtitle="Découvrez nos Initiatives: Actualités de la JEEA"
        description="Explorez nos dernières initiatives et événements passionnants organisés par la Junior Entreprise ENSA Agadir (JEEA) à l'ENSA Agadir. Restez à jour avec nos activités entrepreneuriales, ateliers de formation et collaborations inspirantes avec l'industrie."
      />
      <div className="w-full mt-12 flex items-center justify-center">
        {displayPosts?.length > 0 ? (
          <ul className="grid grid-cols-3 gap-20 max-lg:grid-cols-2 max-md:grid-cols-1">
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
  );
}
