let Nav=(props :{name:string ,age:string})=>{

return(
   <>
   <div>
    <h1>This is Navbar component</h1>
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
   
   </div>
   </> 
)


}


export default Nav;