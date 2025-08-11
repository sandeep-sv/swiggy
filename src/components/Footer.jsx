import React from 'react';
import { useState , useEffect } from 'react';

const Footer = () => {
    const imgURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_50/";

    const [footerData , setFooterData] = useState(null);
        useEffect(()=>{
                getData();
            },[])
        
            async function getData(){
                const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
                const json = await data.json();
                
               
                const filterCards = (json.data.cards.filter((card)=>card?.card?.card?.["@type"]=="type.googleapis.com/swiggy.seo.widgets.v1.AppInstallLinks"));
                setFooterData(filterCards[0]);
                console.log(filterCards[0]);
              
            }
  return (
    <div className='bg-[rgb(240,240,245)] pt-14 mt-11'>
      <div className='flex w-[82%] m-auto  p-5 justify-evenly'>

        <div>
          <img
            className='h-12'
            alt='footer-img'
            src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_260/portal/m/seo/Logos/Swiggy/Swiggy%20logo-2.png'
          />
          <p className='mt-2'>© 2025 Swiggy Limited</p>
        </div>

        <div>
          <h1 className="font-semibold text-black mb-2">Company</h1>
          <ul className="text-gray-600 space-y-2">
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Swiggy Corporate</li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Team</li>
            <li className="cursor-pointer">Swiggy One</li>
            <li className="cursor-pointer">Swiggy Instamart</li>
            <li className="cursor-pointer">Swiggy Dineout</li>
            <li className="cursor-pointer">Swiggy Genie</li>
            <li className="cursor-pointer">Minis</li>
            <li className="cursor-pointer">Pyng</li>
          </ul>
        </div>

        <div>
          <div>
            <h1 className="font-semibold text-black mb-2">Contact Us</h1>
            <ul className="text-gray-600 space-y-2">
              <li className="cursor-pointer">Help & Support</li>
              <li className="cursor-pointer">Partner with us</li>
              <li className="cursor-pointer">Ride with us</li>
            </ul>
          </div>
          <div className='mt-9'>
            <h1 className="font-semibold text-black mb-2">Legal</h1>
            <ul className="text-gray-600 space-y-2">
              <li className="cursor-pointer">Terms & Conditions</li>
              <li className="cursor-pointer">Cookie Policy</li>
              <li className="cursor-pointer">Privacy Policy</li>
              <li className="cursor-pointer">Investor Relations</li>
            </ul>
          </div>
        </div>

        <div>
          <h1 className="font-semibold text-black mb-2">Available In</h1>
          <ul className="text-gray-600 space-y-2">
            <li className="cursor-pointer">Bangalore</li>
            <li className="cursor-pointer">Gurgaon</li>
            <li className="cursor-pointer">Hyderabad</li>
            <li className="cursor-pointer">Delhi</li>
            <li className="cursor-pointer">Mumbai</li>
            <li className="cursor-pointer">Pune</li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold text-black mb-2">Life At Swiggy</h1>
          <ul className="text-gray-600 space-y-2">
            <li className="cursor-pointer">Explore with Swiggy</li>
            <li className="cursor-pointer">Swiggy News</li>
            <li className="cursor-pointer">Snackables</li>
          </ul>
        </div>

      </div>
      {footerData && footerData.card?.card && (
  <div className='flex items-center w-[82%] m-auto py-3 justify-center gap-9'>
    <h1 className='font-extrabold text-xl'>{footerData.card.card.title}</h1>
    <div className='flex gap-3'>
      <img
        className='cursor-pointer'
        alt='android-img'
        src={imgURL + footerData.card.card.androidAppImage}
      />
      <img
        className='cursor-pointer'
        alt='ios-img'
        src={imgURL + footerData.card.card.iosAppImage}
      />
    </div>
  </div>
)}

    </div>
  );
};

export default Footer;
