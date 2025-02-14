"use client";
import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { FaCheck } from "react-icons/fa";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import Link from "next/link";
import openTawkToChat from "@/components/herosection/tawkto";
import { useRouter, useSearchParams } from "next/navigation";
import { ClipLoader } from "react-spinners";
import { BannerContext, BannerContextValue } from "./BannerContext";
import CustomCaptcha from "./common/CustomCaptcha";
import { toast } from "react-toastify";
import { showToastError } from "../lib/ToastMessages";

// const countryData: any = {
//   IE: { psymbol: "€", ppp: 23.83, punit: "eur" },
//   AU: { psymbol: "$", ppp: 35.93, punit: "aud" },
//   GB: { psymbol: "£", ppp: 20.0, punit: "gbp" },
//   NL: { psymbol: "€", ppp: 23.83, punit: "eur" },
//   NO: { psymbol: "€", ppp: 23.83, punit: "eur" },
//   NZ: { psymbol: "$", ppp: 39.17, punit: "nzd" },
//   OM: { psymbol: "$", ppp: 28.51, punit: "usd" },
//   AE: { psymbol: "$", ppp: 28.51, punit: "usd" },
//   US: { psymbol: "$", ppp: 28.51, punit: "usd" },
// };

const countryData: any = {
  IE: { psymbol: "€", ppp: 18.0, punit: "eur" },
  AU: { psymbol: "$", ppp: 18.0, punit: "aud" },
  GB: { psymbol: "£", ppp: 18.0, punit: "gbp" },
  NL: { psymbol: "€", ppp: 18.0, punit: "eur" },
  NO: { psymbol: "€", ppp: 18.0, punit: "eur" },
  NZ: { psymbol: "$", ppp: 18.0, punit: "nzd" },
  OM: { psymbol: "$", ppp: 18.0, punit: "usd" },
  AE: { psymbol: "$", ppp: 18.0, punit: "usd" },
  US: { psymbol: "$", ppp: 18.0, punit: "usd" },
};

export default function Order({ coupon }: any) {
  const [httpError, setHttpError] = useState(false);
  const [orderFiles, setOrderFiles] = useState<any>([]);
  const [city, setCity] = useState("London");
  const [country, setCountry] = useState("GB");
  const [countryy, setCountryy] = useState("GB");
  const [paperFormat, setPaperFormat] = useState("Double Spaced");
  const [paperStandard, setPaperStandard] = useState("Standard Quality");
  const [pages, setPages] = useState("1");
  const [state, setState] = useState("");
  const [ppp, setppp] = useState<any>(18.0);
  const [totalPrice, setTotalPrice] = useState<number>(ppp * 1);
  const [deadline, setDeadline] = useState("10 Days");
  const [reference, setReference] = useState("APA Referencing");
  const [sources, setSources] = useState("10");
  const [subject, setSubject] = useState("Business");
  const [level, setLevel] = useState("Undergraduate");
  const [topic, setTopic] = useState("------------");
  const [topicCheck, setTopicCheck] = useState(false);
  const [userName, setUserName] = useState("");
  const [userNamecheck, setUserNamecheck] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userEmailcheck, setUserEmailcheck] = useState(false);
  const [language, setLanguage] = useState("Assignment Help");
  const [typeOfPaper, setTypeOfPaper] = useState("Essay writing");
  const [punit, setPunit] = useState("usd");
  const [psymbol, setPsymbol] = useState("$");
  const [notes, setNotes] = useState("--");
  const [wordCount, setWordCount] = useState(`${(pages as any) * 300}`);
  const [number, setIsNumber] = useState("");
  const [numberCheck, setIsNumberCheck] = useState(false);
  const [OK, setIsOK] = useState(true);
  const [check, setCheck] = useState(true);
  const [checkk, setCheckk] = useState(true);
  const [code, setCode] = useState("");
  const [loader, setLoader] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [validEmail, setIsValidEmail] = useState(true);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [isVerified, setIsVerified] = useState(true);
  const [isVerifiedCaptcha, setIsVerifiedCaptcha] = useState(false);

  const router = useRouter();
  const handleInputChange = (event: any) => {
    const newEmail = event.target.value;
    setUserEmail(newEmail);

    // Check if the email contains &apos;@&apos;
    setIsValidEmail(newEmail.includes("@"));
  };

  const phoneInputRef = useRef(null);
  if (psymbol == undefined) {
    setPsymbol("€");
  }
  useEffect(() => {
    number !== "" ? setIsNumberCheck(true) : setIsNumberCheck(false);
    userEmail !== "" ? setUserEmailcheck(true) : setUserEmailcheck(false);
    userName !== "" ? setUserNamecheck(true) : setUserNamecheck(false);
    topic !== "------------" ? setTopicCheck(true) : setTopicCheck(false);
    check == true ? setCheckk(true) : setCheckk(false);
  }, [userEmail, userName, topic, number, check]);

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

  const [locationDetails, setLocationDetails] = useState({});
  const fetchingAgain = async () => {
    const ipUrl = "https://api.ipify.org?format=json";
    const response = await fetch(ipUrl);
    const data = await response.json(); // Assuming the response is in JSON
    const userIp = data.ip;
    const locationResponse = await fetch(
      `https://pro.ip-api.com/json/${userIp}?key=tRuJ0KuCug4wEHs&fields=status,message,continent,continentCode,country,countryCode,countryCode3,region,regionName,city,district,zip,lat,lon,timezone,offset,currentTime,currency,callingCode,isp,org,as,asname,reverse,mobile,proxy,hosting,query`
    );
    const locationData = await locationResponse.json();

    let fetchedCity = locationData.country || "London"; // Set default value
    let fetchedCountry = locationData.countryCode || "GB"; // Set default value
    setLocationDetails(locationData);

    setCountry(fetchedCountry);
    setCountryy(fetchedCountry);
    //
    // Default values for unknown countries
    // else {
    // }

    if (countryData[fetchedCountry]) {
      const { psymbol, ppp, punit } = countryData[fetchedCountry];
      setPsymbol(psymbol);
      setppp(ppp);
      setPunit(punit);

      //   // Save currency-related data in local storagea
    } else {
      setPsymbol("$");
      setppp(18.0);
      setPunit("usd");
    }

    const additionalPriceForPaperFormat = paperFormatOptions[paperFormat] || 0;
    const additionalPriceForPaperStandard =
      paperStandardOptions[paperStandard] || 0;
    const deadlineRate = deadlinee[deadline];
    const temporaryPPP = countryData[fetchedCountry]?.ppp || 20;
    const cost =
      temporaryPPP +
      additionalPriceForPaperFormat +
      additionalPriceForPaperStandard +
      deadlineRate;
    setppp(cost.toFixed(2));

    const totalCost: any = (pages as unknown as number) * cost;

    setTotalPrice(totalCost.toFixed(2));
  };
  useEffect(() => {
    fetchingAgain();
  }, []);

  // const fetchCity = async () => {
  //   const ipUrl = "https://api.ipify.org?format=json";

  //   try {
  //     // Fetch the user's IP address
  //     const response = await fetch(ipUrl);

  //     const data = await response.json(); // Assuming the response is in JSON
  //     const userIp = data.ip;

  //     // Fetch location data based on the IP address
  // const locationResponse = await fetch(`https://pro.ip-api.com/json/${userIp}?key=tRuJ0KuCug4wEHs&fields=status,message,continent,continentCode,country,countryCode,countryCode3,region,regionName,city,district,zip,lat,lon,timezone,offset,currentTime,currency,callingCode,isp,org,as,asname,reverse,mobile,proxy,hosting,query`);
  // const locationData = await locationResponse.json();

  // let fetchedCity = locationData.country || "London"; // Set default value
  // let fetchedCountry = locationData.countryCode || "GB"; // Set default value
  // //
  //     // Store the city and country in local storage

  // if (countryData[locationData.country]) {
  //   const { psymbol, ppp, punit } = countryData[locationData.country];
  //   setPsymbol(psymbol);
  //   setppp(ppp);
  //   setPunit(punit);

  //   // Save currency-related data in local storage
  // } else {
  //   // Default values for unknown countries
  // setPsymbol("£");
  // setppp(20.0);
  // setPunit("gbp");
  // }

  //     // Assuming you have functions like setCity and setCountry to update your UI
  //     setCity(fetchedCity);
  //     setCountry(fetchedCountry);
  //     setCountryy(fetchedCountry);
  //     setppp(countryData[fetchedCountry].ppp);
  //   } catch (error) {
  //     // If the API request fails, set default values
  //
  //     setCity("London");
  //     setCountry("GB");
  //     setCountryy("GB");
  //   }
  // };

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

  const [numberr, setNumberr] = useState("");

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
      setNumberr(dynamicNumber[country]);
    } else {
      setNumberr("+447593709971");
    }
  }, [country]);

  useEffect(() => {
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
  }, [country, phoneInputRef]);

  // useEffect(() => {
  //   fetchCity();
  // }, []);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const handleFileChange = (event: any) => {
    const selectedFiles = event.target.files;
    const maxSize = 50 * 1024 * 1024; // 50 MB in bytes

    const isOverSizeLimit = Array.from(selectedFiles).some(
      (file: any) => file.size > maxSize
    );
    setOrderFiles(selectedFiles);
    if (isOverSizeLimit) {
    } else {
      setOrderFiles(selectedFiles); // Store the selected files in the state
    }
  };

  const paperStandardOptions: any = {
    "Standard Quality": 0.0,
    "Premium Quality": 5.0,
  };

  const paperFormatOptions: any = {
    "Double Spaced": 0.0,
    "Single Spaced": 9.0,
  };

  const deadlinee: any = {
    "4 Hours": 14,
    "8 Hours": 9,
    "12 Hours": 4,
    "1 Day": 0,
    "2 Days": -2,
    "3 Days": -8,
    "4 Days": -8,
    "5 Days": -8,
    "6 Days": -10,
    "7 Days": -10,
    "8 Days": -10,
    "9 Days": -10,
    "10 Days": -12,
    "11 Days": -12,
    "12 Days": -12,
    "13 Days": -12,
    "14 Days": -12,
    "15 Days": -12,
    "16 Days": -12,
    "17 Days": -12,
    "18 Days": -12,
    "19 Days": -12,
    "20 Days": -12,
    "21 Days": -12,
    "22 Days": -12,
    "23 Days": -12,
    "24 Days": -12,
    "25 Days": -12,
    "26 Days": -12,
    "27 Days": -12,
    "28 Days": -12,
    "29 Days": -12,
    "30 Days": -12,
  };

  // /////////////////////////////////////////////////

  //

  // ////////////////////////////////////////

  // useEffect(() => {
  //   const totalCost: any = (pages as unknown as number) * ppp;

  //   setTotalPrice(totalCost.toFixed(2));
  // }, [ppp, pages]);

  useEffect(() => {
    const additionalPriceForPaperFormat = paperFormatOptions[paperFormat] || 0;
    const additionalPriceForPaperStandard =
      paperStandardOptions[paperStandard] || 0;
    const deadlineRate = deadlinee[deadline];
    const temporaryPPP = countryData[country]?.ppp || 20;

    const cost =
      temporaryPPP +
      additionalPriceForPaperFormat +
      additionalPriceForPaperStandard +
      deadlineRate;
    setppp(cost.toFixed(2));

    const totalCost: any = (pages as unknown as number) * cost;

    setTotalPrice(totalCost.toFixed(2));
  }, [paperFormat, pages, paperStandard, deadline, country]);

  //

  // /////////////////////////////////////////////////

  //

  // ////////////////////////////////////////

  const token = new Date().getTime();

  const inputDate = new Date(token);

  // Extract individual components
  const year = inputDate.getFullYear() % 100; // Take the last two digits
  const month = inputDate.getMonth() + 1; // months are zero-based in JavaScript
  const day = inputDate.getDate();
  const hours = inputDate.getHours();
  const minutes = inputDate.getMinutes();

  // Pad single-digit months, days, hours, and minutes with leading zeros
  const formattedMonth = month < 10 ? "0" + month : month;
  const formattedDay = day < 10 ? "0" + day : day;
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         // Check if the target element is in the viewport
  //         setIsVisible(entry.isIntersecting);
  //       });
  //     },
  //     { threshold: 0.5 } // Adjust the threshold as needed
  //   );

  //   if (targetRef.current) {
  //     observer.observe(targetRef.current);
  //   }

  //   // Clean up the observer when the component unmounts
  //   return () => {
  //     if (targetRef.current) {
  //       observer.unobserve(targetRef.current);
  //     }
  //   };
  // }, []);

  const formattedHours = hours < 10 ? "0" + hours : hours;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  // Create the formatted string
  const formattedDateString = `${year}${formattedMonth}${formattedDay}${formattedHours}${formattedMinutes}`;

  // Create a ref to store the DOM element

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };
  const [currentURL, setCurrentURL] = useState("");

  useEffect(() => {
    const currentURL = window.location.href;
    setCurrentURL(currentURL);
  }, []);

  const handleSubmit = async () => {
    if (isVerified) {
      const formData = new FormData();
      formData.append("Type_of_Paper", typeOfPaper);
      formData.append("Academic_Level", level);
      formData.append("sel_subject", subject);
      formData.append("Referencing_Style", reference);
      formData.append("Number_of_Sources", sources);
      formData.append("Preferred_Language_Style", language);
      formData.append("Paper_Standard", paperStandard);
      formData.append("Number_of_Pages", pages);
      formData.append("Paper_Format", paperFormat);
      formData.append("deadline", deadline);
      formData.append("PricePerPage", ppp);
      formData.append("pricetotal", `${totalPrice}`);
      formData.append("topic", topic);
      formData.append("order_candidate_name", userName);
      formData.append("order_candidate_email", userEmail);
      formData.append("order_country", countryy);
      formData.append("State", state);
      formData.append("City", city);
      formData.append("order_phone_num", number);
      formData.append("additional_note", notes);
      formData.append("currentURL", currentURL);
      formData.append("priceUnit", `${punit} ${psymbol}`);
      formData.append("access_token", "AAH-ORDER_Form");
      formData.append("phone_code", code);
      formData.append("to_name", "Affan");
      formData.append("orderId", formattedDateString);
      formData.append("locationDetails", JSON.stringify(locationDetails));
      const product = "Digital Service";
      // Send the form data to the API route using fetch or your preferred HTTP library
      const encodedProduct = btoa(product);
      const pUnit = btoa(punit); // Encode 'punit' using base64 (similar to PHP base64_encode)
      const pricetotal = btoa(`${totalPrice}`); // Encode the calculated value using base64
      const order_token = btoa(`${formattedDateString}`); // Encode 'orderID' using base64
      for (let i = 0; i < orderFiles.length; i++) {
        formData.append("orderFiles[]", orderFiles[i]);
      }

      if (
        userEmailcheck &&
        userNamecheck &&
        numberCheck &&
        topicCheck &&
        checkk &&
        validEmail
      ) {
        setLoader(true);
        localStorage.setItem("oldEmail", userEmail);
        localStorage.setItem("oldName", userName);

        const response = await fetch(`/api/emailSender`, {
          method: "POST",
          body: formData,
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return response.text(); // Change to text() to see the raw response
          })
          .then((data) => {
            const jsonData = JSON.parse(data);
            console.log("Parsed Data:", jsonData);
            setIsOK(true);
            const url: any = jsonData.url;
            console.log(url);
            router.push(url);
            setIsRedirecting(true);
          })
          .catch((error) => {
            console.error("Error getting data:", error);
            setHttpError(true);
            setLoader(false);
          });
      } else {
        setIsOK(false);
      }
    } else {
      const verified = showToastError(isVerifiedCaptcha);
      if (verified) {
        return;
      }
    }
  };

  useEffect(() => {
    let activeCountryElement: any;
    if (document !== undefined) {
      activeCountryElement = (document as any).querySelector(
        ".iti__flag-container .iti__selected-flag"
      ) as HTMLInputElement | null;
      const dialCode = activeCountryElement
        .getAttribute("title")
        .split(" ")
        .at(-1);

      setCode(dialCode);
    }
  }, [number]);

  // Get the 'data-dial-code' attribute value from the active country element

  const CountryChange = () => {
    return (
      <select
        className="w-[100%] bg-[#fff] h-[40px] border-[#dbdbdb] border rounded-sm pl-2 text-[#2e2e2e] outline-none"
        defaultValue={countryy}
        // value={country}
        onChange={(e) => {
          setCountryy(e.target.value);
        }}
      >
        {countryDataList.map((item: any) => (
          <option key={item.code} value={item.code}>
            {item.name}
          </option>
        ))}
      </select>
    );
    // Add your logic here
  };
  useEffect(() => {
    // Function to be called every second
    CountryChange();
    // Set up the interval
    // const intervalId = setInterval(CountryChange, 100);

    // Clear the interval after 5 seconds
    // setTimeout(() => {
    //   clearInterval(intervalId);
    // }, 500);

    // Clean up the interval when the component unmounts
    // return () => clearInterval(intervalId);
  }, [country]); // Empty dependency array means this effect runs once on mount

  // {//////////////////////////Bottom Banner/////////////////////////////}

  const { showBanner, setShowBanner } = useContext<any>(BannerContext);

  /////////////////////////Bottom Banner end/////////////////////////////

  const [iscoupon, setIscoupon] = useState(false);
  const searchParams = useSearchParams();
  const couponvalue = searchParams.get("coupon");

  useLayoutEffect(() => {
    if (couponvalue === "GG-50%off") {
      setIscoupon(true);
    }
  }, []);

  return (
    <>
      {iscoupon ? (
        <div
          className=" min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center"
          id="modal-id"
        >
          <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
          <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  orderpopup bg-contain">
            <div className="">
              <div className="text-center p-5 flex-auto justify-center">
                <img src="/CouponPopup.png" className="h-16 mx-auto" />
                <h2 className="text-xl font-bold py-4 ">
                  50% OFF Discount Applied
                </h2>
                <p className="text-sm text-gray-500 px-8">
                  Your coupon has been applied successfully
                </p>
              </div>
              <div className="p-3  mt-2 text-center space-x-4 md:block">
                <button
                  onClick={() => setIscoupon(false)}
                  className="mb-2  md:mb-0 bg-[#0F203D] border border-[#0F203D] px-7 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-lg hover:shadow-lg hover:bg-[#0F203D]/80"
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="bg-[#F1F1F1] md:pt-[40px] pb-[30px]">
        <div className="max-md:block hidden">
          <div
            className={`center items-center bg-white w-full py-4 border-t-2 px-4  z-10 top-[88px]`}
          >
            <p className="text-black font-semibold text-[18px]">
              <span className="font-normal">Place your order in just </span>
              {`${psymbol} ${totalPrice}`}
            </p>
          </div>
        </div>
        <div className="max-sm:flex flex-col gap-2 items-start hidden px-[30px] mb-10 pt-[20px]">
          <h4 className="text-left text-[#1c3d72] text-[26px] font-bold leading-tight tracking-tight">
            <span className="text-[30px]">Place Order</span> <br />& Get
            <span className="text-[#dc472c] text-[43px] "> 50%</span> Off
          </h4>
          <p className="flex items-center justify-center gap-2 text-[#1c3d72] font-medium">
            <FaCheck className="bg-[#33e533] text-[22px] rounded-full p-1 text-white mr-1" />
            100% Secure Payment Process
          </p>
          <p className="flex items-center justify-center gap-2 text-[#1c3d72] font-medium">
            <FaCheck className="bg-[#33e533] text-[22px] rounded-full p-1 text-white mr-1" />
            Free Tunitin Report
          </p>
          <p className="flex items-center justify-center gap-2 text-[#1c3d72] font-medium">
            <FaCheck className="bg-[#33e533] text-[22px] rounded-full p-1 text-white mr-1" />
            100% Satisfaction Guaranty
          </p>

          <p className="flex items-center justify-center gap-2 text-[#1c3d72] font-medium">
            <FaCheck className="bg-[#33e533] text-[22px] rounded-full p-1 text-white mr-1" />
            24/7{" "}
            <Link
              href={`https://wa.me/${numberr}?text=Hello GoGrades Team, I need Academic Assistance. Could you help me complete my task on time?`}
              className="text-red-500"
            >
              WhatsApp
            </Link>
            /
            <span className="text-red-500" onClick={openTawkToChat}>
              {" "}
              Live Chat
            </span>{" "}
            Support
          </p>
          <p className="flex items-center justify-center gap-2 text-[#1c3d72] font-medium">
            <FaCheck className="bg-[#33e533] text-[22px] rounded-full p-1 text-white mr-1" />
            Premium Quality Guaranty
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center max-md:items-center px-[30px] gap-7 mx-auto mt-[20px]">
          <div
            className="bg-white py-[30px] px-[20px] w-full md:w-[42%] h-fit"
            style={{ boxShadow: "-1px 0 6px rgba(0, 0, 0, 0.16)" }}
          >
            <h2 className="text-[21px] text-[#071E57] font-medium border-b w-full mb-[20px]">
              Order Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <h3 className="text-[#616161] text-[15px] mb-1">
                  Type of Paper
                </h3>
                <select
                  onKeyPress={handleKeyPress}
                  className="w-[100%] bg-[#fff] h-[40px] border-[#dbdbdb] border rounded-sm pl-2 text-[#2e2e2e] outline-none"
                  onChange={(e) => {
                    setTypeOfPaper(e.target.value);
                  }}
                  defaultValue={"Essay writing"}
                >
                  <option value="Essay writing">Essay writing</option>
                  <option value="Assignment Writing">Assignment Writing</option>
                  <option value="Research Paper writing">
                    Research Paper writing
                  </option>
                  <option value="Course Work">Course Work</option>
                  <option value="case study">case study</option>
                  <option value="Term Paper">Term Paper</option>
                  <option value="Online Exam Quizzes">
                    Online Exam Quizzes
                  </option>
                  <option value="Homework">Homework</option>
                  <option value="Editing">Editing</option>
                  <option value="Formatting">Formatting</option>
                  <option value="Proofreading">Proofreading</option>
                  <option value="Annotated Bibliography">
                    Annotated Bibliography
                  </option>
                  <option value="Speech/Presentation">
                    Speech/Presentation
                  </option>
                  <option value="PowerPoint Presentation">
                    PowerPoint Presentation
                  </option>
                  <option value="Thesis">Thesis</option>
                  <option value="Thesis Proposal">Thesis Proposal</option>
                  <option value="Dissertation">Dissertation</option>
                  <option value="Dissertation Chapter- Abstract">
                    Dissertation Chapter- Abstract
                  </option>
                  <option value="Dissertation Chapter- Introduction Chapter">
                    Dissertation Chapter- Introduction Chapter
                  </option>
                  <option value="Dissertation Chapter- Literature Review">
                    Dissertation Chapter- Literature Review
                  </option>
                  <option value="Dissertation Chapter- Methodology">
                    Dissertation Chapter- Methodology
                  </option>
                  <option value="Dissertation Chapter- Result">
                    Dissertation Chapter- Result
                  </option>
                  <option value="Dissertation Chapter- Discussion">
                    Dissertation Chapter- Discussion
                  </option>
                  <option value="Book Report">Book Report</option>
                  <option value="Book Review">Book Review</option>
                  <option value="Movie Review">Movie Review</option>
                  <option value="Research Proposal">Research Proposal</option>
                  <option value="Case Study">Case Study</option>
                  <option value="Article">Article</option>
                  <option value="Article Critique">Article Critique</option>
                  <option value="Admission Essays">Admission Essays</option>
                  <option value="Admission Sevices - Editing">
                    Admission Sevices - Editing
                  </option>
                  <option value="Psychology">Psychology</option>
                  <option value="Religious studies">Religious studies</option>
                  <option value="Shakespeare">Shakespeare</option>
                  <option value="Sociology">Sociology</option>
                  <option value="Statistics">Statistics</option>
                  <option value="Technology">Technology</option>
                  <option value="Web, High tech">Web, High tech</option>
                  <option value="Women's &amp; gender studies">
                    Womens &amp; gender studies
                  </option>
                  <option value="World Affairs">World Affairs</option>
                  <option value="World Literature">World Literature</option>
                  <option value="Zoology">Zoology</option>
                  <option value="Thesis Writing">Thesis Writing</option>
                  <option value="Custom essay writing">
                    Custom essay writing
                  </option>
                  <option value="College Essay writing">
                    College Essay writing
                  </option>
                  <option value="Write my Paper">Write my Paper</option>
                  <option value="College Paper">College Paper</option>
                  <option value="Online Exam Quizzes">
                    Online Exam Quizzes
                  </option>
                  <option value="Resume writing">Resume writing</option>
                  <option value="Business letter writing">
                    Business letter writing
                  </option>
                  <option value="SEO Optimized Articles">
                    SEO Optimized Articles
                  </option>
                  <option value="Blog Writing">Blog Writing</option>
                  <option value="Web Content Writing">
                    Web Content Writing
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <h3 className="text-[#616161] text-[15px] mb-1">
                  Task/Academic Level
                </h3>
                <select
                  onKeyPress={handleKeyPress}
                  className="w-[100%] bg-[#fff] h-[40px] border-[#dbdbdb] border rounded-sm pl-2 text-[#2e2e2e] outline-none"
                  defaultValue={"Undergraduate"}
                  onClick={(e: any) => {
                    setLevel(e.target.value);
                  }}
                >
                  <option value="High School">High School</option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Master's">Master&#39;s</option>
                  <option value="Doctoral">Doctoral</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <h3 className="text-[#616161] text-[15px] mb-1">
                  Select Subject
                </h3>
                <select
                  onKeyPress={handleKeyPress}
                  className="w-[100%] bg-[#fff] h-[40px] border-[#dbdbdb] border rounded-sm pl-2 text-[#2e2e2e] outline-none"
                  onClick={(e: any) => {
                    setSubject(e.target.value);
                  }}
                  defaultValue={"Business"}
                >
                  <option value="Accounting">Accounting</option>
                  <option value="Business">Business</option>
                  <option value="Nursing">Nursing</option>
                  <option value="HRM">HRM</option>
                  <option value="Medical">Medical</option>
                  <option value="Accounting">Accounting</option>
                  <option value="Anthropology">Anthropology</option>
                  <option value="Application Letters">
                    Application Letters
                  </option>
                  <option value="Art &amp; Architecture">
                    Art &amp; Architecture
                  </option>
                  <option value="Biology">Biology</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Classics English literature">
                    Classics English literature
                  </option>
                  <option value="Communications">Communications</option>
                  <option value="Computer science">Computer science</option>
                  <option value="Economics">Economics</option>
                  <option value="Education">Education</option>
                  <option value="Family and consumer science">
                    Family and consumer science
                  </option>
                  <option value="Film &amp; Theater studies">
                    Film &amp; Theater studies
                  </option>
                  <option value="Finance">Finance</option>
                  <option value="History">History</option>
                  <option value="Law">Law</option>
                  <option value="Management">Management</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Medicine">Medicine</option>
                  <option value="Music">Music</option>
                  <option value="Nursing">Nursing</option>
                  <option value="Philosophy">Philosophy</option>
                  <option value="Physics">Physics</option>
                  <option value="Political science">Political science</option>
                  <option value="Psychology">Psychology</option>
                  <option value="Religious studies">Religious studies</option>
                  <option value="Shakespeare">Shakespeare</option>
                  <option value="Sociology">Sociology</option>
                  <option value="Statistics">Statistics</option>
                  <option value="Technology">Technology</option>
                  <option value="Web, High tech">Web, High tech</option>
                  <option value="Women's &amp; gender studies">
                    Women&#39;s &amp; gender studies
                  </option>
                  <option value="World Affairs">World Affairs</option>
                  <option value="World Literature">World Literature</option>
                  <option value="Zoology">Zoology</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <h3 className="text-[#616161] text-[15px] mb-1">
                  Referencing Style
                </h3>
                <select
                  onChange={(e) => {
                    setReference(e.target.value);
                  }}
                  onKeyPress={handleKeyPress}
                  className="w-[100%] bg-[#fff] h-[40px] border-[#dbdbdb] border rounded-sm pl-2 text-[#2e2e2e] outline-none"
                  defaultValue={"Harvard Referencing"}
                >
                  <option value="APA Referencing">APA Referencing</option>
                  <option value="Harvard Referencing">
                    Harvard Referencing
                  </option>
                  <option value="Chicago Referencing">
                    Chicago Referencing
                  </option>
                  <option value="MLA Referencing">MLA Referencing</option>
                  <option value="Oxford Referencing">Oxford Referencing</option>
                  <option value="Turabian Referencing">
                    Turabian Referencing
                  </option>
                  <option value="CBE Referencing">CBE Referencing</option>
                  <option value="Not applicable">Not applicable</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <h3 className="text-[#616161] text-[15px] mb-1">
                  Number of Sources
                </h3>
                <select
                  onKeyPress={handleKeyPress}
                  className="w-[100%] bg-[#fff] h-[40px] border-[#dbdbdb] border rounded-sm pl-2 text-[#2e2e2e] outline-none"
                  defaultValue={"10"}
                  onChange={(e) => {
                    setSources(e.target.value);
                  }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                </select>
              </div>
              <div>
                <h3 className="text-[#616161] text-[15px] mb-1">
                  Paper Standard
                </h3>
                <select
                  onKeyPress={handleKeyPress}
                  onChange={(e) => {
                    setPaperStandard(e.target.value);
                  }}
                  defaultValue={"Standard Quality"}
                  className="w-[100%] bg-[#fff] h-[40px] border-[#dbdbdb] border rounded-sm pl-2 text-[#2e2e2e] outline-none"
                >
                  <option value="Premium Quality">Premium Quality</option>
                  <option value="Standard Quality">Standard Quality</option>
                </select>
              </div>
              <div>
                <h3 className="text-[#616161] text-[15px] mb-1">
                  Number of Pages
                </h3>
                <select
                  onKeyPress={handleKeyPress}
                  onChange={(e) => {
                    const count = e.target.value as any;
                    setPages(e.target.value);
                    setWordCount(`${count * 300}`);
                  }}
                  defaultValue="1"
                  className="w-[100%] bg-[#fff] h-[40px] border-[#dbdbdb] border rounded-sm pl-2 text-[#2e2e2e] outline-none"
                >
                  <option data-wordcount="300" data-price="1" value="1">
                    1 Page / 300 Words
                  </option>
                  <option data-wordcount="600" data-price="2" value="2">
                    2 Page / 600 Words
                  </option>
                  <option data-wordcount="900" data-price="3" value="3">
                    3 Page / 900 Words
                  </option>
                  <option data-wordcount="1200" data-price="4" value="4">
                    4 Page / 1200 Words
                  </option>
                  <option data-wordcount="1500" data-price="5" value="5">
                    5 Page / 1500 Words
                  </option>
                  <option data-wordcount="1800" data-price="6" value="6">
                    6 Page / 1800 Words
                  </option>
                  <option data-wordcount="2100" data-price="7" value="7">
                    7 Page / 2100 Words
                  </option>
                  <option data-wordcount="2400" data-price="8" value="8">
                    8 Page / 2400 Words
                  </option>
                  <option data-wordcount="2700" data-price="9" value="9">
                    9 Page / 2700 Words
                  </option>
                  <option data-wordcount="3000" data-price="10" value="10">
                    10 Page / 3000 Words
                  </option>
                  <option data-wordcount="3300" data-price="11" value="11">
                    11 Page / 3300 Words
                  </option>
                  <option data-wordcount="3600" data-price="12" value="12">
                    12 Page / 3600 Words
                  </option>
                  <option data-wordcount="3900" data-price="13" value="13">
                    13 Page / 3900 Words
                  </option>
                  <option data-wordcount="4200" data-price="14" value="14">
                    14 Page / 4200 Words
                  </option>
                  <option data-wordcount="4500" data-price="15" value="15">
                    15 Page / 4500 Words
                  </option>
                  <option data-wordcount="4800" data-price="16" value="16">
                    16 Page / 4800 Words
                  </option>
                  <option data-wordcount="5100" data-price="17" value="17">
                    17 Page / 5100 Words
                  </option>
                  <option data-wordcount="5400" data-price="18" value="18">
                    18 Page / 5400 Words
                  </option>
                  <option data-wordcount="5700" data-price="19" value="19">
                    19 Page / 5700 Words
                  </option>
                  <option data-wordcount="6000" data-price="20" value="20">
                    20 Page / 6000 Words
                  </option>
                  <option data-wordcount="6300" data-price="21" value="21">
                    21 Page / 6300 Words
                  </option>
                  <option data-wordcount="6600" data-price="22" value="22">
                    22 Page / 6600 Words
                  </option>
                  <option data-wordcount="6900" data-price="23" value="23">
                    23 Page / 6900 Words
                  </option>
                  <option data-wordcount="7200" data-price="24" value="24">
                    24 Page / 7200 Words
                  </option>
                  <option data-wordcount="7500" data-price="25" value="25">
                    25 Page / 7500 WordsAssignment Help
                  </option>
                  <option data-wordcount="7800" data-price="26" value="26">
                    26 Page / 7800 Words
                  </option>
                  <option data-wordcount="8100" data-price="27" value="27">
                    27 Page / 8100 Words
                  </option>
                  <option data-wordcount="8400" data-price="28" value="28">
                    28 Page / 8400 Words
                  </option>
                  <option data-wordcount="8700" data-price="29" value="29">
                    29 Page / 8700 Words
                  </option>
                  <option data-wordcount="9000" data-price="30" value="30">
                    30 Page / 9000 Words
                  </option>
                  <option data-wordcount="9300" data-price="31" value="31">
                    31 Page / 9300 Words
                  </option>
                  <option data-wordcount="9600" data-price="32" value="32">
                    32 Page / 9600 Words
                  </option>
                  <option data-wordcount="9900" data-price="33" value="33">
                    33 Page / 9900 Words
                  </option>
                  <option data-wordcount="10200" data-price="34" value="34">
                    34 Page / 10200 Words
                  </option>
                  <option data-wordcount="10500" data-price="35" value="35">
                    35 Page / 10500 Words
                  </option>
                  <option data-wordcount="10800" data-price="36" value="36">
                    36 Page / 10800 Words
                  </option>
                  <option data-wordcount="11100" data-price="37" value="37">
                    37 Page / 11100 Words
                  </option>
                  <option data-wordcount="11400" data-price="38" value="38">
                    38 Page / 11400 Words
                  </option>
                  <option data-wordcount="11700" data-price="39" value="39">
                    39 Page / 11700 Words
                  </option>
                  <option data-wordcount="12000" data-price="40" value="40">
                    40 Page / 12000 Words
                  </option>
                  <option data-wordcount="12300" data-price="41" value="41">
                    41 Page / 12300 Words
                  </option>
                  <option data-wordcount="12600" data-price="42" value="42">
                    42 Page / 12600 Words
                  </option>
                  <option data-wordcount="12900" data-price="43" value="43">
                    43 Page / 12900 Words
                  </option>
                  <option data-wordcount="13200" data-price="44" value="44">
                    44 Page / 13200 Words
                  </option>
                  <option data-wordcount="13500" data-price="45" value="45">
                    45 Page / 13500 Words
                  </option>
                  <option data-wordcount="13800" data-price="46" value="46">
                    46 Page / 13800 Words
                  </option>
                  <option data-wordcount="14100" data-price="47" value="47">
                    47 Page / 14100 Words
                  </option>
                  <option data-wordcount="14400" data-price="48" value="48">
                    48 Page / 14400 Words
                  </option>
                  <option data-wordcount="14700" data-price="49" value="49">
                    49 Page / 14700 Words
                  </option>
                  <option data-wordcount="15000" data-price="50" value="50">
                    50 Page / 15000 Words
                  </option>
                  <option data-wordcount="15300" data-price="51" value="51">
                    51 Page / 15300 Words
                  </option>
                  <option data-wordcount="15600" data-price="52" value="52">
                    52 Page / 15600 Words
                  </option>
                  <option data-wordcount="15900" data-price="53" value="53">
                    53 Page / 15900 Words
                  </option>
                  <option data-wordcount="16200" data-price="54" value="54">
                    54 Page / 16200 Words
                  </option>
                  <option data-wordcount="16500" data-price="55" value="55">
                    55 Page / 16500 Words
                  </option>
                  <option data-wordcount="16800" data-price="56" value="56">
                    56 Page / 16800 Words
                  </option>
                  <option data-wordcount="17100" data-price="57" value="57">
                    57 Page / 17100 Words
                  </option>
                  <option data-wordcount="17400" data-price="58" value="58">
                    58 Page / 17400 Words
                  </option>
                  <option data-wordcount="17700" data-price="59" value="59">
                    59 Page / 17700 Words
                  </option>
                  <option data-wordcount="18000" data-price="60" value="60">
                    60 Page / 18000 Words
                  </option>
                  <option data-wordcount="18300" data-price="61" value="61">
                    61 Page / 18300 Words
                  </option>
                  <option data-wordcount="18600" data-price="62" value="62">
                    62 Page / 18600 Words
                  </option>
                  <option data-wordcount="18900" data-price="63" value="63">
                    63 Page / 18900 Words
                  </option>
                  <option data-wordcount="19200" data-price="64" value="64">
                    64 Page / 19200 Words
                  </option>
                  <option data-wordcount="19500" data-price="65" value="65">
                    65 Page / 19500 Words
                  </option>
                  <option data-wordcount="19800" data-price="66" value="66">
                    66 Page / 19800 Words
                  </option>
                  <option data-wordcount="20100" data-price="67" value="67">
                    67 Page / 20100 Words
                  </option>
                  <option data-wordcount="20400" data-price="68" value="68">
                    68 Page / 20400 Words
                  </option>
                  <option data-wordcount="20700" data-price="69" value="69">
                    69 Page / 20700 Words
                  </option>
                  <option data-wordcount="21000" data-price="70" value="70">
                    70 Page / 21000 Words
                  </option>
                  <option data-wordcount="21300" data-price="71" value="71">
                    71 Page / 21300 Words
                  </option>
                  <option data-wordcount="21600" data-price="72" value="72">
                    72 Page / 21600 Words
                  </option>
                  <option data-wordcount="21900" data-price="73" value="73">
                    73 Page / 21900 Words
                  </option>
                  <option data-wordcount="22200" data-price="74" value="74">
                    74 Page / 22200 Words
                  </option>
                  <option data-wordcount="22500" data-price="75" value="75">
                    75 Page / 22500 Words
                  </option>
                  <option data-wordcount="22800" data-price="76" value="76">
                    76 Page / 22800 Words
                  </option>
                  <option data-wordcount="23100" data-price="77" value="77">
                    77 Page / 23100 Words
                  </option>
                  <option data-wordcount="23400" data-price="78" value="78">
                    78 Page / 23400 Words
                  </option>
                  <option data-wordcount="23700" data-price="79" value="79">
                    79 Page / 23700 Words
                  </option>
                  <option data-wordcount="24000" data-price="80" value="80">
                    80 Page / 24000 Words
                  </option>
                  <option data-wordcount="24300" data-price="81" value="81">
                    81 Page / 24300 Words
                  </option>
                  <option data-wordcount="24600" data-price="82" value="82">
                    82 Page / 24600 Words
                  </option>
                  <option data-wordcount="24900" data-price="83" value="83">
                    83 Page / 24900 Words
                  </option>
                  <option data-wordcount="25200" data-price="84" value="84">
                    84 Page / 25200 Words
                  </option>
                  <option data-wordcount="25500" data-price="85" value="85">
                    85 Page / 25500 Words
                  </option>
                  <option data-wordcount="25800" data-price="86" value="86">
                    86 Page / 25800 Words
                  </option>
                  <option data-wordcount="26100" data-price="87" value="87">
                    87 Page / 26100 Words
                  </option>
                  <option data-wordcount="26400" data-price="88" value="88">
                    88 Page / 26400 Words
                  </option>
                  <option data-wordcount="26700" data-price="89" value="89">
                    89 Page / 26700 Words
                  </option>
                  <option data-wordcount="27000" data-price="90" value="90">
                    90 Page / 27000 Words
                  </option>
                  <option data-wordcount="27300" data-price="91" value="91">
                    91 Page / 27300 Words
                  </option>
                  <option data-wordcount="27600" data-price="92" value="92">
                    92 Page / 27600 Words
                  </option>
                  <option data-wordcount="27900" data-price="93" value="93">
                    93 Page / 27900 Words
                  </option>
                  <option data-wordcount="28200" data-price="94" value="94">
                    94 Page / 28200 Words
                  </option>
                  <option data-wordcount="28500" data-price="95" value="95">
                    95 Page / 28500 Words
                  </option>
                  <option data-wordcount="28800" data-price="96" value="96">
                    96 Page / 28800 Words
                  </option>
                  <option data-wordcount="29100" data-price="97" value="97">
                    97 Page / 29100 Words
                  </option>
                  <option data-wordcount="29400" data-price="98" value="98">
                    98 Page / 29400 Words
                  </option>
                  <option data-wordcount="29700" data-price="99" value="99">
                    99 Page / 29700 Words
                  </option>
                  <option data-wordcount="30000" data-price="100" value="100">
                    100 Page / 30000 Words
                  </option>
                  <option data-wordcount="30300" data-price="101" value="101">
                    101 Page / 30300 Words
                  </option>
                  <option data-wordcount="30600" data-price="102" value="102">
                    102 Page / 30600 Words
                  </option>
                  <option data-wordcount="30900" data-price="103" value="103">
                    103 Page / 30900 Words
                  </option>
                  <option data-wordcount="31200" data-price="104" value="104">
                    104 Page / 31200 Words
                  </option>
                  <option data-wordcount="31500" data-price="105" value="105">
                    105 Page / 31500 Words
                  </option>
                  <option data-wordcount="31800" data-price="106" value="106">
                    106 Page / 31800 Words
                  </option>
                  <option data-wordcount="32100" data-price="107" value="107">
                    107 Page / 32100 Words
                  </option>
                  <option data-wordcount="32400" data-price="108" value="108">
                    108 Page / 32400 Words
                  </option>
                  <option data-wordcount="32700" data-price="109" value="109">
                    109 Page / 32700 Words
                  </option>
                  <option data-wordcount="33000" data-price="110" value="110">
                    110 Page / 33000 Words
                  </option>
                  <option data-wordcount="33300" data-price="111" value="111">
                    111 Page / 33300 Words
                  </option>
                  <option data-wordcount="33600" data-price="112" value="112">
                    112 Page / 33600 Words
                  </option>
                  <option data-wordcount="33900" data-price="113" value="113">
                    113 Page / 33900 Words
                  </option>
                  <option data-wordcount="34200" data-price="114" value="114">
                    114 Page / 34200 Words
                  </option>
                  <option data-wordcount="34500" data-price="115" value="115">
                    115 Page / 34500 Words
                  </option>
                  <option data-wordcount="34800" data-price="116" value="116">
                    116 Page / 34800 Words
                  </option>
                  <option data-wordcount="35100" data-price="117" value="117">
                    117 Page / 35100 Words
                  </option>
                  <option data-wordcount="35400" data-price="118" value="118">
                    118 Page / 35400 Words
                  </option>
                  <option data-wordcount="35700" data-price="119" value="119">
                    119 Page / 35700 Words
                  </option>
                  <option data-wordcount="36000" data-price="120" value="120">
                    120 Page / 36000 Words
                  </option>
                  <option data-wordcount="36300" data-price="121" value="121">
                    121 Page / 36300 Words
                  </option>
                  <option data-wordcount="36600" data-price="122" value="122">
                    122 Page / 36600 Words
                  </option>
                  <option data-wordcount="36900" data-price="123" value="123">
                    123 Page / 36900 Words
                  </option>
                  <option data-wordcount="37200" data-price="124" value="124">
                    124 Page / 37200 Words
                  </option>
                  <option data-wordcount="37500" data-price="125" value="125">
                    125 Page / 37500 Words
                  </option>
                  <option data-wordcount="37800" data-price="126" value="126">
                    126 Page / 37800 Words
                  </option>
                  <option data-wordcount="38100" data-price="127" value="127">
                    127 Page / 38100 Words
                  </option>
                  <option data-wordcount="38400" data-price="128" value="128">
                    128 Page / 38400 Words
                  </option>
                  <option data-wordcount="38700" data-price="129" value="129">
                    129 Page / 38700 Words
                  </option>
                  <option data-wordcount="39000" data-price="130" value="130">
                    130 Page / 39000 Words
                  </option>
                  <option data-wordcount="39300" data-price="131" value="131">
                    131 Page / 39300 Words
                  </option>
                  <option data-wordcount="39600" data-price="132" value="132">
                    132 Page / 39600 Words
                  </option>
                  <option data-wordcount="39900" data-price="133" value="133">
                    133 Page / 39900 Words
                  </option>
                  <option data-wordcount="40200" data-price="134" value="134">
                    134 Page / 40200 Words
                  </option>
                  <option data-wordcount="40500" data-price="135" value="135">
                    135 Page / 40500 Words
                  </option>
                  <option data-wordcount="40800" data-price="136" value="136">
                    136 Page / 40800 Words
                  </option>
                  <option data-wordcount="41100" data-price="137" value="137">
                    137 Page / 41100 Words
                  </option>
                  <option data-wordcount="41400" data-price="138" value="138">
                    138 Page / 41400 Words
                  </option>
                  <option data-wordcount="41700" data-price="139" value="139">
                    139 Page / 41700 Words
                  </option>
                  <option data-wordcount="42000" data-price="140" value="140">
                    140 Page / 42000 Words
                  </option>
                  <option data-wordcount="42300" data-price="141" value="141">
                    141 Page / 42300 Words
                  </option>
                  <option data-wordcount="42600" data-price="142" value="142">
                    142 Page / 42600 Words
                  </option>
                  <option data-wordcount="42900" data-price="143" value="143">
                    143 Page / 42900 Words
                  </option>
                  <option data-wordcount="43200" data-price="144" value="144">
                    144 Page / 43200 Words
                  </option>
                  <option data-wordcount="43500" data-price="145" value="145">
                    145 Page / 43500 Words
                  </option>
                  <option data-wordcount="43800" data-price="146" value="146">
                    146 Page / 43800 Words
                  </option>
                  <option data-wordcount="44100" data-price="147" value="147">
                    147 Page / 44100 Words
                  </option>
                  <option data-wordcount="44400" data-price="148" value="148">
                    148 Page / 44400 Words
                  </option>
                  <option data-wordcount="44700" data-price="149" value="149">
                    149 Page / 44700 Words
                  </option>
                  <option data-wordcount="45000" data-price="150" value="150">
                    150 Page / 45000 Words
                  </option>
                  <option data-wordcount="45300" data-price="151" value="151">
                    151 Page / 45300 Words
                  </option>
                  <option data-wordcount="45600" data-price="152" value="152">
                    152 Page / 45600 Words
                  </option>
                  <option data-wordcount="45900" data-price="153" value="153">
                    153 Page / 45900 Words
                  </option>
                  <option data-wordcount="46200" data-price="154" value="154">
                    154 Page / 46200 Words
                  </option>
                  <option data-wordcount="46500" data-price="155" value="155">
                    155 Page / 46500 Words
                  </option>
                  <option data-wordcount="46800" data-price="156" value="156">
                    156 Page / 46800 Words
                  </option>
                  <option data-wordcount="47100" data-price="157" value="157">
                    157 Page / 47100 Words
                  </option>
                  <option data-wordcount="47400" data-price="158" value="158">
                    158 Page / 47400 Words
                  </option>
                  <option data-wordcount="47700" data-price="159" value="159">
                    159 Page / 47700 Words
                  </option>
                  <option data-wordcount="48000" data-price="160" value="160">
                    160 Page / 48000 Words
                  </option>
                  <option data-wordcount="48300" data-price="161" value="161">
                    161 Page / 48300 Words
                  </option>
                  <option data-wordcount="48600" data-price="162" value="162">
                    162 Page / 48600 Words
                  </option>
                  <option data-wordcount="48900" data-price="163" value="163">
                    163 Page / 48900 Words
                  </option>
                  <option data-wordcount="49200" data-price="164" value="164">
                    164 Page / 49200 Words
                  </option>
                  <option data-wordcount="49500" data-price="165" value="165">
                    165 Page / 49500 Words
                  </option>
                  <option data-wordcount="49800" data-price="166" value="166">
                    166 Page / 49800 Words
                  </option>
                  <option data-wordcount="50100" data-price="167" value="167">
                    167 Page / 50100 Words
                  </option>
                  <option data-wordcount="50400" data-price="168" value="168">
                    168 Page / 50400 Words
                  </option>
                  <option data-wordcount="50700" data-price="169" value="169">
                    169 Page / 50700 Words
                  </option>
                  <option data-wordcount="51000" data-price="170" value="170">
                    170 Page / 51000 Words
                  </option>
                  <option data-wordcount="51300" data-price="171" value="171">
                    171 Page / 51300 Words
                  </option>
                  <option data-wordcount="51600" data-price="172" value="172">
                    172 Page / 51600 Words
                  </option>
                  <option data-wordcount="51900" data-price="173" value="173">
                    173 Page / 51900 Words
                  </option>
                  <option data-wordcount="52200" data-price="174" value="174">
                    174 Page / 52200 Words
                  </option>
                  <option data-wordcount="52500" data-price="175" value="175">
                    175 Page / 52500 Words
                  </option>
                  <option data-wordcount="52800" data-price="176" value="176">
                    176 Page / 52800 Words
                  </option>
                  <option data-wordcount="53100" data-price="177" value="177">
                    177 Page / 53100 Words
                  </option>
                  <option data-wordcount="53400" data-price="178" value="178">
                    178 Page / 53400 Words
                  </option>
                  <option data-wordcount="53700" data-price="179" value="179">
                    179 Page / 53700 Words
                  </option>
                  <option data-wordcount="54000" data-price="180" value="180">
                    180 Page / 54000 Words
                  </option>
                  <option data-wordcount="54300" data-price="181" value="181">
                    181 Page / 54300 Words
                  </option>
                  <option data-wordcount="54600" data-price="182" value="182">
                    182 Page / 54600 Words
                  </option>
                  <option data-wordcount="54900" data-price="183" value="183">
                    183 Page / 54900 Words
                  </option>
                  <option data-wordcount="55200" data-price="184" value="184">
                    184 Page / 55200 Words
                  </option>
                  <option data-wordcount="55500" data-price="185" value="185">
                    185 Page / 55500 Words
                  </option>
                  <option data-wordcount="55800" data-price="186" value="186">
                    186 Page / 55800 Words
                  </option>
                  <option data-wordcount="56100" data-price="187" value="187">
                    187 Page / 56100 Words
                  </option>
                  <option data-wordcount="56400" data-price="188" value="188">
                    188 Page / 56400 Words
                  </option>
                  <option data-wordcount="56700" data-price="189" value="189">
                    189 Page / 56700 Words
                  </option>
                  <option data-wordcount="57000" data-price="190" value="190">
                    190 Page / 57000 Words
                  </option>
                  <option data-wordcount="57300" data-price="191" value="191">
                    191 Page / 57300 Words
                  </option>
                  <option data-wordcount="57600" data-price="192" value="192">
                    192 Page / 57600 Words
                  </option>
                  <option data-wordcount="57900" data-price="193" value="193">
                    193 Page / 57900 Words
                  </option>
                  <option data-wordcount="58200" data-price="194" value="194">
                    194 Page / 58200 Words
                  </option>
                  <option data-wordcount="58500" data-price="195" value="195">
                    195 Page / 58500 Words
                  </option>
                  <option data-wordcount="58800" data-price="196" value="196">
                    196 Page / 58800 Words
                  </option>
                  <option data-wordcount="59100" data-price="197" value="197">
                    197 Page / 59100 Words
                  </option>
                  <option data-wordcount="59400" data-price="198" value="198">
                    198 Page / 59400 Words
                  </option>
                  <option data-wordcount="59700" data-price="199" value="199">
                    199 Page / 59700 Words
                  </option>
                  <option data-wordcount="60000" data-price="200" value="200">
                    200 Page / 60000 Words
                  </option>
                </select>
              </div>
              <div>
                <h3 className="text-[#616161] text-[15px] mb-1">
                  Preferred Language Style
                </h3>
                <select
                  className="w-[100%] bg-[#fff] h-[40px] border-[#dbdbdb] border rounded-sm pl-2 text-[#2e2e2e] outline-none"
                  onChange={(e) => {
                    setLanguage(e.target.value);
                  }}
                >
                  <option value="British">English (British)</option>
                  <option value="U.S">English (U.S)</option>
                </select>
              </div>
              <div>
                <h3 className="text-[#616161] text-[15px] mb-1">
                  Select Paper Format
                </h3>
                <select
                  onChange={(e) => {
                    setPaperFormat(e.target.value);
                  }}
                  className="w-[100%] bg-[#fff] h-[40px] border-[#dbdbdb] border rounded-sm pl-2 text-[#2e2e2e] outline-none"
                >
                  <option value="Double Spaced">Double Spaced</option>
                  <option value="Single Spaced">Single Spaced</option>
                </select>
              </div>
              <div>
                <h3 className="text-[#616161] text-[15px] mb-1">
                  Select Deadline
                </h3>
                <select
                  onChange={(e) => {
                    setDeadline(e.target.value);
                  }}
                  defaultValue={"10 Days"}
                  className="w-[100%] bg-[#fff] h-[40px] border-[#dbdbdb] border rounded-sm pl-2 text-[#2e2e2e] outline-none"
                >
                  <option value="4 Hours">4 Hours</option>
                  <option value="8 Hours">8 Hours</option>
                  <option value="12 Hours">12 Hours</option>
                  <option value="1 Day">1 Day</option>
                  <option value="2 Days">2 Days</option>
                  <option value="3 Days">3 Days</option>
                  <option value="4 Days">4 Days</option>
                  <option value="5 Days">5 Days</option>
                  <option value="6 Days">6 Days</option>
                  <option value="7 Days">7 Days</option>
                  <option value="8 Days">8 Days</option>
                  <option value="9 Days">9 Days</option>
                  <option value="10 Days">10 Days</option>
                  <option value="11 Days">11 Days</option>
                  <option value="12 Days">12 Days</option>
                  <option value="13 Days">13 Days</option>
                  <option value="14 Days">14 Days</option>
                  <option value="15 Days">15 Days</option>
                  <option value="16 Days">16 Days</option>
                  <option value="17 Days">17 Days</option>
                  <option value="18 Days">18 Days</option>
                  <option value="19 Days">19 Days</option>
                  <option value="20 Days">20 Days</option>
                  <option value="21 Days">21 Days</option>
                  <option value="22 Days">22 Days</option>
                  <option value="23 Days">23 Days</option>
                  <option value="24 Days">24 Days</option>
                  <option value="25 Days">25 Days</option>
                  <option value="26 Days">26 Days</option>
                  <option value="27 Days">27 Days</option>
                  <option value="28 Days">28 Days</option>
                  <option value="29 Days">29 Days</option>
                  <option value="30 Days">30 Days</option>
                </select>
              </div>
            </div>

            <h3 className="text-[#616161] text-[15px] mb-1 mt-3">
              Enter Topic
            </h3>
            <input
              onChange={(e) => {
                setTopic(e.target.value);
              }}
              onKeyPress={handleKeyPress}
              type="text"
              className="outline-none border w-[100%] bg-[#fff] h-[40px] border-[#dbdbdb] pl-2 text-[14px] placeholder:"
              placeholder="Enter Topic"
            />
            {!OK && !topicCheck && (
              <p className="text-red-500">!!! Please Fill the field above</p>
            )}
          </div>
          <div
            className="bg-white py-[30px] px-[20px] w-full md:w-[32%] h-fit"
            style={{ boxShadow: "-1px 0 6px rgba(0, 0, 0, 0.16)" }}
          >
            <h2 className="text-[21px] text-[#071E57] font-medium border-b w-full mb-[20px]">
              Contact Details
            </h2>
            <div className="flex max-sm:flex-col flex-row items-center justify-center gap-3 w-full">
              <div className="w-full">
                <h3 className="text-[#616161] text-[15px] mb-1">Your Name:</h3>
                <input
                  onKeyPress={handleKeyPress}
                  type="text"
                  className="outline-none border w-[100%] bg-[#fff] h-[40px] border-[#dbdbdb] pl-2 text-[14px] placeholder:"
                  placeholder="Enter Full Name"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
                {!OK && !userNamecheck && (
                  <p className="text-red-500">
                    !!! Please Fill the field above
                  </p>
                )}
              </div>

              <div className="w-full">
                <h3 className="text-[#616161] text-[15px] mb-1">Your Email:</h3>
                <input
                  onKeyPress={handleKeyPress}
                  type="email"
                  className="outline-none border w-[100%] bg-[#fff] h-[40px] border-[#dbdbdb] pl-2 text-[14px] placeholder:"
                  placeholder="Enter Email Address"
                  onChange={handleInputChange}
                />
                {validEmail == false && (
                  <p className="text-red-500">
                    Email must contain &apos;@&apos; symbol.
                  </p>
                )}
                {!OK && !userEmailcheck && (
                  <p className="text-red-500">
                    !!! Please Fill the field above
                  </p>
                )}
              </div>
            </div>
            <div className="">
              <h3 className="text-[#616161] text-[15px] mb-1 my-2">
                Phone Number:
              </h3>
              <div className="w-full">
                <input
                  onKeyPress={handleKeyPress}
                  type="tel"
                  ref={phoneInputRef}
                  onInput={(e: any) => {
                    e.target.value = e.target.value
                      .replace(/[^0-9.]/g, "")
                      .replace(/(\..*)\./g, "$1");
                  }}
                  id="phone"
                  value={number}
                  onChange={(e) => {
                    setIsNumber(e.target.value);
                  }}
                  required
                  placeholder="Phone Number"
                  className="placeholder:text-[#495057] w-full"
                />
                {!OK && !numberCheck && (
                  <p className="text-red-500">
                    !!! Please Fill the field above
                  </p>
                )}
              </div>
            </div>

            <div className="mt-3">
              <h3 className="text-[#616161] text-[15px] mb-1">
                Institution Country:
              </h3>
              <CountryChange />
            </div>
            <div className="mt-3">
              <h3 className="text-[#616161] text-[15px] mb-1">
                Additional Notes (Instructions)
              </h3>
              <textarea
                onChange={(e) => {
                  setNotes(e.target.value);
                }}
                style={{ resize: "none" }}
                className="outline-none border w-[100%] h-[80px] bg-[#fff] border-[#dbdbdb] pl-2 text-[14px] placeholder:"
                placeholder="The more instructions you provide, the better our writers can craft an essay that meets your needs."
              />
            </div>
            <div className="mt-3">
              <h3 className="text-[#616161] text-[15px] mb-1">
                Additional Files
              </h3>
              <input
                onKeyPress={handleKeyPress}
                type="file"
                name="orderFiles[]"
                accept="image/*, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, text/plain, !application/x-rar-compressed !application/zip"
                multiple
                id="order_file_submit"
                onChange={handleFileChange}
                className="outline-none border w-[100%] bg-[#fff] py-[6px] border-[#dbdbdb] pl-2 text-[14px] placeholder:"
              />
            </div>
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                defaultChecked
                onChange={(e) => {
                  setCheck(e.target.checked);
                }}
              />
              <h3 className="text-[#616161] text-[15px] ml-3">
                I agree with{" "}
                <Link href={"/privacy-policy"} className="underline">
                  Pivacy Policy
                </Link>{" "}
                <Link href={"/terms-conditions"} className="underline">
                  {" "}
                  Terms of Use{" "}
                </Link>
              </h3>
            </div>
            {!OK && !checkk && (
              <p className="text-red-500">!!! Please Fill the field above</p>
            )}
          </div>
          <div
            className="bg-white py-[30px] px-[20px] w-full md:w-[32%] h-fit flex flex-col gap-3"
            style={{ boxShadow: "-1px 0 6px rgba(0, 0, 0, 0.16)" }}
          >
            <h2 className="text-[21px] text-black font-medium border-b w-full mb-[20px]">
              Order Summary
            </h2>
            <div className="flex items-center justify-between">
              <h3 className="text-[#616161] text-[15px] ml-3">
                Topic Of Paper:
              </h3>
              <h4 className="text-black font-semibold text-[18px] hidetext">
                {topic}
              </h4>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-[#616161] text-[15px] ml-3">
                Referencing Style:
              </h3>
              <h4 className="text-black font-semibold text-[18px] hidetext">
                {reference}
              </h4>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-[#616161] text-[15px] ml-3">
                Paper Standard:
              </h3>
              <h4 className="text-black font-semibold text-[18px] hidetext">
                {paperStandard}
              </h4>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-[#616161] text-[15px] ml-3">Deadline:</h3>
              <h4 className="text-black font-semibold text-[18px]">
                {deadline}
              </h4>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-[#616161] text-[15px] ml-3">No. Of Pages:</h3>
              <h4 className="text-black font-semibold text-[18px]">{pages}</h4>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-[#616161] text-[15px] ml-3">Word Count:</h3>
              <h4 className="text-black font-semibold text-[18px]">
                {wordCount}
              </h4>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-[#616161] text-[15px] ml-3">
                Price Per Page:
              </h3>
              <h4 className="text-black font-semibold text-[18px]">
                {`${psymbol} ${ppp}`}
              </h4>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-[#616161] text-[15px] ml-3">Total Price:</h3>
              <h4 className="text-black font-semibold text-[18px]">
                {`${psymbol} ${totalPrice}`}
              </h4>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-[#616161] text-[15px] ml-3">
                Ai & Turnitin Report
              </h3>
              <h4 className="text-green-500 font-semibold">Free</h4>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-[#616161] text-[15px] ml-3">Discount</h3>
              <h4 className="text-black font-semibold bg-[#FFD710] text-[13px] px-2 py- rounded-3xl">
                50% OFF
              </h4>
            </div>
            <CustomCaptcha setIsVerifiedCaptcha={setIsVerifiedCaptcha} />
            <div className="my-2">
              <button
                className={
                  loader
                    ? "cursor-not-allowed  animate-pulse flex justify-center items-center font-bold bg-[#1c3d72]/80 text-white text-[18px] w-full py-2 rounded-md"
                    : "transition ease-in-out delay-120 hover:shadow-xl hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center font-bold bg-[#1c3d72] text-white text-[18px] w-full py-2 rounded-md hover:bg-[#1c3d72]/90"
                }
                onClick={handleSubmit}
                disabled={loader}
              >
                {loader ? (
                  <span>
                    <ClipLoader size={"15px"} color="#ddd" />{" "}
                    {isRedirecting
                      ? "Redirecting For Payment.."
                      : "Processing On Your Order.."}
                  </span>
                ) : (
                  "Place Order"
                )}
              </button>
            </div>
            {httpError && (
              <p className="text-red-500">Something Went Wrong !!</p>
            )}

            {!OK && (
              <p className="text-red-500">!!! Please Fill all the fields</p>
            )}
            <div className="flex justify-center">
              <img
                height={"90"}
                width={"90"}
                src={"/guaranteed.svg"}
                alt="img"
                className=" h-[70px]"
              ></img>
              <img
                height={"90"}
                width={"90"}
                src={"/moneyback.svg"}
                alt="img"
                className=" h-[70px]"
              ></img>
              <img
                height={"90"}
                width={"90"}
                src={"/privacy-icon.svg"}
                alt="img"
                className=" h-[70px]"
              ></img>
            </div>
            <h3 className="text-[#1D1D1D] font-medium text-[15px]">
              With Each Order, You Get:
            </h3>
            <ul>
              <li className="text-[13px] text-[#616161] leading-tight flex gap-2 mt-2">
                <FaCheck className="text-[#33e533] text-[12px] mr-1 mb-[-10px]" />
                Money-Refund Policy if the work is found unsatisfactory
              </li>
              <li className="text-[13px] text-[#616161] leading-tight flex gap-2 mt-2">
                <FaCheck className="text-[#33e533] text-[12px] mr-1 mb-[-10px]" />
                On-time delivery of the assignment
              </li>
              <li className="text-[13px] text-[#616161] leading-tight flex gap-2 mt-2">
                <FaCheck className="text-[#33e533] text-[12px] mr-1 mb-[-10px]" />
                Free Turnitin Report to prove the authenticity of content
              </li>
              <li className="text-[13px] text-[#616161] leading-tight flex gap-2 mt-2">
                <FaCheck className="text-[#33e533] text-[12px] mr-1 mb-[-10px]" />
                24*7 Customer Assistance to resolve queries
              </li>
              <li className="text-[13px] text-[#616161] leading-tight flex gap-2 mt-2">
                <FaCheck className="text-[#33e533] text-[12px] mr-1 mb-[-10px]" />
                100% Ownership to the clients
              </li>
              <li className="text-[13px] text-[#616161] leading-tight flex gap-2 mt-2">
                <FaCheck className="text-[#33e533] text-[12px] mr-1 mb-[-10px]" />
                Privacy of confidential information
              </li>
              <li className="text-[13px] text-[#616161] leading-tight flex gap-2 mt-2">
                <FaCheck className="text-[#33e533] text-[12px] mr-1 mb-[-10px]" />
                Free Unlimited Revisions if we do not match your expectations
              </li>
              <li className="text-[13px] text-[#616161] leading-tight flex gap-2 mt-2">
                <FaCheck className="text-[#33e533] text-[12px] mr-1 mb-[-10px]" />
                Exclusive offers and discounts
              </li>
            </ul>
            <img
              height={221}
              width={420}
              src={"/badge.png"}
              alt="Payment"
              className="max-md:w-full max-md:h-auto  max-md:max-w-[600px] max-md:aspect-video w-[400px] h-[100%] mt-2"
            ></img>
          </div>
        </div>

        {/* <div className="flex flex-col w-full md:flex-row justify-center max-md:items-center px-[30px] gap-7 mx-auto mt-[20px]">
          <div
            className=" flex flex-col justify-center items-center md:flex-row md:justify-around md:items-center bg-white py-[30px] px-[20px] w-full  h-fit "
            style={{ boxShadow: "-1px 0 6px rgba(0, 0, 0, 0.16)" }}
          >
            <div className="">
              <div className="flex justify-center ">
                <img
                  height={"90"}
                  width={"90"}
                  src={"/guaranteed.svg"}
                  alt="img"
                  className=" h-[70px]"
                ></img>
                <img
                  height={"90"}
                  width={"90"}
                  src={"/moneyback.svg"}
                  alt="img"
                  className=" h-[70px]"
                ></img>
                <img
                  height={"90"}
                  width={"90"}
                  src={"/privacy-icon.svg"}
                  alt="img"
                  className=" h-[70px]"
                ></img>
              </div>
              <img
                height={221}
                width={420}
                src={"/badge.png"}
                alt="Payment"
                className="max-md:w-full max-md:h-auto  max-md:max-w-[600px] max-md:aspect-video w-[400px] h-[100%] mt-2"
              ></img>
            </div>
            <div className="">
              <h3 className="text-[#1D1D1D] font-medium text-[15px]">
                With Each Order, You Get:
              </h3>
              <ul>
                <li className="text-[13px] text-[#616161] leading-tight flex gap-2 mt-2">
                  <FaCheck className="text-[#33e533] text-[12px] mr-1 mb-[-10px]" />
                  Money-Refund Policy if the work is found unsatisfactory
                </li>
                <li className="text-[13px] text-[#616161] leading-tight flex gap-2 mt-2">
                  <FaCheck className="text-[#33e533] text-[12px] mr-1 mb-[-10px]" />
                  On-time delivery of the assignment
                </li>
                <li className="text-[13px] text-[#616161] leading-tight flex gap-2 mt-2">
                  <FaCheck className="text-[#33e533] text-[12px] mr-1 mb-[-10px]" />
                  Free Turnitin Report to prove the authenticity of content
                </li>
                <li className="text-[13px] text-[#616161] leading-tight flex gap-2 mt-2">
                  <FaCheck className="text-[#33e533] text-[12px] mr-1 mb-[-10px]" />
                  24*7 Customer Assistance to resolve queries
                </li>
                <li className="text-[13px] text-[#616161] leading-tight flex gap-2 mt-2">
                  <FaCheck className="text-[#33e533] text-[12px] mr-1 mb-[-10px]" />
                  100% Ownership to the clients
                </li>
                <li className="text-[13px] text-[#616161] leading-tight flex gap-2 mt-2">
                  <FaCheck className="text-[#33e533] text-[12px] mr-1 mb-[-10px]" />
                  Privacy of confidential information
                </li>
                <li className="text-[13px] text-[#616161] leading-tight flex gap-2 mt-2">
                  <FaCheck className="text-[#33e533] text-[12px] mr-1 mb-[-10px]" />
                  Free Unlimited Revisions if we do not match your expectations
                </li>
                <li className="text-[13px] text-[#616161] leading-tight flex gap-2 mt-2">
                  <FaCheck className="text-[#33e533] text-[12px] mr-1 mb-[-10px]" />
                  Exclusive offers and discounts
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>

      {/* ///////////////Bottotm banner//////////////// */}
      <div
        className={
          showBanner
            ? " hidden fixed bottom-0 h-16 w-full bg-[#0F203D] shadow-3xl  items-center justify-center gap-8"
            : "hidden"
        }
      >
        <p className="text-white text-[16px] font-semibold tracking-widest text-md ml-6 ">
          Place Your Order Now &{" "}
          <span className="text-yellow-500 ">Get 50% Special Discount 🎉</span>
        </p>

        <button
          onClick={handleSubmit}
          disabled={loader}
          className={
            loader
              ? "animate-pulse cursor-not-allowed  truncate w-60 shadow bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
              : " animate-bounce truncate w-60 shadow bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
          }
        >
          {loader ? (
            <span>
              <ClipLoader size={"12px"} color="#ddd" />{" "}
              {isRedirecting
                ? "Redirecting For Payment.."
                : "Processing On Your Order.."}
            </span>
          ) : (
            "Place Order"
          )}
        </button>
      </div>
      {/* ///////////////Bottotm banner end//////////////// */}
    </>
  );
}
