"use client"
import { useState ,useEffect } from "react"
// import { counterContext } from "@/context/context"
// import { useContext } from "react"
export default function Home(){

  // USE_STATE*****

const[val,setVal] = useState(()=>{
  console.log("Fire State")
  return 4
})


// const[obj ,setObj] = useState({name :"Sidler" ,age:21})

// const name = obj.name
// const age = obj.age




function Changeval()
{   
    // setVal(val+1)  should plus by 2 but didnt takes val deafult
    // setVal(val+1)
    setVal(previousCount => previousCount +1)
}

let Decrement=()=>{
 setVal(previousVal =>previousVal-1)
}

// let Cange=()=>{
// setObj(previous => {
//   return { ...previous ,age : previous.age+1} // ... not do then error obj property delete
// })
// }
//use state return(no 1)
   return(     
    <>
     <h1 className="text-blue-300 flex justify-center text-4xl py-28">My name is Happy</h1>
     <div className="name flex flex-col items-center text-3xl text-white ">
      <button className="cursor-pointer" onClick={Changeval}>+</button>
      <h1>Update Counter</h1>
      <p>{val}</p>
      <button className="cursor-pointer" onClick={Decrement}>-</button>

{/* //       <h1>object</h1>
//       <button className="cursor-pointer border-4 border-amber-600" onClick={Cange}>Click</button>
//       <p>Name: {name}</p>
//       <p>Age: {age}</p> */}


     </div>
     </>
//   )
   )

//***   USE_EFFECT   ***



// const[state,changeState]=useState("")
// // const[items,setItems]=useState([])

// useEffect(()=>{
//   console.log("Change state")


// return ()=>{  // not a arrow function its a callable function of useeffect
//   console.log("Previous rendered deleted") // essentail for speed 
// }

// },[state])


// useEffect(()=>{
//   fetch(`https://jsonplaceholder.typicode.com/${state}`)
//       .then(response => response.json())
//       .then(json => setItems(json))
//     }
// )
// return<>  use effect return(2)

//   <div className="flex space-x-2.5 w-fit mx-auto text-3xl" >
  
//     <button className="cursor-pointer" onClick={()=> changeState("Posts")}>Posts</button>
//     <button className="cursor-pointer" onClick={()=> changeState("Users")}>Users</button>
//     <button className="cursor-pointer" onClick={()=> changeState("Comments")}>Comments</button>
 

  
  // </div>
  // <h1 className="text-center my-10 text-3xl">{state}</h1>

  // { {items.map(item =>{
  //   return <pre>
  //     {JSON.stringify(item)}
  //   </pre>
  // })} }


// </>
// const handleReize=()=>{
// setwindowSize(window.innerWidth)
// }

// const[windowSize ,setwindowSize] = useState(window.innerWidth)
// useEffect(()=>{
// window.addEventListener('resize',handleReize)

// return()=>{
//   window.removeEventListener('resize',handleReize)
//   console.log("removed")
// }

// })
// return<>
// <h1>{windowSize}</h1>

// </>

}