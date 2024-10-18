import Link from "next/link";
import React from "react";
export default function Home(){
 return (
    <div id="container">
   <h1 id="head"> Welcome to Facts about globe </h1>
   <span><img id="img" src="https://as2.ftcdn.net/v2/jpg/02/99/68/07/1000_F_299680759_cQ3nuFp2hip9YQUdUH0CTZMBxYHrXLrz.jpg"alt="pic"></img></span>
   <div id="List">
     <h1><Link href='./Pakistan'>Pakistan</Link></h1>
     <h1><Link href='./India'>India</Link></h1>
     <h1><Link href='./Russia'>Russia</Link></h1>
     <h1><Link href='./America'>America</Link></h1>
     <h1><Link href='./Iran'>Iran</Link></h1>
     <h1><Link href='./China'>China</Link></h1>
     </div>

  

     </div>  )
} 