import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <>
      <Navbar/>
      <div className='blue-background flex w-full  items-center'>
        <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
          <div className="flex flex-1 justify-start items-start flex-col md:mr-10">

            <h1 className='font-bold text-white text-2xl md:text-3xl xl:text-4xl mt-10'> Crypto Transaction should be <br /> Simple, Secure and Fast.</h1>
            <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
              Explore the crypto world. Buy and sell cryptocurrencies and enjoy safe and fast transactions at the same time.
            </p>
            <button className=" rounded-md sm:py-3 bg-[#00ffc4] text-sm font-medium px-8 py-2 mt-4  bg-primary shadow-lg hover:shadow-xl hover:scale-90 transition duration-200">
              Login to Connect Wallet
            </button>
          </div>

          <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10"> 
            <div className="w-full h-full">
              <Image
                src="/images/Crypto Chart.jpg"
                
                objectFit='cover'
                height={500}
                width={500}
              />

            </div>

          </div>
        </div>
        
      </div>
    </>
  )
}

export default Hero