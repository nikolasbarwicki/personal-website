import React from 'react';

import Layout from '../components/layout';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Articles from '../components/Articles';
import Banner from '../components/Banner';

const Index = () => {
  return (
    <Layout fullWidth>
      <Hero />
      <Projects />
      <Articles />
      <Banner />
    </Layout>
  );
};

export default Index;
