var gulp = require('gulp'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso');
    
gulp.task('sass',(function(){
    return gulp.src('./**/*/.scss')
        .pipe(sass())
        .pipe(csso())
        .pipe(gulp.dest('./project'));

}));
    