import React, { useState}   from 'react'
import Logo from '../assets/mylogo.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const backgroudthemeColor='bg-[#0a192f]'
    return (
        <div  className='fixed w-full h-[80px] flex justify-between  items-center  px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img className='mt-20' src={Logo} alt='Logo Image here' style={{width:'200px'}}/> 
            </div>
            <ul className='hidden md:flex'>
                
                  <li>
                     <Link  to="home" smooth={ true} duration={500} > Home</Link>
                 </li>
                 <li>
                     <Link to="about" smooth={ true} duration={500} > About</Link>
                </li>
                <li>
                     <Link to="skills" smooth={ true} duration={500} > Skills</Link>
                </li>
                <li>
                     <Link to="work" smooth={ true} duration={500} > Work</Link>
                </li>
                <li>
                     <Link to="contact" smooth={ true} duration={500} > Contact</Link>
                 </li>

                
            </ul>
            {/*Hamburger*/}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/*Mobile Menu*/}
            
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen ' + {backgroudthemeColor} +' flex flex-col justify-center items-center'}>
                    <li className='py-6 text-4xl'> <Link to="about" smooth={ true} duration={500} > About</Link></li>
                    <li className='py-6 text-4xl'> <Link to="skills" smooth={ true} duration={500} > Skills</Link></li>
                    <li className='py-6 text-4xl'> <Link to="work" smooth={ true} duration={500} > Work</Link></li>
                    <li className='py-6 text-4xl'> <Link to="contact" smooth={ true} duration={500} > Contact</Link></li>
                    <li className='py-6 text-4xl'> <Link to="home" smooth={ true} duration={500} > Home</Link></li>
                </ul>
            {/*Social Icons*/}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/oladeji-akomolafe-1502a84b/'>LinkedIn<FaLinkedin size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-950'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://www.facebook.com/akomolafe.patrick'>Facebook<FaFacebook size={30} /></a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#33333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/Akomspatrick'>Github<FaGithub size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://drive.google.com/file/d/1jgfUiHAvP9xKpfWMTuQ0p0w0STVN_4ar/view?usp=drive_link'>Resume<BsFillPersonLinesFill size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='/'>Email<HiOutlineMail size={30} /></a>
                    </li>

                </ul>
            </div>
        </div>
    )
    
}
export default Navbar