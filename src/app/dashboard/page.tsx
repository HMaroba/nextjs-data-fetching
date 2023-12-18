"use client";

import React, { useState } from "react";

import useSWR from "swr";
import { IUser } from "../page";

// Define the fetcher function
const fetcher = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

export default function Dashboard() {
  const [showposts, setShowPosts] = useState(false);
  const [showmoreposts, setShowMorePosts] = useState(false);

  // Use the useSWR hook to fetch user data
  const { data: userData, error: userError } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  // Use the useSWR hook to fetch posts data
  const { data: postsData, error: postsError } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  // Handle loading state
  if ((!userData && !userError) || (!postsData && !postsError))
    return (
      <div>
        <div className="flex h-screen items-center justify-center text-2xl text-blue-700">
          <p>Loading...</p>
        </div>
      </div>
    );

  // Handle error state
  if (userError || postsError) return <div>Failed to load</div>;

  const handleShowData = () => {
    setShowPosts(!showposts);
  };

  const handleShowMoreData = () => {
    setShowMorePosts(!showmoreposts);
  };

  return (
    <div>
      <div className="p-10">
        <div className="bg-blue-400 text-white min-h-48">
          <p className="text-2xl font-semibold p-2">Users and Posts Data</p>

          <div className="mt-4 p-6">
            <div>
              <label>Username</label>
              <input
                className="w-full mb-3 border-2 p-1 rounded-md text-black focus:border-blue-500"
                type="text"
                placeholder="Search user by username"
              />
            </div>
            {userData.map((user: IUser, index: number) => (
              <div key={index}>
                <p>{user.name}</p>
              </div>
            ))}
          </div>

          <div className="p-6">
            <button
              className="mt-4 bg-white text-blue-500 rounded-md p-1"
              onClick={handleShowData}
            >
              {showposts ? "Hide Data" : "Show Data"}
            </button>
          </div>

          {showposts && (
            <>
              <div className="mt-4 p-6">
                {postsData.map((post: any, index: number) => (
                  <div key={index}>
                    <p>{post.title}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
