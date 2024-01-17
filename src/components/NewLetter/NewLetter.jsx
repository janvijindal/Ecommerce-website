import React from 'react'
import "./newletter.css"
const NewLetter = () => {
  return (
    <div className='newletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe To Our NewsLetter And Stay Connected</p>
        
        <div>
              <input type="email" placeholder='Your Email Id' />
              <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewLetter
