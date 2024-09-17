import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react';
import ShawamaCoke from '../components/img/shawama-coke.png'

export default function page() {
  const Tspacing = "py-4 px-4 md:w-5/6 md:mx-auto"
  return (
    <div className='mt-[7rem]'>
      <section>
      <header className={'pt-10 mb-5 px-4 md:mb-20 ' + Tspacing}>
            <h3 className='text-[22.58px] leading-[25.97px] font-[400]'>Frequently</h3>
            <h3 className='mt-3 text-[30.08px] leading-[34.63px]'>Asked Questions</h3>
          </header>

          <div className={'band-story w-full ' + Tspacing}>
            <div className='band-img w-full h-[187px] md:h-[280px] lg:h-[450px] flex items-end relative p-7 px-16 md:px-20 lg:p-20 rounded-3xl lg:rounded-[5rem] overflow-hidden 
             before:content-[""] before:w-full before:h-full before:top-0 before:left-0 before:bg-gradient-to-b before:from-[#D00000] before:to-[#6A0000] before:opacity-70 before:z-0 before:absolute'>
              <h1 className='text-2xl md:text-6xl lg:text-8xl font-extrabold text-white z-10'>Faq</h1>
            </div>
          </div>

          <p className={'text-2xl leading-9 font-normal pt-3 lg:pt-10 pb-10 lg:pb-20 ' + Tspacing}>
          ChopLifeShawarma started as a small thought in the heart of Port Harcourt. Our founder Emmanuel Lucky, was passionate about creating a taste sensation that would satisfy the cravings of the city&apos;s vibrant people. With a blend of traditional flavors and innovative twists, we set out to redefine the shawarma experience. Our journey has been filled with laughter, hard work, and a whole lot of shawarma. We&apos;re committed to bringing you the ultimate ChopLife experience, one bite at a time.
          </p>

          <div className={'eatShawama-story w-full ' + Tspacing}>
            <div className='eatShawama-img w-full h-[187px] md:h-[280px] lg:h-[430px] flex items-end relative p-7 px-10 md:px-16 lg:p-20 rounded-3xl lg:rounded-[5rem] overflow-hidden 
             before:content-[""] before:w-full before:h-full before:top-0 before:left-0 before:bg-gradient-to-b before:from-[#D00000] before:to-[#6A0000] before:opacity-70 before:z-0 before:absolute'>
              <h1 className='text-2xl md:text-5xl xl:text-8xl font-extrabold text-white z-10'>Terms Of Service</h1>
            </div>
          </div>

          <p className={'text-2xl leading-9 font-normal pt-3 lg:pt-10 ' + Tspacing}>
          At ChopLifeShawarma, we&apos;re committed to delivering an exceptional experience. We promise to use only the freshest ingredients, prepare our shawarmas with care, and provide outstanding customer service. Your satisfaction is our top priority. We&apos;re also dedicated to supporting our community through Healthy standards. When you choose ChopLife, you&apos;re not just enjoying delicious food; you&apos;re supporting a brand that cares.
          </p>

          <div className={'eatShawama-story w-full ' + Tspacing}>
            <div className='eatShawama-img w-full h-[187px] md:h-[280px] lg:h-[430px] flex items-end relative p-7 px-10 md:px-16 lg:p-20 rounded-3xl lg:rounded-[5rem] overflow-hidden 
             before:content-[""] before:w-full before:h-full before:top-0 before:left-0 before:bg-gradient-to-b before:from-[#D00000] before:to-[#6A0000] before:opacity-70 before:z-0 before:absolute'>
              <h1 className='text-2xl md:text-5xl xl:text-8xl font-extrabold text-white z-10'>Help & Support</h1>
            </div>
          </div>

          <p className={'text-2xl leading-9 font-normal pt-3 lg:pt-10 ' + Tspacing}>
          At ChopLifeShawarma, we&apos;re committed to delivering an exceptional experience. We promise to use only the freshest ingredients, prepare our shawarmas with care, and provide outstanding customer service. Your satisfaction is our top priority. We&apos;re also dedicated to supporting our community through Healthy standards. When you choose ChopLife, you&apos;re not just enjoying delicious food; you&apos;re supporting a brand that cares.
          </p>
      </section>

      <section className='coming-soon mt-16 md:mt-20'>
        <div className={'title flex flex-col items-center gap-[15px]'}>
          <h1>COMING SOON!!</h1>
          <div className="arrow flex items-center flex-col gap-0 text-lg font-bold w-full h-full">
            <Icon className='m-0' icon="tabler:chevron-down"></Icon>
            <Icon className='-mt-2' icon="tabler:chevron-down"></Icon>
            <Icon className='-mt-2' icon="tabler:chevron-down"></Icon>
          </div>
        </div>

        <div className={"coming-soon-card mt-[30px] md:mt-[40px] " + Tspacing}>
          <div className="card flex items-center bg-gradient-to-b from-[#D00000] to-[#6A0000] rounded-3xl">
            <div className="image -mt-6">
              <Image src={ShawamaCoke} className='object-cover w-[301px] h-[217px] lg:w-[396.89px] lg:h-[283.88px]' alt="alt" />
            </div>
            <p className='md:text-2xl lg:text-4xl text-white font-black mx-auto bg-[none] bg-none'>SHAWARMA + COKE + CHIPS</p>
          </div>
        </div>

        <p className={'mt-[30px] text-[18px] md:text-[20.55px]' + Tspacing}>Pre order Now! and follow us for more updates.</p>
      </section>
    </div>
  )
}
