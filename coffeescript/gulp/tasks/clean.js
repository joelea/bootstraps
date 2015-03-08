var gulp = require('gulp');
var config = require('../config');
var del = require('del');
var paths = require('vinyl-paths');

gulp.task('clean', function() {
  return gulp.src(config.build.root)
             .pipe(paths(del));
});