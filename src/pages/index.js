import React from "react"
import Layout from "../components/layout"


// Import Components 
import Intro from "../components/IndexComponents/Intro"
import Cursos from "../components/IndexComponents/Cursos"
import Professores from "../components/IndexComponents/Professores"
import Viagens from "../components/IndexComponents/Viagens"
import Header from "../components/Globals/header"

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <Intro />
      <Cursos />
      <Professores />
      <Viagens />
    </Layout>
  )
}

export default IndexPage

