import React from 'react'
import Javascript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import  Node from '../assets/node.png'
import Firebase from '../assets/firebase.png'
import AWS from '../assets/aws.png'
import Github from '../assets/github.png'

import dotnet from '../assets/dotnetimg.png'

import csharp from '../assets/csharp.png'
import Docker from '../assets/docker.png'

import SQLServer from '../assets/sqlserverImg.png'
 

const Skills = () => {
    const backgroudthemeColor='bg-[#0a192f] text-gray-300 w-full h-full'
  return (
      <div id='skills' className={backgroudthemeColor}>
          {/* Container*/}
          <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen'>
              <div>
                  <p className='text-4xl font-bold inline  border-b-4 border-pink-600 text-gray-300'>TECHNICAL ACUMEN</p>
                  <p className='py-4'>These are the technologies I've worked with</p>
              </div>

              <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                  <div className=' hover:scale-110 hover:rotate-45  duration-500 shadow-md shadow-[#c54b6d]'>
                      <img className='w-20 mx-auto' src={dotnet} alt ='.Net Core Icon'/>
                      <p className='my-4'>.Net Core</p>
                  </div>

                  <div className='shadow-md shadow-[#c54b6d] hover:rotate-45  hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={ReactImg} alt ='ReactImg Icon'/>
                      <p className='my-4'>React</p>
                  </div>
                  <div className='shadow-md shadow-[#c54b6d] hover:scale-110 hover:rotate-45  duration-500'>
                      <img className='w-20 mx-auto' src={Javascript} alt ='HTML Icon'/>
                      <p className='my-4'>Javascript</p>
                  </div>
                  <div className='shadow-md shadow-[#c54b6d] hover:rotate-45  hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={AWS} alt ='HTML Icon'/>
                      <p className='my-4'>AWS</p>
                  </div>
                  <div className='shadow-md shadow-[#c54b6d] hover:scale-110 hover:rotate-45  duration-500'>
                      <img className='w-20 mx-auto' src={Github} alt ='HTML Icon'/>
                      <p className='my-4'>Github</p>
                  </div>
                  <div className='shadow-md shadow-[#c54b6d] hover:scale-110  hover:rotate-45  duration-500'>
                      <img className='w-20 mx-auto' src={SQLServer} alt ='HTML Icon'/>
                      <p className='my-4'>SQLServer</p>
                  </div>
                  <div className='shadow-md shadow-[#c54b6d] hover:scale-110 hover:rotate-45  duration-500'>
                      <img className='w-20 mx-auto' src={Node} alt ='HTML Icon'/>
                      <p className='my-4'>Node</p>
                  </div>
                  <div className='shadow-md shadow-[#c54b6d] hover:scale-110 hover:rotate-45  duration-500'>
                      <img className='w-20 mx-auto' src={Docker} alt ='HTML Icon'/>
                      <p className='my-4'>Docker</p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Skills