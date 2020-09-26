import React from 'react';
import { Link } from 'gatsby';
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

const Blog = () => {
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
        <Wrapper>
          <Link to="/blog/post-1">
            <time>September 10, 2020</time>
            <h3>How should I style my react application?</h3>
            <p>
              Learn how to add authencitaion with next.js. This guide covers
              custeom react hooks, protecting routers and redirecting.
            </p>
          </Link>
        </Wrapper>
        <Wrapper>
          <Link to="/blog/post-1">
            <time>September 10, 2020</time>
            <h3>How should I style my react application?</h3>
            <p>
              Learn how to add authencitaion with next.js. This guide covers
              custeom react hooks, protecting routers and redirecting.
            </p>
          </Link>
        </Wrapper>
        <Wrapper>
          <Link to="/blog/post-1">
            <time>September 10, 2020</time>
            <h3>How should I style my react application?</h3>
            <p>
              Learn how to add authencitaion with next.js. This guide covers
              custeom react hooks, protecting routers and redirecting.
            </p>
          </Link>
        </Wrapper>
      </section>
      <ArticlesList>
        <Heading headingText="All articles" />
        <section>
          <h3>2020</h3>
          <ul>
            <li>
              <ArticleLink>
                <time>Sep 10</time>
                <h4>How should I style my react application?</h4>
              </ArticleLink>
            </li>
            <li>
              <ArticleLink>
                <time>Aug 25</time>
                <h4>Authenticaion Patterns for next.js</h4>
              </ArticleLink>
            </li>
            <li>
              <ArticleLink>
                <time>Sep 10</time>
                <h4>How should I style my react application?</h4>
              </ArticleLink>
            </li>
            <li>
              <ArticleLink>
                <time>Aug 25</time>
                <h4>Authenticaion Patterns for next.js</h4>
              </ArticleLink>
            </li>
          </ul>
        </section>
        <section>
          <h3>2019</h3>
          <ul>
            <li>
              <ArticleLink>
                <time>Sep 10</time>
                <h4>How should I style my react application?</h4>
              </ArticleLink>
            </li>
            <li>
              <ArticleLink>
                <time>Aug 25</time>
                <h4>Authenticaion Patterns for next.js</h4>
              </ArticleLink>
            </li>
            <li>
              <ArticleLink>
                <time>Sep 10</time>
                <h4>How should I style my react application?</h4>
              </ArticleLink>
            </li>
            <li>
              <ArticleLink>
                <time>Aug 25</time>
                <h4>Authenticaion Patterns for next.js</h4>
              </ArticleLink>
            </li>
            <li>
              <ArticleLink>
                <time>Sep 10</time>
                <h4>How should I style my react application?</h4>
              </ArticleLink>
            </li>
            <li>
              <ArticleLink>
                <time>Aug 25</time>
                <h4>Authenticaion Patterns for next.js</h4>
              </ArticleLink>
            </li>
            <li>
              <ArticleLink>
                <time>Sep 10</time>
                <h4>How should I style my react application?</h4>
              </ArticleLink>
            </li>
            <li>
              <ArticleLink>
                <time>Aug 25</time>
                <h4>Authenticaion Patterns for next.js</h4>
              </ArticleLink>
            </li>
          </ul>
        </section>
      </ArticlesList>
    </Layout>
  );
};

export default Blog;
