import React from "react";

import { redirect } from "next/navigation";
export default function page() {
  redirect("/me");
  return <div>page</div>;
}
