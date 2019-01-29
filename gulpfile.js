var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('minify-js', function () {
    return gulp.src("src/bundle/ipaddress.js")
        .pipe(uglify({
            output: {
                comments: /^!/
            }
        }))
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('dist/'));
});