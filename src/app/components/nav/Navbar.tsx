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
      <section className='fixed top-0 w-full px-4 pt-2 z-40 bg-[#fff]'>
        <div className='md:w-5/6 m-auto flex justify-between items-center'>
          <header className='flex justify-between items-center w-full flex-1'>
            <div className="logo">
              <Image src={logoImg} alt="alt" className='w-[141.35px] h-[85.41px]' width={100} height={58.9} />
            </div>

            <div className="toggle lg:hidden">
              <Icon icon={toggle ? "carbon:close-outline" : "ic:round-menu"} className='text-[30px] cursor-pointer' onClick={handleToggle}></Icon>
            </div>
          </header>

          <nav className={toggle ? 'absolute right-4 top-[80px] p-6 w-[301px] h-[530.01px] bg-[#fff] shadow-md rounded-3xl flex flex-col items-center transition-all ease-in-out duration-500 z-50' : 'absolute lg:static -right-[100%] top-[80px] p-6 lg:p-0 w-[301px] lg:w-full h-[530.01px] lg:h-auto bg-[#fff] lg:bg-none shadow-md lg:shadow-none rounded-3xl flex flex-col flex-[2] items-center lg:items-end transition-all ease-in-out duration-500 z-50'} onBlur={() => {setToggle(false)}}>

            <ul className='lg:flex gap-9 text-[16px] text-[#6D6D6D] font-[400] leading-[50px] text-right my-5 lg:my-0'>
              <li className='hover:text-[#D00000] cursor-pointer transition duration-500 ease-in-out'><Link href="/" onFocus={() => {setToggle(false)}}>Home</Link></li>
              <li className='hover:text-[#D00000] cursor-pointer transition duration-500 ease-in-out'><Link href="/menu" onFocus={() => {setToggle(false)}}>Menu</Link></li>
              <li className='hover:text-[#D00000] cursor-pointer transition duration-500 ease-in-out'><Link href="/about" onFocus={() => {setToggle(false)}}>About Us</Link></li>
              <li className='hover:text-[#D00000] cursor-pointer transition duration-500 ease-in-out'><Link href="/faq" onFocus={() => {setToggle(false)}}>FAQ</Link></li>
              <li className='hidden lg:block '><button className='text-[#fff] bg-[#D00000] px-[10px] rounded-[20px] shadow-md shadow-[#00000049] hover:text-[#000] hover:bg-[#FFDB16] cursor-pointer transition duration-450 ease-in-out'>Contact Us</button></li>
            </ul>

            <div className="socials flex flex-col items-center gap-2 ms-[60px] lg:hidden">
              <Link target="_blank" href="https://web.facebook.com/profile.php?id=61561081104975">
                <Icon icon="ic:baseline-facebook" className='text-[#000000] text-[22px] hover:text-[#D00000] transition-all ease-in-out duration-300'></Icon>
              </Link>
              <div className='bg-[#000000] h-[60px] w-[.7px]'>

              </div>
              <Link target="_blank" href="https://www.instagram.com/choplifeshawarma/">
                <Icon icon="mdi:instagram" className='text-[#fff] bg-black rounded-full p-1 text-[22px] hover:bg-[#D00000] transition-all ease-in-out duration-300'></Icon>
              </Link>
              <div className='bg-[#000000] h-[60px] w-[.7px]'>

              </div>
              <Link target="_blank" href="mailto:choplife@devemmy.com">
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