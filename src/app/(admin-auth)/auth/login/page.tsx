"use client";

import Image from "next/image";
import { toast } from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { redirect } from "next/navigation";

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
    <section className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-4 rounded p-6 md:bg-white">
        <div className="mb-6 flex justify-center md:justify-start">
          <Image
            src="/logo.png"
            alt="Logo"
            width={146}
            height={32}
            className="mr-2"
          />
        </div>
        <form
          action="/api/auth/callback/credentials"
          method="POST"
          onSubmit={onSubmit}
          className="space-y-4"
        >
          <div>
            <input
              className="w-full rounded border border-gray-200 bg-gray-50 p-3 text-sm text-gray-600 focus:outline-none"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              className="w-full rounded border border-gray-200 bg-gray-50 p-3 text-sm text-gray-600 focus:outline-none"
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded bg-red-600 py-2 text-sm font-bold text-gray-50 transition duration-200 hover:bg-red-700 disabled:bg-red-500 disabled:text-gray-200"
              disabled={loading}
            >
              <div>
                Masuk
                <div
                  className={`${
                    loading ? "inline-block" : "hidden"
                  } h-4 w-4 animate-spin snap-center rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              </div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
