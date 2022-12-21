'use strict';
const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const data = require('gulp-data');

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

gulp.task('nunjucks-chapters', function () {
  // Gets .html and .nunjucks files in pages
  return (
    gulp
      .src('pages/chapters/**.+(html|njk)')
      // Renders template with nunjucks
      .pipe(
        data(function () {
          return require('./json/chapterText.json');
        })
      )
      .pipe(
        nunjucksRender({
          path: ['templates'],
        })
      )
      // output files in main folder
      .pipe(gulp.dest('./mm/chapters/'))
  );
});

gulp.task('nunjucks-nonfictionLF', function () {
  // Gets .html and .nunjucks files in pages
  return (
    gulp
      .src('pages/nonfictionLF/**.+(html|njk)')
      // Renders template with nunjucks
      .pipe(
        data(function () {
          return require('./json/nonfictionLFText/anAddictsDesperation.json');
        })
      )
      .pipe(
        data(function () {
          return require('./json/nonfictionLFText/anEssayConcerningYou.json');
        })
      )
      .pipe(
        data(function () {
          return require('./json/nonfictionLFText/assumptiveCritiques.json');
        })
      )
      .pipe(
        data(function () {
          return require('./json/nonfictionLFText/aStrangersStranger.json');
        })
      )
      .pipe(
        data(function () {
          return require('./json/nonfictionLFText/aTheoryOfAcknowledgement.json');
        })
      )
      .pipe(
        data(function () {
          return require('./json/nonfictionLFText/kingsSoConquered.json');
        })
      )
      .pipe(
        data(function () {
          return require('./json/nonfictionLFText/severed.json');
        })
      )
      .pipe(
        data(function () {
          return require('./json/nonfictionLFText/anAddictMeetsRachelBloom.json');
        })
      )
      .pipe(
        data(function () {
          return require('./json/nonfictionLFText/theSonderer.json');
        })
      )
      .pipe(
        data(function () {
          return require('./json/nonfictionLFText/theTimeIMetRachelBloom.json');
        })
      )
      .pipe(
        nunjucksRender({
          path: ['templates'],
        })
      )
      // output files in main folder
      .pipe(gulp.dest('./mm/nonfiction/'))
  );
});

gulp.task('nunjucks-fiction', function () {
  // Gets .html and .nunjucks files in pages
  return (
    gulp
      .src('pages/fiction/*.+(html|njk)')
      // Renders template with nunjucks
      .pipe(
        data(function () {
          return require('./json/mitm.json');
        })
      )
      .pipe(
        data(function () {
          return require('./json/abw.json');
        })
      )
      .pipe(
        data(function () {
          return require('./json/actn.json');
        })
      )
      .pipe(
        data(function () {
          return require('./json/potf.json');
        })
      )
      .pipe(
        data(function () {
          return require('./json/tda.json');
        })
      )
      .pipe(
        nunjucksRender({
          path: ['templates'],
        })
      )
      // output files in main folder
      .pipe(gulp.dest('./mm/fiction/'))
  );
});

gulp.task('nunjucks-index', function () {
  // Gets .html and .nunjucks files in pages
  return (
    gulp
      .src('pages/index.html')
      // Renders template with nunjucks
      .pipe(
        data(function () {
          return require('./json/theGreenerSide.json');
        })
      )
      .pipe(
        nunjucksRender({
          path: ['templates'],
        })
      )
      // output files in main folder
      .pipe(gulp.dest('./'))
  );
});

gulp.task('nunjucks', function () {
  // Gets .html and .nunjucks files in pages
  return (
    gulp
      .src('pages/about.html')
      // Renders template with nunjucks
      .pipe(
        nunjucksRender({
          path: ['templates'],
        })
      )
      // output files in main folder
      .pipe(gulp.dest('./mm'))
  );
});

exports.default = defaultTask;
