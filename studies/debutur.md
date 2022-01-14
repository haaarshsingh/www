---
title: 'Debutur'
description: 'Easily create, and personalise your portfolio'
link: 'https://dbtr.vercel.app'
graphic: 'https://media.discordapp.net/attachments/825155185680711680/931679886412746822/Debutur.png'
---

# The Idea

So, during the [MongoDB x DEV Atlas Hackathon](https://dev.to/devteam/announcing-the-mongodb-atlas-hackathon-on-dev-4b6m), I was working on another project of mines, [Tastify](https://tastify.vercel.app). However, when I went to try and deploy this project, I found out that the [Spotify Web API](https://developer.spotify.com) didn't allow user authentication with [Spotify](https://spotify.com) unless you explicitly ask for a quota extension request. In their quota extension request policy, they state that they do not grant quota extensions to hobby projects.

With little time on my hands, I came up with the idea of [Debutur](https://debutur.vercel.app). Now, not everyone has enough time to build their own interactive, vibrant & responsive portfolios like I did. If we want to build something quick and easy, some options we have are [Wix](https://wix.com) - I'm sure we've all seen at least one advertisement about it on [YouTube](https://www.youtube.com/watch?v=grLR_Og45Yw). I really dislike [Wix](https://wix.com) - there's ads everywhere, and they don't let you forget for even a second that the website you're viewing is built with [Wix](https://wix.com). If you want to customise anything, be ready with your wallet. Generally, people who can't build their portfolios create a [Linkedin](https://linkedin.com) page, although, that comes with it's fair share of limitations. Which is why I decided to make [Debutur](https://debutur.herokuapp.com). I wanted to create an easy way for people to link their different accounts in a single page, without having to write a line of code.

# User Interface

In this project, I wanted to make the UI look clean, and make use of animations.

I decided to use a minimal and clean sans-serif font, settling for [Averta](https://thedesignersfoundry.com/averta) by [The Designers Foundry](https://thedesignersfoundry.com/). I really love the minimal and clean look of the characters, and it's readable at the same time.

I went with a casual white and sky blue themed interface, as I planned on using animations and other effects to further spice up the website. For animations, I used [Framer Motion](https://framer.com/motion) and [react-spring](https://react-spring.io/) for the homescreen parallax.

This website also allows the user to customise their page with 6 different themes. For the dark theme, I took inspiration from the [Material Design Dark Theme](https://material.io/design/color/dark-theme.html) page, which has a guide on how to make an accessible and soothing dark theme. I ended up applying the same concept for the the Aqua theme, but to different colour shades. I used online images I found off of [Pintrest](https://za.pinterest.com/raffeesiddiqa04/neon-theme/) to come up with a cool and modern colour scheme. The purple theme was actually inspired by the [Shades of Purple](https://vscodethemes.com/e/ahmadawais.shades-of-purple) VSC theme, created by [Ahmad Awais](https://github.com/ahmadawais). There's a cool website called [Nord](https://www.nordtheme.com/), which is dedicated to the artic, north-bluish colour pallete called "Nord" which helped me create the Nord theme.

# Tech Stack

Taking a look at thde insides of this project, as usual, I decided to go serverless with the amazing [Next.js](https://nextjs.org/) with [TypeScript](https://typescriptlang.org). I also used [next-auth](https://next-auth.js.org/) for authenticating users with the [Twitter](https://next-auth.js.org/providers/twitter) and [GitHub](https://next-auth.js.org/providers/github) providers. Once users were authenticated their profiles would be stored in [MongoDB Atlas](https://mongodb.com/atlas) with the help of the powerful [Prisma ORM](https://prisma.io/). Even though I'm more of a [PostgreSQL](https://www.postgresql.org/) fan, I had to use [MongoDB Atlas](https://mongodb.com/atlas) because of the hackathon.

As mentioned above, to create cool and interactive animations I used [Framer Motion](https://framer.com/motion) and [react-spring](https://react-spring.io/) for the homescreen parallax.

# Deployment

As this was a [Next.js](https://nextjs.org) project, I decided to use the amazing [Vercel](https://vercel.com) as it's specifically designed for it. I am a huge fan of [Vercel](https://vercel.com), and am forever greatful for their free deployment platform allowing me to deploy my app with ease.
