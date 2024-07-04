import Link from "next/link";
import getPosts from "@/app/writing/posts";

export const format = (date: string) => {
  const [year, month, day] = date.split("-");
  return `${month}/${day}/${year.slice(2)}`;
};

export default () => {
  const posts = getPosts();

  return (
    <main className="animate-children flex flex-col gap-y-4">
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          )
            return -1;
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="exclude group"
            href={`/writing/${post.slug}`}
          >
            <div className="flex items-end justify-between">
              <div>
                <h3 className="flex items-center tracking-tight underline decoration-neutral-300 transition-colors group-hover:decoration-neutral-500">
                  {post.metadata.title}
                </h3>
                <span className="mt-1 text-sm tracking-tight text-neutral-500">
                  {post.metadata.summary}
                </span>
              </div>
              <span className="text-sm tracking-tight text-neutral-500">
                {format(post.metadata.publishedAt)}
              </span>
            </div>
          </Link>
        ))}
    </main>
  );
};
