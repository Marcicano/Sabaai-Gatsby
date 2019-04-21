import React from "react"
import Layout from "../components/layout"


// Import Components 
import Intro from "../components/IndexComponents/Intro"
import Cursos from "../components/IndexComponents/Cursos"
import Professores from "../components/IndexComponents/Professores"
import Viagens from "../components/IndexComponents/Viagens"


const IndexPage = () => {
  return (
    <Layout>
      <Intro />
      <Cursos />
      <Professores />
      <Viagens />
    </Layout>
  )
}

export default IndexPage

