import React from 'react'
import Image from "next/image"
import Link from "next/link"
import {IoLogoVercel} from 'react-icons/io5'
import {FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <div>
        <footer className="body-font ">
  <div className="container px-5 py-7 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="  text-red-500  scroll-m-20 text-xl font-bold tracking-tight mb-3">
        COMPANY
        </h2>
        <nav className="list-none mb-10">
          <li>
            <Link  href ={" / "} className="text-black  hover:text-red-500 text-lg font-bold tracking-tight mb-3">Home</Link>
          </li>
          <li>
          <Link  href ={" /"} className="text-black  hover:text-red-500 text-lg font-bold tracking-tight mb-3">AboutUs</Link>
          </li>
          <li>
          <Link  href ={" "} className="text-black  hover:text-red-500 text-lg font-bold tracking-tight mb-3">ContactUs</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="  text-red-500  scroll-m-20 text-xl font-bold tracking-tight mb-3">
        Services
        </h2>
        <nav className="list-none mb-10">
        <li>
          <Link  href ={" "} className="text-black  hover:text-red-500 text-lg font-bold tracking-tight mb-3">Branding</Link>
          </li>
          <li>
          <Link  href ={" "} className="text-black  hover:text-red-500 text-lg font-bold tracking-tight mb-3">Design</Link>
          </li>
          <li>
          <Link  href ={" "} className="text-black  hover:text-red-500 text-lg font-bold tracking-tight mb-3">Marketing</Link>
          </li>
          <li>
          <Link  href ={" "} className="text-black  hover:text-red-500 text-lg font-bold tracking-tight mb-3">Advertise</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="  text-red-500  scroll-m-20 text-xl font-bold tracking-tight mb-3">
        Legal
        </h2>
        <nav className="list-none mb-10">
        <li>
          <Link  href ={"/"} className="text-black  hover:text-red-500 text-lg font-bold tracking-tight mb-3">Terms of use</Link>
          </li>
          <li>
          <Link  href ={"/"} className="text-black  hover:text-red-500 text-lg font-bold tracking-tight mb-3">Privacy Policy</Link>
          </li>
          <li>
          <Link  href ={"/ "} className="text-black  hover:text-red-500 text-lg font-bold tracking-tight mb-3">Cookie Policy</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="  text-red-600 scroll-m-20 text-xl font-bold font-serif tracking-tight mb-3">
        Subscribe
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2 ">
            <label
              htmlFor="footer-field"
              className="leading-7 text-sm text-black font-bold mb-4"
            >
              Your Email Here
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-red-600 focus:bg-transparent focus:ring-2 focus:ring-yellow-300 focus:border-cyan-600 text-base outline-none text-gray-700 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 font-bold rounded-lg">
            Get Notified
          </button>
        </div>
        <p className="text-black hover:text-red-600 font-bold text-sm  md:text-left text-center mt-4">
          Please provide us your email
          <br className="lg:block hidden" />
          to get notified for exciting promos
        </p>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <Image src={"/logo1.avif"}
                    width={80}
                    height={80}
                    alt='logo'
                    className='rounded-xl'
                    />
        <span className="ml-3 text-xl">Shopping Website</span>
      </a>
      <p className="text-sm text-black sm:ml-6 sm:mt-0 mt-4">
        © 2024 Website
        
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link
      target='blank' href={"https://vercel.com/new/saima-amjads-projects"} className="ml-3 text-black">
      <IoLogoVercel className='text-3xl' />
      </Link>
      
      <Link
      target='blank' href={"https://www.linkedin.com/in/saima-amjad-2263012b6/"} className="ml-3 text-black">
        <FaLinkedin className='text-3xl ' />
      </Link>
      </span>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer