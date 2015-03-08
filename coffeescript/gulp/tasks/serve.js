var gulp = require('gulp');
var config = require('../config');
var connect = require('gulp-connect');

gulp.task('serve', ['dist'], function() {
  connect.server({ root: config.build.dist });
});