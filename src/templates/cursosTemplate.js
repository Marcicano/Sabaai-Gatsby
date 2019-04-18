import React from 'react'
import { graphql } from "gatsby";

export const queryPage = graphql`
    query Pagebypath (
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
     publicoCurso
      sobreCurso
      abordagemCurso
      valorVista
      valorParcelado
      thumbnail
    }
  }
}
`


const internalPage = ({data}) => {
    
    const { title, publicoCurso, sobreCurso, abordagemCurso, valorVista, valorParcelado } = data.markdownRemark.frontmatter
  return (
      <React.Fragment>
             <div className="container">
               <div className="col page-title">
                 <h1> {title} </h1>
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
                       <input type="submit" defaultValue="Inscreva-se!" />
                     </div>
                   </div>
                 </form>
               </div>
             </div>
             <div className="container page-section">
               <div className="col">
                 <h2 className="page-section">A quem é destinado este curso?</h2>
                  <p> {publicoCurso} </p>
                 <h2>Sobre o curso</h2>
                 <p> {sobreCurso} </p>
                 <h2>O que será abordado nas aulas</h2>
                 <p> {abordagemCurso} </p>
                 <h2>Valores</h2>
                 <ul>
                   <li>
                     <p> {valorVista}</p>
                   </li>
                   <li>
                     <p> {valorParcelado} </p>
                   </li>
                 </ul>
               </div>
             </div>
           </React.Fragment>
  )
}

export default internalPage
