var gulp         = require('gulp'),
    less         = require('gulp-less'),
    browserSync  = require('browser-sync'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglifyjs'),
    cssnano      = require('gulp-cssnano'),
    rename       = require('gulp-rename'),
    del          = require('del'),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    cache        = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    notify       = require('gulp-notify'),
    plumber      = require('gulp-plumber'),
    htmlhint     = require('gulp-htmlhint'),
    debug        = require('gulp-debug');


gulp.task('less', function () {
  return gulp.src('app/less/**/*.less')
    .pipe(plumber({
      errorHandler: notify.onError(function(err) {
        return {
          title: 'Style',
          message: err.message
        };
      })
    }))
    .pipe(less())
    .pipe(autoprefixer([
        'last 15 versions',
        '> 1%', 'ie 8', 'ie 7'
        ],
        {cascade: true}
        ))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});


gulp.task('scripts', function(){
  return gulp.src('app/libs/slickslider/slick.min.js')
  .pipe(concat('libs.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/js'));
});


gulp.task('css-libs', ['less'], function(){
  return gulp.src('app/css/libs.css')
  .pipe(cssnano())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('app/css/'));
});


gulp.task('htmlhint', function () {
    return gulp.src('app/*.html')
    .pipe(debug())
    .pipe(htmlhint())
});


gulp.task('browser-sync', function(){
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  });
});


gulp.task('clean', function(){
  return del.sync('dist');
});


gulp.task('clear', function(){
  return caceh.clearAll();
});


gulp.task('imagemin', function(){
  return gulp.src('app/images/**/*')
  .pipe(cache(imagemin({
    interlaced: true,
    progressive: true,
    svgoPlugins: [{removeVeiwBox: false}],
    une: [pngquant()]
  })))
  .pipe(gulp.dest('dist/images'));
});


gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function(){
  gulp.watch('app/less/**/*.less', ['less']);
  gulp.watch('app/*html', browserSync.reload);
  gulp.watch('app/js/*js', browserSync.reload);
  gulp.watch('app/*php', browserSync.reload);
});


gulp.task('build', ['clean', 'imagemin', 'less', 'scripts'], function(){
  var buildCss = gulp.src([
      'app/css/style.css',
      'app/css/libs.min.css'
    ])
      .pipe(gulp.dest('dist/css'));

  var buildFonts = gulp.src('app/fonts/**/*')
      .pipe(gulp.dest('dist/fonts'));

  var buildJs = gulp.src('app/js/**/*.js')
      .pipe(gulp.dest('dist/js'));

  var buildPhp = gulp.src('app/*.php')
      .pipe(gulp.dest('dist/'));

  var buildHtml = gulp.src('app/*.html')
      .pipe(gulp.dest('dist/'));
})