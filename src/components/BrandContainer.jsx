import React, { useState } from 'react'
import { useEffect } from 'react';
import BrandDiv from './BrandDiv';
import BrandCard from './BrandCard';
import { useSelector } from 'react-redux';

const BrandContainer = () => {
    const [brands , setBrands] = useState([]);

    const json = useSelector((store)=>store.data.fullData);


    useEffect(() => {
        if (json?.data?.cards) {
          const filterCards = json.data.cards.filter(
            (card) =>
              card?.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent"
          );
          setBrands(filterCards);
        }
      }, [json]);
    
  return (
    <div className='w-[80%] m-auto  mt-10'>
        {
            brands.map((brand)=><BrandDiv title = {brand.card.card.title} data = {brand.card.card.brands} />)
        }
    
      
    </div>
  )
}

export default BrandContainer
