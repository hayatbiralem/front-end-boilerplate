const path = require("path")
const prettier = require("prettier")
const svgContents = require('eleventy-plugin-svg-contents')


module.exports = function (eleventyConfig) {
  const cachedAt = new Date().getTime()

  eleventyConfig.addPassthroughCopy('src/assets')

  eleventyConfig.addPlugin(svgContents)

  eleventyConfig.addFilter('assetUrl', function (path) {
    return `${path}?v=${cachedAt}`
  })

  // How do you tidy html output using addTransform?
  // https://github.com/11ty/eleventy/issues/1314#issuecomment-657999759
  eleventyConfig.addTransform("prettier", function (content, outputPath) {
    const extname = path.extname(outputPath)
    switch (extname) {
      case ".html":
      case ".json":
        // Strip leading period from extension and use as the Prettier parser.
        const parser = extname.replace(/^./, "")
        return prettier.format(content, { parser, printWidth: 280 })

      default:
        return content;
    }
  })

  return {
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: { input: 'src', output: '_site' }
  }
};
