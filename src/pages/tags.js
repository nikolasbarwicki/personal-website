import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import kebabCase from 'lodash/kebabCase';

import Layout from '../components/layout';

const TagsPage = ({
  data: {
    allMdx: { group },
  },
}) => (
  <Layout>
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
  </Layout>
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
