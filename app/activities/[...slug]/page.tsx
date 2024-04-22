import { posts } from "#site/content";
import { MDXContent } from "@/lib/mdx/mdx-components";
import { notFound } from "next/navigation";
import Image from "next/image";
import "@/styles/mdx.css";

import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Title from "@/components/shared/Title";
import { Badge } from "@/components/ui/badge";
interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post: any) => post.slugAsParams === slug);

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <div className="relative flex w-full h-[100%] flex-col items-center justify-center gap-3 p-32 max-lg:p-8">
      <Title subtitle={post.title} description={post.description || ""} />
      <div className="flex gap-2 mt-4">
        {post.tags?.map((tag, index) => (
          <Badge key={index} className="text-md" variant={"outline"}>
            {tag}
          </Badge>
        ))}
      </div>
      <Image
        src={post.image || ""}
        alt={post.title}
        width={1300}
        height={100}
        className="my-8"
      />
      <article className="prose dark:prose-invert max-w-5xl mx-auto">
        <MDXContent code={post.body} />
      </article>
    </div>
  );
}
