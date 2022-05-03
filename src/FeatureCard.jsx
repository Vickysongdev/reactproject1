import React from 'react'
import Features from '../src/Features'
import oculus from '../src/images/octobus.png'
import degree from './images/360-degrees.png'
import headset from './images/headphone.png'
import pc from './images/pc.png'


const data = [
    {image: degree, title:'3600 Virtual Reality Glasses' , content: 'It is a long established fact that a reader'},
     {image: headset, title:'Interactive VR Simulator' , content: 'It is a long established fact that a reader'},
      {image: pc, title:'Tablet, PC Control System' , content: 'It is a long established fact that a reader'},

]

const FeatureCard = () => {
  return (
    <div className="features">
    <div className="col-md-6 offset-md-3 text-center mb-md-5">
      <h6>WHY IT BEST</h6>
      <h2>
        The only comprehensive, simple and secure content platform that works
        with most smartphones.
      </h2>
    </div>

    <div className="features-content mt-md-5">
      <div className="row">
        <div className="col-md-5">
          <h2>Core features</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content
          </p>
          {data.map(({image, title, content}) => (
            <Features image={image} title={title} content={content} />
          ))}
        </div>
        <div className="col-md-5 oculus">
            <img src={oculus} alt=""/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FeatureCard