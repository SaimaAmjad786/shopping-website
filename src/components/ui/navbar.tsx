"use client";
import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { IoMdMenu } from "react-icons/io";
import { NavigationMenuDemo } from './navlink'
import { useAppSelector } from '@/app/store/hooks';
function Navbar() {
  const cart = useAppSelector((state) =>state.cart);
  return (
    <div>
      <div className="navbar rounded-lg bg-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <label tabIndex={0} className='lg:hidden p-0 text:2xl'>
                <IoMdMenu />
              </label>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link href={"/"} className='text-black font-bold'>Home</Link></li>
              <li>
                <details>
                  <summary className='bg-white font-bold'>Women</summary>
                  <ul className="p-2">
                    <li><Link href={"/tops"} className='text-black font-bold'>Tops</Link></li>
                    <li><Link href={"/paints"} className='text-black font-bold'>Paints</Link></li>
                    <li><Link href={"/accessories"} className='text-black font-bold'>Acessories/Jewellery</Link></li>
                    <li><Link href={"/shoes"} className='text-black font-bold'>Shoes</Link></li>
                  </ul>
                </details>
              </li>
              <li><Link href={"/contact"} className='text-black font-bold'>Contact</Link></li>
              <li><Link href={"/product"} className='text-black font-bold'>Product</Link></li>
              <li><Link href={"/about"} className='text-black font-bold'>About</Link></li>

            </ul>
          </div>
          <Image src={"/logo1.avif"}
            width={100}
            height={100}
            alt='logo'
            className='hidden lg:block rounded-xl ml-4'
          />
        </div>
        <div className="navbar-center ">
          <Image src={"/logo1.avif"}
            width={100}
            height={100}
            alt='logo'
            className='block lg:hidden ml-6 rounded-lg'
          />
          <div className='hidden lg:flex'>
            <NavigationMenuDemo />
          </div>
        </div>
        
        <div className="navbar-end">
          <Link href={"/cart"}><div tabIndex={0} role="button" className="pr-4 cursor-pointer">
            <div className="indicator group-hover:text-myRed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cart.length > 0 &&
              <span className="badge badge-sm indicator-item text-black font-semibold group-hover:text-white group-hover:bg-black">{cart.length}</span>
              }
            </div>
          </div>
          </Link>
        </div>

      </div>
    </div>
    // </div>
  )
}

export default Navbar


















