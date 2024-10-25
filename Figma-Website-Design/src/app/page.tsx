import Navbar from "./components/Navbar"
import Image from "next/image"
import Footer from "./components/Footer"


export default function Page(){
return(
  <>
  <div id="Container">
    <div className="Top">
    <Navbar/>
    <img id="profile-img" src="/a.png" alt="profile pic"/>
     <div className="intro-cont"><h1 id="intro">Hi, I am John, </h1>
     <h1 id="intro">Creative Technologist</h1>
     <p id="about">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. </p>
     </div>  
    </div>
    
    <button id="Download"><p>Download Resume</p></button>
    <div id="Post-sec">

      <div id="View">
      <b id="recent">Recent Post</b>
      <b id="view-butt">View all</b>
      </div>


      <span id="sec">
       <div id="in-sec">
        <h1>Making a design system from scratch</h1></div>
        <p id="date">12 Feb 2020 &nbsp; &nbsp;|&nbsp; &nbsp; Design, Pattern</p>
        <p id="para">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </span>

      <span id="sec1">
      <div id="in-sec">
      <h1>Making a design system from scratch</h1></div>
      <p id="date">12 Feb 2020  &nbsp;&nbsp;|&nbsp; &nbsp; Design, Pattern</p>
      <p id="para">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </span>
    </div>
    
      <h1 id="feature">Featured works</h1>
      <div className="Last-sec">
        <div id="Last-sec-container">
         <img id="Last-sec-img" src="first.png" alt="Stuff" width={270}/>
         <div id="Last-sec-text">
         <h1 id="Last-sec-head">Designing Dashboards</h1>
         <span id="icon-con" >
         <b id="icon">2020</b>
         <p id="icon-dash">Dashboard</p>
         </span>
        
         <p id="sec-par">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
         </div>

        

        </div>
        
      </div>


      <div className="Last-sec">
        <div id="Last-sec-container">
         <img id="Last-sec-img" src="second.png" alt="Stuff" width={270}/>
         <div id="Last-sec-text">
         <h1 id="Last-sec-head">Designing Dashboards</h1>
         <span id="icon-con" >
         <b id="icon">2020</b>
         <p id="icon-dash">Dashboard</p>
         </span>
        
         <p id="sec-par">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
         </div>

        

        </div>
        
      </div>
      <div className="Last-sec">
        <div id="Last-sec-container">
         <img id="Last-sec-img" src="third.png" alt="Stuff" width={270}/>
         <div id="Last-sec-text">
         <h1 id="Last-sec-head">Designing Dashboards</h1>
         <span id="icon-con" >
         <b id="icon">2020</b>
         <p id="icon-dash">Dashboard</p>
         </span>
        
         <p id="sec-par">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
         </div>

        

        </div>
         
          
          
      </div>
     
    <Footer/>
  </div>
  </>
)

}