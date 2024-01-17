import React from 'react'
import "./item.css"
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='w-[300px] hover:scale-105 duration-700 item'>
            <Link to={`/product/${props.id}`}> <img onClick={window.scrollTo(0,0)} src={props.image} alt="" /> </Link>
             <p >{props.name}</p>
             {/* item-prices */}
             <div className='flex gap-[10px]'>
                   {/* new */}
                   <div className='text-inherit text-[18px] font-semibold '>${props.new_price}</div>

                   {/* old */}
                   <div className='text-gray-500 text-[18px] font-[500] line-through'>${props.old_price}</div>
             </div>
    </div>
  )
}

export default Item
