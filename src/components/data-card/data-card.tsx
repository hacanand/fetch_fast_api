'use client'
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import ThumbnailCard from "./thumbnail-card";
import { Props, VideoPost } from "@/lib/types";
 

export const DataCard = ({ posts }: Props) => {
  const [value, setValue] = useState<string>(""); // State to store the input value
  const [filteredData, setFilteredData] = useState<any[]>([]); // State to store the filtered data

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const timer = setTimeout(() => {
      setValue(e.target.value); // Set the input value after 500ms of user input
    }, 500);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    // Filter the posts based on the input value
    const filteredData = posts?.filter((post:any) => {
      return (
        post.video.title.toLowerCase().includes(value.toLowerCase()) ||
        post.video.channelName.toLowerCase().includes(value.toLowerCase())
      );
    });
    setFilteredData(filteredData); // Update the filtered data
  }, [value]);

  return (
    <div className="flex flex-col justify-center items-center  flex-wrap gap-4">
      <Input onChange={handleChange} /> {/* Input component for user input */}
      <div className="self-center text-foreground text-3xl font-bold ">
        Card
      </div>
      <div className=" gap-4 flex flex-wrap justify-center">
        {filteredData?.length>0?filteredData?.map((post: VideoPost) => (
          <ThumbnailCard key={post.video.videoId} post={post.video} /> /* Render ThumbnailCard component for each filtered post */
        )) :<div className="text-red-500"> No data found</div>}
      </div>
    </div>
  );
};
