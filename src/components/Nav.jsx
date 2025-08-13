import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addFullData } from '../utils/dataSlice';
import { useNavigate } from 'react-router-dom';
import SearchContainer from './SearchComponents/SearchContainer';

const Nav = () => {

    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const [showSearchResults, setShowSearchResults] = React.useState(true);

    const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(()=>{
    getSearchData();
  },[searchTerm]);

  async function getSearchData() {
    if (searchTerm.length > 0) {
      const data = await fetch(`https://www.swiggy.com/dapi/restaurants/search/suggest?lat=12.9715987&lng=77.5945627&str=${searchTerm}&trackingId=undefined&includeIMItem=true`);
      const json = await data.json();
      console.log(json?.data?.suggestions);
      setSearchResults(json?.data?.suggestions || []);
    }
  }

  useEffect(()=>{
          getData();
      },[])
  
      async function getData(){
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          const json = await data.json();
          dispatch(addFullData(json));
      }

  return (
    <div className='h-20 flex justify-around shadow-md'>
        <div className='   flex  items-center' onClick={()=> navigate("/")}>
            <img className='cursor-pointer h-10' alt='logo' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_260/portal/m/seo/Logos/Swiggy/Swiggy%20logo-2.png' />
        </div>
        <div>
            
        </div>
        <div className='  flex gap-10 justify-center items-center '>
            <input onFocus={() => setShowSearchResults(true)} onBlur={() =>
            setTimeout(() => setShowSearchResults(false), 200)
               } onChange={(e) => setSearchTerm(e.target.value)}  className='cursor-pointer w-96 py-4 pl-3 rounded-lg bg-gray-200 focus:outline-none focus:ring-0' type='text' placeholder='search for restaurant and food' />
            <img className=' cursor-pointer h-10' alt='user-img' src='https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png' />

            {
                searchResults && showSearchResults && searchResults.length > 0 && searchTerm.length > 0 &&
                <div className='absolute top-16 right-32 w-96 bg-white transform -translate-x-1/2  shadow-lg  z-10'>
                <SearchContainer data={searchResults} />
            </div>
            }
            
        </div>
        
    </div>
  )
}

export default Nav;
