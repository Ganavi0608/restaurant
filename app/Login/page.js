
"use client"

import Footer from "../components/Footer";
import Section from "../components/Section"
import {useRouter} from 'next/navigation';
export default function LoginPage(){
  const router = useRouter();
  return(
    <div className ="bg-zinc-100 dark:bg-black w-full min-h-screen">
      <div className="mb-[150px]"><Section title="Login Page" title1="login" /></div>
      <div className="bg-white dark:bg-gray-800 shadow-lg shadow-gray-600 md:h-[600px] h-[1200px] rounded-xl flex md:flex-row flex-col md:mx-[150px] ">
        <div><img className="h-[600px] w-full" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F14.jpg&w=1920&q=75"/></div>
        <div className="flex flex-col h-[500px] w-[500px] md:ml-[100px] mt-[76px] gap-5">
          <div className ="font-bold text-3xl text-[#7f7f08]">WELCOME BACK</div>
          <div className = "text-sm text-gray-400 ">Enter your Email and Password</div>
          <div><input className =" md:w-[400px] w-[300px] h-[50px] rounded-md bg-gray-100 dark:text-gray-800"placeholder=" Email*" type="email"/></div>
          <div><input className ="md:w-[400px] w-[300px] h-[50px] rounded-md bg-gray-100 dark:text-gray-800"placeholder=" Password*" type="password"/></div>
          <div><button className =" md:w-[400px] w-[300px] h-[50px] rounded-md bg-[#7f7f08] hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black font-bold text-white">LOGIN</button></div>
          <div className ="text-2xl md:ml-[125px] ml-[75px] font-semibold dark:text-white">Or Login With</div>
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
          <div className ="text-gray-400 md:ml-[81px] ml-[21px] md:mt-0 mt-[22px]">Don't have an account?
            <span className="text-red-700" onClick={() => router.push('/Register')}>Register Now</span>
          </div>
        </div>  
      </div>
  <div className="mt-[100px]">
      <Footer />
  </div>
    </div>
  )

}

