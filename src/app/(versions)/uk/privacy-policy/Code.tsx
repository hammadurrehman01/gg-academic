"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import CountryCode from "@/components/CountryCode";
import Image from "next/image";
export default function Code() {
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

  const [modal, setModal] = useState(false);
  const modalChange = (modal: any) => {
    setModal(false);
  };
  return (
    <>
      <title>Privacy Policy | Gogrades.org</title>
      <meta
        name="description"
        content="Get online assessment editing services and help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects."
        key="desc"
      />
      <link
        rel="canonical"
        href={`https://gogrades.org/uk/privacy-policy`}
      ></link>

      <div className="bg-[url('/samplebanner.jpg')] py-[40px] max-md:pt-[70px]  bg-right bg-cover bg-blend-overlay bg-[#000]/50">
        <h1 className="text-[#fff] text-[26px] sm:text-[38px] text-center font-semibold">
          Privacy Policy
        </h1>
        <div className="flex justify-center gap-5 mt-8  flex-wrap mx-3">
          <button
            onClick={() => setModal(true)}
            className={`text-white  rounded-md text-[16px] md:text-[19px] font-medium hidetext py-2 px-4 `}
            style={{
              background:
                "transparent linear-gradient(91deg, #f9413e 0%, #f7514e 100%) 0% 0% no-repeat",
            }}
          >
            Get Free Price Quote
          </button>
          <Link
            href={`https://wa.me/${number}?text=Hello GoGrades Team, I need academic writing assistance. Could you help me complete my task on time?`}
          >
            <button className="bg-white py-1 px-[24px] text-[20px] rounded-[4px] font-medium flex items-center gap-2">
              <IoLogoWhatsapp className="text-[22px] text-green-600" />
              <span className="text-left text-[12px] leading-tight text-[#2A2A2A]">
                Order on Whatsapp <br />
                <span className="text-[20px] mt-[-10px] text-black">
                  Live Chat Now
                </span>
              </span>
            </button>{" "}
          </Link>
        </div>
      </div>
      <div className="border-b">
        <div className="w-full myContainer py-3 mx-auto max-md:px-4">
          <Link href="/uk/">Home</Link> {`> Refund Policy`}
        </div>
      </div>
      <div className="flex justify-between myContainer py-6 mx-auto md:gap-20 flex-col md:flex-row mb-10 max-md:px-4 mt-14 relative">
        <div className=" font-medium">
          <h2 className="border-l-8 pl-3  border-[#f7514e] text-[24px] leading-[24px] text-[#2a2a2a] text-left font-semibold my-6 ">
            INTRODUCTION
          </h2>
          <p className="text-[15px] leading-[24px] text-[#2A2A2A] ">
            We always give priority to maintaining the privacy of our customers
            and care about the data and information that they share with us.
            This notice is for the visitors who seek service from the website
            www.gogrades.org, its sub-domains and its mobile application. For
            the purpose of explaining our privacy details, &nbsp;we&nbsp;
            &nbsp;our&nbsp; and &nbsp;us&nbsp; will be referred to as
            Gogrades.org which operates this platform and &nbsp;you&nbsp; will
            imply to the user of our academic writing service throughout the
            policy.
            <br />
            Whether you are a regular client or new to our service, we recommend
            you to read the terms of our policy carefully and understand how do
            we employ and use your information. We have tried to use simple,
            concise and familiar language, but in case you find something
            difficult to comprehend or have questions regarding our privacy
            policy, feel free to contact us at the details mentioned in the end.
            <br />
            Anyone who visits our website is advised to accept the terms and
            conditions of our policy before hiring us for writing their academic
            documents. Rest assured that we will not use your information for
            any other purpose than described herein without your consent.
          </p>
          <h2 className="text-[18px] leading-[24px] text-[#2a2a2a] text-left font-semibold my-6 ">
            Table of Contents
          </h2>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            What type of data do we ask from our clients?
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            Why we need the information?
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            Do we have a legal basis to collect your information?
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            How long do we retain your personal details?
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            How secure your data is with us?
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            What are your rights regarding your data?
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            What about cookies and other tracking technologies?
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            How do we maintain transparency and accountability?
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            How to contact us?
          </p>
          <h3 className="text-[20px] text-[#2a2a2a] uppercase mt-5 mb-3">
            What type of data do we ask from our clients?
          </h3>
          <p className="text-[15px] leading-[24px] text-[#2A2A2A]">
            Whenever you visit our site, we receive both Personally Identifiable
            Information (PII) and Non-Personally Identifiable Information
            (Non-PII).
          </p>
          <h3 className="text-[18px] text-[#2a2a2a] uppercase mt-5 mb-3">
            Personally Identifiable Information
          </h3>
          <p className="text-[15px] leading-[24px] text-[#2A2A2A]">
            This information can potentially trace or distinguish an
            individual&bsp;s identity. The data that is considered PII
            includes...
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            Name
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            Address
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            Phone Number
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            Email Address
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            Country
          </p>
          <p className="text-[15px] leading-[24px] text-[#2A2A2A]">
            We would like to clarify that all the payment-related information is
            not stored with us as transactions are done through secure payment
            gateway. In case you opt for PayPal as your payment mode, all your
            card details are provided directly to PayPal. So their privacy
            policy will be applicable on the information that you have given.
          </p>
          <h3 className="text-[18px] text-[#2a2a2a] uppercase mt-5 mb-3">
            Non-Personally Identifiable Information
          </h3>
          <p className="text-[15px] leading-[24px] text-[#2A2A2A]">
            It is an anonymous data that is collected by servers using cookies
            and browsers. It incorporates information that is enough to
            correspond to a particular individual, profile, or account, but not
            sufficient to locate or identify whom that information belongs to.
            It includes your IP address, time zone, plugin details, the time you
            spent on site, screen size, web browser&nbsp;s information, and the
            total number of web pages you hit.
          </p>
          <h3 className="text-[18px] text-[#2a2a2a] uppercase mt-5 mb-3">
            What are the legal bases to process your information?
          </h3>
          <p className="text-[15px] leading-[24px] text-[#2A2A2A]">
            We assure you that none of the information provided by you will be
            processed or used without taking your consent. We abide by the
            Article 6, Recital 40 of the GDPR, that clearly states that personal
            detail can be lawfully processed only after the consent of the user
            or on the basis of other legal bases, such as legal obligation,
            legitimate interest. Also, the reason for your consent will not be
            clubbed with any of our private motive. So, if you have agreed to
            share your details for specific purpose, then we won&nbsp;t use it
            for marketing activities.
          </p>
          <h3 className="text-[18px] text-[#2a2a2a] uppercase mt-5 mb-3">
            How long do we retain your personal details?
          </h3>
          <p className="text-[15px] leading-[24px] text-[#2A2A2A]">
            We hold your information till the purpose of originally collecting
            it is accomplished which includes to gather feedback, to provide
            writing service, or comply with any legal obligation.
          </p>
          <h3 className="text-[18px] text-[#2a2a2a] uppercase mt-5 mb-3">
            How secure your data is with us?
          </h3>
          <p className="text-[15px] leading-[24px] text-[#2A2A2A]">
            We protect your information with Secured Socket Layer (SSL)
            software, using which we encrypt the data. We utilize firewall
            protection to safeguard your network from malicious software.
            However, we cannot ensure the security of information when you
            transmit it online. We implement appropriate security to defend
            against misuse, alteration or loss of the information we received
            from you.
            <br />
            Moreover, we restrict the access to your personal information only
            to our employees, as they need it to process your order. They are
            subject to the obligation of strict confidentiality, and can be
            terminated if they fail to comply with this agreement.
            <br />
            In case of any security breach, rest assured that we will notify you
            as soon as possible and provide all the necessary information to
            take further protection measures via email address or phone number
            that you have provided to us.
          </p>
          <h3 className="text-[18px] text-[#2a2a2a] uppercase mt-5 mb-3">
            What are your rights regarding your data?
          </h3>
          <p className="text-[15px] leading-[24px] text-[#2A2A2A]">
            Our users are eligible to the following rights...
            <br /> <br />
            The right to be informed( Article 14): You have the right to know
            what type of data is being collected, how it will be used, how long
            it will be kept and whether it will be shared with any third party
            or not.
            <br /> <br />
            The right to access( Article 15): User can access information that
            is stored with us and we are obliged to provide you with a copy of
            any personal data concerning you.
            <br /> <br />
            The right to rectification( Article 16): If you ever discover that
            the information we hold about you is inaccurate or incomplete, then
            you can request it to be updated.
            <br /> <br />
            The right to erasure (Article 17): Or &nbsp;The Right to be
            forgotten&nbsp; allows users to request us to erase their data in
            specific circumstances. It may include situations when the details
            no longer meet the lawful ground, it was unlawfully processed, or
            they withdraw consent.
            <br /> <br />
            The right to restrict processing (Article 18): It enables you to
            restrict the way we use your personal data. You can limit processing
            of the personal data when it is not accurate. But in such condition,
            the processing should be restricted until the accuracy of the data
            is verified.
            <br />
            <br />
            The right to data portability( Article 19): An individual can obtain
            and reuse their personal information for his/her own purpose across
            different services.
            <br />
            <br />
            The right to object (Article 21): As a customer, you are free to
            object to the processing of your personal data on grounds relating
            to your particular situation.
            <br />
            <br />
            The right to lodge a complaint(Article 77): If you find that your
            personal information has not been handled properly, you can lodge a
            complaint with the supervisory authority of your land.
            <br />
            <br />
            The right to withdraw consent(Article 7): We will process your
            information only after getting your prior approval. But if you
            withdraw it at anytime, we will stop using your data further.
          </p>
          <h3 className="text-[18px] text-[#2a2a2a] uppercase mt-5 mb-3">
            How do we maintain transparency and accountability?
          </h3>
          <p className="text-[15px] leading-[24px] text-[#2A2A2A]">
            Cookies are small text files that are sent to your device by our
            server when you visit our site. Hence, the cookies allow our server
            to recognize your browser when you visit the site any time
            thereafter. The information regarding your preference is later used
            to improve our services, and ensure secure login. Let us inform you
            that cookies will work only after the consent that is freely given,
            specific, informed, and unambiguous through a pop-up dialogue box.
            So, even if we want to collect an IP address from you, we would be
            required to request user consent.
          </p>
          <h3 className="text-[18px] text-[#2a2a2a] uppercase mt-5 mb-3">
            What about cookies and other tracking technologies?
          </h3>
          <p className="text-[15px] leading-[24px] text-[#2A2A2A]">
            Our privacy policy can witness changes and modifications with the
            evolution in the industry. Any updates regarding the way we handle
            or collect personal data from you will be communicated in a timely
            manner. We will connect with you regarding the same via email or
            update the revised norms on our website. So, we suggest you check
            this page periodically in order to stay informed of any changes.
          </p>
          <p className="text-[15px] leading-[24px] text-[#2A2A2A]">
            For any further queries, grievances, or issues regarding our Privacy
            Policy, you can get in touch with us by sending us an e-mail at
            <Link href="mailto:support@gogrades.org" className="text-blue-800">
              {" "}
              support@gogrades.org
            </Link>
          </p>
        </div>
        <div
          className="shadow-lg mt-10 md:min-w-[355px] h-fit top-32 sticky"
          style={{ boxShadow: "0 0 8px rgba(0, 0, 0, 0.23)" }}
        >
          <h5 className="text-[#246ED0] bg-[#EDF4F9] text-center w-full py-3 font-semibold text-[22px] ">
            FREE Features
          </h5>
          <ul className="px-3 py-2 border-b">
            <li className="flex justify-between items-center mt-2">
              <p className="text-[15px] text-[#2A2A2A] font-medium">
                Topic Creation
              </p>
              <p className="text-[16px] text-[#33CC6F] font-medium">
                <span
                  className="text-black text-[14px]"
                  style={{ textDecoration: "line-through" }}
                >
                  £ 11
                </span>
                &nbsp; FREE
              </p>
            </li>
            <li className="flex justify-between items-center mt-2">
              <p className="text-[15px] text-[#2A2A2A] font-medium">Outline</p>
              <p className="text-[16px] text-[#33CC6F] font-medium">
                <span
                  className="text-black text-[14px]"
                  style={{ textDecoration: "line-through" }}
                >
                  £ 14
                </span>
                &nbsp; FREE
              </p>
            </li>
            <li className="flex justify-between items-center mt-2">
              <p className="text-[15px] text-[#2A2A2A] font-medium">
                Unlimited Revisions
              </p>
              <p className="text-[16px] text-[#33CC6F] font-medium">
                <span
                  className="text-black text-[14px]"
                  style={{ textDecoration: "line-through" }}
                >
                  £ 31
                </span>
                &nbsp; FREE
              </p>
            </li>
            <li className="flex justify-between items-center mt-2">
              <p className="text-[15px] text-[#2A2A2A] font-medium">
                Editing/Proofreading
              </p>
              <p className="text-[16px] text-[#33CC6F] font-medium">
                <span
                  className="text-black text-[14px]"
                  style={{ textDecoration: "line-through" }}
                >
                  £ 42
                </span>
                &nbsp; FREE
              </p>
            </li>
            <li className="flex justify-between items-center mt-2">
              <p className="text-[15px] text-[#2A2A2A] font-medium">
                Formatting
              </p>
              <p className="text-[16px] text-[#33CC6F] font-medium">
                <span
                  className="text-black text-[14px]"
                  style={{ textDecoration: "line-through" }}
                >
                  £ 12
                </span>
                &nbsp; FREE
              </p>
            </li>
            <li className="flex justify-between items-center mt-2">
              <p className="text-[15px] text-[#2A2A2A] font-medium">
                Bibliography
              </p>
              <p className="text-[16px] text-[#33CC6F] font-medium">
                <span
                  className="text-black text-[14px]"
                  style={{ textDecoration: "line-through" }}
                >
                  £ 11
                </span>
                &nbsp; FREE
              </p>
            </li>
          </ul>
          <div className="flex flex-col justify-center items-center my-3 px-3">
            <h6 className="text-[15px] text-[#3E4657] leading-[18px] font-medium">
              Get all these features for
            </h6>
            <p className="text-[30px] text-[#33CC6F] font-semibold">
              <span
                className="text-black text-[20px]"
                style={{ textDecoration: "line-through" }}
              >
                £ 121
              </span>
              &nbsp; FREE
            </p>
            <Link
              href={"/uk/order?coupon=GG-50%off"}
              className={`text-white  rounded-md text-[19px] text-center font-medium hidetext py-2 px-4 w-full`}
              style={{
                background:
                  "transparent linear-gradient(91deg, #f9413e 0%, #f7514e 100%) 0% 0% no-repeat",
              }}
            >
              Order Now
            </Link>
          </div>
        </div>
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
    </>
  );
}
