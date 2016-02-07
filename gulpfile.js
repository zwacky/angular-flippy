var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var del = require('del');
var merge = require('merge-stream');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var history = require('connect-history-api-fallback');

var paths = {
	less: ['./less/*.less'],
	js: ['./js/src/**/*.js'],
	dist: {
		css: './dist/css/',
		js: './dist/js/',
	}
};



/**
 * removes css- and js-dist folder.
 */
gulp.task('clean', function() {
	return del(['./dist']);
});

/**
 * compiles less files into css.
 */
gulp.task('style', function() {
	var streams = {};
	streams.flippy = gulp.src('./less/flippy.less')
		.pipe(plugins.less())
		.pipe(plugins.autoprefixer(['> 1%','last 3 versions']))
		.pipe(plugins.concat('angular-flippy.css'))
		.pipe(gulp.dest(paths.dist.css))
		.pipe(plugins.minifyCss())
		.pipe(plugins.concat('angular-flippy.min.css'))
		.pipe(gulp.dest(paths.dist.css));

	// fancy
	streams.flippyFancy = gulp.src('./less/flippy-fancy.less')
		.pipe(plugins.less())
		.pipe(plugins.autoprefixer(['> 1%','last 3 versions']))
		.pipe(plugins.concat('angular-flippy-fancy.css'))
		.pipe(gulp.dest(paths.dist.css))
		.pipe(plugins.minifyCss())
		.pipe(plugins.concat('angular-flippy-fancy.min.css'))
		.pipe(gulp.dest(paths.dist.css));

	return merge(streams.flippy, streams.flippyFancy);
});

gulp.task('js', ['lint'], function() {
	return gulp.src(paths.js)
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.babel({
			presets: ['es2015']
		}))
		.pipe(plugins.ngAnnotate())
		.pipe(plugins.concat('angular-flippy.js'))
		.pipe(gulp.dest(paths.dist.js))
		.pipe(plugins.uglify())
		.pipe(plugins.concat('angular-flippy.min.js'))
		.pipe(plugins.sourcemaps.write('.'))
		.pipe(gulp.dest(paths.dist.js));
});

gulp.task('lint', function() {
	return gulp.src(paths.js)
		.pipe(plugins.jshint())
		.pipe(plugins.jshint.reporter('jshint-stylish'))
		.pipe(plugins.jshint.reporter('fail'));
})

gulp.task('watch', ['build'], function() {
	gulp.watch(paths.less, ['watch-style']);
	gulp.watch(paths.js, ['watch-js']);

	browserSync.init({
		server: {
			baseDir: '',
			middleware: [ history() ]
		},
		startPath: '/demo/'
	});
});

gulp.task('_browser-reload', function(cb) {
	browserSync.reload();
	cb();
});

gulp.task('watch-style', function(cb) {
	return runSequence(['style'], ['_browser-reload'], cb);
});

gulp.task('watch-js', function(cb) {
	return runSequence(['js'], ['_browser-reload'], cb);
});


gulp.task('build', function() {
	return runSequence(['clean'], ['style', 'js']);
});
gulp.task('default', ['build']);
