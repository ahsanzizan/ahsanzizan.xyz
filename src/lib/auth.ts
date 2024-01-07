import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { DefaultJWT } from "next-auth/jwt";
import { findAdminByUname, authenticateAdmin } from "../database/admin.query";

declare module "next-auth" {
  // Returned by `useSession`, `getSession` and received as a prop on the
  // `SessionProvider` React Context
  interface Session {
    user?: {
      id: string;
      username?: string;
    };
  }
}

declare module "next-auth/jwt" {
  // Returned by the `jwt` callback and `getToken`, when using JWT sessions
  interface JWT extends DefaultJWT {
    id: string;
    username: string;
  }
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Log In",
      credentials: {
        username: {
          label: "Username",
          type: "username",
          placeholder: "Username admin",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials) {
        const { username, password } = credentials ?? {};
        const findAdmin = await authenticateAdmin(
          username ?? "",
          password ?? "",
        );

        if (findAdmin.status !== "SUCCESS") return null;

        const admin = {
          id: String(findAdmin.admin?._id),
          username,
        };

        return admin;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      if (token.username && session.user) {
        const findAdmin = await findAdminByUname(token.username);

        if (findAdmin) {
          session.user.username = findAdmin.username || token.username;
          session.user.id = findAdmin._id as string;
        }
      }

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
