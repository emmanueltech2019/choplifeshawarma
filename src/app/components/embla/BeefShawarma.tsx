"use client"
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './carousel.css';
import { Icon } from '@iconify/react';
import { BeefCarousel } from './CarouselObj';


const BeefShawarma: React.FC = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  // useEffect(() => {
  //     if (emblaApi) {
  //         // You can use emblaApi here if needed

  //     }
  // }, [emblaApi]);

  return (
    <div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {
            BeefCarousel.map((item) => (
              <div className="embla__slide" key={item.id}>
                <div className='bg-[#F3AD26] h-[108px] rounded-[13px]'>
                  {item.image}
                </div>

                <div className='mt-9 pb-[1rem] flex justify-between items-end gap-10'>
                  <div>
                    {item.name}
                    <h4 className='font-[700] text-[14px] leading-[22px] mt-3'>{item.price}</h4>
                  </div>
                  <div>
                    <Icon icon="vaadin:plus-circle" className='text-[39px] border border-[#000000] rounded-[8px] p-2'></Icon>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default BeefShawarma