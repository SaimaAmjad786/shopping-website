// "use client";
// import { FaHeart } from 'react-icons/fa';
// import { Button } from '@/components/ui/button'
// import { IoMdAdd } from "react-icons/io";
// import { RiSubtractLine } from "react-icons/ri";
// import Slugcomponents from '@/components/ui/slugcomponents';
// import { useAppSelector } from '../../store/hooks';
// import { useState } from 'react';
// import AddToCartToast from '@/components/ui/addToCartToast';


// const SlugPage = ({ params }: { params: { slug: string } }) => {
//     const product = useAppSelector((state) => state.product);
//     const slug = product.filter((val) => val.slug == params.slug);
//     const [cartItem, setCartItem] = useState({
//         id: slug[0].id,
//         title: slug[0].title,
//         image: slug[0].image,
//         slug: slug[0].slug,
//         price: slug[0].price,
//         discount: slug[0].discount,
//         category: slug[0].category,
//         size: slug[0].size[0],
//         qty: slug[0].qty,
//         uuid: slug[0].qty,
//         color: slug[0].color[0],
//     })
//     console.log("abc", Math.floor(1000 + Math.random() * 9000))
//     return (
//         <div>
//             <div className="container px-5 py-24 mx-auto">
//                 <div className="lg:w-4/5 mx-auto flex flex-wrap">


//                     {/* Image */}

//                     <Slugcomponents image={slug[0].image} />

//                     <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

//                         {/* Title */}
//                         <h2 className="text-lg text-myRed font-bold font-serif tracking-widest  mb-2 mt-7  scroll-m-20 uppercase ">

//                             {slug[0].category}
//                         </h2>

//                         {/* Heading */}
//                         <h1 className="font-bold text-3xl title-font  mb-1 mt-3 scroll-m-20 text-black tracking-tight">

//                             {slug[0].title}
//                         </h1>

//                         {/* Ratings */}
//                         <div className="rating mt-3">
//                             <input type="radio" name="rating-2" className="mask mask-star-2 bg-myRed" />
//                             <input
//                                 type="radio"
//                                 name="rating-2"
//                                 className="mask mask-star-2 bg-myRed"
//                                 defaultChecked />
//                             <input type="radio" name="rating-2" className="mask mask-star-2 bg-myRed" />

//                             <input type="radio" name="rating-2" className="mask mask-star-2 bg-myRed" />
//                             <input type="radio" name="rating-2" className="mask mask-star-2 bg-myRed" />

//                         </div>

//                         {/* Discription */}
//                         <p className="leading-relaxed scroll-m-20 text-medium mt-3 text-black font-medium">
//                             {slug[0].description}
//                         </p>
//                         <div className="flex mt-6 items-center mb-5">
//                             <div className="flex">

//                                 {/* Colors */}
//                                 <span className="mr-3 scroll-m-20 text-medium text-black  font-bold tracking-tight ">Color</span>
//                                 {slug[0].color.map((item, i) => (
//                                     <button key={i}
//                                         onClick={() => setCartItem({ ...cartItem, color: item })} className="border-2 border-gray-500 ml-1  mr-1  rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black"
//                                         style={{ backgroundColor: item }} />
//                                 ))}

//                             </div>

//                             {/* Size */}
//                             <div className="flex ml-6 items-center">
//                                 <span className="mr-3 scroll-m-20 text-medium text-black font-bold tracking-tight">Size</span>
//                                 <div className="form-control w-full max-w-xs">
//                                     <select onChange={(e) => setCartItem({ ...cartItem, size: e.target.value })} className="select select-bordered text-black font-bold bg-[#FAFAFA]">
//                                         <option disabled selected>Select Size</option>
//                                         {slug[0].size.map((item, i) => (
//                                             <option key={i}>{item}</option>

//                                         ))}


//                                     </select>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Quantity */}
//                         <div className='flex items-center'>
//                             <span className='mr-3 scroll-m-20 font-serif tracking-tight text-base text-black font-bold'>
//                                 Quantity
//                             </span>

//                             <Button onClick={() => setCartItem({ ...cartItem, qty: cartItem.qty <= 1 ? 1 : --cartItem.qty })} className="group bg-myBlackHead ml-2 hover:bg-transparent text-white hover:text-myBlackHead scroll-m-20 font-semibold tracking-tight text-sm rounded-xl ">
//                                 <RiSubtractLine className="mr-2 h-5 w-5 group-hover:text-myRed duration-300" />
//                             </Button>

//                             <div className='mr-2 ml-2 scroll-m-20 text-medium text-myRed  font-bold tracking-tight'>
//                                 {cartItem.qty}
//                             </div>

//                             <Button onClick={() => setCartItem({ ...cartItem, qty: ++cartItem.qty })} className="group bg-myBlackHead hover:bg-transparent text-white hover:text-myBlackHead scroll-m-20 font-semibold tracking-tight text-sm rounded-xl ">
//                                 <IoMdAdd className="mr-2 h-5 w-5 group-hover:text-myRed duration-300" />

//                             </Button>

//                         </div>

//                         {/* Divider */}
//                         <div className="divider">
//                         </div>
//                         <div className="flex items-center justify-between">

//                             {/* Price */}

//                             <div>
//                                 <span className={`title-font font-bold text-xl text-myRed scroll-m-20  tracking-tight ${slug[0].discount > 0 && "line-through decoration-2 decoration-myRed/50"} `}>
//                                     ${cartItem.price * cartItem.qty}
//                                 </span>

//                                 {/* discounted value */}
//                                 {cartItem.discount > 0 && (
//                                     <span className="ml-3 title-font font-bold text-xl text-myRed scroll-m-20  tracking-tight">
//                                         $
//                                         {(cartItem.price - (cartItem.price * cartItem.discount) / 100)
//                                             * cartItem.qty}
//                                     </span>
//                                 )}
//                             </div>

//                             {/* Add to Cart */}
//                             <AddToCartToast cartItem={cartItem} />
//                         </div>

//                         {/* Buy Now */}
//                         <Button className="group bg-myBlackHead hover:bg-transparent w-full mt-4  text-white hover:text-myBlackHead scroll-m-20 font-semibold tracking-tight text-sm rounded-xl ">                   <FaHeart className="mr-2 h-5  w-5  group-hover:text-myRed duration-300" />
//                             Buy Now
//                         </Button>


//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SlugPage;







"use client"; // This must be the very first line of the file
import { FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
import Slugcomponents from "@/components/ui/slugcomponents";
import { useAppSelector } from "../../store/hooks";
import { useState } from "react";
import AddToCartToast from "@/components/ui/addToCartToast";

// Define the type for cart item
interface CartItem {
  id: string;
  title: string;
  image: string;
  slug: string;
  price: number;
  discount: number;
  category: string;
  size: string;
  qty: number;
  uuid: string;
  color: string;
}

const SlugPage = ({ params }: { params: { slug: string } }) => {
  const product = useAppSelector((state: any) => state.product);
  const slug = product.find((val: any) => val.slug === params.slug);

  // Handle the case where product is not found
  if (!slug) {
    return <div>Product not found!</div>;
  }

  // Initialize cartItem state
  const [cartItem, setCartItem] = useState<CartItem>({
    id: slug.id,
    title: slug.title,
    image: slug.image,
    slug: slug.slug,
    price: slug.price,
    discount: slug.discount,
    category: slug.category,
    size: slug.size[0], // Default to the first size
    qty: 1, // Default quantity is 1
    uuid: Math.floor(1000 + Math.random() * 9000).toString(), // Random UUID for the item
    color: slug.color[0], // Default to the first color
  });

  // Function to handle quantity change
  const updateQuantity = (increment: boolean) => {
    setCartItem((prevState) => ({
      ...prevState,
      qty: increment ? prevState.qty + 1 : Math.max(prevState.qty - 1, 1),
    }));
  };

  // Discounted price calculation
  const discountedPrice =
    cartItem.discount > 0
      ? (cartItem.price - (cartItem.price * cartItem.discount) / 100) * cartItem.qty
      : cartItem.price * cartItem.qty;

  return (
    <div>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* Image */}
          <Slugcomponents image={slug.image} />

          {/* Product Details */}
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-lg text-myRed font-bold font-serif tracking-widest mb-2 mt-7 uppercase">
              {slug.category}
            </h2>

            <h1 className="font-bold text-3xl mb-1 mt-3 text-black">{slug.title}</h1>

            {/* Ratings */}
            <div className="rating mt-3">
              {[...Array(5)].map((_, index) => (
                <input
                  key={index}
                  type="radio"
                  name="rating"
                  className="mask mask-star-2 bg-myRed"
                  defaultChecked={index === 1}
                />
              ))}
            </div>

            {/* Description */}
            <p className="leading-relaxed mt-3 text-black font-medium">{slug.description}</p>

            {/* Color Selection */}
            <div className="flex mt-6 items-center mb-5">
              <span className="mr-3 font-bold text-black">Color</span>
              {slug.color.map((color: any, i: any) => (
                <button
                  key={i}
                  onClick={() => setCartItem({ ...cartItem, color })}
                  className="border-2 border-gray-500 ml-1 rounded-full w-6 h-6 focus:outline-none"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            {/* Size Selection */}
            <div className="flex items-center mb-5">
              <span className="mr-3 font-bold text-black">Size</span>
              <select
                onChange={(e) => setCartItem({ ...cartItem, size: e.target.value })}
                className="select select-bordered bg-[#FAFAFA] text-black"
                value={cartItem.size}
              >
                {slug.size.map((size: any, i: any) => (
                  <option key={i} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            {/* Quantity Selection */}
            <div className="flex items-center mb-5">
              <span className="mr-3 font-bold text-black">Quantity</span>
              <Button
                onClick={() => updateQuantity(false)}
                className="group bg-myBlackHead ml-2 hover:bg-transparent text-white hover:text-myBlackHead font-semibold text-sm rounded-xl"
              >
                <RiSubtractLine className="mr-2 h-5 w-5 group-hover:text-myRed duration-300" />
              </Button>
              <div className="mx-2 text-myRed font-bold text-lg">{cartItem.qty}</div>
              <Button
                onClick={() => updateQuantity(true)}
                className="group bg-myBlackHead hover:bg-transparent text-white hover:text-myBlackHead font-semibold text-sm rounded-xl"
              >
                <IoMdAdd className="mr-2 h-5 w-5 group-hover:text-myRed duration-300" />
              </Button>
            </div>

            {/* Price and Add to Cart */}
            <div className="divider"></div>
            <div className="flex items-center justify-between">
              <div>
                <span
                  className={`title-font font-bold text-xl text-myRed ${
                    slug.discount > 0 && "line-through decoration-2 decoration-myRed/50"
                  }`}
                >
                  ${cartItem.price * cartItem.qty}
                </span>
                {slug.discount > 0 && (
                  <span className="ml-3 title-font font-bold text-xl text-myRed">
                    ${discountedPrice}
                  </span>
                )}
              </div>
              <AddToCartToast cartItem={cartItem} />
            </div>

            {/* Buy Now */}
            <Button className="group bg-myBlackHead hover:bg-transparent w-full mt-4 text-white hover:text-myBlackHead font-semibold text-sm rounded-xl">
              <FaHeart className="mr-2 h-5 w-5 group-hover:text-myRed duration-300" />
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlugPage;
