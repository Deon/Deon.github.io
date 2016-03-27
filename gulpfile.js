var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps')
var postcss = require('gulp-postcss')
var cssnano = require('gulp-cssnano')

gulp.task ('default', ['css']);

gulp.task('css', function(){
  var processors = [
    require('postcss-nested'),
    require('postcss-simple-vars'),
    require('postcss-cssnext'),
    cssnano(),
    require('postcss-reporter'),
  ];
  return gulp.src('./src/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dest'))
});