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
      <title>Terms & Conditions | Gogrades.org</title>
      <meta
        name="description"
        content="Get online assessment editing services and help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects."
        key="desc"
      />
      <link
        rel="canonical"
        href={`https://gogrades.org/me/terms-conditions`}
      ></link>

      <div className="bg-[url('/samplebanner.jpg')] py-[40px] max-md:pt-[70px]  bg-right bg-cover bg-blend-overlay bg-[#000]/50">
        <h1 className="text-[#fff] text-[26px] sm:text-[38px] text-center font-semibold">
          Terms & Conditions
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
          <Link href="/me/">Home</Link> {`> Terms & Conditions`}
        </div>
      </div>
      <div className="flex justify-between myContainer py-6 mx-auto md:gap-20 flex-col md:flex-row mb-10 max-md:px-4 mt-14 relative ">
        <div className=" font-medium">
          <p className="text-[15px] leading-[24px] text-[#2A2A2A] ">
            Thank You for visiting Gogrades and also for choosing us to satisfy
            your academic needs. But you are highly advised to read this
            document thoroughly and understand our conditions prior using our
            academic services. If you do not agree with our exclusive
            conditions, do not place any order.
            <br />
            Ordering any assignment on this website means that you agree all the
            terms and conditions mentioned on this page.
          </p>
          <h2 className="border-l-8 pl-3  border-[#f7514e] text-[24px] leading-[24px] text-[#2a2a2a] text-left font-semibold my-6 ">
            1. Vocabulary
          </h2>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            “Website” means gogrades.org
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            “You,” “Yours” or “Customer” means you or any other person
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            “Writer” means the person who has agreed to complete your assignment
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            “We,” “Our” or “Company” means gogrades.org registered under the
            laws
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            “Order” means an electronic request paid for a particular product or
            service
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            “Quality Assurance Team” means a department working under the
            company&nbsp;s organizational structure to deliver quality output
          </p>
          <h2 className="border-l-8 pl-3  border-[#f7514e] text-[24px] leading-[24px] text-[#2a2a2a] text-left font-semibold my-6 ">
            2. Use of our Services
          </h2>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            Our company has professional academic writers, editors,
            proofreaders, and researchers for the delivery of finest assignment
            writing service.
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            The customer&nbsp;s contract with us will be effective immediately
            when the payment is received, and completed order is delivered.
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            Once the payment is received from you, our services will be liable
            to produce the customers with the standard quality as instructed.
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            Clients can file the complaints within seven days to us, if we fail
            to fulfill the client&nbsp;s expectations.
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            Clients are recommended to view our refund policy prior to asking
            for the reimbursement.
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            The completed order will be delivered to the email address without
            any extra charges.
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            The company assures to assist its clients 24/7 with their skilled
            customer service representatives.
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            We agree to assign qualified and experienced writers to create
            authentic and genuine documents.
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            Any unauthorized use of content of this website or delivered product
            can subject our clients to criminal or civil penalties.
          </p>
          <h2 className="border-l-8 pl-3  border-[#f7514e] text-[24px] leading-[24px] text-[#2a2a2a] text-left font-semibold my-6 ">
            3. Delivery Policy
          </h2>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            Gogrades is responsible for providing on-time delivery of ordered
            documents to its customers. In case, we fail to deliver the project
            on-time, then the customer can ask for a complete refund. We produce
            the papers according to the required specifications and standards.
            We promise for the delivery of fine quality contents to our
            customers.
          </p>
          <h2 className="border-l-8 pl-3  border-[#f7514e] text-[24px] leading-[24px] text-[#2a2a2a] text-left font-semibold my-6 ">
            4. No Plagiarism
          </h2>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            By agreeing to our conditions, you acknowledge that we reserve the
            right to cancel any contract, agreement, or arrangement, with any
            person who attempts to offer plagiarized products as original.
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            You also agree not to reveal any product delivered by us to the
            third party.
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            You will not distribute our delivered product any way for payment or
            other activities.
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            We reserve the right to refuse to carry out your work and services
            if we find that the client has used the delivered product in the
            form of plagiarism.
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            All the products we offer in the form of written materials should be
            used for reference or research purposes only.
          </p>
          <h2 className="border-l-8 pl-3  border-[#f7514e] text-[24px] leading-[24px] text-[#2a2a2a] text-left font-semibold my-6 ">
            5. Data Protection and Security
          </h2>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            We will never reveal your personally identifiable information (PII)
            other than as needed to do by the legal agency. Please go to our
            privacy policy that can be easily found on our website. You can
            gather detailed knowledge of our policies regarding data security.
            <br />
            Please refer to the policies section to get more information about
            the security of information.
          </p>
          <h2 className="border-l-8 pl-3  border-[#f7514e] text-[24px] leading-[24px] text-[#2a2a2a] text-left font-semibold my-6 ">
            6. Warranties
          </h2>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            By placing an order, you acknowledge that you completely agree with
            the above-stated points, as well as with the following points:
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            All information used from the provided paper must be properly cited.
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            All products we deliver should be used only as examples for
            reference or research. You must use for the purposes of learning the
            techniques for writing a paper in a right format and the correct
            citation style (MLA, APA, Chicago, Turabian, Harvard, etc.).
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            No copies of the product will be distributed, and you agree to
            destroy the product immediately after your reference or research
            use.
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            You agree to receive the latest information regarding offers or
            contests of the company. You can unsubscribe these updates as when
            required.
          </p>
          <h2 className="border-l-8 pl-3  border-[#f7514e] text-[24px] leading-[24px] text-[#2a2a2a] text-left font-semibold my-6 ">
            7. Amendments in Term of Service
          </h2>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            The company reserves the authority to change or modify these Terms
            and Conditions unilaterally.
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            We recommend that our clients keep any eye on any changes made to
            terms mentioned above on a regular basis.
          </p>
          <p className="flex justify-start  text-[15px] leading-[24px] text-[#2A2A2A] my-2">
            <FaCheck className="text-[#33e533] text-[12px] mr-1  h-[15px] w-[15px] " />
            It&nbsp;s our duty to reflect the changes immediately on the web
            pages.
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
              href={"/me/order?coupon=GG-50%off"}
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
