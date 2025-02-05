"use client"
import { MdDelete } from "react-icons/md"
import { useState } from "react"

export default function Todo(){
 let [tasklist , settasklist]=useState(["Wake up"])
  let [ task, settask] = useState("")
   function handleAddTask(e:any){
         settask(e.target.value);
  }
  function Addtasklist(){
            settasklist([...tasklist,task]);
            settask("");
  }
  function HandleDeleteTask(index:number){
     settasklist(tasklist.filter((_,i)=> i!==index));
  }
  return(
    <div className="flex md:flex-col items-center justify-center md:mt-16 mt-8">
      <div className="bg-gray-700  md:w-[520px] md:pl-8 pl-2 md:text-xl text-lg h-auto w-max">
        <h1 className="md:-ml-8 text-center text-3xl">Get Things done</h1>
        <input className="bg-transparent border font-thin border-gray-300 rounded md:w-[350px] w-auto md:h-14 md:mt-10 placeholder: md:pl-2 mt-8" type="text" value={task} placeholder="What task do you have today ?" onChange={(e)=>handleAddTask(e)}></input>
        <button className="md:ml-4 text-white bg-gray-500 md:h-14 ml-1 md:p-2 p-1 rounded cursor-pointer hover:bg-orange-300 " onClick={Addtasklist}>Add Task</button>
        {/* focus:outline-none focus:ring-4 focus:ring-offset-4 focus:ring-offset-orange-400 focus:ring-opacity-45 */}

        <ul className="md:mt-[30px] ">
          {tasklist.map((task,index)=>(
              <li className=" md:min-h-[50px] h-auto md:mt-10 mt-4 bg-gray-500 mb-4 mr-2 md:mr-6 md:pt-2 flex justify-between pl-2" key={index}>{task}
              <button className="text-wrap  " onClick={()=>HandleDeleteTask(index)}> <MdDelete className="mr-2 md:text-2xl mb-2 mt-1 md:mt-0" /></button></li>
              
          ))}
         
        </ul>
        </div>
        </div>
    
    
  )
}