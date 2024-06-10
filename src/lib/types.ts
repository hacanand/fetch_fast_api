export type VideoPost = {
  video: Post;
};

export type Post = {
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
export type Prop = {
    post: Post;
}
export type Props = {
  posts: Post[];
};
