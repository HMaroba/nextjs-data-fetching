"use client";

import React from "react";

import useSWR from "swr";

// Define the fetcher function
const fetcher = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

export default function Dashboard() {
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
  return (
    <div>
      <div className="p-10">
        <div className="bg-blue-400 text-white min-h-48">
          <p className="text-2xl font-semibold p-2">Users and Posts Data</p>
        </div>
      </div>
    </div>
  );
}
