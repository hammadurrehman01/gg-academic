"use client";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineAlternateEmail, MdPhoneInTalk } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import CustomCaptcha from "./common/CustomCaptcha";
import openTawkToChat from "./herosection/tawkto";
import CustomPhoneInput from "./common/CustomPhoneInput";
export default function Contact({ region }: any) {
  const phoneInputRef = useRef(null);
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [userNamecheck, setUserNamecheck] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userEmailcheck, setUserEmailcheck] = useState(false);
  const [OK, setIsOK] = useState(true);
  const [numberCheck, setIsNumberCheck] = useState(false);
  const [phonenumber, setphoneNumber] = useState("");
  const [currentURL, setCurrentURL] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");
  const [reg, setReg] = useState("");
  const [locationDetails, setLocationDetails] = useState<any>({});
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifiedCaptcha, setIsVerifiedCaptcha] = useState(false);
  const [phone, setPhone] = useState<any>("");

  const [loader, setLoader] = useState(false);
  useEffect(() => {
    if (region !== undefined) {
      setReg(region);
    } else {
      setReg("");
    }
  }, [region]);

  const fetchCity = async () => {
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

      setLocationDetails(locationData);
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
      setCity("London");
      setCountry("GB");
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
      setphoneNumber(dynamicNumber[country]);
    } else {
      setphoneNumber("+447593709971");
    }
  }, [country]);

  useEffect(() => {
    fetchCity();
    const input = phoneInputRef.current;
    if (input) {
      const iti = intlTelInput(input, {
        initialCountry: country || "GB",
      });

      // Clean up the event listener when the component unmounts
      return () => {
        iti.destroy();
      };
    }
  }, [phoneInputRef, country]);

  const formData = new FormData();
  const router = useRouter();
  useEffect(() => {
    let oldName = localStorage.getItem("oldName");
    let oldEmail = localStorage.getItem("oldEmail");
    let oldNumber = localStorage.getItem("oldNumber");
    let oldMessage = localStorage.getItem("oldMessage");
    let oldCode = localStorage.getItem("oldCode");
    if (oldName && oldEmail && oldNumber) {
      setUserName(oldName as string);
      setUserEmail(oldEmail as string);
      setPhone(oldNumber as string);
      // setMessage(oldMessage as string);
      setCode(oldCode as string);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("oldName", userName);
    localStorage.setItem("oldEmail", userEmail);
    localStorage.setItem("oldNumber", phone);
    if (country !== null) {
      localStorage.setItem("oldCountry", country);
    }
    localStorage.setItem("oldMessage", message);
    localStorage.setItem("oldCode", code);
    number !== "" ? setIsNumberCheck(true) : setIsNumberCheck(false);
    userEmail !== "" ? setUserEmailcheck(true) : setUserEmailcheck(false);
    userName !== "" ? setUserNamecheck(true) : setUserNamecheck(false);
  }, [userEmail, userName, number, message]);

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };
  const [code, setCode] = useState("");
  //

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
            .getAttribute("title")
            .split(" ")
            .at(-1);

          setCode(dialCode);
          localStorage.setItem("oldCode", code);
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
          .getAttribute("title")
          .split(" ")
          .at(-1);

        setCode(dialCode);
      }
    }
  }, [number]);
  useEffect(() => {
    // Get the current URL using window.location
    const currentURL = window.location.href;
    setCurrentURL(currentURL);
    // Log the current URL to the console (or do whatever you need with it)
  }, []);

  // const handleSubmit = () => {
  //   if (isVerified) {
  //     formData.append("Name", userName);
  //     formData.append("Phone", number);
  //     formData.append("Email", userEmail);
  //     formData.append("Description", message);
  //     formData.append("access_token", "AAH-DLF_Form");
  //     formData.append("phone_code", code);
  //     formData.append("currentURL", currentURL);
  //     formData.append("locationDetails", JSON.stringify(locationDetails));

  //     if (userNamecheck && userEmailcheck && numberCheck && validEmail) {
  //       setLoader(true);
  //       const response = fetch("/api/contact", {
  //         method: "POST",
  //         body: formData,
  //       }).then((response) => {
  //         if (response.ok) {
  //           setIsOK(true);

  //           router.push(`/thankyou`);
  //         }
  //         if (!response.ok) {
  //           setLoader(false);
  //           response.json().then((data) => alert(data.message));
  //         }
  //       });
  //     } else {
  //       setIsOK(false);
  //       alert("Something Went Wrong");
  //     }
  //   } else {
  //     const verified = showToastError(isVerified);
  //     if (verified) {
  //       return;
  //     }
  //   }
  // };

  const handleSubmit = async () => {
    if (!userName || !userEmail || !phone) {
      toast.error("Please Fill all the fields");
      return;
    }

    if (!isVerifiedCaptcha) {
      toast.error("Please Verify the Captcha");
      return;
    }

    try {
      setLoader(true);

      formData.append("Name", userName);
      formData.append("Phone", phone);
      formData.append("Email", userEmail);
      formData.append("Description", message);
      formData.append("access_token", "AAH-DLF_Form");
      formData.append("phone_code", code);
      formData.append("currentURL", currentURL);
      formData.append("locationDetails", JSON.stringify(locationDetails));

      localStorage.setItem("oldName", userName);
      localStorage.setItem("oldEmail", userEmail);
      localStorage.setItem("oldNumber", phone);

      const response = await fetch("/api/dlf2", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsOK(true);
        router.push(`/thankyou`);
      } else {
        toast.error("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("An error occurred while submitting the form.");
    } finally {
      setLoader(false);
    }
  };

  const [validEmail, setIsValidEmail] = useState(true);

  //extra checks if the location Deatil is empty or not
  const isLocationDetailEmpty = () => {
    return Object.keys(locationDetails).length === 0;
  };

  return (
    <>
      <div className="border-b">
        <div className="w-full myContainer py-3 mx-auto max-md:px-4">
          <Link href={`${reg}/`}>Home</Link> {`> Contact us`}
        </div>
      </div>
      <div className="flex justify-center items-center my-10 gap-10 lg:gap-32 px-[30px] md:flex-row flex-col">
        <div className="flex flex-col justify-center items-center max-w-[450px] text-center">
          <img
            src="/contactus-img.png"
            alt="contactus"
            className="w-[280px] h-[190px]"
          />
          <h1 className="text-[#071E57] text-[26px] font-semibold">
            Are you facing any problem?
          </h1>
          <p className="text-[15px] text-[#2A2A2A] leading-[20px]">
            If you need instant support then use live chat option to reach us
            quickly, our support team will reply as soon as possible
          </p>
          <button
            onClick={openTawkToChat}
            className="flex gap-2 bg-[#33CC6F] hover:bg-green-500 hover:shadow-md text-white py-[9px] px-[25px] rounded-[20px] my-5 font-medium"
          >
            <RiMessage3Fill className="text-[24px]" /> Live Chat
          </button>
          <div className="flex justify-center items-center gap-4 w-full">
            <div className="bg-gray-400 h-[1px] w-full"></div>
            <h2>OR</h2>
            <div className="bg-gray-400 h-[1px] w-full"></div>
          </div>
          <div className="flex gap-3 sm:gap-x-10 justify-center items-center mt-5 flex-wrap ">
            <Link
              href={`tel:${phonenumber}`}
              className="text-[23px] text-[#2A2A2A] font-semibold flex gap-2 items-center leading-[8px]"
            >
              <MdPhoneInTalk className="text-[30px] text-green-600" />
              Call Now
            </Link>
            <Link
              className="text-[23px] text-[#2A2A2A] font-semibold flex gap-2 items-center leading-[8px]"
              href={`https://wa.me/${phonenumber}?text=Hello GoGrades Team, I need academic writing assistance. Could you help me complete my task on time?`}
              target="_blank"
            >
              <IoLogoWhatsapp className="text-[30px] text-green-600" />
              Whatsapp Now
            </Link>
            <Link
              className="text-[23px] text-[#2A2A2A] font-semibold flex gap-2 items-center leading-[8px]"
              href="mailto:support@gogrades.org"
            >
              <MdOutlineAlternateEmail className="text-[30px] text-green-600" />
              support@gogrades.org
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:w-[350px]">
          <h2 className="text-[#071E57] text-[27px] font-semibold">
            Make An Enquiry
          </h2>
          <input
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            defaultValue={userName}
            onKeyPress={handleKeyPress}
            placeholder="Name"
            className="border pl-2 h-[40px] placeholder:text-[#616161] w-[100%] border-[#dbdbdb]"
          />
          <input
            onChange={(event) => {
              const newEmail = event.target.value;

              setUserEmail(newEmail);

              // Check if the email contains &apos;@&apos;
              setIsValidEmail(newEmail.includes("@"));
            }}
            onKeyPress={handleKeyPress}
            defaultValue={userEmail}
            type="email"
            placeholder="Email"
            className="border pl-2 h-[40px] placeholder:text-[#616161] w-[100%] border-[#dbdbdb]"
          />
          {/* {validEmail == false && (
            <p className="text-red-500">Email must contain &apos;@&apos; symbol.</p>
          )} */}
          <CustomPhoneInput
            placeholder="Enter Your Phone Number"
            countryCode={locationDetails.countryCode}
            phone={phone}
            setPhone={setPhone}
          />
          <textarea
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            defaultValue={message}
            name="message"
            placeholder="Message"
            onKeyPress={handleKeyPress}
            id="Message   "
            className="border pl-2 h-[80px] placeholder:text-[#616161] w-[100%] border-[#dbdbdb]"
          ></textarea>

          {!OK && (
            <p className="text-red-500">!!! Please Fill all the fields</p>
          )}
          {!validEmail && (
            <p className="text-red-500">!!! Please Enter a valid Email</p>
          )}
          <CustomCaptcha setIsVerifiedCaptcha={setIsVerifiedCaptcha} />
          <button
            className={`${
              isLocationDetailEmpty() || country === null || country === "null"
                ? "opacity-50 pointer-events-none"
                : ""
            }text-white font-bold ${
              isVerifiedCaptcha
                ? "bg-[#1c3d72] hover:bg-[#1c3d72]/90"
                : "bg-[#7580ff]"
            }   focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none  rounded-lg text-lg px-5 py-2.5 text-center m-auto w-full dark:focus:ring-[#2557D6]/50 me-2 mb-2`}
            onClick={handleSubmit}
            disabled={!isVerifiedCaptcha}
          >
            {loader ? (
              <span className="flex items-center justify-center gap-2">
                <ClipLoader size={"20"} color="#ddd" /> {"Processing.."}
              </span>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </>
  );
}
