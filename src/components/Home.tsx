import React from 'react'
import {HiArrowNarrowRight}  from 'react-icons/hi'
const Home = () => {
    const backgroudthemeColor='w-full h-screen bg-[#0a192f]'
  return (
      <div className={ backgroudthemeColor}>
          {/* Container*/}
          <div  id='home' className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    
                  <p className='text-pink-500'>Hi, my name is </p>
                  
              <h1 className='mb-8 text-4xl sm:text-5xl font-bold text-[#ccd6f6]'>
                  <span className='border-b-4 border-pink-600 border-dotted'>
                  Oladeji Patrick 
              </span>
                 
              </h1>
              <h2 className='text-4xl sm:text-4xl font-bold text-[#8892b0]'>I am a Full Stack Engineer.</h2>
              <h2>name='home'</h2>
              <h2 className='text-[#8892b0] py-4 max-w-[700px]'> An innovative, results-driven and detail-oriented professional
                  with comprehensive experience in the field of information
                  technology, encompassing programming and engineering.
                  I'm highly efficient at engineering user-focused solutions,
                  managing complex projects and improving user experience
                  with special interests which include but not limited to
                  Cloud Infrastructure,
                  DevOps and Software delivery pipelines
              </h2>
              <div>
                  <button className='text-white group border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-900'>Check out my works
                     
                      <span className='group-hover:rotate-90 duration-300'>
                          <HiArrowNarrowRight className='ml-3' />
                          
                      </span>
                  </button>
              </div>
          </div>
      
      </div>
  )
}

export default Home