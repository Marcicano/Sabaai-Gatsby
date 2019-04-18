import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import ImageTeste from "../../images/cursos/formacao.png"


const Cursos = () => {
  const data = useStaticQuery(graphql`
  query {
  allMarkdownRemark {
    edges{
      node{
        id
        fields {
          slug
        }
        frontmatter{
          title
          thumbnail
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

  
  return (
    <React.Fragment>
      {data.allMarkdownRemark.edges.map(item => {
        return <Curso key={item.node.id} curso={item.node} />
      })}
      
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
      <section className="gallery" id="cursos">
        <div className="row">
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
        </div>
      </section>
    </React.Fragment>
  )
}



