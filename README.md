![image](https://hxrsh.in/banner.png)

<p align="center">
  <a href="https://hxrsh.in/">
    <h2 align="center">Harsh Singh</h2>
  </a>
</p> 
<p align="center">15yo web developer and designer</p>
<p align="center">
  <a href="https://hxrsh.in">Home</a>
    ·
  <a href="https://hxrsh.in/ama">Ask Me Anything</a>
    ·
  <a href="https://hxrsh.in/uses">Uses</a>
    ·
  <a href="https://hxrsh.in/stats">Stats</a>
    ·
  <a href="https://hxrsh.in/blog">Blog</a>
 </p>

# 🚀 Quickstart

Run the website locally

```
git clone https://github.com/harshhhdev/harshhhdev.github.io.git
```

## Setting up the project

```bash
cd harshhhdev.github.io

# Install deps
yarn
```

## Setting up the environment

Now, rename `.env.EXAMPLE` to `.env`

First, create a new database from [CockroachDB serverless](https://cockroachlabs.cloud) and paste the connection string in `DATABASE_URL`.

Register a new [Spotify application](https://developer.spotify.com/), and paste your credentials onto the proper fields. Next, obtain a `REFRESH_TOKEN` by following [this tutorial](https://leerob.io/blog/spotify-api-nextjs).

Finally, head over onto [GitHub](https://github.com), and go into [Settings](https://github.com/settings) > [Developer Settings](https://github.com/settings/apps) > [OAuth apps](https://github.com/settings/developers) and hit "New OAuth App". Configure the app to your needs, and copy/paste the information onto your `.env` file accordingly.

## Starting server

```bash
yarn dev
```

Server should now be running on [localhost](https://localhost:3000)

# 🔨 Tools Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://typescriptlang.org)
- [TailwindCSS](https://tailwindcss.com/)
- [CockroachDB](https://cockroachlabs.com/)
- [Framer Motion](https://framer.com/motion)
- [Prisma](https://prisma.io/)
- [SWR](https://swr.vercel.app/)
- [contentlayer](https://www.contentlayer.dev/)
- [NextAuth](https://next-auth.js.org/)
- [Feather Icons](https://feathericons.com/)
- [Splitbee](https://splitbee.io/)
- [rehype](https://github.com/rehypejs/rehype)
- [Prettier](https://prettier.io)
- [ESLint](https://eslint.io)

# 🌎 Adding Translations

Interested in contributing to this repository? Add translations for a language you know!

First, go into the `public` directory and create a new folder with the code of your language. Inside that, create a new file called `common.json`. Paste the file from `public/en/common.json` to get a template of what the content in English would be, then begin to translate it into the language of your choice!

Special thanks to:

- [FleshMobProductions](https://github.com/FleshMobProductions) and [Yän](https://twitter.com/YaenGames) for German translations
- [CodeMyst](https://github.com/codemyst) for Serbian translations
- [Jirushi](https://twitter.com/Jirushi_I) for French translations

# 🤞 Contributing

After setting up the project, and making changes:

```git
git add .
git commit -m "commit message"
git push YOUR_REPO_URL YOUR_BRANCH
```
