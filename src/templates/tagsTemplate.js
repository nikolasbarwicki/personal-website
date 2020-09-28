import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 7rem 0 7rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const TagsTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { nodes, totalCount } = data.allMdx;

  const tagHeader = `Post${totalCount === 1 ? '' : 's'} tagged: ${tag}`;

  return (
    <Layout>
      <Header>
        <h1>{tagHeader}</h1>
        <p>{`${totalCount} post${totalCount === 1 ? '' : 's'} found.`}</p>
      </Header>
      <ul>
        {nodes.map((node) => {
          const { slug } = node.frontmatter;
          const { title } = node.frontmatter;
          const { date } = node.frontmatter;

          return (
            <li key={slug}>
              <li>
                <ArticleLink to={`/blog/${slug}`}>
                  <time>{date}</time>
                  <h4>{title}</h4>
                </ArticleLink>
              </li>
            </li>
          );
        })}
      </ul>
    </Layout>
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
          date(formatString: "DD MMM")
        }
      }
    }
  }
`;
