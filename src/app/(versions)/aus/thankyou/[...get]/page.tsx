import React from "react";

import { redirect } from "next/navigation";
export default function page() {
  redirect("/aus");
  return <div>page</div>;
}
