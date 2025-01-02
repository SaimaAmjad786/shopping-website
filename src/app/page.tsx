import Bestselling from '@/components/ui/bestselling'
import Categories from '@/components/ui/categories'
import Hero from '@/components/ui/hero'
import Promotion from '@/components/ui/promotion'
import Services from '@/components/ui/services'
import React from 'react';


function page() {
  return (
    <div >
      <Hero/>
      <Services />
      <Promotion />
      <Categories />
      <Bestselling />
    </div>
  )
}

export default page;
