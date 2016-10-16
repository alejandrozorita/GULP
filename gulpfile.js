var gulp 		= require('gulp'),
	sass 		= require('gulp-sass'),
	watch 		= require('gulp-watch'),
	sourcemaps 	= require('gulp-sourcemaps'),
	cssnano 	= require('gulp-cssnano');


var config = {
	scssDir: './assets/scss',
	cssDir: './assets/css'
};

gulp.task('style', function(){
	gulp.src(config.scssDir + '/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass())
	.on('error', sass.logError)
	.pipe(cssnano())
	.pipe(sourcemaps.write('maps'))
	.pipe(gulp.dest(config.cssDir))

})


gulp.task('watch', function(){
	watch(config.scssDir + '/**/*.scss', function(){
		gulp.start('style');
	});

});