const gulp = require('gulp');

const styleTasks = require('./build/gulp-style-tasks');

const build = gulp.series(styleTasks.build);
const watch = gulp.series(styleTasks.watch);

module.exports = {
  default: build,
  watch,
};