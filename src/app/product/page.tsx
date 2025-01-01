// "use client";
// import React from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Bestsellingcard from '@/components/ui/bestsellingcard';
// // import { useAppSelector } from '../store/hooks';


// function FeatureProduct() {
//     // my data

//     const bestSell = [
//         {
//             src: "/green-zarnab.jpg", // Path to image in public directory
//             alt: "Green T-shirt",
//             title: "Green Printed Shirt",
//             description: "Best quality t-shirt for women",
//             price: 1000,
//             category: "tops",
//             slug: "green-top",
//         },
//         {
//             src: "/rabeeca.jpg", // Path to image in public directory
//             alt: "Black T-shirt",
//             title: "Black Printed Shirt",
//             description: "Best quality t-shirt for women",
//             price: 1500,
//             category: "tops",
//             slug: "black-top",
//         },
//         {
//             src: "/red-lady.jpg", // Path to image in public directory
//             alt: "Red shirt",
//             title: "Red Printed Shirt",
//             description: "Best quality t-shirt for women",
//             price: 1500,
//             category: "tops",
//             slug: "red-top",
//         },
//         {
//             src: "/green-bag.webp", // Path to image in public directory
//             alt: "Branded Green Bag",
//             title: "Green Bag",
//             description: "Top notch bags for women",
//             price: 2000,
//             category: "bag",
//             slug: "green-bag",
//         },
//         {
//             src: "/red-bag.webp", // Path to image in public directory
//             alt: "Branded Red Bag",
//             title: "Red Bag",
//             description: "Top notch bags for women",
//             price: 2000,
//             category: "bag",
//             slug: "red-bag",
//         },
//         {
//             src: "/black-bag.jpg", // Path to image in public directory
//             alt: "Branded Black Bag",
//             title: "Black Bag",
//             description: "Top notch bags for women",
//             price: 2000,
//             category: "bag",
//             slug: "black-bag",
//         },


//         {
//             src: "/jewellery1.jpg", // Path to image in public directory
//             alt: " Golden Jewellery",
//             title: "Golden Jewellery",
//             description: "Top classic jewellery for women",
//             price: 3000,
//             category: "jewellery",
//             slug: "golden-jewellery",
//         },

//         {
//             src: "/jewellery2.webp", // Path to image in public directory
//             alt: "Pink Jewellery",
//             title: "Pink jewellery",
//             description: "Top classic jewellery for women",
//             price: 3000,
//             category: "jewellery",
//             slug:"pink-jewellery",
//         },
//         {
//             src: "/jewellery3.jpg", // Path to image in public directory
//             alt: "Green Jewellery",
//             title: "Green Jewellery",
//             description: "Top classic jewellery for women",
//             price: 3000,
//             category: "jewellery",
//             slug: "green-jewellery",
//         },
//     ];

//     //  const  bestSell = useAppSelector((state) => state.product);
    
//     // Carosel Setting

//     var settings = {
//         dots: true,
//         arrows:false,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         pauseOnHover: true,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: true,
//                     arrows:false,
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2,
//                     dots: true,
//                     arrows:false,
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     dots: true,
//                     arrows:false,
//                 }
//             }
//         ]
//     };
//     return (
//         <div className='mb-[100px] mt-[100px] '>
//             <div className="text-center mb-10">
//                 <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl text-black capitalize text-center" >
//                     Featured Products
//                 </h1>
//                 <div className="flex mt-2 justify-center ">
//                     <div className="w-16 h-1 rounded-full  inline-flex bg-myRed" />
//                 </div>
//             </div>

//             {/* Carousel */}

//             <Slider {...settings}>
                
//                 {bestSell.map((item:any, i) => (
//                     <Bestsellingcard
//                         key={i} // Unique key for each item
//                         src={item.src}
//                         alt={item.alt}
//                         title={item.title}
//                         description={item.description}
//                         price={item.price}
//                         category={item.category}
//                         slug={item.slug}
//                         discount={item.discount}
//                     />
//                 ))
//                 }

//             </Slider>
            
//         </div>
        
//     )
// }

// export default FeatureProduct