import React from "react"


import Layout from "../components/layout"


// Import Components 
import Intro from "../components/IndexComponents/Intro"
import Cursos from "../components/IndexComponents/Cursos"
import Professores from "../components/IndexComponents/Professores"
import Viagem from "../components/IndexComponents/Viagem"


const IndexPage = () => {
  return (
    <Layout>
      <Intro />
      <Cursos />
      <Professores />
      <Viagem />
    </Layout>
  )
}

export default IndexPage

