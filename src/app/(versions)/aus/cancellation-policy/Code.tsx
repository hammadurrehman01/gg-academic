"use client";
import CountryCode from "@/components/CountryCode";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

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
      <title>Cancellation Policy | Gogrades.org</title>
      <meta
        name="description"
        content="Get online assessment editing services and help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects."
        key="desc"
      />
      <link
        rel="canonical"
        href={`https://gogrades.org/aus/cancellation-policy`}
      ></link>

      <div className="bg-[url('/samplebanner.jpg')] py-[40px] max-md:pt-[70px]  bg-right bg-cover bg-blend-overlay bg-[#000]/50">
        <h1 className="text-[#fff] text-[26px] sm:text-[38px] text-center font-semibold">
          Cancellation Policy
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
            href={`https://wa.me/${number}?text=Hello GoGrades Team, I need Academic Assistance. Could you help me complete my task on time?`}
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
          <Link href="/aus/">Home</Link> {`> Cancellation Policy`}
        </div>
      </div>
      <div className="flex justify-between myContainer py-6 mx-auto md:gap-20 flex-col md:flex-row mb-10 max-md:px-4 mt-14 relative ">
        <div className=" font-medium">
          <p className="text-[15px] leading-[24px] text-[#2A2A2A] ">
            Gogrades.org preserves all rights to drop your order any time under
            severe circumstances. We feel pride in maintaining that we never
            reject any order due to its difficulty level and deadlines.
            Nevertheless, we hold the independent rights of rejection or order
            cancellation.
          </p>
          <h2 className="text-[18px] leading-[24px] text-[#2a2a2a] text-left font-semibold my-6 ">
            Cancellation applies under certain conditions:
          </h2>
          <ol>
            <li className="text-[15px] leading-[24px] text-[#2A2A2A] my-4">
              1. If client change his/her mind and want to cancel the order so
              in this situation he/she is eligible for 50% amount only.
            </li>
            <li className="text-[15px] leading-[24px] text-[#2A2A2A] my-4">
              2. If client cancel any order (within 2, 4 Hours) and want to
              compensate that amount in another order so the service charges 25%
              of that amount will be deducted.
            </li>
            <li className="text-[15px] leading-[24px] text-[#2A2A2A] my-4">
              3. If we fail to present our clients with suitable subject writers
            </li>
            <li className="text-[15px] leading-[24px] text-[#2A2A2A] my-4">
              4. If the customer violates the terms and conditions of the
              agreement, and no refund will be possible.
            </li>
            <li className="text-[15px] leading-[24px] text-[#2A2A2A] my-4">
              5. If we are incompetent to fulfill your order within after 24 to
              48 hours from decided set time. Because we need atleast 24 to 48
              hours, it depend or order difficulty.
            </li>
            <li className="text-[15px] leading-[24px] text-[#2A2A2A] my-4">
              6. If any unexpected event occurs on our end due to which the
              document cannot be completed
            </li>
          </ol>

          <h3 className="text-[18px] text-[#2a2a2a] uppercase mt-5 mb-3">
            Note:
          </h3>
          <p className="text-[15px] leading-[24px] text-[#2A2A2A] ">
            In the case, if the order is revoked even after its approval due to
            any unforeseen event or other than the reason of rupturing the
            contract, we are responsible for presenting a complete refund
          </p>
        </div>
        <div
          className="shadow-lg mt-10 md:min-w-[355px] h-fit sticky top-32"
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
              href={"/aus/order?coupon=GG-50%off"}
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
