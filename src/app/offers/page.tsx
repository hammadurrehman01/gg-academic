import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Code from "./Code";

export default function page() {
  return (
    <>
      {" "}
      <title>Discounted Offers | Gogrades.org</title>
      <meta
        name="description"
        content="Get online assessment editing services and help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects."
        key="desc"
      />
      <link rel="canonical" href={`https://gogrades.org/offers`}></link>
      <Code />
    </>
  );
}
