import { allPosts } from 'contentlayer/generated';

const Sitemap = () => {
  const posts = allPosts.map((post) => ({
    url: `https://harshsingh.xyz${post.slug}`,
    lastModified: post.published,
  }));

  const routes = ['', '/about', '/writing'].map(
    (route) => ({
      url: `https://harshsingh.xyz${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...posts];
}

export default Sitemap
