var gulp = require('gulp'),
    path = require('path'),
    q = require('q'),
    fs = require('fs'),
    config = require('../config'),
    _ = require('lodash'),
    Grunticon = require('grunticon-lib');

gulp.task('svg', function () {
  var deferred = q.defer(),
      iconDir = config.svg.sources,
      options = {
        enhanceSVG: true,
        cssprefix: '.'
      };

  var files = fs.readdirSync(iconDir).map(function (fileName) {
    return path.join(iconDir, fileName);
  });

  var grunticon = new Grunticon(files, config.svg.dest, options);

  grunticon.process(function () {
    deferred.resolve();
  });

  return deferred.promise;
});
