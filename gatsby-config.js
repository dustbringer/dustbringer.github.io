module.exports = {
  siteMetadata: {
    siteUrl: "https://dustbringer.github.io",
    title: "My Gatsby Site",
  },
  plugins: [
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        stylesConfig: {
          // TODO Enabling autoprefixer breaks something
          disableAutoprefixing: true,
          // disableMinification: true
        },
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-layout",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dustbringer.github.io`,
        short_name: `dustbringer`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/icon.svg`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-blog-posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
            },
          },
        ],
      },
    },
  ],
};
