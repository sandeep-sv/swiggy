import React from 'react'
import corousaldata1 from '../constants/corousalData'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Corousal1 = () => {

    const imgURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

    const data = corousaldata1;
    const title = (data.card.card.header.title);
    const cards = data.card.card.imageGridCards.info;
    //console.log(data.card.card.imageGridCards.info);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 3
      };

    // useEffect(()=>{
    //     getData();
    // },[])

    // async function getData(){
    //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //     const json = await data.json();
    //     console.log(json.data.cards);
    // }

  return (
    <div>
        
        <div className=' w-[80%] m-auto px-2 mt-5 '>
            <h1 className='font-extrabold text-2xl'>{title}</h1>
            <div className='slider-container'>
            <Slider {...settings}>
                {
                    cards.map((card)=><div className='cursor-pointer focus:outline-none  m-2 '>
                        <img className='w-[125px]  ' src={imgURL+card.imageId} />
                    </div>)
                    
                }
            </Slider>
            </div>

        </div>
        
        
    </div>
  )
}

export default Corousal1
