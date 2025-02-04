import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export interface BannerContextValue {
  showBanner: boolean;
  setShowBanner: Dispatch<SetStateAction<boolean>>;
}

export const BannerContext = createContext<BannerContextValue | undefined>(
  undefined
);

export default function BannerContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  return (
    <BannerContext.Provider
      value={{
        showBanner,
        setShowBanner,
      }}
    >
      {children}
    </BannerContext.Provider>
  );
}
