"use client";

import { Button } from "@/app/components/global/ui/button";
import { Input } from "@/app/components/global/ui/input";
import { H1 } from "@/app/components/global/ui/text";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Login() {
  const { status } = useSession();
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  if (status === "authenticated") return redirect("/admin");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading("Loading...");
    try {
      setLoading(true);
      const res = await signIn("credentials", {
        redirect: false,
        username: formValues.username,
        password: formValues.password,
        callbackUrl: "/admin",
      });

      if (res?.error) {
        setLoading(false);
        toast.error(
          res.error == "CredentialsSignin"
            ? "Wrong Username / Password"
            : "Internal server error",
          {
            id: toastId,
          },
        );
      } else {
        toast.success("Successfully Logged In", {
          id: toastId,
        });
      }
    } catch (error: any) {
      toast.error("Something Wrong", {
        id: toastId,
      });
    }
  };

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-2">
      <div className="w-full max-w-lg rounded p-6">
        <H1 className="mb-4">Admin Login</H1>
        <form
          action="/api/auth/callback/credentials"
          method="POST"
          onSubmit={onSubmit}
        >
          <Input
            label="Username"
            placeholder="User123"
            type="text"
            name="username"
            onChange={handleChange}
            className="mb-2"
            required
          />
          <Input
            label="Password"
            placeholder="*******"
            type="password"
            name="password"
            onChange={handleChange}
            required
          />
          <div className="mt-10">
            <Button type="submit" disabled={loading} variant={"default"}>
              Log In
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
