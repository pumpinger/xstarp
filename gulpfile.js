/**
 * Created by van on 2016/2/20.
 */


var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    spriter = require('gulp-css-spriter');

gulp.task('minifyCssWithSpriter', function () {
    var timestamp = +new Date();
    //需要自动合并雪碧图的样式文件
    return gulp.src('./src/css/spriter.css')
        .pipe(spriter({
            // 生成的spriter的位置
            'spriteSheet': './dest/img/sprite.png',
            // 生成样式文件图片引用地址的路径
            // 如下将生产：backgound:url(../images/sprite20324232.png)
            'pathToSpriteSheetFromCSS': '../img/sprite.png'
        }))
        .pipe(minifyCSS())
        //产出路径
        .pipe(gulp.dest('./css'));
});



gulp.task('sassToCss',function (){
        return gulp.src("./src/sass/global.scss")
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest("./dest/css/"));
});

gulp.task('watch',function (){
    var watcher=gulp.watch('./src/sass/global.scss',['sassToCss']);
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});


