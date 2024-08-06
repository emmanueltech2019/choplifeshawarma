"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import logoImg from './img/image.png'
import { Icon } from '@iconify/react';
import Link from 'next/link';

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div>
      <section className='fixed w-full px-4 pt-2 z-40 bg-[#fff] md:bg-transparent'>
        <div className='md:max-w-[80%] m-auto flex justify-between items-center'>
          <header className='flex items-center justify-between w-full'>
            <div className="logo">
              <Image src={logoImg} alt="alt" className='w-[141.35px] h-[85.41px]' width={100} height={58.9} />
            </div>

            <div className="toggle lg:hidden">
              <Icon icon={toggle ? "carbon:close-outline" : "ic:round-menu"} className='text-[30px] cursor-pointer' onClick={handleToggle}></Icon>
            </div>
          </header>

          <nav className={toggle ? 'absolute right-4 top-[80px] p-6 w-[301px] h-[530.01px] bg-[#fff] shadow-md rounded-3xl flex flex-col items-center transition-all ease-in-out duration-500' : 'absolute lg:static -right-[100%] top-[80px] p-6 lg:p-0 w-[301px] lg:w-full h-[530.01px] lg:h-auto bg-[#fff] lg:bg-none shadow-md lg:shadow-none rounded-3xl flex flex-col items-center lg:items-end transition-all ease-in-out duration-500'}>

            <ul className='lg:flex gap-9 text-[16px] text-[#6D6D6D] font-[400] leading-[50px] text-right my-5 lg:my-0'>
              <li className='cursor-pointer flex items-center gap-3 lg:gap-6 hover:text-[#D00000] transition-all ease-in-out duration-300'><Icon icon="dashicons:lock" className='text-[20px] hover:text-[#D00000] transition-all ease-in-out duration-300'></Icon>Home</li>
              <li className='cursor-pointer hover:text-[#D00000] transition-all ease-in-out duration-300'>Menu</li>
              <li className='cursor-pointer hover:text-[#D00000] transition-all ease-in-out duration-300'>About Us</li>
              <li className='cursor-pointer hover:text-[#D00000] transition-all ease-in-out duration-300'>FAQ</li>
              <li className='cursor-pointer hidden lg:block '><button className='text-[#fff] bg-[#D00000] px-[10px] rounded-[20px] shadow-md shadow-[#00000062] hover:text-[#FFDB16] transition-all ease-in-out duration-300'>Contact Us</button></li>
            </ul>

            <div className="socials flex flex-col items-center gap-2 ms-[60px] lg:hidden">
            <Link href="/">
                <Icon icon="ic:baseline-facebook" className='text-[#000000] text-[22px] hover:text-[#D00000] transition-all ease-in-out duration-300'></Icon>
              </Link>
              <div className='bg-[#000000] h-[60px] w-[.7px]'>

              </div>
              <Link href="/">
                <Icon icon="mdi:instagram" className='text-[#fff] bg-black rounded-full p-1 text-[22px] hover:bg-[#D00000] transition-all ease-in-out duration-300'></Icon>
              </Link>  
              <div className='bg-[#000000] h-[60px] w-[.7px]'>

              </div>
              <Link href="/">
                <Icon icon="ic:baseline-mail" className='text-[#000000] text-[22px] hover:text-[#D00000] transition-all ease-in-out duration-300'></Icon>
              </Link>
            </div>
          </nav>
        </div>
      </section>
    </div>
  )
}

export default Navbar