var $        = require('gulp-load-plugins')();
var argv     = require('yargs').argv;
var gulp     = require('gulp');
var rimraf   = require('rimraf');
var router   = require('front-router');
var sequence = require('run-sequence');

// Check for --production flag
var isProduction = !!(argv.production);

var paths = {
  production: isProduction ? 'bower_components/foundation-apps/js/angular/components/**/*.html' : 'client/components/*.html',
  directives: [
    // Foundation Directives
    'bower_components/foundation-apps/js/angular/components/**/*.html',
    'client/components/*.html',
  ],
}



// Compiles the Foundation for Apps directive partials into a single JavaScript file
gulp.task('directives', function(cb) {
  gulp.src(paths.directives)
    .pipe($.ngHtml2js({
      prefix: 'components/',
      moduleName: 'foundation',
      declareModule: false
    }))
    .pipe($.uglify())
    .pipe($.concat('templates.js'))
    .pipe(gulp.dest('./build/assets/js'))
  ;

  // Iconic SVG icons
  gulp.src('./bower_components/foundation-apps/iconic/**/*')
    .pipe(gulp.dest('./build/assets/img/iconic/'))
  ;

  cb();
  // Watch these files for changes and complie when they change
  gulp.watch([paths.directives], ['directives']);
});