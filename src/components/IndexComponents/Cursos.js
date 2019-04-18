import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"


const Cursos = () => {
  const data = useStaticQuery(graphql`
  query {
  allMarkdownRemark(
    sort: {
      fields: [frontmatter___position]
      order: ASC
    }
  ) {
    edges{
      node{
        id
        fields {
          slug
        }
        frontmatter{
          title
          thumbnail
          position
          date
          cidadeCurso
          publicoCurso
          sobreCurso
          valorVista
          valorParcelado
        }
      }
    }
  }
}
  `)

  const cursos = data.allMarkdownRemark.edges
  return (
    <React.Fragment>
      <section className="gallery" id="cursos">
          <div className="row">
          {cursos.map(item => {
            return <Curso key={item.node.id} curso={item.node} />
          })}  
          </div>  
      </section>
    </React.Fragment>
  )
}

export default Cursos




const Curso = ({curso}) => {
  console.log(curso.fields.slug)
  const { thumbnail, title, cidadeCurso } = curso.frontmatter
  const { slug } = curso.fields
  return (
    <React.Fragment>
          <div className="col-xs-12 col-md-6">
            <div className="gallery-item col-xs-12 ">
              <Link to={`/cursos/${slug}`}>
                <img src={thumbnail} alt="" className="curso-image center-image" />
                <div className="row middle-xs center-xs overlay">
                  <div className="col-xs-12 cursos-text">
                    <h3>{title}</h3>
                    <h4>{cidadeCurso}</h4>
                  </div>
                </div>
              </Link>
            </div>
          </div>
    </React.Fragment>
  )
}



