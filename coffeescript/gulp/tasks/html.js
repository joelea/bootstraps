var gulp = require('gulp');
var config = require('../config');

gulp.task('html', ['clean'], function() {
  return gulp.src(config.src.root + '/**/*.html')
             .pipe(gulp.dest(config.build.dist));

});