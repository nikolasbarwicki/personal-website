import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import Code from '../components/Code';
import Tag from '../components/Tag';
import Callout from '../components/Callout';
import Layout from '../components/layout';

const components = {
  pre: Code,
  Callout,
};

const Article = styled.article`
  margin-bottom: 7rem;

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

  a {
    background: linear-gradient(transparent 90%, #dbe4ff 0);
    color: ${(props) => props.theme.blue};

    :hover {
      background: linear-gradient(transparent 90%, #59a1ff 0);
    }
  }
`;

const Header = styled.header`
  h1 {
    margin: 1rem 0;
  }

  hr {
    margin: 1.5rem 0;
  }
`;

const HeaderInnerWrapper = styled.div`
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
`;

const ArticlesLink = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;

  li {
    width: 48%;
  }
`;

const InvertedButtonLink = styled(Link)`
  font-size: 1.4rem;
  padding: 0rem 2rem;
  min-height: 5.5rem;
  display: block;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.blue};
  font-weight: 500;
  border-radius: 1rem;
  border: 2px solid ${(props) => props.theme.blue};
`;

const PostTemplate = ({ data, pageContext }) => {
  const { mdx } = data;
  const { next, previous } = pageContext;

  const nextArticle = next && (
    <li style={{ textAlign: 'start' }}>
      <InvertedButtonLink to={`/blog/${next.frontmatter.slug}`}>
        <span style={{ marginRight: '0.75rem' }}>←</span>
        <span>{next.frontmatter.title}</span>
      </InvertedButtonLink>
    </li>
  );

  const prevArticle = previous && (
    <li style={{ textAlign: 'end' }}>
      <InvertedButtonLink to={`/blog/${previous.frontmatter.slug}`}>
        <span>{previous.frontmatter.title}</span>
        <span style={{ marginLeft: '0.75rem' }}>→</span>
      </InvertedButtonLink>
    </li>
  );

  return (
    <Layout>
      <Header>
        <h1>{mdx.frontmatter.title}</h1>
        <HeaderInnerWrapper>
          <span>{`${mdx.frontmatter.date} • ${mdx.timeToRead} min read`}</span>
          <div>
            {mdx.frontmatter.tags.map((tag) => (
              <Tag linkTo={`/tags/${tag}`} text={tag} />
            ))}
          </div>
        </HeaderInnerWrapper>
      </Header>
      <Article>
        <MDXProvider components={components}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </Article>
      <nav>
        <ArticlesLink>
          {nextArticle}
          {prevArticle}
        </ArticlesLink>
      </nav>
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
  pageContext: PropTypes.objectOf({
    previous: PropTypes.objectOf({
      frontmatter: PropTypes.objectOf({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    next: PropTypes.objectOf({
      frontmatter: PropTypes.objectOf({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
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
