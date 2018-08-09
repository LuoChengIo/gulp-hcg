
var gulp = require('gulp');
var rename = require('gulp-rename');//文件重命名
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sass = require('gulp-sass');
var spritesmith=require('gulp.spritesmith');

gulp.task('sass', function () {
  var processors = [
    autoprefixer({browsers: ["iOS >= 7","Android >= 4",'last 4 versions']})
  ];
  return gulp.src('./src/styles/**/*.scss')
		.pipe(postcss(processors))
		.pipe(sass())
		// .pipe(rename({extname: ".css"}))
    .pipe(gulp.dest('./src/css'));
});
gulp.task('sprite', function () {
	return gulp.src('./src/images/sprite/*.png')//需要合并的图片地址
			.pipe(spritesmith({
					imgName: 'sprite.png',//保存合并后图片的地址
					cssName: 'css/sprite.css',//保存合并后对于css样式的地址
					padding:5,//合并时两个图片的间距
					algorithm: 'binary-tree'//注释1
			}))
			.pipe(gulp.dest('dist/'));
});
gulp.task('copy',function(){ // 复制css文件
	gulp.src('./src/styles/**/*.css')
			.pipe(gulp.dest('./src/css'));
	gulp.src('./src/styles/fonts/*')
	.pipe(gulp.dest('./src/css/fonts'));
});
gulp.task('watch',function(){
	// 监听sass是否变动
	gulp.watch('./src/styles/**/*.scss',['sass']);
	// 监听原生css是否变动，重新复制到对应目录
	gulp.watch('./src/styles/**/*.css',['copy']);
})
gulp.task("default",['watch'])