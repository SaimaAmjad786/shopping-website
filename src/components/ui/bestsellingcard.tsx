
import React from 'react';
import Image from 'next/image';
import { Button } from './button';
import { FaHeart } from 'react-icons/fa';

import Link from "next/link"
import BestSellAddToCart from './bestSellAddToCart';
const Bestsellingcard = ({
    src,
    alt,
    title,
    description,
    price,
    category,
    slug,
    discount,
}: {
    src: string;
    alt: string;
    title: string;
    description: string;
    price: number;
    category:string;
    slug:string;
    discount:number;
}) => {

    return (
        <div className="max-w-[350px] h-[35rem]  p-4 mx-auto shadow-md rounded-xl relative group border-2  border-gray-200 ">
           <Link href={`/${category} /${slug}`}>
           {/* Image div */}
            <div className="block h-[23rem] rounded overflow-hidden">
                <Image
                    src={src} // Use the passed src prop
                    width={400}
                    height={400}
                    alt={alt} // Use the passed alt prop
                    className="cover-img "
                />
            </div>
            {/* Typegraphy div */}
            <div className="mt-4">

                {title && (
                    <h2 className="card-title scroll-m-20 border-b pb-2 text-lg text-black line-clamp-1 font-bold  tracking-tight first:mt-0">
                        {title}
                    </h2>
                )}

                {description && (
                    <p className="scroll-m-20 font-semibold tracking-tight text-myBlackHead text-md ">
                        {description}
                    </p>
                )}

                {price && (
                    <div className='flex gap-4'>
                    <p className={` scroll-m-20 font-bold tracking-tight text-myRed text-md mt-3 ${discount > 0 && "line-through decoration-2 decoration-myRed/50"} `}>
                        ${price}
                    </p>
                    {/* discounted value */}
                    {discount >0 && (
                     <p className="scroll-m-20 font-bold tracking-tight text-myRed text-md mt-3 ">
                    ${price - (price * discount) /100}
                </p> 
                )}

                </div>
                )}

            </div>
            </Link>
            <div>

                <div className='absolute bottom-2 right-2'>
                <BestSellAddToCart slug = {slug}/>
                </div>

                <Button className="group bg-myBlackHead hover:bg-transparent text-white hover:text-myBlackHead scroll-m-20 font-semibold tracking-tight text-sm rounded-xl absolute bottom-2 left-2">
                    <FaHeart className="mr-2 h-5 w-5 group-hover:text-myRed duration-300" />
                    Buy Now
                </Button>

                {discount > 0 && (
                    <div className='scroll-m-20 uppercase text-md rounded-tl-2xl rounded-bl-2xl myDiscount p-2 text-white bg-myRed font-semibold tracking-tight absolute top-0 left-2 w-[87px]'>
                        {`${discount} % off`}
                        </div>
                )}
            </div>
        </div>
    );
};

export default Bestsellingcard;
