import React from "react";

import { redirect } from "next/navigation";
import dynamic from "next/dynamic";
export default function page() {
  redirect("/uk");
  return <div>page</div>;
}
