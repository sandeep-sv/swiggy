import React, { useEffect } from 'react'
import Nav from '../nav'
import { useParams } from 'react-router-dom';
import Rescard from '../Rescard';
import SearchDishCard from './SearchDishCard';
import MenuShimmer1 from '../MenuComponents/MenuShimmer1';

const SearchResults = () => {

    const { dish } = useParams();

    const [searchResults, setSearchResults] = React.useState([]);

    useEffect(()=>{
        setSearchResults([]);

        fetchSearchResults();

    },[dish])

    async function fetchSearchResults() {
        const data = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9715987&lng=77.5945627&str=${dish}&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=5ad48af6-1653-7cbe-11cb-ebdb912bfa3b&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22VEG%22%2C%22cloudinaryId%22%3A%22sjg84ifbojyb9glrtc2l%22%2C%22dishFamilyId%22%3A%22846586%22%2C%22dishPreparationStyleId%22%3A%22848973%22%2C%22dishFamilyIds%22%3A%5B%22846586%22%5D%2C%22dishPreparationStyleIds%22%3A%5B%22848973%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D`);
        const json = await data.json();
        setSearchResults(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards.splice(1));
        console.log("search results:", json?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards[2]?.card?.card?.restaurant);
    }

   
  return (
    <div>
      <Nav />
      <h1 className='text-2xl font-semibold text-gray-400 text-center mt-5'>Dishes</h1>
      
        {
        searchResults.length === 0 ? <MenuShimmer1 /> :
         <div className='w-[60%] m-auto mt-10  flex flex-wrap justify-between px-5 py-5'>
        {
            searchResults.map((dish)=><SearchDishCard data={dish}/>)
        }
      </div>
      }

      
    </div>
  )
}

export default SearchResults
