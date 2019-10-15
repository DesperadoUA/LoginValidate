const gulp=require('gulp');
const sass=require('gulp-sass');
const concat=require('gulp-concat');
const autoprefixer=require('gulp-autoprefixer');
const sassFiles=['./src/css/main_page.scss'];
const cssFiles=['./src/css/style_sass.css'];
const jsFiles=['./src/js/jQuery.js', './src/js/index.js'];
function sass_style(){
   
         return gulp.src(sassFiles)
         .pipe(concat('style_sass.css'))
         .pipe(sass().on('error', sass.logError))
         .pipe(gulp.dest('./src/css/'));
}

function styles(){
       return gulp.src(cssFiles)
       .pipe(concat('style.css'))
       .pipe(autoprefixer({
          browsers:['> 0.1%'],
          cascade:false
       }))
       .pipe(gulp.dest('./template/css/'));
}

function script(){
   return gulp.src(jsFiles)
   .pipe(concat('script.js'))
   .pipe(gulp.dest('./template/js/'));
}

function watch(){
         gulp.watch('./src/css/*.css', styles);
         gulp.watch('./src/js/*.js', script);
         gulp.watch('./src/css/*.scss', sass_style);
}
gulp.task('styles', styles);
gulp.task('script', script);
gulp.task('sass_style', sass_style);
gulp.task('watch', watch);