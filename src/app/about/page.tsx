import React from 'react'
import Image from "next/image"
const About =() =>{
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-red-500">
       Dress sales for girls
        <br className="hidden lg:inline-block mt-3" />
        10% off
      </h1>
      <p className="mb-8 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos veritatis harum nobis distinctio quod. Corrupti quia, dolorem fugiat quae et sint exercitationem distinctio similique atque quod quam cupiditate incidunt voluptatem.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolor facere in nesciunt ipsa esse beatae. Corrupti dolorem soluta debitis voluptatem sunt ad aut vel inventore maxime aspernatur, impedit magni.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
          Button
        </button>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src="/girls.jpg"
        width={500}
        height={500}
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default About