/**
 * Created by YinYueTai on 2015/6/12.
 */
var gulp = require('gulp'),
    watchPath = require('gulp-watch-path'),
    less = require("gulp-less"),
    server = require('gulp-server-livereload');

gulp.task("less-build", function() {
    gulp.src("less/*.less")
        .pipe(less())
        .pipe(gulp.dest("css"))
});

gulp.task("less-watch", function(){
    gulp.watch("less/*.less", function(event){
        var paths = watchPath(event, "less/", "css/");
        gulp.src(paths.srcPath)
            .pipe(less())
            .pipe(gulp.dest(paths.distDir))
    })
});
gulp.task('server',function () {
    gulp.src('../ershoushichang/')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true,
      defaultFile : 'auctionList.html',
      host : 'lms.yinyuetai.com'
    }));
});
gulp.task("build", ["less-build", "less-watch",'server'], function(){
    console.log("complete");
});