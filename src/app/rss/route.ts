import allPosts from "../writing/posts";

export const GET = async () => {
  const posts = await allPosts();

  const itemsXml = posts
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .map(
      (post) =>
        `<item>
          <title>${post.metadata.title}</title>
          <link>https://harshsingh.xyz/writing/${post.slug}</link>
          <description>${post.metadata.summary}</description>
          <pubDate>${new Date(
            post.metadata.publishedAt,
          ).toUTCString()}</pubDate>
        </item>`,
    )
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>Harsh Singh's Writing</title>
        <link>https://harshsingh.xyz</link>
        <description>Infrequent posts about design and tech</description>
        ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, { headers: { "Content-Type": "text/xml" } });
};
