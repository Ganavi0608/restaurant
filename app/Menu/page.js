

"use client";
import {useState } from 'react';
import MenuCard from '../components/MenuCard';
import Section from "../components/Section"
import Footer from '../components/Footer'; 
  const menus=[{
    menuImg:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F1.jpg&w=1920&q=75",
    RatingsImg:"https://static.vecteezy.com/system/resources/previews/023/639/243/non_2x/star-illustrations-single-star-free-png.png",
    name:"Pizza Slice",
    desc:"Ham,Cheese and Pineapple"
  },
  {
    menuImg:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F2.jpg&w=1920&q=75",
    RatingsImg:"https://static.vecteezy.com/system/resources/previews/023/639/243/non_2x/star-illustrations-single-star-free-png.png",
    name:"Pizza Slice",
    desc:"Ham,Cheese and Pineapple"
  },{
    menuImg:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F3.jpg&w=1920&q=75",
    RatingsImg:"https://static.vecteezy.com/system/resources/previews/023/639/243/non_2x/star-illustrations-single-star-free-png.png",
    name:"Pizza Slice",
    desc:"Ham,Cheese and Pineapple"
  },{
    menuImg:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F4.jpg&w=1920&q=75",
    RatingsImg:"https://static.vecteezy.com/system/resources/previews/023/639/243/non_2x/star-illustrations-single-star-free-png.png",
    name:"Pizza Slice",
    desc:"Ham,Cheese and Pineapple"
  },{
    menuImg:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F17.jpg&w=1920&q=75",
    RatingsImg:"https://static.vecteezy.com/system/resources/previews/023/639/243/non_2x/star-illustrations-single-star-free-png.png",
    name:"Pizza Slice",
    desc:"Ham,Cheese and Pineapple"
  },{
    menuImg:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F19.jpg&w=1920&q=75",
    RatingsImg:"https://static.vecteezy.com/system/resources/previews/023/639/243/non_2x/star-illustrations-single-star-free-png.png",
    name:"Pizza Slice",
    desc:"Ham,Cheese and Pineapple"
  },{
    menuImg:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F20.jpg&w=1920&q=75",
    RatingsImg:"https://static.vecteezy.com/system/resources/previews/023/639/243/non_2x/star-illustrations-single-star-free-png.png",
    name:"Pizza Slice",
    desc:"Ham,Cheese and Pineapple"
  },
  {
    menuImg:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F18.jpg&w=1920&q=75",
    RatingsImg:"https://static.vecteezy.com/system/resources/previews/023/639/243/non_2x/star-illustrations-single-star-free-png.png",
    name:"Pizza Slice",
    desc:"Ham,Cheese and Pineapple"
  },
  {
    menuImg:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F1.jpg&w=1920&q=75",
    RatingsImg:"https://static.vecteezy.com/system/resources/previews/023/639/243/non_2x/star-illustrations-single-star-free-png.png",
    name:"Pizza Slice",
    desc:"Ham,Cheese and Pineapple"
  },
  {
    menuImg:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F19.jpg&w=1920&q=75",
    RatingsImg:"https://static.vecteezy.com/system/resources/previews/023/639/243/non_2x/star-illustrations-single-star-free-png.png",
    name:"Pizza Slice",
    desc:"Ham,Cheese and Pineapple"
  },
  {
    menuImg:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F1.jpg&w=1920&q=75",
    RatingsImg:"https://static.vecteezy.com/system/resources/previews/023/639/243/non_2x/star-illustrations-single-star-free-png.png",
    name:"Pizza Slice",
    desc:"Ham,Cheese and Pineapple"
  },{
    menuImg:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F2.jpg&w=1920&q=75",
    RatingsImg:"https://static.vecteezy.com/system/resources/previews/023/639/243/non_2x/star-illustrations-single-star-free-png.png",
    name:"Pizza Slice",
    desc:"Ham,Cheese and Pineapple"
  },
];


export default function Menu() {
  const [cart, setCart] = useState([]);
  const addtoCart = (menu) => {
    setCart((prev) => [...prev, menu]);
    alert(`Added item to the cart`);
  };

  const removefromCart=(menu)=>{
    setCart((prev)=>prev.filter((item)=>item.name!=menu.name));
    alert(`Removed item from the cart`);
  }

  return (

  <div>
    <div className="w-full min-h-screen dark:bg-zinc-800 bg-zinc-100">
      <div><Section title="Restaurant Food Menu" title1="food menu" /></div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-red-700 mt-[55px]">~-------CATEGORY-------~</div>
          <div className="text-black dark:text-white text-4xl font-bold">
            Choose Your Best Food
          </div>
      <div className ="hidden md:block  flex-col ml-[1024px] text-black dark:text-white font-bold mb-6">
        {cart.length > 0 ? (
          cart.map((item, index) => <div key={index}>{item.name}
          <button className=" items-center mt-4 text-right  top-4 right-4 w-[125px] h-[35px] flex flex-row bg-lime-300 rounded-2xl text-sm justify-center "
            onClick={() => removefromCart(item)}
            >
              Remove
            </button></div>)
        ) : (
          <div className="justify-end items-end text-right m-4 font-bold text-lg">
            No items in the cart
          </div>
        )}
      </div>
<div className="flex flex-row flex-wrap justify-around gap-2 p-4">
            {menus.map((item, index) => (
              <MenuCard
                key={index}
                menuImg={item.menuImg}
                RatingsImg={item.RatingsImg}
                name={item.name}
                desc={item.desc}
                onBuyClick={() => addtoCart(item)}
              />
            ))}
          </div>
          </div>
          {/* <div className ="h-[550px] bg-black my-[60px]">
            <div className="flex flex-row">
                <div className ="flex flex-col w-[502px] h-[350px] mt-[100px] md:ml-[200px] ml-[11px]">
                <div className ="font-semibold text-6xl text-white">30 MINUTES</div>
                <div className ="font-semibold text-6xl text-white">DELIVERY!</div>
                <div className ="text-gray-400 text-sm my-[36px]">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails.
                     The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s,
                     it will give you a experience that you’ll have a hard time forgetting.</div>
                     <button className="bg-amber-800 w-[200px] h-[50px] text-lg text-white jusitify-center items-center">Order Now</button>
            </div>
            <div><img className ="w-[400px] ml-[200px] hidden md:block mt-[125px]" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F11.png&w=1920&q=75"/></div>
            </div>
          </div> */}
          <menu/>
          <Footer/>
          </div>
          </div>

        
  );
}