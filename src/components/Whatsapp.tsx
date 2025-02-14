"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import CountryCode from "./CountryCode";
import Image from "next/image";

export default function Whatsapp(props: any) {
  const { number, title, country } = props;
  const [modal, setModal] = useState(false);
  const modalChange = (modal: any) => {
    setModal(false);
  };
  return (
    <div
      className="bg-[url('/compresss.jpeg')]  bg-center bg-cover bg-blend-multiply flex flex-col py-10 gap-2  px-[20px] md:px-[40px]"
      style={{
        backgroundColor: "rgb(0 38 89)",
      }}
    >
      <h3 className="text-[33px] text-center text-white font-semibold">
        One Stop Solution to All
        <span className="text-[#FFE066]"> Academic Worries</span>
      </h3>
      <p className="text-white text-center max-w-3xl mx-auto ">
        Gogrades.org ensures to deliver the world-class
        {title ? ` ${title}` : `Assignment Help`} at prices that are best in the
        market. Our team always responds to the demands of the students quickly
        and fulfills them in the best possible way.
      </p>
      <div className="flex justify-center gap-3 flex-wrap">
        <button
          className="text-white border border-white py-[7px] px-[24px] text-[20px] rounded-[4px] font-medium"
          onClick={() => setModal(true)}
          style={{
            background:
              "transparent linear-gradient(91deg,#f9413e 0%,#f7514e 100%) 0 0 no-repeat",
          }}
        >
          Get Free Quote
        </button>
        <Link
          href={`https://wa.me/${number}?text=Hello GoGrades Team, I need Academic Assistance. Could you help me complete my task on time?`}
          // href={`https://api.whatsapp.com/send?phone=${number}&text=Hello Gogrades!`}
          className="bg-white  py-[7px] px-[24px] text-[20px] rounded-[4px] font-medium flex items-center gap-2"
          target="_blank"
        >
          <IoLogoWhatsapp className="text-[22px] text-green-600" />
          <span>Whatsapp Direct Chat</span>
        </Link>
      </div>
      {modal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-screen">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="py-4 my-5  flex overflow-auto">
                <div className="bg-[#1a3e61] px-4 py-4 max-w-[300px] md:block hidden">
                  <h4 className="text-center text-[#FFC410] text-[30px] font-semibold leading-tight tracking-tight">
                    Get <span className="text-white text-6xl">50%</span> Off on
                    your Order
                  </h4>
                  <div className="bg-[#FFC410] h-[1px] w-32 content-center flex justify-center max-w-32 mx-auto mt-3"></div>
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-2">
                      <img
                        height={121}
                        width={320}
                        src={"/gogrades.org_assests/moneyback-logo.png"}
                        alt="LOGO"
                        className="aspect-square h-[62px] w-[62px]"
                      ></img>
                      <div className="text-white">
                        <h3 className="text-[18px] font-medium">
                          100% Money Back
                        </h3>
                        <h4>30 days Return</h4>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        height={121}
                        width={320}
                        src={"/gogrades.org_assests/premiumlogo.png"}
                        alt="LOGO"
                        className="aspect-square h-[62px] w-[62px]"
                      ></img>
                      <div className="text-white">
                        <h3 className="text-[18px] font-medium">
                          Premium Level
                        </h3>
                        <h4>Top Writers & Checkers</h4>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        height={121}
                        width={320}
                        src={"/gogrades.org_assests/quality.png"}
                        alt="LOGO"
                        className="aspect-square h-[62px] w-[62px]"
                      ></img>
                      <div className="text-white">
                        <h3 className="text-[18px] font-medium">
                          100% Quality
                        </h3>
                        <h4>No Compromise on Quality</h4>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        height={121}
                        width={320}
                        src={"/gogrades.org_assests/satisfaction.png"}
                        alt="LOGO"
                        className="aspect-square h-[62px] w-[62px]"
                      ></img>
                      <div className="text-white">
                        <h3 className="text-[18px] font-medium">
                          100% Satisfaction
                        </h3>
                        <h4>Guaranteed Satisfaction</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <CountryCode modalChange={modalChange} countryy={country} />
                <h3
                  className="text-[30px] text-white ml-4 cursor-pointer h-fit bg-red-500 px-4 py-1 rounded-full hidden md:block"
                  onClick={() => setModal(false)}
                >
                  X
                </h3>
              </div>
            </div>
          </div>
          <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
