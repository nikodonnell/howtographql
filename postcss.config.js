module.exports = (ctx) => ({
  plugins: [
    require('postcss-discard-comments')({
      removeAll: true,
    }),
    require('postcss-simple-vars')({
      variables: () => require('graphcool-styles/dist/variables/variables.js'),
    }),
    require('postcss-inherit')({
      globalStyles: 'node_modules/graphcool-styles/dist/styles.css',
      propertyRegExp: /^(inherit|extend|p)s?:?$/i,
    }),
    require('postcss-cssnext')(),
  ]
})
