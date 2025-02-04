"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
      <title>Refund/Dispute Policy | Gogrades.org</title>
      <meta
        name="description"
        content="Get online assessment editing services and help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects."
        key="desc"
      />
      <link
        rel="canonical"
        href={`https://gogrades.org/uk/refund-policy`}
      ></link>

      <div className="bg-[url('/samplebanner.jpg')] py-[40px] max-md:pt-[70px]  bg-right bg-cover bg-blend-overlay bg-[#000]/50">
        <h1 className="text-[#fff] text-[26px] sm:text-[38px] text-center font-semibold">
          Refund/Dispute Policy
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
      <div className="flex justify-between myContainer py-6 mx-auto md:gap-20 flex-col md:flex-row mb-10 max-md:px-4 mt-8 md:mt-14 ">
        <div className=" font-medium">
          <p className="text-[15px] leading-[24px] text-[#2A2A2A] ">
            At Gogrades.org, we understand that students have different needs
            and expectations when it comes to their academic assignments.
            That&nbsp;s why our refund policy is designed to be fair and
            friendly to all of our customers. We want to ensure you are able to
            receive the service you require without having any negative
            experiences along the way. We are committed to providing top quality
            services for our customers and make sure that each task we complete
            meets the standards of academic excellence. However, if a customer
            feels that a content does not meet the expected quality standards or
            was not completed in a timely manner, then they can apply for a
            refund after getting atleast 7 revisions.
          </p>
          <h2 className="text-[18px] leading-[24px] text-[#2a2a2a] text-left font-semibold my-6 ">
            Here are the 11 circumstances under which customers can apply for a
            refund:
          </h2>
          <ol>
            <li className="text-[15px] leading-[24px] text-[#2A2A2A] my-4">
              1. If the customer has been mistakenly charged twice by credit
              card, Gogrades.org will return the extra amount immediately.
            </li>
            <li className="text-[15px] leading-[24px] text-[#2A2A2A] my-4">
              2. The client is not eligible for refunds on urgent orders (orders
              with a deadline of under 48 hours are considered urgent).
            </li>
            <li className="text-[15px] leading-[24px] text-[#2A2A2A] my-4">
              3. If the task delivered is of poor quality or fails to meet
              specified deadlines, the client is eligible for up to 50% refund
              only
            </li>
            <li className="text-[15px] leading-[24px] text-[#2A2A2A] my-4">
              4. If there is evidence of plagiarism in the submitted work in
              this situation client is eligible for up to 50% refund only
            </li>
            <li className="text-[15px] leading-[24px] text-[#2A2A2A] my-4">
              5. If the client does not like the work, they are not eligible for
              a refund until they provide authentic evidence client is eligible
              for up to 50% refund only.
            </li>
            <li className="text-[15px] leading-[24px] text-[#2A2A2A] my-4">
              6. The client is not eligible for a refund if they did not provide
              proper details or instructions at the time of placing the order.
            </li>
            <li className="text-[15px] leading-[24px] text-[#2A2A2A] my-4">
              7. If a customer service representative fails to respond to an
              inquiry within 48 hours client is eligible for up to 50% refund.
            </li>
            <li className="text-[15px] leading-[24px] text-[#2A2A2A] my-4">
              8. If, after 7-10 revisions, there is still no satisfactory result
              or improvement in the quality of work we&nbsp;ve provided, clients
              will be eligible for a 50% refund. This refund will only be
              applicable after seven days from the delivery date
            </li>
            <li className="text-[15px] leading-[24px] text-[#2A2A2A] my-4">
              9. We will process the refund within two weeks after receiving all
              evidence of the bad quality work or unsatisfactory result.
            </li>
            <li className="text-[15px] leading-[24px] text-[#2A2A2A] my-4">
              10. Plagiarism check results must be shared at the time of
              submission, as we are not responsible for any potential infections
              that may occur after submission or delivery completion
            </li>
            <li className="text-[15px] leading-[24px] text-[#2A2A2A] my-4">
              11. The client can only request revisions to their work within 30
              days. After 30 days, no free revisions or refunds will be given.
            </li>
          </ol>

          <p className="text-[15px] leading-[24px] text-[#2A2A2A] ">
            Refunds are not available for online exams. Once a purchase has been
            made or access to an online exam has been granted, it is considered
            a rendered service and cannot be refunded. We kindly request all
            customers to carefully review the exam details and requirements
            before making a purchase to ensure a smooth experience. Should you
            have any questions or concerns, our dedicated customer support team
            is readily available to assist you and provide further guidance. Our
            aim is to ensure a seamless process for all our valued customers.
            <br />
            <br />
            Refunds will generally be processed within two weeks from submission
            date upon receipt of valid evidence supporting bad quality work or
            fail results from client&nbsp;s end. We offer a refund only if the
            original deadline of the assignment is missed by us. In case of
            revision, a new deadline has to be mutually decided. No refund
            claims can be made if a revision deadline was not decided.
            <br />
            <br />
            Full refund= 90% of the amount paid. 10% deduction is transaction
            cost paid to the payment Gateway Company plus service charges. Any
            queries regarding refund requests should be directed towards
            Customer Support Team first before initiating any dispute/refund
            request process with payment gateway provider or any other financial
            institute/authority.
          </p>
          <h3 className="text-[18px] text-[#2a2a2a] uppercase mt-5 mb-3">
            Note:
          </h3>
          <p className="italic underline text-[17px] leading-[24px] text-[#2A2A2A]">
            If our financial team finds that a customer has opened a fraudulent
            dispute though bank without discussing the issue with us, we are
            unable to issue a refund. Our legal team may take legal action
            against the online fraud as per country laws.
          </p>
          <br />
          <p className="text-[15px] leading-[24px] text-[#2A2A2A]">
            We take our customer&nbsp;s satisfaction seriously, and we strive to
            resolve any issues or concerns as quickly as possible. Please
            don&nbsp;t hesitate to contact us if you have any questions or
            concerns about our refund/dispute policy.
            <br />
            <br />
            Should a client feel unsatisfied with Gogrades&nbsp; services and
            wishes to seek a refund in order to resolve this issue, please
            contact our team through email at
            <Link href="mailto:support@gogrades.org" className="text-blue-800">
              {" "}
              support@gogrades.org
            </Link>{" "}
            and provide details on your concern so that our Customer Support
            Team can handle it efficiently and speedily.
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
