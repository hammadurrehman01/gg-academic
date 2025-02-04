import Image from "next/image";
import React from "react";
import {
  PiCurrencyDollarBold,
  PiStarFill,
  PiStarHalfFill,
} from "react-icons/pi";
import { CgOptions } from "react-icons/cg";
import { GoLaw } from "react-icons/go";
import openTawkToChat from "./herosection/tawkto";
import { FaBook, FaMoneyCheckDollar, FaSuitcaseMedical } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";
import {
  FaCameraRetro,
  FaFlask,
  FaHistory,
  FaPen,
  FaReact,
  FaStethoscope,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { MdSupervisedUserCircle } from "react-icons/md";
export default function Subjects(props: any) {
  const { country, city, title } = props;
  const subjects = [
    {
      name: "Accounting",
    },
    {
      name: "Business",
    },
    {
      name: "Nursing",
    },
    {
      name: "HRM",
    },
    {
      name: "Medical",
    },
    {
      name: "anthropology",
    },
    {
      name: "application letters",
    },
    {
      name: "art & Architecture",
    },
    {
      name: "biology",
    },
    {
      name: "Chemistry",
    },
    {
      name: "family and consumer science",
    },
    {
      name: "film & theater studies",
    },
    {
      name: "finance",
    },
    {
      name: "history",
    },
    {
      name: "law",
    },
    {
      name: "others",
    },
  ];
  return (
    <div className="bg-[#F5F5F5] bg-[url('/compress.png')]" id="subjects">
      <div className="flex flex-col text-center myContainer  py-20 ">
        <h3 className="uppercase text-[12px] sm:text-[16px] text-[#F25F5C]">
          -OUR Subjects
        </h3>
        <h4 className="text-[20px] sm:text-[25px] md:text-[30px] text-[#071E57] font-semibold max-w-4xl mx-auto">
          Professional {title ? ` ${title}` : `Assignment Help`} that accept all
          subjects @Gogrades.org
        </h4>
        <p className="text-[#3E4657] text-[14px] sm:text-[16px] mb-6">
          Get online {title ? ` ${title}` : `Assignment Help`} for the students
          of
          {" " + city}. We have qualified and experienced academic writers for
          all subjects.
        </p>
        <div className=" grid grid-cols-2 md:flex flex-wrap justify-center items-center gap-x-4 gap-y-10 mt-10">
          <div
            onClick={openTawkToChat}
            className="bgCustom relative rounded-[12px] w-[100%] gap-4 md:w-[188px] h-[190px] hover:bg-[#1c3e61] shadow-lg shadow-black flex flex-col justify-center  items-center text-white bgCustom cursor-pointer transition-all duration-150 px-4 pb-4"

            // style={{
            //   background:
            //     "linear-gradient(30deg, #282828 53%, #1c3e61 35%) !important",
            // }}
          >
            <div className="rounded-full bg-[#1c3e61] p-4 shadow-lg shadow-gray-900 absolute top-[-35px] ">
              <FaBook className="h-[50px] w-[50px] p-2 text-white" />
            </div>
            <div className="flex justify-center items-center gap-[2px] absolute top-[70px] ">
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarHalfFill className="text-[#eaaf16] text-[20px]" />
            </div>

            <h4 className="text-[16px] sm:text-[20px] font-bold leading-none mb-[-80px] uppercase">
              Accounting
            </h4>
          </div>
          <div
            onClick={openTawkToChat}
            className="bgCustom relative rounded-[12px] w-[100%] gap-4 md:w-[188px] h-[190px] hover:bg-[#1c3e61] shadow-lg shadow-black flex flex-col justify-center  items-center text-white bgCustom cursor-pointer transition-all duration-150 px-4 pb-4"

            // style={{
            //   background:
            //     "linear-gradient(30deg, #282828 53%, #1c3e61 35%) !important",
            // }}
          >
            <div className="rounded-full bg-[#1c3e61] p-4 shadow-lg shadow-gray-900 absolute top-[-35px] ">
              <PiCurrencyDollarBold className="h-[50px] w-[50px] p-2 text-white" />
            </div>
            <div className="flex justify-center items-center gap-[2px] absolute top-[70px] ">
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarHalfFill className="text-[#eaaf16] text-[20px]" />
            </div>

            <h4 className="text-[16px] sm:text-[20px] font-bold leading-none mb-[-80px] uppercase">
              Business
            </h4>
          </div>
          <div
            onClick={openTawkToChat}
            className="bgCustom relative rounded-[12px] w-[100%] gap-4 md:w-[188px] h-[190px] hover:bg-[#1c3e61] shadow-lg shadow-black flex flex-col justify-center  items-center text-white bgCustom cursor-pointer transition-all duration-150 px-4 pb-4"

            // style={{
            //   background:
            //     "linear-gradient(30deg, #282828 53%, #1c3e61 35%) !important",
            // }}
          >
            <div className="rounded-full bg-[#1c3e61] p-4 shadow-lg shadow-gray-900 absolute top-[-35px] ">
              <FaStethoscope className="h-[50px] w-[50px] p-2 text-white" />
            </div>
            <div className="flex justify-center items-center gap-[2px] absolute top-[70px] ">
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarHalfFill className="text-[#eaaf16] text-[20px]" />
            </div>

            <h4 className="text-[16px] sm:text-[20px] font-bold leading-none mb-[-80px] uppercase">
              Nursing
            </h4>
          </div>
          <div
            onClick={openTawkToChat}
            className="bgCustom relative rounded-[12px] w-[100%] gap-4 md:w-[188px] h-[190px] hover:bg-[#1c3e61] shadow-lg shadow-black flex flex-col justify-center  items-center text-white bgCustom cursor-pointer transition-all duration-150 px-4 pb-4"

            // style={{
            //   background:
            //     "linear-gradient(30deg, #282828 53%, #1c3e61 35%) !important",
            // }}
          >
            <div className="rounded-full bg-[#1c3e61] p-4 shadow-lg shadow-gray-900 absolute top-[-35px] ">
              <FaUser className="h-[50px] w-[50px] p-2 text-white" />
            </div>
            <div className="flex justify-center items-center gap-[2px] absolute top-[70px] ">
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarHalfFill className="text-[#eaaf16] text-[20px]" />
            </div>

            <h4 className="text-[16px] sm:text-[20px] font-bold leading-none mb-[-80px] uppercase">
              HRM
            </h4>
          </div>
          <div
            onClick={openTawkToChat}
            className="bgCustom relative rounded-[12px] w-[100%] gap-4 md:w-[188px] h-[190px] hover:bg-[#1c3e61] shadow-lg shadow-black flex flex-col justify-center  items-center text-white bgCustom cursor-pointer transition-all duration-150 px-4 pb-4"

            // style={{
            //   background:
            //     "linear-gradient(30deg, #282828 53%, #1c3e61 35%) !important",
            // }}
          >
            <div className="rounded-full bg-[#1c3e61] p-4 shadow-lg shadow-gray-900 absolute top-[-35px] ">
              <FaSuitcaseMedical className="h-[50px] w-[50px] p-2 text-white" />
            </div>
            <div className="flex justify-center items-center gap-[2px] absolute top-[70px] ">
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarHalfFill className="text-[#eaaf16] text-[20px]" />
            </div>

            <h4 className="text-[16px] sm:text-[20px] font-bold leading-none mb-[-80px] uppercase">
              Medical
            </h4>
          </div>
          <div
            onClick={openTawkToChat}
            className="bgCustom relative rounded-[12px] w-[100%] gap-4 md:w-[188px] h-[190px] hover:bg-[#1c3e61] shadow-lg shadow-black flex flex-col justify-center  items-center text-white bgCustom cursor-pointer transition-all duration-150 px-4 pb-4"

            // style={{
            //   background:
            //     "linear-gradient(30deg, #282828 53%, #1c3e61 35%) !important",
            // }}
          >
            <div className="rounded-full bg-[#1c3e61] p-4 shadow-lg shadow-gray-900 absolute top-[-35px] ">
              <MdSupervisedUserCircle className="h-[50px] w-[50px] p-2 text-white" />
            </div>
            <div className="flex justify-center items-center gap-[2px] absolute top-[70px] ">
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarHalfFill className="text-[#eaaf16] text-[20px]" />
            </div>

            <h4 className="text-[16px] sm:text-[20px] font-bold leading-none mb-[-80px] uppercase">
              Anthropology
            </h4>
          </div>
          <div
            onClick={openTawkToChat}
            className="bgCustom relative rounded-[12px] w-[100%] gap-4 md:w-[188px] h-[190px] hover:bg-[#1c3e61] shadow-lg shadow-black flex flex-col justify-center  items-center text-white bgCustom cursor-pointer transition-all duration-150 px-4 pb-4"

            // style={{
            //   background:
            //     "linear-gradient(30deg, #282828 53%, #1c3e61 35%) !important",
            // }}
          >
            <div className="rounded-full bg-[#1c3e61] p-4 shadow-lg shadow-gray-900 absolute top-[-35px] ">
              <FaPen className="h-[50px] w-[50px] p-2 text-white" />
            </div>
            <div className="flex justify-center items-center gap-[2px] absolute top-[70px] ">
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarHalfFill className="text-[#eaaf16] text-[20px]" />
            </div>

            <h4 className="text-[16px] sm:text-[20px] font-bold leading-none mb-[-80px] uppercase">
              application letters
            </h4>
          </div>
          <div
            onClick={openTawkToChat}
            className="bgCustom relative rounded-[12px] w-[100%] gap-4 md:w-[188px] h-[190px] hover:bg-[#1c3e61] shadow-lg shadow-black flex flex-col justify-center  items-center text-white bgCustom cursor-pointer transition-all duration-150 px-4 pb-4"

            // style={{
            //   background:
            //     "linear-gradient(30deg, #282828 53%, #1c3e61 35%) !important",
            // }}
          >
            <div className="rounded-full bg-[#1c3e61] p-4 shadow-lg shadow-gray-900 absolute top-[-35px] ">
              <IoStatsChart className="h-[50px] w-[50px] p-2 text-white" />
            </div>
            <div className="flex justify-center items-center gap-[2px] absolute top-[70px] ">
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarHalfFill className="text-[#eaaf16] text-[20px]" />
            </div>

            <h4 className="text-[16px] sm:text-[20px] font-bold leading-none mb-[-80px] uppercase">
              art & Architecture
            </h4>
          </div>
          <div
            onClick={openTawkToChat}
            className="bgCustom relative rounded-[12px] w-[100%] gap-4 md:w-[188px] h-[190px] hover:bg-[#1c3e61] shadow-lg shadow-black flex flex-col justify-center  items-center text-white bgCustom cursor-pointer transition-all duration-150 px-4 pb-4"

            // style={{
            //   background:
            //     "linear-gradient(30deg, #282828 53%, #1c3e61 35%) !important",
            // }}
          >
            <div className="rounded-full bg-[#1c3e61] p-4 shadow-lg shadow-gray-900 absolute top-[-35px] ">
              <FaReact className="h-[50px] w-[50px] p-2 text-white" />
            </div>
            <div className="flex justify-center items-center gap-[2px] absolute top-[70px] ">
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarHalfFill className="text-[#eaaf16] text-[20px]" />
            </div>

            <h4 className="text-[16px] sm:text-[20px] font-bold leading-none mb-[-80px] uppercase">
              biology
            </h4>
          </div>
          <div
            onClick={openTawkToChat}
            className="bgCustom relative rounded-[12px] w-[100%] gap-4 md:w-[188px] h-[190px] hover:bg-[#1c3e61] shadow-lg shadow-black flex flex-col justify-center  items-center text-white bgCustom cursor-pointer transition-all duration-150 px-4 pb-4"

            // style={{
            //   background:
            //     "linear-gradient(30deg, #282828 53%, #1c3e61 35%) !important",
            // }}
          >
            <div className="rounded-full bg-[#1c3e61] p-4 shadow-lg shadow-gray-900 absolute top-[-35px] ">
              <FaFlask className="h-[50px] w-[50px] p-2 text-white" />
            </div>
            <div className="flex justify-center items-center gap-[2px] absolute top-[70px] ">
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarHalfFill className="text-[#eaaf16] text-[20px]" />
            </div>

            <h4 className="text-[16px] sm:text-[20px] font-bold leading-none mb-[-80px] uppercase">
              Chemistry
            </h4>
          </div>
          <div
            onClick={openTawkToChat}
            className="bgCustom relative rounded-[12px] w-[100%] gap-4 md:w-[188px] h-[190px] hover:bg-[#1c3e61] shadow-lg shadow-black flex flex-col justify-center  items-center text-white bgCustom cursor-pointer transition-all duration-150 px-4 pb-4"

            // style={{
            //   background:
            //     "linear-gradient(30deg, #282828 53%, #1c3e61 35%) !important",
            // }}
          >
            <div className="rounded-full bg-[#1c3e61] p-4 shadow-lg shadow-gray-900 absolute top-[-35px] ">
              <FaUsers className="h-[50px] w-[50px] p-2 text-white" />
            </div>
            <div className="flex justify-center items-center gap-[2px] absolute top-[70px] ">
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarHalfFill className="text-[#eaaf16] text-[20px]" />
            </div>

            <h4 className="text-[16px] sm:text-[20px] font-bold leading-none mb-[-80px] uppercase">
              family and consumer science
            </h4>
          </div>
          <div
            onClick={openTawkToChat}
            className="bgCustom relative rounded-[12px] w-[100%] gap-4 md:w-[188px] h-[190px] hover:bg-[#1c3e61] shadow-lg shadow-black flex flex-col justify-center  items-center text-white bgCustom cursor-pointer transition-all duration-150 px-4 pb-4"

            // style={{
            //   background:
            //     "linear-gradient(30deg, #282828 53%, #1c3e61 35%) !important",
            // }}
          >
            <div className="rounded-full bg-[#1c3e61] p-4 shadow-lg shadow-gray-900 absolute top-[-35px] ">
              <FaCameraRetro className="h-[50px] w-[50px] p-2 text-white" />
            </div>
            <div className="flex justify-center items-center gap-[2px] absolute top-[70px] ">
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarHalfFill className="text-[#eaaf16] text-[20px]" />
            </div>

            <h4 className="text-[16px] sm:text-[20px] font-bold leading-none mb-[-80px] uppercase">
              film & theater studies
            </h4>
          </div>
          <div
            onClick={openTawkToChat}
            className="bgCustom relative rounded-[12px] w-[100%] gap-4 md:w-[188px] h-[190px] hover:bg-[#1c3e61] shadow-lg shadow-black flex flex-col justify-center  items-center text-white bgCustom cursor-pointer transition-all duration-150 px-4 pb-4"

            // style={{
            //   background:
            //     "linear-gradient(30deg, #282828 53%, #1c3e61 35%) !important",
            // }}
          >
            <div className="rounded-full bg-[#1c3e61] p-4 shadow-lg shadow-gray-900 absolute top-[-35px] ">
              <FaMoneyCheckDollar className="h-[50px] w-[50px] p-2 text-white" />
            </div>
            <div className="flex justify-center items-center gap-[2px] absolute top-[70px] ">
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarHalfFill className="text-[#eaaf16] text-[20px]" />
            </div>

            <h4 className="text-[16px] sm:text-[20px] font-bold leading-none mb-[-80px] uppercase">
              finance
            </h4>
          </div>
          <div
            onClick={openTawkToChat}
            className="bgCustom relative rounded-[12px] w-[100%] gap-4 md:w-[188px] h-[190px] hover:bg-[#1c3e61] shadow-lg shadow-black flex flex-col justify-center  items-center text-white bgCustom cursor-pointer transition-all duration-150 px-4 pb-4"

            // style={{
            //   background:
            //     "linear-gradient(30deg, #282828 53%, #1c3e61 35%) !important",
            // }}
          >
            <div className="rounded-full bg-[#1c3e61] p-4 shadow-lg shadow-gray-900 absolute top-[-35px] ">
              <FaHistory className="h-[50px] w-[50px] p-2 text-white" />
            </div>
            <div className="flex justify-center items-center gap-[2px] absolute top-[70px] ">
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarHalfFill className="text-[#eaaf16] text-[20px]" />
            </div>

            <h4 className="text-[16px] sm:text-[20px] font-bold leading-none mb-[-80px] uppercase">
              history
            </h4>
          </div>
          <div
            onClick={openTawkToChat}
            className="bgCustom relative rounded-[12px] w-[100%] gap-4 md:w-[188px] h-[190px] hover:bg-[#1c3e61] shadow-lg shadow-black flex flex-col justify-center  items-center text-white bgCustom cursor-pointer transition-all duration-150 px-4 pb-4"

            // style={{
            //   background:
            //     "linear-gradient(30deg, #282828 53%, #1c3e61 35%) !important",
            // }}
          >
            <div className="rounded-full bg-[#1c3e61] p-4 shadow-lg shadow-gray-900 absolute top-[-35px] ">
              <GoLaw className="h-[50px] w-[50px] p-2 text-white" />
            </div>
            <div className="flex justify-center items-center gap-[2px] absolute top-[70px] ">
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarHalfFill className="text-[#eaaf16] text-[20px]" />
            </div>

            <h4 className="text-[16px] sm:text-[20px] font-bold leading-none mb-[-80px] uppercase">
              law
            </h4>
          </div>
          <div
            onClick={openTawkToChat}
            className="bgCustom relative rounded-[12px] w-[100%] gap-4 md:w-[188px] h-[190px] hover:bg-[#1c3e61] shadow-lg shadow-black flex flex-col justify-center  items-center text-white bgCustom cursor-pointer transition-all duration-150 px-4 pb-4"

            // style={{
            //   background:
            //     "linear-gradient(30deg, #282828 53%, #1c3e61 35%) !important",
            // }}
          >
            <div className="rounded-full bg-[#1c3e61] p-4 shadow-lg shadow-gray-900 absolute top-[-35px] ">
              <CgOptions className="h-[50px] w-[50px] p-2 text-white" />
            </div>
            <div className="flex justify-center items-center gap-[2px] absolute top-[70px] ">
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarFill className="text-[#eaaf16] text-[20px]" />
              <PiStarHalfFill className="text-[#eaaf16] text-[20px]" />
            </div>

            <h4 className="text-[16px] sm:text-[20px] font-bold leading-none mb-[-80px] uppercase">
              others
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
