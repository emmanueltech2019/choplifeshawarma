import Image from "next/image";
import heroImg from "./components/img/image.png"
import { Icon } from '@iconify/react';
import Link from "next/link";

export default function Home() {
  interface IconProps {
    icon: string;
    delay?: string;
  }
  return (
    <div>
      <section>
        <div className="md:max-w-[80%] m-auto p-6">
          <div className="hero md:flex items-center">
            <Image src={heroImg} alt="alt" className="mt-[10rem] md:w-[900px] h-full m-auto" />

            <div className="socials hidden lg:flex flex-col items-center gap-2 ms-[60px] ">
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
          </div>

          <div className="hero-text font-[400] lg:flex justify-between items-center lg:gap-[17rem] md:text-[14px] bg-transparent lg:relative -top-[70px]">
            <p>
              We’re thrilled to announce that ChopLifeShawarma is almost here! Very soon, you’ll be able to enjoy the most delicious, juicy, and flavorful shawarmas in PH City.
            </p>
            <br />
            <p className="md:w-[70%]">
              Made with the freshest ingredients and our secret blend of spices, every bite promises to be unforgettable.
            </p>
          </div>

          <div className="coming-soon text-center mt-[10rem] lg:-mt-9 mb-4">
            <div className="icons flex flex-col justify-center items-center my-3">
              <Icon icon="ep:arrow-up" className="animate-bounce -m-1 text-[20px]" />
              <Icon icon="ep:arrow-up" className="animate-bounce -m-1 text-[20px] delay-200" />
              <Icon icon="ep:arrow-up" className="animate-bounce -m-1 text-[20px] delay-600 "/>
              <p className="mt-3">COMING SOON</p>
            </div>
          </div>
        </div>  
      </section>
    </div>
  );
}
