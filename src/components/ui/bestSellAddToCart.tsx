"use client";
import { addToCart } from "@/app/store/features/cart";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa"

function BestSellAddToCart({ slug }: { slug: string }) {
  // calling Products

  const product = useAppSelector((state) => state.product).find(
    (val) => val.slug == slug);

  // Add to Cart
  const dispatch = useAppDispatch()
  // Setting Card items
  const [cartItem, setCartItem] = useState({
    id: product?.id,
    title: product?.title,
    image: product?.image,
    slug: product?.slug,
    price: product?.price,
    discount: product?.discount,
    category: product?.category,
    size: product?.size[0],
    qty: product?.qty,
    uuid: product?.qty,
    color: product?.color[0],
  });
  // Toast
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
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="group bg-myBlackHead hover:bg-transparent text-white hover:text-myBlackHead scroll-m-20 font-semibold tracking-tight text-sm rounded-xl absolute bottom-2 right-2">
            <FaShoppingCart className="mr-2 h-5 w-5 group-hover:text-myRed duration-300" />
            Add to Cart
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[15rem]">
          {/* Size */}
          <div className="flex  items-center">
            <span className="mr-3 scroll-m-20 text-medium text-black font-bold tracking-tight">Size</span>
            <div className="form-control w-full max-w-xs">
              <select
                onChange={(e) =>
                  setCartItem({ ...cartItem, size: e.target.value })}
                className="select select-bordered text-black font-bold bg-[#FAFAFA]">
                <option disabled defaultValue={"Select Size"}>
                  Select Size
                </option>
                {product?.size.map((item, i) => (
                  <option key={i}> {item}</option>
                ))}

              </select>
            </div>
          </div>


          {/* Colors */}
          <div className="flex mt-5">
            <span className="mr-3 scroll-m-20 text-medium text-black  mt-8 font-bold tracking-tight ">
              Color 
            </span>
            {product?.color.map((item, i) => (
              <button
                key={i}
                onClick={() => setCartItem({ ...cartItem, color: item })}
                className="border-2 border-gray-500 ml-1  mr-1  rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black"
                style={{ backgroundColor: item }}
              />
            ))}
          </div>

          {/* Add to Cart */}
          <div onClick={notify} className="w-fit">
            <Button
              onClick={() => dispatch(addToCart(cartItem))}
              className="group bg-myBlackHead  mt-5  hover:bg-transparent text-white hover:text-myBlackHead scroll-m-20 font-semibold tracking-tight text-sm rounded-xl absolute bottom-2 right-2">
              <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myRed duration-300" />
              Add to Cart
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      
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

    </div >
  )
}

export default BestSellAddToCart




