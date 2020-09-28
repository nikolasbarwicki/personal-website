import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Link, graphql } from 'gatsby';

const TagsTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { nodes, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  return (
    <div>
      <h1>{tagHeader}</h1>
      <ul>
        {nodes.map((node) => {
          const { slug } = node.frontmatter;
          const { title } = node.frontmatter;

          return (
            <li key={slug}>
              <Link to={`/blog/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
      <Link to="/tags">All tags</Link>
    </div>
  );
};

TagsTemplate.propTypes = {
  pageContext: PropTypes.objectOf({
    tag: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.objectOf({
    allMarkdownRemark: PropTypes.objectOf({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.objectOf({
          node: PropTypes.objectOf({
            frontmatter: PropTypes.objectOf({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.objectOf({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired,
      ),
    }),
  }).isRequired,
};

export default TagsTemplate;

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      nodes {
        frontmatter {
          slug
          title
        }
      }
    }
  }
`;
