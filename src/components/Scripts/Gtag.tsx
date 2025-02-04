"use client";

import { useEffect } from "react";

const ConversionScript = () => {
  const allowedPaths: string[] = [
    "/thankyou",
    "/usa/thankyou",
    "/uk/thankyou",
    "/eu/thankyou",
    "/me/thankyou",
    "/aus/thankyou",
    "/ca/thankyou",
    "/thankyou-order",
  ];

  useEffect(() => {
    const email = localStorage.getItem("oldEmail");

    const currentPath = window.location.pathname;
    const scriptId = "gtag-conversion-script"; // Unique ID for the script

    if (allowedPaths.some((path) => currentPath.indexOf(path) !== -1)) {
      // Create a script element with a unique ID
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "text/javascript";
      script.innerHTML = `
        window.addEventListener('load', function() {
          gtag('set', 'user_data', {
            email: "${email}"
          });
          gtag('event', 'conversion', { 
            'send_to': 'AW-10775231891/EVxkCPuZkNADEJP7g5Io' 
          });
        });
      `;

      // Append the script to the body
      document.body.appendChild(script);
    }

    // Cleanup function to remove the script when the component unmounts
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []); // The empty dependency array ensures this runs once when the component mounts

  return null; // No need to render anything in JSX
};

export default ConversionScript;
