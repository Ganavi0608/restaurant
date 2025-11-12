"use client";

import { useRouter } from "next/navigation";
export default function Navbar(){
     const router = useRouter();
    return(
 <div className ="bg-white dark:bg-black">
            <div className ="flex flex-row justify-around items-center  mb-[21px]">
                <div className ="bg-white dark:bg-zinc-900  w-full h-[70px] flex flex-row justify-around items-center md:gap-0.5"> 
                    <img className="w-[100px] h-[70px] block dark:hidden" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-2.png&w=1920&q=75"/>
                    <img className="w-[100px] h-[70px] hidden dark:block" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75"></img>
                    <div className ="flex flex-row justify-between items-center gap-10">
                    <div onClick={() => router.push("reservation")} className="hidden md:block font-semibold text-md dark:text-white">Reservation</div>
                    <div onClick={() => router.push("/menu")} className="hidden md:block font-semibold text-md">Pages</div>
                    <div onClick={() => router.push("/register")}  className="hidden md:block font-semibold text-md">Register</div>
                    <div onClick={() => router.push("/login")} className="hidden md:block font-semibold text-md">Login</div>
                    <div className="hidden md:blockfont-semibold text-md">Shop</div>
                    <div className="flex items-center"></div>
                     <div className= 'md:ml-[120px] ml-[-150px]  mt-[12] rounded-full overflow-hidden bg-red-500 h-12 w-12 flex flex-row items-center justify-center'>
                        <img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" className="w-3/4 h-3/4 object-contain "></img>
                    </div>
                    <div className="hidden md:flex w-[150px] h-[45px] mx-[41px] rounded-3xl bg-red-500 text-black items-center justify-center ">Reservations</div>
                    </div>
                    </div>
                    </div>
                    </div>
                        )
}
