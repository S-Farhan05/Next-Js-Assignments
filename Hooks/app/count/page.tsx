"use client"
import { useState } from "react";
import { counterContext } from "@/context/context";
import Foot from "@/components/footer";

export default function New(){
const[val,setVal] = useState(()=>{
  console.log("Fire State")
  return 4
})

function Changeval()
{   
    setVal(previousCount => previousCount +1)
}

let Decrement=()=>{
 setVal(previousVal =>previousVal-1)
}


 return(<>
     <counterContext.Provider value={val}>
      <Foot/>
       
     <h1 className="text-blue-300 flex justify-center text-4xl py-28">My name is Happy</h1>
     <div className="name flex flex-col items-center text-3xl text-white ">
      <button className="cursor-pointer" onClick={Changeval}>+</button>
      <h1>Update Counter</h1>
      <p>{val}</p>
      <button className="cursor-pointer" onClick={Decrement}>-</button></div>
      </counterContext.Provider>
</>)

}