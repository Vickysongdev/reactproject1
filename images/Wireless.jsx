import React from 'react'
import Wireles from './img-44@2x.png'
import vote from './vote.png'
const Wireless = () => {
  return (
    <div  className="Wireless">
        <div className="Wirelex" >
            <img src={Wireles} alt="Wirele" />
        </div>

        <div className="Wirelex-content">
            <h6  className="num1">-15%</h6>
            <h1  className="num2">Wireless <br /> Headphones</h1>
            <h4   className="num3">$65.00$55.00</h4>
            <p   className="num4">Pellentesque habitant morbi tristique senectus <br /> et netus et malesuada fames ac turpis egestas. <br /> Vestibulum tortor quam, feugiat vitae, ultricies  <br /> eget, tempor sit   amet, ante. Donec eu libero sit  <br /> amet quam egestas semper. Aenean ultricies mi  <br /> vitae est. Mauris placerat eleifend leo.</p>

            <button  className="submit"><a href="/">BUY NOW</a></button>

            <div className="Wirelex-icons" >
            <img src={vote} alt="vot" width="30px"  />
            <h6 class="vot">Free delivery</h6>
            <img src={vote} alt="vot" width="30px"  />
            <div><h6 class="vot">Worry-free Trial</h6></div>
        </div>
        </div>





    </div>
  )
}

export default Wireless