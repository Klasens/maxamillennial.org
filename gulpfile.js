'use strict';
const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

gulp.task('nunjucks', function () {
  // Gets .html and .nunjucks files in pages
  return (
    gulp
      .src('pages/**/*.+(html|nunjucks)')
      // Renders template with nunjucks
      .pipe(
        nunjucksRender({
          path: ['templates'],
        })
      )
      // output files in main folder
      .pipe(gulp.dest('./'))
  );
});

exports.default = defaultTask;
