import React from "react";
import logo from "../assets/Images/logo.svg";
import globe from "../assets/Images/globe.png";
import arrow from "../assets/Images/arrow.png";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const NavLink = () => {
  return (
    <div className="h-[16vh]">
      <div className="px-[40vh] h-[8vh] w-full">
        <div className="flex h-full justify-between items-center font-inter">
          <div className="left flex gap-9 justify-center items-center">
            <img src={logo} alt="" srcset="" />
            <button>Investors</button>
            <button>Businesses</button>
            <input
              className="align-middle font-medium  bg-zinc-300 pl-5 py-2 rounded-full"
              type="text"
              placeholder="Search here "
            />
          </div>
          <div className="right flex justify-center gap-[1.6rem] items-center">
            <h1 className="flex align-middle">
              <img src={globe} alt="" />
              US
            </h1>
            <button>Log in</button>
            <button>Sign up</button>
          </div>
        </div>
        <div className="border-b border-zinc-400"></div>
        <div className="flex h-[8vh] gap-2 items-center text-lg font-inter">
          <div className="">
            <h1 className="flex h-full text-zinc-500">
              For Companies <img className="" src={arrow} alt="" srcset="" />{" "}
            </h1>
          </div>
          <div className="font-semibold items-center flex gap-3">
            <button className="text-black">Raise Funds</button>
            <span>|</span>
            <button className="text-black">Rag A+</button>
            <span>|</span>
            <button className="text-black">Learn more</button>
            <span>|</span>
            <button className="text-blue-600 border-b-2 py-3 border-blue-600">
              Instruments
            </button>
            <span>|</span>
            <button className="text-black">FAQ</button>
          </div>
        </div>
        <div className="border-b border-zinc-400"></div>
      </div>
    </div>
  );
};

export default NavLink;
