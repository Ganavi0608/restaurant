
"use client"
import { useState } from "react";
import {useRouter} from 'next/navigation';
import Section from '../components/Section'
import Footer from "../components/Footer"
export default function RegisterPage(){
  const router = useRouter();
  return(
    <div className ="bg-zinc-100 dark:bg-black w-full min-h-screen">
      <div><Section title="Register Page" title1="register" /></div>
      <div className="bg-white dark:bg-gray-800 shadow-lg shadow-gray-600 md:h-[700px] h-[1350px] rounded-xl flex md:flex-row flex-col md:mx-[100px] ">
        <div><img className="h-[700px] w-full" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F14.jpg&w=1920&q=75"/></div>
        <div className="flex flex-col h-[500px] w-[500px] md:ml-[100px] mt-[76px] gap-5">
          <div className ="font-bold text-3xl text-[#7f7f08]">CREATE AN ACCOUNT</div>
          <div className = "text-sm text-gray-400 ">Enter your details to create an account</div>
          <div><input className =" md:w-[400px] w-[300px] h-[50px] rounded-md bg-gray-100"placeholder=" Email*" type="email"/></div>
          <div><input className ="md:w-[400px] w-[300px] h-[50px] rounded-md bg-gray-100"placeholder=" Password*"type="password"/></div>
          <div><input className ="md:w-[400px] w-[300px] h-[50px] rounded-md bg-gray-100"placeholder=" Confirm Password*" type="password"/></div>
          <div><button className =" md:w-[400px] w-[300px] h-[50px] rounded-md bg-[#7f7f08] hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black font-bold text-white">REGISTER</button></div>
          <div className ="text-2xl md:ml-[125px] ml-[75px] font-semibold dark:text-white">Or Register With</div>
          <div className =" flex md:flex-row flex-col w-[400px] h-[50px] md:justify-around md:items-center md:ml-0 ml-[55px]">
            <div className ="text-sm text-gray-600 w-[195px] h-[50px]  border-2 border-gray-500 rounded-sm flex justify-around items-center ">
              <div><img  className =" w-[30px]"src  ="https://static.vecteezy.com/system/resources/previews/046/861/647/non_2x/google-logo-transparent-background-free-png.png"/></div>
              <div className="ml-[-100px]">Google</div>
            </div>
            <div className ="text-sm text-gray-600 w-[195px] h-[50px] mt-[15px] md:mt-0 border-2 border-gray-500 rounded-sm flex justify-around items-center ">
              <div><img  className =" w-[30px]"src  ="https://freepnglogo.com/images/all_img/facebook-logo.png"/></div>
              <div className="ml-[-81px]">Facebook</div>
            </div>
          </div>
          <div className ="text-gray-400 md:ml-[81px] ml-[21px] md:mt-0 mt-[22px]">Already have an account?
            <span className="text-red-700" onClick={() => router.push('/Login')}>Login Now</span>
          </div>
        </div>  
      </div>
      <Footer/>
    </div>
  )

}

