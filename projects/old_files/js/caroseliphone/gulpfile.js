var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync'),
    del          = require('del'),
    cache        = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    notify       = require('gulp-notify'),
    plumber      = require('gulp-plumber'),
    htmlhint     = require('gulp-htmlhint'),
    debug        = require('gulp-debug');


gulp.task('scss', function () {
  return gulp.src('app/sass/**/*.scss')
    .pipe(plumber({
      errorHandler: notify.onError(function(err) {
        return {
          title: 'Style',
          message: err.message
        };
      })
    }))
    .pipe(sass())
    .pipe(autoprefixer([
        'last 15 versions',
        '> 1%', 'ie 8', 'ie 7'
        ],
        {cascade: true}
        ))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
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
  return cache.clearAll();
});


gulp.task('watch', ['browser-sync'], function(){
  gulp.watch('app/sass/**/*.scss', ['scss']);
  gulp.watch('app/*html', browserSync.reload);
  gulp.watch('app/js/*js', browserSync.reload);
});


gulp.task('build', ['clean', 'scss'], function(){
  var buildCss = gulp.src('app/css/style.css')
      .pipe(gulp.dest('dist/css'));

  var buildFonts = gulp.src('app/fonts/**/*')
      .pipe(gulp.dest('dist/fonts'));

  var buildJs = gulp.src('app/js/**/*.js')
      .pipe(gulp.dest('dist/js'));

  var buildHtml = gulp.src('app/*.html')
      .pipe(gulp.dest('dist/'));
})