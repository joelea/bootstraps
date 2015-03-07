srcRoot = './src';
buildRoot = './build';

module.exports = {
  tasks: {
    dist: ['browserify', 'html', 'sass'],
    defaults: ['watch', 'test', 'serve'],
    onFileChange: ['test'],
    jsCompilation: ['compile-coffee']
  },
  src: {
    root: srcRoot,
    sass: srcRoot + '/styles/**/*.sass',
    scripts: srcRoot + '/scripts'
  },
  build: {
    root: buildRoot,
    scripts: buildRoot + '/scripts',
    test: '/scripts/test/**/*.js',
    dist: buildRoot + '/dist'
  }
};