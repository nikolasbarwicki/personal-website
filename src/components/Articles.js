import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import Tag from './Tag';
import Heading from './Heading';

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 7fr 3fr;
  align-items: center;

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

const Articles = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            date(formatString: "MMMM DD, YYYY", locale: "")
            slug
            tags
            title
            subtitle
          }
        }
      }
    }
  `);

  const { allMdx } = data;

  return (
    <section>
      <Heading
        headingText="Latest articles"
        linkText="See all articles &gt;"
        linkTo="/blog"
      />
      {allMdx.nodes.map((node) => {
        const { frontmatter } = node;

        const tags = frontmatter.tags.map((tag) => (
          <Tag linkTo={`/tags/${tag}`} text={tag} />
        ));

        return (
          <Wrapper>
            <Link to={`/blog/${frontmatter.slug}`}>
              <time>{frontmatter.date}</time>
              <h3>{frontmatter.title}</h3>
              <p>{frontmatter.subtitle}</p>
            </Link>
            <div>{tags}</div>
          </Wrapper>
        );
      })}
    </section>
  );
};

export default Articles;
