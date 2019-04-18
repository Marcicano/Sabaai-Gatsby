import React from 'react'

import Facebook from "../../images/facebook.png"
import Instagram from "../../images/instagram.png"
import Whatsapp from "../../images/whatsapp.png"




const Footer = () => {
  return (
    
      <footer className="row middle-xs center-xs footer-sabaai">
        <div className="col-xs-4 col-sm-1">
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sabaaithai/">
            <img src={Facebook} alt="social" rel="noopener noreferrer" />
          </a>
        </div>
        <div className="col-xs-4 col-sm-1">
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/thaisabaai/">
            <img src={Instagram} alt="social" />
          </a>
        </div>
        <div className="col-xs-4 col-sm-1">
          <a
            target="_blank"
          rel="noopener noreferrer"
            href="https://api.whatsapp.com/send?phone=5521986199671"
          >
            <img src={Whatsapp} alt="social" rel="noopener noreferrer" />
          </a>
        </div>
        <div className="col-xs-12">
        Copyright &copy; 2019 Sabbai.
        </div>
      </footer>
    
  )
}

export default Footer
