module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-tslint',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/styles/typography',
        omitGoogleFont: true,
      },
    },
  ],
}
