'use strict';
const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const data = require('gulp-data');

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

gulp.task('nunjucks', function () {
  // Gets .html and .nunjucks files in pages
  return (
    gulp
      .src('pages/**/*.+(html|njk)')
      // Renders template with nunjucks
      .pipe(
        data(function () {
          return require('./chapterText.json');
        })
      )
      .pipe(
        // NOT USED
        data(function () {
          return require('./aphorisms.json');
        })
      )
      .pipe(
        // NOT USED
        data(function () {
          return require('./poems.json');
        })
      )
      .pipe(
        data(function () {
          return require('./nonfictionLFText/anAddictsDesperation.json');
        })
      )
      .pipe(
        data(function () {
          return require('./nonfictionLFText/anEssayConcerningYou.json');
        })
      )
      .pipe(
        data(function () {
          return require('./nonfictionLFText/assumptiveCritiques.json');
        })
      )
      .pipe(
        data(function () {
          return require('./nonfictionLFText/aStrangersStranger.json');
        })
      )
      .pipe(
        data(function () {
          return require('./nonfictionLFText/aTheoryOfAcknowledgement.json');
        })
      )
      .pipe(
        data(function () {
          return require('./nonfictionLFText/kingsSoConquered.json');
        })
      )
      .pipe(
        data(function () {
          return require('./nonfictionLFText/severed.json');
        })
      )
      .pipe(
        data(function () {
          return require('./nonfictionLFText/anAddictMeetsRachelBloom.json');
        })
      )
      .pipe(
        data(function () {
          return require('./nonfictionLFText/theSonderer.json');
        })
      )
      .pipe(
        data(function () {
          return require('./nonfictionLFText/theTimeIMetRachelBloom.json');
        })
      )
      .pipe(
        data(function () {
          return require('./mitm.json');
        })
      )
      .pipe(
        data(function () {
          return require('./abw.json');
        })
      )
      .pipe(
        data(function () {
          return require('./actn.json');
        })
      )
      .pipe(
        data(function () {
          return require('./potf.json');
        })
      )
      .pipe(
        data(function () {
          return require('./tda.json');
        })
      )
      .pipe(
        data(function () {
          return require('./theGreenerSide.json');
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

exports.default = defaultTask;
