"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineAlternateEmail, MdPhoneInTalk } from "react-icons/md";

export default function About2({ region }: any) {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("...");
  const [number, setNumber] = useState("");

  const fetchCity = async () => {
    let cityy = localStorage.getItem("city");
    let countryy = localStorage.getItem("country");
    if (cityy !== null) {
      setCity(cityy as any);
    }
    if (countryy !== null) {
      setCountry(countryy as any);
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
    <div>
      <div className="flex flex-col justify-center items-center max-w-5xl gap-3 mx-auto py-10 px-[20px] md:px-[50px] shadow-b-lg shadow-gray-600">
        <h3 className="text-[#071E57] text-[24px] sm:text-[30px] font-semibold max-w-lg text-center mx-auto leading-8">
          Leading Academic Solutions Provider Around the Globe
        </h3>
        <p className="text-[15px] text-[2A2A2A] leading-[20px] sm:text-center">
          We at Gogrades.org meet the needs of clients from all walks of
          academic life. We abide by our promise to provide an online academic
          writing service that gives students strong academic support. The team
          associated with us strives hard to provide assignment help to
          college-goers from all over the world despite their study stream and
          university standard. The team of writers associated with us is chosen
          only after rigorous scrutinizing and have earned us the reputation of
          being the best Academic Solutions provider.
        </p>
        <p className="text-[15px] text-[2A2A2A] leading-[20px] sm:text-center">
          It is not only the writers but the skilled editors, researchers,
          proofreaders, and quality analysts who have been helping us deliver
          100% customer satisfaction. In 10 years, we have become a common name
          for students in the UK, US, Australia, and other countries for
          excellent online academic assistance. The customer support team aims
          to be available even at the wee hours to ensure that no query from any
          of the clients is ever missed.
        </p>
        <img
          height={300}
          width={450}
          src="/degree.jpg"
          alt="backk"
          className="h-[300px] w-[450px] rounded-2xl mt-10"
        />
        <div className="flex gap-3 sm:gap-10 justify-center items-center mt-5 flex-wrap">
          <Link
            href={`tel:${number}`}
            className="text-[23px] text-[#2A2A2A] font-semibold flex gap-2 items-center"
          >
            <MdPhoneInTalk className="text-[30px] text-green-600" />
            Call Now
          </Link>
          <Link
            href={`https://wa.me/${number}?text=Hello GoGrades Team, I need academic writing assistance. Could you help me complete my task on time?`}
            target="_blank"
            className="text-[23px] text-[#2A2A2A] font-semibold flex gap-2 items-center"
          >
            <IoLogoWhatsapp className="text-[30px] text-green-600" />
            Whatsapp Now
          </Link>
          <Link
            href="mailto:support@gogrades.org"
            className="text-[23px] text-[#2A2A2A] font-semibold flex gap-2 items-center"
          >
            <MdOutlineAlternateEmail className="text-[30px] text-green-600" />
            support@gogrades.org
          </Link>
        </div>
      </div>
      <About3 />
    </div>
  );
}

function About3() {
  return (
    <div className="bg-[#F1F1F1]">
      <div className="flex flex-col justify-center items-center max-w-6xl gap-3 mx-auto py-10 px-[20px] md:px-[50px] ">
        <h3 className="text-[#071E57] text-[24px] sm:text-[30px] font-semibold max-w-lg text-center mx-auto leading-8">
          Leading Academic Solutions Provider Around the Globe
        </h3>

        <p className="text-[15px] text-[2A2A2A] leading-[20px] text-center">
          It is not only the writers but the skilled editors, researchers,
          proofreaders, and quality analysts who have been helping us deliver
          100% customer satisfaction. In 10 years, we have become a common name
          for students in the UK, US, Australia, and other countries for
          excellent online academic assistance. The customer support team aims
          to be available even at the wee hours to ensure that no query from any
          of the clients is ever missed.
        </p>
        <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 min-[900px]:grid-cols-4 justify-center items-center">
          <div className="flex flex-col justify-start items-center bg-white p-4 shadow-md rounded-lg min-h-[300px]">
            <img
              height={100}
              width={100}
              src="/about21.png"
              alt="backk"
              className="h-[100px] w-[100px] rounded-2xl"
            />
            <h3 className="text-[#2A2A2A] text-[18px] leading-[22px] text-center">
              Round the <br />
              Clock Availability
            </h3>
            <p className="text-[14px] leading-[18px] text-center text-gray-700">
              The customer -support team associated with the Gogrades.org is
              available 24*7 to help you with any queries or doubts regarding
              our online academic help service.
            </p>
          </div>
          <div className="flex flex-col justify-start items-center bg-white p-4 shadow-md rounded-lg min-h-[300px]">
            <img
              height={100}
              width={100}
              src="/about22.png"
              alt="backk"
              className="h-[100px] w-[100px] rounded-2xl"
            />
            <h3 className="text-[#2A2A2A] text-[18px] leading-[22px] text-center">
              Lightning Fast <br />
              Assignment Delivery
            </h3>
            <p className="text-[14px] leading-[18px] text-center text-gray-700">
              We understand how important it is for you to deliver your
              assignments on time. When you buy online assignment help from us,
              the team makes sure it is dropped to your inbox before the
              promised date.
            </p>
          </div>
          <div className="flex flex-col justify-start items-center bg-white p-4 shadow-md rounded-lg min-h-[300px]">
            <img
              height={100}
              width={100}
              src="/about23.png"
              alt="backk"
              className="h-[100px] w-[100px] rounded-2xl"
            />
            <h3 className="text-[#2A2A2A] text-[18px] leading-[22px] text-center">
              Certified Subject <br />
              Experts
            </h3>
            <p className="text-[14px] leading-[18px] text-center text-gray-700">
              The writers associated with us are ex-professionals from different
              walks of life. With years of experience professionally and flair
              for writing, they deliver A+ worthy assignments always.
            </p>
          </div>
          <div className="flex flex-col justify-start items-center bg-white p-4 shadow-md rounded-lg min-h-[300px]">
            <img
              height={100}
              width={100}
              src="/about24.png"
              alt="backk"
              className="h-[100px] w-[100px] rounded-2xl"
            />
            <h3 className="text-[#2A2A2A] text-[18px] leading-[22px] text-center">
              Rated <br />
              4.5/5
            </h3>
            <p className="text-[14px] leading-[18px] text-center text-gray-700">
              We have never disappointed our customers in terms of quality and
              information. Also, our customers do not leave any chance of
              appreciating us through positive reviews.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
