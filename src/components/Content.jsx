import React from "react";
import case1 from "../assets/Images/case1.svg";
import case2 from "../assets/Images/case2.svg";
import case3 from "../assets/Images/case3.svg";
import case4 from "../assets/Images/case4.svg";
import comp from '../assets/Images/Companies.png';


const Content = () => {
  return (
    <div className="px-[40vh] h-[130vh] w-full">
      <div className="">
        <h1 className="font-Britannic_Bold text-7xl pt-14 font-extrabold tracking-tighter">
          Fundraising instruments
        </h1>
      </div>
      <div className="mt-7 text-2xl text-zinc-500 font-inter">
        <h1>
          Republic offers a selection of flexible instruments <br />
          to fit your company's fundraising goals
        </h1>
      </div>
      <div className="cards flex gap-10 mt-14">
        <div className="card1 w-[39vh] h-[25vh] border border-zinc-400 rounded-lg">
          <div className="data pt-6 pl-8 pr-5">
            <div className="top flex gap-5">
              <div className="left flex items-center">
                <img className="scale-[1.2]" src={case1} alt="" />
              </div>
              <div className="right flex justify-center flex-col leading-3">
                <h1 className="text-base -mt-1 text-zinc-500">Equity</h1>
                <h1 className="text-2xl -mt-1 font-black tracking-tighter">
                  Crowd SAFE
                </h1>
              </div>
            </div>
            <div className="bottom mt-7 text-zinc-700 text-lg font-normal">
              <h1 className="">
                Our founder-friendly investment agreement, designed specifically
                for crowdfunding.
                <button className="text-blue-600 font-semibold ml-2">
                  {" "}
                  Learn more
                </button>
              </h1>
            </div>
          </div>
        </div>
        <div className="card2 w-[39vh] h-[25vh] border border-zinc-400 rounded-lg">
          <div className="data pt-6 pl-8 pr-5">
            <div className="top flex gap-5">
              <div className="left flex items-center">
                <img className="scale-[1.2]" src={case2} alt="" />
              </div>
              <div className="right flex justify-center flex-col leading-3">
                <h1 className="text-base -mt-1 text-zinc-500">Equity</h1>
                <h1 className="text-2xl -mt-1 font-black tracking-tighter">
                  SAFE
                </h1>
              </div>
            </div>
            <div className="bottom mt-7 text-zinc-700 text-lg font-normal">
              <h1 className="">
                A simple agreement for future equity.
                <button className="text-blue-600 font-semibold ">
                  {" "}
                  Learn more
                </button>
              </h1>
            </div>
          </div>
        </div>
        <div className="card3 w-[39vh] h-[25vh] border border-zinc-400 rounded-lg">
          <div className="data pt-6 pl-8 pr-5">
            <div className="top flex gap-5">
              <div className="left flex items-center">
                <img className="scale-[1.2]" src={case3} alt="" />
              </div>
              <div className="right flex justify-center flex-col leading-3">
                <h1 className="text-base -mt-1 text-zinc-500">Debt</h1>
                <h1 className="text-2xl -mt-1 font-black tracking-tighter">
                  Crowd SDA
                </h1>
              </div>
            </div>
            <div className="bottom mt-7 text-zinc-700 text-lg font-normal">
              <h1 className="">
                A simple way to raise debt capital from the crowd.
                <button className="text-blue-600 font-semibold ml-2">
                  {" "}
                  Learn more
                </button>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="cards flex gap-10 mt-14">
        <div className="card4 w-[39vh] h-[25vh] border border-zinc-400 rounded-lg">
          <div className="data pt-6 pl-8 pr-5">
            <div className="top flex gap-5">
              <div className="left flex items-center">
                <img className="scale-[1.2]" src={case4} alt="" />
              </div>
              <div className="right flex justify-center flex-col leading-3">
                <h1 className="text-base -mt-1 text-zinc-500">Crypto</h1>
                <h1 className="text-2xl -mt-1 font-black tracking-tighter">
                  Token DPA
                </h1>
              </div>
            </div>
            <div className="bottom mt-7 text-zinc-700 text-lg font-normal">
              <h1 className="">
                Fund you company's growthin debt securities, repayable in Tokens. 
                <button className="text-blue-600 font-semibold">
                  {" "}
                  Learn more
                </button>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="info font-inter text-zinc-500 mt-[6vw] flex flex-col justify-center items-center">
        <h1 className="text-2xl flex justify-center align-middle items-center">Not sure yet? Our team will help you pick the <br />
        </h1>
        <h1 className="text-2xl">instrument that’s best for you.</h1>
        <button className="mt-10 bg-blue-700 px-24 text-xl font-semibold py-4 rounded-xl text-white">Apply To Raise</button>
        <h1 className="text-sm mt-8">We are part of a family of trusted startup platforms</h1>
        <img className="mt-3" src={comp} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Content;
