import React from 'react'
import { graphql } from "gatsby";
import Agendas from "../pages/agendas"
import Nav from "../components/Nav"
import Footer from "../components/Globals/Footer"
import Cadastro from "../components/preCadastro"

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
    html
    frontmatter {
     title
      
    }
  }
}
`
const agendaTemplate = ({data}) => {
  const conteudo = data.selectedcidade.html
  return (
    <React.Fragment>
      <Nav />
      <Cadastro />
      <div className="container"
        dangerouslySetInnerHTML={{__html: conteudo}}
        />
        
      
      <Footer />
    </React.Fragment>
  )
}

export default agendaTemplate
