import React from 'react'
import "./decription.css"
const DescriptionBox = () => {
  return (
    <div className='my-[120px] mx-[70px]'>
          <div className="navigator flex">
               <div className='flex items-center justify-center text-[16px] font-semibold w-[170px] h-[70px] box'>Description</div>
               <div className='flex items-center justify-center text-[16px] font-semibold w-[170px] h-[70px] box fade'>Reviews (132)</div>
          </div>

          <div className="para flex flex-col gap-5">
            <p className='text-[18px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nobis, 
                ipsum corporis neque impedit expedita, voluptate, voluptates officiis amet necessitatibus 
                in libero! At nostrum, magnam dolorem quos recusandae ex 
                molestias quas deleniti, asperiores labore ducimus deserunt 
                unde quaerat. Sequi tempora reiciendis nulla adipisci recusandae officiis, quidem facere sed at minus.</p>

            <p className='text-[18px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Eligendi perferendis, inventore maxime eius omnis labore repellendus 
                saepe accusamus sed, at est perspiciatis rem similique voluptas aperiam sit officia facilis qui?</p>

          </div>
    </div>
  )
}

export default DescriptionBox
