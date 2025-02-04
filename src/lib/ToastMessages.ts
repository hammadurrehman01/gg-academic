import { toast } from "react-toastify";

export const showToastError = (isVerified: boolean): boolean => {
  if (!isVerified) {
    toast.error("Please Verify the Captcha");
    return true;
  }
  return false;
};