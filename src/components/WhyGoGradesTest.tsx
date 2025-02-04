"use client";
import { showToastError } from "@/lib/ToastMessages";
import intlTelInput from "intl-tel-input";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import openTawkToChat from "./herosection/tawkto";
import MobileModal from "./MobileModal";
import Modal from "./Modal";

export default function WhyGoGradesTest(props: any) {
  const { number, title, country, locationDetails, region } = props;
  const [modal, setModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [userName, setUserName] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [validEmail, setIsValidEmail] = useState(true);
  const [code, setCode] = useState("");

  const phoneInputRef = useRef(null);

  const [userNamecheck, setUserNamecheck] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userEmailcheck, setUserEmailcheck] = useState(false);
  const [OK, setIsOK] = useState(true);
  const [number1, setIsNumber2] = useState("");
  const [numberCheck, setIsNumberCheck] = useState(false);
  const [reg, setReg] = useState("");
  const [currentURL, setCurrentURL] = useState("");
  const [displayText, setDisplayText] = useState("...");
  const router = useRouter();

  const handleInputChange = (event: any) => {
    const newEmail = event.target.value;
    setUserEmail(newEmail);

    // Check if the email contains &apos;@&apos;
    setIsValidEmail(newEmail.includes("@"));
  };

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

  useEffect(() => {
    if (region !== undefined) {
      setReg(region);
    } else {
      setReg("");
    }
  }, [region]);

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

  const formData = new FormData();

  const modalChange = (modal: any) => {
    setModal(false);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (isVerified) {
      formData.append("phone_code", code);
      formData.append("Name", userName);
      formData.append("Phone", number);
      formData.append("Email", userEmail);
      formData.append("currentURL", currentURL);
      formData.append("locationDetails", JSON.stringify(locationDetails));
      formData.append("access_token", "AAH-DLF_Form");
      if (userNamecheck && userEmailcheck && numberCheck && validEmail) {
        setLoader(true);
        const response = fetch("/api/dlf2", {
          method: "POST",
          body: formData,
        }).then((response) => {
          if (response.ok) {
            setIsOK(true);
            router.push(`/thankyou`);
          }
          // setLoader(false);
        });
      } else {
        setIsOK(false);
        setLoader(false);
      }
    } else {
      const verified = showToastError(isVerified);
      if (verified) {
        return;
      }
    }
  };

  return (
    // <div
    //   className="thrdsecov h-[648px] lg:px-[150px] md:px-[35px] sm:px-[20px] px-[12px] mx-auto py-6 relative bg-cover bg-center"
    //   id="why-us"
    //   style={{ backgroundImage: "url('/why-gg/banner.webp')" }}
    // >
    //   <div className="absolute inset-0 leftoverly"></div>
    //   <div className="w-[38%] absolute  top-1/2 left-1/2  -translate-x-1/2">
    //     <h4 className="text-base sm:text-[24px] text-[#e6a41b]  font-semibold">
    //       - WHY GOGRADES.ORG
    //     </h4>
    //     <h5 className="text-white text-[20px] sm:text-[25px] md:text-[18px] font-medium leading-tight w-[356px]  mt-2">
    //       Best Quality {title ? title : `Academic Writing Team`} For University &
    //       College Students
    //     </h5>
    //     <div
    //       className={`mt-4 flex flex-col gap-3 pr-10 transition-all duration-500 overflow-hidden style-4`}
    //     >
    //       <p className="text-[15px] text-white leading-tight w-[400px]">
    //         Searching for the No.1 Online
    //         {title ? " " + title : ` Academic Writing Team`} in {city}? End your
    //         search with Gogrades.org.
    //       </p>
    //       <h6 className="font-medium pl-32 pt-4 text-white text-[18px]">FREE Features</h6>
    //       <div className="grid sm:grid-cols-3 justify-start mb-3 grid-cols-2 gap-1 pt-4">
    //         <h3 className="flex justify-start items-center  text-[13px] font-medium ">
    //           <FaCheck className="text-[#33e533] text-[8px] mr-1" />
    //           Bibliography
    //         </h3>
    //         <h3 className="flex justify-start items-center text-white text-[13px] font-medium">
    //           <FaCheck className="text-[#33e533] text-[8px] mr-1" />
    //           Title Page
    //         </h3>
    //         <h3 className="flex justify-start items-center text-white text-[13px] font-medium">
    //           <FaCheck className="text-[#33e533] text-[8px] mr-1" />
    //           Outline
    //         </h3>
    //         <h3 className="flex justify-start items-center text-white text-[13px] font-medium">
    //           <FaCheck className="text-[#33e533] text-[8px] mr-1" />
    //           Formatting
    //         </h3>
    //         <h3 className="flex justify-start items-center text-white text-[13px] font-medium">
    //           <FaCheck className="text-[#33e533] text-[8px] mr-1" />
    //           Plagiarism Report
    //         </h3>
    //         <h3 className="flex justify-start items-center text-white text-[13px] font-medium">
    //           <FaCheck className="text-[#33e533] text-[8px] mr-1" />
    //           Limitless Amendments
    //         </h3>
    //       </div>
    //       <p className="text-[15px] text-white leading-tight">
    //         With more than 500 Ph.D. consultants, we are determined to provide
    //         the best custom {title ? title : `Academic Writing Team`} service to the{" "}
    //         {city} students.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div
      id="why-us"
      className="max-w-full border-y border-gray-300  px-5 md:px-24 mx-auto pt-6 pb-10 bg-[#f1f1f1]"
    >
      <h1 className="text-center pt-4 text-2xl md:text-2xl font-semibold text-[#c0413f] ">
        - WHY GOGRADES.ORG
      </h1>
      <Image
        src="/why-gg/arrow-images.webp"
        alt="arrow-image"
        height={800}
        width={800}
        className="max-w-[80%] mx-auto pt-8 hidden md:block"
      />
      <Image
        src="/why-gg/arrow-images-mob-one.png"
        alt="arrow-image"
        height={800}
        width={800}
        className="max-w-[77%] ml-16 sm:ml-[100px] mx-auto pt-8 block md:hidden"
      />
      <Image
        src="/why-gg/arrow-images-mob-two.png"
        alt="arrow-image"
        height={800}
        width={800}
        className="max-w-[80%] mx-auto pt-8 block md:hidden"
      />
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full pt-12 md:pt-20">
        <div className="w-full md:w-[50%] self-start">
          <h3 className="text-base text-center md:text-left md:text-lg mt-2 font-semibold text-[#003e72]">
            Best Quality {title} Team For University & College Students
          </h3>
          <h2 className="mt-2 text-base text-center md:text-left md:text-[15px]">
            Searching for the No.1 Online {title} Team in Pakistan? End your
            search with Gogrades.org.
          </h2>
          <p className="mt-4 md:mt-2 text-sm text-center md:text-left md:text-base">
            With more than 500 Ph.D. consultants, we are determined to provide
            the best custom {title} Team service to the Pakistan students.
          </p>
          <h6 className="font-medium text-center md:text-left pt-4  text-[18px] underline">
            FREE Features
          </h6>
          <div className="grid sm:grid-cols-3 justify-items-center md:justify-items-start  mb-3 grid-cols-2 gap-1 pt-6">
            <h3 className="flex justify-start items-center  text-[13px] font-medium ">
              <FaCheck className="text-[#33e533] text-[8px] mr-1" />
              Bibliography
            </h3>
            <h3 className="flex justify-start items-center  text-[13px] font-medium ">
              <FaCheck className="text-[#33e533] text-[8px] mr-1" />
              Title Page
            </h3>
            <h3 className="flex justify-start items-center  text-[13px] font-medium ">
              <FaCheck className="text-[#33e533] text-[8px] mr-1" />
              Outline
            </h3>
            <h3 className="flex justify-start items-center  text-[13px] font-medium ">
              <FaCheck className="text-[#33e533] text-[8px] mr-1" />
              Formatting
            </h3>
            <h3 className="flex justify-start items-center  text-[13px] font-medium ">
              <FaCheck className="text-[#33e533] text-[8px] mr-1" />
              Plagiarism Report
            </h3>
            <h3 className="flex justify-start items-center  text-[13px] font-medium ">
              <FaCheck className="text-[#33e533] text-[8px] mr-1" />
              Limitless Amendments
            </h3>
          </div>
          {/* <Link
              href={`https://wa.me/123?text=Hello GoGrades Team, I need academic writing assistance. Could you help me complete my task on time?`}
              // href={`https://api.whatsapp.com/send?phone=${number.number}&text=Hello Gogrades!`}
              style={{
                background:
                  "transparent linear-gradient(91deg,#f9413e 0%,#f7514e 100%) 0 0 no-repeat",
              }}
              target="_blank"
              
            > */}
          <div className="  flex flex-col md:flex-row w-full items-center gap-2 flex-wrap md:flex-nowrap max-sm:justify-center mt-12 ">
            <div
              onClick={() => {
                setModal(true);
                setLoader(true);
                localStorage.setItem("externalModal", "true");
              }}
              className="capitalize cursor-pointer py-[6px] px-[20px] rounded-md text-white font-semibold text-[22px] shadow-red-500 bg-red-500 hover:drop-shadow-xl hover:shadow-xl transition-all duration-100 w-[70%] md:w-1/2 text-center"
            >
              get a free quote
            </div>
            <Link
              href={`${reg}/order?coupon=GG-50%off`}
              className=" w-[70%]  md:w-1/2 mx-auto flex justify-center bg-white shadow-lg hover:drop-shadow-xl border rounded-[2px]"
            >
              <button
                // href={`https://api.whatsapp.com/send?phone=${number.number}&text=Hello Gogrades!`}

                className="text-[#3E4657]  border-[#D1D1D1] text-[19px]  px-[25px] py-[8px] font-medium shadow-slate-400   hover:shadow-xl transition-all duration-100    text-center"
              >
                Order Now
              </button>
            </Link>
            {/* </Link> */}
          </div>
          {modal ? (
            <>
              <Modal
                setModal={setModal}
                locationDetails={locationDetails}
                number={number}
              />
            </>
          ) : null}
          {modal ? (
            <>
              <MobileModal
                setModal={setModal}
                locationDetails={locationDetails}
              />
            </>
          ) : null}
        </div>
        <div className="w-full md:w-[50%] h-[300px] hidden md:block">
          <Image
            src="/why-gg/banner.jpg"
            alt="banner"
            width={500}
            height={100}
            className="object-cover object-bottom w-full h-full rounded-lg mt-5 md:mt-0 "
          />
        </div>
      </div>
    </div>
  );
}
