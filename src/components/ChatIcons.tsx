// components/FabButton.js
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import { BiSolidMessageAltDetail } from "react-icons/bi";

import openTawkToChat from "./herosection/tawkto";
const FabButton = (numbers: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isOpenWhatsapp, setIsOpenWhatsapp] = useState(false);
  const [isOpenPhone, setIsOpenPhone] = useState(false);
  const [isOpenMessage, setIsOpenMessage] = useState(false);
  const [isOpenEmail, setIsOpenEmail] = useState(false);
  const handleFabClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (e: any) => {
    const container: any = document.querySelector(".floatingButtonWrap");

    if (
      container &&
      !container.contains(e.target) &&
      !container.querySelector(".floatingButtonInner").contains(e.target)
    ) {
      setIsOpen(false);
    }
  };

  // Dynamic number
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("+447593709971");
  const fetchCity = async () => {
    const ipUrl = "https://api.ipify.org?format=json";
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
    // var script = document.createElement("script");
    // script.type = "text/javascript";
    // script.async = true;
    // script.src = "https://embed.tawk.to/638f20b0b0d6371309d2de32/1gjjhfd73";
    // script.charset = "UTF-8";
    // script.setAttribute("crossorigin", "*");
    // document.head.appendChild(script);

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
      setCity("London");
      setCountry("GB");
    }
  };

  useEffect(() => {
    fetchCity();
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
  // Dynamic number ends

  return (
    <div
      className="bottom-60 md:bottom-48 z-10 fixed"
      onClick={handleOutsideClick}
    >
      <ul className=" ml-[10px]">
      
        <li
          className="flex justify-center items-center relative h-fit w-fit"
          onMouseEnter={() => {
            setIsOpenWhatsapp(true);
          }}
          onMouseLeave={() => {
            setIsOpenWhatsapp(false);
          }}
        >
          <Link
            target="_blank"
            href={`https://wa.me/${number}?text=Hello GoGrades Team, I need academic writing assistance. Could you help me complete my task on time?`}
          >
            <IoLogoWhatsapp className="text-[40px] shadow-md shadow-black z-[5555555555555555555] text-green-600 bg-white rounded-full p-[6px] m-1" />
          </Link>
          <Link
            target="_blank"
            href={`https://wa.me/${number}?text=Hello GoGrades Team, I need academic writing assistance. Could you help me complete my task on time?`}
            className={`absolute z-[-100000] h-[34px] rounded-3xl text-left  ml-20 ${
              isOpenWhatsapp
                ? "min-w-[150px] pl-8"
                : "max-w-0 overflow-hidden w-auto"
            } w-auto bg-white duration-500 left-[-60px] py-[5px] font-semibold text-gray-800 shadow-md shadow-black`}
          >
            Whatsapp Now
          </Link>
        </li>
        <li
          className="flex justify-center items-center relative h-fit w-fit"
          onMouseEnter={() => {
            setIsOpenEmail(true);
          }}
          onMouseLeave={() => {
            setIsOpenEmail(false);
          }}
        >
          <Link href="mailto:support@gogrades.org">
            <MdEmail className="text-[40px] shadow-md shadow-black text-red-600 bg-white rounded-full p-[6px] m-1" />
          </Link>
          <Link
            href="mailto:support@gogrades.org"
            className={`absolute z-[-100000] h-[34px] rounded-3xl text-left  ml-20 ${
              isOpenEmail
                ? "min-w-[140px] pl-8"
                : "max-w-0 overflow-hidden w-auto"
            } w-auto bg-white duration-500 left-[-60px] py-[5px] font-semibold text-gray-800 shadow-md shadow-black`}
          >
            Send an Email
          </Link>
        </li>
        <li
          className=" justify-center items-center relative h-fit w-fit max-md:flex hidden"
          onMouseEnter={() => {
            setIsOpenMessage(true);
          }}
          onMouseLeave={() => {
            setIsOpenMessage(false);
          }}
        >
          <Link
            href={`sms:${number}?body=Hello GoGrades Team, I need academic writing assistance. Could you help me complete my task on time?`}
          >
            <BiSolidMessageAltDetail className="text-[40px] shadow-md shadow-black text-purple-600 bg-white rounded-full p-[6px] m-1" />
          </Link>
          <Link
            href={`sms:${number}?body=Hello GoGrades Team, I need academic writing assistance. Could you help me complete my task on time?`}
            className={`absolute z-[-100000] h-[34px] rounded-3xl text-left  ml-20 ${
              isOpenMessage
                ? "min-w-[160px] pl-8"
                : "max-w-0 overflow-hidden w-auto"
            } w-auto bg-white duration-500 left-[-60px] py-[5px] font-semibold text-gray-800 shadow-md shadow-black`}
          >
            Chat with Expert
          </Link>
        </li>
        <li
          className="flex justify-center items-center relative h-fit w-fit max-md:hidden cursor-pointer"
          onMouseEnter={() => {
            setIsOpenPhone(true);
          }}
          onMouseLeave={() => {
            setIsOpenPhone(false);
          }}
          onClick={openTawkToChat}
        >
          <div>
            <BiSolidMessageAltDetail className="text-[40px] shadow-md shadow-black text-blue-600 bg-white rounded-full p-[6px] m-1" />
          </div>
          <div
            className={`absolute z-[-100000] h-[34px] rounded-3xl text-left  ml-20 ${
              isOpenPhone
                ? "min-w-[130px] pl-8"
                : "max-w-0 overflow-hidden w-auto"
            } w-auto bg-white duration-500 left-[-60px] py-[5px] font-semibold text-gray-800 shadow-md shadow-black`}
          >
            Private Chat
          </div>
        </li>
      </ul>

      <style jsx>{`
        .floatingButtonWrap {
          display: block;
          position: fixed;
          bottom: 20px;
          left: 80px;
          z-index: 999999999;
        }

        .floatingButtonInner {
          position: relative;
        }

        .floatingButton {
          display: block;
          width: 60px;
          height: 60px;
          text-align: center;
          background: linear-gradient(45deg, #8769a9, #507cb3);
          color: #fff;
          line-height: 50px;
          position: absolute;
          border-radius: 50% 50%;
          bottom: 0px;
          right: 0px;
          border: 5px solid #b2bedc;
          opacity: 1;
          transition: all 0.4s;
        }

        .floatingButton .fa {
          font-size: 15px !important;
        }

        .floatingButton.open,
        .floatingButton:hover,
        .floatingButton:focus,
        .floatingButton:active {
          opacity: 1;
          color: #fff;
        }

        .floatingButton .fa {
          transform: rotate(0deg);
          transition: all 0.4s;
        }

        .floatingButton.open .fa {
          transform: rotate(45deg);
        }

        .floatingMenu {
          position: absolute;
          bottom: 60px;
          left: -70px;
          display: none;
        }

        .floatingMenu li {
          width: 100%;
          float: right;
          list-style: none;
          text-align: left;
          margin-bottom: 5px;
        }

        .floatingMenu li Link {
          padding: 8px 15px;
          display: inline-block;
          background: #ccd7f5;
          color: #6077b0;
          border-radius: 5px;
          overflow: hidden;
          white-space: nowrap;
          transition: all 0.4s;
          box-shadow: 1px 3px 5px rgba(211, 224, 255, 0.5);
        }

        .floatingMenu li Link:hover {
          margin-right: 10px;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default FabButton;
