var gulp = require('gulp'),
	less = require('gulp-less'),
	server = require('gulp-server-livereload'),
	autoPrefixer = require('gulp-autoprefixer');

gulp.task('less', function () {
    gulp.src(['less/*.less','!src/less/extend/{reset,test}.less'])
        .pipe(less())
        .pipe(autoPrefixer({
	      browsers: ['last 2 versions', 'Android >= 4.0'],
	      cascade: true, //是否美化属性值 默认：true 像这样：
	      //-webkit-transform: rotate(45deg);
	      //        transform: rotate(45deg);
	      remove: true //是否去掉不必要的前缀 默认：true
	    }))
        .pipe(gulp.dest('css'));
});
 
gulp.task('lessWatch', function () {
    gulp.watch('less/*.less', ['less']); //当所有less文件发生改变时，调用testLess任务
});

gulp.task('webserver',['lessWatch'],function () {
	gulp.src('../liminshen.github.io')
		.pipe(server({
	      host : 'lms.yinyuetai.com',
	      livereload: true,
	      directoryListen: true,
	      open: true,
	      port : 8080,
	      defaultFile : 'index.html',
	      livereload:true,
	    }));
});