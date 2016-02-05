var gulp = require('gulp'),
	gutil = require('gulp-util'),
	less = require('gulp-less'),
	s3 = require('gulp-less'),
	browserify = require('gulp-browserify');

gulp.task('test', function(){
	gutil.log('This is a test.');
});

gulp.task('img', function(){
	return gulp.src('components/img/*')
	.pipe(gulp.dest('build/img'));
});

gulp.task('fonts', function(){
	return gulp.src('components/fonts/*')
	.pipe(gulp.dest('build/fonts'));
});

gulp.task('less', ['fonts'], function(){
	return gulp.src('components/less/styles.less')
    .pipe(less({}))
    .pipe(gulp.dest('build/css'));
});

gulp.task('html', function(){
	return gulp.src('components/**/*.html')
	.pipe(gulp.dest('build'));
});

gulp.task('build', ['img','less','html']);