"use client";

import { SessionProvider, SessionProviderProps } from "next-auth/react";

export const NextAuthProvider = ({ children }: SessionProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
