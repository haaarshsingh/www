import allPosts from "./writing/posts";

export default () => {
  const posts = allPosts().map((post) => ({
    url: `https://harshsingh.xyz/writing/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ["", "/craft", "/writing"].map((route) => ({
    url: `https://harshsingh.xyz${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...posts];
};
