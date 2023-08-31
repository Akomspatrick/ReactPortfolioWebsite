import React from 'react'

function Contact() {
    const backgroudthemeColor= 'w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'

  return (
      <div id='contact' className={backgroudthemeColor}>
          <form method='POST' action='https://getform.io/f/f9c8a9ee-0528-4cd0-a346-cda0fcc2f5bc' className=' flex flex-col max-w-[600px] w-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-white' > Contact</p>
                  <p className='text-gray-300 py-4'> SUbmit the form below or sent me an email-akomspatrick@yahoo.com</p>
              </div>
              <input className='bg-[#ccd6f6]'  type="text" placeholder='Name' name='name' />
              <input className='my-4 p-2 bg-[#ccd6f6]'  type="email" placeholder='Email' name='email'/>
              <textarea className='bg-[#ccd6f6 p-2]' name='message' rows={10}></textarea>
              <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
          </form>
      </div>
  )
}

export default Contact