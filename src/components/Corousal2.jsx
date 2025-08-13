// // import React from 'react'
// // import corousal2Data from '../constants/corousal2Data';
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import Slider from "react-slick";
// // import Rescard from './Rescard';
// // import { Link } from 'react-router-dom';


// // const Corousal2 = () => {
   
// //    // const imgURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

// //     const data = corousal2Data;
// //     const header = (data.card.card.header.title);
// //     const restraunts = (data.card.card.gridElements.infoWithStyle.restaurants);

// //     const settings = {
// //         dots: true,
// //         infinite: false,
// //         speed: 500,
// //         slidesToShow: 4,
// //         slidesToScroll: 3
// //       };

    

// //   return (
// //     <div>
        
// //         <div className=' w-[80%] m-auto px-2 mt-7 '>
// //             <h1 className='font-extrabold text-2xl'>{header}</h1>
// //             <div className='slider-container'>
// //             <Slider {...settings}>
// //                 {
// //                     restraunts.map((res)=><Link to={`/restaurant/${res?.info?.id}`}><Rescard data = {res} /></Link>)
// //                 }
// //             </Slider>
// //             </div>

// //         </div>
        
        
// //     </div>
// //   )
// // }

// // export default Corousal2

// import React from "react";
// import corousal2Data from "../constants/corousal2Data";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import Rescard from "./Rescard";
// import { Link } from "react-router-dom";

// const Corousal2 = () => {
//   const data = corousal2Data || {};
//   const header = data?.card?.card?.header?.title ?? "Top restaurants";
//   const restaurants = data?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];

//   const settings = {
//     dots: true,
//     infinite: restaurants.length > 4,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 3,
//     responsive: [
//       { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 2 } },
//       { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
//       { breakpoint: 640,  settings: { slidesToShow: 1, slidesToScroll: 1 } },
//     ],
//   };

//   if (restaurants.length === 0) return null;

//   return (
//     <div className="w-[80%] m-auto px-2 mt-7">
//       <h1 className="font-extrabold text-2xl">{header}</h1>
//       <div className="slider-container">
//         <Slider {...settings}>
//           {restaurants.map((res) => (
//             <div key={res?.info?.id}>
//               <Link to={`/restaurant/${res?.info?.id}`}>
//                 <Rescard data={res} />
//               </Link>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Corousal2;

import React, { useRef } from "react";
import corousal2Data from "../constants/corousal2Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Rescard from "./Rescard";
import { Link } from "react-router-dom";

const Corousal2 = () => {
  const data = corousal2Data || {};
  const header = data?.card?.card?.header?.title ?? "Top restaurants";
  const restaurants = data?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];

  const sliderRef = useRef(null);

  const settings = {
    dots: false, // hide dots
    arrows: false, // hide default arrows
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 640,  settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  if (restaurants.length === 0) return null;

  return (
    <div className="w-[80%] m-auto px-2 mt-10 border-b-2 py-2">
      {/* Title + custom arrows */}
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-extrabold text-2xl">{header}</h1>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => sliderRef.current?.slickPrev()}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            aria-label="Previous"
          >
            {/* Left chevron SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button
            type="button"
            onClick={() => sliderRef.current?.slickNext()}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            aria-label="Next"
          >
            {/* Right chevron SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {restaurants.map((res) => (
            <div key={res?.info?.id}>
              <Link to={`/restaurant/${res?.info?.id}`}>
                <Rescard data={res} />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Corousal2;
