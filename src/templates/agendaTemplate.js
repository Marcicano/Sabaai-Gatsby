import React from 'react'
import { graphql } from "gatsby";
import Agendas from "../pages/agendas"
import Nav from "../components/Nav"
import Footer from "../components/Globals/Footer"
import preCadastro from "../components/preCadastro"

export const queryPage = graphql`
    query Pageagenda (
  $slug : String
){
  selectedcidade:markdownRemark (
    fields: {
      slug:{
        eq: $slug
      }
    }
  ) {
    frontmatter {
     title
      
    }
  }
}
`
const agendaTemplate = ({data, location}) => {
  console.log(location.state)
  
  return (
    <React.Fragment>
      <Nav />
      <div className="container">
        <div className="container">
          <div className="inscrevase-container">
            <form id="preinscricao">
              <input type="hidden" name="preinscricao" defaultValue />
              <input type="hidden" name="curso" defaultValue />
              <div className="row">
                <div className="col-xs-12">
                  Inscreva-se já! Demora menos de 2 minutos.
                </div>
                <div className="col-xs-12 col-sm-9">
                  <input
                    type="email"
                    title="email"
                    name="email"
                    placeholder="Informe-nos seu email!"
                  />
                </div>
                <div className="col-xs-12 col-sm-3">
                  <input type="submit" placeholder="Inscreva-se!" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default agendaTemplate
