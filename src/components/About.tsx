import React from 'react'

function About() {
    const backgroudthemeColor='bg-[#0a192f]'+ 'w-full h-screen bg-[#0a192f] text-gray-100'
    return (
        <div id='about' className={ backgroudthemeColor} >
          <div className=' flex flex-col justify-center items-center w-full h-full'>
              <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
                  <div className='sm:text-right pb-8 pl-4'>
                      <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                          About</p>
                  </div>
                  <div></div>
                  </div>
                  <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                      <div className='sm:text-right text-4xl font-bold '>
                        <p>  Hi. I'm Patrick , nice to meet you. Please take a look around.</p>
                      </div>
                      
                    <div>An innovative, results-driven and detail-oriented professional with comprehensive experience in the field of information technology, encompassing programming and engineering. Highly efficient at engineering user-focused solutions, managing complex projects and improving user experience with special interests which include but not limited to Cloud Infrastructure, DevOps and Software delivery pipelines </div>
                  </div>
              </div>
          </div>
    
  )
}

export default About