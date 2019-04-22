import React from 'react'
import { graphql } from "gatsby";

export const queryPage = graphql`
    query Pageagenda (
  $slug : String
){
  markdownRemark (
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
const agendaTemplate = () => {
  return (
    <React.Fragment>
          <div className="container">
              <div className="col page-title">
                  <h1> Agenda </h1>
              </div>
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
          <div className="container page-section">
            <h1>Ola from conteudo para agenda!</h1>
          </div>
    </React.Fragment>
  )
}

export default agendaTemplate
