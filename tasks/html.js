import gulp from "gulp";
import nunjucks from "gulp-nunjucks";

export default function html() {
  return gulp
    .src("src/pages/**/*.njk")
    .pipe(nunjucks.compile())
    .pipe(gulp.dest("build"));
}
