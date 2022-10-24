"use strict";
import { deleteSync } from "./node_modules/del/index.js";
import("gulp-imagemin");
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

gulp.task("default", gulp.series("browserSync"), function () {
  gulp.start("sass:watch");
});

gulp.task("clean", function () {
  return deleteSync(["dist"]);
});

gulp.task("copyfonts", function () {
  gulp
    .src("./node_modules/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*")
    .pipe(gulp.dest("./dist/fonts"));
});

gulp.task("imagemin", function () {
  return gulp
    .src("img/*.{png,jpg,gif}")
    .pipe(
      imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })
    )
    .pipe(gulp.dest("dist/img"));
});

gulp.task("build", gulp.series("clean"), function () {
  gulp.start("copyfonts", "imagemin");
});
