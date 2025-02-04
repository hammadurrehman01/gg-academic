import React from "react";
import Code from "./Code";
import dynamic from "next/dynamic";

export default function page(params: any) {
  const slug = params.params.var;
  return <Code slug={slug} />;
}


