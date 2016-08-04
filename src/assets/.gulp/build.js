'use strict';


var gulp = require('gulp');
var plumber = require('gulp-plumber');
var zip  = require('gulp-zip');
var sourcemaps = require('gulp-sourcemaps');

var onError = function(err) {
  console.log(err.toString());
  this.emit('end');
};

gulp.task('build:zip', function() {

  var distFiles = [
    '*.html',
   //  '!index.html',
    'dist/**/*',
    'src/assets/styles/**/*'
  ];

  // return gulp.src('src/**/*')
  return gulp.src(distFiles, { base: './' })
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sourcemaps.init())
      .pipe(zip('build.zip'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('releases'));
});

gulp.task('build', ['default', 'build:zip']);
