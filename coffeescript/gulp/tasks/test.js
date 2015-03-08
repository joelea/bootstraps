var gulp = require('gulp');
var config = require('../config');
var mocha = require('gulp-mocha');

gulp.task('test', ['compile-js'], function() {
  return gulp.src(config.build.test)
             .pipe(mocha({reporter: 'mocha-osx-reporter'}));
});