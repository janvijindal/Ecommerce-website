import React, { useContext } from 'react'
import "./cartitem.css"
import {ShopContext} from "../../Context/ShopContext"
import remove from "../Assests/cart_cross_icon.png"
const CartItems = () => {
     const{all_product,removeFromCart,cartItems,getTotalAmount}=useContext(ShopContext);
  return (
    <div className='my-[100px] mx-[170px] cart-item'>
           <div className="format-main ">
                  <p>Products</p>
                  <p>Title</p>
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Total</p>
                  <p>Remove</p>
           </div>
           
           <hr />

           {
             all_product.map((e)=>{
                  if(cartItems[e.id] > 0){
                      return  <div>
                      <div className="format text-[20px] font-[500] format-main">
                           <img src={e.image} alt="" className='product-icon h-[85px] w-[95px]' />
                           <p>{e.name}</p>
                           <p>${e.new_price}</p>
                           <button className='quantity'>{cartItems[e.id]}</button>
                           <p>${e.new_price*cartItems[e.id]}</p>
                           <img  className='w-[15px] mx-[20px] curor-pointer ' src={remove} onClick={()=>{removeFromCart(e.id)}} alt="" />
                      </div>
       
                      <hr />
                  </div>
                  }

                  return null;
             })
           }

           <div className="down flex my-[100px] ">
                  <div className="total flex-1 flex flex-col mr-[200px] gap-[40px]  ">
                       <h1 className='text-3xl font-semibold'>Cart Totals</h1>
                      <div>
                         <div className='total-item'>
                              <p>SubTotal</p>
                              <p>${getTotalAmount()}</p>
                         </div>

                          <hr />

                          <div className='total-item'>
                              <p>Shipping Fee</p>
                              <p>Free</p>
                          </div>

                          <hr />

                          <div className="total-item">
                              <h3>Total</h3>
                              <h3>${getTotalAmount()}</h3>
                          </div>

                      </div>

                      <button className='proceed-button'>PROCEED TO CHECKOUT</button>

                  </div>

                  <div className="promo-code flex-1 text-[20px] font-[500]  ">
                       <p className='text-black font-[500]'>If You Have a Promo-Code, enter Here..</p>
                       <div className="promo-box w-[472px] mt-[15px] bg-transparent h-[60px] ">
                           <input className=' font-[20px] w-[300px] h-[50px] pl-3 ' type="text" placeholder='Enter Your Promo Code' />
                           <button >Submit</button>
                       </div>
                  </div>
           </div>
            
    </div>
  )
}

export default CartItems
