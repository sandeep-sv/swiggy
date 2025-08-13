import React from 'react'
import SearchResultCard from './SearchResultCard';
import { Link } from 'react-router-dom';

const SearchContainer = ({data}) => {
   
  return (
    <div className='px-2 h-[500px] overflow-y-scroll'>
      <h1 className='text-gray-400'>Showing Results For <span className='text-black'>Food</span></h1>
      {data?.map((item, index) =><SearchResultCard key={index}  data={item} />)}
    </div>
  )
}

export default SearchContainer
