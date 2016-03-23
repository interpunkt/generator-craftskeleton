//  Main gulp JS
//  Copyright 2016 by inter-punkt.ag
//  Autor: Selim Imoberdorf
//  --------------------------------------------------------

'use strict';

//  dependencies
var gulp = require('gulp');

//  packages
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var nano = require('gulp-cssnano');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

//  browsersync
var browserSync = require('browser-sync').create();

//  task: browsersync
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        proxy: '<%= local %>'
    });

    gulp.watch('public/dev/src/**/*.scss', ['sass']);
    gulp.watch('templates/**/*.twig').on('change', browserSync.reload);
});

//  task: sass
gulp.task('sass', function() {
    gulp.src('public/dev/src/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync({
            outputStyle: 'expanded',
            precision: 10,
            includePaths: ['.']
        }).on('error', sass.logError))
        .pipe(autoprefixer({ browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'] }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('public/dev/styles'))
        .pipe(browserSync.stream());
});

//  build-task: styles
gulp.task('styles', function() {
    gulp.src('public/dev/src/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(autoprefixer({
            browsers: ['> 2%', 'last 2 versions', 'Firefox ESR']
        }))
        .pipe(nano({
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('public/assets/styles'));
});

//  build-task: fallback
gulp.task('fallback', function() {
    gulp.src('public/dev/src/fallback.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('fallback.css'))
        .pipe(autoprefixer({
            browsers: ['> 2%', 'last 2 versions', 'Firefox ESR']
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('public/assets/styles'));
});

//  build-task: scripts
gulp.task('scripts', function() {
    gulp.src(['public/dev/scripts/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('public/assets/scripts'));
});

//  tasks: gulp
//  --------------------------------------------------------

//  task: default bind serve
gulp.task('default', ['serve']);

//  task: build
gulp.task('build', ['styles', 'fallback', 'scripts']);