"use client";
import BannerContextProvider from "@/components/BannerContext";

function Versionslayout({ children }: { children: React.ReactNode }) {
  return <BannerContextProvider>{children}</BannerContextProvider>;
}

export default Versionslayout;
