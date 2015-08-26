var browserSync = require('browser-sync');

gulp.task('browserSync', ['build'], function () {
  console.log('syncing');
  browserSync({
    server: {
      baseDir: ['public'],
    },
    files :[
      'public/**'
    ],
    watchOptions: {
      debounceDelay: 1000
    },
    ui: {
      port: 8081
    }
  });
});

gulp.task('serveDist', function () {
  browserSync({
    server: {
      baseDir: ['dist'],
    },
  });
});
