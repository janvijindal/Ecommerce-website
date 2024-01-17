import React from 'react'
import arrow from "../Assests/breadcrum_arrow.png"
import "./breadcrum.css"
const BreadCrums = (props) => {
    const {product}=props
  return (
    <div className='flex bread items-center gap-[8px] font-semibold '>
        HOME <img src={arrow} alt="" />  SHOP <img src={arrow} alt="" /> {product.category}
        <img src={arrow} alt="" /> {product.name}
    </div>
  )
}

export default BreadCrums
