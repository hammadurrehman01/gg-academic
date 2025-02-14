"use client";
import { showToastError } from "@/lib/ToastMessages";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaCheck, FaEnvelope, FaUser } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { PiStarFill, PiStarHalfFill } from "react-icons/pi";
import { ClipLoader } from "react-spinners";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "@/components/herosection/herosection.css";
import GetTimeLeft from "./countdown/Countdown";
import openTawkToChat from "./herosection/tawkto";
import CustomCaptcha from "./common/CustomCaptcha";
import Image from "next/image";
import { toast } from "react-toastify";
import CustomPhoneInput from "./common/CustomPhoneInput";

export default function HerosectionTest(props: any) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [phone, setPhone] = useState<any>("");
  const [reg, setReg] = useState("");
  const [loader, setLoader] = useState(false);
  const [currentURL, setCurrentURL] = useState("");
  const [displayText, setDisplayText] = useState("...");
  const { country, city, title, region, locationDetails } = props;
  const [isVerifiedCaptcha, setIsVerifiedCaptcha] = useState(false);
  const [code, setCode] = useState("");

  // const [displayTyperText, setDisplayTyperText] = useState("");
  // const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // const typerTexts = [
  //   "let's connect with our Professors!", // Default text
  //   "Connect with Our Dedicated Academic Experts",
  //   "Reach Out to Our Experienced Professors",
  //   "Engage with Our Team of Skilled Academic Writers",
  //   "Get Guidance from Our Expert Team",
  // ];

  // const typeWriterSpeed = 100; // Typing speed in milliseconds
  // const pauseTime = 1000; // Delay before moving to the next text

  // useEffect(() => {
  //   let currentText = "";
  //   let index = 0;

  //   const typeText = () => {
  //     if (index < typerTexts[currentTextIndex].length) {
  //       currentText += typerTexts[currentTextIndex][index];
  //       setDisplayTyperText(currentText);
  //       index++;
  //     } else {
  //       // Pause before switching to the next text
  //       setTimeout(() => {
  //         index = 0;
  //         currentText = "";
  //         setDisplayTyperText(""); // Clear text before typing next
  //         setCurrentTextIndex((prev) => (prev + 1) % typerTexts.length);
  //       }, pauseTime);
  //       return;
  //     }
  //   };

  //   const intervalId = setInterval(typeText, typeWriterSpeed);

  //   // Cleanup interval on unmount
  //   return () => clearInterval(intervalId);
  // }, [currentTextIndex]);

  const router = useRouter();

  useEffect(() => {
    // Get the current URL using window.location
    const currentURL = window.location.href;
    setCurrentURL(currentURL);
    // Log the current URL to the console (or do whatever you need with it)
  }, []);

  useEffect(() => {
    if (region !== undefined) {
      setReg(region);
    } else {
      setReg("");
    }
  }, [region]);

  let speed = 80;

  useEffect(() => {
    let currentText = "";
    let index = 0;

    const intervalId = setInterval(() => {
      currentText += city[index];
      setDisplayText(currentText);
      index += 1;

      if (index === city.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => {
      clearInterval(intervalId);
    };
  }, [city, speed]);

  const formData = new FormData();

  useEffect(() => {
    let oldName = localStorage.getItem("oldName");
    let oldEmail = localStorage.getItem("oldEmail");
    let oldNumber = localStorage.getItem("oldNumber");
    if (oldName) {
      setUserName(oldName as string);
    }
    if (oldEmail) {
      setUserEmail(oldEmail as string);
    }
    if (oldNumber) {
      setPhone(oldNumber as string);
    }
  }, []);

  const handleSubmit = async () => {
    if (!userName || !phone || !userEmail) {
      toast.error("First fill the inputs");
      return;
    }

    if (!isVerifiedCaptcha) {
      const verified = showToastError(isVerifiedCaptcha);
      if (verified) {
        return;
      }
    }

    formData.append("phone_code", code);
    formData.append("Name", userName);
    formData.append("Phone", phone);
    formData.append("Email", userEmail);
    formData.append("currentURL", currentURL);
    formData.append("locationDetails", JSON.stringify(locationDetails));
    formData.append("access_token", "AAH-DLF_Form");

    localStorage.setItem("oldName", userName);
    localStorage.setItem("oldEmail", userEmail);
    localStorage.setItem("oldNumber", phone);

    setLoader(true);

    try {
      const response = await fetch("/api/dlf2", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        router.push(`/thankyou`);
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    // Function to be called every second
    const yourFunction = () => {
      // Add your logic here
      let activeCountryElement: any;
      if (document !== undefined) {
        activeCountryElement = (document as any).querySelector(
          ".iti__flag-container .iti__selected-flag"
        ) as HTMLInputElement | null;
        if (activeCountryElement !== null) {
          const dialCode = activeCountryElement
            ?.getAttribute("title")
            ?.split(" ")
            ?.at(-1);

          setCode(dialCode);
          localStorage.setItem("oldCode", dialCode);
        }
      }
    };

    // Set up the interval
    const intervalId = setInterval(yourFunction, 500);

    // Clear the interval after 5 seconds
    setTimeout(() => {
      clearInterval(intervalId);
    }, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount

  useEffect(() => {
    let activeCountryElement: any;
    if (document !== undefined) {
      activeCountryElement = (document as any).querySelector(
        ".iti__flag-container .iti__selected-flag"
      ) as HTMLInputElement | null;
      if (activeCountryElement !== null) {
        const dialCode = activeCountryElement
          ?.getAttribute("title")
          ?.split(" ")
          ?.at(-1);

        setCode(dialCode);
      }
    }
  }, [phone]);

  let img;
  if (country == "UK") {
    img = "/GGImages/Banner/UK-Banner.jpg";
  } else if (country == "IE") {
    img = "/GGImages/Banner/IE-Banner.jpg";
  } else if (country == "AU") {
    img = "/GGImages/Banner/AUS-Banner.jpg";
  } else if (country == "GB") {
    img = "/GGImages/Banner/UK-Banner.jpg";
  } else if (country == "NL") {
    img = "/GGImages/Banner/NL-Banner.jpg";
  } else if (country == "NO") {
    img = "/GGImages/Banner/NO-Banner.jpg";
  } else if (country == "NZ") {
    img = "/GGImages/Banner/NZ-Banner.jpg";
  } else if (country == "OM") {
    img = "/GGImages/Banner/OM-Banner.jpg";
  } else if (country == "AE") {
    img = "/GGImages/Banner/UAE-Banner.jpg";
  } else if (country == "US") {
    img = "/GGImages/DLF/US-DLF.jpg";
  } else if (country == "TR") {
    img = "/GGImages/Banner/TR-Banner.jpg";
  } else if (country == "PL") {
    img = "/GGImages/Banner/PL-Banner.jpg";
  } else if (country == "IT") {
    img = "/GGImages/Banner/IT-Banner.jpg";
  } else if (country == "FI") {
    img = "/GGImages/Banner/FI-Banner.jpg";
  } else if (country == "SE") {
    img = "/GGImages/Banner/SE-Banner.jpg";
  } else if (country == "AT") {
    img = "/GGImages/Banner/AT-Banner.jpg";
  } else if (country == "IS") {
    img = "/GGImages/Banner/IS-Banner.jpg";
  } else if (country == "CA") {
    img = "/GGImages/Banner/CA-Banner.jpg";
  } else if (country == "MX") {
    img = "/GGImages/Banner/maxicoBanner-min.jpg";
  } else {
    img = "/GGImages/Banner/UK-Banner.jpg";
  }

  // ////////////////////////////////////////////////////////////////////////////////////////////////
  //                          DLF IMAGES

  let img2;
  if (country == "UK") {
    img2 = "/GGImages/DLF/UK-DLF.jpg";
  } else if (country == "IE") {
    img2 = "/GGImages/DLF/IE-DLF.jpg";
  } else if (country == "AU") {
    img2 = "/GGImages/DLF/AUS-DLF.jpg";
  } else if (country == "GB") {
    img2 = "/GGImages/DLF/UK-DLF.jpg";
  } else if (country == "NL") {
    img2 = "/GGImages/DLF/NL-DLF.jpg";
  } else if (country == "NO") {
    img2 = "/GGImages/DLF/NO-DLF.jpg";
  } else if (country == "NZ") {
    img2 = "/GGImages/DLF/NZ-DLF.jpg";
  } else if (country == "OM") {
    img2 = "/GGImages/DLF/OM-DLF.jpg";
  } else if (country == "AE") {
    img2 = "/GGImages/DLF/UAE-DLF.jpg";
  } else if (country == "US") {
    img2 = "/GGImages/Banner/US-Banner.jpg";
  } else if (country == "TR") {
    img2 = "/GGImages/DLF/TR-DLF.jpg";
  } else if (country == "PL") {
    img2 = "/GGImages/DLF/PL-DLF.jpg";
  } else if (country == "IT") {
    img2 = "/GGImages/DLF/IT-DLF.jpg";
  } else if (country == "FI") {
    img2 = "/GGImages/DLF/FI-DLF.jpg";
  } else if (country == "SE") {
    img2 = "/GGImages/DLF/SE-DLF.jpg";
  } else if (country == "AT") {
    img2 = "/GGImages/DLF/AT-DLF.jpg";
  } else if (country == "IS") {
    img2 = "/GGImages/DLF/IS-DLF.jpg";
  } else if (country == "CA") {
    img2 = "/GGImages/DLF/CA-DLF.jpg";
  } else if (country == "MX") {
    img2 = "/GGImages/DLF/MX-DLF.jpg";
  } else {
    img2 = "/GGImages/DLF/UK-DLF.jpg";
  }

  const phoneInputRef = useRef(null);

  useEffect(() => {
    const input = phoneInputRef.current;
    if (input) {
      const iti = intlTelInput(input, {
        initialCountry: country,
      });

      // Clean up the event listener when the component unmounts
      return () => {
        iti.destroy();
      };
    }
  }, [phoneInputRef, country]);
  const [validEmail, setIsValidEmail] = useState(true);
  // const handleInputChange = (event: any) => {
  //   const newEmail = event.target.value;
  //   setUserEmail(newEmail);

  //   // Check if the email contains &apos;@&apos;
  //   setIsValidEmail(newEmail.includes("@"));
  // };

  const pathname = usePathname();

  function getTitle(title: string) {
    if (!title) {
      return "Best Academic Assistance Team";
    } else if (title.includes("Professional")) {
      return title;
    } else if (title.includes("can")) {
      return title;
    } else if (title.includes("Premium")) {
      return title;
    }
    return `Best ${title}`;
  }
  if (
    pathname === `/writing-experts-services` &&
    `${reg}/writing-experts-services`
  ) {

    return (
      <div
        className={` bg-no-repeat bg-cover bg-center bg-blend-overlay bg-[#000]/50 bg-["transparent linear-gradient(90deg,#333839 0%,rgba(34,36,38,0.8705882353) 45%,rgba(17,95,212,0) 65%) 0 0 no-repeat"] relative`}
        style={{
          backgroundImage: `url(${img})`,
          // background:
          //   "transparent linear-gradient(90deg,#333839 0%,rgba(34,36,38,0.8705882353) 45%,rgba(17,95,212,0) 65%) 0 0 no-repeat",
        }}
      >
        {/* <img
        src={img}
        alt="background"
        className="absolute w-[100%] h-[100%] z-[-10] animate scale"
      /> */}
        <div
          className=" flex lg:flex-row flex-col justify-between items-center gap-y-6 lg:items-start py-[40px] md:gap-0 gap-6 lg:gap-3 lg:px-[70px]  md:px-[35px] sm:px-[20px] px-[12px] mx-auto max-w-7xl"
          // style={{ maxWidth: "76rem !important" }}
        >
          <div className="flex flex-col gap-0 md:gap-2 mt-[-20px]">
            <p className="pt-7  text-[#f3c30e] text-[13px] sm:text-[22px] font-bold uppercase max-lg:text-center leading-snug">
              Expert Assistance for Every Task
            </p>
            <p className="text-[#63cc70] text-[14px] sm:text-[18px] uppercase font-black max-lg:text-center">
              - AFFORDABLE - FASTEST - 100% SECURED -
            </p>
            <h1 className="text-[20px] sm:text-[32px] lg:text-[25px] text-white lg:leading-[50px] font-semibold  max-md:text-center  max-w-2xl">
              Best Writing, Editing & Proofreading Services
              <br />
              <span className="text-[14px] md:text-[18px] font-medium lg:text-[20px] whitespace-nowrap ">
                Any Task, Any Subject, Any Deadline 100% Human Written, No AI
              </span>
            </h1>

            <div className="flex items-center gap-4 mt-2 flex-col md:flex-row md: ">
              <p className="text-[#f3c30e] whitespace-nowrap text-[15px] sm:text-[14px] font-semibold uppercase max-md:text-center">
                Quality Assurance Guaranteed
                <br />
                Achieve A+ Results
              </p>
              <Link
                href={`${reg}/order?coupon=GG-50%off`}
                className="uppercase text-[14px] font-semibold button bg-[#125e30] hover:bg-[#125e30]/90 animate-bounce hover:animate-none shadow-lg text-white py-[8px] px-[16px] rounded-full max-md:text-center max-md:w-[100%]"
              >
                Place your order
              </Link>
              <button
                onClick={openTawkToChat}
                className="text-[#3E4657] bg-[#bdd7ff] font-semibold px-[20px] py-[8px] text-[14px] rounded-full shadow-lg text-center max-md:w-[100%] flex items-center justify-center gap-2 hover:bg-[#bdd7ff]/90"
              >
                <IoIosChatboxes className="text-[24px] animate-ping-slow" />{" "}
                Speak to an Expert
              </button>
            </div>
            <div className="flex items-center  gap-5 text-white font-medium text-[12px] md:text-[20px] leading-[20px] mt-5 max-sm:text-center max-sm:justify-center">
              <div className=" items-center sm:flex hidden">
                <img
                  src="/hero11.png"
                  alt="hero3"
                  className="h-[100%] w-[38px] "
                />
                <div className="">
                  <h2>4500+ Experts</h2>
                  <h3 className="text-[10px] md:text-[14px]">
                    Online to help you 24x7
                  </h3>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="/hero2.png"
                  alt="hero2"
                  className="h-[100%] w-[38px]"
                />
                <div>
                  <h3>Rated 4.8/5</h3>
                  <h4 className="text-[10px] md:text-[14px]">
                    Out of 5087 Reviews
                  </h4>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="/hero3.png"
                  alt="hero3"
                  className="h-[100%] w-[38px]"
                />
                <div>
                  <h3 className="text-[10px] md:text-[14px] w-fit px-1 py-[1px] bg-[#125e30] uppercase">
                    Free
                  </h3>
                  <h4 className="text-[12px] md:text-[20px]">
                    AI & Turnitin Report
                  </h4>
                </div>{" "}
              </div>
            </div>
            <div className="flex gap-3  text-white mt-3 max-sm:justify-center items-center ">
              <div className="bg-[#1c3d72a6] p-1 rounded-xl flex flex-col justify-start max-sm:w-[47%]">
                <h4 className="flex items-center gap-1 text-[12px] md:text-[16px] leading-tight">
                  <span className=" text-[12px] md:text-[16px]">
                    <FaCheck className="text-[#33e533] font-black" />
                  </span>
                  Satisfaction Guaranteed
                </h4>
                <h4 className="flex items-center gap-1 text-[12px] md:text-[16px] leading-tight">
                  <span className=" text-[12px] md:text-[16px]">
                    <FaCheck className="text-[#33e533] font-black" />
                  </span>
                  Experienced Teachers
                </h4>
                <h4 className="flex items-center gap-1 text-[12px] md:text-[16px] leading-tight">
                  <span className=" text-[12px] md:text-[16px]">
                    <FaCheck className="text-[#33e533] font-black" />
                  </span>
                  Time Flexibility
                </h4>
              </div>
              <div className="bg-[#1c3d72a6] p-1 rounded-xl flex flex-col justify-start max-sm:w-[47%]">
                <h4 className="flex items-center gap-1 text-[12px] md:text-[16px] leading-tight">
                  <span className=" text-[12px] md:text-[16px]">
                    <FaCheck className="text-[#33e533] font-black" />
                  </span>
                  Very Low Pricing
                </h4>
                <h4 className="flex items-center gap-1 text-[12px] md:text-[16px] leading-tight">
                  <span className=" text-[12px] md:text-[16px]">
                    <FaCheck className="text-[#33e533] font-black" />
                  </span>
                  Fastest Turnaround Time
                </h4>
                <h4 className="flex items-center gap-1 text-[12px] md:text-[16px] leading-tight">
                  <span className=" text-[12px] md:text-[16px]">
                    <FaCheck className="text-[#33e533] font-black" />
                  </span>
                  Professional Proofreaders
                </h4>
              </div>
              <div className="bg-[#1c3d72a6] p-1 rounded-xl hidden sm:flex flex-col justify-start max-sm:w-[96%]">
                <h4 className="flex items-center gap-1 text-[12px] md:text-[16px] leading-tight">
                  <span className=" text-[12px] md:text-[16px]">
                    <FaCheck className="text-[#33e533] font-black" />
                  </span>
                  100% Secure & Trusty
                </h4>
                <h4 className="flex items-center gap-1 text-[12px] md:text-[16px] leading-tight">
                  <span className=" text-[12px] md:text-[16px]">
                    <FaCheck className="text-[#33e533] font-black" />
                  </span>
                  24/7 Chat Support
                </h4>
                <h4 className="flex items-center gap-1 text-[12px] md:text-[16px] leading-tight">
                  <span className=" text-[12px] md:text-[16px]">
                    <FaCheck className="text-[#33e533] font-black" />
                  </span>
                  Guaranteed Results
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-5 mt-4 max-sm:justify-center">
              <Link href="/academic-helpers#reviews" className="cursor-pointer">
                <div className="flex text-white gap-1 items-start ">
                  <Image
                    height={"100"}
                    width={"100"}
                    src={"/sitejaabr.svg"}
                    alt="img"
                    className="w-[30px] h-fit m-2"
                  />
                  <div>
                    <h5 className=" text-[11px] md:text-[22px] font-medium">
                      Sitejabber
                    </h5>
                    <div className="flex justify-center items-center gap-[2px]">
                      <PiStarFill className="text-[#eaaf16] text-[16px]" />
                      <PiStarFill className="text-[#eaaf16] text-[16px]" />
                      <PiStarFill className="text-[#eaaf16] text-[16px]" />
                      <PiStarFill className="text-[#eaaf16] text-[16px]" />
                      <PiStarHalfFill className="text-[#eaaf16] text-[16px]" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/academic-helpers#reviews">
                <div className="flex text-white gap-1 items-start ">
                  <img
                    height={"100"}
                    width={"100"}
                    src={"/reseller.svg"}
                    alt="img"
                    className="w-[30px] h-fit m-2"
                  ></img>
                  <div>
                    <h5 className="text-[11px] md:text-[22px] font-medium">
                      Reseller Ratings
                    </h5>
                    <div className="flex justify-center items-center gap-[2px]">
                      <PiStarFill className="text-[#eaaf16] text-[16px]" />
                      <PiStarFill className="text-[#eaaf16] text-[16px]" />
                      <PiStarFill className="text-[#eaaf16] text-[16px]" />
                      <PiStarFill className="text-[#eaaf16] text-[16px]" />
                      <PiStarHalfFill className="text-[#eaaf16] text-[16px]" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/academic-helpers#reviews">
                <div className="hidden sm:flex text-white gap-1 items-start ">
                  {/* check */}
                  <img
                    height={"100"}
                    width={"100"}
                    src={"/favicon.png"}
                    alt="img"
                    className="w-[30px] h-fit mt-2"
                  ></img>
                  <div>
                    <h5 className="text-[11px] md:text-[22px] font-medium">
                      Gogrades.org
                    </h5>
                    <div className="flex justify-center items-center gap-[2px]">
                      <PiStarFill className="text-[#eaaf16] text-[16px]" />
                      <PiStarFill className="text-[#eaaf16] text-[16px]" />
                      <PiStarFill className="text-[#eaaf16] text-[16px]" />
                      <PiStarFill className="text-[#eaaf16] text-[16px]" />
                      <PiStarHalfFill className="text-[#eaaf16] text-[16px]" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* /////////                             INPUT CARD                                              ////////*/}

          <div className="shadow-lg w-[100%] max-w-[400px] rounded-md overflow-hidden lg:mt-[-20px] max-lg:mt-6">
            <div
              className=" bg-cover bg-top bg-[#000]/70 bg-blend-overlay text-white flex flex-col  justify-center items-center rounded-t-2xl py-2 px-[5px]"
              style={{ backgroundImage: `url(${img2})` }}
            >
              <h4 className="font-semibold max-sm:text-[14px] text-[16px] text-center">
                <span className="text-[22px] max-sm:text-[18px] font-bold">
                  {displayText}
                </span>{" "}
                Special Discount
              </h4>
              <h5 className="font-bold text-[30px] text-[#cce0ff]">
                Flat 50% OFF
              </h5>
              <h5 className="font-bold text-[16px] mt-[-2px] text-center">
                {" "}
                Get Free AI & Plagiarism Report
              </h5>
            </div>
            <div
              className=" rounded-b-2xl p-4 flex flex-col gap-4"
              style={{
                background: "linear-gradient(45deg, #edf4ff 74%, #00000057)",
              }}
            >
              <div className="flex justify-center items-center">
                <img
                  height={"90"}
                  width={"90"}
                  src={"/guaranteed.svg"}
                  alt="img"
                  className=" h-[90px]"
                ></img>
                <img
                  height={"90"}
                  width={"90"}
                  src={"/moneyback.svg"}
                  alt="img"
                  className=" h-[90px]"
                ></img>
                <img
                  height={"90"}
                  width={"90"}
                  src={"/privacy-icon.svg"}
                  alt="img"
                  className=" h-[80px]"
                ></img>
              </div>
              <div className="flex items-center justify-center border border-[#ced4da]  bg-white overflow-hidden rounded-[4px]">
                <div className="py-[.375rem] px-[.75rem]  ">
                  <FaUser className="text-[#495057]" />
                </div>
                <input
                  defaultValue={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  type="text"
                  placeholder="Full Name"
                  className="w-[100%] h-[38px] placeholder:text-[#495057] border-l border-[#ced4da] px-[.75rem]"
                />
              </div>
              <div className="w-full">
                <CustomPhoneInput
                  placeholder="Enter Your Phone Number"
                  countryCode={locationDetails.countryCode}
                  phone={phone}
                  setPhone={setPhone}
                />
              </div>
              <div className="flex items-center justify-center border border-[#ced4da]  bg-white overflow-hidden rounded-[4px]">
                <div className="py-[.375rem] px-[.75rem]  ">
                  <FaEnvelope className="text-[#495057]" />
                </div>
                <input
                  defaultValue={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  type="email"
                  placeholder="Email Address"
                  className="w-[100%] h-[38px] placeholder:text-[#495057] border-l border-[#ced4da] px-[.75rem]"
                />
              </div>
              {validEmail == false && (
                <p className="text-red-500">
                  Email must contain &apos;@&apos; symbol.
                </p>
              )}
              <div className="flex items-center justify-center gap-6 mt-[-10px]">
                <img
                  height={"80"}
                  width={"80"}
                  src={"/Special-Offer.png"}
                  alt="img"
                  className="h-fit mt-2"
                ></img>
                <GetTimeLeft />
              </div>

              {/* {loader && (
              <div role="status " className="flex justify-center">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-900 fill-blue-400"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            )} */}
              <button
              disabled={!isVerifiedCaptcha}
                onClick={handleSubmit}
                className="group relative inline-flex items-center justify-start overflow-hidden rounded-xl bg-[#125e30] px-8 py-4 font-medium transition-all"
              >
                <span className="absolute right-0 top-0 inline-block h-4 w-4 rounded bg-[#0d4724] transition-all duration-500 ease-in-out group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute right-0 top-0 h-5 w-5 -translate-y-1/2 translate-x-1/2 rotate-45 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 h-full w-full -translate-x-full translate-y-full rounded-2xl bg-[#0d4724] transition-all delay-200 duration-500 ease-in-out group-hover:mb-14 group-hover:translate-x-0"></span>
                <span className="relative w-full font-bold text-white text-[16px] text-center transition-colors duration-200 ease-in-out group-hover:text-white">
                  {loader ? (
                    <span className="flex items-center justify-center gap-2 font-bold text-white text-[16px]">
                      <ClipLoader size={"20"} color="#ddd" /> {"Processing.."}
                    </span>
                  ) : (
                    <p className="leading-[19px]">
                      Request a Free Quote
                      <br />
                      <span className="text-[12px]  font-thin leading- ">
                        Get Reply in Minutes!
                      </span>
                    </p>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={` bg-no-repeat bg-cover bg-center bg-blend-overlay bg-[#000]/50 bg-["transparent linear-gradient(90deg,#333839 0%,rgba(34,36,38,0.8705882353) 45%,rgba(17,95,212,0) 65%) 0 0 no-repeat"] relative`}
        style={{
          backgroundImage: `url(${img})`,
          // background:
          //   "transparent linear-gradient(90deg,#333839 0%,rgba(34,36,38,0.8705882353) 45%,rgba(17,95,212,0) 65%) 0 0 no-repeat",
        }}
      >
        {/* <img
        src={img}
        alt="background"
        className="absolute w-[100%] h-[100%] z-[-10] animate scale"
      /> */}
        <div
          className="  flex lg:flex-row flex-col justify-between items-center gap-y-6 lg:items-start py-[40px] md:gap-0 gap-6 lg:gap-3 lg:px-[70px]  md:px-[35px] sm:px-[20px] px-[12px] mx-auto max-w-7xl"
          // style={{ maxWidth: "76rem !important" }}
        >
          <div className="flex flex-col gap-0 md:gap-2 mt-[-20px]">
            <p className="pt-7 text-[#f3c30e] text-[13px] sm:text-[22px] font-bold uppercase max-lg:text-center leading-snug">
              BEST ACADEMIC HELPER
            </p>
            <p className="text-[#63cc70] text-[14px] sm:text-[18px] uppercase font-black max-lg:text-center">
              - AFFORDABLE - FASTEST - 100% SECURED -
            </p>
            <h1 className="text-[20px] sm:text-[32px] lg:text-[30px] text-white lg:leading-[50px] font-semibold  max-md:text-center  max-w-2xl">
              {/* {title ? ` Premier  ${title}` : ` Premier Assignment Help`} */}{" "}
              {getTitle(title)}
              {/* <span className=""> {displayText}</span> */}
              <br />
              <span className="text-[14px] md:text-[20px] font-medium lg:text-[22px] whitespace-nowrap tracking-wider">
                All Subjects Are Accepted With Any Deadline
              </span>
            </h1>

            <div className="flex items-center gap-4 mt-2 flex-col md:flex-row md: ">
              <p className="text-[#f3c30e]  text-[15px] sm:text-[20px] font-semibold uppercase max-md:text-center">
                Achieve A+ Results
              </p>
              <Link
                href={`${reg}/order?coupon=GG-50%off`}
                className="uppercase text-[14px] font-semibold button bg-[#125e30] hover:bg-[#125e30]/90 animate-bounce hover:animate-none shadow-lg text-white py-[8px] px-[16px] rounded-full max-md:text-center max-md:w-[100%]"
              >
                Place your order
              </Link>
              <button
                onClick={openTawkToChat}
                className="text-[#3E4657] bg-[#bdd7ff] font-semibold px-[20px] py-[8px] text-[14px] rounded-full shadow-lg text-center max-md:w-[100%] flex items-center justify-center gap-2 hover:bg-[#bdd7ff]/90"
              >
                <IoIosChatboxes className="text-[24px] animate-ping-slow" />{" "}
                Discuss With Experts
              </button>
            </div>
            <div className="flex items-center  gap-5 text-white font-medium text-[12px] md:text-[20px] leading-[20px] mt-5 max-sm:text-center max-sm:justify-center">
              <div className=" items-center sm:flex hidden">
                <img
                  src="/hero11.png"
                  alt="hero3"
                  className="h-[100%] w-[38px] "
                />
                <div className="">
                  <h2>4500+ Experts</h2>
                  <h3 className="text-[10px] md:text-[14px]">
                    Online to help you 24x7
                  </h3>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="/hero2.png"
                  alt="hero2"
                  className="h-[100%] w-[38px]"
                />
                <div>
                  <h3>Rated 4.8/5</h3>
                  <h4 className="text-[10px] md:text-[14px]">
                    Out of 5087 Reviews
                  </h4>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="/hero3.png"
                  alt="hero3"
                  className="h-[100%] w-[38px]"
                />
                <div>
                  <h3 className="text-[10px] md:text-[14px] w-fit px-1 py-[1px] bg-[#125e30] uppercase">
                    Free
                  </h3>
                  <h4 className="text-[12px] md:text-[20px]">
                    AI & Turnitin Report
                  </h4>
                </div>{" "}
              </div>
            </div>
            <div className="flex gap-3  text-white mt-3 max-sm:justify-center items-center ">
              <div className="bg-[#1c3d72a6] p-1 rounded-xl flex flex-col justify-start max-sm:w-[47%]">
                <h4 className="flex items-center gap-1 text-[12px] md:text-[16px] leading-tight">
                  <span className=" text-[12px] md:text-[16px]">
                    <FaCheck className="text-[#33e533] font-black" />
                  </span>
                  Satisfaction Guaranteed
                </h4>
                <h4 className="flex items-center gap-1 text-[12px] md:text-[16px] leading-tight">
                  <span className=" text-[12px] md:text-[16px]">
                    <FaCheck className="text-[#33e533] font-black" />
                  </span>
                  Experienced Teachers
                </h4>
                <h4 className="flex items-center gap-1 text-[12px] md:text-[16px] leading-tight">
                  <span className=" text-[12px] md:text-[16px]">
                    <FaCheck className="text-[#33e533] font-black" />
                  </span>
                  Time Flexibility
                </h4>
              </div>
              <div className="bg-[#1c3d72a6] p-1 rounded-xl flex flex-col justify-start max-sm:w-[47%]">
                <h4 className="flex items-center gap-1 text-[12px] md:text-[16px] leading-tight">
                  <span className=" text-[12px] md:text-[16px]">
                    <FaCheck className="text-[#33e533] font-black" />
                  </span>
                  Very Low Pricing
                </h4>
                <h4 className="flex items-center gap-1 text-[12px] md:text-[16px] leading-tight">
                  <span className=" text-[12px] md:text-[16px]">
                    <FaCheck className="text-[#33e533] font-black" />
                  </span>
                  Fastest Turnaround Time
                </h4>
                <h4 className="flex items-center gap-1 text-[12px] md:text-[16px] leading-tight">
                  <span className=" text-[12px] md:text-[16px]">
                    <FaCheck className="text-[#33e533] font-black" />
                  </span>
                  Professional Proofreaders
                </h4>
              </div>
              <div className="bg-[#1c3d72a6] p-1 rounded-xl hidden sm:flex flex-col justify-start max-sm:w-[96%]">
                <h4 className="flex items-center gap-1 text-[12px] md:text-[16px] leading-tight">
                  <span className=" text-[12px] md:text-[16px]">
                    <FaCheck className="text-[#33e533] font-black" />
                  </span>
                  100% Secure & Trusty
                </h4>
                <h4 className="flex items-center gap-1 text-[12px] md:text-[16px] leading-tight">
                  <span className=" text-[12px] md:text-[16px]">
                    <FaCheck className="text-[#33e533] font-black" />
                  </span>
                  24/7 Chat Support
                </h4>
                <h4 className="flex items-center gap-1 text-[12px] md:text-[16px] leading-tight">
                  <span className=" text-[12px] md:text-[16px]">
                    <FaCheck className="text-[#33e533] font-black" />
                  </span>
                  Guaranteed Results
                </h4>
              </div>
            </div>
            <div className="flex  items-center gap-5 mt-4 max-sm:justify-center">
              <Link href="/academic-helpers/#reviews">
                <div className="flex text-white gap-1 items-start">
                  <img
                    height={"100"}
                    width={"100"}
                    src={"/sitejaabr.svg"}
                    alt="img"
                    className="w-[30px] h-fit m-2"
                  ></img>
                  <div>
                    <h5 className=" text-[11px] md:text-[22px] font-medium">
                      Sitejabber
                    </h5>
                    <div className="flex justify-center items-center gap-[2px]">
                      <PiStarFill className="text-[#eaaf16] text-[16px]" />
                      <PiStarFill className="text-[#eaaf16] text-[16px]" />
                      <PiStarFill className="text-[#eaaf16] text-[16px]" />
                      <PiStarFill className="text-[#eaaf16] text-[16px]" />
                      <PiStarHalfFill className="text-[#eaaf16] text-[16px]" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/academic-helpers/#reviews">
                <div className="flex text-white gap-1 items-start ">
                  <img
                    height={"100"}
                    width={"100"}
                    src={"/reseller.svg"}
                    alt="img"
                    className="w-[30px] h-fit m-2"
                  ></img>
                  <div>
                    <h5 className="text-[11px] md:text-[22px] font-medium">
                      Reseller Ratings
                    </h5>
                    <div className="flex justify-center items-center gap-[2px]">
                      <PiStarFill className="text-[#eaaf16] text-[16px]" />
                      <PiStarFill className="text-[#eaaf16] text-[16px]" />
                      <PiStarFill className="text-[#eaaf16] text-[16px]" />
                      <PiStarFill className="text-[#eaaf16] text-[16px]" />
                      <PiStarHalfFill className="text-[#eaaf16] text-[16px]" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/academic-helpers/#reviews">
                <div className="hidden sm:flex text-white gap-1 items-start ">
                  {/* check */}
                  <img
                    height={"100"}
                    width={"100"}
                    src={"/favicon.png"}
                    alt="img"
                    className="w-[30px] h-fit mt-2"
                  ></img>
                  <div>
                    <h5 className="text-[11px] md:text-[22px] font-medium">
                      Gogrades.org
                    </h5>
                    <div className="flex justify-center items-center gap-[2px]">
                      <PiStarFill className="text-[#eaaf16] text-[16px]" />
                      <PiStarFill className="text-[#eaaf16] text-[16px]" />
                      <PiStarFill className="text-[#eaaf16] text-[16px]" />
                      <PiStarFill className="text-[#eaaf16] text-[16px]" />
                      <PiStarHalfFill className="text-[#eaaf16] text-[16px]" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* /////////                             INPUT CARD                                              ////////*/}

          <div className="shadow-lg w-[100%] max-w-[400px] rounded-md overflow-hidden lg:mt-[-20px] max-lg:mt-6">
            <div
              className=" bg-cover bg-top bg-[#000]/70 bg-blend-overlay text-white flex flex-col  justify-center items-center rounded-t-2xl py-2 px-[5px]"
              style={{ backgroundImage: `url(${img2})` }}
            >
              <h4 className="font-semibold max-sm:text-[14px] text-[16px] text-center">
                <div className="flex flex-col">
                  <span className="tracking-wide text-lg capitalize">
                    Discounts for International students
                  </span>
                  {/* <span className="text-[22px] max-sm:text-[18px] font-bold text-center">
                    In {displayText}
                  </span>{" "} */}
                </div>
              </h4>
              <h5 className="font-bold text-[30px] text-[#cce0ff]">
                Flat 50% OFF
              </h5>
              <h5 className="font-bold text-[16px] mt-[-2px] text-center">
                {" "}
                Get Free AI & Plagiarism Report
              </h5>
            </div>
            <div
              className=" rounded-b-2xl p-4 flex flex-col gap-4 bg-white"
              // style={{
              //   background: "linear-gradient(45deg, #edf4ff 74%, #00000057)",
              // }}
            >
              <div className="flex justify-center items-center  text-lg font-bold capitalize">
                {/* {displayTyperText} */} let's connect with our Professors!
              </div>
              <div className="flex items-center justify-center border border-[#ced4da]  bg-white overflow-hidden rounded-[4px]">
                <div className="py-[.375rem] px-[.75rem]  ">
                  <FaUser className="text-[#495057]" />
                </div>
                <input
                  defaultValue={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  type="text"
                  placeholder="Full Name"
                  className="w-[100%] h-[38px] placeholder:text-[#495057] border-l border-[#ced4da] px-[.75rem]"
                />
              </div>
              <div className="w-full">
                <CustomPhoneInput
                  placeholder="Enter Your Phone Number"
                  countryCode={locationDetails.countryCode}
                  phone={phone}
                  setPhone={setPhone}
                />
              </div>
              <div className="flex items-center justify-center border border-[#ced4da]  bg-white overflow-hidden rounded-[4px]">
                <div className="py-[.375rem] px-[.75rem]  ">
                  <FaEnvelope className="text-[#495057]" />
                </div>
                <input
                  defaultValue={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  type="email"
                  placeholder="Email Address"
                  className="w-[100%] h-[38px] placeholder:text-[#495057] border-l border-[#ced4da] px-[.75rem]"
                />
              </div>
              {validEmail == false && (
                <p className="text-red-500">
                  Email must contain &apos;@&apos; symbol.
                </p>
              )}
              <div className="flex items-center justify-center gap-6 mt-[-10px]">
                <img
                  height={"80"}
                  width={"80"}
                  src={"/Special-Offer.png"}
                  alt="img"
                  className="h-fit mt-2"
                ></img>
                <GetTimeLeft />
              </div>
              <CustomCaptcha setIsVerifiedCaptcha={setIsVerifiedCaptcha} />

              {/* {loader && (
              <div role="status " className="flex justify-center">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-900 fill-blue-400"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            )} */}
              <button
                disabled={!isVerifiedCaptcha}
                onClick={handleSubmit}
                className="group relative inline-flex items-center justify-start overflow-hidden rounded-xl bg-[#125e30] px-8 py-4 font-medium transition-all"
              >
                <span className="absolute right-0 top-0 inline-block h-4 w-4 rounded bg-[#0d4724] transition-all duration-500 ease-in-out group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute right-0 top-0 h-5 w-5 -translate-y-1/2 translate-x-1/2 rotate-45 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 h-full w-full -translate-x-full translate-y-full rounded-2xl bg-[#0d4724] transition-all delay-200 duration-500 ease-in-out group-hover:mb-14 group-hover:translate-x-0"></span>
                <span className="relative w-full font-bold text-white text-[16px] text-center transition-colors duration-200 ease-in-out group-hover:text-white">
                  {loader ? (
                    <span className="flex items-center justify-center gap-2 font-bold text-white text-[16px]">
                      <ClipLoader size={"20"} color="#ddd" /> {"Processing.."}
                    </span>
                  ) : (
                    <p className="leading-[19px]">
                      Request a Free Quote
                      <br />
                      <span className="text-[12px]  font-thin leading- ">
                        Get Reply in Minutes!
                      </span>
                    </p>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
