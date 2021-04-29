/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Type Neighbor`,
    description: `A Gatsby-based type tester app.`,
    author: `Tiotype`,
    siteUrl: `https://typeneighbor.com/`,
    image: `/images/share.jpg`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Type Neighbor`,
        short_name: `Type Neighbor`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffff00`,
        display: `standalone`,
        icon: `src/assets/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: [
            `Merriweather:n3,i3,n4,i4,n7,i7,n9,i9`,
            `Open Sans:n3,i3,n4,i4,n6,i6`,
            `IBM Plex Serif:n1,i1,n2,i2,n3,i3,n4,i4,n5,i5,n6,i6,n7,i7`,
            `Bungee:n4`,
            `Bungee Outline:n4`,
            `Bungee Inline:n4`,
            `Bungee Shade:n4`,
            `Bungee Hairline:n4`,
            `Ultra:n4`,
            `Abril Fatface:n4`,
            `Recursive:n3,n4,n5,n6,n7,n8,n9`,
          ],
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
  ],
}
