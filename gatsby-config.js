module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
    description:
      "Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
    author: "@gatsbyjs"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui"
      }
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "localhost:8000/",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
        excludedRoutes: ["**/users", "**/settings", "**/themes"],
        includedRoutes: [
          "**/posts",
          "**/pages",
          "**/media",
          "**/taxonomies",
          "**/menus",
          "**/participantes",
          "**/projetos"
        ],
        normalizer: function({ entities }) {
          return entities;
        }
      }
    },
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Merriweather",
            variants: ["300", "400", "700"]
          }
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
