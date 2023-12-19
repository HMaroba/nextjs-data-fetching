"use client";
import useSWR from "swr";
import { BarChart, Bar } from "recharts";

// Define the fetcher function
const fetcher = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};
export interface IUser {
  name: string;
  phone: string;
}
export default function Home() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  // Handle loading state
  if (!data && !error)
    return (
      <div>
        <div className="flex h-screen items-center justify-center text-2xl text-blue-700">
          <p>Loading...</p>
        </div>
      </div>
    );

  // Handle error state
  if (error) return <div>Failed to load</div>;

  return (
    <div>
      <div className="p-10">
        <h3 className="text-3xl p-2 text-blue-500">Home Page</h3>
        <div className="p-2 mt-4 w-full bg-gray-200 rounded-md min-h-48">
          <h3 className="font-bold text-lg">Users list</h3>
          <div className="mt-4">
            {data.map((user: IUser, index: number) => (
              <div key={index}>
                <p>{user.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
