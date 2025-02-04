"use client";

import { useEffect, useState } from "react";
import Code from "./Code";
import { usePathname } from "next/navigation";

export default function page({ searchParams }: any) {
  const [modal, setModal] = useState<boolean>(false);

  const pathname = usePathname();

  useEffect(() => {
    console.log("scrollposition", window.scrollY)
    window.scrollTo(0, 0)

  }, [pathname]); 

  useEffect(() => {
    const modalData = localStorage.getItem("modal");
    const storedTime = localStorage.getItem("modalTimestamp");

    if (modalData === "true" && storedTime) {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - parseInt(storedTime, 10);
      const eightHours = 8 * 60 * 60 * 1000;

      if (elapsedTime >= eightHours) {
        localStorage.setItem("modal", "false");
      }
    }

    // If modalData is "false" (or missing after 8 hours), show modal
    if (!modalData || modalData === "false") {
      const timer = setTimeout(() => {
        setModal(true);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <>
      <title>Order Now | Gogrades.org</title>
      <meta
        name="description"
        content="Get online assessment editing services and help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects"
        key="desc"
      />
      <link rel="canonical" href={`https://gogrades.org/order`}></link>

      <Code coupon={searchParams.coupon} />
    </>
  );
}
