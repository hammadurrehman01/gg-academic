import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <title>Discounted Offers | Gogrades.org</title>
      <meta
        name="description"
        content="Get online assessment editing services and help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects."
        key="desc"
      />
      <link rel="canonical" href={`https://gogrades.org/uk/offers`}></link>

      <div className="bg-[#E84946] text-white flex justify-center items-center gap-20 relative max-md:pt-[80px] pt-[40px] px-[40px] pb-10">
        <img
          width={350}
          height={350}
          src={"/offer/offer-mobile.png"}
          alt="side"
          className="shadow-gray-600 lg:block max-lg:absolute relative max-lg:opacity-20 opacity-100 bottom-0 lg:mb-[-65px]"
        />
        <div className="z-[2]">
          <button className="bg-[#C42220] text-[#FFE066] text-[20px] uppercase mb-3 px-2">
            Amazing discount
          </button>
          <div className="flex gap-6 sm:gap-10 justify-center">
            <h3
              className="text-[90px] max-sm:text-[60px] flex w-fit font-semibold"
              style={{
                textShadow: "2px 3px 1px #B10C09",
              }}
            >
              <div className="flex flex-col  ">
                <span className="uppercase text-[13px] mb-[-20px]">flat</span>
                25
              </div>
              <div className="flex flex-col sm:mb-[20px] justify-center ">
                <span className="text-[16px] sm:text-[34px] h-fit leading-normal">
                  %
                </span>
                <span className="text-[16px] sm:text-[26px] h-fit leading-normal">
                  OFF
                </span>
              </div>
            </h3>
            <h3 className="sm:text-[64px] text-[40px] ">+</h3>
            <h3
              className="text-[90px] max-sm:text-[60px] flex w-fit font-semibold"
              style={{
                textShadow: "2px 3px 1px #B10C09",
              }}
            >
              <div className="flex flex-col  ">
                <span className="uppercase text-[13px] mb-[-20px]">Extra</span>5
              </div>
              <div className="flex flex-col sm:mb-[20px] justify-center ">
                <span className="text-[16px] sm:text-[34px] h-fit leading-normal w-fit">
                  %
                </span>
                <div className="flex justify-center items-start  mt-[-05px] gap-2">
                  <span className="text-[16px] sm:text-[26px] h-fit leading-normal">
                    OFF
                  </span>
                  <span className="text-[14px] max-sm:text-[12px] h-fit leading-normal">
                    Via <br /> Mobile app
                  </span>
                </div>
              </div>
            </h3>
          </div>
          <h4 className="text-white text-[14px] sm:text-[20px] mt-2">
            On Assignment, Essay, Dissertation & Coursework Writing Help
          </h4>
          <Link href={`/uk/order?coupon=APP20`}>
            <button className="text-[#FFE066] border-[#FFE066] rounded-3xl py-[8px] px-[25px] sm:px-[35px] bg-transparent sm:text-[19px] text-[16px] font-medium border-2 hover:bg-[#FFE066] hover:text-[#E84946] mt-[20px]">
              USE CODE : APP30
            </button>
          </Link>
        </div>
      </div>

      <div className=" max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6 py-10 px-[20px]">
          <img
            width={600}
            height={400}
            src={"/offer/first-offer.jpg"}
            alt="side"
            className="w-[100%] shadow-md shadow-gray-600"
          />
          <img
            width={600}
            height={400}
            src={"/offer/second-offer.jpg"}
            alt="side"
            className="w-[100%] shadow-md shadow-gray-600"
          />
          <img
            width={900}
            height={400}
            src={"/offer/thrid-offer.jpg"}
            alt="side"
            className=" md:col-span-2 shadow-md shadow-gray-6002 w-[896px]"
          />
          <img
            width={600}
            height={400}
            src={"/offer/five-offer.jpg"}
            alt="side"
            className="w-[100%] shadow-md shadow-gray-600"
          />
          <img
            width={600}
            height={400}
            src={"/offer/four-offer.jpg"}
            alt="side"
            className="w-[100%] shadow-md shadow-gray-600"
          />
        </div>
      </div>
    </>
  );
}
