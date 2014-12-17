var gulp = require('gulp');
var pipe = require('multipipe');
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var rimraf = require('rimraf');



var paths = {
	less: ['./less/*.less'],
	js: ['./js/src/*.js', './js/src/**/*.js'],
	dist: {
		css: './dist/css/',
		js: './dist/js/',
	}
};



/**
 * removes css- and js-dist folder.
 */
gulp.task('clean', function() {
	rimraf.sync(paths.dist.css);
	rimraf.sync(paths.dist.js);
})

/**
 * compiles less files into css.
 */
gulp.task('less', function() {
	gulp.src('./less/flippy.less')
		.pipe(concat('flippy.min.css'))
		.pipe(less())
		.pipe(minify())
		.pipe(gulp.dest(paths.dist.css));

	gulp.src('./less/flippy.less')
		.pipe(concat('flippy.css'))
		.pipe(less())
		.pipe(gulp.dest(paths.dist.css));

	// fancy
	gulp.src('./less/flippy-fancy.less')
		.pipe(concat('flippy-fancy.min.css'))
		.pipe(less())
		.pipe(minify())
		.pipe(gulp.dest(paths.dist.css));

	gulp.src('./less/flippy-fancy.less')
		.pipe(concat('flippy-fancy.css'))
		.pipe(less())
		.pipe(gulp.dest(paths.dist.css));
});

gulp.task('js', function() {
	gulp.src(paths.js)
		.pipe(concat('flippy.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(paths.dist.js));

	gulp.src(paths.js)
		.pipe(concat('flippy.js'))
		.pipe(gulp.dest(paths.dist.js));
});

gulp.task('watch', function() {
	gulp.watch(paths.less, ['less', 'dist']);
	console.log('watching directory:' + paths.less.join(', '));	
	
	gulp.watch(paths.js, ['js', 'dist']);
	console.log('watching directory:' + paths.js.join(', '));	
});


/**
 * optimizes the output in terms of minification and concatenation.
 */
gulp.task('dist', function() {

	// add some optimizations (?)
	
});



gulp.task('build', ['clean', 'less', 'js', 'dist']);
gulp.task('default', ['build']);