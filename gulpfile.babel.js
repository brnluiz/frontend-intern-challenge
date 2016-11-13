import gulp       from 'gulp';
import sass       from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import concat     from 'gulp-concat';
import gutil      from 'gulp-util';
import babel      from 'gulp-babel'

const public_path    = './public';
const scss_src_path = './src/styles/**/*.scss';
const js_src_path   = './src/js/**/*.js';
const jsx_src_path  = './src/js/**/*.jsx';

const assets_path = public_path + '/assets/';

// SASS Rendering
gulp.task('scss-render', () => gulp
  .src(scss_src_path)
  .pipe(sourcemaps.init()) // Add the map to modified source.
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write()) // Add the map to modified source.
  .pipe(gulp.dest(assets_path + '/styles'))
);

// JS minify and concat
gulp.task('js-build', () => gulp
  .src(jsx_src_path)
  .pipe(sourcemaps.init())
  .pipe(babel({
    "presets": ["react"]
  }))
  .pipe(concat('app.js'))
  .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) //only uglify if gulp is ran with '--type production'
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(assets_path + '/js'))
);

gulp.task('html-copy', () => gulp
  .src('./src/index.html')
  .pipe(gulp.dest('./public'))
);

// Watch task
gulp.task('default', () => {
  gulp.watch(scss_src_path,['scss-render']);
  gulp.watch(jsx_src_path,['js-build']);
  gulp.watch('./src/index.html',['html-copy']);
});
