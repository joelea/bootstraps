var gulp = require('gulp');
var config = require('./config');

gulp.task('compile-js', config.tasks.jsCompilation);
gulp.task('dist', config.tasks.dist);
gulp.task('onChange', config.tasks.onFileChange);
gulp.task('default', config.tasks.defaults, function() {});