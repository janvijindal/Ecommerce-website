import React from 'react'
import "./footer.css"
import footer_logo from "../Assests/logo_big.png"
import insta from "../Assests/instagram_icon.png"
import pintest from "../Assests/pintester_icon.png"
import whatsapp from "../Assests/whatsapp_icon.png"
const Footer = () => {
  return (
    <div className='footer flex flex-col justify-center items-center gap-[50px]'>

            {/* footer logo */}
            <div className="logo flex items-center gap-[15px]">
                 <img src={footer_logo} />
                 <p className='text-[46px] '>SUNDAY</p>
            </div>

           <ul className='footer-link flex gap-[50px] text-[20px] '>
            <li>Companies</li>
            <li>Product</li>
            <li>Office</li>
            <li>About</li>
            <li>Contact</li>
           </ul>

           <div className="icons flex gap-[20px] ">
               <div className="container-icon">
                <img src={insta} alt="insta" />
               </div>
               <div className="container-icon">
               <img src={pintest} alt="pintest" />
               </div>
               <div className="container-icon">
               <img src={whatsapp} alt="insta" />
               </div>
                </div>

              {/* copyright */}
              <div className="copyright flex flex-col gap-[30px] items-center w-[100%] mb-[30px] text-[20px] ">
                   <hr />
                   <p>Copyright @Janvijindal - All Right Reserved.</p>
              </div>

    </div>
  )
}

export default Footer

                   