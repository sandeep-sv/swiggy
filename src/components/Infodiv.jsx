import React, { useState } from 'react'

const Infodiv = () => {

    const [showText,setShowText] = useState(false);

    function seeMoreClicked(){
        setShowText(true);
    }

  return (
    <div className='w-[80%] m-auto border border-gray-400 rounded-lg p-4 mt-14'>
      <h1 className='text-gray-500 font-extrabold text-2xl'>Discover Delicious Food Delights Online Near You</h1>
      <p className='text-gray-400 text-lg mt-2'>Craving something delicious? Discover a world of culinary delights right at your fingertips with food delivery near me! Whether you're in the mood for a hearty burger, fresh sushi, or a comforting bowl of pasta, there's no shortage of options to satisfy your cravings. The convenience of online food delivery near me allows you to explore various restaurants and cuisines without leaving the comfort of your home.</p>
      {
        !showText && <p onClick={()=>{
            seeMoreClicked();
          }} className='text-orange-500 mt-2 cursor-pointer'>See More ▼</p>
      }
      

      {showText && 
      <>
      <h1 className='text-gray-500 font-extrabold text-2xl mt-4'>Convenience at Your Fingertips: Order Food Online Near You Now</h1>
      <p className='text-gray-400 text-lg mt-2'>Experience the ultimate convenience with food ordering near me and indulge in your favourite meals without the hassle! With just a few clicks, you can order food online near me from a variety of restaurants, all offering speedy delivery right to your doorstep. Whether you’re at home, at work, or anywhere in between, satisfying your cravings has never been easier.

The process is quick and user-friendly: browse through menus, select your favourite dishes, and place your order. You can enjoy a wide array of options—from local favourites to international cuisines—catered to every palate and occasion. Plus, many platforms offer exclusive discounts and deals, making it more affordable to treat yourself.

Why wait in long lines or spend time cooking when you can have delicious meals delivered right to you? Embrace the convenience of online food delivery and enjoy a stress-free dining experience today. Order now and make mealtime special!</p>
      </>   
    }
    </div>

  )
}

export default Infodiv
