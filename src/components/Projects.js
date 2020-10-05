import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Heading from './Heading';

const Project = styled.li`
  display: flex;
  margin-bottom: 7rem;
`;

const ProjectContent = styled.div`
  padding: 0 3.5rem 0 3.5rem;
  display: flex;
  flex-direction: column;

  a {
    color: ${(props) => props.theme.blue};
    font-weight: 500;
  }

  div {
    margin: 1.5rem 0 1.5rem;
  }
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      project1: file(relativePath: { regex: "/babysitter/" }) {
        childImageSharp {
          fixed(width: 550) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      project2: file(relativePath: { regex: "/budgetapp/" }) {
        childImageSharp {
          fixed(width: 550) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      project3: file(relativePath: { regex: "/pantryapp/" }) {
        childImageSharp {
          fixed(width: 550) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <section>
      <Heading
        headingText="My projects"
        linkText="See all projects &gt;"
        linkTo="https://github.com/nikolasbarwicki"
        anchor
      />
      <ul>
        <Project>
          <div>
            <Img fixed={data.project1.childImageSharp.fixed} alt="dummy text" />
          </div>
          <ProjectContent>
            <h3>Skin Balance</h3>
            <span>React, Redux, Emotion, Jest</span>
            <div>
              Commercial freelance project for beauty studio located in Wrocław,
              Poland. Simple gatsby project done for training purposes.
            </div>
            <a href="https://github.com/nikolasbarwicki">View project &gt;</a>
          </ProjectContent>
        </Project>
        <Project>
          <div>
            <Img fixed={data.project2.childImageSharp.fixed} alt="dummy text" />
          </div>
          <ProjectContent>
            <h3>Budgety App</h3>
            <span>React, Redux, Emotion, Jest</span>
            <div>
              React app to create and manage your household budget. User
              friendly finance tracker with many charts and filterable
              transactions list.
            </div>
            <a href="https://github.com/nikolasbarwicki">View project &gt;</a>
          </ProjectContent>
        </Project>
        <Project>
          <div>
            <Img fixed={data.project3.childImageSharp.fixed} alt="dummy text" />
          </div>
          <ProjectContent>
            <h3>Pantry App</h3>
            <span>React, Redux, Emotion, Jest</span>
            <div>
              React project done for training purposes. Wanted to create it to
              practise some basic React features.
            </div>
            <a href="https://github.com/nikolasbarwicki">View project &gt;</a>
          </ProjectContent>
        </Project>
      </ul>
    </section>
  );
};

export default Projects;
