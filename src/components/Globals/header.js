import React from "react"

import Nav from "../Nav"
import SabbaiLogo from "../../images/logo.png"

const Header = () => (
  <header className="row middle-xs center-xs">
    <div className="col-xs-12 intro-logo" id="intro-logo">
      <div className="row middle-xs center-xs">
        <Nav />
        <div className="col-xs-12">
          <img className="LogoSabaai" src={SabbaiLogo} alt="SABAAI" />
        </div>
      </div>
    </div>
  </header>
)



export default Header

