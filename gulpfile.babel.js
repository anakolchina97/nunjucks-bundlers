import gulp from "gulp";
import html from "./tasks/html.js";

gulp.task("build", gulp.parallel(html));
gulp.task("default", gulp.parallel("build"));
