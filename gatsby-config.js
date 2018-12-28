module.exports = {
  siteMetadata: {
    title: "Distributed tech and IOT Apps",
    author: "Portia Burton",
    description: "coder/thinker/provocateur"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        description: 'Hey there',
        short_name: 'starter',
        start_url: '/',
        background_color: 'red',
        theme_color: 'red',
        display: 'minimal-ui',
        icon: 'src/assets/images/blockchain_explainer_portia_burton.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
