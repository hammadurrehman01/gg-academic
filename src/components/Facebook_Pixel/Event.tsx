"use client";

import React from "react";

function Event() {
  return (
    <script
      id="facebookPixelLeadTracking"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
      fbq('track', 'Lead', {
        value: 1,
        currency: 'USD',
      });
    `,
      }}
    ></script>
  );
}

export default Event;
