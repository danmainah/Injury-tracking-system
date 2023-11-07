import { NextApiHandler } from 'next';
import NextAuth from "next-auth";
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GitHubProvider from 'next-auth/providers/github'
import prisma from '../../../src/lib/prisma';

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? 'defaultClientId',
      clientSecret: process.env.GITHUB_SECRET ?? 'defaultClientSecret',
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
};