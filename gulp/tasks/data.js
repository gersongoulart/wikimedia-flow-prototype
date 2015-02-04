'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var jsonminify = require('gulp-jsonminify');

module.exports = gulp.task('data', function () {
  return gulp.src(config.paths.src.data)
    .pipe(gulpif(release, jsonminify()))
    .pipe(gulpif(release,
      gulp.dest(config.paths.dest.release.data),
      gulp.dest(config.paths.dest.build.data)));
    });
