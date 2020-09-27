import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';

const PostTemplate = ({ data }) => {
  const { mdx } = data;

  return (
    <Layout>
      <article>
        <header>
          <h2>{mdx.frontmatter.title}</h2>
          <span>{mdx.frontmatter.subtitle}</span>
          <div>
            <div>
              <time>{mdx.frontmatter.date}</time>
              <span>by Nikolas Barwicki</span>
            </div>
            <span>{`${mdx.timeToRead} min read`}</span>
          </div>
        </header>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </article>
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.shapeOf({
    mdx: PropTypes.shapeOf({
      frontmatter: PropTypes.objectOf({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        tags: PropTypes.array.isRequired,
        subtitle: PropTypes.string.isRequired,
      }),
      body: PropTypes.string.isRequired,
      timeToRead: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        subtitle
      }
      body
      timeToRead
    }
  }
`;

export default PostTemplate;
