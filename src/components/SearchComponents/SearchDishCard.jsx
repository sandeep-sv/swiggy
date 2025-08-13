import React from "react";
import { useNavigate } from "react-router-dom";

const SearchDishCard = ({ data }) => {
  console.log("search dish card data:", data?.card?.card);
  const {restaurant } = data.card.card;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/restaurant/${restaurant?.info?.id}`);
  }
  return (
    <div className="w-[40%]  my-2 bg-white rounded-2xl px-2 shadow-lg">
      <div className="flex justify-between p-2 items-center border-b-2 border-dotted border-gray-300 cursor-pointer" onClick={()=> handleCardClick()}>
        <div className="">
          <h1 className="text-sm font-semibold text-gray-600">By {restaurant.info.name}</h1>
          <div className="flex gap-3">
            <h1 className="text-sm font-semibold text-gray-400">
              {restaurant.info.avgRating || restaurant.info.avgRatingString}✭
            </h1>
            <h1 className="text-sm font-semibold text-gray-400">
              {restaurant.info.sla.minDeliveryTime} -{" "}
              {restaurant.info.sla.maxDeliveryTime} Min
            </h1>
          </div>
        </div>
        <div>
          <h1>→</h1>
        </div>
      </div>
      <div className="flex justify-between py-5 border-b-2 border-gray-200  last:border-b-0">
      <div className=" p-2 w-4/5">
        <h1 className="text-lg font-semibold">{restaurant?.info?.name}</h1>
        <p className="text-sm">Rs {restaurant?.info?.costForTwo / 100}</p>
      </div>
      <div className="w-[30%] h-[100px]  p-3 bg-slate-300 rounded-2xl relative">
        <img alt="item-img" className="w-full h-full object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+restaurant?.info?.cloudinaryImageId} />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-xl w-[60%] cursor-pointer">
          <div>
            <h1 className="text-center">Add+</h1>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SearchDishCard;
