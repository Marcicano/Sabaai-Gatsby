import React from 'react'
import Logo1 from "../../images/logo1.jpg"
import Logo2 from "../../images/logo2.jpg"
import Logo3 from "../../images/logo3.jpg"
import Logo4 from "../../images/logo4.jpg"
import Logo5 from "../../images/logo5.jpg"
import Logo6 from "../../images/logo6.jpg"
import {graphql, useStaticQuery} from "gatsby"



const Professores = () => {
  const data = useStaticQuery(graphql`
   {
    professor:allMarkdownRemark(
      filter: {
        frontmatter: {
          professorKey:{ eq: "professor-info"} 
        }
      }
      ){
        edges{
          node{
            id
            frontmatter{
              professorKey
              title
              thumbnail
              content
            }
          }
        }
      }
    }
  `)
    const professores = data.professor.edges
    
return (
    <React.Fragment>
      {professores.map(item => {
        return <Professor key={item.node.id} professor={item.node}/>
      })}
    </React.Fragment>
  )
}

export default Professores



const Professor = ({professor}) => {
  const {title, thumbmail, content} = professor.frontmatter
  return (
    <section className="about" id="nos">
      <div className="container middle-xs">
        <div className="row content">

          <div className="col-xs-12 col-sm-4 middle-sm">
            <img className="img-professor" src={thumbmail} alt={title} />
          </div>
          <div className="col-xs-12 col-sm-8 middle-sm">
            <h3 className="professor-title" id="prof-anderson-marcicano"> {title} </h3>
            <p className="professor-text">
              {content}
            </p>
          </div>
          {title !== "Prof. Anderson Marcicano" ? (
            <div className="row content certificao"></div>
          ) : (
              <div className="row content certificao">
                <div className="col-xs-4 col-sm-2"><a href="https://www.moph.go.th"><img src={Logo1} alt="icon" /></a></div>
                <div className="col-xs-4 col-sm-2"><a href="http://www.en.moe.go.th/enMoe2017/"><img src={Logo2} alt="icon" /></a></div>
                <div className="col-xs-4 col-sm-2"><a href="https://www.oasisschool.biz"><img src={Logo3} alt="icon" /></a></div>
                <div className="col-xs-4 col-sm-2"><a href="www.spamantra.com"><img src={Logo4} alt="icon" /></a></div>
                <div className="col-xs-4 col-sm-2"><a href="http://www.itmthaimassage.com"><img src={Logo5} alt="icon" /></a></div>
                <div className="col-xs-4 col-sm-2"><a href="http://thaihealingalliance.com"><img src={Logo6} alt="icon" /></a></div>
              </div>
          ) }
        </div>
      </div>
    </section>
  )
}



