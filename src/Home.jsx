import React from 'react'
import { FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div>
<section className='flex flex-col p-3 relative max-w-5xl mx-auto scroll-mt-40 md:flex-row' id="Home">

<div className="w-full">
  <div className="text-left mt-24 ml-8">
     <h1 className='text-5xl font-light md:text-6xl'>I'm</h1>
     <h1 className='text-7xl font-bold md:text-8xl'>Xyvie</h1>
     <h1 className='text-7xl font-bold md:text-8xl'>Lyons</h1>
     <hr className='bg-secondarycolor p-0.5 outline-none text-secondarycolor border-none w-36 rounded-full mt-4'/>
     
       <div className="mt-5 text-xl">
       <a href="" className='inline-block ml-2 text-3xl hover:text-secondarycolor'><FaInstagram /></a>
     <a href="" className='inline-block ml-2 text-3xl hover:text-secondarycolor'><FaLinkedin /></a>
     <a href="" className='inline-block ml-2 text-3xl hover:text-secondarycolor'><FaGithub /></a>

       </div>
     
  </div>
  <div className="">

  </div>
</div>


  
  <div className='w-full'>
  
    <img src="me.png" className='scale-[1] mt-12 md:scale-[1.5] md:mt-24 lg:scale-[1.6] lg:mt-28' alt="" />


 

  </div>







<div className="w-full mt-1 p-10">
  <div className="text-2xl mb-5 font-medium md:text-4xl lg:text-5xl">
   <h1>Fullstack Web Developer & Professional UX/UI Designer.</h1>
  </div>
  <div className="">
   <h2>Welcome to xavier Tech - where creativity meets functionality! 🚀 Elevate your online presence with our expert web development and design services. Let's turn your vision into reality! ✨ </h2>
  </div>
</div>


</section>

    </div>
  )
}

export default Home
