var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps')
var postcss = require('gulp-postcss')
var cssnano = require('gulp-cssnano')
var cssnext = require('postcss-cssnext');

var paths = {
  css: ['./src/*.css'] 
};

gulp.task ('default', ['watch', 'css']);

gulp.task('css', function(){
  var processors = [
    require('postcss-nested'),
    require('postcss-simple-vars'),
    cssnext({browsers: ['last 1 version']}),
    require('postcss-reporter'),
  ];
  return gulp.src(paths.css)
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dest'))
});

gulp.task('watch', function(){
  gulp.watch(paths.css, ['css']);
});