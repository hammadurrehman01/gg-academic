import React from "react";

import { redirect } from "next/navigation";
export default function page() {
  redirect("/usa");
  return <div>page</div>;
}
