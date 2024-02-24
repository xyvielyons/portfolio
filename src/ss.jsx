import React from 'react'

export default function App() {
  return (
    <div className=" scroll-smooth min-h-screen bg-slate-50 dark:bg-black dark:text-white ">
      <header className='bg-teal-700 text-white sticky top-0 z-10'>
         
         <section className='max-w-4xl mx-auto p-4 flex justify-between items-center'>
           <h1 className='text-3xl font-medium'>
             <a href="#hero">🚀Acme Rockets</a>
           </h1>
           <div>
            <button id="hamburger-button" className='text-3xl md:hidden cursor-pointer'>&#9776;</button>
            <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
              <a href="#rockets" className='hover:opacity-90'>Our Rockets</a>
              <a href="#testimonials" className='hover:opacity-90'>Testimonials</a>
              <a href="#contact" className='hover:opacity-90'>Contact Us</a>

            </nav>
           </div>

         </section>
         <section id="mobile-menu" className="absolute top-0 bg-black w-full text-5xl flex-col justify-content-center origin-top animate-open-menu hidden">
          <button className="text-8xl self-end px-6">
             &times;
          </button>
          <nav className="flex flex-col min-h-screen items-center py-8" aria-label="mobile">
            <a href="#hero" className='w-full text-center py-6 hover:opacity-90'>Home</a>
            <a href="#rockets" className='w-full text-center py-6 hover:opacity-90'>rockets</a>
            <a href="#testimonials" className='w-full text-center py-6 hover:opacity-90'>testimonials</a>
            
          </nav>

         </section>

      </header>

      <main className="max-w-4xl mx-auto ">
        <section id="hero" className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height">
               <article className='sm:w-1/2'>
                    <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">We Boldly Go <span className='text-indigo-700 dark:text-indigo-300'>where No Rocket</span>Has Gone Before....</h2>
                    <p className='max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400'>
                      We're building rockets for the next century today. From the moon to mars,jupiter and beyond...
                    </p>
                    <p className='max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400'>Think Acme Rockets </p>
               </article>
               <img className="w-1/2" src="rocketdab.png" alt="rocket dab" />
        </section>
        <hr className='mx-auto bg-black dark:bg-white w-1/2'/>

      <section id="rockets" className='p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height'>
        <h2 className='text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white'>Our Rockets</h2>
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
          <li className='w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-3xl shadow-xl dark:bg-black'>
            <img src="rocketman.png" alt="" className="w-1/2 mb-6" />
            <h3 className='text-center text-slate-900 dark:text-white'>Explorer</h3>
            <p className='mt-2 hidden sm:block text-3xl  text-center text-slate-500 dark:text-slate-400'>$</p>
            <p className='sm:hidden mt-2 text-2xl text-center text-slate-500 dark:text-slate-400'>Affordable Exploration</p>

          </li>
          <li className='w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-3xl shadow-xl dark:bg-black'>
            <img src="rocketride.png" alt="" className="w-1/2 mb-6" />
            <h3 className='text-center text-slate-900 dark:text-white'>Adventure</h3>
            <p className='mt-2 hidden sm:block text-3xl  text-center text-slate-500 dark:text-slate-400'>$$</p>
            <p className='sm:hidden mt-2 text-2xl text-center text-slate-500 dark:text-slate-400'>Affordable Exploration</p>

          </li>
          <li className='w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-3xl shadow-xl dark:bg-black'>
            <img src="rocketlaunch.png" alt="" className="w-1/2 mb-6" />
            <h3 className='text-center text-slate-900 dark:text-white'>Infinity</h3>
            <p className='mt-2 hidden sm:block text-3xl  text-center text-slate-500 dark:text-slate-400'>$$$</p>
            <p className='sm:hidden mt-2 text-2xl text-center text-slate-500 dark:text-slate-400'>Luxury star ship</p>

          </li>
          
        </ul>

      </section>



      <hr className='mx-auto bg-black dark:bg-white w-1/2'/>

      <section className='p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height' id='testimonials'>
        <h2 className='text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white'>Our Testimonials</h2>
        <figure className='my-12'>
          <blockquote className='bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative'>
            <p className='text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-[\201C] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, harum laudantium eius excepturi libero est culpa, cupiditate praesentium, facere officiis expedita? Magni maxime possimus totam esse itaque delectus tempore deleniti.</p>

          </blockquote>

        </figure>

      </section>
      <hr className='mx-auto bg-black dark:bg-white w-1/2'/>

      <section className='p-6 my-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height' id="contact">
        <h2 className='text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white'>Contact Us</h2>

        <form action="" className='max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4 '>
          <label for="subject">Subject:</label>
          <input type="text" id='subject' required minLength="3" maxLength="60" placeholder='your subject' className='w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none' />
         <label for="message">Message:</label>
         <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message' required className='w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none'></textarea>
        </form>
        <button className='mt-4 bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none'>
          Submit
        </button>

      </section>
      </main>
      <footer id='footer' className='bg-teal-700 text-white text-xl'>
        <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
          <h2>@2024 all rights reserved</h2>

        </section>

      </footer>
     
      
    </div>
    )
}
