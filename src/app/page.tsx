"use client";
import useSWR from "swr";

// Define the fetcher function
const fetcher = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

export default function Home() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  console.log(data);

  // Handle loading state
  if (!data && !error) return <div>Loading...</div>;

  // Handle error state
  if (error) return <div>Failed to load</div>;

  return (
    <div>
      <h3>Home Page</h3>
    </div>
  );
}
