require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Sérgio Júnior - Front End Developer",
    description:
      "Blog e Perfólio de um desenvolvedor apaixonado em construir uma melhor internet, além de gatos, música, livros e séries.",
    author: "https://github.com/Sergioamjr/"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
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
        display: "minimal-ui",
        icon: "src/images/favicons/apple-icon-precomposed.png"
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
          "**/taxonomies",
          "**/menus",
          "**/participantes",
          "**/projetos",
          "**/posts_en",
          "**/projects_en",
          "**/media"
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
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "https://sergiojunior-netlify.disqus.com/count.js"
      }
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          auth: true,
          database: true,
          firestore: false,
          storage: false,
          messaging: false,
          functions: true,
          performance: false
        },
        credentials: {
          apiKey: process.env.GATSBY_FIREBASE_API_KEY,
          authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
          projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
          storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.GATSBY_FIREBASE_APP_ID
        }
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-64953806-6",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Avoids sending pageview hits from custom paths
        exclude: []
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
