"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";
import * as pixel from "../../lib/fpixel";

const FacebookPixel = () => {
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!loaded) return;

    pixel.pageview();
  }, [pathname, loaded]);

  return (
    <>
      <Script
        id="fb-pixel"
        src="/scripts/pixel.js"
        strategy="afterInteractive"
        onLoad={() => {
          setLoaded(true);
          console.log("FaceBookPixel code loaded");
        }}
        onError={() => console.log("Error loading meta pixel")}
        data-pixel-id={pixel.FB_PIXEL_ID}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=386858400791757&ev=PageView&noscript=1"
        />
      </noscript>
    </>
  );
};

export default FacebookPixel;
