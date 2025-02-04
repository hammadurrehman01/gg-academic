"use client";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import CustomPhoneInput from "./common/CustomPhoneInput";
import CustomCaptcha from "./common/CustomCaptcha";
import { toast } from "react-toastify";

export default function CountryCode({
  modalChange,
  countryy,
}: {
  modalChange: any;
  countryy: string;
}) {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [number, setIsNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [userNamecheck, setUserNamecheck] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userEmailcheck, setUserEmailcheck] = useState(false);
  const [OK, setIsOK] = useState(true);
  const [numberCheck, setIsNumberCheck] = useState(false);
  const [subject, setSubject] = useState("");
  const [country, setCountry] = useState<string>(countryy);
  const [description, setDescription] = useState("");
  const phoneInputRef = useRef(null);
  const [code, setCode] = useState("");
  const [locationDetails, setLocationDetails] = useState<any>({});
  const [currentURL, setCurrentURL] = useState("");
  const [phone, setPhone] = useState<any>("");
  const [isVerifiedCaptcha, setIsVerifiedCaptcha] = useState(false);

  const [loader, setLoader] = useState(false);
  const fetchingAgain = async () => {
    const ipUrl = "https://api.ipify.org?format=json";
    const response = await fetch(ipUrl);
    const data = await response.json(); // Assuming the response is in JSON
    const userIp = data.ip;
    const locationResponse = await fetch(
      `https://pro.ip-api.com/json/${userIp}?key=tRuJ0KuCug4wEHs&fields=status,message,continent,continentCode,country,countryCode,countryCode3,region,regionName,city,district,zip,lat,lon,timezone,offset,currentTime,currency,callingCode,isp,org,as,asname,reverse,mobile,proxy,hosting,query`
    );
    const locationData = await locationResponse.json();
    setLocationDetails(locationData);
  };

  useEffect(() => {
    fetchingAgain();
  }, []);

  const formData = new FormData();
  useEffect(() => {
    setCountry(countryy);
  }, [countryy]);

  useEffect(() => {
    number !== "" ? setIsNumberCheck(true) : setIsNumberCheck(false);
    userEmail !== "" ? setUserEmailcheck(true) : setUserEmailcheck(false);
    userName !== "" ? setUserNamecheck(true) : setUserNamecheck(false);
  }, [userEmail, userName, number, subject, country]);

  useEffect(() => {
    const input = phoneInputRef.current;
    if (input) {
      const iti = intlTelInput(input, {
        initialCountry: countryy || "CA",
      });

      // Clean up the event listener when the component unmounts
      return () => {
        iti.destroy();
      };
    }
  }, [phoneInputRef, countryy]);

  const countryDataList = [
    { name: "Afghanistan", code: "AF" },
    { name: "Åland Islands", code: "AX" },
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "American Samoa", code: "AS" },
    { name: "Andorra", code: "AD" },
    { name: "Angola", code: "AO" },
    { name: "Anguilla", code: "AI" },
    { name: "Antarctica", code: "AQ" },
    { name: "Antigua and Barbuda", code: "AG" },
    { name: "Argentina", code: "AR" },
    { name: "Armenia", code: "AM" },
    { name: "Aruba", code: "AW" },
    { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" },
    { name: "Azerbaijan", code: "AZ" },
    { name: "Bahamas ", code: "BS" },
    { name: "Bahrain", code: "BH" },
    { name: "Bangladesh", code: "BD" },
    { name: "Barbados", code: "BB" },
    { name: "Belarus", code: "BY" },
    { name: "Belgium", code: "BE" },
    { name: "Belize", code: "BZ" },
    { name: "Benin", code: "BJ" },
    { name: "Bermuda", code: "BM" },
    { name: "Bhutan", code: "BT" },
    { name: "Bolivia ", code: "BO" },
    { name: "Bonaire, Sint Eustatius and Saba", code: "BQ" },
    { name: "Bosnia and Herzegovina", code: "BA" },
    { name: "Botswana", code: "BW" },
    { name: "Bouvet Island", code: "BV" },
    { name: "Brazil", code: "BR" },
    { name: "British Indian Ocean Territory ", code: "IO" },
    { name: "Brunei Darussalam", code: "BN" },
    { name: "Bulgaria", code: "BG" },
    { name: "Burkina Faso", code: "BF" },
    { name: "Burundi", code: "BI" },
    { name: "Cabo Verde", code: "CV" },
    { name: "Cambodia", code: "KH" },
    { name: "Cameroon", code: "CM" },
    { name: "Canada", code: "CA" },
    { name: "Cayman Islands ", code: "KY" },
    { name: "Central African Republic ", code: "CF" },
    { name: "Chad", code: "TD" },
    { name: "Chile", code: "CL" },
    { name: "China", code: "CN" },
    { name: "Christmas Island", code: "CX" },
    { name: "Cocos (Keeling) Islands ", code: "CC" },
    { name: "Colombia", code: "CO" },
    { name: "Comoros ", code: "KM" },
    { name: "Congo (the Democratic Republic of the)", code: "CD" },
    { name: "Congo ", code: "CG" },
    { name: "Cook Islands ", code: "CK" },
    { name: "Costa Rica", code: "CR" },
    { name: "Côte d'Ivoire", code: "CI" },
    { name: "Croatia", code: "HR" },
    { name: "Cuba", code: "CU" },
    { name: "Curaçao", code: "CW" },
    { name: "Cyprus", code: "CY" },
    { name: "Czechia", code: "CZ" },
    { name: "Denmark", code: "DK" },
    { name: "Djibouti", code: "DJ" },
    { name: "Dominica", code: "DM" },
    { name: "Dominican Republic ", code: "DO" },
    { name: "Ecuador", code: "EC" },
    { name: "Egypt", code: "EG" },
    { name: "El Salvador", code: "SV" },
    { name: "Equatorial Guinea", code: "GQ" },
    { name: "Eritrea", code: "ER" },
    { name: "Estonia", code: "EE" },
    { name: "Eswatini", code: "SZ" },
    { name: "Ethiopia", code: "ET" },
    { name: "Falkland Islands  [Malvinas]", code: "FK" },
    { name: "Faroe Islands ", code: "FO" },
    { name: "Fiji", code: "FJ" },
    { name: "Finland", code: "FI" },
    { name: "France", code: "FR" },
    { name: "French Guiana", code: "GF" },
    { name: "French Polynesia", code: "PF" },
    { name: "French Southern Territories ", code: "TF" },
    { name: "Gabon", code: "GA" },
    { name: "Gambia ", code: "GM" },
    { name: "Georgia", code: "GE" },
    { name: "Germany", code: "DE" },
    { name: "Ghana", code: "GH" },
    { name: "Gibraltar", code: "GI" },
    { name: "Greece", code: "GR" },
    { name: "Greenland", code: "GL" },
    { name: "Grenada", code: "GD" },
    { name: "Guadeloupe", code: "GP" },
    { name: "Guam", code: "GU" },
    { name: "Guatemala", code: "GT" },
    { name: "Guernsey", code: "GG" },
    { name: "Guinea", code: "GN" },
    { name: "Guinea-Bissau", code: "GW" },
    { name: "Guyana", code: "GY" },
    { name: "Haiti", code: "HT" },
    { name: "Heard Island and McDonald Islands", code: "HM" },
    { name: "Holy See ", code: "VA" },
    { name: "Honduras", code: "HN" },
    { name: "Hong Kong", code: "HK" },
    { name: "Hungary", code: "HU" },
    { name: "Iceland", code: "IS" },
    { name: "India", code: "IN" },
    { name: "Indonesia", code: "ID" },
    { name: "Iran (Islamic Republic of)", code: "IR" },
    { name: "Iraq", code: "IQ" },
    { name: "Ireland", code: "IE" },
    { name: "Isle of Man", code: "IM" },
    { name: "Israel", code: "IL" },
    { name: "Italy", code: "IT" },
    { name: "Jamaica", code: "JM" },
    { name: "Japan", code: "JP" },
    { name: "Jersey", code: "JE" },
    { name: "Jordan", code: "JO" },
    { name: "Kazakhstan", code: "KZ" },
    { name: "Kenya", code: "KE" },
    { name: "Kiribati", code: "KI" },
    { name: "Korea (the Democratic People's Republic of)", code: "KP" },
    { name: "Korea (the Republic of)", code: "KR" },
    { name: "Kuwait", code: "KW" },
    { name: "Kyrgyzstan", code: "KG" },
    { name: "Lao People's Democratic Republic ", code: "LA" },
    { name: "Latvia", code: "LV" },
    { name: "Lebanon", code: "LB" },
    { name: "Lesotho", code: "LS" },
    { name: "Liberia", code: "LR" },
    { name: "Libya", code: "LY" },
    { name: "Liechtenstein", code: "LI" },
    { name: "Lithuania", code: "LT" },
    { name: "Luxembourg", code: "LU" },
    { name: "Macao", code: "MO" },
    { name: "Republic of North Macedonia", code: "MK" },
    { name: "Madagascar", code: "MG" },
    { name: "Malawi", code: "MW" },
    { name: "Malaysia", code: "MY" },
    { name: "Maldives", code: "MV" },
    { name: "Mali", code: "ML" },
    { name: "Malta", code: "MT" },
    { name: "Marshall Islands ", code: "MH" },
    { name: "Martinique", code: "MQ" },
    { name: "Mauritania", code: "MR" },
    { name: "Mauritius", code: "MU" },
    { name: "Mayotte", code: "YT" },
    { name: "Mexico", code: "MX" },
    { name: "Micronesia (Federated States of)", code: "FM" },
    { name: "Moldova (the Republic of)", code: "MD" },
    { name: "Monaco", code: "MC" },
    { name: "Mongolia", code: "MN" },
    { name: "Montenegro", code: "ME" },
    { name: "Montserrat", code: "MS" },
    { name: "Morocco", code: "MA" },
    { name: "Mozambique", code: "MZ" },
    { name: "Myanmar", code: "MM" },
    { name: "Namibia", code: "NA" },
    { name: "Nauru", code: "NR" },
    { name: "Nepal", code: "NP" },
    { name: "Netherlands ", code: "NL" },
    { name: "New Caledonia", code: "NC" },
    { name: "New Zealand", code: "NZ" },
    { name: "Nicaragua", code: "NI" },
    { name: "Niger ", code: "NE" },
    { name: "Nigeria", code: "NG" },
    { name: "Niue", code: "NU" },
    { name: "Norfolk Island", code: "NF" },
    { name: "Northern Mariana Islands ", code: "MP" },
    { name: "Norway", code: "NO" },
    { name: "Oman", code: "OM" },
    { name: "Pakistan", code: "PK" },
    { name: "Palau", code: "PW" },
    { name: "Palestine, State of", code: "PS" },
    { name: "Panama", code: "PA" },
    { name: "Papua New Guinea", code: "PG" },
    { name: "Paraguay", code: "PY" },
    { name: "Peru", code: "PE" },
    { name: "Philippines ", code: "PH" },
    { name: "Pitcairn", code: "PN" },
    { name: "Poland", code: "PL" },
    { name: "Portugal", code: "PT" },
    { name: "Puerto Rico", code: "PR" },
    { name: "Qatar", code: "QA" },
    { name: "Réunion", code: "RE" },
    { name: "Romania", code: "RO" },
    { name: "Russian Federation ", code: "RU" },
    { name: "Rwanda", code: "RW" },
    { name: "Saint Barthélemy", code: "BL" },
    { name: "Saint Helena, Ascension and Tristan da Cunha", code: "SH" },
    { name: "Saint Kitts and Nevis", code: "KN" },
    { name: "Saint Lucia", code: "LC" },
    { name: "Saint Martin (French part)", code: "MF" },
    { name: "Saint Pierre and Miquelon", code: "PM" },
    { name: "Saint Vincent and the Grenadines", code: "VC" },
    { name: "Samoa", code: "WS" },
    { name: "San Marino", code: "SM" },
    { name: "Sao Tome and Principe", code: "ST" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Senegal", code: "SN" },
    { name: "Serbia", code: "RS" },
    { name: "Seychelles", code: "SC" },
    { name: "Sierra Leone", code: "SL" },
    { name: "Singapore", code: "SG" },
    { name: "Sint Maarten (Dutch part)", code: "SX" },
    { name: "Slovakia", code: "SK" },
    { name: "Slovenia", code: "SI" },
    { name: "Solomon Islands", code: "SB" },
    { name: "Somalia", code: "SO" },
    { name: "South Africa", code: "ZA" },
    { name: "South Georgia and the South Sandwich Islands", code: "GS" },
    { name: "South Sudan", code: "SS" },
    { name: "Spain", code: "ES" },
    { name: "Sri Lanka", code: "LK" },
    { name: "Sudan ", code: "SD" },
    { name: "Suriname", code: "SR" },
    { name: "Svalbard and Jan Mayen", code: "SJ" },
    { name: "Sweden", code: "SE" },
    { name: "Switzerland", code: "CH" },
    { name: "Syrian Arab Republic", code: "SY" },
    { name: "Taiwan (Province of China)", code: "TW" },
    { name: "Tajikistan", code: "TJ" },
    { name: "Tanzania, United Republic of", code: "TZ" },
    { name: "Thailand", code: "TH" },
    { name: "Timor-Leste", code: "TL" },
    { name: "Togo", code: "TG" },
    { name: "Tokelau", code: "TK" },
    { name: "Tonga", code: "TO" },
    { name: "Trinidad and Tobago", code: "TT" },
    { name: "Tunisia", code: "TN" },
    { name: "Turkey", code: "TR" },
    { name: "Turkmenistan", code: "TM" },
    { name: "Turks and Caicos Islands ", code: "TC" },
    { name: "Tuvalu", code: "TV" },
    { name: "Uganda", code: "UG" },
    { name: "Ukraine", code: "UA" },
    { name: "United Arab Emirates ", code: "AE" },
    {
      name: "United Kingdom ",
      code: "GB",
    },

    { name: "United States of America", code: "US" },
    { name: "Uruguay", code: "UY" },
    { name: "Uzbekistan", code: "UZ" },
    { name: "Vanuatu", code: "VU" },
    { name: "Venezuela (Bolivarian Republic of)", code: "VE" },
    { name: "Viet Nam", code: "VN" },
    { name: "Virgin Islands (British)", code: "VG" },
    { name: "Virgin Islands (U.S.)", code: "VI" },
    { name: "Wallis and Futuna", code: "WF" },
    { name: "Western Sahara", code: "EH" },
    { name: "Yemen", code: "YE" },
    { name: "Zambia", code: "ZM" },
    { name: "Zimbabwe", code: "ZW" },
  ];

  useEffect(() => {
    let oldName = localStorage.getItem("oldName");
    let oldEmail = localStorage.getItem("oldEmail");
    let oldNumber = localStorage.getItem("oldNumber");
    let oldSubject = localStorage.getItem("oldSubject");
    let oldCountry = localStorage.getItem("oldCountry");
    let oldDescription = localStorage.getItem("oldDescription");
    if (oldName && oldEmail && oldNumber) {
      setUserName(oldName as string);
      setUserEmail(oldEmail as string);
      setPhone(oldNumber as string);
      setCountry(oldCountry as string);
      setSubject(oldSubject as string);
      setDescription(oldDescription as string);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("oldName", userName);
    localStorage.setItem("oldEmail", userEmail);
    localStorage.setItem("oldNumber", phone);
    localStorage.setItem("oldSubject", subject);
    if (country !== null) {
      localStorage.setItem("oldCountry", country);
    }
    localStorage.setItem("oldDescription", description);

    number !== "" ? setIsNumberCheck(true) : setIsNumberCheck(false);
    userEmail !== "" ? setUserEmailcheck(true) : setUserEmailcheck(false);
    userName !== "" ? setUserNamecheck(true) : setUserNamecheck(false);
  }, [userEmail, userName, number, country, subject, description]);

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

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
      formData.append("Subject", subject);
      formData.append("Country", country);
      formData.append("currentURL", currentURL);
      formData.append("locationDetails", JSON.stringify(locationDetails));
      formData.append("Description", description);
      formData.append("phone_code", code);
      formData.append("access_token", "AAH-DLF_Form");
      formData.append("isSampleForm", "true");
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

  useEffect(() => {
    const currentURL = window.location.href;
    setCurrentURL(currentURL);
  }, []);

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
          ?.getAttribute("title")
          ?.split(" ")
          ?.at(-1);

        setCode(dialCode);
      }
    }
  }, [number]);

  const [validEmail, setIsValidEmail] = useState(true);
  const handleInputChange = (event: any) => {
    const newEmail = event.target.value;
    setUserEmail(newEmail);

    // Check if the email contains &apos;@&apos;
    setIsValidEmail(newEmail.includes("@"));
  };

  const isLocationDetailEmpty = () => {
    return Object.keys(locationDetails).length === 0;
  };

  const countryyy = null;

  const verifiedButton = isVerifiedCaptcha
    ? "transparent linear-gradient(91deg,#f9413e 0%,#f7514e 100%) 0 0 no-repeat"
    : "#ff7979";

  return (
    <>
      <div className="bg-white px-4 flex flex-col gap-4 py-6 max-sm:mx-5 sm:w-[360px] relative overflow-hidden">
        <h3
          className="text-[40px] text-gray-300 ml-4 cursor-pointer h-fit  block md:hidden absolute top-0 right-0 px-3"
          onClick={() => modalChange(false)}
        >
          X
        </h3>
        <div className="flex flex-col items-center  justify-center mt-3">
          <h4 className="font-medium text-[15px] text-red-500">
            Renowned for A+ Grades
          </h4>
          <h4 className="font-medium text-[#1a3e61] text-[18px]">
            GET FREE SAMPLE NOW
          </h4>
        </div>
        <input
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          defaultValue={userName}
          type="text"
          onKeyPress={handleKeyPress}
          placeholder="Full Name"
          className="w-[100%] h-[38px] rounded-[4px]placeholder:text-[#495057] border border-[#ced4da] px-[.75rem]"
        />
        <div className="w-full">
          <CustomPhoneInput
            placeholder="Enter Your Phone Number"
            countryCode={locationDetails.countryCode}
            phone={phone}
            setPhone={setPhone}
          />
        </div>
        <input
          onChange={handleInputChange}
          type="email"
          onKeyPress={handleKeyPress}
          defaultValue={userEmail}
          placeholder="Enter Email Address"
          className="w-[100%] h-[38px] rounded-[4px]placeholder:text-[#495057] border border-[#ced4da] px-[.75rem]"
        />{" "}
        {validEmail == false && (
          <p className="text-red-500">
            Email must contain &apos;@&apos; symbol.
          </p>
        )}
        <input
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          defaultValue={subject}
          type="text"
          onKeyPress={handleKeyPress}
          placeholder="Enter Subject"
          className="w-[100%] h-[38px] rounded-[4px]placeholder:text-[#495057] border border-[#ced4da] px-[.75rem]"
        />
        <select
          className="w-[100%] bg-[#fff] h-[40px] border-[#dbdbdb] border rounded-sm pl-2 text-[#2e2e2e] outline-none"
          defaultValue={countryy}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        >
          {countryDataList.map((item: any) => (
            <option key={item.code} value={item.code}>
              {item.name}
            </option>
          ))}
        </select>
        <input
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          defaultValue={description}
          onKeyPress={handleKeyPress}
          type="text-area"
          placeholder="Describe here?"
          className="w-[100%] h-[38px] rounded-[4px]placeholder:text-[#495057] border border-[#ced4da] px-[.75rem]"
        />
        {!OK && <p className="text-red-500">!!! Please Fill all the fields</p>}
        <CustomCaptcha setIsVerifiedCaptcha={setIsVerifiedCaptcha} />
        <div className="flex justify-center">
          <button
            disabled={!isVerifiedCaptcha}
            style={{
              background: verifiedButton,
            }}
            onClick={() => {
              handleSubmit();
            }}
            className={`py-[8px] px-[35px] rounded-md text-white font-semibold text-[16px] sm:text-[18px] mt-4 hover:shadow-2xl transition-all duration-100 w-fit  ${
              isLocationDetailEmpty() || country === null || country === "null"
                ? "opacity-50 pointer-events-none"
                : ""
            }`}
          >
            {loader ? (
              <span>
                <ClipLoader size={"16px"} color="#ddd" /> Loading...
              </span>
            ) : (
              "Activate Coupon"
            )}
          </button>
        </div>
      </div>
    </>
  );
}
