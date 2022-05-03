import React from 'react'
import battery from '../src/images/empty-battery.png'
import saftglass from './images/safety-glasses.png'
import Headset from './images/vr-glasses.png'
import Adapter from './images/vr-glasses.png'
 import jsver from './images/jsver-oculus-quest-carrying-case@2x.png'


const BatteriesPage = () => {
  return (
    <div>
      <div  className="includpages">
        <div  className="includconent">
          <h1 className="includtitle">What included</h1>
          <p>It is a long established fact that a reader will  <br /> be distracted by the readable content</p>
          <div  className="includimgs">
        <img src={battery} alt=""/>
        <div  className="includcont">
          <h6>Two AA Batteries</h6>
        </div>
        </div>

        <div  className="includimgs">
        <img src={saftglass} alt=""/>
        <div  className="includcont">
          <h6>Glasses Spacer</h6>
        </div>
        </div>

        <div  className="includimgs">
        <img src={Headset} alt=""/>
        <div  className="includcont">
          <h6>VR Headset</h6>
        </div>
        </div>

        <div  className="includimgs">
        <img src={Adapter} alt=""/>
        <div  className="includcont">
          <h6>Power Adapter</h6>
        </div>
        </div>








        </div>

        <div   className="includimgleft"><img src={jsver} alt=""/></div>
        
        
        


      </div>
 




    </div>
  )
}

export default BatteriesPage