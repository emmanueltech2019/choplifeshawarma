import React from 'react'
import teamMemberImg from '@/app/components/img/personImg.png'
import Image from 'next/image'

const TEAM = [
  {
    name: 'Emmanuel Lucky',
    img: teamMemberImg,
    role: 'Team Lead & Founder'
  },
  {
    name: 'Emmanuel Lucky',
    img: teamMemberImg,
    role: 'Team Lead & Founder'
  },
  {
    name: 'Emmanuel Lucky',
    img: teamMemberImg,
    role: 'Team Lead & Founder'
  },
  {
    name: 'Emmanuel Lucky',
    img: teamMemberImg,
    role: 'Team Lead & Founder'
  }
]

function page() {
  const Tspacing = "py-4 px-4 md:w-5/6 md:mx-auto"
  const carouselSpacing = "pl-4 md:w-11/12 md:ml-auto"
  return (
    <div>
      <section>
        <div className='mt-[7rem]'>
          <header className={'my-5 mb-[60px] px-4 md:mb-28 ' + Tspacing}>
            <h3 className='text-[22.58px] leading-[25.97px] font-[400]'>About</h3>
            <h3 className='mt-3 text-[30.08px] leading-[34.63px]'>Choplifeshawarwama</h3>
          </header>

          <div className={'band-story w-full ' + Tspacing}>
            <div className='band-img w-full h-[187px] md:h-[280px] lg:h-[450px] flex items-end relative p-7 px-16 md:px-20 lg:p-20 rounded-3xl lg:rounded-[5rem] overflow-hidden 
             before:content-[""] before:w-full before:h-full before:top-0 before:left-0 before:bg-gradient-to-b before:from-[#D00000] before:to-[#6A0000] before:opacity-70 before:z-0 before:absolute'>
              <h1 className='text-2xl md:text-6xl lg:text-8xl font-extrabold text-white z-10'>Brand Story</h1>
            </div>
          </div>

          <p className={'text-2xl leading-9 font-normal' + Tspacing}>
          ChopLifeShawarma started as a small thought in the heart of Port Harcourt. Our founder Emmanuel Lucky, was passionate about creating a taste sensation that would satisfy the cravings of the city&apos;s vibrant people. With a blend of traditional flavors and innovative twists, we set out to redefine the shawarma experience. Our journey has been filled with laughter, hard work, and a whole lot of shawarma. We&apos;re committed to bringing you the ultimate ChopLife experience, one bite at a time.
          </p>

          <div className={'eatShawama-story w-full ' + Tspacing}>
            <div className='eatShawama-img w-full h-[187px] md:h-[280px] lg:h-[430px] flex items-end relative p-7 px-10 md:px-20 lg:p-20 rounded-3xl lg:rounded-[5rem] overflow-hidden 
             before:content-[""] before:w-full before:h-full before:top-0 before:left-0 before:bg-gradient-to-b before:from-[#D00000] before:to-[#6A0000] before:opacity-70 before:z-0 before:absolute'>
              <h1 className='text-2xl md:text-6xl xl:text-8xl font-extrabold text-white z-10 w-2/3'>The Choplife Promise</h1>
            </div>
          </div>

          <p className={'text-2xl leading-9 font-normal' + Tspacing}>
          At ChopLifeShawarma, we&apos;re committed to delivering an exceptional experience. We promise to use only the freshest ingredients, prepare our shawarmas with care, and provide outstanding customer service. Your satisfaction is our top priority. We&apos;re also dedicated to supporting our community through Healthy standards. When you choose ChopLife, you&apos;re not just enjoying delicious food; you&apos;re supporting a brand that cares.
          </p>

          <div className={"theTeam mt-24 " + Tspacing}>
            <div className="meetTheTeam flex items-center justify-center px-[140px] py-10 rounded-full bg-gradient-to-b from-[#D00000] to-[#6A0000] mb-[30px]">
              <h1 className='text-2xl md:text-6xl xl:text-8xl font-extrabold text-white'>Meet The Team</h1>
            </div>

            <div className="team grid grid-cols-1 md:grid-cols-2 gap-[35px]">
              {
                TEAM.map(({name,img,role},index) => (
                  <div key={name + index} className='bg-gradient-to-b from-[#D00000] to-[#6A0000] px-7 py-8 xl:p-[67px] rounded-[27px] xl:rounded-[84px] text-white'>
                    <div className='flex items-center gap-12 pb-[15px] xl:pb-[77px]'>
                      <h2 className='text-2xl xl:text-[49.59px]'>{name}</h2>
                      <div className="img min-w-[61px] lg:min-w-[92.91px] xl:min-w-[124.82px] h-[61px] lg:h-[92.91px] xl:h-[124.82px] overflow-hidden rounded-full border-[3px] xl:border-[6px] border-white">
                        <Image src={img} alt="alt" className='object-cover w-full h-full' />
                      </div>
                    </div>
                    <p className='text-lg text-2xl'>{role}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page