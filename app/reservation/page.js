// "use client";

// import { useState } from "react";
// import Section from "../components/Section";
// import Footer from "../components/Footer";
// export default function Reservation() {
//     return (
//         <div className="bg-white">
//           <div>
//             <Section title="Online Reservation" title1="reservation" /></div>
//         <div className="bg-gray-100  flex flex-col md:flex-row justify-center items-start py-12 px-6 md:px-20 md:mt-[200px]">
//       <div className="w-full md:w-1/2 bg-white dark:bg-black flex justify-center mt-[200px] ">
//         <iframe width="652" height="506" src="https://www.youtube.com/embed/F3zw1Gvn4Mk" title="Mr Fox Restaurant Promo Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
//           alt="Restaurant"
//           className="h-[400px] w-full object-cover rounded-lg"
//         </iframe>
//       </div>
      
// <div className="md:w-1/2 relative w-full mt-10 md:mt-[-40px] md:ml-[-20px] bg-white p-8">
//         <h2 className="text-4xl font-bold mb-8 md:mt-[50px] ml-[60px] dark:text-black">Book A Table</h2>
//         <div className="space-y-6 ml-[60px] h-[500px] dark:text-black">

 
//   <p className="text-sm font-light ">Phone</p>

//   <input
//     type="text"
//     placeholder="+473378901"
//     className="border
//      border-gray-400 rounded-lg px-4 py-2 mb-4 w-[80%] "
//   />
//   <p className="text-sm font-light ">Person</p>
//   <input
//     type="number"
//     placeholder="3 person"
//     className="border border-gray-400 rounded-lg px-4 py-2 mb-4 w-[80%] "
//   />
// <p className="text-sm font-light ">Date</p>
//   <input
//     type="date"
//     className="border border-gray-400 rounded-lg px-4 py-2 mb-6 w-[80%] "
//   />
//   <p className="text-sm font-light ">Time</p>
//   <input
//     type="time"
//     className="border border-gray-400 rounded-lg px-4 py-2 mb-6 w-[80%] "
//   />

//   <button className="bg-orange-900 text-white px-6 py-2 rounded-[10px] hover:bg-black transition">
//     Book A Table
//   </button>
// </div>
//        {/* <div className="md:w-1/2 mt-10 md:mt-0 md:ml-10">
//         <h1 className="text-4xl font-bold mb-8">Book A Table</h1>
//         <form className="space-y-6">
//           <div>
//             <label className="block mb-2 font-semibold">Phone</label>
//             <input
//               type="text"
//               placeholder="+4733378901"
//               className="border w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
//             />
//           </div>

//           <div>
//             <label className="block mb-2 font-semibold">Person</label>
//             <select className="border w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400">
//               <option>1 Person</option>
//               <option>2 Person</option>
//               <option>3 Person</option>
//               <option>4 Person</option>
//             </select>
//           </div>

//           <div>
//             <label className="block mb-2 font-semibold">Date</label>
//             <input
//               type="date"
//               className="border w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
//             />
//           </div>

//           <div>
//             <label className="block mb-2 font-semibold">Time</label>
//             <input
//               type="time"
//               className="border w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
//             />
//           </div>

//           <button
//             type="submit"
//             className="bg-[#8B6E4E] text-white px-6 py-3 rounded-md hover:bg-[#6e543c] transition"
//           >
//             Book Now
//           </button>
//         </form>
//       </div> */}
//       </div>
//       </div>
    
//     <Footer />
//     </div>
   
//     )
// }


"use client"

import Footer from "../components/Footer";
import Section from "../components/Section"
import {useRouter} from 'next/navigation';
import { createAccount} from "../core/authLogic";
import {useState} from 'react'
export default function LoginPage(){
  const router = useRouter();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [newpassword,setnewPassword] = useState();
  return(
    <div className ="bg-zinc-100 dark:bg-black w-full min-h-screen">
      <div className="mb-[150px]"><Section title="Login Page" title1="login" /></div>
      <div className="bg-white dark:bg-gray-800 shadow-lg shadow-gray-600 md:h-[620px] h-[1300px] rounded-xl flex md:flex-row flex-col md:mx-[150px] ">
        <div><img className="h-[620px] w-full" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F14.jpg&w=1920&q=75"/></div>
        <div className="flex flex-col h-[500px] w-[500px] md:ml-[100px] mt-[76px] gap-5">
          <div className ="font-bold text-3xl text-[#7f7f08]">CREATE YOUR ACCOUNT</div>
          <div className = "text-sm text-gray-400 ">Enter your Details to create account</div>
          <div><input className =" md:w-[400px] w-[300px] h-[50px] rounded-md bg-gray-100 dark:text-gray-800"placeholder=" Email*" type="email"onChange={(event)=>setEmail(event.target.value)}/></div>
          <div><input className ="md:w-[400px] w-[300px] h-[50px] rounded-md bg-gray-100 dark:text-gray-800"placeholder=" Password*" type="password"onChange={(event)=>setPassword(event.target.value)}/></div>
          <div><input className ="md:w-[400px] w-[300px] h-[50px] rounded-md bg-gray-100 dark:text-gray-800"placeholder=" Confirm Password*" type="password"onChange={(event)=>setnewPassword(event.target.value)}/></div>
          <div><button className =" md:w-[400px] w-[300px] h-[50px] rounded-md bg-[#7f7f08] hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black font-bold text-white"
          onClick={async(event)=> {
        createAccount(email,password,newpassword)
      }}
      >REGISTER</button></div>
          <div className ="text-2xl md:ml-[125px] ml-[75px] font-semibold dark:text-white">Or Rigister With</div>
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
  <div className="mt-[100px]">
      <Footer />
  </div>
    </div>
  )

}
