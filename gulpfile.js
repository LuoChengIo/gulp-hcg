
var gulp = require('gulp');
rename = require('gulp-rename');//文件重命名
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');

gulp.task('postcss', function () {
  var processors = [
    autoprefixer({browsers: ["iOS >= 7","Android >= 4",'last 4 versions']}),
    cssnext,
    precss
  ];
  return gulp.src('./src/postcss/**/*.postcss')
		.pipe(postcss(processors))
		.pipe(rename({extname: ".css"}))
    .pipe(gulp.dest('./src/css'));
});
gulp.task('copy',function(){ // 复制css文件
	gulp.src('./src/postcss/**/*.css')
			.pipe(gulp.dest('./src/css'));
	gulp.src('./src/postcss/fonts/*')
	.pipe(gulp.dest('./src/css/fonts'));
});
gulp.task('watch',function(){
	// 监听postcss是否变动
	gulp.watch('./src/postcss/**/*.postcss',['postcss']);
	// 监听原生css是否变动，重新复制到对应目录
	gulp.watch('./src/postcss/**/*.css',['copy']);
})
gulp.task("default",['watch'])