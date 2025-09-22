
export default function Nav(){

    return(
        <>
        <header className=" bg-white h-screen ">
            <nav className="px-3 py-3 bg-amber-50">
                <div className="flex justify-between ">
                  
                  <div>
                    <div className="text-3xl">
                       <div className="flex "> 
                        <div>
                            <img  src="/cursor.svg" alt="" width={40} height={40}/>
                            
                        </div>
                        <div className="flex flex-col">
                            <div className="flex gap-1">
                         <span className="text-red-500 ">Brit</span>
                        <p className="text-blue-600">Global</p>
                            </div>
                           <p className="text-blue-600">Edge</p>
                           <p className="text-[10px]">simple abroad migrate service</p>
                        </div>
                     
                        
                        </div>
                        
                    </div>
                        </div>

                        <ul className="flex gap-6  items-center text-lg text-blue-300 ">
                    <li className="cursor-pointer border-b-blue-600 hover:border-b">Home</li>
                    <li className="cursor-pointer border-b-blue-600 hover:border-b">Home</li>
                      <li className="cursor-pointer border-b-blue-600 hover:border-b">Home</li>
                       <li className="cursor-pointer border-b-blue-600 hover:border-b">Home</li>
                        <li className="cursor-pointer border-b-blue-600 hover:border-b">Home</li>
                        </ul>
                </div>
            </nav>
        </header>
        </>
    )
}