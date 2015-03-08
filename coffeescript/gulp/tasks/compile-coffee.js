var gulp = require('gulp');
var config = require('../config');
var coffee = require('gulp-coffee');

gulp.task('compile-coffee', ['clean'], function() {
  return gulp.src(config.src.scripts + '/**/*.coffee')
             .pipe(coffee())
             .pipe(gulp.dest(config.build.root));
});