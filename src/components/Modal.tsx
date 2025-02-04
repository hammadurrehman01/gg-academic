"use client";
import intlTelInput from "intl-tel-input";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";
import "react-phone-number-input/style.css";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import CustomCaptcha from "./common/CustomCaptcha";
import CustomPhoneInput from "./common/CustomPhoneInput";
import GetTimeLeft from "./countdown/Countdown";

const Modal = (props: any) => {
  const { number, title, country, locationDetails, setModal, modal } = props;
  const [loader, setLoader] = useState(false);
  const [userName, setUserName] = useState("");
  const [isVerified, setIsVerified] = useState(true);
  const [isVerifiedCaptcha, setIsVerifiedCaptcha] = useState(false);
  const [validEmail, setIsValidEmail] = useState(true);
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState<any>("");

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

  const handleCloseModal = () => {
    setModal(false);
    localStorage.setItem("modal", "true");
    localStorage.setItem("modalTimestamp", new Date().getTime().toString());
    localStorage.setItem("externalModal", "false");
  };

  const handleInputChange = (event: any) => {
    const newEmail = event.target.value;
    setUserEmail(newEmail);

    // Check if the email contains &apos;@&apos;
    setIsValidEmail(newEmail.includes("@"));
  };

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
    // Get the current URL using window.location
    const currentURL = window.location.href;
    setCurrentURL(currentURL);
    // Log the current URL to the console (or do whatever you need with it)
  }, []);

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

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    if (!isVerified) return;

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

      formData.append("phone_code", code);
      formData.append("Name", userName);
      formData.append("Phone", phone);
      formData.append("Email", userEmail);
      formData.append("currentURL", currentURL);
      formData.append("locationDetails", JSON.stringify(locationDetails));
      formData.append("access_token", "AAH-DLF_Form");
      formData.append("isPopupDLF", "true");

      localStorage.setItem("oldName", userName);
      localStorage.setItem("oldEmail", userEmail);
      localStorage.setItem("oldNumber", phone);

      const response = await fetch("/api/dlf2", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        handleCloseModal();
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
  return (
    <>
      <div className="justify-center items-center hidden md:flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-screen  ">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className=" my-5  flex overflow-auto">
            <div className="bg-[#1a3e61] px-4 py-4 max-w-[300px] md:block hidden">
              <h4 className="text-center text-[#FFC410] text-[30px] font-semibold leading-tight tracking-tight">
                Get <span className="text-white text-6xl">50%</span> Off on your
                Order
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
                    <h3 className="text-[18px] font-medium">100% Money Back</h3>
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
                    <h3 className="text-[18px] font-medium">Premium Level</h3>
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
                    <h3 className="text-[18px] font-medium">100% Quality</h3>
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
            {/* <CountryCode modalChange={modalChange} countryy={country} /> */}

            <div className="shadow-lg w-[100%] max-w-[400px]  overflow-hidden lg:mt-[-20px] max-lg:mt-6">
              <div className="flex flex-col items-center  justify-center mt-3 bg-white pt-4">
                <h4 className="font-medium text-[15px] text-red-500">
                  Renowned for A+ Grades
                </h4>
                <h4 className="capitalize text-center px-3 text-base bg-blue-900 pt-1 pb-1  text-white font-medium rounded-md">
                  activate your coupon to get 50% discount
                </h4>
              </div>
              <div
                className=" p-4 flex flex-col gap-4 bg-white"
                // style={{
                //   background: "linear-gradient(45deg, #edf4ff 74%, #00000057)",
                // }}
              >
                <div className="flex justify-center items-center  text-lg font-bold capitalize">
                  {/* {displayTyperText} */} let's connect with our Professors!
                </div>
                <div className="flex items-center justify-center border border-[#ced4da]  bg-white overflow-hidden ">
                  <div className="py-[.375rem] px-[.75rem]  ">
                    <FaUser className="text-[#495057]" />
                  </div>
                  <input
                    defaultValue={userName}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    onKeyPress={handleKeyPress}
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
                <div className="flex items-center justify-center border border-[#ced4da]  bg-white overflow-hidden ">
                  <div className="py-[.375rem] px-[.75rem]  ">
                    <FaEnvelope className="text-[#495057]" />
                  </div>
                  <input
                    defaultValue={userEmail}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
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
                {!OK && (
                  <p className="text-red-500">!!! Please Fill all the fields</p>
                )}
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
            <h3
              className="text-[30px]  text-white ml-4 cursor-pointer h-fit bg-red-500 px-4 py-1    rounded-full"
              onClick={handleCloseModal}
            >
              X
            </h3>
          </div>
        </div>
      </div>
      <div className="opacity-70 fixed inset-0 z-40 bg-black hidden md:block"></div>
    </>
  );
};

export default Modal;
