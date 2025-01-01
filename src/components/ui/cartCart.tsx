"use client";
import Image from "next/image"
import { Button } from './button'
import { RiSubtractLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { addCart, delItem, subtractCart } from "@/app/store/features/cart";


const CartCart = () => {
    const cartArray = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();
    console.log("abc",cartArray)
    return (
        <>
            {cartArray.length >= 1 &&
                cartArray.map((item, i) => (
                    <div key={i} className='flex px-10 py-3 '>
                        {/* Image */}
                        <Image
                            src={'/black.webp'}
                            alt={item.title || 'Product Image'}
                            width={100}
                            height={100}
                            className='w-[100px] h-[100px]'
                        />

                        {/* some info */}
                        <div className='flex px-5 justify-between items-center w-full '>
                            <div >
                                {/* title */}
                                <h2 className='text-sm font-semibold mr-4 leading-none  text-black'>
                                    {item.title}
                                </h2>
                                {/* size */}
                                <p className='mt-2 text-sm text-black font-bold justify-between items-center leading-none line-clamp-1 w-full'>
                                    size:&nbsp; <span>{item.size}</span>
                                </p>
                                {/* color */}
                                <p className='mt-2 text-sm text-black font-bold justify-between items-center leading-none line-clamp-1 w-full'>
                                    color:&nbsp; <span>
                                    <button  className="border-2 border-gray-500 ml-1  mr-1  rounded-full w-[15px] h-[15px] focus:outline-none active:border-none focus:border-none"
                                        style={{ backgroundColor: item . color }} />
                                    </span>
                                </p>
                                {/* quantity */}
                                <div className='flex mt-2 items-center'>
                                    <Button 
                                    onClick={()=>(dispatch(subtractCart(item)))}
                                     className='group hover:bg-white text-white  bg-myBlackHead  w-fit h-fit rounded-lg text-xs duration-300'>
                                        <RiSubtractLine className="h-2 w-2 group-hover:text-white" />
                                    </Button>
                                    <div className='mr-2 ml-2 scroll-m-20 text-sm font-bold tracking-tight text-myBlackPara'>
                                        {item.qty}
                                    </div>
                                    <Button
                                     onClick={()=>(dispatch(addCart(item)))}
                                      className='group hover:bg-white text-white  bg-myBlackHead w-fit h-fit rounded-lg text-xs duration-300'>
                                        <IoMdAdd className="h-2 w-2 group-hover:text-white" />
                                    </Button>
                                </div>

                                {/* price and delete */}
                                <div className=' mt-4 flex flex-col items-end gap-3 '>
                                    <h3 className='text-sm font-bold leading-none line-clamp-1 text-myBlackHead'>
                                        <span>Price:&nbsp;</span>
                                 ${item.discount > 0 ? (item.price - (item.price * item.discount) / 100) * item.qty : item.price * item.qty} 

                                    </h3>
                                    <FaTrash onClick={() => dispatch(delItem(item.uuid))} className="text-base font-semibold leading-none line-clamp-1 text-myRed cursor-pointer" />
                                </div>
                            </div>
                        </div>
                        {/* Price and Delete */}
                        <div className='hidden lg:flex-col items-end gap-5  '>
                            <h3 className='text-sm font-bold leading-none line-clamp-1 text-myBlackHead'>
                                <span>Price:&nbsp;</span>
                                ${item.discount > 0 ? (item.price - (item.price * item.discount) / 100) * item.qty : item.price * item.qty}
                            </h3>
                            <FaTrash onClick={() => dispatch(delItem(item.uuid))} className="text-base font-semibold leading-none line-clamp-1 text-myRed cursor-pointer" />
                        </div>

                    </div>
                ))}

        </>
    )
}

export default CartCart;








