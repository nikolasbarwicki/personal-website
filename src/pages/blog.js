import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const Blog = () => {
  return (
    <Layout>
      <h1>Hi, I am Nikolas and this is my blog</h1>
      <h3>
        23 year old frontend developer and designer, based in Wroclaw, Poland.
        I&apos;m passionate about improving the lives of others through coding
        and constantly looking to learn new things everyday.
      </h3>
      <section>
        <h2>Featured</h2>
        <article>
          <Link to="/blog/post-1">
            <time>September 10, 2020</time>
            <h4>How should I style my react application?</h4>
            <p>
              Learn how to add authencitaion with next.js. This guide covers
              custeom react hooks, protecting routers and redirecting on the
              server and includes.
            </p>
          </Link>
        </article>
        <article>
          <Link to="/blog/post-1">
            <time>September 10, 2020</time>
            <h4>How should I style my react application?</h4>
            <p>
              Learn how to add authencitaion with next.js. This guide covers
              custeom react hooks, protecting routers and redirecting on the
              server and includes.
            </p>
          </Link>
        </article>
        <article>
          <Link to="/blog/post-1">
            <time>September 10, 2020</time>
            <h4>How should I style my react application?</h4>
            <p>
              Learn how to add authencitaion with next.js. This guide covers
              custeom react hooks, protecting routers and redirecting on the
              server and includes.
            </p>
          </Link>
        </article>
      </section>
      <section>
        <h2>All articles</h2>
        <section>
          <h2>2020</h2>
          <ul>
            <li>
              <time>Sep 10</time>
              <div>How should I style my react application?</div>
            </li>
            <li>
              <time>Aug 25</time>
              <div>Authenticaion Patterns for next.js</div>
            </li>
            <li>
              <time>Sep 10</time>
              <div>How should I style my react application?</div>
            </li>
            <li>
              <time>Aug 25</time>
              <div>Authenticaion Patterns for next.js</div>
            </li>
          </ul>
        </section>
        <section>
          <h2>2019</h2>
          <ul>
            <li>
              <time>Sep 10</time>
              <div>How should I style my react application?</div>
            </li>
            <li>
              <time>Aug 25</time>
              <div>Authenticaion Patterns for next.js</div>
            </li>
            <li>
              <time>Sep 10</time>
              <div>How should I style my react application?</div>
            </li>
            <li>
              <time>Aug 25</time>
              <div>Authenticaion Patterns for next.js</div>
            </li>
          </ul>
        </section>
      </section>
    </Layout>
  );
};

export default Blog;
