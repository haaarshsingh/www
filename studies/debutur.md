---
title: 'Debutur'
description: 'Easily create, and personalise your portfolio'
link: 'https://debutur.herokuapp.com'
---

# The Idea

Now, not everyone has enough time to build their own interactive, vibrant & responsive portfolios like I did. If we want to build something quick & easy, some options we have are [Wix](https://wix.com) - I'm sure we've all seen at least one advertisement about it on [YouTube](https://www.youtube.com/watch?v=grLR_Og45Yw). I really dislike [Wix](https://wix.com) - there's ads everywhere, and they don't let you forget for even a second that the website you're viewing is built with [Wix](https://wix.com). If you want to customise anything, be ready with your wallet. Generally, people who can't build their portfolios create a [Linkedin](https://linkedin.com) page, although, that comes with it's fair share of limitations. Which is why I decided to make [Debutur](https://debutur.herokuapp.com). I wanted to create an easy way for people to link their different accounts in a single page, without having to write a line of code.

# User Interface

In this project, I wanted to make the UI look clean, cute & appealing to users. 

I decided to use a "cute" sans-serif font, settling for [Poppins](https://github.com/itfoundry/Poppins) by [Indian Type Foundry](https://www.indiantypefoundry.com/). I really love the cute look of the characters, & it's readable at the same time.

I went with a cool looking white & purple colour scheme, using a gradient (which is mixed in with some blue) for buttons & icons. 

I also got some sweet free 3D Illustrations from the [Sally 3D Illustration Pack](https://www.figma.com/community/file/890095002328610853) in the [Figma Community](https://www.figma.com/community/), livening up the visuals even more. 

I wanted the user to be able to customise their portfolios as much as they can, so, I decided to offer 5 different colourful & vibrant themes depending on your preference. 

# Tech Stack

Taking a look at thde insides of this project, as usual, I decided to build the backend with [Node.js](https://nodejs.org) as it happens to be the backend framework I'm currently most comfortable in.

For the web server, I decided to use [Express](https://expressjs.com). Looking at back at this now, I've become a fan of [Fastify](https://fastify.io), & plan to replace [Express](https://expressjs.com) pretty soon.

For the user authentication, I decided to go with the amazing [Passport.js](https://passportjs.org). I decided to use the [Auth0 platform authentication strategy](https://www.passportjs.org/packages/passport-auth0), as I found it best-suited for this project.

Although I'm a big fan of [Next.js](https://nextjs.org), I decided to use the [EJS template engine](https://ejs.co/) as I wasn't exactly the best with [React](https://reactjs.org) at the time of making this. 

# Deployment 

As usual, I decided to go with [Heroku](https://heroku.com). Since this was a [Node.js](https://nodejs.org) project, I didn't want to spend anything out of my own pocket to host this application, so I decided to go with [Heroku](https://heroku.com) as it provides free Dynos for up to 2 years to host your applications.