'use client';
import React from 'react'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import profileImg from '@/app/components/img/personImg.png'
import Image from 'next/image'
import { Icon } from '@iconify/react';
import ShawamaCoke from '../components/img/shawama-coke.png'
import chickenShawarma from '@/app/components/img/chickenShawarma.png'
import beefShawarmaImg from '@/app/components/img/beefShawarma.png';

const Tspacing = "py-4 px-4 md:w-5/6 md:mx-auto"
const squareButtons = 'w-[20.24px] md:w-[41.31px] xl:w-[62.38px] h-[20.24px] md:h-[41.31px] xl:h-[62.38px] border-[0.78px] xl:border-[2.39px] border-[#000] rounded-[6.2px] md:rounded-[12.66px] xl:rounded-[19.12px] flex justify-center items-center'

export default function PageContent() {
  const [ellipsisState, setEllipsisState] = useState(false)
  const [chickenShawarmaCartState, setChickenShawarmaState] = useState(0);
  const [beefShawarmaCartState, setBeefShawarmaState] = useState(0)
  return (
    <div className='mt-[7rem]'>
      <section>
        <header className={'pt-10 mpx-4 ' + Tspacing}>
          <span className='flex relative'>
            <button title='ellipsis-button' onClick={() => {setEllipsisState(prev => !prev)}} onBlur={() => {setEllipsisState(prev => false)}}>
              <Icon icon="uis:ellipsis-v" width={29}></Icon>
            </button>
            <div className={"menu rounded-[10px] shadow-2xl overflow-hidden absolute top-1/2 left-6 w-max p-5 -translate-y-1/2 transition-all duration-300 " + (ellipsisState ? 'opacity-100 select-auto':'opacity-0 select-none')}>
              <Link href='/profile/profile-edit' className='text-[14.86px] md:text-[20px] px-[20px] py-[10px]'>More Settings</Link>
            </div>
          </span>
        </header>

        <div className={Tspacing}>
          <div className={'bg-gradient-to-b from-[#D00000] to-[#6A0000] px-7 py-[50px] lg:px-[94px] lg:py-[103px] rounded-[27px] xl:rounded-[84px] text-white '}>
            <div className='flex justify-between items-center gap-12'>
              <h2 className='text-2xl lg:text-4xl xl:text-5xl flex flex-col'>Micheal <span className='text-3xl lg:text-5xl xl:text-5xl'>Ozioma</span></h2>
              <div className="img min-w-[87px] lg:min-w-[124.82px] xl:min-w-[165.91px] min-h-[87px]  lg:min-h-[124.82px]xl:min-h-[92.91px] overflow-hidden rounded-full border-[3px] xl:border-[6px] border-white">
                <Image src={profileImg} alt="alt" className='object-cover w-full h-full' />
              </div>
            </div>
          </div>
        </div>

        <div className={Tspacing} >
          <h1 className='pt-5 xl:pt-[100px] pb-[30px] xl:pb-[60px] text-xs md:text-[43.15px] font-light'>Shawarma Cart</h1>

          <div className="cart-card mb-[25px] pt-[10px] md:pt-[19px] xl:pt-7 pb-5 md:pb-[34px] xl:pb-12 pl-[10px] md:pl-[20px] pr-[15px] md:pr-[31.5px] xl:px-12 border-[0.78px] lg:border-[2.39px] border-[#000] rounded-[10.08px] md:rounded-[36.19px] xl:rounded-[62.3px] flex justify-between items-end">
            <div className="col">
              <div className="shawamaCard flex gap-[14px] xl:gap-[33px]">
                <div className="cardImg bg-[#D00000] w-[134.15px] md:w-[203px] xl:w-[271.85px] h-[83.74px] md:h-[126.725px] xl:h-[169.71px] rounded-[10.08px] md:rounded-[17.95px] xl:rounded-[25.82px]">
                  <Image src={chickenShawarma} alt="alt" className='w-full object-cover -translate-y-3' />
                </div>
                <div className="card-title text-sm md:text-lg xl:text-2xl pt-[10px]">
                  <div>Chicken</div>
                  <div>Shawarma</div>
                  <div className='text-xs md:text-xl xl:text-3xl mt-1 xl:mt-2 font-extrabold'>#3000</div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="layer flex gap-1 md:gap-2 xl:gap-3 pt-[10px]">
                <button className={"minusButton text-xl md:text-4xl xl:text-6xl font-thin leading-[0] cursor-pointer " + squareButtons} onClick={() => setChickenShawarmaState(prev => prev ? prev - 1 : 0)}>-</button>
                <span className={"viewLayer text-[10.86px] md:text-[22.16px] xl:text-[33.46px] leading-[0] font-bold " + squareButtons}>{chickenShawarmaCartState}</span>
                <button className={"addButton text-xl md:text-4xl xl:text-6xl font-thin leading-[0] cursor-pointer " + squareButtons} onClick={() => setChickenShawarmaState(prev => prev + 1)}>+</button>
              </div>
            </div>
          </div>

          <div className="cart-card pt-[10px] md:pt-[19px] xl:pt-7 pb-5 md:pb-[34px] xl:pb-12 pl-[10px] md:pl-[20px] pr-[15px] md:pr-[31.5px] xl:px-12 border-[0.78px] lg:border-[2.39px] border-[#000] rounded-[10.08px] md:rounded-[36.19px] xl:rounded-[62.3px] flex justify-between items-end">
            <div className="col">
              <div className="shawamaCard flex gap-[14px] xl:gap-[33px]">
                <div className="cardImg bg-[#F3AD26] w-[134.15px] md:w-[203px] xl:w-[271.85px] h-[83.74px] md:h-[126.725px] xl:h-[169.71px] rounded-[10.08px] md:rounded-[17.95px] xl:rounded-[25.82px]">
                  <Image src={beefShawarmaImg} alt="alt" className='w-full object-cover -translate-y-5' />
                </div>
                <div className="card-title text-sm md:text-lg xl:text-2xl pt-[10px]">
                  <div>Beef</div>
                  <div>Shawarma</div>
                  <div className='text-xs md:text-xl xl:text-3xl mt-1 xl:mt-2 font-extrabold'>#3000</div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="layer flex gap-1 md:gap-2 xl:gap-3 pt-[10px]">
                <button className={"minusButton text-xl md:text-4xl xl:text-6xl font-thin leading-[0] cursor-pointer " + squareButtons} onClick={() => setBeefShawarmaState(prev => prev ? prev - 1 : 0)}>-</button>
                <span className={"viewLayer text-[10.86px] md:text-[22.16px] xl:text-[33.46px] leading-[0] font-bold " + squareButtons}>{beefShawarmaCartState}</span>
                <button className={"addButton text-xl md:text-4xl xl:text-6xl font-thin leading-[0] cursor-pointer " + squareButtons} onClick={() => setBeefShawarmaState(prev => prev + 1)}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
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

