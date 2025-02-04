"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import CountryCode from "./CountryCode";
export default function FreeSampleTest({
  locationDetails,
  country,
  title,
}: any) {
  const [number, setIsNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [userNamecheck, setUserNamecheck] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userEmailcheck, setUserEmailcheck] = useState(false);
  const [OK, setIsOK] = useState(true);
  const [numberCheck, setIsNumberCheck] = useState(false);
  const [subject, setSubject] = useState("Business");
  const [description, setDescription] = useState("");
  const phoneInputRef = useRef(null);
  const [modal, setModal] = useState(false);
  const modalChange = (modal: any) => {
    setModal(false);
  };

  useEffect(() => {
    number !== "" ? setIsNumberCheck(true) : setIsNumberCheck(false);
    userEmail !== "" ? setUserEmailcheck(true) : setUserEmailcheck(false);
    userName !== "" ? setUserNamecheck(true) : setUserNamecheck(false);
  }, [userEmail, userName, number, subject, country]);

  useEffect(() => {
    const input = phoneInputRef.current;
    if (input) {
      const iti = intlTelInput(input, {
        initialCountry: "CA",
      });

      // Clean up the event listener when the component unmounts
      return () => {
        iti.destroy();
      };
    }
  }, [phoneInputRef]);


  return (
    <div className="bg-[url('/last.jpg')] w-[100%] py-[75px] flex flex-col gap-1  justify-center items-center px-[10px]">
      <h4 className="font-black text-[22px] md:text-[28px] uppercase fontchange  give-shadow">
        - Free Free Free -
      </h4>

      <h4 className="text-white md:text-[#071E57] text-[20px] md:text-[30px] font-semibold text-center">
        Ready to get your FREE Sample?
      </h4>
      <h5 className="text-white md:text-[#3E4657] text-[16px] mt-[-2px] text-center">
        Setup is done in minutes. Your first {title ? title : ` Assignment`} is
        ready in hours.
      </h5>
      <button
        style={{
          background:
            "transparent linear-gradient(91deg,#f9413e 0%,#f7514e 100%) 0 0 no-repeat",
        }}
        onClick={() => setModal(true)}
        className="py-[11px] px-[35px] text-white font-semibold text-[16px] sm:text-[22px] mt-4 hover:shadow-2xl transition-all duration-100"
      >
        Send Me My FREE Sample
      </button>

      {/* //////////////////////////////////////////////////////////////////////////////// */}
      {/*             MODAL  MODAL    MODAL    MODAL    MODAL       MODAL                             */}
      {modal ? (
        <>
          <div className="justify-center items-center flex overflow-y-auto  md:overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none h-screen">
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
    </div>
  );
}
