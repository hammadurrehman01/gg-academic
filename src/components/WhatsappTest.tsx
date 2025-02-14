"use client";
import { showToastError } from "@/lib/ToastMessages";
import intlTelInput from "intl-tel-input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import MobileModal from "./MobileModal";
import Modal from "./Modal";

export default function WhatsappTest(props: any) {
  const { number, title, country, locationDetails } = props;
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
    <div
      className="bg-[url('/compresss.jpeg')]   bg-center bg-cover bg-blend-multiply flex flex-col py-10 gap-2  px-[20px] md:px-[40px]"
      style={{
        backgroundColor: "rgb(0 38 89)",
      }}
    >
      <h3 className="text-2xl text-center text-white font-semibold">
        One Stop Solution to All
        <span className="text-[#FFE066]"> Academic Worries</span>
      </h3>
      <p className="text-white text-center max-w-3xl mx-auto ">
        Gogrades.org ensures to deliver the world-class
        {title ? ` ${title}` : ` Academic Assistance`} at prices that are best in
        the market. Our team always responds to the demands of the students
        quickly and fulfills them in the best possible way.
      </p>
      <div className="flex justify-center gap-3 flex-wrap mt-3">
        <button
          className="text-white border border-white py-[7px] px-[24px] text-[20px] rounded-[4px] font-medium"
          onClick={() => {
            setModal(true);
            setLoader(true);
            localStorage.setItem("externalModal", "true");
          }}
          style={{
            background:
              "transparent linear-gradient(91deg,#f9413e 0%,#f7514e 100%) 0 0 no-repeat",
          }}
        >
          Get Free Quote
        </button>
        <Link
          href={`https://wa.me/${number}?text=Hello GoGrades Team, I need Academic Assistance. Could you help me complete my task on time?`}
          // href={`https://api.whatsapp.com/send?phone=${number}&text=Hello Gogrades!`}
          className="bg-white  py-[7px] px-[24px] text-[20px] rounded-[4px] font-medium flex items-center gap-2"
          target="_blank"
        >
          <IoLogoWhatsapp className="text-[22px] text-green-600" />
          <span>Whatsapp Direct Chat</span>
        </Link>
      </div>
      {modal && <Modal setModal={setModal} locationDetails={locationDetails} />}
      {modal && (
        <MobileModal setModal={setModal} locationDetails={locationDetails} />
      )}
    </div>
  );
}
