import React from "react";
import { fetchData } from "@/lib/fetchdata";
import { DataCard } from "./data-card";

// This component fetches data from an API and renders a DataCard component with the fetched data
const InputField = async () => {
  const posts = await fetchData();
  // fetchData is a function that fetches data from an API in server side

  return <DataCard posts={posts} />;
};

export default InputField;
