"use client";
import React from 'react'
// import Link from 'next/link';
import { useRouter } from 'next/navigation'
import profileImg from '@/app/components/img/personImg.png'
import Image from 'next/image'
import { Icon } from '@iconify/react';

const Tspacing = "py-4 px-4 md:w-5/6 md:mx-auto"

export default function ProfileEdit() {
  const navigate = useRouter()
  return (
    <div className='mt-[7rem]'>
      <section>
        <header className={'pt-10 mpx-4 flex justify-end text-right ' + Tspacing}>
          <button title='back button' onClick={navigate.back} className='flex items-center text-2xl'><Icon icon="tabler:chevron-left"></Icon>Back</button>
        </header>

        <div className={Tspacing}>
          <div className={'bg-gradient-to-b from-[#D00000] to-[#6A0000] px-7 py-[50px] lg:px-[94px] lg:py-[103px] rounded-[27px] xl:rounded-[84px] text-white '}>
            <div className='flex justify-between items-center gap-12'>
              <h2 className='text-2xl lg:text-4xl xl:text-5xl flex flex-col relative'>
                <span className='w-[25px] md:w-[50px] h-[25px] md:h-[50px] rounded-full bg-white absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 xl:-translate-y-full flex items-center justify-center'>
                  <button title='edit'>
                    <Icon className='text-[#C50101] text-base md:text-xl xl:text-2xl' icon="fa-solid:pen"></Icon>
                  </button>
                </span>
                Micheal <span className='text-3xl lg:text-5xl xl:text-5xl'>Ozioma</span></h2>
              <div className='relative'>
                <span className='w-[25px] md:w-[50px] h-[25px] md:h-[50px] rounded-full bg-white absolute top-0 right-0 xl:translate-y-1/2 flex items-center justify-center'>
                  <button title='edit'>
                    <Icon className='text-[#C50101] md:text-xl xl:text-2xl' icon="fa-solid:pen"></Icon>
                  </button>
                </span>
                <div className="img min-w-[87px] lg:min-w-[124.82px] xl:min-w-[165.91px] min-h-[87px]  lg:min-h-[124.82px]xl:min-h-[92.91px] overflow-hidden rounded-full border-[3px] xl:border-[6px] border-white">
                  <Image src={profileImg} alt="alt" className='object-cover w-full h-full' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={"settings-section pt-10 lg:pt-24" + Tspacing}>
          <h2 className='text-sm lg:text-5xl pb-5 lg:pb-14'>Newer</h2>
          <div className="theme">
            <button className='text-lg lg:text-2xl py-8 lg:py-16 px-10 lg:px-[102px] mb-4 lg:mb-10 rounded-2xl lg:rounded-[62.3px] bg-[#D9D9D9] w-full text-left' title='Theme'>Theme</button>
          </div>

          <div className="notification">
            <button className='text-lg lg:text-2xl py-8 lg:py-16 px-10 lg:px-[102px] mb-4 lg:mb-10 rounded-2xl lg:rounded-[62.3px] bg-[#D9D9D9] w-full text-left' title='notification'>Notification</button>
          </div>

          <div className="delete-account">
            <button className='text-lg lg:text-2xl py-8 lg:py-16 px-10 lg:px-[102px] mb-4 lg:mb-10 rounded-2xl lg:rounded-[62.3px] bg-[#D9D9D9] w-full text-left' title='delete-account'>Delete Account</button>
          </div>
        </div>
      </section>
    </div>
  )
}
