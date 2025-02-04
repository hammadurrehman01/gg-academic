"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiMessage3Fill } from "react-icons/ri";

import openTawkToChat from "./herosection/tawkto";
import Link from "next/link";
export default function HowItWorks(title: any) {
  const [reg, setReg] = useState("");

  useEffect(() => {
    if (title.region !== undefined) {
      setReg(title.region);
    } else {
      setReg("");
    }
  }, [title.region]);
  return (
    <div
      className="flex max-sm:px-[10px] px-[30px] justify-center items-center py-20 bg-[#F5F5F5] bg-[url('/compress.png')] gap-10 md:flex-row flex-col"
      id="process"
    >
      <div className="flex flex-col md:w-[400px] md:min-w-[300px] max-md:text-center">
        <h3 className="uppercase text-[14px] sm:text-[16px] text-[#F25F5C]">
          -How it works
        </h3>
        <h4 className="text-[20px] sm:text-[25px] md:text-[30px] text-[#071E57] font-semibold">
          Three Simple Steps to Avail
          {title.title ? ` ${title.title}` : ` Assignment Help`}
        </h4>
        <p className="text-[#3E4657]  text-[13px] sm:text-[16px]">
          Ready to place an {title.title} order? You dont have to go through
          complicated processes; all you need to do is follow 3 easy steps!
        </p>
        <div className="flex   gap-2 items-center py-3 flex-wrap max-md:justify-center">
          <Link
            href={`${reg}/order?coupon=GG-50%off`}
            style={{
              background:
                "transparent linear-gradient(91deg,#f9413e 0%,#f7514e 100%) 0 0 no-repeat",
            }}
            className="py-[6px] px-[20px] rounded-md w-fit text-white font-semibold text-[22px] shadow-black hover:drop-shadow-xl hover:shadow-xl transition-all duration-100"
          >
            Order Now
          </Link>
          <button
            className="text-[#3E4657] border rounded-[2px] border-[#D1D1D1] text-[19px]  px-[25px] py-[8px] font-medium shadow-black hover:drop-shadow-xl hover:shadow-xl transition-all duration-100 bg-white flex items-center gap-2"
            onClick={openTawkToChat}
          >
            <RiMessage3Fill className="text-[24px]" /> Chat Now
          </button>
        </div>
      </div>
      <div className="max-w-[600px] bg-white border shadow-md">
        <div className="h-[40px] border-b flex items-start py-3 pl-2">
          <img
            src="/assets/iphoneDots.png"
            className="h-[16px] w-[60px]"
            height={20}
            width={60}
            alt="png"
          />
        </div>
        <div className="flex px-6 py-6 gap-4 max-sm:gap-2">
          <img
            src="/assets/sideline.png"
            alt="side"
            height={400}
            width={100}
            className="sm:block hidden h-[370px] w-[96px]"
          />
          <div className="flex flex-col gap-14 py-2 items-center">
            <div className="leading-[20px] flex flex-col max-sm:justify-center max-sm:items-center max-sm:text-center">
              <img
                width={100}
                height={100}
                src="/sss2.png"
                alt="side"
                className="h-[10] w-[10] block sm:hidden mb-4"
              />
              <h3 className="text-[#071E57] sm:text-[18px] text-[24px] font-semibold">
                Submit Your Order
              </h3>
              <h4 className="text-[#3E4657] max-sm:leading-[18px] text-[15px]">
                List out the specifications and details in our online order form
                and submit it. We assure the confidentiality of your personal
                details.
              </h4>
            </div>
            <div className="leading-[20px] flex flex-col max-sm:justify-center max-sm:items-center max-sm:text-center">
              <img
                width={100}
                height={100}
                src="/sideline1.png"
                alt="side"
                className="h-[10] w-[10] block sm:hidden mb-4"
              />
              <h3 className="text-[#071E57] sm:text-[18px] text-[24px] font-semibold">
                Discussion With EXPERT
              </h3>
              <h4 className="text-[#3E4657] max-sm:leading-[18px] text-[15px]">
                Once we receive the form, our experts will contact you at the
                earliest to discuss all details related to your task. Our
                experts are more than happy to help you.
              </h4>
            </div>
            <div className="leading-[20px] flex flex-col max-sm:justify-center max-sm:items-center max-sm:text-center">
              <img
                width={100}
                height={100}
                src="/endd.png"
                alt="side"
                className="h-[10] w-[10] block sm:hidden mb-4"
              />
              <h3 className="text-[#071E57] sm:text-[18px] text-[24px] font-semibold">
                Assignment Dispatched
              </h3>
              <h4 className="text-[#3E4657] max-sm:leading-[18px] text-[15px]">
                Once we have finished the help work, the document goes through a
                proofreading process. After quality check, the final document is
                dropped to your email.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
