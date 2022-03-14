---
title: 'Building a Serverless Application with Next.js and CockroachDB!'
date: '2022-03-14'
formattedDate: '14 March, 2021'
description: 'CockroachDB serverless is a powerful, simple and scalable database which you can use your server applications with Next.js and Vercel. In this article, we will be going over the process of creating a simple serverless application using the above technologies from scratch.'
---

Hey there! Hope you're having a wonderful day or night - today, we'll be building a simple [Next.js] serverless application deployed on [Vercel], which uses [CockroachDB] for the backend serverless database.

Live app 👉 [musiclovers.vercel.app](https://musiclovers.vercel.app)
Repository 👉 [gitlab/cockroach-serverless-with-next.js](https://gitlab.com/harshhh-dev/cockroach-serverless-with-next.js)

Now, before we start, I'd like to answer the main question: out of all databases in the world, why are we using one named after a pest?

Well, let me break it down for you, here's a list of things which separate [CockroachDB] from other serverless databases, and what caused me to fall in love with it:

 1. Compatible with PostgreSQL ecosystem 
    * [CockroachDB] uses Postgres-compatible SQL, meaning that for many developers like me, we can use tools directly from the PostgreSQL ecosystem, and migrating isn't a pain. 
 2. You're not wasting a penny 
    * [CockroachDB's pricing](https://www.cockroachlabs.com/pricing/) is simple, and to the point. You get 5GB storage for free, which is plenty, along with $1 for every extra gigabyte of storage you use. Along with this, you get 250M request units monthly, and pay just $1 for every 10M extra request units. If this isn't a steal, I don't know what is.
 3. Avoid downtime 
    * Behind the scenes, your data is replicated *at least* 3 times - meaning that you won't face downtime for things like availability zone outages, database upgrades, and security patches. Even schema changes are online!

...and as a side-note: no, this isn't sponsored by CockroachDB - although I will not turn down any sponsorships 😛

# Introduction

Now that you know why I love [CockroachDB], let's get into building our actual app.

Here's what we'll be making:

![image](https://user-images.githubusercontent.com/69592270/158045734-205037ef-30a5-476a-87db-1d4318edc9fc.png)

A simple, clean and dark web app deployed to [Vercel] where people can share music they like!

# Getting Started

Let's kickstart our [Next.js] and [TypeScript](https://typescriptlang.org) project!

```zsh
npx create-next-app@latest --ts
# or
yarn create next-app --typescript
```

Let's start the server now.

```zsh
cd music-lovers
yarn dev
```

Your server should be running on [localhost](http://localhost:3000)

Let's now begin to write our [Prisma] data schema, and connect it with [CockroachDB].

Start by installing `prisma` and `@prisma/client`

```zsh
# Installs both as as development dependencies
yarn add prisma @prisma/client -D
```

Now, let's create a new file at `prisma/schema.prisma` and open it up.

Inside here, let's configure our datasource and client.

```js
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["cockroachdb"]
}

datasource db {
  provider = "cockroachdb"
  url      = env("DATABASE_URL")
}
```

Since [CockroachDB] is just a preview feature as of now, we'll have to put it under "preview features". Check the [Prisma list of supported databases](https://www.prisma.io/docs/reference/database-reference/supported-databases) if you're reading this post after a while, just to double-check if it's still in preview.

Right now, [Prisma] DOES NOT support migrating your schema into [CockroachDB], for that reason we'll have to write it ourselves in old-fashioned SQL and import that into our schema instead.

Now, let's get to work on our schema. Since app this will be simple, we'll only have a single schema called post. For this, create a SQL file at root called `dbinit.sql`.

```sql
CREATE TABLE post (
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    link VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

Now, let's create a [CockroachDB] database. Sign in, and hit "create cluster" on the clusters dashboard. Choose the "serverless" plan, with the region and provider of your choice, and name your cluster. 

Inside your cluster, we'll start by creating a SQL user. Hit "add user", name your user and generate the password. Store the password somewhere safe, as you'll need it later on. 

At top, hit "connect". Choose your operating system - I'm an [Arch Linux](https://archlinux.org/) user, so I'll go ahead with "Linux".

Follow the instructions on the modal - download the CRDB, and run the command, inputting in your password in the field which it asks.

Now, head into your terminal and run this to generate

```zsh
cockroach sql --url "<connection-string>" --file dbinit.sql
```

Amazing! It should've worked to create the table inside of [CockroachDB].

Now, let's pull your schema from there into your `schema.prisma` file. To do this, simply run `yarn prisma db pull`, and ta-da, you should see your schema generated in your file.

```js
model post {
  id        BigInt   @id(map: "primary") @default(autoincrement())
  title     String   @db.VarChar(255)
  content   String
  link      String   @db.VarChar(255)
  createdat DateTime @default(now())
}
```

Now that we have that generated, let's run `yarn prisma generate` to generate the [Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client).

Now, we have one final step before we can start using [Prisma] inside of our [Next.js] application.

Create a new file, `lib/prisma.ts`. Inside of this, we'll include a global way of accessing [Prisma] throughout our application.

```ts
import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') global.prisma = prisma

export default prisma
```

Cool! Now that we have our database setup, it's time to switch gears for a bit and add our custom global styles into this thing. Open `styles/globals.css` and customise the styling to your needs. Here's what I've got:

```css
:root {
  --bg: #131313;
  --main: #f1f1f1;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
  font-family: 'Fira Code', monospace;
  overflow-x: hidden;
  color: var(--main);
  background-color: var(--bg);
}

a {
  color: inherit;
  text-decoration: none;
}

::selection {
  background: var(--main);
  color: var(--bg);
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--main);
}
```

Since we're using a custom font, we need to create a new file under `pages` called `_document.tsx`, where we import the font.

```tsx
import Document, { Html, Head, Main, NextScript } from 'next/document'

class Doc extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Fira+Code&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Doc
```

Let's switch gears from styling, and go into our `index.tsx` to edit some things.

We'll remove the basic content, along with removing the imports up top for `next/image` and `next/head`.

```tsx
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

    </div>
  )
}

export default Home
```

Let's now create a new file, under our components directory called `Posts.tsx` and import [React](https://reactjs.org), our styles, and [Prisma].

```js
import { FC } from 'react'
import styles from '../styles/Home.module.css'
import { post as PostType } from '@prisma/client'
```

Inside of here, let's setup our component.

```tsx
const Posts: FC<{ posts: PostType[] }> = ({ posts }) => {
  return (
    <>
      {posts.map((post, i) => (
        <div className={styles.post} key={i}>
          <a href={`/post/${post.id}`} className={styles.title}>
            {post.title}
          </a>
          <p className={styles.content}>
            {post.content.length > 200
              ? post.content.substring(0, 200) + '...'
              : post.content}
          </p>
          <a
            href={post.link}
            target='_blank'
            rel='noreferrer'
            className={styles.link}
          >
            {post.link}
          </a>
        </div>
      ))}
    </>
  )
}
```

This basically takes in an array of posts as props, and maps them out.

Let's also add in some CSS to spice up this thing.

```css
.post {
  color: var(--main);
  border: solid 1px #303030;
  width: inherit;
  padding: 20px 25px;
}

.post:hover {
  border: 1px solid #5c5c5c;
}

.post:focus {
  border: 1px solid var(--main);
}

.title {
  font-size: 24px;
  font-weight: 900;
  text-decoration: none;
}

.content {
  margin: 30px 0;
}

.title:hover {
  text-decoration: underline;
}

.link:hover {
  text-decoration: underline;
}
```

Awesome! Now, let's go back into our `index.tsx` file and strap all of this together.

Import `lib/prisma` into this file, and run `prisma.findMany()` inside `getServerSideProps` to return all posts to display on the screen.

```ts
export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await prisma.post.findMany()

  return {
    props: {
      posts,
    },
  }
}
```

Now, add in the posts component here, passing the props which we got from our `getServerSideProps` function.

```tsx
// ...
import Nav from '../components/Nav'
import { post as PostType } from '@prisma/client'

const Home: NextPage<{ posts: PostType[] }> = ({ posts }) => {
  return (
    <Post posts={posts} />
  )
}
```

Beware! You might run into a JSON serialising problem. To fix this, simply install the following packages:

```zsh
yarn add superjson babel-plugin-superjson-next
```

Now, create a new file `.babelrc` and configure it for [superjson](https://github.com/blitz-js/babel-plugin-superjson-next):

```json
{
  "presets": ["next/babel"],
  "plugins": ["superjson-next"]
}
```

Cool! We don't have anything displayed yet as our database tables are empty, but in the meantime, we can style our page to make it look awesome.

Let's create a Navbar component. Create a new file at `components/navbar`. 

Let's import [React](https://reactjs.org), along with our styles and create a simple navigation bar.

```tsx
import { FC } from 'react'
import styles from '../styles/Home.module.css'

const Nav: FC = () => {
  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <h1>Share Music 🎷</h1>
      </Link>
      <Link href='/new'>
        <a className={styles.create}>New Post</a>
      </Link>
    </nav>
  )
}

export default Nav
```

Looking good! Let's add the navbar styles into our `Home.module.css` file.

```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  margin-bottom: 50px;
}

.create {
  padding: 15px;
  color: var(--main);
  border: solid 2px var(--main);
  transition: 0.1s linear;
}

.create:hover {
  background-color: var(--main);
  color: var(--bg);
}
```

Looking good! Now, let's import this into our main file. Our home component should now include two parent divs, and our other components. 

```tsx
const Home: NextPage<{ posts: PostType[] }> = ({ posts }) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Nav />
        <Post posts={posts} />
      </div>
    </div>
  )
}
```

Let's go back to our `Home.module.css` file and add in the styles for the parent components.

```css
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
}

.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
  min-width: 600px;
  margin-top: 20px;
}
```

Alright, that's enough styling for now. Let's create a new file under `pages` called `new.tsx`.

Let's create a new `Form` component inside our `components` directory which includes the form for creating a new post.

```tsx
import { FC } from 'react'
import styles from '../styles/New.module.css'

const Form: FC = () => {
  return (
    <form className={styles.form}>
      <input
        placeholder='Post title...'
        className={styles.input}
        type='text'
      />
      <input
        placeholder='Song link...'
        className={styles.input}
        type='url'
      />
      <textarea
        placeholder='Why you love this song...'
        className={styles.content}
      ></textarea>
      <button className={styles.create} type='submit'>
        Publish Post
      </button>
    </form>
  )
}

export default Form
```

Cool! Since this is a new page, we'll create a new file named `New.module.css` under the `styles` directory. This file will focus on styling the form components. 

```css
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: inherit;
}

.input {
  width: inherit;
  padding: 10px;
  background-color: var(--bg);
  outline: none;
  border: 1px solid #303030;
  font-size: 16px;
  font-family: 'Fira Code', monospace;
  color: var(--main);
  margin: 20px 0;
  padding: 20px;
  transition: 0.1s linear;
}

.input:hover,
.content:hover {
  border: 1px solid #5c5c5c;
}

.input:focus,
.content:focus {
  border: 1px solid var(--main);
}

.content {
  width: inherit;
  font-size: 16px;
  font-family: 'Fira Code', monospace;
  color: var(--main);
  background-color: var(--bg);
  outline: none;
  border: 1px solid #303030;
  padding: 20px;
  margin: 20px 0;
  resize: none;
  height: 500px;
}

.create {
  padding: 15px;
  font-family: 'Fira Code', monospace;
  font-size: 16px;
  outline: none;
  color: var(--main);
  background: var(--bg);
  border: solid 2px var(--main);
  transition: 0.1s linear;
}

.create:hover {
  background-color: var(--main);
  color: var(--bg);
  cursor: pointer;
}
```

Now, once we have that done, let's bring it all together in our `new.tsx` file.

```tsx
import type { NextPage } from 'next'

import styles from '../styles/Home.module.css'f

import Nav from '../components/Nav'
import Form from '../components/Form'

const New: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Nav />
        <Form />
      </div>
    </div>
  )
}

export default New
```

Whew! Now that that's over, let's work on making our form functional. For this, we'll create a file called `new.ts` under the `pages/api` directory.

Inside here, let's import [Prisma] and the required types from [Next.js].

```ts
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'
```

Now, inside our function, we'll get `title`, `content`, and `link` from the request's body.

We'll then wrap our `prisma.create` function in a `trycatch` block, returning a status of `200` with the appropriate JSON fields if it succeeds, or a status of `509` and our error if it doesn't.

We'll also cut off the last digit of the `post.id`, as it returns a `BigInt`. 

```ts
const newTrack = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, content, link } = req.body

  try {
    const post = await prisma.post.create({
      data: {
        title: title,
        content: content,
        link: link,
      },
    })

    const slug = post.id.toString().substring(0, post.id.toString().length)
    return res.status(200).json({ success: true, slug: slug })
  } catch (err) {
    return res.status(509).json({ error: err })
  }
}

export default newTrack
```

Now, to make all this work, let's go back to our `components/Form.tsx` file and create three new `refs` inside our `Form` function for getting different input fields.

```tsx
  const titleRef = useRef<HTMLInputElement>(null)
  const linkRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLTextAreaElement>(null)
```

Assign the refs to the appropriate elements inside of the component.

Let's create a function called `createPost` in which we use `fetch` to `POST` data to our API.

```ts
  const createPost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const raw = JSON.stringify({
      title: titleRef.current?.value!,
      link: linkRef.current?.value!,
      content: contentRef.current?.value!,
    })

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: headers,
      body: raw,
    }

    fetch('/api/new', requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error))
  }
```

To purify the content inside of our input fields, let's use [dompurify](https://www.npmjs.com/package/dompurify).

```ts
    const raw = JSON.stringify({
      title: dompurify.sanitize(titleRef.current?.value!),
      link: dompurify.sanitize(linkRef.current?.value!),
      content: dompurify.sanitize(contentRef.current?.value!),
    })
```

Let's also import `next/router` and setup the `useRouter` hook to redirect after the user creates a post.

```ts
  const router = useRouter()

  const createPost = (e: FormEvent<HTMLFormElement>) => {
  // ...

  fetch('/api/new', requestOptions)
    .then((response) => response.json())
    .then((result) => router.push(`/post/${result.slug}`))
    .catch((error) => console.log('error', error))
  }
```

Now, in our form element, we should add in an `onSubmit` function, where we call this method.

```tsx
<form className={styles.form} onSubmit={(e) => createPost(e)}>
```

Let's try to create a new post now. Fill in all the fields, and hit "Publish Post" when you're done. 

It'll redirect you to another page and send a 404 error, as we haven't built out the page yet. However, if we check our home page we should be able to see the post is created indeed! Give yourself a pat on the back if you've made it this far :)

So, what're we waiting for? Let's move onto the final step of this project, which is creating the "View" page.

Let's pass in the post as props, and build our component according to the contents of the post.

```tsx
import { FC } from 'react'
import styles from '../styles/View.module.css'
import { post as PostType } from '@prisma/client'

const View: FC<{ post: PostType }> = ({ post }) => {
  return (
    <div className={styles.post}>
      <h1>{post.title}</h1>
      <div className={styles.info}>
        <a
          href={post.link}
          target='_blank'
          rel='noreferrer'
          className={styles.link}
        >
          {post.link}
        </a>
        <p>Written on {post.createdAt.toLocaleDateString()}</p>
      </div>
      <p>{post.content}</p>
    </div>
  )
}

export default View
```

...and let's add in our CSS wonderful styles:

```css
.post {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info {
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
}

.link:hover {
  text-decoration: underline;
}
```

Brilliant! Now, let's head back to our `pages` directory and create a new file at `/post/[id].tsx`. 

Inside here, create the `PostView` component where our `Nav` and `View` components come together to form the page. Pass in `post` as a prop for this top-level component, as we'll be retrieving that from `getServerSideProps`

```tsx
// ...
import styles from '../../styles/Home.module.css'

import Nav from '../../components/Nav'
import View from '../../components/View'

import { post as PostType } from '@prisma/client'

const PostView: NextPage<{ post: PostType }> = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Nav />
        <View post={post} />
      </div>
    </div>
  )
}
```

Let's move onto getting the post from our database inside `getServerSideProps` now. We'll use the `BigInt` constructor to turn our params into the `BigInt` type, using that to fetch a unique post.

```ts
export const getServerSideProps: GetServerSideProps = async (context) => {
  const post = await prisma.post.findUnique({
    where: {
      id: BigInt(context.params!.id!.toString()),
    },
  })

  return {
    props: {
      post,
    },
  }
}
```

Magnificent! Let's try opening up [localhost:3000/post/1](http://localhost:3000/post/1) - it should display the content of our post! If we try to create a new post now, it should display the contents of that too.

...and we're finished! WHOO-HOO! If you made it down here, good work! I'd love to hear your thoughts in the comments below.

Important links:

Live app 👉 [musiclovers.vercel.app](https://musiclovers.vercel.app)
Repository 👉 [gitlab/cockroach-serverless-with-next.js](https://gitlab.com/harshhh-dev/cockroach-serverless-with-next.js)

This post took me a long time to write and create. If you enjoyed it, please be sure to give it a "❤" and follow me for similar posts. 

With that being said, I'll conclude this by saying that serverless computing is amazing, and has a lot of potential. I'm planning to write another post sometime soon on when you should or shouldn't use a serverless database, so stay tuned and follow for more!

Enjoy your day, goodbye 👋!

[Next.js]: https://nextjs.org
[Vercel]: https://vercel.com
[CockroachDB]: https://cockroachlabs.com/serverless
[Prisma]: https://prisma.io
