import React from 'react'
import corousal2Data from '../constants/corousal2Data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Rescard from './Rescard';
import { Link } from 'react-router-dom';


const Corousal2 = () => {
   
   // const imgURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

    const data = corousal2Data;
    const header = (data.card.card.header.title);
    const restraunts = (data.card.card.gridElements.infoWithStyle.restaurants);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
      };

    

  return (
    <div>
        
        <div className=' w-[80%] m-auto px-2 mt-7 '>
            <h1 className='font-extrabold text-2xl'>{header}</h1>
            <div className='slider-container'>
            <Slider {...settings}>
                {
                    restraunts.map((res)=><Link to={`/restaurant/${res?.info?.id}`}><Rescard data = {res} /></Link>)
                }
            </Slider>
            </div>

        </div>
        
        
    </div>
  )
}

export default Corousal2
