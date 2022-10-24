"use strict";

var gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync").create();

gulp.task("sass", function () {
  return gulp
    .src("./css/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
});

gulp.task("sass:watch", function () {
  gulp.watch("./css/*.scss", ["sass"]);
});

gulp.task("browserSync", function () {
  var files = ["./*.html", "./css/*.css", "./js/*.js", "./img/*.{png,jpg,gif}"];

  browserSync.init(files, {
    server: {
      baseDir: "./",
    },
  });
});

gulp.task(
  "default",
  gulp.series("browserSync", function () {
    gulp.start("sass:watch");
  })
);
