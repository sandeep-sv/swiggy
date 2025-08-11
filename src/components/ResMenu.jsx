import React, { useEffect, useMemo } from "react";
import Nav from "./nav";
import { useParams } from "react-router-dom";
import CategoryCard from "./MenuComponents/CategoryCard";
import MenuShimmer from "./MenuComponents/MenuShimmer";

const ResMenu = () => {
  const { id } = useParams();
  const [resInfo, setResInfo] = React.useState(null);
  const [groupedCards, setGroupedCards] = React.useState(null);
  const categories = useMemo(() => {
    return (
      groupedCards?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (card) =>
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) ?? []
    );
  }, [groupedCards]);
  const liscense = useMemo(() => {
    return (
      groupedCards?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (card) =>
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo"
      ) ?? []
    );
  }, [groupedCards]);

  const address = useMemo(() => {
    return (
      groupedCards?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (card) =>
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress"
      ) ?? []
    );
  }, [groupedCards]);

  if (categories) {
    console.log("this is grps cards:", categories);
    console.log("this is liscense:", address);
  }

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&submitAction=ENTER`
      );
      const json = await data.json();
      console.log(json.data);
      console.log(json.data.cards[json.data.cards.length - 1]);
      setResInfo(json.data);
      setGroupedCards(json.data.cards[json.data.cards.length - 1]);
    }
    fetchData();
  }, [id]);

    if (!resInfo || !groupedCards) {
    return <MenuShimmer />;
    }

  return (
    <div>
      <Nav />
      <div className=" w-[50%] m-auto mt-10">
        <h1 className="text-2xl font-bold mb-10">
          {resInfo?.cards[2]?.card?.card?.info?.name}
        </h1>
        <p className="text-center text-gray-500 text-lg">Menu</p>
        {categories.map((category) => (
          <CategoryCard data={category} />
        ))}
        <div className="bg-gray-300 p-4 h-64">
          <div className="flex items-center gap-4 border-b-2 border-gray-400 pb-4 mt-4">
            <div>
              <img
                alt="liscence-img"
                className="w-30 h-7"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/fssai_final_edss9i.png"
              />
            </div>
            <div>
              <h1>{liscense[0]?.card?.card?.text[0]}</h1>
            </div>
          </div>
          <div className="mt-6">
            <h1 className="text-xl font-semibold">{address[0]?.card?.card?.name}</h1>
            <h1 className="text-gray-600">({address[0]?.card?.card?.area})</h1>
            <h1 className="text-gray-600">{address[0]?.card?.card?.completeAddress}</h1>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ResMenu;
