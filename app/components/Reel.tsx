"use client";
import React from "react";
import { BiChat } from "react-icons/bi";
import { FaThumbsUp } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";

function Reel() {
  return (
    <div className="snap-start h-[calc(100vh-70px)]  flex items-center justify-center">
      <div className="shadow-sm rounded-md overflow-hidden w-77 bg-white h-135 relative">
       <video src="/2.mp4" autoPlay  loop className="h-full  w-full"></video>
      </div>
      <div className=' h-full py-10 px-2 flex flex-col justify-end gap-4'>
       
        <button className="w-10 h-10 border-none outline-none flex items-center justify-center rounded-full bg-pink-700 hover:bg-pink-400 cursor-pointer">
          <HiHeart />
        </button>
         <button className="w-10 h-10 border-none outline-none flex items-center justify-center rounded-full bg-blue-800 hover:bg-blue-600 cursor-pointer">
          <FaThumbsUp />
        </button>
         <button className="w-10 h-10 border-none outline-none flex items-center justify-center rounded-full bg-orange-600 hover:bg-orange-400 cursor-pointer">
          <BiChat />
        </button>
    </div>
    </div>
  );
}

export default Reel;
