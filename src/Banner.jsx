import React from 'react'
import guy from '../src/images/nice-png-virtual-reality-png-1912196@2x.png'

const Banner = () => {
  return (
    <div className="banner-bg">
    <div className="container">
      <div className="row banner">
        <div className="col-md-4 offset-1">
          <span className="highlight">OCULUS QUEST</span>
          <h1>Oculus Go Standalone Virtual Reality Headse - 32GB</h1>
          <p>User controlled playback of 360° video content</p>
          <div className="col-md-8">
            <div className="btn btn-primary d-block">Buy Now</div>
          </div>
        </div>

        <div className="col-md-5">
          <img src={guy} alt="guyimage" width="100%" class="enter" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Banner