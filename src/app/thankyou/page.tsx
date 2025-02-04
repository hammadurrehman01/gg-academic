import React from "react";
import Code from "./Code";
import Event from "@/components/Facebook_Pixel/Event";
import ConversionScript from "@/components/Scripts/Gtag";
import BingTrackingScript from "@/components/Scripts/Bing";

export default function Page() {
  return (
    <>
      <BingTrackingScript />
      <ConversionScript />
      {/* Event snippet for GoGrades Lead PPC Data conversion page Start */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10775231891');
            gtag('event', 'conversion', {
              'send_to': 'AW-10775231891/EVxkCPuZkNADEJP7g5Io',
              'value': 5000.0,
              'currency': 'PKR'
            });
          `,
        }}
      ></script>

      {/* Event snippet for GoGrades Lead PPC Data conversion page End */}
      <Event />
      <title>Thankyou | Gogrades.org</title>
      <meta
        name="description"
        content="Get online assessment editing services and help for the students of UK and Australia. We have qualified and experienced academic writers for all subjects."
        key="desc"
      />
      <link rel="canonical" href="https://gogrades.org/thankyou" />

      <Code />
    </>
  );
}
