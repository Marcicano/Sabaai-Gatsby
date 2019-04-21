import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { id: { eq: "f232a0d8-ba13-5e19-a664-c542a8c72a23" } }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              texto
            }
          }
        }
      }
    }
  `)
  const introtexto = data.allMarkdownRemark.edges[0].node.html
  return (
    <React.Fragment>
      <section className="intro" id="intro">
        <div className="container middle-xs">
          <div className="row content">
            <div className="col-xs-12 middle-xs whitebox">
              <div dangerouslySetInnerHTML={{__html: introtexto}} />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Intro
