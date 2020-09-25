import React from 'react';
import { Link } from 'gatsby';
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
  return (
    <section>
      <Heading
        headingText="Latest articles"
        linkText="See all articles &gt;"
        linkTo="/blog"
      />
      <Wrapper>
        <Link to="/blog/post-1">
          <time>September 10, 2020</time>
          <h3>How should I style my react application?</h3>
          <p>
            Learn how to add authencitaion with next.js. This guide covers
            custeom react hooks, protecting routers and redirecting on the
            server and includes.
          </p>
        </Link>
        <div>
          <Tag linkTo="/tags/javascript" text="javascript" />
          <Tag linkTo="/tags/api" text="api" />
          <Tag linkTo="/tags/database" text="database" />
        </div>
      </Wrapper>
      <Wrapper>
        <Link to="/blog/post-1">
          <time>September 10, 2020</time>
          <h3>How should I style my react application?</h3>
          <p>
            Learn how to add authencitaion with next.js. This guide covers
            custeom react hooks, protecting routers and redirecting on the
            server and includes.
          </p>
        </Link>
        <div>
          <Tag linkTo="/tags/database" text="database" />
          <Tag linkTo="/tags/api" text="api" />
        </div>
      </Wrapper>
      <Wrapper>
        <Link to="/blog/post-1">
          <time>September 10, 2020</time>
          <h3>How should I style my react application?</h3>
          <p>
            Learn how to add authencitaion with next.js. This guide covers
            custeom react hooks, protecting routers and redirecting on the
            server and includes.
          </p>
        </Link>
        <div>
          <Tag linkTo="/tags/api" text="api" />
          <Tag linkTo="/tags/database" text="database" />
        </div>
      </Wrapper>
    </section>
  );
};

export default Articles;
