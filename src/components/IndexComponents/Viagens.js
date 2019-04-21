import React from 'react'
import {Link, useStaticQuery, graphql } from "gatsby"




const Viagens = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { viagemKey: { eq: "viagem-info" } } }
      ) {
        edges {
          node {
            frontmatter {
              viagemKey
              title
              content
            }
          }
        }
      }
    }
  `)
  const viagem = data.allMarkdownRemark.edges[0].node.frontmatter
  return (
    <React.Fragment>
      <section className="about" id="viagem">
        <div className="container middle-xs ">
          <div className="row content">
            <div className="col-xs-12 middle-xs whitebox">
              <h2>{viagem.title}</h2>
              {/* <p>{viagem.content}</p> */}
              <div dangerouslySetInnerHTML={{ __html: viagem.content }} />
            </div>
            <div className="col-xs-12 col-sm-9 viagem-link ">
              <br />
              <Link to="">Faça sua pré inscrição agora clicando aqui!</Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Viagens





