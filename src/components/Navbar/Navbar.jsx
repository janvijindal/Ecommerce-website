import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../Assests/logo.png"
import cart_icon from "../Assests/cart_icon.png"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {ShopContext} from "../../Context/ShopContext"
function Navbar() {
      const[menu,setMenu]=useState("shop");
      const {getTotalItem}=useContext(ShopContext);
  return (
    <div className='flex justify-around p-[16px] shadow-black shadow-inner'>

          <div className='flex items-center gap-[7px]'>
               <img src={logo} alt="navlogo" className="" />
               <p className='text-black text-4xl font-semibold'>SUNDAY</p>
          </div>
                        
          <ul className='flex items-center gap-x-[50px]  text-gray-500 text-2xl font-semibold '>
            <li  onClick={()=>{setMenu("shop")}} className='flex flex-col items-center justify-center gap-[4px] cursor-pointer'>  <Link to="/">Shop</Link>{menu==="shop" ?<hr></hr>: <></>}</li>
            <li onClick={()=>{setMenu("men")}} className='flex flex-col items-center justify-center gap-[4px] cursor-pointer'> <Link to="/mens">Mens</Link> {menu==="men" ?<hr></hr>: <></>}</li>
            <li onClick={()=>{setMenu("women")}} className='flex flex-col items-center justify-center gap-[4px] cursor-pointer'> <Link to="/womens">Womens</Link> {menu==="women" ?<hr></hr>: <></>}</li>
            <li onClick={()=>{setMenu("kids")}} className='flex flex-col items-center justify-center gap-[4px] cursor-pointer'> <Link to="/kids">Kids</Link> {menu==="kids" ?<hr></hr>: <></>}</li>
            </ul>

          <div className='flex items-center gap-[20px] '>
               <Link to="/login"><button>Login</button></Link>
               <Link to="/cart"><img src={cart_icon} alt="cart"/></Link>
               
               <div className='w-[22px] h-[22px] flex justify-center items-center mt-[-35px] ml-[-34px] rounded-full text-[15px] font-semibold bg-red-500 text-white'>
                    {getTotalItem()}
               </div>
               
          </div>

    </div>
  );
}

export default Navbar