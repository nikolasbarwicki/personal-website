import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import Tag from './Tag';
import Heading from './Heading';

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 7fr 3fr;
  align-items: center;

  @media screen and (max-width: 1100px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(2, auto);
    margin: 5rem 0;
  }

  div {
    justify-self: end;

    @media screen and (max-width: 1100px) {
      justify-self: start;
    }
  }
`;

const TagsWrapper = styled.div`
  a {
    :first-child {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 600px) {
    display: flex;
    align-items: flex-start;
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

        return (
          <Wrapper key={frontmatter.slug}>
            <Link to={`/blog/${frontmatter.slug}`}>
              <time style={{ fontSize: '1.4rem' }}>{frontmatter.date}</time>
              <h3>{frontmatter.title}</h3>
              <p style={{ margin: '1.5rem 0' }}>{frontmatter.subtitle}</p>
            </Link>
            <TagsWrapper>
              {frontmatter.tags.map((tag) => (
                <Tag key={tag} linkTo={`/tags/${tag}`} text={tag} />
              ))}
            </TagsWrapper>
          </Wrapper>
        );
      })}
    </section>
  );
};

export default Articles;
