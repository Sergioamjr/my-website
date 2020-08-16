require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Sérgio Júnior - Front End Developer",
    description:
      "Blog e Perfólio de um desenvolvedor apaixonado em construir uma melhor internet, além de gatos, música, livros e séries.",
    author: "https://github.com/Sergioamjr/",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: `${__dirname}/src/mdx-posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ],
      },
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
        icon: "src/images/favicons/apple-icon-precomposed.png",
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ],
        baseUrl: "http://sergiojunior.com.br/wp/",
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
          "**/media",
        ],
        normalizer: function({ entities }) {
          return entities;
        },
      },
    },
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Merriweather",
            variants: ["300", "400", "700"],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "https://sergiojunior-netlify.disqus.com/count.js",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-64953806-6",
        head: true,
        exclude: [],
      },
    },
  ],
};
