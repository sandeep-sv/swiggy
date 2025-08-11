import React from 'react'

const BrandCard = ({data}) => {
  //console.log(data);
  return (
    <div className='border border-slate-300 px-4 py-4 w-[300px] m-2 rounded-md cursor-pointer'>
      <p className='overflow-hidden text-ellipsis  whitespace-nowrap text-center'>{data.text}</p>
    </div>
  )
}

export default BrandCard
