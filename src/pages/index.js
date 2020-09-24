import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';

const Index = () => {
  return (
    <Layout>
      <h1>Hi, I am Nikolas, Junior Frontend Developer</h1>
      <h3>
        23 year old frontend developer and designer, based in Wroclaw, Poland.
        I&apos;m passionate about improving the lives of others through coding
        and constantly looking to learn new things everyday.
      </h3>
      <div>
        <Link to="/blog">Visit blog</Link>
        <a href="https://github.com/nikolasbarwicki">See projects</a>
      </div>
      <section>
        <div>
          <h2>My projects</h2>
          <a href="https://github.com/nikolasbarwicki">See all projects &gt;</a>
        </div>
        <ul>
          <li>
            <img src="https://source.unsplash.com/550x330" alt="dummy text" />
            <h3>Skin Balance</h3>
            <p>React, Redux, Emotion, Jest</p>
            <div>
              Commercial freelance project for beauty studio located in Wrocław,
              Poland. Simple gatsby project done for training purposes. Wanted
              to understand how to work with GraphQL and opitmise images with
              gatsby-image.
            </div>
            <a href="https://github.com/nikolasbarwicki">View project &gt;</a>
          </li>
          <li>
            <img src="https://source.unsplash.com/550x330" alt="dummy text" />
            <h4>Budgety App</h4>
            <h5>React, Redux, Emotion, Jest</h5>
            <span>
              React app to create and manage your household budget. User
              friendly finance tracker with many charts and filterable
              transactions list. React project done for training purposes.
              Wanted to fully understand state management with react hooks and
              context API.
            </span>
            <a href="https://github.com/nikolasbarwicki">View project &gt;</a>
          </li>
          <li>
            <img src="https://source.unsplash.com/550x330" alt="dummy text" />
            <h4>Pantry App</h4>
            <h5>React, Redux, Emotion, Jest</h5>
            <span>
              React project done for training purposes. Wanted to create it to
              practise some basic React features, as well as, some more complex
              tools and dependecies.
            </span>
            <a href="https://github.com/nikolasbarwicki">View project &gt;</a>
          </li>
        </ul>
      </section>
      <section>
        <div>
          <h2>Latest articles</h2>
          <Link to="/blog">See all articles &gt;</Link>
        </div>
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
          <div>
            <Link to="/tags/javascript">javascript</Link>
            <Link to="/tags/api">api</Link>
            <Link to="/tags/database">database</Link>
          </div>
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
          <div>
            <Link to="/tags/javascript">javascript</Link>
            <Link to="/tags/api">api</Link>
            <Link to="/tags/database">database</Link>
          </div>
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
          <div>
            <Link to="/tags/javascript">javascript</Link>
            <Link to="/tags/api">api</Link>
            <Link to="/tags/database">database</Link>
          </div>
        </article>
      </section>
      <div>
        <hr />
        <div>
          Want to get in touch? Feel free to reach out for collaborations or
          just a friendly hello
        </div>
        <a href="mailto:hello@nikolasbarwicki.com">@ email</a>
      </div>
    </Layout>
  );
};

export default Index;
