"use client";

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
    <section className="flex h-screen flex-col items-center justify-center gap-2">
      <div className="w-full max-w-lg rounded p-6">
        <h1 className="mb-7 text-4xl leading-snug drop-shadow-glow md:text-7xl">
          Admin Login
        </h1>
        <form
          action="/api/auth/callback/credentials"
          method="POST"
          onSubmit={onSubmit}
        >
          <div className="mb-4">
            <input
              className="w-full rounded-full border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
              style={{ WebkitTextFillColor: "#fff" }}
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              className="w-full rounded-full border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
              style={{ WebkitTextFillColor: "#fff" }}
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white bg-white px-5 py-2 text-center text-base text-black transition-all duration-500 hover:drop-shadow-glow disabled:bg-neutral-400 md:px-[22px] md:py-[10px] md:text-lg"
              disabled={loading}
            >
              <div>
                Log In
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
