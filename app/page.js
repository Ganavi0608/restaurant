"use client"; 

import { useRouter } from "next/navigation";


import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import FoodCard from "./components/FoodCard";
import Button from "./components/Button";
import Footer from "./components/Footer";
import BlogSection from "./components/BlogSection";
import Popular from "./components/Popular";
import Combo from "./components/Combo";
import Promo from "./components/Promo";


export default function Home() {
   const router = useRouter();
  const food = [
    {
      name: "Hamburger",
      desc: "The hamburger is the original and the best-known burger to date",
      foodImg:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F9.png&w=640&q=75",
      Foodratings:
        "https://static.vecteezy.com/system/resources/previews/013/743/771/non_2x/five-stars-rating-icon-png.png",
    },
    {
      name: "Chicken Burger",
      desc: "Crispy, juicy chicken patty with special sauce and lettuce.",
      foodImg:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F10.png&w=640&q=75",
      Foodratings:
        "https://static.vecteezy.com/system/resources/previews/013/743/771/non_2x/five-stars-rating-icon-png.png",
    },
    {
      name: "Cheese Burger",
      desc: "Loaded with melted cheese and fresh ingredients.",
      foodImg:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F11.png&w=640&q=75",
      Foodratings:
        "https://static.vecteezy.com/system/resources/previews/013/743/771/non_2x/five-stars-rating-icon-png.png",
    },
    {
      name: "Bacon Burger",
      desc: "Savory bacon layered over juicy grilled beef.",
      foodImg:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F12.png&w=640&q=75",
      Foodratings:
        "https://static.vecteezy.com/system/resources/previews/013/743/771/non_2x/five-stars-rating-icon-png.png",
    },
  ];

  return (
    <div className="w-full min-h-screen dark:bg-zinc-900 bg-zinc-50">
      <Hero />
     

      <AboutUs />
  <div>
      <div className = "w-full min-h-screen dark:bg-zinc-800 bg-zinc-100">
        <div className="flex flex-col justify-center items-center" >
          <div className ="text-red-700 mt-[55px]">~-------OUR SPECIAL-------~</div>
          <div className ="text-black dark:text-white text-4xl font-bold">Popular Burger</div>
        <div className="flex md:flex-row flex-col  justify-around items-center mt-[30px]  gap-7 p-4">
      {food.map((item, index) => (
        <div key={index}>
          <FoodCard
            name={item.name}
            desc={item.desc}
            Foodratings={item.Foodratings}
            foodImg={item.foodImg}
          />
              </div>
      )
      )}
      </div>
      </div>
  



<div className ="flex flex-row w-full md:h-[500px] min-h-screen justify-around items-center  bg-gray-900 ">
      <div className ="flex md:flex-row flex-col justify-around items-center gap-10 mx-[22px]">
        <div className="relative w-[600px] h-[350px]  overflow-hidden ">
          <img className ="rounded-2xl object-cover hidden md:block" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fdeal%2F1.jpg&w=828&q=75"/>
          <div className="absolute inset-0 flex flex-col  text-white bg-opacity-40">
            <div className="text-xl flex flex-col w-[300px] h-[205px] font-thin mt-[50px] ml-[70px]">Eat Sleep And
            <div className="text-5xl text-white font-bold mb-[30px]">DREAM BURGER</div>
            <Button></Button>
            </div>
          </div>
          </div>
<div className="relative w-[600px] h-[350px]  overflow-hidden ">
          <img className ="rounded-2xl object-cover hidden md:block" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fdeal%2F2.jpg&w=828&q=75"/>
          <div className="absolute inset-0 flex flex-col  text-white bg-opacity-40">
            <div className="text-xl flex flex-col w-[300px] h-[205px] font-thin mt-[50px] md:ml-[340px] ml-[60px]">Best Deal Ever
            <div className="text-5xl text-white font-bold mb-[30px]">LUGAR BURGER</div>
            <Button></Button>
            </div>
          </div>    
          </div>
      </div>
    </div>
</div>
         
   
       
      
      <div className = "mt-[100px]">
      <Popular />
      </div>
      <Combo />
      <Promo />
     
      <BlogSection />
      <div className = "mt-[100px]">
      <Footer />
   </div>
      
      
    </div>
         </div>
  );
}
