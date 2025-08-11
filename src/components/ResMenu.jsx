import React, { useEffect, useMemo } from "react";
import Nav from "./nav";
import { useParams } from "react-router-dom";
import CategoryCard from "./MenuComponents/CategoryCard";

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

  if (categories) {
    console.log("this is grps cards:", categories);
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

  return (
    <div>
      <Nav />
      <div className=" w-[50%] m-auto mt-10">
        <h1 className="text-2xl font-bold mb-10">
          {resInfo?.cards[2]?.card?.card?.info?.name}
        </h1>
        <p className="text-center text-gray-500 text-lg">Menu</p>
        {
            categories.map((category) =>
              <CategoryCard data={category} />
            )
        }

      </div>
    </div>
  );
};

export default ResMenu;
