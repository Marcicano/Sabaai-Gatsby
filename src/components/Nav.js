import React from 'react'
import {Link} from 'gatsby'


const Nav = () => {
  
  return (
    <nav className="row middle-xs center-xs">
      <div className=" col-12 col-xs-12 col-sm-1 logo">
        <Link to="/">
          <img
            src="https://www.sabaai.com.br/images/logo-small.png"
            alt="SABAAI"
          />
        </Link>
      </div>
      <div className="col-sm-2 menu-item-lg">
        <h3>
          <Link to="/#cursos">Cursos</Link>
        </h3>
      </div>
      <div className="col-sm-2 menu-item-lg">
        <h3>
          <Link to="/#nos">Nós</Link>
        </h3>
      </div>
      <div className="col-sm-2 menu-item-lg">
        <h3>
          <Link to="/#viagem">Viagem</Link>
        </h3>
      </div>
      <div className="col-sm-2 menu-item-lg">
        <h3>
          <Link to="/#contact">Contato</Link>
        </h3>
      </div>
      <div className="col-sm-2 menu-item-lg">
        <h3>
          <Link to="/agenda/cidades">Agenda</Link>
        </h3>
      </div>
    </nav>
  )
}

export default Nav
