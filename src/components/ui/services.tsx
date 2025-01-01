import React from 'react'
import Image from "next/image"
function Services() {
  return (
    <div>
      <section className="body-font mb-[100px] mt-[100px]">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-10">
            <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl text-black">
              Our Services
            </h1>
            <div className="flex mt-2 justify-center">
              <div className="w-16 h-1 rounded-full bg-myRed inline-flex" />
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {/* Delivery */}
            <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  flex-shrink-0">
                <Image src={"/car1.png"}
                  width={150}
                  height={100}
                  alt='Delievery'
                  className='h-20 w-20'
                />
              </div>
              <div className="flex-grow">
                <h2 className="group-hover:text-black duration-300 font-bold text-myRed capitalize scroll-m-20 text-xl tracking-tight lg:text-xl">
                  Free Delivery
                </h2>
                <p className="line-clamp-2 font-bold  scroll-m-20  text-lg tracking-tight text-myBlackHead mt-3">
                  Free Delivery on Order Above $1000
                </p>
              </div>
            </div>

            {/* 24/7 services */}
            <div className="group p-4  mx-auto lg:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  flex-shrink-0">
                <Image src={"/services.png"}
                  width={100}
                  height={100}
                  alt='Delievery'
                  className='h-20 w-20 mb-5'
                />
              </div>
              <div className="flex-grow">
                <h2 className="group-hover:text-black duration-300 font-bold text-myRed  capitalize scroll-m-20 text-xl tracking-tight lg:text-xl">
                  24/7 Customer Services
                </h2>
                <p className="line-clamp-2 font-bold  scroll-m-20  text-lg tracking-tight text-myBlackHead mt-3">
                  For Queries and Question Feel free to Contact
                </p>
              </div>
            </div>

            {/* Money Back */}
            <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  flex-shrink-0">
                <Image src={"/5.jpg"}
                  width={100}
                  height={200}
                  alt='Delievery'
                  className='h-20 w-20'
                />
              </div>
              <div className="flex-grow">
                <h2 className="group-hover:text-black duration-300 font-bold text-myRed capitalize scroll-m-20 text-xl tracking-tight lg:text-xl">
                  Money Back Gurantee
                </h2>
                <p className="line-clamp-2 font-bold  scroll-m-20  text-lg tracking-tight text-myBlackHead mt-3">
                  Get Money Back Gurantee on Damage Products
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}

export default Services