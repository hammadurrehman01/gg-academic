"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Code from "./Code";

export default function page() {
  const pathname = usePathname();

  useEffect(() => {
    console.log("scrollposition", window.scrollY);
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <title>Contact us | GoGrades</title>
      <meta
        name="description"
        content="Get Help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects."
        key="desc"
      />
      <link rel="canonical" href={`https://gogrades.org/contact`}></link>{" "}
      <Code />
    </>
  );
}
