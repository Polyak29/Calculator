'use strict';
var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync').create(),
    del = require('del');

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./project"
        }
    });
});

gulp.task('pug', function(){
    return gulp.src('gulp/pug/*.pug')
        .pipe(pug({
            pretty:true
        }))
        .pipe(gulp.dest('./project'))
        .pipe(browserSync.reload({
            stream:true
        }))
});

gulp.task('sass',(function(){
    return gulp.src('gulp/sass/*.scss')
    .pipe(sourcemaps.init())
        .pipe(sass()
        .on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .on("error", notify.onError({
            title: "style"
          }))
        .pipe(csso())
        .pipe(sourcemaps.write())

        .pipe(gulp.dest('./project'))
        .pipe(browserSync.reload({
            stream:true
        }))

}));
gulp.task('clean', function(){
    return del('dist/**', {force:true});
});

gulp.task('scripts',(function(){
    return gulp.src('gulp/scripts/scripts2.js')
    .pipe(gulp.dest('./project'))
    .pipe(browserSync.reload({
        stream:true
    }))

}));


gulp.task('watch', function(){
    gulp.watch('./**/*/*.pug',gulp.series('pug'))
    gulp.watch('./**/*/*.scss', gulp.series('sass'))
    gulp.watch('gulp/scripts/scripts2.js', gulp.series('scripts'))
});

gulp.task('default', gulp.series(
    'clean',
    gulp.parallel('pug','sass','scripts'),
    gulp.parallel('watch','serve')
    ));