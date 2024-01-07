"use client";
import { SessionProvider, SessionProviderProps } from "next-auth/react";

// SessionProvider must be in a client component, therefore it cannot
// be used directly in the root layout
export const NextAuthProvider = ({ children }: SessionProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
