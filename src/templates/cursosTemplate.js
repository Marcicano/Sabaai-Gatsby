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
    html
    frontmatter {
     title
      thumbnail
    }
  }
}
`


const internalPage = ({data}) => {
    
    const { title } = data.markdownRemark.frontmatter
    const conteudo = data.markdownRemark.html
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
                       <input type="submit" placeholder="Inscreva-se!" />
                     </div>
                   </div>
                 </form>
               </div>
             </div>
             <div className="container page-section"
        dangerouslySetInnerHTML={{ __html: conteudo}}
              />
               
             
           </React.Fragment>
  )
}

export default internalPage

