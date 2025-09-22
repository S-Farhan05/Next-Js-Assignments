"use client"
import { useState } from "react"
const Home = ()=>{
 const[num,setnum]=useState(null)
 return(

    <>
      {num?<h1>This is a true condition</h1>
      : <h1 className="text-blue-600">False deeds</h1>
      }
    </>
 )
}
export default Home;