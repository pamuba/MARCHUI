var gulp = require('gulp')
var jshint = require('gulp-jshint')
var cleanCSS = require('gulp-clean-css')
var rename = require('gulp-rename')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var sourcemaps = require('gulp-sourcemaps')
const browserify = require('browserify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')

//gulp -g, in case of errors
//gulp --tasks
// gulp.task('task_jshint', function(done){
//     gulp.src('js/main.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'))
//     done();
// });


//dfault task
// gulp.task('default', function(done){
//         gulp.src('js/main.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'))
//         done();
// })


//task with new syntex
// function task_jshint(done){
//     gulp.src('js/main.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'))
//         done();
// }

// function task_jshint1(done){
//     gulp.src('js/main.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'))
//         done();
// }

// exports.task_jshint = task_jshint;
// exports.task_jshint1 = task_jshint;
// 
// exports.default = gulp.series(task_jshint, task_jshint1)
// exports.default = gulp.parallel(task_jshint, task_jshint1)

// exports.default = task_jshint;

//gulp minify and rename css files
//gulp-rename
//gulp-clean-css

// var styleSRC = './src/scss/style.css'
// // var styleSRC = './src/scss/style.scss'
// var styleDEST = './dist/css'

// gulp.task('styles', function(done){
//     gulp.src(styleSRC)
//         .pipe(cleanCSS())
//         .pipe(rename({suffix:'.min'}))
//         .pipe(gulp.dest(styleDEST));
//     done()
// })


// //sass compile + minify + rename
// //gulp-sass

// var styleSRC = './src/scss/style.scss'
// var styleDEST = './dist/css'

// gulp.task('styles', function(done){
//     gulp.src(styleSRC)
//         .pipe(sass({
//             outputStyle:'compressed'
//         }))
//         // .pipe(cleanCSS())
//         .pipe(rename({suffix:'.min'}))
//         .pipe(gulp.dest(styleDEST))
//     done();
// })


//sass compile + minify + rename + autoprefixer + sourcemaps
//gulp-sourcemaps
//gulp-autoprefixer



var styleSRC = './src/scss/style.scss'
var styleDEST = './dist/css'

gulp.task('styles', function(done){
    gulp.src(styleSRC)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle:'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            // browsers:['last 2 versions']
        }))
        .pipe(rename({suffix:'.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(styleDEST))
    done();
})

jsSRC = 'script.js'
jsDIST = './dist/js/'
jsFolder = './src/js/'
var jsFiles = [jsSRC]
gulp.task('js', function(done){
    jsFiles.map(function( entry ){
        return browserify({
            entries:[jsFolder+entry]
        })
        .transform(babelify, {presets: ['env']})
        .bundle()
        .pipe( source( entry ))
        .pipe( rename({ extname:'.min.js'}))
        .pipe( buffer() )
        .pipe( sourcemaps.init({ loadMaps:true }))
        .pipe( uglify() )
        .pipe( sourcemaps.write('./'))
        .pipe( gulp.dest(jsDIST))
    });
    done();
    gulp.src(jsSRC)
        .pipe(gulp.dest(jsDest))
    done();

    // Browserify
    // transform babelify
    // bundle
    // source
    // rename
    // buffer
    // init sourcemaps
    // uglify
    // write sourcemaps
    // dist
})

// var imgSRC = './src/images/*'
// var imgDest = './dist/images/'

// gulp.task('image', function(done){
//     gulp.src(imgSRC)
//         .pipe(imagemin())
//         .pipe(gulp.dest(imgDest));
//     done()
// });

var styleWatch = './src/scss/**/*.scss';
var jsWatch = './src/js/**/*.js'

gulp.task('watch', function(){
    gulp.watch(styleWatch, gulp.series('styles'))
    gulp.watch(jsWatch, gulp.series('js'))
});

gulp.task('default', gulp.parallel('styles', 'js'), function(){
    //
})