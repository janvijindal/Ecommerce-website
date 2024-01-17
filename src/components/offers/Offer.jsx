import React from 'react'
import "./offer.css"
import exclusive_img from "../Assests/exclusive_image.png"
const Offer = () => {
  return (
    <div className='offer flex w-[80%] h-[60vh] m-auto py-[140px] mb-[150px] '>
           {/* left part */}
           <div className='flex-1 flex flex-col justify-center offer-left  '> 
              <h1>Exclusive</h1>
              <h1>Offers For You</h1>
              <p>ONLY FOR BEST SELLERS PRODUCTS</p>
              <div className='button'>check Now</div>
           </div>

           {/* right part */}
           <div className='flex-1 flex items-center justify-end pt-[50px]'>
              <img src={exclusive_img} className="" />
           </div>
    </div>
  )
}

export default Offer
