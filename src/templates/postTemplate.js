import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';

import Layout from '../components/layout';

const Article = styled.article`
  p {
    margin-bottom: 2rem;
    color: ${(props) => props.theme.darkBlue};
    line-height: 1.75;
  }

  h3 {
    margin: 2rem 0;
  }

  code {
    background-color: rgb(41, 44, 52);
    color: #fff;
    border-radius: 0.5rem;
    padding: 4px 6px;
  }

  blockquote {
    background-color: #f1f5ff;
    color: #383b40;
    border-left: 3px solid #59a1ff;
    padding: 3rem;
    margin: 2rem 0;

    p {
      margin: 0;
    }
  }

  a {
    font-weight: 700;
    background: linear-gradient(transparent 90%, #dbe4ff 0);
    color: #00173e;

    :hover {
      background: linear-gradient(transparent 90%, #59a1ff 0);
    }
  }
`;

const Header = styled.header`
  h2 {
    margin: 3.5rem 0;
  }

  hr {
    border: 1px solid #a4aed2;
    margin: 1.5rem 0;
  }
`;

const HeaderInnerWrapper = styled.div`
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
`;

const PostTemplate = ({ data }) => {
  const { mdx } = data;

  return (
    <Layout>
      <Article>
        <Header>
          <h1>{mdx.frontmatter.title}</h1>
          <span>{mdx.frontmatter.subtitle}</span>
          <hr />
          <HeaderInnerWrapper>
            <div>
              <time>{mdx.frontmatter.date}</time>
              <span> by Nikolas Barwicki</span>
            </div>
            <span>{`${mdx.timeToRead} min read`}</span>
          </HeaderInnerWrapper>
        </Header>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </Article>
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.objectOf({
    mdx: PropTypes.objectOf({
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
