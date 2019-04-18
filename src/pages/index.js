import React from "react"


import Layout from "../components/layout"


// Import Components 
import Intro from "../components/IndexComponents/Intro"
import Cursos from "../components/IndexComponents/Cursos"
import Professor from "../components/IndexComponents/Professor"
import Viagem from "../components/IndexComponents/Viagem"


const IndexPage = () => {
  return (
    <Layout>
      <Intro />
      <Cursos />
      <Professor />
      <Viagem />
    </Layout>
  )
}

export default IndexPage

