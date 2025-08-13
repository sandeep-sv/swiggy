import React from "react";
import Nav from "../nav";

const MenuShimmer1 = () => {
  return (
    <div>
      <div className="w-[50%] m-auto mt-5 animate-pulse flex flex-col gap-4">
        <div className="h-36 bg-gray-300 rounded-lg"></div>
        <div className="h-24 bg-gray-300 rounded"></div>
        <div className="h-24 bg-gray-300 rounded"></div>
        <div className="h-24 bg-gray-300 rounded"></div>
        <div className="h-24 bg-gray-300 rounded"></div>
        <div className="h-24 bg-gray-300 rounded"></div>
        <div className="h-40 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default MenuShimmer1;
