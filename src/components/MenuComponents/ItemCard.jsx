import React from "react";

const ItemCard = ({ data }) => {
  
  return (
    <div className="flex justify-between py-5 border-b-2 border-gray-200  last:border-b-0">
      <div className=" p-2 w-4/5">
        <h1 className="text-lg font-semibold">{data?.card?.info?.name}</h1>
        <p>Rs {data?.card?.info?.price / 100}</p>
        <p className="text-gray-400 py-2">
          <span className="text-green-700">
            ★ {data?.card?.info?.ratings?.aggregatedRating?.rating}
          </span>
          ({data?.card?.info?.ratings?.aggregatedRating?.ratingCountV2}){" "}
        </p>
        <p className="text-gray-500">{data?.card?.info?.description}</p>
      </div>
      <div className="w-1/5 h-[160px]  p-3 bg-slate-300 rounded-2xl">
        <img alt="item-img" className="w-full h-full object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+data?.card?.info?.imageId} />
      </div>
    </div>
  );
};

export default ItemCard;
