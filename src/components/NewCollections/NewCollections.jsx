import React from 'react'
import "./newcollection.css"
import Item from "../Item/Item"
import new_collection from "../Assests/new_collections"
const NewCollections = () => {
  return (
    <div className=' flex flex-col items-center collection'> 
           
            <div className='flex flex-col gap-2  items-center justify-center'>
            <h1  className='text-black text-[50px] font-semibold '>NEW COLLECTIONS</h1>
            <hr  className='w-[250px] h-[6px] content bg-red-400'/>
              </div> 
           
             {/* collections */}
           <div className='new_collection'>
                 {
                      new_collection.map((item,i)=>{
                          return <Item key={i} name={item.name} id={item.id}
                          image={item.image}
                          old_price={item.old_price}  new_price={item.new_price}></Item>
                      })
                 }
           </div>
            
    </div>
  )
}

export default NewCollections
