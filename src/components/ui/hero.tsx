import React from 'react'
import { Button } from './button'
import { FaShoppingBag } from "react-icons/fa";
function Hero() {
    return (
        <div className='mb-[100px]'>
            <div
                className="hero min-h-[90vh] custom-img bg-fixed bg-center bg-no-repeat"
            >
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white">Futuristic <span className='text-myRed'>Clothes</span></h1>
                        <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight text-white">
                            Upgrade your Wardrobe with Sleek and Stylish Appareals and Top-Notch Shoes
                        </p>
                        <Button className='bg-transparent hover:bg-transparent outline outline-offset-2 outline-2 text-white font-bold  group hover:rounded-3xl duration-300 hover:outline-myRed'>
                            <FaShoppingBag className="mr-2 h-6 w-6 group-hover:text-myRed group-hover:animate-bounce" /> Shop Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero