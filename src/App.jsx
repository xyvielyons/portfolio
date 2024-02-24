import React from 'react'
import { FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";
import  Header  from './Header';
import Home from './Home';
import About from './About'
import Skills from './Skills';
import Services from './Services';
import Contact from './Contact';
export default function App() {
  return (
    <div className='bg-primarycolor min-h-screen'>
        <Header></Header>

        <main className=' bg-primarycolor text-white mx-auto'>
          <Home></Home>
          <About></About>


        </main>
<Skills></Skills>
<Services></Services>
<Contact></Contact>



    </div>
  )
}
