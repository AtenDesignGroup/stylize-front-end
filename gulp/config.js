// destination for files for testing
var DESTINATION = "public";
var path = require('path');

/**
 * Return absolute path
 * project root.
 */
var absolutePath = function(relativePath) {
  return path.join(__dirname, '../', relativePath);
}

var sass = {
  sources: absolutePath('app/sass/**/*.scss'),
  main: [
    absolutePath('app/sass/main.scss')
  ],
  dest: DESTINATION + '/assets/css'
};

var svg = {
  sources: absolutePath('app/img/'),
  dest: DESTINATION + '/assets/img/svg'
};

var react = {
  sources: absolutePath('app/scripts/**/*.js*'),
  dest: DESTINATION + '/compiled'
};

var extra = {
  sources: [
    absolutePath('app/**/*.*'),
    '!' + react.sources,
    '!' + sass.sources
  ],
  dest : DESTINATION
};

var dist = {
  sources: DESTINATION + '/**/*.html',
  extra: [
    DESTINATION + '/**/*.*',
    '!' + DESTINATION + '/**/*.js',
    '!' + DESTINATION + '/**/*.css',
    '!' + DESTINATION + '/*.html'
  ],
  dest: 'dist'
};

var browserify = {
  files: [
    {
      src: path.join(react.dest, '/vendor.js'),
      dest: 'vendor.js',
      vendor: true
    },
    {
      src: path.join(react.dest, '/app.js'),
      dest: 'main.js'
    }
  ],
  dest: DESTINATION + '/assets/js/'
};

module.exports = {
  debugDestination: DESTINATION,
  sass: sass,
  react: react,
  extra: extra,
  dist: dist,
  svg: svg,
  browserify: browserify
}
