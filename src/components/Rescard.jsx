import React from 'react'

const Rescard = ({data}) => {
    const imgURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
    console.log(data);
  return (
    <div className='mx-5 my-4 cursor-pointer hover:scale-95 transition-transform duration-300  w-[300px]'>
      <div className='h-[200px] w-[300px] rounded-2xl overflow-hidden'>
        <img className='w-full h-full' src={imgURL+data?.info?.cloudinaryImageId} />
      </div>
      <div className='p-2'>
        <h1 className='font-bold text-lg overflow-hidden whitespace-nowrap text-ellipsis'>{data?.info?.name}</h1>
        <div className='flex gap-3'>
          <h2 className='font-semibold'><span className='text-green-500'>★</span> {data?.info?.avgRating} </h2>
          <h2 className=''>{data?.info?.sla?.slaString}</h2>
        </div>
        <h4 className='overflow-hidden text-ellipsis  whitespace-nowrap text-gray-400'>{data?.info?.cuisines?.join(",")}</h4>
        <h4 className='text-gray-400'>{data?.info?.areaName}</h4>
      </div>

    </div>
  )
}

export default Rescard
