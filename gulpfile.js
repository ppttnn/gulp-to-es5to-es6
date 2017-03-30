var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task('es5Toes6', function() {
  return gulp.src("./src/app.js")
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest("./dist"));
});

gulp.task('moveTemp', function() {
  return gulp.src("./src/temp/*.ejs")
    .pipe(gulp.dest("./dist/temp"));
});

gulp.task('watch', ['es5Toes6', 'moveTemp'], function() {
  gulp.watch(['./src/temp/*.ejs'], ['moveTemp']);
  gulp.watch(['./src/*.js'], ['es5Toes6']);
});
