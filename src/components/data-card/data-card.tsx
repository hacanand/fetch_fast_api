'use client'
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
type Post = {
  userId: number
  id: number
  title: string
  body: string
 
};
type Props = {
  posts: Post[]
};
export const DataCard = ({ posts }: Props) => {

  const [value, setValue] = useState<string>("");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  //use debouncing here and set value
  //set search query to value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const timer = setTimeout(() => {
      setValue(e.target.value);
    }, 500);
    return () => clearTimeout(timer);
  };
  //console.log(value);
  //console.log(posts);
  console.log(posts)
  // useEffect(() => {
  //   const filteredPosts = posts.filter((post) => {
  //   return post.title.toLowerCase().includes(value.toLowerCase())||post.body.toLowerCase().includes(value.toLowerCase());
  //   });
  //   setFilteredPosts(filteredPosts);
  // }, [value]);

  //console.log(filteredPosts);
  return (
    <div className="">
      <Input onChange={handleChange} />
      <h1>My Blog</h1>
      <ul className="">
         
      </ul>
    </div>
  );
};
 
