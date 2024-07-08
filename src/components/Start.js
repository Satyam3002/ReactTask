import React from 'react';

export default function Start() {
  return (
    <div className="bg-lightblue min-h-screen flex flex-col justify-between mb-14">
      <div className="flex flex-col items-start justify-center flex-grow mt-24 lg:ml-32 px-4 lg:px-0">
        <div className="flex items-center font-poppins font-semibold gap-2 text-2xl lg:text-3xl italic">
          <span>Your</span>
          <span className="text-customPurple">Hobby</span>
          <span>Your</span>
          <span className="text-customBlue">Community</span>
        </div>
        <div className="mt-4 lg:mt-12 lg:ml-4">
          <button className="bg-customPurple text-white font-semibold mt-6 px-4 py-2 rounded-md border-2 border-customPurple lg:w-32">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex flex-row lg:flex-row justify-start items-center space-x-12 lg:ml-24 mt-6 mb-6 space-y-3 lg:space-y-0 lg:space-x-28 px-4 lg:px-8">
        <img src="cm1.png" alt="Community 1" className="w-72 h-72 lg:w-5/12 h-auto" />
        <img src="cm2.png" alt="Community 2" className="w-80 h-72 lg:w-6/12 h-auto ml-0 lg:ml-3" />
      </div>
    </div>
  );
}
