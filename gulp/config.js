// destination for files for testing
var DESTINATION = "debug";

var sass = {
  sources: 'app/sass/**/*.scss',
  main: ['./app/sass/main.scss'],
  dest: DESTINATION + '/css'
};

var svg = {
  sources: 'app/img/',
  dest: './app/img/svg'
};

var react = {
  sources: 'app/scripts/**/*.js*',
  dest: 'compiled'
};

var extra = {
  sources: [
    'app/**/*.*',
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
      src: ['./' + react.dest + '/vendor.js'],
      dest: 'vendor.js',
      vendor: true
    },
    {
      src: ['./' + react.dest + '/app.js'],
      dest: 'main.js'
    }
  ],
  dest: './' + DESTINATION + '/scripts/'
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
