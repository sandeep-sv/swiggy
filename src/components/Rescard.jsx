import React from 'react'

const Rescard = ({data}) => {
    const imgURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
    //console.log(data);
  return (
    <div className='mx-5 my-4 cursor-pointer hover:scale-95 transition-transform duration-300  w-[300px]'>
      <div className='h-[200px] w-[300px] rounded-2xl overflow-hidden'>
        <img className='w-full h-full' src={imgURL+data.info.cloudinaryImageId} />
      </div>
      <div className='p-2'>
        <h1 className='font-bold text-lg overflow-hidden whitespace-nowrap text-ellipsis'>{data.info.name}</h1>
        <h2 className='font-semibold'>{data.info.avgRating} Stars</h2>
        <h4 className='overflow-hidden text-ellipsis  whitespace-nowrap'>{data?.info?.cuisines?.join(",")}</h4>
        <h4>{data.info.areaName}</h4>
      </div>

    </div>
  )
}

export default Rescard
