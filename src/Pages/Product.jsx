import React, { useContext } from 'react'
//import ShopContext from "../Context/ShopContext"
import { useParams } from 'react-router-dom';
import BreadCrums from '../components/breadcrums/BreadCrums';
import all_product from "../components/Assests/all_product"
import ProductDisplay from '../components/productDisplay/ProductDisplay';
import DescriptionBox from '../components/Descriptionbox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';
const Product = () => {
   // const {all_product}=useContext(ShopContext)
    const {productID}=useParams();
    const product=all_product.find((e)=>
          e.id===Number(productID))
  return (
    <div>
         <BreadCrums product={product}></BreadCrums>
         <ProductDisplay product={product}></ProductDisplay>
         <DescriptionBox></DescriptionBox>
         <RelatedProducts></RelatedProducts>
    </div>
  )
}

export default Product
