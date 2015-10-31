var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');

var path = {
  HTML: 'public/src/index.html',
  CSS: 'public/src/styles/*.css',
  OUT: 'build.js',
  DEST: 'public/dist',
  DEST_SRC: 'public/dist/src',
  DEST_CSS: 'public/dist/src/styles',
  ENTRY_POINT: './public/src/js/app.js'
};

// Development Tasks
gulp.task('copy-html', function() {
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});

gulp.task('copy-css', function() {
  gulp.src(path.CSS)
    .pipe(gulp.dest(path.DEST_CSS));
});

gulp.task('watch', function() {
  gulp.watch(path.HTML, ['copy-html']);

  gulp.watch(path.CSS, ['copy-css']);

  var watcher = watchify(browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  return watcher.on('update', function() {
    watcher.bundle()
      .pipe(source(path.OUT))
      .pipe(gulp.dest(path.DEST_SRC));
      console.log('Updated');
  })
    .bundle()
    .pipe(source(path.OUT))
    .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('default', ['watch']);
