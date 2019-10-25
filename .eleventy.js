const paths = require('./build/paths');

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy(paths.srcPath('**', '*.{txt,css,jpg,png,svg,gif}'));

  eleventyConfig.setBrowserSyncConfig({
    open: 'local'
  });

  return {
    dir: {
      input: paths.srcPath('site'),
      output: paths.bldPath(),
    }
  };
};
