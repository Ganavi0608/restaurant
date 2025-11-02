export default function AboutUs() {
  return (
   <div className='bg-white-100 dark:bg-black'>
    <p className='text-2xl font-bold text-center text-red-800 mt-[100px] '>About Us</p>
    <p className='md:text-5xl text-3xl font-bold text-center text-black mt-[20px] '>The best burgers offer</p>
     <p className='md:text-5xl text-3xl font-bold text-center text-black mt-[10px]'>a combination of tastes.</p>
     <div className="md:flex-row flex flex-col h-[60%] mt-[10px]  w-full items-center">
      <div className="md:ml-[120px] ml-[10px] md:w-[25%] w-auto mt-[30px]">
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F11.jpg&w=640&q=75" className="rounded-[20px] h-auto w-full object-cover"></img>
      </div>
      <div className="flex flex-col md:ml-[40px] ">
        <div className=' bg-red-500 rounded-[10px] flex flex-col items-center justify-center h-[150px] w-[280px] text-white font-bold mt-[30px] text-center'>
         <p className='text-center px-4 text-6xl '> 18+</p>

<p className='text-center mt-2 '>Types of burger</p>
     </div>
     <div className=' bg-red-500 rounded-[10px] flex items-center justify-center h-[250px] w-[280px] text-white font-bold mt-[20px] '>
      <img src='https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F10.jpg&w=640&q=75' className='h-auto w-full object-cover rounded-[10px]'></img>
     </div>
   </div>
    <div className="md:ml-[80px] ml-[30px] md:w-[35%] flex flex-col ">
      <p className="text-black text-lg text-gray-600 mt-[50]">New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating</p>
     
   <div className="flex flex-col items-center mt-[30px] space-y-[30px]">
  {/* Box 1 */}
  <div className="border border-gray-400 rounded-[40px] flex flex-row items-center justify-center h-[200px] w-[400px] relative p-6">
    <div className="min-h-[80px] min-w-[80px] bg-black rounded-full flex items-center justify-center shrink-0">
      <img
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F21.png&w=256&q=75"
        className="h-10 w-10 object-contain"
      />
    </div>
    <div className=" ml-[30px]">
      <p className="text-black font-bold text-2xl">Online Food Delivery</p>
      <p className="text-gray-600 mt-2">Excellence projecting is devonshire dispatched remarkably on estimating.</p>
    </div>
  </div>
  <div className="border border-gray-400 rounded-[40px] flex flex-row items-center justify-center h-[200px] w-[400px] relative p-6">
    <div className="min-h-[80px] min-w-[80px] bg-black rounded-full flex items-center justify-center shrink-0">
      <img
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F22.png&w=256&q=75"
        className="h-10 w-10 object-contain"
      />
    </div>
    <div className=" ml-[30px]">
      <p className="text-black font-bold text-2xl">Authentic food</p>
      <p className="text-gray-600 mt-2">Regularity projecting is devonshire dispatched remarkably on estimating</p>
    </div>
  </div>
</div>
    </div>
    </div>
   </div>
  );
}
