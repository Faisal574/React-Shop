import React from "react";

const Skeleton = () => {
  return (
    <div className="flex-grow animate-pulse">
      <div className="bg-gray-300 h-[400px] overflow-hidden">
        <div className="bg-gray-200 rounded-full my-5 mx-auto w-[250px] h-[250px] mb-8"></div>
        <div className="bg-gray-200 w-full h-[250px]"></div>
      </div>
      <div className="bg-white h-[auto] shadow-gray-300 p-5">
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <div className="bg-gray-200 h-4 w-1/2"></div>
            <div className="bg-gray-200 h-4 w-12"></div>
          </div>
          <div className="bg-gray-200 h-6 w-3/4 mt-2"></div>
          <div className="pt-3 flex gap-2">
            <div className="bg-gray-200 h-6 w-1/4"></div>
            <div className="bg-gray-200 h-6 w-1/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
