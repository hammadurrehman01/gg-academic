import ReCAPTCHA from "react-google-recaptcha";

function CustomCaptcha({ setIsVerifiedCaptcha }: any) {
  async function handleCaptchaSubmission(token: string | null) {
    try {
      if (token) {
        const response = await fetch("/api/submitCaptcha", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        const data = await response.json();

        if (data.message === "Success") {
          setIsVerifiedCaptcha(true);
        }
      }
    } catch (e) {
      setIsVerifiedCaptcha(false);
    }
  }

  const handleChange = (token: string | null) => {
    handleCaptchaSubmission(token);
  };

  function handleExpired() {
    setIsVerifiedCaptcha(false);
  }

  return (
    <div className="flex justify-center">
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
        onChange={handleChange}
        onExpired={handleExpired}
      />
    </div>
  );
}

export default CustomCaptcha;
