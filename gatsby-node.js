exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const postTemplate = require.resolve(`./src/templates/postTemplate.js`);

  const result = await graphql(`
    {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMdx.nodes.forEach((node) => {
    createPage({
      path: `blog/${node.frontmatter.slug}`,
      component: postTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
