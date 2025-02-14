"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { RiMessage3Fill } from "react-icons/ri";
import openTawkToChat from "@/components/herosection/tawkto";
import Link from "next/link";
export default function Code() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("...");
  const [number, setNumber] = useState("");
  const [oldName, setOldName] = useState("user");
  const [oldEmail, setOldEmail] = useState("user@g.com");

  const fetchCity = async () => {
    let cityy = localStorage.getItem("city");
    let countryy = localStorage.getItem("country");
    let oldName = localStorage.getItem("oldName");
    let oldEmail = localStorage.getItem("oldEmail");
    if (cityy !== null) {
      setCity(cityy as any);
    }
    if (countryy !== null) {
      setCountry(countryy as any);
    }
    if (oldName !== null) {
      setOldName(oldName as any);
    }
    if (oldEmail !== null) {
      setOldEmail(oldEmail as any);
    }

    const ipUrl = "https://api.ipify.org?format=json";

    try {
      // Fetch the user's IP address
      const response = await fetch(ipUrl);
      const data = await response.json(); // Assuming the response is in JSON
      const userIp = data.ip;

      // Fetch location data based on the IP address
      const locationResponse = await fetch(
        `https://pro.ip-api.com/json/${userIp}?key=tRuJ0KuCug4wEHs&fields=status,message,continent,continentCode,country,countryCode,countryCode3,region,regionName,city,district,zip,lat,lon,timezone,offset,currentTime,currency,callingCode,isp,org,as,asname,reverse,mobile,proxy,hosting,query`
      );
      const locationData = await locationResponse.json();

      let fetchedCity = locationData.country || "London"; // Set default value
      let fetchedCountry = locationData.countryCode || "GB"; // Set default value
      //
      // Store the city and country in local storage
      localStorage.setItem("city", fetchedCity);
      localStorage.setItem("country", fetchedCountry);

      // Assuming you have functions like setCity and setCountry to update your UI
      setCity(fetchedCity);
      setCountry(fetchedCountry);
    } catch (error) {
      // If the API request fails, set default values
    }
  };
  useEffect(() => {
    const dynamicNumber: any = {
      US: "+19179331132",
      MX: "+19179331132",
      CA: "+19179331132",
      AU: "+61480004010",
      NZ: "+61480004010",
      UK: "+447593709971",
    };

    if (dynamicNumber[country]) {
      setNumber(dynamicNumber[country]);
    } else {
      setNumber("+447593709971");
    }
  }, [country]);

  useEffect(() => {
    fetchCity();
  }, []);
  return (
    <>
      {" "}
      <Navbar number={number} />
      <div className="flex flex-col justify-center items-center bg-[url('/thanks.jpg')] py-[75px] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-[#ffffff7d] max-md:bg-[#000000b5] text-center">
        <h1 className="font-extrabold text-[18px] md:text-[22px] uppercase pb-5 fontchange free md:block hidden">
          - Gogrades Official -
        </h1>
        <h2 className="text-[40px]  font-bold tracking-tighter uppercase text-[#071E57] max-md:text-white max-md:text-[30px]">
          Dear <span className="font-bold text-[#ff5b09]">{oldName},</span>
        </h2>
        <h2 className="text-[40px] font-semibold tracking-tighter uppercase text-[#071E57] max-md:text-white max-md:text-[30px]">
          Thank you for getting in touch
        </h2>
        <p className="text-[20px] text-[#071E57]  font-medium max-md:text-white max-md:text-[16px] px-4">
          Please check your email{" "}
          <span className="font-semibold text-[#ff5b09]">{oldEmail}</span> .To
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
        <div className="flex gap-4 flex-col md:flex-row justify-center items-center w-fit">
          <Link
            target="_blank"
            href={`https://wa.me/${number}?text=Hello GoGrades Team, I need Academic Assistance. Could you help me complete my task on time?`}
            className={`text-white  rounded-md text-[19px] font-medium  py-2 px-4 hover:scale-105 hover:shadow-xl transition ease-in duration-200 delay-200`}
            style={{
              background:
                "transparent linear-gradient(91deg, #f9413e 0%, #f7514e 100%) 0% 0% no-repeat",
            }}
          >
            Chat on Whatsapp
          </Link>
          <button
            onClick={openTawkToChat}
            className="text-[#3E4657] bg-[#fff] font-semibold px-[10px] py-[8px] text-[19px]  text-center max-md:w-[100%] flex items-center justify-center gap-2 rounded-md hover:scale-105 hover:shadow-xl transition ease-in duration-200 delay-200"
            style={{ boxShadow: "0px 0px 5px 1px #0000009e" }}
          >
            <RiMessage3Fill className="text-[24px]" /> Talk With Experts
          </button>
        </div>
      </div>
      <Footer number={number} />
    </>
  );
}
