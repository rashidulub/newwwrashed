"use client";
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AiOutlineRight } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";

const dashboardPage = () => {
  const data = [
    {
      name: 'Male',
      pv: 120,
      amt: 240,
    },
    {
      name: 'Female',
      pv: 102,
      amt: 240,
    }
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
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
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

      {/* Social Component Here */}
      <div className="grid grid-cols-4 gap-3 mb-7">
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
        <div style={{ width: '400px', height: '500px' }}>
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
    </div>
  );
};

export default dashboardPage;
