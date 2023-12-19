"use client";
import useSWR from "swr";
import ApexCharts from "apexcharts";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

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

  if (data) {
    // Extract user names and phone numbers for chart
    const chartData = data.map((user: IUser) => ({
      x: user.name,
      y: parseInt(user.phone.replace(/\D/g, ""), 10),
    }));

    // Set up chart options
    const chartOptions = {
      chart: {
        type: "bar",
        height: 350,
      },
      xaxis: {
        categories: chartData.map((item: any) => item.x),
      },
    };
  }

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
