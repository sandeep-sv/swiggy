import React from 'react'

const Banner = () => {
  return (
    <div className='relative flex justify-center h-[400px]  w-[82%] m-auto mt-8'>
      <img className=' p-2 w-full' alt='banner-img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/Food_collectionbanner.png' />
      <h1 className='absolute left-10 bottom-14 font-bold text-white text-5xl'>Order Food Online</h1>
    </div>
  )
}

export default Banner
