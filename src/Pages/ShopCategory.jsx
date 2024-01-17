import React, { useContext } from 'react'
import "./Css/shopCategory.css"
import { ShopContext } from '../Context/ShopContext';
import drop_down from "../components/Assests/dropdown_icon.png"
import Item from "../components/Item/Item"
const ShopCategory = (props) => {
     const {all_product} = useContext(ShopContext); 
  return (
    <div className='shop-category'>
           <img src={props.banner} alt="banner" className='banner' />

           <div className="indexsort flex ">
               <p className='font-semibold text-2xl'>
                  <span>Showing 1-12</span> Out Of 36 Products
                 </p>  

             <div className="sort flex gap-2 justify-center items-center">
               Sort By <img src={drop_down} alt="dropdwon" className='w-3 h-3 items-center text-black' />
           </div>

           </div>

           <div className="products">
                {
                     all_product.map((item,i)=>{
                          if(props.category===item.category){
                                return <Item key={i} name={item.name} id={item.id}
                                image={item.image}
                                old_price={item.old_price}  new_price={item.new_price}
                                ></Item>
                          } 

                          else{return null;}
                     })
                }
           </div>

          <div className="loadmore flex justify-center  items-center ">
                  Explore More
          </div>

          
    </div>
  )
}

export default ShopCategory
