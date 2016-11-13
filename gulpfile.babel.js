'use strict'

import gulp       from 'gulp';
import sass       from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import concat     from 'gulp-concat';
import gutil      from 'gulp-util';
import babel      from 'gulp-babel'

const scss_src_path = './src/styles/**/*.scss';
const js_src_path   = './src/js/**/*.{jsx,js}';
const img_src_path  = './src/imgs/**/*.{gif,jpg,jpeg,png}';
const html_src_path = './src/**/*.html';

const assets_path = './public/assets';

// SASS Rendering
gulp.task('build-scss', () => gulp
  .src(scss_src_path)
  .pipe(sourcemaps.init()) // Add the map to modified source.
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write()) // Add the map to modified source.
  .pipe(gulp.dest(assets_path + '/styles'))
);

// JS minify and concat
gulp.task('build-js', () => gulp
  .src(js_src_path)
  .pipe(sourcemaps.init())
  .pipe(babel({
    "presets": ["react"]
  }))
  .pipe(concat('app.js'))
  .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) //only uglify if gulp is ran with '--type production'
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(assets_path + '/js'))
);

gulp.task('copy-html', () => gulp
  .src(html_src_path)
  .pipe(gulp.dest('./public/'))
);

gulp.task('copy-img', () => gulp
  .src(img_src_path)
  .pipe(gulp.dest(assets_path + '/imgs'))
);

gulp.task('default', [
  'build-scss',
  'build-js',
  'copy-img',
  'copy-html'
]);

// Watch task
gulp.task('watch', ['default'], () => {
  gulp.watch(scss_src_path, ['build-scss']);
  gulp.watch(js_src_path,   ['build-js']);
  gulp.watch(html_src_path, ['copy-html']);
  gulp.watch(img_src_path,  ['copy-img']);
});
