---
title: 'SketchMessage'
description: 'Create and communicate through drawings'
link: 'https://sketch-message.herokuapp.com/'
---

# The Idea

I was just checking out my [Discord](https://discord.gg/nHAknNmA49), where I saw one of my friends was getting into coding. He'd just made a chat application with [React](https://reactjs.org) & [Firebase](https://firebase.google.com) following a [Fireship Tutorial](https://www.youtube.com/watch?v=zQyrwxMPm88&t=233s) - the usual. Later on, we decided to organise a small Hackathon for the [Holi Festival](https://en.wikipedia.org/wiki/Holi) in our friends group, where we would each work by ourselves to create something related to the theme of "Colours". Using my friend's project as inspiration, I decided I wanted to try & remix his project by adding a special twist - instead of typing you could only draw to communicate with others. 

# Planning 

I came up with this idea rather late, after a few failed projets, and I didn't have a lot of time left. 

I decided to create a basic working prototype on day one, with zero-styling.  

Taking into consideration that I didn't have much time, along with a load of homework due Monday, I kept the project research phase of this project rather short. I went to some popular drawing apps and analysed their functionality & design. I decided that I wanted to keep the project relatively simple and just add a "draw" feature where the user can draw with his mouse or finger. I didn't want to over-complicate the project with features such as text & inserting images -- they had to share the drawing board with others after all!

# Tech Stack

Since this project wasn't planned to be long-term, I decided to keep the tech-stack relatively simple. 

Although I'm a big fan of CSS-in-JS libraries (especially [Stitches](https://stitches.dev)) & [Next.js](https://nextjs.org) - I decided to keep this app simple & use pure HTML & CSS to build out the frontend.

To build the backend, I decided to use [Node.js](https://nodejs.org) with [Express](https://expressjs.com). At the time, it felt as the easiest way to kickstart the project, and it's the only backend framework I've used rigorously. Also, in general, [Node.js](https://nodejs.org) is considered to be a good chioce for building scalable and fast realtime appliations. Now, I've started using [Fastify](https://fastify.io) as my web framework & I really love it - I plan to redo this application with a more modern technology stack sometime in the near future. For the web socket, I decided to use [Socket.io](https://socket.io) as I found it the easiest to integrate with my project. [Socket.io](https://socket.io) however, I later learned that this probably wasn't the best choice due to it's unnecessary binary overhead & callack centric-design.

# Deployment 

For deploying this application, I decided to yet again go with [Heroku](https://heroku.com). It's become my go-to for deploying small [Node.js](https://nodejs.org) applications due to it's simplicity & ease-of-use.
