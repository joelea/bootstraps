var gulp = require('gulp');
var config = require('../config');

var deploy = require('gulp-gh-pages');

gulp.task('gh-pages-deploy', ['dist'], function() {
  return gulp.src(config.build.dist + '/**/*')
             .pipe(deploy());
});