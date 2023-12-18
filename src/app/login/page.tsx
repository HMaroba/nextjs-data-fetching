import React from "react";
import Input from "../_components/formFields/input";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div>
      <div className="w-full min-h-screen bg-gray-100">
        <div className="flex-none lg:flex w-full p-10 lg:p-20">
          <div className="bg-blue-500 text-white  min-h-48 lg:min-h-screen w-full">
            <p className="p-6 text-3xl">Login Here</p>
            <div className="space-y-2 w-full p-10">
              <Input
                labelName="Username"
                placeholder="Enter username"
                type="text"
              />
              <Input
                labelName="Password"
                placeholder="Password"
                type="password"
              />
              <div className="p-10">
                <button className="bg-white text-blue-600 p-2 w-full rounded-lg font-semibold">
                  Sign in
                </button>
              </div>
              <div className="mt-2 text-center">
                <p>
                  Forgot Password ?{" "}
                  <span>
                    <Link href={"#"}>reset here</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 text-blue min-h-48 lg:min-h-screen w-full">
            <p className="p-6 text-3xl">Create Account Here</p>
            <div className="space-y-2 w-full p-10">
              <div className="flex-none lg:flex w-full space-x-0 lg:space-x-2">
                <Input
                  labelName="Full Names"
                  placeholder="John Doe"
                  type="text"
                />
                <Input
                  labelName="Phone number"
                  placeholder="+266 78901234"
                  type="number"
                />
              </div>
              <Input
                labelName="Email address"
                placeholder="Enter email address"
                type="email"
              />
              <Input
                labelName="Username"
                placeholder="Enter username"
                type="text"
              />
              <Input
                labelName="Password"
                placeholder="Password"
                type="password"
              />
              <div className="p-10">
                <button className="bg-blue-500 text-white p-2 w-full rounded-lg font-semibold">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
