import React from 'react'
import Image from "next/image"
import Link from "next/link"
function Categories() {
  return (
    <div className='mb-[100px] mt-[100px]'>
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl text-black">
          Our Categories
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myRed inline-flex" />
        </div>
      </div>

      {/* Categories starts */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {/* Category 1 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
          <Link href={"/tops"}>
            <Image src={"/images.webp"}
              width={300}
              height={300}
              alt='tops'
              className='rounded-xl group-hover:scale-125 '
            />
            <div className='hidden lg:block absolute -bottom-24  group-hover:bottom-2 duration-500  scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl bg-myBlackHead text-myWhite text-center w-full'>
              <h1 className='uppercase'>Tops</h1>
            </div>
            <div className='block lg:hidden absolute bottom-28 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl bg-myBlackHead text-myWhite text-center w-full'>
              <h1 className='uppercase'>Tops</h1>
            </div>
          </Link>
        </div>


        {/* Category 2 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
          <Link href={"/paints"}>
            <Image src={"/top1.webp"}
              width={300}
              height={300}
              alt='tops'
              className='rounded-xl group-hover:scale-125 '
            />
            <div className='hidden lg:block absolute -bottom-24  group-hover:bottom-2 duration-500  scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl bg-myBlackHead text-myWhite text-center w-full'>
              <h1 className='uppercase'>Paints</h1>
            </div>
            <div className='block lg:hidden absolute bottom-28 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl bg-myBlackHead text-myWhite text-center w-full'>
              <h1 className='uppercase'>Paints</h1>
            </div>
          </Link>
        </div>


        {/* Category 3 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
          <Link href={"/accessories"}>
            <Image src={"/collection.jpg"}
              width={280}
              height={280}
              alt='tops'
              className='rounded-xl group-hover:scale-125 '
            />
            <div className='hidden lg:block absolute -bottom-24  group-hover:bottom-2 duration-500  scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl bg-myBlackHead text-myWhite text-center w-full'>
              <h1 className='uppercase'>Accessories</h1>
            </div>
            <div className='block lg:hidden absolute bottom-28 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl bg-myBlackHead text-myWhite text-center w-full'>
              <h1 className='uppercase'>Accessories</h1>
            </div>
          </Link>
        </div>

        {/* Category 4 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
          <Link href={"/shoes"}>
            <Image src={"/shoe.avif"}
              width={300}
              height={300}
              alt='tops'
              className='rounded-xl group-hover:scale-125 '
            />
            <div className='hidden lg:block absolute -bottom-24  group-hover:bottom-2 duration-500  scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl bg-myBlackHead text-myWhite text-center w-full'>
              <h1 className='uppercase'>Shoes</h1>
            </div>
            <div className='block lg:hidden absolute bottom-28 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl bg-myBlackHead text-myWhite text-center w-full'>
              <h1 className='uppercase'>Shoes</h1>
            </div>
          </Link>
        </div>




      </div>
    </div>
  )
}

export default Categories



