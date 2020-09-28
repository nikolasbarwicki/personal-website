import React from 'react';
import PropTypes from 'prop-types';

// Utilities
import kebabCase from 'lodash/kebabCase';

// Components
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';

const TagsPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <div>
    <Helmet title={title} />
    <div>
      <h1>Tags</h1>
      <ul>
        {group.map((tag) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {`${tag.fieldValue} (${tag.totalCount})`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

TagsPage.propTypes = {
  data: PropTypes.objectOf({
    allMdx: PropTypes.objectOf({
      group: PropTypes.arrayOf(
        PropTypes.objectOf({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired,
      ),
    }),
    site: PropTypes.objectOf({
      siteMetadata: PropTypes.objectOf({
        title: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
