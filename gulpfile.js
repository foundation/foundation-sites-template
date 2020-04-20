var gulp          = require('gulp');
var browserSync   = require('browser-sync').create();
var $             = require('gulp-load-plugins')();
var autoprefixer  = require('autoprefixer');
//var sourcemaps = require('gulp-sourcemaps');

var sassPaths = [
  'node_modules/foundation-sites/scss',
  'node_modules/motion-ui/src'
];

function sass( path ) {
	return gulp.src( path )
		//.pipe(sourcemaps.init())
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
    .on('error', $.sass.logError))
    .pipe($.postcss([
      autoprefixer({ overrideBrowserslist: ['last 2 versions', 'ie >= 9'] })
		]))
		//.pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
};

function sassFrontend(){
	return sass('scss/app.scss');
}
function sassBackend(){
	return sass('scss/app-backend.scss');
}


function serve() {
  browserSync.init({
    server: "./"
  });

  gulp.watch("scss/*.scss", sassFrontend);
  gulp.watch("scss/*.scss", sassBackend);
  gulp.watch("*.html").on('change', browserSync.reload);
}

gulp.task('sassFrontend', sassFrontend);
gulp.task('sassBackend', sassBackend);

gulp.task('serve', gulp.series('sassFrontend', 'sassBackend', serve));
gulp.task('default', gulp.series('sassFrontend', 'sassBackend', serve));
