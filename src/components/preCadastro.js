import React from 'react'

const preCadastro = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="col page-title">
          <h1> tutulo qualquer</h1>
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
    </React.Fragment>
  )
}

export default preCadastro
