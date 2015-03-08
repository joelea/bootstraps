var gulp = require('gulp');
var config = require('../config');
var watch = require('gulp-watch');

gulp.task('watch', ['clean'], function() {
    return watch(config.src.root, function () {
      gulp.start('onChange');
    });
});