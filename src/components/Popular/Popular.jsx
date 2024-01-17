import React from 'react'
import data_product from "../Assests/data"
import Item from "../Item/Item"
import "./popular.css"
const Popular = () => {
  return (
    <div className='flex flex-col items-center  popular'>
        <h1 className='text-black text-[50px] font-semibold '>POPULAR IN WOMEN</h1>
         <hr className='w-[250px] h-[5px] rounded-lg bg-red-400'/>
         {/* popular item */}
         <div className='mt-[50px] flex gap-[30px] '>
              {
                 data_product.map((item,i)=>{
                    return  <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
                 })
              }
         </div>
    </div>
  )
}

export default Popular
