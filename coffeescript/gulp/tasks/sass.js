var gulp = require('gulp');
var config = require('../config');

var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');

gulp.task('sass', ['clean'], function() {
  return gulp.src(config.src.sass)
             .pipe(sass())
             .pipe(concatCss('styles/bundle.css'))
             .pipe(gulp.dest(config.build.dist));
});