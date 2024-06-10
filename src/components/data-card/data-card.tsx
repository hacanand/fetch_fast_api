'use client'
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import ThumbnailCard from "./thumbnail-card";
 
 
type VideoPost = {
  video: Post
  }

type Post = {
  videoId: string;
  title: string;
  channelName: string;
  viewCountText: string;
  publishedTimeText: string;
  thumbnails: {
    url: string;
    width: number;
    height: number;
  }[];
  lengthText: string;
};
type Props = {
  posts: Post[];
};

export const DataCard = ({ posts }: Props) => {
  const [value, setValue] = useState<string>("");
  const [filteredData, setFilteredData] = useState<any[]>([]);
  //use debouncing here and set value
  //set search query to value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //debouncing here to set value after 500ms of user input
    const timer = setTimeout(() => {
      setValue(e.target.value);
    }, 500);
    return () => clearTimeout(timer);
  };
  useEffect(() => {
    const filteredData = posts.filter((post:any) => {
      return (
        post.video.title.toLowerCase().includes(value.toLowerCase()) ||
        post.video.channelName.toLowerCase().includes(value.toLowerCase())
      );
    });
    setFilteredData(filteredData);
  }, [value]);

  //console.log(filteredData);
  return (
    <div className="flex flex-col justify-center items-center  flex-wrap gap-4">
      <Input onChange={handleChange} />
      <div className="self-center text-foreground text-3xl font-bold ">
        Card
      </div>
      <div className=" gap-4 flex flex-wrap justify-center">
        {filteredData.map((post: VideoPost) => (
          <ThumbnailCard key={post.video.videoId} post={post.video} />
        ))}
      </div>
    </div>
  );
};
 
