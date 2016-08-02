'use strict';


var gulp = require('gulp');

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var minify = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var rename = require('gulp-rename');

var browserSync = require('browser-sync');

var onError = function(err) {
  console.log(err.toString());
  this.emit('end');
};

gulp.task('vendor:slick:styles', function() {

   var slickStyles = [
      'src/assets/vendor/slick-carousel/slick/slick.scss',
     'src/assets/vendor/slick-carousel/slick/slick-theme.scss',
   ];

  return gulp.src(slickStyles)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sourcemaps.init())
    .pipe(concat('slick.css'))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(autoprefixer('last 2 version', 'iOS 8'))
    .pipe(gulp.dest('dist/stylesheets'))
    .pipe(minify({
      keepSpecialComments: 0
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/stylesheets'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('vendor:slick:fonts', function() {
  return gulp.src('src/assets/vendor/slick-carousel/slick/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('vendor:slick:scripts', function() {

  return gulp.src('src/assets/vendor/slick-carousel/slick/slick.js')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulp.dest('dist/javascript'))
    .pipe(concat('slick.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/javascript'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('vendor:slick', ['vendor:slick:styles','vendor:slick:scripts','vendor:slick:fonts']);
