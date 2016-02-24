var gulp = require('gulp'),
	gutil = require('gulp-util'),
	less = require('gulp-less'),
	s3 = require('gulp-s3'),
	shell = require('gulp-shell'),
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

gulp.task('upload', shell.task([
	'aws s3 cp build s3://apps.kbia.org/mizzou-crossroads --recursive --profile kbia'
]));

gulp.task('build', ['img','less','html']);

gulp.task('deploy', ['build', 'upload']);

gulp.task('watch',function(){
	gutil.log('Gulp will say that this task has finished, but don\'t believe its dirty lies.');
	gutil.log('Hit \^c to actually exit watch mode.');
	gulp.watch('components/less/**/*.less',['less']);
});