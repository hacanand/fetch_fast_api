import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
 
import Image from "next/image";
import { Prop } from "@/lib/types";
 
const ThumbnailCard = ({ post }: Prop) => {
  return (
    <div className="w-[336px] max-sm:w-[300px]">
      <Card>
        <CardHeader>
          <div className="relative">
            <Image
              src={post.thumbnails[2].url}
              loading="lazy"
              alt="Placeholder"
              width={post.thumbnails[2].width}
              height={post.thumbnails[2].height}
              className="rounded-lg"
            />
            <h1 className=" font-semibold absolute right-2 bottom-1">
              {post.lengthText}
            </h1>
          </div>
          <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
          <CardDescription>{post.channelName}</CardDescription>
        </CardHeader>
        <CardFooter>
          <p>
            {post.viewCountText} . {post.publishedTimeText}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ThumbnailCard;
