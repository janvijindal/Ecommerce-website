import React from 'react'
import "./relatedproduct.css"
import data_product from "../Assests/data"
import Item from "../Assests/../Item/Item"
const RelatedProducts = () => {
  return (
    <div className='flex flex-col items-center gap-[10px] h-[90vh]  '>
         <h1 className='heading'>Related Products</h1>
         <hr className='w-[250px] h-[5px] rounded-lg bg-red-400'/>
         <div className="related-item flex gap-5 mt-9">
                {
                      data_product.map((item,i)=>{
                            return <Item key={i} name={item.name} image={item.image} id={item.id}
                            old_price={item.old_price} new_price={item.new_price}></Item>
                      })
                }
         </div>
    </div>
  )
}

export default RelatedProducts
