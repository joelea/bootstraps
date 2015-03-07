module.exports = {
  tasks: {
    dist: ['browserify', 'html', 'sass'],
    defaults: ['watch', 'test', 'serve'],
    onFileChange: ['test'],
    jsCompilation: ['compile-coffee']
  }
};