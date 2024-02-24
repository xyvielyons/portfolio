import React from 'react'
import { FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div>
        <section className='w-full relative  bg-[#2C2C37] top-7 scroll-mt-32'id="About">
          <div className='mx-auto max-w-5xl pt-10'>
            <div className='flex justify-center'>
            <h1 className='text-4xl font-bold mb-8 text-white md:text-5xl'>About <span className='text-secondarycolor'>Me</span></h1>
            </div>


            <div className="flex gap-6 pt-10 flex-col md:flex-row">
            <div className="border-4 flex justify-center items-center border-none">
              <div className=" border-secondarycolor border-4 w-6/12 h-50  md:w-8/12">
              <div className=" border-4 w-7/11 h-full translate-x-[-2rem] translate-y-[-2rem] overflow-hidden border-none">
               <img src="me2.jpg" className="" alt="" />
                
              </div>
                
              </div>
            </div>

            <div className="p-5">
              <h1 className='text-3xl font-bold pt-10 pb-8'>My name is <span className='text-secondarycolor lg:text-4xl'>Xyvie Lyons</span></h1>
              <p className='text-md md:text-lg'>Crafting digital dreams into seamless reality! I'm Xyvie Lyons, a Full-Stack Web Developer and UX/UI Designer. With pixel-perfect precision and a passion for innovation, I transform ideas into captivating digital experiences. Let's collaborate and create something extraordinary for your brand. Let's build brilliance together!</p>

              <div className="pt-10 flex flex-col">
                <h2 className='text-xl'>Follow Me</h2>
                <hr className='text-secondarycolor bg-white p-0.5 outline-none border-none w-28 mt-3 rounded-full ml-4'/>
                <div className='inline-flex mt-4'>
                <a href="" className=' ml-2  text-3xl hover:text-secondarycolor'><FaInstagram /></a>
               <a href="" className=' ml-2  text-3xl hover:text-secondarycolor'><FaLinkedin /></a>
               <a href="" className=' ml-2  text-3xl hover:text-secondarycolor'><FaGithub /></a>

                </div>
               


              </div>

            </div>

            


            </div>


          </div>

        </section>
    </div>
  )
}

export default About