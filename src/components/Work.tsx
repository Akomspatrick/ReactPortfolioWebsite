import React from 'react'
import WorkImg from '../assets/projects/workImg.jpeg'
import realestate from '../assets/projects/realestate.jpg' 

function Work() {
    const backgroudthemeColor='w-full md:h-screen text-gray-300 bg-[#0a192f]'
  return (
      <div id='work' className={backgroudthemeColor}>
          <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                  <p className='py-6'> Check out some of our recent works</p>
              </div>
              {/* Container*/}
              <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                  {/*Grid Item */}
                  <div style ={{backgroundImage:`url(${WorkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                      {/*Hover effect*/}
                      <div className='opacity-0 group-hover:opacity-100'>
                          
                              <span className=' text-2xl font-bold text-white tracking-wider'>
                                  REACT JS APPLICATON
                              </span>
                              <div className='pt-8 text-center'>
                                  <a href="/">
                                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                          DEMO
                                      </button>
                                  </a>
                                  <a href="/">
                                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                          CODE
                                      </button>
                                  </a>
                              </div>
                          
                      </div>
                  </div>
                  {/*Another grid item*/}
                  <div style ={{backgroundImage:`url(${realestate})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                      {/*Hover effect*/}
                      <div className='opacity-0 group-hover:opacity-100'>
                          
                              <span className=' text-2xl font-bold text-white tracking-wider'>
                                  REACT JS APPLICATON
                              </span>
                              <div className='pt-8 text-center'>
                                  <a href="/">
                                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                          DEMO
                                      </button>
                                  </a>
                                  <a href="/">
                                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                          CODE
                                      </button>
                                  </a>
                              </div>
                          
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Work