---
title: 'Oponion'
description: 'Creating, voting, & sharing polls made simple'
link: 'https://oponion.vercel.app/'
---

# The Idea

At school, we often do surveys & stuff in different classes. Generally, for this, we generally tend to learn towards/use [TypeForm](https://typeform.com) & [Google Forms](https://forms.google.com). [Google Forms](https://forms.google.com) is decent, & I really love [TypeForm](https://typeform.com) for it's intuitive form experience. Although, I feel like a new user has to go through a longer process - and it isn't exactly the best for creating short & fun polls. Having too much time during Summer Break, I decided to take up the project.

# Planning 

As mentioned above, I wanted to keep make it so that the user doesn't have to go through a long process to create polls. That's why, when you open [Oponion](https://oponion.vercel.app), you directly go to the poll creation form. 

After that, everything is rather self-explanatory. Just type a title, and add/remove options. I added a handy chart visualisation tool at the bottom to help you visualise your poll's chart. My goal with this project was to keep everything to the point, & nothing more.

I decided I wasn't going to create a seperate backend for this project either - primarily because I believe this will just make things more complicated than they need to be. I used the handy [Firebase Realtime Database](https://firebase.google.com/products/realtime-database), which integrated easily in my frontend.

# Tech Stack

For this project, I decided to go with the handy [Next.js](https://nextjs.org) & the amazing [Stitches](https://stitches.dev) CSS-in-JS library to build the frontend. 

As usual, I used [TypeScript](https://typescriptlang.org) for it's added benefits over [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript). Once you get a habit of using [TypeScript](https://typescriptlang.org) for projects, using [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) just feels weird.

For charts & visualisation, I was initially planning to use [Chart.js](https://chartjs.org) due to it's widespread popularity amongst the JavaScript community. However, I found a gem called [Apache ECharts](https://echarts.apache.org/), and I instantly fell in love with the customisation & the amazing look/feel.

As mentioned above, I wanted to try out something new for the database this time. This was the first time that I was building a "fullstack" application without a backend, so I decided to go with the [Firebase Realtime Database](https://firebase.google.com/products/realtime-database), which easily integrated with my project & worked like a charm!

# Deployment 

For deploying this application, I used [Vercel](https://vercel.com). I absolutely LOVE everything about [Vercel](https://vercel.com), and since I built my application with Next.js](https://nextjs.org), [Vercel](https://vercel.com) was the obvious choice for deploying. I love how easy [Vercel](https://vercel.com) has made my life - free & automated deployments, amazing navigation & control, along with automated deployments with [GitHub](https://github.com) 
