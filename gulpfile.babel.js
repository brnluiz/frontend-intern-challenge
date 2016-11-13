import gulp       from 'gulp';
import sass       from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import concat     from 'gulp-concat';
import gutil      from 'gulp-util';

const public_path    = './public';
const scss_src_path = './src/styles/**/*.scss';
const js_src_path   = './src/js/**/*.js';

const assets_path = public_path + '/assets/';

// SASS Rendering
gulp.task('scss-render', function() {
    gulp.src(scss_src_path)
        .pipe(sourcemaps.init()) // Add the map to modified source.
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write()) // Add the map to modified source.
        .pipe(gulp.dest(assets_path + '/styles'));
});

// JS minify and concat
gulp.task('js-build', function() {
  return gulp.src(js_src_path)
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) //only uglify if gulp is ran with '--type production'
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(assets_path + '/js'));
});

// Watch task
gulp.task('default',function() {
    gulp.watch(scss_src_path,['scss-render']);
    gulp.watch(js_src_path,['js-build']);
});
