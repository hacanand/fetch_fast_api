import React from "react";
import { fetchData } from "@/lib/fetchdata";
import { DataCard } from "./data-card";

type Props = {};

const InputField = async () => {
  const posts = await fetchData();
  // console.log(posts);
  return (
    <div>
      <DataCard posts={posts} />
    </div>
  );
};

export default InputField;
