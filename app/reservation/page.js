"use client";

import { useState } from "react";
import Section from "../components/Section";
import Footer from "../components/Footer";
export default function Reservation() {
    return (
        <div className="bg-white">
          <div>
            <Section title="Online Reservation" title1="reservation" /></div>
        <div className="bg-gray-100  flex flex-col md:flex-row justify-center items-start py-12 px-6 md:px-20 md:mt-[200px]">
      <div className="w-full md:w-1/2  flex justify-center mt-[200px] ">
        <iframe width="652" height="506" src="https://www.youtube.com/embed/F3zw1Gvn4Mk" title="Mr Fox Restaurant Promo Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          alt="Restaurant"
          className="h-[400px] w-full object-cover rounded-lg"
        </iframe>
      </div>
      
<div className="md:w-1/2 relative w-full mt-10 md:mt-[-40px] md:ml-[-20px] bg-white p-8">
        <h2 className="text-4xl font-bold mb-8 md:mt-[50px] ml-[60px]">Book A Table</h2>
        <div className="space-y-6 ml-[60px] h-[500px]">

 
  <p className="text-sm font-light ">Phone</p>

  <input
    type="text"
    placeholder="+473378901"
    className="border
     border-gray-400 rounded-lg px-4 py-2 mb-4 w-[80%] "
  />
  <p className="text-sm font-light ">Person</p>
  <input
    type="number"
    placeholder="3 person"
    className="border border-gray-400 rounded-lg px-4 py-2 mb-4 w-[80%] "
  />
<p className="text-sm font-light ">Date</p>
  <input
    type="date"
    className="border border-gray-400 rounded-lg px-4 py-2 mb-6 w-[80%] "
  />
  <p className="text-sm font-light ">Time</p>
  <input
    type="time"
    className="border border-gray-400 rounded-lg px-4 py-2 mb-6 w-[80%] "
  />

  <button className="bg-orange-900 text-white px-6 py-2 rounded-[10px] hover:bg-black transition">
    Book A Table
  </button>
</div>
       {/* <div className="md:w-1/2 mt-10 md:mt-0 md:ml-10">
        <h1 className="text-4xl font-bold mb-8">Book A Table</h1>
        <form className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold">Phone</label>
            <input
              type="text"
              placeholder="+4733378901"
              className="border w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Person</label>
            <select className="border w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400">
              <option>1 Person</option>
              <option>2 Person</option>
              <option>3 Person</option>
              <option>4 Person</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">Date</label>
            <input
              type="date"
              className="border w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Time</label>
            <input
              type="time"
              className="border w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <button
            type="submit"
            className="bg-[#8B6E4E] text-white px-6 py-3 rounded-md hover:bg-[#6e543c] transition"
          >
            Book Now
          </button>
        </form>
      </div> */}
      </div>
      </div>
    
    <Footer />
    </div>
   
    )
}
