module.exports = {
  pathPrefix: '/stenciljs',
  // pathPrefix: '/',
  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        basePath: '',
      },
    },
  ],
}
