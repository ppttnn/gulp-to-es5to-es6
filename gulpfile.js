var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task('es5Toes6', function() {
  return gulp.src("./src/app.js")
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest("./dist"));
});

gulp.task('watch', function() {
  gulp.watch(['./src/*.js'], ['es5Toes6']);
});
