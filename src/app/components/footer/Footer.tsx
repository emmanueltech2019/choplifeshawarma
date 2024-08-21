import React from 'react'
import Image from 'next/image'
import footerLogo from './img/image.png'
import Link from 'next/link'
import { Icon } from '@iconify/react';

function Footer() {
    return (
        <div>
            <section className='bg-[#fff]'>
                <div className='md:max-w-[80%] m-auto pt-5 p-5 lg:flex justify-between items-start'>
                    <header className='my-[3rem] lg:mt-[3rem]'>
                        <Image src={footerLogo} className='w-[87px] h-[53.06px]' alt="alt" />
                    </header>

                    <div className='lg:flex items-center justify-between w-[45%]'>
                        <div className='explore'>
                            <h3 className='text-[18px] font-[700] my-3'>Explore</h3>

                            <ul className='text-[18px] font-[400] leading-[50px] md:leading-[50px]'>
                                <li>Home</li>
                                <li>Menu</li>
                                <li>About Us</li>
                                <li>Pricing</li>
                                <li>Faq</li>
                            </ul>
                        </div>

                        <div className='company mt-[3rem]'>
                            <div>
                                <h3 className='text-[18px] font-[700] my-3'>Company</h3>

                                <ul className='text-[18px] font-[400] leading-[50px] md:leading-[55px]'>
                                    <li>Help & Support</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms of Service</li>
                                </ul>
                            </div>

                            <div className="socials mt-[4rem] mb-5">
                                <div className="socials flex items-center gap-5 ms-[60px] lg:ms-[0px]">
                                    <Link href="https://web.facebook.com/profile.php?id=61561081104975">
                                        <Icon icon="ic:baseline-facebook" className='text-[#000000] text-[22px] hover:text-[#D00000] transition-all ease-in-out duration-300'></Icon>
                                    </Link>
                                    <div className='bg-[#000000] h-[.7px] w-[30px]'>

                                    </div>
                                    <Link href="https://www.instagram.com/choplifeshawarma/">
                                        <Icon icon="mdi:instagram" className='text-[#fff] bg-black rounded-full p-1 text-[22px] hover:bg-[#D00000] transition-all ease-in-out duration-300'></Icon>
                                    </Link>
                                    <div className='bg-[#000000] h-[.7px] w-[30px]'>

                                    </div>
                                    <Link href="choplife@devemmy.com">
                                        <Icon icon="ic:baseline-mail" className='text-[#000000] text-[22px] hover:text-[#D00000] transition-all ease-in-out duration-300'></Icon>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer