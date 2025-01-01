"use client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import { Button } from './button';
import { FaShoppingCart } from 'react-icons/fa';
import { addToCart } from '@/app/store/features/cart';
import { useAppDispatch } from '@/app/store/hooks';


const AddToCartToast = ({ cartItem }: any) => {
    const dispatch = useAppDispatch()

    const notify = () =>
        toast.success('Product Added Successfully!', {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    

    return (
        <>
        <div className='w-fit' onClick={() => dispatch(addToCart(cartItem))} >
            
             
            <Button onClick={notify} className="group bg-myBlackHead hover:bg-transparent text-white hover:text-myBlackHead scroll-m-20 font-semibold tracking-tight text-sm rounded-xl ">
                <FaShoppingCart className="mr-2 h-5 w-5 group-hover:text-myRed duration-300" />
                Add to Cart
            </Button>
        </div>
        <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        </>
    )
}
export default AddToCartToast