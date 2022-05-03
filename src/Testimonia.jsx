import React from 'react'
import ava1 from '../src/images/ava-1.png'
import ava2 from '../src/images/ava-2.png'
import ava3 from '../src/images/ava-3.png'
import woman from '../src/images/women-vr@2x.png'

const Testimonia = () => {
  return (
    <>

<div  className="reviewcont">
        <h1  className="reviewtitle">Customer reviews</h1>
        <p>Easy to switch, upgrade, or cancel at any time.</p>
    </div>

   
   <div  className="testimonial-main-content">
   <div class="testimonial-main">
		
    <div class="content-wrap">
											
                      <div class="info">
                        <div class="image ">
                     <span class="quote"><i class="fas fa-quote-right"></i></span>	
                   <img src={ava1} alt="ava1" /></div>
                    
                <div class="cite"><h4 class="name">Jioke Ugoorji</h4><span class="position">@Jioke</span></div>
                
              </div>
                  
                    <div class="content">
                  
                  
                  <div class="text">
                    High quality of the theme. The  <br /> design is beautiful. The customer <br /> support is absolutely great, they <br /> have always been willing to help.				</div>
          
                  <div class="testimonial-rating"><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></div>			</div>
              
                        
              
                            </div>
              </div>
          
              
              <div className="swiper-slide elementor-repeater-item-c766f91 swiper-slide-visible swiper-slide-next" data-swiper-slide-index={1} style={{width: 370, marginRight: 30}}>
            <div className="testimonial-item">
              <div className="testimonial-main-content">
                <div className="content-wrap">
                  <div className="info">
                    <div className="image ">
                      <span className="quote"><i className="fas fa-quote-right" /></span>
                      <img src={ava2} alt="ava3" />	</div>
                    <div className="cite"><h4 className="name">Iruka Akuchi</h4><span className="position">@iruka-Akuchi</span></div>
                  </div>
                  <div className="content">
                    <div className="text">
                      Amazing support! Totally all over my issues and we were changing it completely from being a place directory! Loving the theme!				</div>
                    <div className="testimonial-rating"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></div>			</div>
                </div>
              </div>
            </div>
          </div>
          
          
          <div className="swiper-slide elementor-repeater-item-eb032db swiper-slide-visible" data-swiper-slide-index={2} style={{width: 370, marginRight: 30}}>
            <div className="testimonial-item">
              <div className="testimonial-main-content">
                <div className="content-wrap">
                  <div className="info">
                    <div className="image ">
                      <span className="quote"><i className="fas fa-quote-right" /></span>		 <img src={ava3} alt="ava3" />	</div>
                    <div className="cite"><h4 className="name">Carla Wildner</h4><span className="position">@carla-wildner</span></div>
                  </div>
                  <div className="content">
                    <div className="text">
                      I have buyed and tested more then 10 themes, and Sala its perfect for me, i think its the perfect theme !! Two thumbs up!</div>
                    <div className="testimonial-rating"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></div>			</div>
                </div>
              </div>
            </div>
          </div>
          
   </div>



   <div   className="askpages">
     <div  className="woman"><img src={woman} alt="woman" /></div>

     <div  className="womancont">
       <h1>Frequently asked  questions</h1>
       <p>Does the Oculus Go have bluetooth?</p>
       <p>Can I download movie using internal drive?</p>
       <p>Can you play games like beat sabre on it?</p>
       <p>Does this come with a charger?</p>
     </div>

   </div>
          
    </>
  )
}

export default Testimonia