import React from "react";
import Input from "../_components/formFields/input";

const LoginPage = () => {
  return (
    <div>
      <div className="w-full min-h-screen bg-gray-100">
        <div className="flex w-full p-20">
          <div className="bg-blue-500 text-white h- w-full">
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
            </div>
          </div>
          <div className="bg-gray-300 text-blue h-screen w-full">
            <p className="p-6 text-3xl">Create Account Here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
