import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function page() {
  return (
    <>
      <title>Contact us | GoGrades</title>
      <meta
        name="description"
        content="Get Help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects."
        key="desc"
      />
      <link rel="canonical" href={`https://gogrades.org/eu/contact`}></link>
      <Contact region={"/eu"} />;
    </>
  );
}
