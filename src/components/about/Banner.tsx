"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Banner({ region }: any) {
  const [reg, setReg] = useState("");
  useEffect(() => {
    if (region !== undefined) {
      setReg(region);
    } else {
      setReg("");
    }
  }, [region]);

  return (
    <div className="pt-10 max-md:pt-[70px] sm:px-[30px] px-[20px] md:px-[50px] max-w-[725px] max-md:bg-[#ededed] pb-24">
      <h1 className="text-[#090909] text-[20px] md:text-[38px] font-semibold md:leading-10 my-2">
        Get A+ Worthy Assignments Here
      </h1>
      <p className="text-[#2A2A2A] text-[15px] leading-5 font-medium">
        Gogrades.org is the flag bearer of world-class Academic Solutions
        provider. We endeavour to provide the best Academic Services around the
        globe to ensure that no student at any academic level faces any
        difficulty.
      </p>
      <div className="grid grid-cols-2 gap-y-5 gap-2 text-gray-800 font-medium text-[20px] leading-[20px] mt-5 max-sm:text-center max-sm:justify-center">
        <div className="flex items-center">
          <img
            height={50}
            width={50}
            src="/hero11.png"
            alt="backk"
            className=""
          />
          <div>
            <h3>Subject Experts</h3>
            <h4 className="text-[14px]">With Flair of Writing</h4>
          </div>
        </div>
        <div className="flex items-center">
          <img
            height={50}
            width={50}
            src="/about2-removebg-preview.png"
            alt="backk"
            className=""
          />
          <div>
            <h3>Highest Grade</h3>
            <h4 className="text-[14px]">A+ Worthy Assignments</h4>
          </div>
        </div>

        <div className=" items-center md:flex hidden">
          <img
            height={50}
            width={50}
            src="/about3.png"
            alt="backk"
            className=""
          />
          <div>
            <h3>17,3456+ Clients</h3>
            <h4 className="text-[14px]">100% Satisfaction Rate</h4>
          </div>
        </div>
        <div className=" items-center md:flex hidden">
          <img
            height={50}
            width={50}
            src="/about4-removebg-preview.png"
            alt="backk"
            className=""
          />
          <div>
            <h3 className="text-[18px] w-fit px-1 py-[1px] bg-[#33CC6F] uppercase">
              Free
            </h3>
            <h4 className="text-[20px] ">Turnitin Report</h4>
          </div>
        </div>
      </div>
      <Link href={`${reg}/contact`}>
        <button
          className="py-[8px] px-[25px] rounded-md text-white font-semibold text-[16px] sm:text-[18px] mt-10 hover:shadow-2xl transition-all duration-100 uppercase"
          style={{
            background:
              "transparent linear-gradient(91deg,#f9413e 0%,#f7514e 100%) 0 0 no-repeat",
          }}
        >
          Contact Us
        </button>
      </Link>
      <img
        height={700}
        width={700}
        src="/gogrades.org_assests/about-usbanner.jpg"
        alt="backk"
        className="h-[500px] w-[65vw]  absolute top-0 right-0  opacity-70 hidden md:block -z-10 "
      />
    </div>
  );
}
