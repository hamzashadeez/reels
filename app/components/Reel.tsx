"use client";
import React from "react";

function Reel() {
  return (
    <div className="snap-start h-[calc(100vh-70px)]  flex items-center justify-center">
      <div className="shadow-sm rounded-md overflow-hidden w-77 bg-white h-135 relative">
       <video src="/2.mp4" autoPlay  loop className="h-full  w-full"></video>
      </div>
      <div className=' h-full py-10 px-2 flex flex-col justify-end gap-4'>
        <h1>1</h1>
        <h1>2</h1>
        <h1>1</h1>
        <h1>2</h1>
    </div>
    </div>
  );
}

export default Reel;
