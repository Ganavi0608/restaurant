
"use client";

import Navbar from "./Navbar";
export default function Hero(){
    return(
        <div>
        <Navbar />
                 <div className=" flex justify-center items-center  ">
                    <div className="relative flex flex-row  justify-center items-center md:h-[600px] h-[300px] md:w-[1200px] w-[400px]  bg-red-950 rounded-[40px] md:rounded-[80px] mx-auto md:mt-[10px] p-4">

  <img
    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F19.png&w=750&q=75"
    
    className=" md:w-[500px] w-[150px] md:h-auto  object-contain md:ml-[-40px]"
  />
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQViUCvopaH4eY-p43jLB80TGxBs7GcvSFHLA&s"
    className=" md:w-[550px] w-[150px] md:h-[600] h-[300px] object-cover rounded-br-[40px] rounded-tr-[40px] md:ml-[130px] ml-[20px] md:mt-1 md:mt-0"
  />
</div>

    </div>
    </div>
    )
}
