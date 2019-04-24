import React, {Component} from 'react'
import SabbaiLogo from "../images/logo.png"
import {Link} from 'gatsby'



export default class Navii extends Component {
    constructor(){
        super()
        this.state = {
            scrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100
            if (isTop !== true) {
            this.setState({scrolled: true}) 
            } else {
                this.setState({scrolled: false})
            }
        })
    }

    render() {
        return (
          <div className="SabaaiHeader">
            <div className="SabaaiNav">
              <div className="SabbaiMenuLogo">
                <Link to="/">
                  <img
                    className="center"
                    src="https://www.sabaai.com.br/images/logo-small.png"
                    alt="SABAAI"
                  />
                </Link>
              </div>
              <div className="SabaaiMenu">
                <Link to="/#cursos">Cursos</Link>
                <Link to="/#cursos">Cursos</Link>
                <Link to="/#cursos">Cursos</Link>
                <Link to="/#cursos">Cursos</Link>
              </div>
              <div className="SabbaiMenuLogo" />
            </div>

            <div className="SabaaiLogo">
              <img src={SabbaiLogo} alt="" />
            </div>
            <div className="Sabba" />
          </div>
        )
}
}

