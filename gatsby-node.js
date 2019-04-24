const path = require('path')

module.exports.onCreateNode = ({node, actions}) => {
const {createNodeField} = actions

    if (node.internal.type === 'MarkdownRemark'){
        const slug = path.basename(node.fileAbsolutePath, '.md')
        
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const internalPage = path.resolve("./src/templates/cursosTemplate.js")
    const internalagendaPage = path.resolve("./src/templates/agendaTemplate.js")
    const res = await graphql(`
      query {
        cursospage: allMarkdownRemark(
          filter: {
            frontmatter: { templateKey: { eq: "cursos-informacoes" } }
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        agenda: allMarkdownRemark(
          filter: {
            frontmatter: { templateKey: { eq: "cidades-informacoes" } }
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `)

    // Promises for differents pages
    const cursosPage = res.data.cursospage.edges
    const agendaPage = res.data.agenda.edges

    cursosPage.forEach(edge => {
      createPage({
        component: internalPage,
        path: `/cursos/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
        },
      })
    })

    agendaPage.forEach(edge => {
      createPage({
        component: internalagendaPage,
        path: `/agenda/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
        },
      })
    })

}


