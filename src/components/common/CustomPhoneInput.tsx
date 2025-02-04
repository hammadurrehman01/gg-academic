import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const CustomPhoneInput = ({ countryCode, phone, setPhone, placeholder }: any) => {
  return (
    <PhoneInput
      placeholder={placeholder}
      international
      countryCallingCodeEditable={true}
      defaultCountry={countryCode}
      limitMaxLength={true}
      value={phone}
      required
      onChange={setPhone}
      className="rounded-md  w-full py-2 text-sm md:text-base border-[0.5px] border-[#ced4da] px-[.75rem]"
    />
  );
};

export default CustomPhoneInput;
