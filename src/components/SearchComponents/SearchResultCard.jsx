import React from 'react'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SearchResultCard = ({data}) => {
    console.log("search result data1:", data);
    const navigate = useNavigate();
  return (
    <div className='cursor-pointer my-2  flex gap-3' onClick={(e) => {
        e.preventDefault();
        navigate(`/searchResults/${data?.text}`);
    }}>
      <div className='w-[60px] h-[60px] '>
        <img className='w-full h-full object-cover rounded-lg' alt='search-img' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${data?.cloudinaryId}`} />
      </div>
      <div className='max-w-[250px]'>
        <h1 className='text-xl font-semibold truncate'>{data?.text}</h1>
        <h1 className='text-gray-500'>{data?.type}</h1>
      </div>
    </div>
  )
}

export default SearchResultCard
