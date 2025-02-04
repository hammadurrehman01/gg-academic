"use client"

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import HomeAbout from "./HomeAbout";

export default function page() {
  const pathname = usePathname();

  useEffect(() => {
    console.log("scrollposition", window.scrollY)
    window.scrollTo(0, 0)

  }, [pathname]); 
  return (
    <div className="">
      <title>About us | Gogrades.org</title>
      <meta
        name="description"
        content="Get online assessment editing services and help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects."
        key="desc"
      />
      <link rel="canonical" href={`https://gogrades.org/about`}></link>

      <HomeAbout />
    </div>
  );
}
