import React, { useState } from "react";
import { createContext } from "react";
import all_product from "../components/Assests/all_product"

export const ShopContext = createContext(null);

const getDefaultCart=()=>{
   let cart={};
   for(let index=0;index < all_product.length+1;index++){
       cart[index]=0;
   }
   return cart;
}

const ShopContextProvider=(props)=>{
   const[cartItems,setCartItems]=useState(getDefaultCart())
   
      
   const addToCart=(itemID)=>{
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID]+1}))
        console.log(cartItems)
   }

   const removeFromCart=(itemID)=>{
      setCartItems((prev)=>({...prev,[itemID]:prev[itemID]-1}))
 }

 const getTotalAmount=()=>{
      let totalAmount=0;
      for(const item in cartItems){
           if(cartItems[item] > 0){
               let itemInfo=all_product.find( (product)=>product.id===Number(item));
               totalAmount+=itemInfo.new_price * cartItems[item]
           }

           
      }

      return totalAmount;
 }

 const getTotalItem=()=>{
      let totalItem=0;
      for(const item in cartItems){
         if(cartItems[item] > 0){
              totalItem+=cartItems[item]
      }

 }
    return totalItem;

}

 const contextValue={all_product,cartItems,addToCart,removeFromCart,getTotalAmount,getTotalItem};

   console.log("the cart item r:",cartItems)
  // console.log("total amount:",getTotalAmount());
      
       return(
          <ShopContext.Provider value={contextValue}>
               {props.children}
          </ShopContext.Provider>
       )
}

export default ShopContextProvider;