var gulp = require('gulp'),
	gutil = require('gulp-util'),
	less = require('gulp-less'),
	s3 = require('gulp-less'),
	browserify = require('gulp-browserify');

gulp.task('test', function(){
	gutil.log('This is a test.');
});

gulp.task('less', function(){
	return gulp.src('components/less/styles.less')
    .pipe(less({}))
    .pipe(gulp.dest('build/css'));
});

gulp.task('html', function(){
	return gulp.src('components/**/*.html')
	.pipe(gulp.dest('build'));
});

gulp.task('img', function(){
	return gulp.src('components/img/*')
	.pipe(gulp.dest('build/img'));
});