import React from 'react'
import { useState } from 'react'
import {close, logo, menu} from "../assets"
import {navLinks} from "../constants"
const Navbar = () => {
const [toggle, setToggle] = useState(false)
  
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar '>
        <img src={logo} alt="hoobank" className='w-[124px] h-[32px]' />

        <ul className='list-none sm:flex hidden justify-end flex-1 items-center'>
          {navLinks.map((nav, index) =>(
            <li key={nav.id} className={`font-poppins font-normal text-[16px] cursor-pointer text-white  ${index === navLinks.length - 1 ? "mr-0" : "mr-10" }`}>
              <a href={nav.id}>{nav.title}</a>
            </li>
          ))}
        </ul>


        {/* Mobile navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="toggle" className='w-[28px] h-[28px] object-contain ' onClick={() => setToggle((prev) =>!prev)}/>


          <div className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar` }>
          <ul className='list-none flex flex-col justify-end flex-1 items-center'>
          {navLinks.map((nav, index) =>(
            <li key={nav.id} className={`font-poppins font-normal text-[16px] cursor-pointer text-white  ${index === navLinks.length - 1 ? "mr-0" : "mb-4" }`}>
              <a href={nav.id}>{nav.title}</a>
            </li>
          ))}
        </ul>
          </div>
        </div>
        </nav>
  )
}

export default Navbar