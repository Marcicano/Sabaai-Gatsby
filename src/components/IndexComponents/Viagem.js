import React from 'react'

const Viagem = () => {
  return (
    <React.Fragment>
      <section className="about" id="viagem">
        <div className="container middle-xs ">
          <div className="row content">
            <div className="col-xs-12 middle-xs whitebox">
              <h2>Viagem à Tailândia</h2>
              <p>
                Em breve viaje conosco para um dos destinos mais fascinantes
                do mundo, a incrível Tailândia para uma imersão na cultura e
                nos estudos das técnicas de massagem.
              </p>

              <p>Aguarde para novas informações!</p>

              <p>Estamos preparando tudo, e será imperdível!</p>
            </div>
            <div className="col-xs-12 col-sm-9 viagem-link ">
              <br />
              <a href="/cursos/viagem-tailandia">
                Faça sua pré inscrição agora clicando aqui!
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Viagem
