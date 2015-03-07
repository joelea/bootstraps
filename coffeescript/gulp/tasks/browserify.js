var gulp = require('gulp');
var config = require('../config');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');

var browserify = require('browserify');

var bundler = browserify(config.build.root + '/app.js');

var bundle = function() {
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.build.dist));
};

gulp.task('browserify', ['test', 'compile-js'], function() {
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source(config.build.scripts + '/bundle.js'))
    .pipe(gulp.dest(config.build.dist));
});