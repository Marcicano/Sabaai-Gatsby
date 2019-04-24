import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Nav from "../components/Nav"
import { IconContext } from "react-icons"
import { FaMapMarkerAlt, FaCalendarAlt, FaRegClock } from "react-icons/fa"







const Agendas = () => {
  
  const data = useStaticQuery(graphql`
      query PageAgendas {
        agendas:allMarkdownRemark(
          filter: {
            frontmatter: { templateKey: { eq: "cidades-informacoes" } }
          }
        ) {
          edges {
            node {
              id
              html
              fields {
                slug
              }
              frontmatter {
                templateKey
                title
                textocard
                thumbnail
              }
            }
          }
        }
      }
    `)
    
    return (
      <React.Fragment>
        <Nav />
        <div className="container page-section">
          <div className="col page-title">
            <h1> Proximos Cursos </h1>
          </div>
          <section className="" id="">
            <div className="row">
              {data.agendas.edges.map(item => {
                return <Agenda key={item.node.id} agenda={item.node} />
              })}
            </div>
          </section>
        </div>
      </React.Fragment>
    )
}

export default Agendas



const Agenda = ({agenda}) => {
    const { title, textocard, thumbnail } = agenda.frontmatter
    const { slug } = agenda.fields
  return (
    <React.Fragment>
      <div className="col-xs-12 col-md-6">
        <Link to={`/agenda/${slug}`} state={{ isHomePage: true }}>
          <div className="card">
            <div className="card-header">
              <img
                className="card-img-bottom bg-color-1"
                src={thumbnail}
                alt={`Agenda ${title}`}
              />
              <div className="hovercard">
                <button className="card-button">Confira</button>
              </div>
            </div>
            <div className="card-body">
              <p>
                <FaMapMarkerAlt fill="white" />
              </p>
              <p> {title}</p>
            </div>
            <div className="card-footer">
              <div className="card-footer--calendar">
                <p>
                  <FaCalendarAlt fill="white" /> 12/05/2019
                </p>

                <p>
                  <FaRegClock fill="white" /> 19:00
                </p>
              </div>
              <div className="divider" />
              <div className="card-footer--info">
                <p>{textocard}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  )
}
