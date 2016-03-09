/**
 * Created by van on 2016/2/20.
 */


var gulp = require('gulp'),

    minifyCSS = require('gulp-minify-css'),
    spriter = require('gulp-css-spriter');

gulp.task('spriterAndCss', function () {

    var timestamp = +new Date();
    //需要自动合并雪碧图的样式文件
    return gulp.src('./src/css/spriter.css')
        .pipe(spriter({
            // 生成的spriter的位置
            'spriteSheet': './img/sprite.png',
            // 生成样式文件图片引用地址的路径
            // 如下将生产：backgound:url(../images/sprite20324232.png)
            'pathToSpriteSheetFromCSS': '../img/sprite.png'
        }))
        //.pipe(minifyCSS())
        //产出路径
        .pipe(gulp.dest('./css'));
});

