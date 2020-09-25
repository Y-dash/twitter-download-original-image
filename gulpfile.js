let gulp = require('gulp');
let uglify = require('gulp-uglify');
let plumber = require('gulp-plumber');
let zip = require('gulp-zip');

const JAVASCRIPT_TASK = 'js';
const JAVASCRIPT_SRC_PATH = '.intermediate/*.js';
const JAVASCRIPT_DIST_PATH = 'dist/scripts';
const COPY_TASK = 'copy';
const COPY_SRC_PATH = ['src/manifest.json', 'src/icons/*'];
const COPY_DIST_PATH = 'dist';
const ZIP_TASK = 'zip';
const ZIP_SRC_PATH = 'dist/**/*';
const ZIP_DIST_PATH = './';

gulp.task(JAVASCRIPT_TASK, (done) => {
	gulp.src(JAVASCRIPT_SRC_PATH)
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest(JAVASCRIPT_DIST_PATH));
	done();
});

gulp.task(COPY_TASK, (done) => {
	gulp.src(COPY_SRC_PATH, { base: 'src' })
		.pipe(plumber())
		.pipe(gulp.dest(COPY_DIST_PATH));
	done();
});

gulp.task(ZIP_TASK, (done) => {
	gulp.src(ZIP_SRC_PATH)
		.pipe(zip('release.zip'))
		.pipe(gulp.dest(ZIP_DIST_PATH));
	done();
});

gulp.task('default', (done) => {
	gulp.watch(JAVASCRIPT_SRC_PATH, gulp.parallel(JAVASCRIPT_TASK));
	gulp.watch(COPY_SRC_PATH, gulp.parallel(COPY_TASK));
	done();
});