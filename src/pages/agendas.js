import React from "react"
import { graphql } from "gatsby"
import teste from "../images/BeFunky.jpg"
import teste2 from "../images/testethai.jpg"

import Nav from "../components/Nav"

export const queryPage = graphql`
  query Pageagendas($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
    }
  }
`
const agendas = () => {
  return (
    <React.Fragment>
      <Nav />
      <div className="container page-section">
        <div className="col page-title">
          <h1> Confira nossa Agenda de cursos </h1>
        </div>
        <section className="" id="">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div class="card">
                {/* <h2>Rio de Janeiro</h2> */}
                <div className="card-header">
                  <img
                    class="card-img-bottom"
                    src={teste}
                    alt="Card image cap"
                  />
                </div>
                <div class="card-body">
                  <h3>Rio de Janeiro</h3>
                  <p>
                    It's a broader card with text below as a natural lead-in to
                    extra content. This content is a little longer.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-md-6">
              <div class="card">
                {/* <h2>Rio de Janeiro</h2> */}
                <div className="card-header">
                  <img
                    class="card-img-bottom"
                    src={teste}
                    alt="Card image cap"
                  />
                </div>
                <div class="card-body">
                  <h3>Rio de Janeiro</h3>
                  <p>
                    It's a broader card with text below as a natural lead-in to
                    extra content. This content is a little longer.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-md-6">
              <div class="card">
                {/* <h2>Rio de Janeiro</h2> */}
                <div className="card-header">
                  <img
                    class="card-img-bottom"
                    src={teste}
                    alt="Card image cap"
                  />
                </div>
                <div class="card-body">
                  <h3>Rio de Janeiro</h3>
                  <p>
                    It's a broader card with text below as a natural lead-in to
                    extra content. This content is a little longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}

export default agendas
