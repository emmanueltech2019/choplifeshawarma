import React from 'react'
import Carousel from '../components/embla/Carousel'
import VeggieShawarma from '../components/embla/VeggieShawarma'
import BeefShawarma from '../components/embla/BeefShawarma'
import SpicyShawarma from '../components/embla/SpicyShawarma'
import { Icon } from '@iconify/react';
import ShawamaCoke from '../components/img/shawama-coke.png'
import Image from 'next/image';

function MenuContent() {

  const titleSpacing = "py-4 px-4 md:w-5/6 md:mx-auto"
  const carouselSpacing = "pl-4 md:w-11/12 md:ml-auto"
  

  return (
    <div className='page'>
      <section className='menu-contanier mt-[7rem]'>
        <div className='menu-content'>
          <header className='my-5 mb-[60px] px-4 md:mb-28 md:w-5/6 md:mx-auto'>
            <h3 className='text-[22.58px] leading-[25.97px] font-[400]'>Explore</h3>
            <h3 className='text-[30.11px] leading-[34.63px]'>Our menu</h3>
          </header>

          <div className="chicken">
            <div className={'title flex justify-between items-center ' + titleSpacing}>
              <h4>Chicken Shawarma</h4>
              <h4>See all</h4>
            </div>

            <div className={"carousel " + carouselSpacing}>
              <Carousel />
            </div>
          </div>

          <div className="veggie mt-[3rem]">
            <div className={'flex justify-between items-center ' + titleSpacing}>
              <h4>Veggie Shawarma</h4>
              <h4>See all</h4>
            </div>

            <div className={"carousel " + carouselSpacing}>
              <VeggieShawarma />
            </div>
          </div>

          <div className="beef mt-[3rem]">
            <div className={'title flex justify-between items-center ' + titleSpacing}>
              <h4>Beef Shawarma</h4>
              <h4>See all</h4>
            </div>

            <div className={"carousel " + carouselSpacing}>
              <BeefShawarma />
            </div>
          </div>

          <div className="spicy mt-[3rem]">
            <div className={'title flex justify-between items-center ' + titleSpacing}>
              <h4>Spicy Shawarma</h4>
              <h4>See all</h4>
            </div>

            <div className={"carousel " + carouselSpacing}>
              <SpicyShawarma />
            </div>
          </div>
        </div>
      </section>
      <section className='coming-soon mt-[60px]'>
        <div className='title flex flex-col items-center gap-[15px]'>
          <h1>COMING SOON!!</h1>
          <aside className="arrow flex flex-col gap-0 text-lg font-bold">
            <Icon className='m-0' icon="tabler:chevron-down"></Icon>
            <Icon className='-mt-2' icon="tabler:chevron-down"></Icon>
            <Icon className='-mt-2' icon="tabler:chevron-down"></Icon>
          </aside>
        </div>

        <div className={"coming-soon-card mt-40 " + titleSpacing}>
          <div className="card flex items-center bg-gradient-to-b from-[#D00000] to-[#6A0000] rounded-3xl">
            <div className="image -mt-6">
              <Image src={ShawamaCoke} className='object-cover w-[301px] h-[217px] lg:w-[396.89px] lg:h-[283.88px]' alt="alt" />
            </div>
            <p className='md:text-2xl lg:text-4xl text-white font-black mx-auto'>SHAWARMA + COKE + CHIPS</p>
          </div>
        </div>

        <p className={'mt-[30px] text-[18px] md:text-[20.55px]' + titleSpacing}>Pre order Now! and follow us for more updates.</p>
      </section>
    </div>
  )
}

export default MenuContent