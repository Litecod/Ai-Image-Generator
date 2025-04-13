"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect} from "react";

export default function Home() {
  const show = "";
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/" || show === "") {
      router.push("/generate");
    }
  }, [pathname, show, router]);

  return <div className="">{show}</div>;
}