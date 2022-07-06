import NextAuth, { Session, User } from 'next-auth'
import GitHub from 'next-auth/providers/github'

import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '@lib/prisma'
import { JWT } from 'next-auth/jwt'

export interface CustomSession extends Session {
  user?: {
    name?: string | null
    id?: string | null
    email?: string | null
    image?: string | null
  }
}

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session: async ({
      session,
      user,
      token,
    }: {
      session: CustomSession
      user: User
      token: JWT
    }) => {
      session.user!.id = token.sub
      return session
    },
  },
  secret: process.env.SECRET,
  session: { strategy: 'jwt' },
  jwt: { secret: process.env.SECRET },
  debug: false,
})
