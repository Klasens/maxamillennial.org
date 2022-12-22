'Use strict';
// ==== Requirements ==== //
const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const data = require('gulp-data');
const fs = require('fs');
const path = require('path');

// ==== Defualt Task ==== //
function defaultTask(cb) {
  cb();
}

// ==== Build Chapters ==== //
gulp.task('nunjucks-chapters', function () {
  return (
    gulp
      // -- Collect chapters from pages
      .src('pages/chapters/**.html)')
      // -- Collect text from .json files
      .pipe(
        data(function () {
          return require('./json/chapterText.json');
        })
      )
      // -- Compile partials from templates
      .pipe(
        nunjucksRender({
          path: ['templates'],
        })
      )
      // -- Output files to chapters folder
      .pipe(gulp.dest('./mm/chapters/'))
  );
});

// ==== Build Nonfiction ==== //
gulp.task('nunjucks-nonfiction', function () {
  return (
    gulp
      // -- Collect Nonfiction from pages
      .src('pages/nonfiction/**.html')
      // -- Collect text from .json files
      //TODO -- Using Adhoc read method by changing all files in JSON folder to .html.json
      .pipe(
        data(function (file) {
          return JSON.parse(
            fs.readFileSync(
              './json/nonfictionText/' + path.basename(file.path + '.json')
            )
          );
        })
      )
      // -- Compile partials from templates
      .pipe(
        nunjucksRender({
          path: ['templates'],
        })
      )
      // -- Output files to nonfiction folder
      .pipe(gulp.dest('./mm/nonfiction/'))
  );
});

// ==== Build Fiction ==== //
gulp.task('nunjucks-fiction', function () {
  return (
    gulp
      // -- Collect Fiction from pages
      .src('pages/fiction/*.html')
      // -- Collect text from .json files
      //TODO -- Using Adhoc read method by changing all files in JSON folder to '.html.json'
      .pipe(
        data(function (file) {
          return JSON.parse(
            fs.readFileSync(
              './json/fictionText/' + path.basename(file.path + '.json')
            )
          );
        })
      )
      // -- Compile partials from templates
      .pipe(
        nunjucksRender({
          path: ['templates'],
        })
      )
      // -- Output files to fiction folder
      .pipe(gulp.dest('./mm/fiction/'))
  );
});

// ==== Build Index ==== //
gulp.task('nunjucks-index', function () {
  return (
    gulp
      // -- Collect Index from pages
      .src('pages/index.html')
      // -- Collect text from .json files
      .pipe(
        data(function () {
          return require('./json/theGreenerSide.json');
        })
      )
      // -- Compile partials from templates
      .pipe(
        nunjucksRender({
          path: ['templates'],
        })
      )
      // -- Output files to root folder
      .pipe(gulp.dest('./'))
  );
});

// ==== Build About ==== //
gulp.task('nunjucks-about', function () {
  return (
    gulp
      // -- Collect About from pages
      .src('pages/about.html')
      // -- Compile partials from templates
      .pipe(
        nunjucksRender({
          path: ['templates'],
        })
      )
      // -- Output files to mm folder
      .pipe(gulp.dest('./mm'))
  );
});

exports.default = defaultTask;
