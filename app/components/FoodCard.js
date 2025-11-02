function FoodCard({foodImg, name, Foodratings,desc}){
    return(
    <div className ="flex flex-col w-[250px] h-[470px] rounded-2xl justify-around items-center dark:bg-zinc-800 bg-zinc-100 dark:hover:bg-gray-700 hover:bg-white md:border-0 border hover:shadow-gray-200 hover:shadow-sm">
        <div className="w-[170px] h-[190px] justify-center items-center mt-[35px]"><img src ={foodImg}/></div>

        <div className =" text-2xl font-bold dark:text-white text-zinc-950">{name}</div>
        <div className="w-[150px] h-[70px]"><img src={Foodratings}/></div>
        <div className ="text-sm mb-[50px] mx-[25px] text-gray-500 justify-center items-center">{desc}</div>
        </div>



    )
}

export default FoodCard;