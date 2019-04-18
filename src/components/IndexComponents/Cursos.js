import React from 'react'
import { Link } from "gatsby"
import ImageTeste from "../../images/cursos/formacao.png"


const Cursos = () => {
  return (
    <React.Fragment>
      <section className="gallery" id="cursos">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="gallery-item col-xs-12 ">
              <Link to="">
                <img src={ImageTeste} alt="" className="curso-image center-image" />
                <div className="row middle-xs center-xs overlay">
                  <div className="col-xs-12 cursos-text">
                    <h3>Curso</h3>
                    <h4>cidadeCurso</h4>
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

export default Cursos





// Ativar esse component quando fizer o loop

// const Curso = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }



