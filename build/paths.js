const path = require('path');

const projectRoot = path.resolve(__dirname, '..');

module.exports = {
  bldPath: function( ...pathSegments ) {
    return path.resolve(projectRoot, 'dist', ...pathSegments);
  },

  srcPath: function( ...pathSegments ) {
    return path.resolve(projectRoot, 'src', ...pathSegments);
  }
};