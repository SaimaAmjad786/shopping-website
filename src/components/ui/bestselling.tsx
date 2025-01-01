"use client";
import React from 'react';
import Bestsellingcard from './bestsellingcard';
import { useAppSelector } from '@/app/store/hooks';

const Bestselling = () => {
    const  product = useAppSelector((state) => state.product);
    const bestSell = product.slice (0,3)

    // const bestSell = [
    //     {
    //         src: "/shirt.jpg", // Path to image in public directory
    //         alt: "Green T-shirt",
    //         title: "Green Printed Shirt",
    //         description: "Best quality t-shirt for women",
    //         price: 150,
    //         category:"tops",
    //         slug:"green-top",
    //     },
    //     {
    //         src: "/blacks.avif", // Path to image in public directory
    //         alt: "Black T-shirt",
    //         title: "Black Printed Shirt",
    //         description: "Best quality t-shirt for women",
    //         price: 250,
    //         category:"tops",
    //         slug:"black-top",
    //     },
    //     {
    //         src: "/red.jpg", // Path to image in public directory
    //         alt: "Red shirt",
    //         title: "Red Printed Shirt",
    //         description: "Best quality t-shirt for women",
    //         price: 500,
    //         category:"tops",
    //         slug:"red-top",
    //     },
    //     {
    //         src: "/green-pump.avif", // Path to image in public directory
    //         alt: "Green Pumpees",
    //         title: "Green Pumpees",
    //         description: "Top notch shoes for women",
    //         price: 2000,
    //         category:"shoes",
    //         slug:"green-shoes",
    //     },
    //     {
    //         src: "/black-pump.jpg", // Path to image in public directory
    //         alt: "Black Pumpees",
    //         title: "Black Pumpees",
    //         description: "Top notch shoes for women",
    //         price: 2000,
    //         category:"shoes",
    //         slug:"black-shoes",
    //     },
    //     {
    //         src: "/red-pump.jpg", // Path to image in public directory
    //         alt: "Red Pumpees",
    //         title: "Red Pumpees",
    //         description: "Top notch shoes for women",
    //         price: 2000,
    //         category:"shoes",
    //         slug:"red-shoes",
    //     },
    // ];

    return (
        <div className='mt-[100px] mb-[100px]'>
            <div className="text-center mb-10">
                <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl text-black">
                    Best Selling Products
                </h1>
                <div className="flex mt-2 justify-center ">
                    <div className="w-16 h-1 rounded-full  inline-flex bg-myRed" />
                </div>
            </div>
            {/* Best Selling Products */}
            <div className='flex flex-wrap justify-center gap-5 '>
                {
                    bestSell.map((item:any, i) => (
                        <Bestsellingcard
                            key={i} // Unique key for each item
                            src={item.image[0]}
                            alt={item.alt}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            category={item.category}
                            slug={item.slug}
                            discount={item.discount}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Bestselling;

