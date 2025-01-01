import React from 'react'

function Promotion() {
  return (
    <div className="body-font mb-[100px] mt-[100px]">
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl text-black">
          Our Promotions
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myRed inline-flex" />
        </div>
      </div>
      {/* Promotion Start */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        
        {/* 1st child */}

        <div className="hero h-[25rem] promo-1 rounded-xl">
          <div className="hero-overlay bg-opacity-40 rounded-xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-4xl mb-5 text-myWhite uppercase">Get upto <span className='text-myRed font-bold' >60% off</span> </h1>
              <p className="mb-5  text-myWhite scroll-m-20 text-xl font-medium tracking-tight">
                Flash Sale , get up to 60% off on the Season Variant
              </p>
            </div>
          </div>
        </div>

        {/* 2nd child */}

        <div className="hero h-[25rem] promo-2 rounded-xl">
          <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-4xl mb-5 text-myWhite uppercase">Get upto <span className='text-myRed font-bold' >30% off</span> </h1>
              <p className="mb-5  text-myWhite scroll-m-20 text-xl font-bold tracking-tight">
                Flash Sale , get up to 30% off on the New Jewellery  Arrival
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promotion;