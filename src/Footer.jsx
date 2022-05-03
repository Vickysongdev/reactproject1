import React from 'react'
import logo from '../src/images/black.svg'

const Footer = () => {
  return (
    <>
        <div  className="footer">
            <div  className="footerlogo">
               <a className="navbar-brand" href="/">
                  <img src={logo} alt="logo" />
              </a>
              <p   className="navcont">A amazing WordPress theme <br /> designed specifically for a <br /> startup, apps, business, SaaS, <br /> and IT services.</p>
            </div>
            <div  className="footercontent1">
               <div><h4>Company</h4></div>
               <div  className="footercon1"><a href="/">About us</a></div>
               <div className="footercon1"><a href="/">Blog</a></div>
               <div className="footercon1"><a href="/">Careers</a></div>
               <div className="footercon1"><a href="/">Contact</a></div>
            </div>
            <div  className="footercontent1">
               <div><h4>Resources</h4></div>
               <div  className="footercon1"><a href="/">Services</a></div>
               <div className="footercon1"><a href="/">Help Center</a></div>
               <div className="footercon1"><a href="/">Partners</a></div>
               <div className="footercon1"><a href="/">Privacy Policy</a></div>
            </div>
            <div  className="footercontent1">
               <div><h4>Social Media</h4></div>
               <div  className="footercon1"><a href="/">Facebook</a></div>
               <div className="footercon1"><a href="/">Twitter</a></div>
               <div className="footercon1"><a href="/">Instagram</a></div>
               <div className="footercon1"><a href="/">Linkedin</a></div>
            </div>
            <div  className="footercontent1">
               <div><h4>Newsletter</h4></div>
               <div><p>Subcribe our newsletter and stay <br /> up to date about the company</p></div>
               <div>
                   <span>
                       <input type="email" name="EMAIL" placeholder="Your email address" className="footerem"/>
                       <input type="button" value="Subscribe" class="btn btn-primary"/>
                   </span>
               </div>
             
            </div> 
        </div>
        <hr />

        <div  class="copyright">
            <div><h6>© 2021 Vickytech. All rights reserved</h6></div>
            <div><h6>Terms <a href="/">Vicky</a> Privacy Policy</h6></div>
        </div>



    </>
  )
}

export default Footer