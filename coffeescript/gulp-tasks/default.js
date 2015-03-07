var gulp = require('gulp');
var coffee = require('gulp-coffee');
var mocha = require('gulp-mocha');
var watch = require('gulp-watch');
var gutil = require('gulp-util');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var deploy = require('gulp-gh-pages');
var concatCss = require('gulp-concat-css');
var uglify = require('gulp-uglify');

var del = require('del');
var source = require('vinyl-source-stream');
var paths = require('vinyl-paths');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');

var config = require('./config');

var src = 'src';
var srcSass = src + '/styles/**/*.sass';
var scripts = src + '/**/*.coffee';
var build = './build';
var buildScripts = build + '/scripts';
var buildTest = buildScripts + '/test/**/*.js';
var buildDist = build + '/dist';

var bundler = browserify(build + '/scripts/app.js');

var bundle = function() {
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(buildDist));
};

gulp.task('sass', ['clean'], function() {
  return gulp.src(srcSass)
             .pipe(sass())
             .pipe(concatCss('styles/bundle.css'))
             .pipe(gulp.dest(buildDist));
});

gulp.task('gh-pages-deploy', ['dist'], function() {
  return gulp.src(buildDist + '/**/*')
             .pipe(deploy());
});

gulp.task('serve', ['dist'], function() {
  connect.server({ root: buildDist });
});

gulp.task('browserify', ['test', 'compile-js'], function() {
  return bundler.bundle()
    .pipe(source('scripts/bundle.js'))
    .pipe(gulp.dest(buildDist))
    .on('error', gutil.log.bind(gutil, 'Browserify Error'));
});

gulp.task('clean', function() {
  return gulp.src(buildDist)
             .pipe(paths(del));
});

gulp.task('compile-coffee', ['clean'], function() {
  return gulp.src(scripts)
             .pipe(coffee())
             .pipe(gulp.dest(build));
});

gulp.task('test', ['compile-js'], function() {
  return gulp.src(buildTest)
             .pipe(mocha({reporter: 'mocha-osx-reporter'}));
});

gulp.task('niceTest', ['compile-js'], function() {
  return gulp.src(buildTest)
             .pipe(mocha({}));
});

gulp.task('html', ['clean'], function() {
  return gulp.src(src + '/**/*.html')
             .pipe(gulp.dest(buildDist));

});

gulp.task('reload', ['dist'], function() {
  connect.reload();
});

gulp.task('watch', ['clean'], function() {
    return watch(src, function () {
      gulp.start('onChange');
    });
});


gulp.task('compile-js', config.tasks.jsCompilation);
gulp.task('dist', config.tasks.dist);
gulp.task('onChange', config.tasks.onFileChange);
gulp.task('default', config.tasks.defaults, function() {});