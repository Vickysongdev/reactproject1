import React from 'react'
import woman from '../src/images/vrht.png'
const VrHeadset = () => {
  return (
    <div>

<div  className="Wireless">
        <div className="vrht" >
            <img src={woman} alt="Wirele" />
        </div>

        <div className="vrh">
            <h1>Get Your VR Headset</h1>
            <p>Enjoy exclusive premium concerts, movies, <br /> games and other exciting experiences in <br /> massive VR Venues.</p>
           
            <button  className="submit"><a href="/">BUY NOW</a></button>

            {/* <div className="Wirelex-icons" >
            <img src={vote} alt="vot" width="30px"  />
            <h6 class="vot">Free delivery</h6>
            <img src={vote} alt="vot" width="30px"  />
            <div><h6 class="vot">Worry-free Trial</h6></div> */}
        </div>
        </div>





    </div>
  )
}

export default VrHeadset