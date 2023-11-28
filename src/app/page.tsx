
'use client'
import Image from "next/image"
import cover from '../../public/cover.jpg'
import { useState } from "react"
import Aboutt from "./About/page"
import Contact from "./Contact/page"
// import NavBar from "./Navbar/page"
export default function Home (){
  const [name, setName]= useState(" ")
  const readMore = ()=>{
    setName("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.")
  }
  return(
    <div>
      
      
      <h1  className=" text-2xl text-cyan-800  mt-5 ml-5 mr-5 py-1.5 bg-rose-200 rounded-full font-bold text-center">This is My Blog</h1>
      <p className=" mt-3 ml-5 text-base text-cyan-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id soluta neque,sunt deserunt facere laudantium veniam quasi natus fugit ipsam inventore nemo Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. and my companion is this for you of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      
      
      <p className="ml-5  text-cyan-700">{name}</p>
      <button onClick={readMore} className=" ml-5 mt-3 w-36 text-rose-200 rounded-full py-1 text-center text-lg  bg-cyan-800 font-medium hover:bg-black ease-in-out duration-500">Read More</button>
      <Aboutt/>
  <Contact/>
  
    </div>
  )
  }
  