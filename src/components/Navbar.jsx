import React from "react";
import myImage1 from "../assets/Images/1.webp";
import myImage2 from "../assets/Images/close.png";


const Navbar = () => {
  return (
    <div className="main w-full">
      <div className="offer font-inter h-[3vw] text-lg">
        <div className="w-full h-full bg-zinc-300">
          <div className="content h-full flex justify-between items-center px-[1vw]">
            <div className="flex justify-center items-center">
              <h1 className="font-medium"> <span className="">🔥 </span>Deals closing soon!</h1>
            </div>
            <div>
              <h1 className="flex gap-1 justify-center items-center">
                <span className="font-semibold">10h 10m 10s </span>
                left to invest in
                <span>
                  <img className="scale-[0.8]" src={myImage1} alt="" srcset="" />
                </span>
                <button className="border border-zinc-400 px-2 py-2 rounded-lg text-base font-bold">Studio Pod</button>
              </h1>
            </div>
            <div className="flex gap-3 justify-center items-center">
                <button className="border border-zinc-400 px-8 text-base font-bold py-2 rounded-lg">View Studio Pod</button>
                <button className="scale-[0.8]"><img src={myImage2} alt="" srcset="" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
