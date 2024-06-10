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
        {/* Card Header */}
        <CardHeader>
          <div className="relative">
            {/* Display the thumbnail image */}
            <Image
              src={post.thumbnails[2].url}
              loading="lazy"
              alt="Placeholder"
              width={post.thumbnails[2].width}
              height={post.thumbnails[2].height}
              className="rounded-lg"
            />
            {/* Display the length of the post */}
            <h1 className=" font-semibold absolute right-2 bottom-1">
              {post.lengthText}
            </h1>
          </div>
          {/* Display the title of the post */}
          <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
          {/* Display the channel name */}
          <CardDescription>{post.channelName}</CardDescription>
        </CardHeader>
        {/* Card Footer */}
        <CardFooter>
          {/* Display the view count and published time */}
          <p>
            {post.viewCountText} . {post.publishedTimeText}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ThumbnailCard;
