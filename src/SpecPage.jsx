import React from 'react'
import oculus from '../src/images/151-1513346-oculus-quest-headset-hd-png-download@2x.png'
import Field from '../src/images/cube.png'
import lens from '../src/images/camera-lens-svgrepo-com (1).svg'
import Focal from '../src/images/47 img.png'
import jug from '../src/images/water-jug.png'

const SpecPage = () => {
  return (
   <div className="oculupus">
      <div  className="oculup">
       <h2  className="speci">Specifications</h2>
       <p  className="fact">It is a long established fact that</p>
       <img src={oculus} alt="oculus"class="pus"/>
     </div>
     <div  className="oculusicons">
       <div  className="fedicon">
       <img src={Field} alt="field" width="50px" class="fied"/>
       <nav>Field of View <br /> <h2>108°</h2></nav>
       </div>
       <div  className="fedicon">
       <img src={lens} alt="field" width="50px" class="fied"/>
       <nav>HD Lens Diameter <br /> <h2>38mm</h2></nav>
       </div>
       <div  className="fedicon">
       <img src={Focal} alt="field" width="50px" class="fied"/>
       <nav>Focal Adjustment<br /> <h2>0 to 300°</h2></nav>
       </div>
       <div  className="fedicon">
       <img src={jug} alt="field" width="50px" class="fied"/>
       <nav>Weight <br /> <h2>241g</h2></nav>
       </div>
        
       


     </div>
   </div>
  )
}

export default SpecPage