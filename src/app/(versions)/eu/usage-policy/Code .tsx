"use client";
import CountryCode from "@/components/CountryCode";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoLogoWhatsapp, IoMdHome } from "react-icons/io";

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
      <title>Usage Policy | Gogrades.org</title>
      <meta
        name="description"
        content="Get online assessment editing services and help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects."
        key="desc"
      />
      <link
        rel="canonical"
        href={`https://gogrades.org/eu/usage-policy`}
      ></link>

      <div className="bg-[url('/samplebanner.jpg')] py-[40px] max-md:pt-[70px]  bg-right bg-cover bg-blend-overlay bg-[#000]/50">
        <h1 className="text-[#fff] text-[26px] sm:text-[38px] text-center font-semibold">
          Fair Usage Policy
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
        <div className="w-full myContainer  py-3 mx-auto max-md:px-4 flex items-center">
          <Link href="/eu/">Home</Link>
          {` > Fair Usage Policy`}
        </div>
      </div>
      <div className="flex justify-between myContainer py-6 mx-auto md:gap-20 flex-col md:flex-row mb-10 max-md:px-4 mt-14 relative ">
        <div className=" font-medium">
          <p className="text-[15px] leading-[24px] text-[#2A2A2A] ">
            From last many years, we have been providing the best writing
            assistance to students enrolled in various universities of the UK.
            We have a team of highly qualified and experienced writers that
            strive hard to deliver you a paper that is tailor-made, entirely
            original, and meet your university guidelines and standards. They
            work with all their might so that you can fulfil your dream of
            achieving excellent grades. The main motive of our services is to
            help you with research, as well as gain knowledge in the given
            subject so that you can create your own, 100% authentic work. So,
            the document that we provide to you should only be used as a
            reference to create your own piece of work and not be submitted
            directly to the your professor.
            <br />
            So, before you take our services, please go through our Fair Use
            Policy so that you get a better understanding of how your should use
            the work that we provide you. We have tried to keep it
            comprehensive, but if at any point, you have some queries, then feel
            free to contact us using the details mentioned at the end of this
            page.
          </p>
          <h2 className="border-l-8 pl-3  border-[#f7514e] text-[24px] leading-[24px] text-[#2a2a2a] text-left font-semibold my-6 ">
            The Motive Behind Our Fair Use Policy
          </h2>
          <p className="text-[15px] leading-[24px] text-[#2A2A2A] ">
            Many scholars make the wrong use of our services by submitting our
            original work directly to their professor to save themselves from
            the hard work. It seems tempting, but it can put their academic
            career into trouble. We have this Fair Use Policy to make you
            understand that doing something like this is a form of plagiarism
            which have dire consequences.
            <br />
            The primary objective of our writing services is to provide you with
            necessary information on your topic so that you can conduct further
            research and write a high-scoring documents. The work you receive
            from our end is copyrighted and the best way to take its advantage
            is by considering it as a guide to acquire knowledge, conduct
            further research, and then create your own scholastic document.
          </p>
          <h3 className="text-[18px] leading-[24px] text-[#2a2a2a] text-left font-semibold my-6 ">
            The Right Way of Using the Work We Provide You
          </h3>
          <p className="text-[15px] leading-[24px] text-[#2A2A2A] ">
            The documents that we compose are aimed to assist students on how a
            specific topic should be handled so that they can come up with a new
            and unique perspective to write their papers, collect relevant
            information from credible sources, and learn the proper formatting.
            So, instead of passing off our work as your original, use it to:
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            Acquire knowledge of the topic and understand how the question has
            been answered.
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            Focus on important points mentioned in each section and paragraph
            and make notes on them.
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            Develop your own ideas and arguments from the notes that you have
            prepared.
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            Review the sources mentioned in the paper provided by us and use
            them to conduct further research and collect more information.
          </p>
          <p className="text-[15px] leading-[24px] text-[#2A2A2A] ">
            By doing so, you will surely be able to compose an outstanding
            document. Make sure that your work is 100% original and completely
            based on your own ideas and perspective. Although this may take a
            lot more time and efforts than simply submitting our work as your
            own, you will reap benefits by scoring well in your college papers
            but in your final exams as well.
          </p>
          <h3 className="text-[18px] leading-[24px] text-[#2a2a2a] text-left font-semibold my-6 ">
            The Consequences of Submitting Our Reference Papers to Your
            Professor as Your Own
          </h3>
          <p className="text-[15px] leading-[24px] text-[#2A2A2A] ">
            Our researchers and writers work day and night to gather the best
            data and produce excellent papers so that you acquire complete
            knowledge of the topic and compose your own documents with a new
            perspective. Everything they create is their original piece of work.
            If you submit the reference papers to your professor, there is no
            way it will end up being flagged by plagiarism scanners. However,
            he/she might be compelled to think that your style of writing
            doesn&nbsp;t match to the paper, or that you have used sources that
            you don&nbsp;t have access to or sufficient knowledge to find. You
            may even be asked to explain the work back to him/her.
            <br />
            If you have handed our work as your own, then you will be found
            guilty of doing plagiarism which can lead to serious consequences.
            Even if you rephrase the reference paper, it will still be counted
            as unoriginal. So, we strongly suggest you to comply with this Fair
            Use Policy and use our academic writing services for intended
            purpose only.
          </p>
          <h3 className="text-[18px] leading-[24px] text-[#2a2a2a] text-left font-semibold my-6 ">
            The Reasons Why You Should Take Academic Writing Assistance From Us
          </h3>
          <p className="text-[15px] leading-[24px] text-[#2A2A2A] ">
            After knowing that submitting our work to your professor as your own
            can be threatening to your academic career, you may be thinking that
            why should you take academic writing assistance from us then. So, we
            want to let you know that our reference papers are the most powerful
            research tools that students can use to create their own academic
            papers. By taking our services, you will be able to do a concise
            analysis, in-depth research, as well as build unique opinions and
            views on a particular topic. Buying our services will save your
            efforts and time that you invest in sorting through massive amounts
            of research material, coursebooks, and university documentation.
          </p>
          <h3 className="text-[18px] leading-[24px] text-[#2a2a2a] text-left font-semibold my-6 ">
            Our Contact Details
          </h3>
          <p className="text-[15px] leading-[24px] text-[#2A2A2A]">
            If you have questions about this Fair Use Policy or any
            discrepancy/grievance against it, then send us an e-mail at
            <Link href="mailto:support@gogrades.org" className="text-blue-800">
              {" "}
              support@gogrades.org
            </Link>
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
              href={"/eu/order?coupon=GG-50%off"}
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
