import React from 'react'
import {Link} from "gatsby"
import SabbaiLogo from "../../images/logo.png"
import Nav from "../Nav"

const HeaderInternal = () => {
  return (
    <div className="header-internal">
      <div className="intro-logo" id="intro-logo">
        <img className="LogoSabaai" src={SabbaiLogo} alt="SABAAI" />
      <Nav/>
      </div>
      
    </div>
  )
}

export default HeaderInternal
