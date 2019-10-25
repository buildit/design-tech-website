const gulp = require('gulp');
const sass = require('gulp-sass');

const paths = require('./paths');

function build() {
  return gulp.src(paths.srcPath('sass', 'styles.scss'))
    .pipe(sass())
    // Output to Eleventy's source dir and let it then
    // copy to the build folder. This is needed for local
    // dev work, so that Eleventy "notices" changes to CSS
    // and reloads any connected browsers.
    .pipe(gulp.dest(paths.srcPath('site')));
}
build.displayName = 'styles:build';


function watch() {
  gulp.watch(
    paths.srcPath('sass','**','*.scss'),
    build
  );
}
watch.displayName = 'styles:watch';


module.exports = {
  build,
  watch
};
