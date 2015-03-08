var gulp = require('gulp');
var coffee = require('gulp-coffee');
var mocha = require('gulp-mocha');
var watch = require('gulp-watch');
var gutil = require('gulp-util');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var uglify = require('gulp-uglify');

var del = require('del');
var source = require('vinyl-source-stream');
var paths = require('vinyl-paths');
var buffer = require('vinyl-buffer');

var config = require('./config');

gulp.task('serve', ['dist'], function() {
  connect.server({ root: config.build.dist });
});

gulp.task('compile-coffee', ['clean'], function() {
  return gulp.src(config.src.scripts + '/**/*.coffee')
             .pipe(coffee())
             .pipe(gulp.dest(config.build.root));
});

gulp.task('test', ['compile-js'], function() {
  return gulp.src(config.build.test)
             .pipe(mocha({reporter: 'mocha-osx-reporter'}));
});

gulp.task('niceTest', ['compile-js'], function() {
  return gulp.src(config.build.test)
             .pipe(mocha({}));
});

gulp.task('html', ['clean'], function() {
  return gulp.src(config.src.root + '/**/*.html')
             .pipe(gulp.dest(config.build.dist));

});

gulp.task('reload', ['dist'], function() {
  connect.reload();
});

gulp.task('watch', ['clean'], function() {
    return watch(config.src.root, function () {
      gulp.start('onChange');
    });
});


gulp.task('compile-js', config.tasks.jsCompilation);
gulp.task('dist', config.tasks.dist);
gulp.task('onChange', config.tasks.onFileChange);
gulp.task('default', config.tasks.defaults, function() {});