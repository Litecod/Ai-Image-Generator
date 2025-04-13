"use client"

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {

  const [show, setShow] = useState("")

  const router = useRouter()
  const pathname = usePathname()

  if (pathname.includes("/") || show == "") {
    router.push("/generate")
  }
  return (
    <div className="">
      {show}
    </div>
  );
}
