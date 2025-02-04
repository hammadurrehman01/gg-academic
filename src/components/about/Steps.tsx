"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Steps({ region }: any) {
  const [reg, setReg] = useState("");
  useEffect(() => {
    if (region !== undefined) {
      setReg(region);
    } else {
      setReg("");
    }
  }, [region]);

  return (
    <div className="flex flex-col justify-center items-center text-center py-20 px-[20px] max-w-5xl mx-auto">
      <h3 className="text-[#1D1D1D] text-[30px] leading-[36px] font-medium">
        Place an Order for Your Assignment NOW!
      </h3>
      <h4 className="text-[#2A2A2A] leading-[20px] text-[14px]">
        3 Step Hassle-Free Process to Get Best Academic Solutions
      </h4>
      <div className="flex sm:flex-row flex-col justify-center items-center mt-10 gap-6">
        <div className="flex flex-col justify-center items-center max-w-[332px]">
          <h3 className="bg-[#616161] text-white rounded-full p-1 px-2 w-fit text-center mb-4">
            01
          </h3>
          <h4 className="text-[#1D1D1D] text-[18px] leading-[22px]  text-center font-medium">
            Submit Your Requirements
          </h4>
          <h5 className="text-[#2A2A2A] text-[15px] leading-[20px] text-center font-light mt-1">
            When you click the &quot;Order Now button&quot;, you&apos;ll be
            taken to the order form. Fill in the details regarding the academic
            service that you want to avail.
          </h5>
        </div>
        <div className="h-[150px] w-[1px] rotate-[15deg] bg-[#C8C8C8]  md:block hidden"></div>
        <div className="flex flex-col justify-center items-center max-w-[332px]">
          <h3 className="bg-[#616161] text-white rounded-full p-1 px-2 w-fit text-center mb-4">
            02
          </h3>
          <h4 className="text-[#1D1D1D] text-[18px] leading-[22px]  text-center font-medium">
            Make the Payment
          </h4>
          <h5 className="text-[#2A2A2A] text-[15px] leading-[20px] text-center font-light mt-1">
            After we have received the details from you, you would be redirected
            to the payment page. We have partnered with the safe and secure
            payment gateway so you can trust us on this.
          </h5>
        </div>
        <div className="h-[150px] w-[1px] rotate-[15deg] bg-[#C8C8C8]  md:block hidden"></div>
        <div className="flex flex-col justify-center items-center max-w-[332px]">
          <h3 className="bg-[#616161] text-white rounded-full p-1 px-2 w-fit text-center mb-4">
            03
          </h3>
          <h4 className="text-[#1D1D1D] text-[18px] leading-[22px]  text-center font-medium">
            Get Your Assignment
          </h4>
          <h5 className="text-[#2A2A2A] text-[15px] leading-[20px] text-center font-light mt-1">
            Once, you have made the payment, we would assign a writer who can
            work on your assignment. After completing the work is dropped to
            your inbox on the promised date.
          </h5>
        </div>
      </div>
      <Link
        href={`${reg}/order?coupon=GG-50%off`}
        style={{
          background:
            "transparent linear-gradient(91deg,#f9413e 0%,#f7514e 100%) 0 0 no-repeat",
        }}
        className="py-[8px] px-[25px] rounded-3xl text-white font-semibold text-[16px] sm:text-[18px] mt-10 hover:shadow-2xl transition-all duration-100"
      >
        Order Now
      </Link>
    </div>
  );
}
