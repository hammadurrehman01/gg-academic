import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About2 from "@/components/about/About2";
import Banner from "@/components/about/Banner";
import Steps from "@/components/about/Steps";
import React, { useEffect, useState } from "react";
import HomeAbout from "./HomeAbout";

export default function page() {
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
