import "./post.css";

import { FC } from "react";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { format } from "@/components/writing/Main";
import MDX from "@/components/writing/post/MDX";
import { FiCornerUpLeft } from "react-icons/fi";
import Link from "next/link";
import Header from "@/components/writing/post/Header";
import allPosts from "../posts";

const fira = localFont({
  src: [{ path: "../../fonts/fira/regular.woff2", weight: "400" }],
  variable: "--font-mono",
});

export const generateStaticParams = async () => {
  const posts = allPosts();
  return posts.map((post) => ({ slug: post.slug }));
};

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts().find((post) => post.slug === params.slug);
  if (!post) return;

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? image
    : `https://harshsingh.xyz/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(publishedTime)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://harshsingh.xyz/writing/${post.slug}`,
      images: [{ url: ogImage }],
      author: "Harsh Singh",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
};

export default (({ params }) => {
  const post = allPosts().find((post) => post.slug === params.slug);
  if (!post) notFound();

  return (
    <section className={fira.variable}>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://harshsingh.xyz${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `https://harshsingh.xyz/writing/${post.slug}`,
            author: { "@type": "Person", name: "Harsh Singh" },
          }),
        }}
      />
      <Link
        href="/writing"
        className="exclude flex h-8 items-center text-neutral-500"
      >
        <FiCornerUpLeft className="h-4 w-4" />
        <span className="ml-1.5 text-sm">Writing</span>
      </Link>
      <Header
        title={post.metadata.title}
        date={format(post.metadata.publishedAt)}
        slug={params.slug}
      />
      <article className="prose animate-children">
        <MDX source={post.content} />
      </article>
    </section>
  );
}) as FC<{ params: { slug: string } }>;
