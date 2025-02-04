export const FB_PIXEL_ID = 386858400791757;

declare global {
  interface Window {
    fbq: any;
    dataLayer: any;
  }
}

export const pageview = () => {
  window.fbq("track", "PageView");
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: any, options = {}) => {
  window.fbq("track", name, options);
};
