export default function Hero() {
  return (
        <div className='bg-white-100 dark:bg-black'>
            <div className="bg-black-600  h-20 md:w-[1000px] flex flex-row md:ml-[150px] ml-[80px] mt-[20]">
          <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-2.png&w=750&q=75" className='dark:bg-white'></img>
          <div className='hidden md:block font-bold text-black-800 ml-[40px] text-md mt-2.5 mr-[10] mt-[35px] ml-[120]'>Home</div>
          <div className='hidden md:block font-bold text-black dark:text-white ml-[40px] text-md mt-2.5 mr-[10] mt-[35px]'>Pages</div>
            <div className='hidden md:block font-bold text-black dark:text-white ml-[40px] text-md mt-2.5 mr-[10] mt-[35px]'>Menue</div>
            <div className='hidden md:block font-bold text-black dark:text-white ml-[40px] text-md mt-2.5 mr-[10] mt-[35px]'>Blog</div>
            <div className='hidden md:block font-bold text-black dark:text-white ml-[40px] text-md mt-2.5 mr-[10] mt-[35px]'>Shop</div>
        <div className="flex items-center ">
          <div className= 'md:ml-[120px] ml-[60px]  mt-[12] rounded-full overflow-hidden bg-red-500 h-12 w-12 flex items-center justify-center'>
            <img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" className="w-3/4 h-3/4 object-contain "></img>
          </div>
          <div className="bg-red-500 hidden md:block text-white px-15 py-4 mt-[10px] rounded-full ml-[40px]">
  Reservation
</div>
</div>

           </div>
          
       
        <div className=" md:ml-[75px] md:ml-[120px] ml-[20px] md:h-[600px] md:w-[1200px] w-[330px] bg-red-950 md:rounded-[80px] mx-[5px] mt-[40px] items-start pt-[5px] ">
          <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F19.png&w=750&q=75" className="h-auto object-cover mt-[140px]"></img>
          <div className="ml-[700px] flex flex-col mt-[-500px]">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQViUCvopaH4eY-p43jLB80TGxBs7GcvSFHLA&s" className="h-[590px] w-[600px] object-cover rounded-br-[80px] rounded-tr-[80px]"></img>
        </div>
        </div>
        </div>
       
       
  );
}
