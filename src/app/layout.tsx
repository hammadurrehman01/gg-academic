"use client";
import BannerContextProvider from "@/components/BannerContext";
import FabButton from "@/components/ChatIcons";
import CookiesPopup from "@/components/CookiesPopup";
import CookiesPopupMobile from "@/components/CookiesPopupMobile";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export default function RootLayout({ children }: { children: any }) {
  const [number, setNumber] = useState("+447593709971");
  const [removeComp, setRemoveComp] = useState(false);
  const [cookiePopup, setCookiePopup] = useState(false);
  const [cookiePopupMobile, setCookiePopupMobile] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("customCookies");

    setTimeout(() => {
      if (token === null) {
        setCookiePopup(true);
      }
    }, 1000);
  }, []);

  useEffect(() => {
    localStorage.setItem("externalModal", "false");
  }, []);

  return (
    <html lang="en">
      {!removeComp && (
        <head>
          {/* Start of Tawk.to Script */}
          {/* End of Tawk.to Script */}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              var Tawk_API = Tawk_API || {},
                  Tawk_LoadStart = new Date();
              (function() {
                  var s1 = document.createElement("script"),
                      s0 = document.getElementsByTagName("script")[0];
                  s1.async = true;
                  s1.src = 'https://embed.tawk.to/613c62f825797d7a89fe674d/1ff9u584r';
                  s1.charset = 'UTF-8';
                  s1.setAttribute('crossorigin', '*');
                  s0.parentNode.insertBefore(s1, s0);
              })();
            `,
            }}
          />
          {/* Another Tracking Code Start*/}
          <script
            id="bing-tracking-code"
            dangerouslySetInnerHTML={{
              __html: `
            (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"187087353", enableAutoSpaTracking: true};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");
            `,
            }}
          ></script>{" "}
          {/* Another Tracking Code End*/}
          {/*  Google tag (gtag.js) Start */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-10775231891"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config','AW-10775231891', {'allow_enhanced_conversions':true});
        `,
            }}
          ></script>
          {/* Google tag (gtag.js) End  */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "http://schema.org",
                "@type": "WebSite",
                name: "GoGrades",
                url: "https://gogrades.org/",
                sameAs: [
                  "https://www.facebook.com/Gogrades.org/",
                  "https://twitter.com/GogradesOrg",
                  "https://www.tiktok.com/@gogrades",
                  "https://www.instagram.com/gogradeshere/",
                ],
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://gogrades.org/search?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              }),
            }}
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "e0t9f19ur0");
            `,
            }}
          ></script>
          {/* Google Analytic */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-ELNEH3H6JN"
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-ELNEH3H6JN');
            `,
            }}
          ></script>
          {/* Google Analytic */}
          {/* bard  */}
          <Script
            id="bard"
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
            (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"187087353"};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq")
            `,
            }}
          />
          {/* Facebook */}
          <script
            id="facebookPixel"
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                    !function(f,b,e,v,n,t,s){
                      if(f.fbq)return;n=f.fbq=function(){
                        n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)
                      };
                      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                      n.queue=[];t=b.createElement(e);t.async=!0;
                      t.src=v;s=b.getElementsByTagName(e)[0];
                      s.parentNode.insertBefore(t,s)
                    }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '386858400791757'); 
                    fbq('track', 'PageView');
                  `,
            }}
          ></script>
          <noscript>
            <img
              height="1"
              width="1"
              src="https://www.facebook.com/tr?id=386858400791757&ev=PageView&noscript=1"
              alt="Facebook Pixel"
            />
          </noscript>
          {/* webmoon */}
          <script
            data-host="https://mmeanalytics.designstime.com/"
            data-dnt="false"
            src="https://mmeanalytics.designstime.com/js/script.js"
            id="ZwSg9rf6GA"
            async
            defer
          ></script>
          {/* webmoon end*/}
        </head>
      )}
      <body className={` bg-white `}>
        {cookiePopup && (
          <div
            onClick={() => setCookiePopupMobile(true)}
            className="bg-white block md:hidden cursor-pointer w-7 h-7 fixed bottom-[180px] left-0 p-1 z-[99999999]  rounded-br-lg rounded-tr-lg"
          >
            <Image
              src="/assets/cookie-icon.png"
              alt="cookie-icon"
              width={100}
              height={100}
            />
          </div>
          // <IoIosKey
          //   onClick={() => setCookiePopupMobile(true)}
          //   className="bg-white block md:hidden cursor-pointer w-8 h-8 fixed bottom-[251px] left-0 p-1 z-[99999999]"
          // />
        )}

        {cookiePopup && <CookiesPopup />}
        {cookiePopupMobile && (
          <CookiesPopupMobile setCookiePopup={setCookiePopup} />
        )}
        <BannerContextProvider>
          <ToastContainer />
          {/* <Navbar number={number} /> */}
          {/* <ScrollButton /> */}
          <FabButton number={number} />
          {children}

          {/* <Footer number={number} /> */}
          {/* <ScrollToTop /> */}
        </BannerContextProvider>
      </body>
    </html>
  );
}
