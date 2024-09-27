const gulp         = require('gulp');
const sass         = require('gulp-sass')(require('sass-embedded'));
const browserSync  = require('browser-sync').create();
const sourcemaps   = require('gulp-sourcemaps');

const includePaths = [
    'node_modules/foundation-sites/scss',
    'node_modules/motion-ui/src'
];

function sassBuild() {
    return gulp.src(['scss/app.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths : includePaths,
            outputStyle  : 'compressed'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css'));
};

function serve() {
    browserSync.init({server : "./"});
    gulp.watch("scss/*.scss", sassBuild);
    gulp.watch("*.html").on('change', browserSync.reload);
}

gulp.task('sass', sassBuild);
gulp.task('serve', gulp.series('sass', serve));
gulp.task('default', gulp.series('sass', serve));
