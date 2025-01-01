"use client";
import Bestsellingcard from '@/components/ui/bestsellingcard';
import { useAppSelector } from '../store/hooks';

function CategoryPage({params} : {params : {category:string}}) {
    const product = useAppSelector((state) => state.product); 
     const bestSell = product.filter((val)=>val.category == params.category)
  return (
    <div>
{/* // heading */}
        <div className='mt-[50px] mb-[100px]'>
            <div className="text-center mb-10">
                <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl text-black capitalize">
                    {params.category}
                </h1>
                <div className="flex mt-2 justify-center ">
                    <div className="w-16 h-1 rounded-full  inline-flex bg-myRed" />
                </div>
            </div>

            {/* Category Page Start */}

            <div className='flex flex-wrap justify-center gap-5 '>
                {
                    bestSell.map((item :any, i) => (
                        <Bestsellingcard
                            key={i} // Unique key for each item
                            src={item.image[0]}
                            alt={item.title}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            category={item.category}
                            slug={item.slug}
                            discount={item.discount}
                        />
                    ))
                }
            </div>
    </div>
    </div>
  )
}

export default CategoryPage;