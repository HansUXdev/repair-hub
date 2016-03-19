var $        = require('gulp-load-plugins')();
var argv     = require('yargs').argv;
var gulp     = require('gulp');
var rimraf   = require('rimraf');
var router   = require('front-router');
var sequence = require('run-sequence');

// Check for --production flag
var isProduction = !!(argv.production);


// Copies your app's page templates and generates URLs for them
gulp.task('routes', function(cb) {
  gulp.src('./client/templates/**/*.html')
    .pipe(router({
      path: 'build/assets/js/routes.js',
      root: 'client'
    }))
    .pipe(gulp.dest('./build/templates'))
  ;

  cb();
  // Watch these files for changes and complie when they change
  gulp.watch(['./client/templates/**/*.html'], ['routes']);
});



