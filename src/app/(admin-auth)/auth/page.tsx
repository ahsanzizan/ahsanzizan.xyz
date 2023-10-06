"use client";

import { redirect } from "next/navigation";

export default function Login() {
  return redirect("/auth/login");
}
