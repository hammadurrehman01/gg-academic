"use client";
import { formatEmail, formatPhoneNumber } from "@/lib/emialAndPhoneFormater";
import { useEffect, useRef } from "react";

const BingUserDataScript = () => {
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const oldEmail = localStorage.getItem("oldEmail");
    const oldPhone = localStorage.getItem("oldNumber");
    const oldCode = localStorage.getItem("oldCode");

    const email = oldEmail ? formatEmail(oldEmail) : "";
    const phone = oldPhone
      ? formatPhoneNumber(oldCode as string, oldPhone)
      : "";

    const userDataScript = document.createElement("script");
    userDataScript.type = "text/javascript";
    userDataScript.id = "bing-user-data-script";

    const userDataInlineScript = `
      window.uetq = window.uetq || [];
      window.uetq.push('set', { 
        'pid': { 
          'em': '${email}', // User's email address 
          'ph': '${phone}'  // User's phone number 
        } 
      });
    `;

    userDataScript.innerHTML = userDataInlineScript;

    scriptRef.current = userDataScript;

    document.head.appendChild(userDataScript);

    return () => {
      if (scriptRef.current) {
        document.head.removeChild(scriptRef.current);
      }
    };
  }, []);

  return null;
};

export default BingUserDataScript;
