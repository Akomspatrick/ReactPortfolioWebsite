import React from 'react'
import csharp from '../assets/csharp.png'
import nginx from '../assets/nginxImg.png'
import  Jenkins from '../assets/jenkinsImg.png'
import kuber from '../assets/kubernetesImg.png'
import Terra from '../assets/terraformImg.png'
import Html from '../assets/html.png'
import Firebase from '../assets/firebase.png'

import linuxImg from '../assets/linuxImg.png'

//import SQLServer from '../assets/sqlserverImg.png'
 

const Growingskills = () => {
    const backgroudthemeColor='bg-[#0a192f] text-gray-300 w-full h-full'
  return (
      <div id='skills' className={backgroudthemeColor}>
          {/* Container*/}
          <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen'>
              <div>
                  <p className='text-4xl font-bold inline  border-b-4 border-pink-600 text-gray-300'>Other Technologies </p>
                  <p className='py-4'>These are the technologies I'm familiar with</p>
              </div>

              <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                  <div className=' hover:scale-110 hover:rotate-45  duration-500 shadow-md shadow-[#c54b6d]'>
                      <img className='w-20 mx-auto' src={csharp} alt ='.Net Core Icon'/>
                      <p className='my-4'>CSharp</p>
                  </div>

                  <div className='shadow-md shadow-[#c54b6d] hover:rotate-45  hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={nginx} alt ='ReactImg Icon'/>
                      <p className='my-4'>NgInx</p>
                  </div>
                  <div className='shadow-md shadow-[#c54b6d] hover:scale-110 hover:rotate-45  duration-500'>
                      <img className='w-20 mx-auto' src={Jenkins} alt ='HTML Icon'/>
                      <p className='my-4'>Jenkins</p>
                  </div>
                  <div className='shadow-md shadow-[#c54b6d] hover:rotate-45  hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={kuber} alt ='HTML Icon'/>
                      <p className='my-4'>Kubernetes</p>
                  </div>
                  <div className='shadow-md shadow-[#c54b6d] hover:scale-110 hover:rotate-45  duration-500'>
                      <img className='w-20 mx-auto' src={linuxImg} alt ='HTML Icon'/>
                      <p className='my-4'>Linux</p>
                  </div>
                  <div className='shadow-md shadow-[#c54b6d] hover:scale-110  hover:rotate-45  duration-500'>
                      <img className='w-20 mx-auto' src={Terra} alt ='HTML Icon'/>
                      <p className='my-4'>Terraform</p>
                  </div>
                  <div className='shadow-md shadow-[#c54b6d] hover:scale-110 hover:rotate-45  duration-500'>
                      <img className='w-20 mx-auto' src={Html} alt ='HTML Icon'/>
                      <p className='my-4'>HTML</p>
                  </div>
                  <div className='shadow-md shadow-[#c54b6d] hover:scale-110 hover:rotate-45  duration-500'>
                      <img className='w-20 mx-auto' src={Firebase} alt ='HTML Icon'/>
                      <p className='my-4'>Firebase</p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Growingskills