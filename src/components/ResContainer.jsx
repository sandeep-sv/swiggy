import React, { useState } from 'react'
import { useEffect } from 'react'
import Rescard from './Rescard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ResContainer = () => {

    const [resList , setResList] = useState([]);
    const [filteredResList, setFilteredResList] = useState([]);

    const resCards = useSelector((store)=>store.data.fullData);

    
    async function showMore(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9716&lng=77.5946&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const filterCards = (json.data.cards.filter((card)=>card?.card?.card?.id=="restaurant_grid_listing_v2"));
        console.log(filterCards);
        const newCards = (filterCards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setResList((prev) => [...prev, ...newCards]);
        setFilteredResList((prev) => [...prev, ...newCards]);
    }


    useEffect(()=>{
        if (resCards?.data?.cards) {
            const filterCards = resCards.data.cards.filter(
              (card) => card?.card?.card?.id === "restaurant_grid_listing_v2"
            );
            setResList(filterCards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
            setFilteredResList(filterCards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
          }
    },[resCards])

    // async function getData(){
    //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //     const json = await data.json();
        
       
    //     const filterCards = (json.data.cards.filter((card)=>card?.card?.card?.id=="restaurant_grid_listing_v2"));
      
    //     setResList((filterCards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants));
    // }

    if (!filteredResList || filteredResList.length === 0) {
        return <div className='text-center mt-10'>Loading...</div>;
      }

      const handleFastDelivery = () => {
        const fastDeliveryRes = resList.filter((res) => res?.info?.sla?.deliveryTime < 30);
        setFilteredResList(fastDeliveryRes);
      };

  return (
    <div className='w-[80%] m-auto mt-10'>
        <div>
        <h1 className='font-extrabold text-2xl'>Restaurants with online food delivery in Hyderabad</h1>
        </div>
        <div className='flex gap-3 mt-5 mb-5 px-2'>
          <div className='px-3 py-2 border border-gray-400 rounded-full cursor-pointer text-gray-500 font-semibold text-sm' onClick={handleFastDelivery}>Fast Delivery</div>
          <div className='px-3 py-2 border border-gray-400 rounded-full cursor-pointer text-gray-500 font-semibold text-sm'>Ratings 4.0+</div>
          <div className='px-3 py-2 border border-gray-400 rounded-full cursor-pointer text-gray-500 font-semibold text-sm'>Less than Rs. 300</div>
          <div className='px-3 py-2 border border-gray-400 rounded-full cursor-pointer text-gray-500 font-semibold text-sm'>Pure Veg</div>
        </div>
        <div className='flex flex-wrap gap-10 '>


        {filteredResList.map((res)=><Link to={`/restaurant/${res.info.id}`}><Rescard data={res} /></Link>)}

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

// import React, { useEffect, useState, useMemo } from 'react'
// import Rescard from './Rescard';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// const ResContainer = () => {
//   const [resList, setResList] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // track filters
//   const [filters, setFilters] = useState({
//     fast: false,     // delivery < 30
//     rating4: false,  // rating >= 4.0
//     cheap: false,    // cost < 300
//     veg: false,      // pure veg
//   });

//   const resCards = useSelector((store) => store.data.fullData);

//   // initial load from redux payload
//   useEffect(() => {
//     if (resCards?.data?.cards) {
//       const block = resCards.data.cards.find(
//         (card) => card?.card?.card?.id === "restaurant_grid_listing_v2"
//       );
//       const first = block?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
//       setResList(first);
//       setLoading(false);
//     }
//   }, [resCards]);

//   // derive filtered list from resList + filters
//   const filteredResList = useMemo(() => {
//     let out = resList;

//     if (filters.fast) {
//       out = out.filter((r) => (r?.info?.sla?.deliveryTime ?? 999) < 30);
//     }
//     if (filters.rating4) {
//       const getRating = (r) => r?.info?.avgRating ?? r?.info?.avgRatingString ?? 0;
//       out = out.filter((r) => Number(getRating(r)) >= 4);
//     }
//     if (filters.cheap) {
//       const getCost = (r) => {
//         // costForTwo comes like "₹300 for two" sometimes; try numeric fields first
//         const c = r?.info?.costForTwo ?? r?.info?.costForTwoMessage ?? "";
//         const m = String(c).match(/\d+/);
//         return m ? Number(m[0]) : 9999;
//       };
//       out = out.filter((r) => getCost(r) < 300);
//     }
//     if (filters.veg) {
//       out = out.filter((r) => r?.info?.veg === true);
//     }
//     return out;
//   }, [resList, filters]);

//   // toggle helpers
//   const toggle = (key) => setFilters((f) => ({ ...f, [key]: !f[key] }));
//   const clearAll = () => setFilters({ fast: false, rating4: false, cheap: false, veg: false });

//   // your existing showMore: append to resList and filters will re-apply automatically
//   async function showMore() {
//     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//     const json = await data.json();
//     const filterCards = json.data.cards.filter((card) => card?.card?.card?.id === "restaurant_grid_listing_v2");
//     const newCards = filterCards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
//     setResList((prev) => [...prev, ...newCards]);
//   }

//   const chipBase = "px-3 py-2 border rounded-full cursor-pointer font-semibold text-sm";
//   const onClass = "bg-black text-white border-black";
//   const offClass = "text-gray-600 border-gray-400 hover:bg-gray-100";

//   if (loading) return <div className="text-center mt-10">Loading…</div>;

//   return (
//     <div className="w-[80%] m-auto mt-10">
//       <h1 className="font-extrabold text-2xl">Restaurants with online food delivery in Hyderabad</h1>

//       <div className="flex gap-3 mt-5 mb-5 px-2 flex-wrap">
//         <button className={`${chipBase} ${filters.fast ? onClass : offClass}`} onClick={() => toggle('fast')}>
//           Fast Delivery
//         </button>
//         <button className={`${chipBase} ${filters.rating4 ? onClass : offClass}`} onClick={() => toggle('rating4')}>
//           Ratings 4.0+
//         </button>
//         <button className={`${chipBase} ${filters.cheap ? onClass : offClass}`} onClick={() => toggle('cheap')}>
//           Less than Rs. 300
//         </button>
//         <button className={`${chipBase} ${filters.veg ? onClass : offClass}`} onClick={() => toggle('veg')}>
//           Pure Veg
//         </button>
//         {(filters.fast || filters.rating4 || filters.cheap || filters.veg) && (
//           <button className={`${chipBase} ${offClass}`} onClick={clearAll}>
//             Clear filters
//           </button>
//         )}
//       </div>

//       <div className="flex flex-wrap gap-10">
//         {filteredResList.length === 0 ? (
//           <div className="w-full text-center text-gray-500 py-6">No results.</div>
//         ) : (
//           filteredResList.map((res) => (
//             <Link key={res?.info?.id} to={`/restaurant/${res?.info?.id}`}>
//               <Rescard data={res} />
//             </Link>
//           ))
//         )}
//       </div>

//       <div className="flex justify-center mt-6">
//         <button
//           onClick={showMore}
//           className="border border-black px-4 py-2 rounded-md hover:bg-slate-100 text-orange-500"
//         >
//           Show More ▼
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ResContainer;
