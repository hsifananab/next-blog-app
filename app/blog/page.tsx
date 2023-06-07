import PostSearch from "@/components/PostSearch";
import Posts from "@/components/Posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Next App",
};

const Blog = () => {
  return (
    <>
      <h1>Blog</h1>
      <PostSearch />
      <Posts />
    </>
  );
};

export default Blog;
