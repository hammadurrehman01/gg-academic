"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function WhyGoGrades(props: any) {
  const { country, city, title } = props;
  return (
    <div
      className="flex justify-center items-center gap-12 min-[1000px]:gap-28 lg:px-[50px] md:px-[35px] sm:px-[20px] px-[12px] max-w-[1200px] mx-auto pt-10 py-6 flex-shrink flex-col md:flex-row relative"
      id="why-us"
    >
      <img
        src={"/why-GG.webp"}
        className={`lg:w-[450px] lg:h-[499.57px] md:h-[400px] md:w-[80%] h-[250px] aspect-square shrink static top-28`}
        alt="Image"
      />
      <div className="flex flex-col gap-1 ">
        <h4 className="text-[12px] sm:text-[16px] text-[#c0413f] text-center">
          - WHY GOGRADES.ORG
        </h4>
        <h5 className="text-[#071E57] text-[20px] sm:text-[25px]  md:text-[30px] font-semibold leading-tight text-center  ">
          Best Quality {title ? title : `Assignment Help`} For University &
          College Students
        </h5>
        <div
          className={`mt-4 flex flex-col gap-3 pr-10 transition-all duration-500 overflow-hidden style-4`}
        >
          <p className="text-[15px] text-[#3E4657] leading-tight">
            Searching for the No.1 Online
            {title ? " " + title : ` Assignment Help`} in {city}? End your
            search with Gogrades.org.
          </p>
          <h6 className="font-medium text-[#071E57] text-[18px]">
            FREE Features
          </h6>
          <div className="grid sm:grid-cols-3 justify-start mb-3 grid-cols-2 gap-1">
            <h3 className="flex justify-start items-center text-[#3E4657] text-[13px] font-medium">
              <FaCheck className="text-[#33e533] text-[8px] mr-1" />
              Bibliography
            </h3>
            <h3 className="flex justify-start items-center text-[#3E4657] text-[13px] font-medium">
              <FaCheck className="text-[#33e533] text-[8px] mr-1" />
              Title Page
            </h3>
            <h3 className="flex justify-start items-center text-[#3E4657] text-[13px] font-medium">
              <FaCheck className="text-[#33e533] text-[8px] mr-1" />
              Outline
            </h3>
            <h3 className="flex justify-start items-center text-[#3E4657] text-[13px] font-medium">
              <FaCheck className="text-[#33e533] text-[8px] mr-1" />
              Formatting
            </h3>
            <h3 className="flex justify-start items-center text-[#3E4657] text-[13px] font-medium">
              <FaCheck className="text-[#33e533] text-[8px] mr-1" />
              Plagiarism Report
            </h3>
            <h3 className="flex justify-start items-center text-[#3E4657] text-[13px] font-medium">
              <FaCheck className="text-[#33e533] text-[8px] mr-1" />
              Limitless Amendments
            </h3>
          </div>
          <p className="text-[15px] text-[#3E4657] leading-tight">
            With more than 500 Ph.D. consultants, we are determined to provide
            the best custom {title ? title : `Assignment Help`} service to the{" "}
            {city} students.
          </p>
        </div>
      </div>
    </div>
  );
}
