"use client";

import { usePathname, useRouter } from "next/navigation";
import * as NProgress from "nprogress";
import { useEffect } from "react";
import NextjsTopLoader from "nextjs-toploader";

export default function TopLoader() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    NProgress.done();
  }, [pathname, router]);

  return <NextjsTopLoader color="#fff" />;
}
