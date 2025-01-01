"use client";
import React, { useState } from 'react'
import Image, { StaticImageData } from "next/image"

const Slugcomponents = ({ image }: string | string[] | StaticImageData | any) => {

    const [path, setPath] = useState("");

    return (
        <div>
            <Image src={path ? path : image[0]}
                width={400}
                height={400}
                alt='cover' />

            <div className='flex items-center justify-evenly mx-auto mt-2'>
                {image.map((item:string , i:number) => (
                    <div key={i} className='cursor-poniter w-16 h-16'>
                        <Image src={item}
                            width={100}
                            height={100}
                            alt='cover-img'
                            onClick={() => setPath(item)}
                        />
                    </div>
                ))}




            </div>
        </div >
    )
}

export default Slugcomponents