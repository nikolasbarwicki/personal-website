const _ = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const postTemplate = require.resolve(`./src/templates/postTemplate.js`);
  const tagsTemplate = require.resolve(`./src/templates/tagsTemplate.js`);

  const result = await graphql(`
    {
      postsRemark: allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        nodes {
          frontmatter {
            slug
            tags
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create post detail pages
  result.data.postsRemark.nodes.forEach((node) => {
    createPage({
      path: `blog/${node.frontmatter.slug}`,
      component: postTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
  // Extract tag data from query
  const tags = result.data.tagsGroup.group;
  // Make tag pages
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagsTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
