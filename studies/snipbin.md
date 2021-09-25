---
title: 'SnipBin'
description: 'Lightweight website to paste code snippets'
link: 'https://snipbin.herokuapp.com'
---

# The Idea

Right now, to paste/share code snippets, we don't have many good options. The most common choice is [PasteBin](https://pastebin.com), but I very much dislike it. There's LARGE ads everywhere, the layouts are cluttered & the UI feels like it's from 2000s. Using it is not a very intuitive experience to say the least. Inspired by this, I decided to make my own code/snippet sharing website called [SnipBin](https://snipbin.herokuapp.com) which aims to fix all my problems with [PasteBin](https://pastebin.com).

# Planning

First, I decided to survey my AP Computer Science class (30 students) on their thoughts on the most popular code pasting tools ([PasteBin](https://pastebin.com), [GitHub Gist](https://gist.github.com) & [ControlC](https://controlc.com)).

As for [PasteBin](https://pastebin.com), 100% agreed that there were way too many ads. Some started comparing [PasteBin](https://pastebin.com) to a torrent website, due to the endless amount of ads. 

An additional 60% said that the [PasteBin](https://pastebin.com)'s layout was confusing & cluttered all over the place. When asked about the site's colours, 76% of students said that the colour scheme worked looked acceptable WITHOUT ADS.

Overall, when asked to rate this [PasteBin](https://pastebin.com) on a 5-star scale, the average rating was 1.3

Moving onto [GitHub Gist](https://gist.github.com), many of the students seemed to enjoy this website as compared to [PasteBin](https://pastebin.com). 97% of people surveyed liked the colours in their preferred colour scheme (dark, light & dim). This website also didn't have ads, providing users with a much better pasting experience.

However, the major drawback of this is the requierment for a GitHub account before you can paste anything. When asked, 93% said they weren't a fan of creating new accounts everytime you want to do something. 

This time, when the students were asked to rate [GitHub Gist](https://gist.github.com) on a 5-star scale, the average rating was 3.9

Lastly, let's move onto [ControlC](https://controlc.com).

When asked about this website, the students also had a generally negative output. 86% of students disliked the layout of the website, and this time compared the look and feel to a website from 2005. Though this website had no ads, the colour scheme had a general negative output. 80% disliked the bright colours & the overall colour pallete used throughout the website. 

Asking them to rate this website on a 5-star scale, the average rating this time was 1.6

Learning from all the above, I decided I wanted to keep my website simple & focus heavily on the visuals. 

I didn't want to add features like signing in & user directories, because it seemed people generally didn't use these websites too rigourously and this was just an extra step for them. I also had to focus on the simplicity throughout the design and make sure the end experience wasn't frustrating for users.

# User Interface

For the UI, I decided to keep things as simple as possible.

I decided to go with a dark monochromatic colour scheme, sticking with three main principles for the layout. Organisation, simplicity, & accessibility.

I decided to go with the [Lexend](https://www.lexend.com) font, created by Educational Therapist Dr. Bonnie Shaver-Troup, which aims to be the most readable font for the general population.

For the monospaced font, I decided to go with [JetBrains Mono](https://www.jetbrains.com/lp/mono/), which is a free and open-source typeface developed by [JetBrains](https://www.jetbrains.com/) for developers.

It's characters are designed for a faster & better reading experience, and it has 139 code-specific ligatures.

To build the UI components, I used my favourite CSS-in-JS tool called [Stitches](https://stitches.dev).

# Tech Stack

Now, let's take a look at this project from a technical standpoint.

To build the backend, I decided to use [Node.js](https://nodejs.org). Not because I'm a huge fan of it or anything, but currently it's the backend framework I'm most comfortable with and the one I've been using for the longest time. 

Since this was going to be a larger project, I used [TypeScript](https://typescriptlang.org) due to it's additional features being helpful in the long-run.

For the datbase, I used [PostgreSQL](https://postgresql.org) as I'd never used it & heard positive feedback about it. For the ORM, I decided to go with my all-time favourite [Prisma](https://prisma.io).

A major goal of this project for me was to try new things. This time around, instead of using [Express](https://expressjs.com) I decided to try out [Fastify](https://www.fastify.io/) since I've heard it provides far better performance. For the GraphQL client, I decided to use [Altair](https://altair.sirmuel.design/) & absolutely loved it. The look & feel of it makes it far more fun to work with than [GraphQL Playground](https://github.com/graphql/graphql-playground).

Moving onto the frontend, I decided to build the frontend in [Next.js](https://nextjs.org) as over time I've become really comfortable with it. For styling, I decided to build my own components using a new tool called [Stitches](https://stitches.dev) (same people who made [Radix UI](https://radix-ui.com)). 

For the GraphQL client, I decided to switch from [Apollo GraphQL](https://www.apollographql.com/) to [URQL](https://formidable.com/open-source/urql/) due to performance reasons. I had a really positive experience with this aswell, & plan to switch permanently.

# Deployment 

For deploying this application, I decided to go with [Heroku](https://heroku.com). It offers free hosting for Node.js & React applications, and I didn't really want to spend anything out of my own pocket on this project.
