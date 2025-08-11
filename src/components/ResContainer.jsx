import React, { useState } from 'react'
import { useEffect } from 'react'
import Rescard from './Rescard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ResContainer = () => {

    const [resList , setResList] = useState([]);

    const resCards = useSelector((store)=>store.data.fullData);

    
    async function showMore(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9716&lng=77.5946&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const filterCards = (json.data.cards.filter((card)=>card?.card?.card?.id=="restaurant_grid_listing_v2"));
        console.log(filterCards);
        const newCards = (filterCards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setResList((prev) => [...prev, ...newCards]);
    }


    useEffect(()=>{
        if (resCards?.data?.cards) {
            const filterCards = resCards.data.cards.filter(
              (card) => card?.card?.card?.id === "restaurant_grid_listing_v2"
            );
            setResList(filterCards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
          }
    },[resCards])

    // async function getData(){
    //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //     const json = await data.json();
        
       
    //     const filterCards = (json.data.cards.filter((card)=>card?.card?.card?.id=="restaurant_grid_listing_v2"));
      
    //     setResList((filterCards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants));
    // }

    if (!resList || resList.length === 0) {
        return <div className='text-center mt-10'>Loading...</div>;
      }

  return (
    <div className='w-[80%] m-auto mt-10'>
        <div>
        <h1 className='font-extrabold text-2xl'>Restaurants with online food delivery in Hyderabad</h1>
        </div>
        <div className='flex flex-wrap justify-between'>


        {resList.map((res)=><Link to={`/restaurant/${res.info.id}`}><Rescard data={res} /></Link>)}

        </div>
        <div className='flex justify-center mt-6 '>
            <button onClick={()=>{
                showMore();
            }} className='border border-black px-4 py-2 rounded-md hover:bg-slate-100 text-orange-500'>Show More ▼</button>
        </div>

    </div>
  )
}

export default ResContainer;

