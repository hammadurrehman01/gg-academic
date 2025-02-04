import React from "react";

export default function Trusted(country: any) {
  const countryCode = country.country;
  let img = "/GGImages/University-Images/Uk-Uni.jpg";
  if (countryCode == "UK") {
    img = "/GGImages/University-Images/Uk-Uni.jpg";
  } else if (countryCode == "IE") {
    img = "/GGImages/University-Images/IE-Uni.jpg";
  } else if (countryCode == "AU") {
    img = "/GGImages/University-Images/AU-Uni.jpg";
  } else if (countryCode == "GB") {
    img = "/GGImages/University-Images/Uk-Uni.jpg";
  } else if (countryCode == "NL") {
    img = "/GGImages/University-Images/NL-Uni.jpg";
  } else if (countryCode == "NO") {
    img = "/GGImages/University-Images/NO-Uni.jpg";
  } else if (countryCode == "NZ") {
    img = "/GGImages/University-Images/NZ-Uni.jpg";
  } else if (countryCode == "OM") {
    img = "/GGImages/University-Images/OM-Uni.jpg";
  } else if (countryCode == "AE") {
    img = "/Universities-in-Dubai.jpg";
  } else if (countryCode == "US") {
    img = "/GGImages/University-Images/US-Uni.jpg";
  } else if (countryCode == "TR") {
    img = "/GGImages/University-Images/TR-Uni.jpg";
  } else if (countryCode == "PL") {
    img = "/GGImages/University-Images/PL-Uni.jpg";
  } else if (countryCode == "IT") {
    img = "/GGImages/University-Images/IT-Uni.jpg";
  } else if (countryCode == "FI") {
    img = "/GGImages/University-Images/FI-Uni.jpg";
  } else if (countryCode == "SE") {
    img = "/GGImages/University-Images/SE-Uni.jpg";
  } else if (countryCode == "AT") {
    img = "/GGImages/University-Images/AT-Uni.jpg";
  } else if (countryCode == "IS") {
    img = "/GGImages/University-Images/IS-Uni.jpg";
  } else if (countryCode == "CA") {
    img = "/GGImages/University-Images/CA-Uni.jpg";
  } else {
    img = "/GGImages/University-Images/GB-Uni.jpg";
  }
  return (
    <div className="flex justify-center items-center gap-8 py-[14px] flex-wrap border-b border-gray-300 text-center px-2">
      <h3 className="text-[#F25F5C] text-[22px] md:text-[32px] font-semibold leading-tight">
        Trusted by 85,000 Students <br />
        <span className="text-[#2D2D2D] text-[14px] md:text-[22px]">
          Connect with over 4,500 trusted experts today
        </span>
      </h3>
      <div className="w-[60%] max-w-[500px] sm:w-[30%]">
        <img
          height={"100"}
          width={"500"}
          src={img}
          alt="img"
          className="h-[100%] w-[100%]"
        ></img>
      </div>
    </div>
  );
}
