import React from "react";
import { fetchData } from "@/lib/fetchdata";
import { DataCard } from "./data-card";

const InputField = async () => {
  const posts = await fetchData();
  //fetchData is a function that fetches data from an API in server side

  return <DataCard posts={posts} />;
};

export default InputField;
