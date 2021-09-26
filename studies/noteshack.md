---
title: 'NoteShack'
description: 'An open-source full-stack project boilerplate'
link: 'https://www.figma.com/file/8UOFAwJvAZCXda3s3zXdO0/NoteShack'
---

# The Idea

When I was browsing some online project templates, I came across a project called [Bedrock](https://bedrock.mxstbr.com/), which helps you jumpstart your next Saas product by providing a boilerplate. It's a modern full-stack [Next.js](https://nextjs.org) & [GraphQL](https://graphql.org) boilerplate with user authentication, subscription payments, teams, invitations, emails and everything else you need. That sounds amazing, but it comes with a heavy price tag. $450 -- or 33,200 INR. In short, [Bedrock](https://bedrock.mxstbr.com/) seemed like spending a large sum of money that you can easily make with low cost. I decided I wanted to make a free & open-source alternative in the form of a note-taking application.

# Planning

⚠️ Note: This project is still in-progress

Because this was going to be a boilerplate, I had to think of the DX first thing. I mainly work on most of my projects alone, and I'm not really big on the open-source community, so this was a new experience for me.

I tried my best to keep the code neat, and avoid [spaghetti code](https://www.bmc.com/blogs/spaghetti-code) as best as I could. I made sure that all the APIs I integrated with the project are easily removable, so that the project can meet the user's needs easily. For some tools such as [ESLint](https://eslint.io) & [Prettier](https://prettier.io), thi was relatively easy to do. However, this ended up being much harder than I expected for tools like [TypeScript](https://typescriptlang.org) & [Prisma](https://prisma.io). In the end, I also ended up learning the importance of a solid & structured folder structure while developing long-term applications.

# User Interface

Once again, as mentioned by [@mxstbr](https://twitter.com/mxstbr) in his [Bedrock](https://bedrock.mxstbr.com/) intro video, the user generally changes all styling included with the appliation. However, if I wanted to provide the user with a choice. They could either have a completely unstyled version of the project or have a version with some simple styling, using a CSS-in-JS library.  

# Tech Stack

Because this project is supposed to be an open-source alternative to [Bedrock](https://bedrock.mxstbr.com/), I decided to keep my tech stack nearly identical with it.

To give a quick rundown, the core technologies used in NoteShack are [Next.js](https://nextjs.org) & [GraphQL](https://graphql.org) - similar to [Bedrock](https://bedrock.mxstbr.com/).

The optional tech stack consists of [TypeScript](https://typescriptlang.org), [Prisma](https://prisma.io), [GraphQL CodeGen](https://graphql-code-generator.com/), [Prisma's Nexus](https://nexusjs.org/), [URQL](https://formidable.com/open-source/urql/), [Passport](http://passportjs.org/), 

Although, to make sure the user doesn't have to spend any money setting up this project, I replaced [Postmark](https://postmarkapp.com/), which is a paid application (although free for students), with a free alternative called [SendGrid](https://sendgrid.com/), [Stripe](https://stripe.com/), along with [Prettier](https://prettier.io/) & [ESLint](https://eslint.org/) to improve code quality. 

I also decided to integrate some basic styling into this project, as mentioned above. To do that, I used the new & trendy tool called [Stitches](https://stitches.dev) (same people who made [Radix UI](https://radix-ui.com)). 
