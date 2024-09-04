'use strict';

const { src, dest, task, watch, series, parallel} = require('gulp');

var  babel       = require('@babel/core'),
    sass        = require('gulp-sass'),
    cssmin      = require('gulp-cssmin'),
    rename      = require('gulp-rename'),
    concat      = require('gulp-concat'),
    imagemin    = require('gulp-imagemin'),
    uglify      = require('gulp-uglify'),
    prefix      = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    reload      = browserSync.reload,
    config      = require('./awesomeplate.config.json');

console.log(config.css);


function css(done) {
  return src(config.css)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(prefix('last 2 versions'))
    .pipe(cssmin())
    .pipe(concat('style.css', {newLine: ''}))
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('dist/css'));
    done();
};

function js(done) {
  return src(config.js)
    .pipe(uglify({mangle: false}))
    .pipe(concat('script.js', {newLine: ''}))
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('dist/js'));

    done();
};

function img() {
  return src('src/img/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(dest('dist/img'));
};

function video() {
  return src('src/video/**/*.+(mp4|mpeg|mov|avi)')
    .pipe(dest('dist/video'));
};

function fonts() {
  return src('src/fonts/**/*.+(eot|ttf|woff|woff2)')
    .pipe(dest('dist/fonts'));
};


function serve(){
  browserSync.init(['dist/css/*.css', 'dist/js/*.js', '*.html'],{
    server: {
      baseDir: './'
    }
  });
};

function watchFiles() {
  watch('src/sass/**/*.scss', css);
  watch('src/js/**/*.js', js);
  watch('src/img/**/*.+(png|jpg|gif|svg)', img);
  watch('src/video/**/*.+(mp4|mpeg|mov|avi)', video);
  watch('./awesomeplate.config.json', parallel(css, js));
};

task('css', css);
task('js', js);
task('img', img);
task('img', video);
task('serve', series(serve, css, js, watchFiles));
task('default', parallel(css, js, img, video, fonts, serve, watchFiles));
task('watchFiles', series(watchFiles,serve));
