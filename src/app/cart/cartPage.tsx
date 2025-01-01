"use client";
import React from 'react'
import { Button } from '@/components/ui/button'
import CartCart from '@/components/ui/cartCart'
import { useAppSelector } from '../store/hooks';

function CartPage() {
    const cartArray = useAppSelector((state) => state.cart);
    const total = cartArray.reduce((total,arr)=>{return (total+((arr.price-(arr.price*arr.discount)/100))*arr.qty)},0);
    return (
            <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
                {/* items */}
                <div className='col-span-2'>
                    <CartCart/>
                </div>
                {/* summary */}
                <div className='bg-gray-200 p-5 rounded-xl'>
                    {/* heading */}
                    <h2 className='scroll-m-20  font-bold text-black uppercase tracking-tight text-sm'>
                        order summary
                    </h2>
                    {/* divider */}
                    <div className="divider mt-0 mb-1"></div>
                    {/* Pricing */}
                    <div className=" font-bold tracking-tight text-black text-sm">
                        <div className='flex items-center justify-between capitalize'>
                            <h2>Sub total</h2>
                            <h2>${total}</h2>
                        </div>
                        {/* delievery charges */}
                        <div className='flex items-center justify-between capitalize taxt-sm'>
                            <h2>Delievery Charges</h2>
                            <h2>TBD</h2>
                        </div>
                        {/* service charges */}
                        <div className='flex items-center justify-between capitalize text-sm'>
                            <h2>Sales Tax</h2>
                            <h2>TBD</h2>
                        </div>
                    </div>
                    {/* divider */}
                    <div className="divider mt-0 mb-1"></div>
                    {/* Estimate Total */}
                    <div className='flex items-center justify-between uppercase text-black font-bold text-sm tracking-tight'>
                        <h2>Sub Total</h2>
                        <h2>${total}</h2>
                    </div>
                    {/* divider */}
                    <div className="divider mt-0 mb-1"></div>
                    {/* checkout button */}
                    <div className='flex items-center justify-center w-full'>
                        <Button className='bg-myBlackHead uppercase hover:bg-transparent duration-300 text-white hover:text-myBlackHead scroll-m-20 text-xs font-bold tracking-tight hover:shadow-md rounded-xl'>
                            proceed to check
                        </Button>
                    </div>
                    {/* divider */}
                    <div className="divider mt-0 mb-1"></div>
                    {/* note */}
                    <p className='text-xs font-semibold tracking-tight text-myBlackHead w-[97%] text-center italic'>
                        {'* Delivery Charges and the Sale Tax will be calculated in the Checkout Page'}
                    </p>
                </div>
            </div>
    )
}

export default CartPage