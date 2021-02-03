module.exports = {
  siteMetadata: {
     title: "LGTB Beat Shop",
     description: "Quality Beats At Fair Prices.",
     siteUrl: 'https://lgtb.shop'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LGTB Beats`,
        short_name: `LGTB`,
        start_url: `/`,
        background_color: `#4b434c`,
        theme_color: `#8869ed`,
        display: `standalone`,
        icon: `static/icon.png`,
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-167543913-1"
        ],
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`
    },
     {
      resolve: `gatsby-plugin-sitemap`
    },
    {
    resolve: `gatsby-plugin-styled-components`,
    options: {
      // options
      displayName: false
    },
   },
   `gatsby-plugin-offline`,
   `gatsby-plugin-react-helmet`,
   
  ],
}
