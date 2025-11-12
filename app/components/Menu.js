"use client";
import Reservation from './Reservation_table'
export default function Menu(){
    return(
        <div>
        <div className ="h-[550px] bg-black">
            <div className="flex flex-row">
                <div className ="flex flex-col w-[502px] h-[350px] mt-[100px] md:ml-[200px] ml-[11px]">
                <div className ="font-semibold text-6xl text-white">30 MINUTES</div>
                <div className ="font-semibold text-6xl text-white">DELIVERY!</div>
                <div className ="text-gray-400 text-sm my-[37px]">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails.
                     The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s,
                     it will give you a experience that youll have a hard time forgetting.</div>
                     <button className="bg-amber-800 w-[200px] h-[50px] text-lg text-white jusitify-center items-center">Order Now</button>
            </div>



            <div><img className ="w-[400px] ml-[200px]  mt-[125px]" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F11.png&w=1920&q=75"/></div>
            </div>
        </div>
        <div className ="bg-zinc-100 dark:bg-zinc-800 hidden md:block  min-h-screen">

            <div className ="flex flex-col justify-center items-center">
            <div className =" text-small text-amber-900 mt-[111px] dark:text-white">~---------HAPPY CUSTOMERS---------~</div>
            <div className ="text-5xl text-black font-semibold dark:text-white">Our Customer Feedbacks</div>
            </div>
            
            <div className="flex flex-row  bg-zinc-100 dark:bg-zinc-800 dark:text-white h-[400px] mx-[200px] mt-[21px]">
                <div ><img className ="w-[350px] hidden md:block ml-[70px] mt-[25px] overflow-hidden [clip-path:polygon(25%_0%,_75%_0%,_100%_50%,_75%_100%,_25%_100%,_0%_50%)]" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F4.jpg&w=256&q=75"/></div>
                <div className ="flex flex-col md:ml-[150px] ml-[-150px] justify-center md:mt-0 mt-[200px] w-[450px]">
                <div className ="text-5xl jusitfy-center items-center font-semibold ">The Best Food Ever</div>
                <div className="text-gray-400 mt-[13px]">“Targeting consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing.”</div>
                <div className ="text-4xl text-black dark:text-white font-semibold mt-[11px]">Matthiw J Wyman</div>
                <div className ="text-2xl text-semibold text-amber-900">SENIOR CONSULTANT</div>
            </div></div>
</div>

<div>
            <div className = "h-[500px] bg-zinc-950 mt-[50px] mb-[250px]">
                <div className = "h-[500px]  mx-[50px] flex flex-row">
                <div className ="flex flex-col text-white gap-6 w-1/2 mx-[55px] hidden md:block h-[400px] ">
                {/* <div className ="flex flex-col text-white gap-6"> */}
                    <div className=" text-2xl  font-semibold mt-[90px]">RESERVATION~~~~~~~~~~</div>
                <div className="text-5xl font-bold ">Reservation for your Favourite Private Table</div>
                <div className="text-sm  ">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.</div>
                <div className ="flex flex-row w-[400px] gap-6 justify-around items-center  h-[90px] ">
                    <div className ="flex flex-col ">
                        <div className ="font-semibold text-3xl">Lunch Menu</div>
                        <div className ="text-xl">30+ items</div>
                    </div>
                    <div className ="flex flex-col ">
                        <div className ="font-semibold text-3xl">Dinner Menu</div>
                        <div className ="text-xl">50+ items</div>
                    </div>
                </div>
                    </div>
                    <Reservation/>
    {/* <div className='w-1/2 h-[500px] bg-red-900'><Reservation/></div>             */}

            </div>
            
            </div>
        </div>
         </div>
        )
    }
