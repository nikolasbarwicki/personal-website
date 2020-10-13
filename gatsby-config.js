module.exports = {
  siteMetadata: {
    title: 'Nikolas Barwicki | Blog & Portfolio',
    author: {
      name: 'Nikolas Barwicki',
    },
    pathPrefix: '/',
    siteUrl: 'https://www.nikolasbarwicki.com',
    description:
      'I am passionate about improving the lives of others through coding and constantly looking to learn new things every day.',
  },
  plugins: [
    // Meta
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Nikolas Barwicki | Blog & Portfolio',
        short_name: 'Nikolas Barwicki',
        description:
          'I am passionate about improving the lives of others through coding and constantly looking to learn new things every day.',
        start_url: '/',
        background_color: 'white',
        theme_color: '#0083FF',
        display: 'minimal-ui',
        icon: `src/assets/icons/icon.png`,
      },
    },

    // Images and static
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // Markdown
    `gatsby-plugin-mdx`,

    // Plugins
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-180462871-1',
        head: true,
      },
    },
  ],
};
