import { items } from "@/data/items"
import Link from "next/link"
export default function Home(){

  return<>
  <h1 className="bg-gradient-to-r from-blue-100 to-green-300 
  opacity-90 text-black w-fit px-20 py-20 mx-auto my-10 text-3xl font-extrabold uppercase border-amber-600 border-4 rounded-2xl shadow-2xl">Tailwind Practice</h1>
  <br />
  <br />
  <button className="text-white mx-12 border-2 p-4 text-2xl rounded-2xl cursor-pointer hover:shadow-lg shadow-amber-600 hover:scale-110 hover:rotate-12 hover:translate-6 ">Click me</button>

  <button className="text-white mx-12 border-2 p-4 text-2xl rounded-2xl cursor-pointer hover:shadow-lg shadow-amber-600 transition duration-500 ease-in">Click me </button>

  <button className="text-white mx-12 border-2 p-4 text-2xl rounded-2xl cursor-pointer hover:shadow-lg shadow-amber-600 transition duration-500 ease-in-out">Click me </button>

  <button className="text-white mx-12 border-2 p-4 text-2xl rounded-2xl cursor-pointer hover:shadow-lg shadow-amber-600 transition duration-500 delay-250">Click me </button>

  <button className="text-white mx-12 border-2 p-4 text-2xl rounded-2xl cursor-pointer hover:shadow-lg shadow-amber-600 animate-pulse">Click me </button>

  <button className="bg-indigo-500 text-white px-6 py-3 rounded shadow-md 
               hover:bg-indigo-700 hover:shadow-lg 
               transition-all duration-300 ease-in-out">
  Fancy Button
</button>

<div className="flex flex-wrap gap-4 my-28 mx-28">
  <div className="bg-red-300 w-40 h-20">1</div>
  <div className="bg-green-300 w-40 h-20">2</div>
  <div className="bg-blue-300 w-40 h-20">3</div>
</div>

{/* <div className="flex">
  <div className="flex-grow bg-blue-300 basis-0.5">Grow me</div>
  <div className="w-20 bg-red-300">Fixed</div>
</div> */}

{/* <div className="bg-white text-black dark:bg-black dark:text-white p-4">
  Light / Dark Mode
</div> */}
 

   <h1 className="text-center text-3xl">Items and dynamic routes</h1>
   <div className="grid grid-cols-2 space-y-6 my-12">
     {items.map((item)=>(
    <Link className="text-2xl text-blue mx-auto " key={item.id} href={`/products/${item.id}`}>


      <button className="cursor-pointer text-blue-500 border-2 rounded-xl px-4 py-2 hover:opacity-40 ">{item.title}</button>


    </Link>
     ))}
   </div>
  </>
  


}