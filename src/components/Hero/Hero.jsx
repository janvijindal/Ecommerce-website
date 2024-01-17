import React from 'react'
import "./hero.css"
import Hand_icon from "../Assests/hand_icon.png"
import arrow_icon from "../Assests/arrow.png"
import Hero_img from "../Assests/hero_image.png"
const Hero = () => {
  return (
    <div className='hero h-[100vh] flex'>

          {/* left  part */}
           <div className='flex-1 flex flex-col justify-center pl-[180px] left-part ' >
                <h2 className='text-black text-3xl font-semibold '>NEW ARRIVALS ONLY</h2>

                  {/* hand icon */}
                      <div className='flex items-center gap-[17px]'>
                           <p >new</p>
                           <img src={Hand_icon} alt="hand-icon" className='w-[90px]' />
                      </div>
                      <p>collections</p>
                      <p>for everyone</p>
                
 
              {/* latest collection btn */}
              <div className='flex justify-center items-center gap-[15px] w-[310px] h-[70px] rounded-full mt-[30px] bg-red-400 text-white text-[22px] font-[500] '>
                   <div>Latest Collections</div>
                   <img src={arrow_icon} alt="" />
              </div>

           </div>

          {/* right part */}
           <div className='flex-1 flex items-center justify-center'>
                 <img src={Hero_img} alt="hero-img" className='w-[500px]' />
           </div>

    </div>
  )
}

export default Hero
