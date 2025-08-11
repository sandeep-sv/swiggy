import React from "react";
import ItemCard from "./ItemCard";

const CategoryCard = ({ data }) => {
  const items = data?.card?.card?.itemCards || [];
  const [showItems, setShowItems] = React.useState(true);
  return (
    <div className="mt-10 border-b-[10px] border-gray-200 pb-2">
      <div className="flex justify-between mb-3 px-2 cursor-pointer" onClick={() => setShowItems(!showItems)}>
        <h1 className="text-xl font-bold">
          {data?.card?.card?.title} ({data?.card?.card?.itemCards?.length})
        </h1>
        <div>{showItems ? "▲" : "▼"}</div>
      </div>
      {
        showItems && (<div>
        {items.map((item) => (
          <ItemCard data={item} />
        ))}
      </div>)
      }
      
    </div>
  );
};

export default CategoryCard;
