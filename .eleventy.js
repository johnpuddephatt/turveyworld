const svgContents = require("eleventy-plugin-svg-contents");
const pluginSrcsetImg = require( "eleventy-plugin-srcset" );


module.exports = async function(eleventyConfig) {

  // Plugins
  eleventyConfig.addPlugin( pluginSrcsetImg );
  eleventyConfig.addPlugin(svgContents);

  	const EleventyPluginVite = (await import("@11ty/eleventy-plugin-vite")).default;
	eleventyConfig.addPlugin(EleventyPluginVite);


  const md = require('markdown-it')({
      html: false,
      breaks: true,
      linkify: true
  });

  eleventyConfig.addNunjucksFilter("markdownify", markdownString => md.render(markdownString));

  // Copy files
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./src/assets');
  // eleventyConfig.addPassthroughCopy('/.tmp/uploads');

  // eleventyConfig.addPassthroughCopy('./src/uploads');
  eleventyConfig.addPassthroughCopy({ "./src/_favicons/**/*": "./" });

  // Collections
  eleventyConfig.addCollection('projects', collection => {
    return collection.getFilteredByGlob('./src/projects/*.md');
  });

  eleventyConfig.addCollection('work', collection => {
    return collection.getFilteredByGlob('./src/work/*.md');
  });

  eleventyConfig.addCollection('gallery', collection => {
    return collection.getFilteredByGlob('./src/gallery/*.md');
  });

  eleventyConfig.addCollection('videos', collection => {
    return collection.getFilteredByGlob('./src/videos/*.*');
  });

  eleventyConfig.addCollection('pages', collection => {
    return collection.getFilteredByGlob('./src/pages/*.*');
  });

  eleventyConfig.addFilter('where', function (array, key, value) {
    return array.filter(item => {
      const keys = key.split('.');
      const reducedKey = keys.reduce((object, key) => {
        return object[key];
      }, item);

      return (reducedKey === value ? item : false);
    });

  });

  eleventyConfig.addFilter('whereContains', function (array, key, value) {
    return array.filter(item => {
      const keys = key.split('.');
      const reducedKey = keys.reduce((object, key) => {
        return object[key];
      }, item);

      return (reducedKey.indexOf(value) == -1 ? false : item);
    });
  });

  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    root: [
      '_includes',
      '.'
    ]
  });

  return {
    dir: {
      input: "./src",      // Equivalent to Jekyll's source property
      output: "./dist", // Equivalent to Jekyll's destination property
      data: `./_data/`,
      includes: `./_includes/`,
    },
    // passthroughFileCopy: true,
    templateFormats: [
      "njk",
      "md",
      "html"
    ]
  };
};
