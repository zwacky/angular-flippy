var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var del = require('del');
var merge = require('merge-stream');

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
	return del([paths.dist.css, paths.dist.js]);
});

/**
 * compiles less files into css.
 */
gulp.task('less', ['clean'], function() {
	var streams = {};
	streams.flippy = gulp.src('./less/flippy.less')
		.pipe(plugins.less())
		.pipe(plugins.autoprefixer(['> 1%','last 3 versions']))
		.pipe(plugins.concat('flippy.css'))
		.pipe(gulp.dest(paths.dist.css))
		.pipe(plugins.minifyCss())
		.pipe(plugins.concat('flippy.min.css'))
		.pipe(gulp.dest(paths.dist.css));

	// fancy
	streams.flippyFancy = gulp.src('./less/flippy-fancy.less')
		.pipe(plugins.less())
		.pipe(plugins.autoprefixer(['> 1%','last 3 versions']))
		.pipe(plugins.concat('flippy-fancy.css'))
		.pipe(gulp.dest(paths.dist.css))
		.pipe(plugins.minifyCss())
		.pipe(plugins.concat('flippy-fancy.min.css'))
		.pipe(gulp.dest(paths.dist.css));

	return merge(streams.flippy, streams.flippyFancy);
});

gulp.task('js', ['clean'], function() {
	return gulp.src(paths.js)
		.pipe(plugins.babel())
		.pipe(plugins.concat('flippy.js'))
		.pipe(gulp.dest(paths.dist.js))
		.pipe(plugins.ngAnnotate())
		.pipe(plugins.uglify())
		.pipe(plugins.concat('flippy.min.js'));
});

gulp.task('watch', function() {
	gulp.watch(paths.less, ['less', 'dist']);
	console.log('watching directory:' + paths.less.join(', '));

	gulp.watch(paths.js, ['js', 'dist']);
	console.log('watching directory:' + paths.js.join(', '));
});


gulp.task('build', ['clean', 'less', 'js']);
gulp.task('default', ['build']);
