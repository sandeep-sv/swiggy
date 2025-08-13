import corousaldata1 from "../constants/corousalData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"; // optional icons

const Corousal1 = () => {
  const imgURL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

  const data = corousaldata1 || {};
  const title = data?.card?.card?.header?.title ?? "Featured";
  const cards = data?.card?.card?.imageGridCards?.info ?? [];

  // Ref for slider control
  const sliderRef = useRef(null);

  const settings = {
    dots: false, // hide dots
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    arrows: false, // hide default arrows
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5, slidesToScroll: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="w-[80%] m-auto px-2 py-2 mt-10 border-b-2">
      {/* Title with custom arrows */}
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-extrabold text-2xl">{title}</h1>
        <div className="flex gap-2">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {cards.map((card, idx) => (
            <Link
              key={card?.id || card?.action?.text || idx}
              to={`/searchResults/${card?.action?.text}`}
            >
              <div className="m-2 cursor-pointer focus:outline-none">
                <img
                  className="w-[125px] h-[156px] object-cover rounded-md"
                  src={card?.imageId ? imgURL + card.imageId : ""}
                  alt={card?.accessibility?.altText || "carousel"}
                  loading="lazy"
                />
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Corousal1;
