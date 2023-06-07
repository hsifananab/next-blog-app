"use client";
import { getAllPosts } from "@/services/getPosts";
import Link from "next/link";
import useSWR from "swr";
// import { usePosts } from "@/store";
// import { useEffect } from "react";
// import { shallow } from "zustand/shallow";

const Posts = () => {
  const { data, isLoading } = useSWR("posts", getAllPosts);
  // const [posts, loading, getAllPosts] = usePosts(
  //   (state) => [state.posts, state.loading, state.getAllPosts],
  //   shallow
  // );

  // useEffect(() => {
  //   getAllPosts();
  // }, [getAllPosts]);

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <ul>
      {data.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
