import React, { useState } from 'react'
import BrandCard from './BrandCard';

const BrandDiv = ({title,data}) => {

    const [ brandCards , setBrandCards] =useState(data.slice(0,11));
    const [showMore , setShowMore] = useState(true);

    function showMoreBrands(){
      setShowMore(false);
      setBrandCards(data);
    }

    //console.log(title,data);
  return (
    <div>
        <div>
            <h1 className='font-extrabold text-xl'>{title}</h1>
        </div>
        <div className='flex flex-wrap my-4 justify-around'>
            {brandCards.map((card)=><BrandCard data = {card} />)}
            { showMore && <div onClick={()=>{
              showMoreBrands();
            }} className='border border-slate-300 px-4 py-4 w-[300px] m-2 rounded-md cursor-pointer'>
               <p className='overflow-hidden text-ellipsis  whitespace-nowrap text-center text-orange-500'>Show More...</p>
           </div>

            }
            
        </div>
      
    </div>
  )
}

export default BrandDiv;
