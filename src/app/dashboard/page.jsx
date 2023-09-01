"use client";
import React, { PureComponent } from "react";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoMdPaper } from "react-icons/io";
import { BsJournalBookmarkFill,BsLinkedin } from "react-icons/bs";
import { FaAward, FaInstagramSquare, FaTwitterSquare, } from "react-icons/fa";
import { BiLogoFacebookSquare } from "react-icons/bi";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { AiOutlineRight } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import CountUp from "react-countup";

const dashboardPage = () => {
  const data = [
    {
      name: "Male",
      pv: 120,
      amt: 240,
    },
    {
      name: "Female",
      pv: 102,
      amt: 240,
    },
  ];
  return (
    <div className="lg:w-3/4 w-11/12 mx-auto pt-32">
      {/* Create your Component */}
      <p className="text-4xl font-semibold">Admin Dashboard</p>

      <div className="flex items-center gap-2 mt-4">
        <h1 className="text-2xl">Home</h1>
        <AiOutlineRight size="1.5em" color="#0083db" className="font-bold" />
        <h1 className="text-2xl font-semibold text-[#0083db]">Admin</h1>
      </div>

      {/* Mini Card Component Here*/}
      <div className="grid grid-cols-4 gap-3 mt-12 mb-7">
        <div className="card w-auto bg-base-100 shadow-xl">
          <div className="card-body flex-row items-center justify-evenly">
            <div className="avatar placeholder">
              <div className="bg-[#D1F3E0] text-neutral-content rounded-full w-24">
                <HiOutlineUserGroup size="3.5em" color="#3CB878" />
              </div>
            </div>
            <div className="flex flex-col space-y-3 justify-center">
              <p className="text-2xl font-bold text-gray-500">User</p>
              <div className="flex items-center">
                <CountUp
                  delay={2}
                  end={1000}
                  className="text-black text-2xl font-semibold"
                />
                <span className="text-2xl font-semibold">+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl">
          <div className="card-body flex-row items-center justify-evenly">
            <div className="avatar placeholder">
              <div className="bg-[#E1F1FF] text-neutral-content rounded-full w-24">
                <IoMdPaper size="3.5em" color="#3F7AFC" />
              </div>
            </div>
            <div className="flex flex-col space-y-3 justify-center">
              <p className="text-2xl font-bold text-gray-500">Blogs</p>
              <div className="flex items-center">
                <CountUp
                  delay={2}
                  end={100}
                  className="text-black text-2xl font-semibold"
                />
                <span className="text-2xl font-semibold">+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl">
          <div className="card-body flex-row items-center justify-evenly">
            <div className="avatar placeholder">
              <div className="bg-[#FFF2D8] text-neutral-content rounded-full w-24">
                <FaAward size="3.5em" color="#FFAE27" />
              </div>
            </div>
            <div className="flex flex-col space-y-3 justify-center">
              <p className="text-2xl font-bold text-gray-500">Award</p>
              <div className="flex items-center">
                <CountUp
                  delay={2}
                  end={700}
                  className="text-black text-2xl font-semibold"
                />
                <span className="text-2xl font-semibold">+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl">
          <div className="card-body flex-row items-center justify-evenly">
            <div className="avatar placeholder">
              <div className="bg-[#FFEAEA] text-neutral-content rounded-full w-24">
                <BsJournalBookmarkFill size="3.5em" color="#FF0000" />
              </div>
            </div>
            <div className="flex flex-col space-y-3 justify-center">
              <p className="text-2xl font-bold text-gray-500">Courses</p>
              <div className="flex items-center">
                <CountUp
                  delay={2}
                  end={300}
                  className="text-black text-2xl font-semibold"
                />
                <span className="text-2xl font-semibold">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event-calender and website traffic Component Here */}
      <div className="grid grid-cols-2 gap-3 mb-7">
        <div className="card w-auto bg-base-100 shadow-2xl">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-base-100 shadow-2xl">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* total male and female + exrta one Component Here */}
      <div>
        <h3 className="text-3xl font-semibold mb-4">Male-Female Graph</h3>
        <div style={{ width: "400px", height: "500px" }}>
          <ResponsiveContainer>
            <BarChart
              data={data}
              margin={{
                top: 15,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#0083db" />
              {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* All user Detail/table Component Here */}
      <div className="grid grid-cols-1 gap-3 mb-7">
        <div className="card w-auto bg-base-100 shadow-2xl">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Social Component Here */}
      <div className="grid grid-cols-4 gap-3 mb-10">
        <div className="card w-auto bg-[#1877F2] shadow-2xl">
          <div className="card-body flex-row items-center justify-between">
            <div className="text-white">
              <h1 className="text-lg">Follow on facebook</h1>
              <div className="flex items-center">
                <CountUp
                  delay={2}
                  end={1000}
                  className="text-3xl font-semibold"
                />
                <span className="text-2xl font-bold">+</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="avatar placeholder p-1 bg-white rounded-xl">
                <div className="text-neutral-content rounded-xl w-20">
                  <BiLogoFacebookSquare size="3.5em" color="#1877F2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-[#1D9BF0] shadow-2xl">
          <div className="card-body flex-row items-center justify-between">
            <div className="text-white">
              <h1 className="text-lg">Follow on twitter</h1>
              <div className="flex items-center">
                <CountUp
                  delay={2}
                  end={500}
                  className="text-3xl font-semibold"
                />
                <span className="text-2xl font-bold">+</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="avatar placeholder p-1 bg-white rounded-xl">
                <div className="text-neutral-content rounded-xl w-20">
                  <FaTwitterSquare size="3.5em" color="#1D9BF0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-[#FE643B] shadow-2xl">
          <div className="card-body flex-row items-center justify-between">
            <div className="text-white">
              <h1 className="text-lg">Follow on instagram</h1>
              <div className="flex items-center">
                <CountUp
                  delay={2}
                  end={800}
                  className="text-3xl font-semibold"
                />
                <span className="text-2xl font-bold">+</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="avatar placeholder p-1 bg-white rounded-xl">
                <div className="text-neutral-content rounded-xl w-20">
                  <FaInstagramSquare size="3.5em" color="#FE643B" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-[#0A66C2] shadow-2xl">
          <div className="card-body flex-row items-center justify-between">
            <div className="text-white">
              <h1 className="text-lg">Follow on linkedin</h1>
              <div className="flex items-center">
                <CountUp
                  delay={2}
                  end={900}
                  className="text-3xl font-semibold"
                />
                <span className="text-2xl font-bold">+</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="avatar placeholder p-1 bg-white rounded-xl">
                <div className="text-neutral-content rounded-xl w-20">
                  <BsLinkedin size="3.5em" color="#0A66C2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default dashboardPage;
