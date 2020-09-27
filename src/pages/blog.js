import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import Heading from '../components/Heading';

const Hero = styled.div`
  text-align: center;
  margin: 10.5rem 0;
`;

const Wrapper = styled.article`
  align-items: center;
  padding: 2.5rem 3.5rem;
  background-color: ${(props) => props.theme.background};
  border-radius: 3rem;
  margin-bottom: 3.5rem;

  time {
    font-size: 1.4rem;
  }

  p {
    margin: 1.5rem 0 1.5rem;
  }

  div {
    justify-self: end;
  }
`;

const ArticleLink = styled(Link)`
  padding: 1.5rem 2.5rem;
  display: flex;
  cursor: pointer;

  time {
    display: block;
    width: 8rem;
  }

  div {
  }

  :hover {
    background-color: ${(props) => props.theme.background};
    border-radius: 1rem;
  }
`;

const ArticlesList = styled.section`
  margin: 7rem 0;

  section {
    margin: 3.5rem 0;
  }

  h3 {
    font-size: 3.6rem;
    margin-bottom: 1.5rem;
  }
`;

const Blog = ({ data }) => {
  const { featured } = data;

  const postsByYear = {};

  data.articles.nodes.forEach((post) => {
    const year = post.frontmatter.date.split('-')[1];
    postsByYear[year] = [...(postsByYear[year] || []), post];
  });

  const years = Object.keys(postsByYear).reverse();

  return (
    <Layout>
      <Hero>
        <h1>
          Hi,
          <span role="img" aria-label="Waving hand emoji">
            {' '}
            👋
            <br />
          </span>
          I am Nikolas, and this is my blog
        </h1>
        <p>
          I share my frontend engineering experience, and my expertise with
          technical articles about React, Redux and Gatsby
        </p>
      </Hero>

      <section>
        <Heading headingText="Featured" />
        {featured.nodes.map((item) => (
          <Wrapper>
            <Link to={`/blog/${item.frontmatter.slug}`}>
              <time>{item.frontmatter.date}</time>
              <h3>{item.frontmatter.title}</h3>
              <p>{item.frontmatter.subtitle}</p>
            </Link>
          </Wrapper>
        ))}
      </section>
      <ArticlesList>
        <Heading headingText="All articles" />
        {years.map((year) => (
          <section>
            <h3>{year}</h3>
            <ul>
              {postsByYear[year].map((item) => (
                <li>
                  <ArticleLink to={`/blog/${item.frontmatter.slug}`}>
                    <time>{item.frontmatter.date.split('-')[0]}</time>
                    <h4>{item.frontmatter.title}</h4>
                  </ArticleLink>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </ArticlesList>
    </Layout>
  );
};

export const query = graphql`
  query {
    articles: allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          date(formatString: "DD MMM-YYYY")
          slug
          title
        }
      }
    }
    featured: allMdx(
      filter: { frontmatter: { featured: { eq: true } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          subtitle
        }
      }
    }
  }
`;

Blog.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.objectOf(
        PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
      ).isRequired,
    ).isRequired,
  ).isRequired,
};

Blog.defaultProps = {};

export default Blog;
