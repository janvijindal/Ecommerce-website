import React, { useContext } from 'react'
import "./Productdisplay.css"
import star from "../Assests/star_icon.png"
import dull from "../Assests/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const{product}=props;
    const{addToCart}=useContext(ShopContext)
  return (
    <div className='product-display flex '>
            {/* left */}
              <div className='flex gap-[18px]'>
                   <div className="image-list flex flex-col gap-[16px] ">
                         <img src={product.image} alt='' />
                         <img src={product.image} alt=''/>
                         <img src={product.image} alt=''/>
                         <img src={product.image} alt=''/>
                         <img src={product.image} alt=''/>
                   </div>

                     <div className="display-img">
                           <img src={product.image} alt="" className=' w-[1500px] h-[562px]' />
                     </div>
              </div>

              {/* right */}
              <div className='right flex flex-col mx-[70px] '>
                   <h1 className='text-2xl text-gray-800 font-semibold'>{product.name}</h1>
                    
                   <div className="right-star flex gap-2 my-3 ">
                       <img src={star} alt="" />
                       <img src={star} alt="" />
                       <img src={star} alt="" />
                       <img src={star} alt="" />
                       <img src={dull } alt="" />
                       <p className='text-black font-[500]'>(132)</p>
                   </div>

                   <div className="right-price flex gap-2 font-[700] text-xl my-1">
                         <div className="old-price text-gray-500 line-through">${product.old_price}</div>
                         <div className="new-price text-red-400">${product.new_price}</div>
                   </div>

                   <div className="description my-2 text-[18px] ">
                       A lightweight , usally Knited pullover shirts,close fitting Lorem i
                       psum dolor sit amet consectetur adipisicing elit. Libero Lorem, ipsum dolor.
                       ipsa esse, quibusdam explicabo ad quisquam. Lorem ipsum dolor sit amet.
                   </div>

                   <div className="size  my-1 text-gray-600 ">
                       <h1 className=' text-gray-600 text-xl font-[600]'>Select Size:</h1>
                       <div className="sizes flex gap-[20px] font-[500] text-xl my-2 ">
                            <div className='cursor-pointer  '>S</div>
                            <div className='cursor-pointer'>M</div>
                            <div className='cursor-pointer'>L</div>
                            <div className='cursor-pointer'>XL</div>
                            <div className='cursor-pointer'>XXL</div>
                       </div>
                   </div>

                   <button onClick={()=>{addToCart(product.id)}} className='my-3 bg-red-500 text-white hover:bg-gray-400'>Add To Cart </button>
                   <p className="category my-2 text-xl"><span className='font-semibold text-xl  text-gray-600'>Category: </span>Women,T-shirt,Crop-top</p>
                   <p className="category my-2 text-xl"><span className='font-semibold text-xl  text-gray-600'>Tags :</span> Modern , Latest</p>
              </div>
    </div>
  )
}

export default ProductDisplay
