"use client";
import Event from "@/components/Facebook_Pixel/Event";
import BingTrackingScript from "@/components/Scripts/Bing";
import ConversionScript from "@/components/Scripts/Gtag";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiMessage3Fill } from "react-icons/ri";

export default function Page() {
  const [oldName, setOldName] = useState("");
  const [oldEmail, setOldEmail] = useState("");

  useEffect(() => {
    let cityy = localStorage.getItem("city");
    let countryy = localStorage.getItem("country");
    let oldName = localStorage.getItem("oldName");
    let oldEmail = localStorage.getItem("oldEmail");

    setOldName(oldName ? oldName : "");
    setOldEmail(oldEmail ? oldEmail : "");
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-[url('/thanks.jpg')] py-[75px] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-[#ffffff7d] max-md:bg-[#000000b5] text-center">
      {/* Event snippet for GoGrades Lead PPC Data conversion page Start */}
      <BingTrackingScript />

      <ConversionScript />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-10775231891');
        gtag('event', 'conversion', {
          'send_to': 'AW-10775231891/EVxkCPuZkNADEJP7g5Io',
          'value': 5000.0,
          'currency': 'PKR'
        });
      `,
        }}
      ></script>
      <Event />
      {/* Event snippet for GoGrades Lead PPC Data conversion page End */}

      <title>Thankyou | Gogrades.org</title>
      <meta
        name="description"
        content="Get online assessment editing services and help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects."
        key="desc"
      />
      <link rel="canonical" href={`https://gogrades.org/aus/thankyou`}></link>

      <h1 className="font-extrabold text-[18px] md:text-[22px] uppercase pb-5 fontchange free md:block hidden">
        - Gogrades Official -
      </h1>
      <h2 className="text-[40px]  font-bold tracking-tighter uppercase text-[#071E57] max-md:text-white max-md:text-[30px]">
        Dear <span className="font-bold  text-black">{oldName}.</span>
      </h2>
      <h2 className="text-[40px] font-semibold tracking-tighter uppercase text-[#071E57] max-md:text-white max-md:text-[30px]">
        Thank you for getting in touch
      </h2>
      <p className="text-[20px] text-[#071E57]  font-medium max-md:text-white max-md:text-[16px] px-4">
        Please check your email{" "}
        <span className="font-semibold  text-zinc-950">{oldEmail}</span> .To
        recieve flat 50% discount.
      </p>
      <p className="text-[20px] font-medium text-[#071E57] pt-2 anim max-md:text-white max-md:text-[16px] px-4">
        Our representative will soon contact you.
      </p>
      <div className="flex items-center justify-center flex-wrap">
        <img
          height={"120"}
          width={"120"}
          src={"/fast-ds.svg"}
          alt="img"
          className="w-[130px] max-md:w-[80px] h-fit m-2"
        ></img>
        <img
          height={"120"}
          width={"120"}
          src={"/guaranteed.svg"}
          alt="img"
          className="w-[130px] max-md:w-[80px] h-fit m-2"
        ></img>
        <img
          height={"120"}
          width={"120"}
          src={"/moneyback.svg"}
          alt="img"
          className="w-[130px] max-md:w-[80px] h-fit m-2"
        ></img>
        <img
          height={"120"}
          width={"120"}
          src={"/privacy-icon.svg"}
          alt="img"
          className="w-[130px] max-md:w-[80px] h-fit m-2"
        ></img>
      </div>
      <div className="flex gap-2 flex-col md:flex-row justify-center items-center w-fit">
        <button
          className={`text-white  rounded-md text-[19px] font-medium  py-2 px-4`}
          style={{
            background:
              "transparent linear-gradient(91deg, #f9413e 0%, #f7514e 100%) 0% 0% no-repeat",
          }}
        >
          Chat on Whatsapp
        </button>
        <Link
          href={"/"}
          className="text-[#3E4657] bg-[#fff] font-semibold px-[10px] py-[8px] text-[19px] rounded-sm text-center max-md:w-[100%] flex items-center justify-center gap-2"
          style={{ boxShadow: "0px 0px 5px 1px #0000009e" }}
        >
          <RiMessage3Fill className="text-[24px]" /> Talk With Experts
        </Link>
      </div>
    </div>
  );
}
