export default function Combo() {
  return (
    <div className="bg-black text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
      <div className="text-left md:w-1/2 space-y-6">
        <p className="text-white text-3xl ">Super Combo Offer</p>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          BURGER AND <br /> SEA FISH <br /> CURRY <br />COMBO
        </h1>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Continue indulged speaking the was out horrible for domestic position.
          Seeing rather her you not esteem men settle genius excuse. Deal say
          over you age from. Comparison new ham melancholy son themselves.
        </p>
        <button className="bg-red-600 hover:bg-white text-white hover:text-black px-6 py-3 rounded-full font-semibold">
          Accept This Deal
        </button>
      </div>

      
      <div className="relative mt-10 md:mt-0 md:w-1/2 flex justify-center">
     
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F12.jpg&w=750&q=75"
          alt="Burger Combo"
          className="w-80 md:w-[400px] rounded-full"
        />
        <div className="hidden md:block absolute top-10 left-10 bg-red-600 text-white px-6 py-4 rounded-full w-50 h-50 text-xl font-bold">
          <span className="text-gray-200 flex items-center justify-center mt-[50px] text-2xl mr-1">$80</span> <span className="text-5xl flex items-center justify-center text-center">$65</span>
        </div>
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F13.png&w=640&q=75"
          alt="Fish Dish"
          className="absolute bottom-0 right-0 w-40 md:w-48 rounded-full hidden md:block"
        />
      </div>
    </div>
  );
}
