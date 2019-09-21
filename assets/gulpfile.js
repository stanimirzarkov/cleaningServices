//// Requires gulp
var gulp = require('gulp');
//// Requires the request plugin
//var request = require('request');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// Requires the gulp-clean-css plugin
var cleanCss = require('gulp-clean-css');
// Requires the gulp-rename plugin
var rename = require("gulp-rename");

gulp.task('sass', function() {
  gulp.src('scss/main.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(cleanCss())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('styles'));
  gulp.src('scss/contact/contact.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(cleanCss())
    .pipe(rename('contact.min.css'))
    .pipe(gulp.dest('styles'));
  gulp.src('scss/about/about.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(cleanCss())
    .pipe(rename('about.min.css'))
    .pipe(gulp.dest('styles'));
  gulp.src('scss/mobile.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(cleanCss())
    .pipe(rename('mobile.min.css'))
    .pipe(gulp.dest('styles'));
});

// Gulp watch
gulp.task('watch', ['sass'], function () {
      gulp.watch('scss/**/**/*.scss', ['sass']);
  });
