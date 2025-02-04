"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMdCheckboxOutline, IoMdCloseCircle } from "react-icons/io";

const CookiesPopup = () => {
  const [shouldAnimateOut, setShouldAnimateOut] = useState(false);

  const saveCookies = () => {
    localStorage.setItem(
      "customCookies",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    );
    setShouldAnimateOut(true);
  };

  return (
    <div
      className={`hidden md:block w-[300px] p-4 bg-[#003e72] fixed bottom-6 left-6 z-[999999] rounded-lg border-[1px] border-white ${
        shouldAnimateOut ? "swipe-box-right" : "swipe-box-left"
      }`}
    >
      <p className="text-white">
        Gogrades.org Uses Cookies to Ensure You Get the Best User Experience.
        Our Privacy Policy{" "}
        <Link
          href="/privacy-policy"
          target="_blank"
          className="text-[#91b3cc] underline"
        >
          Our Privacy Policy
        </Link>
      </p>
      <div className="mt-4 w-[80%] mx-auto flex items-center justify-between">
        <button
          onClick={saveCookies}
          className="bg-[#0c293f] text-white px-4 py-2 rounded-md flex items-center gap-1"
        >
          <IoMdCheckboxOutline className="w-5 h-5" />
          Accept
        </button>
        <button
          onClick={saveCookies}
          className="bg-white text-[#0c293f] px-4 py-2 rounded-md flex items-center gap-1"
        >
          <IoMdCloseCircle className="w-5 h-5" />
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CookiesPopup;
