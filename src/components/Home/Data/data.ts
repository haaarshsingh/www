type Blog = { name: string; description: string; href: string }

export type Data = {
  year: number
  content: Blog[]
}

export const blogs: Data[] = [
  {
    year: 2022,
    content: [
      {
        name: 'Creating an Accessible Command Menu in React',
        description: 'All about building custom accessible command menus.',
        href: '/blog/cmdk',
      },
      {
        name: "Why ORMs Aren't Always a Great Idea",
        description:
          "Why ORMs aren't always a great way to represent and model relational data.",
        href: '/blog/orms',
      },
      {
        name: 'Referential Integrity With Sharded Databases',
        description: 'Exploring sharding and referential integrity',
        href: '/blog/sharded-dbs',
      },
    ],
  },
  {
    year: 2021,
    content: [
      {
        name: 'Designing for the elderly',
        description:
          'A guide to design accessible interfaces for older adults.',
        href: '/blog/elderly',
      },
    ],
  },
  {
    year: 2020,
    content: [
      {
        name: 'Business Cards in the Terminal',
        description: 'Hacker-esque introductions with NPM',
        href: '/blog/cards',
      },
    ],
  },
]

export const work: Data[] = [
  {
    year: 2022,

    content: [
      {
        name: "Harsh's Lab (WIP)",
        description:
          'Exploring and documenting magical details in user interfaces.',
        href: 'https://twitter.com/harshhhdev/status/1588705118681468928',
      },
      {
        name: 'kmenu',
        description:
          'An accessible and animated command menu for React for a refined navigation experience.',
        href: 'https://kmenu.hxrsh.in',
      },
    ],
  },
  {
    year: 2021,
    content: [
      {
        name: 'dotfiles',
        description: 'Pastel-themed i3wm and Arch Linux rice.',
        href: 'https://github.com/harshhhdev/dotfiles',
      },
      {
        name: 'Custom Pointer React',
        description: 'Animated custom cursors for React.',
        href: 'https://github.com/harshhhdev/custom-pointer-react',
      },
    ],
  },
  {
    year: 2020,
    content: [
      {
        name: 'snip',
        description:
          'A lightweight pastebin for sharing text and code snippets.',
        href: 'https://snip.place',
      },
    ],
  },
]

export const speaking: Data[] = [
  {
    year: 2022,
    content: [
      {
        name: 'Building an Accessible Command Menu',
        description:
          'Building an accessible command menu with React and Tailwind.',
        href: 'https://youtu.be/2DL4QC0QrOg',
      },
      {
        name: 'Building Serverless Remix Applications with GraphQL',
        description: 'Building with Remix, Prisma, GraphQL, and CockroachDB.',
        href: 'https://youtu.be/_Kr-FprQoAI',
      },
      {
        name: 'Kubernetes and Serverless Databases',
        description: 'An exploration into serverless database architecture.',
        href: 'https://youtu.be/m2eM-p8zQgM',
      },
      {
        name: 'From PostgreSQL to CockroachDB',
        description:
          'Migrate your application onto CockroachDB serverless with zero application downtime.',
        href: 'https://youtu.be/U57GDhVEU50',
      },
    ],
  },
  {
    year: 2021,
    content: [
      {
        name: 'Database Design 101',
        description: 'The basics of designing a database.',
        href: 'https://youtu.be/PUfqXnWhwLk',
      },
    ],
  },
]
