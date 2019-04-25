import React from 'react'
import { graphql } from "gatsby";
import Nav from "../components/Nav"
import Footer from "../components/Globals/Footer"
import Cadastro from "../components/preCadastro"
import Layout from "../components/layout"

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
     location

      
    }
  }
}
`
const agendaTemplate = ({data}) => {
  console.log(data)
  const conteudo = data.selectedcidade.html
  return (
    <Layout>
      
      <Cadastro />
      <div className="container"
        dangerouslySetInnerHTML={{__html: conteudo}}
        />
        
      
      
    </Layout>
  )
}

export default agendaTemplate
