"use strict";

module.exports = function (grunt) {
  require("time-grunt")(grunt);
  require("load-grunt-config")(grunt, {
    jitGrunt: {
      staticMappings: {
        default: "the-name-of-your-grunt-task",
      },
    },
  });
  require("jit-grunt")(grunt, {
    sprite: "grunt-spritesmith",
    foo: "@abc/grunt-foo", // for private modules.
    bar: "custom/bar.js", // for custom tasks.
  });
  require("jit-grunt")(grunt);
  const sass = require("node-sass")(grunt);
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          "css/style.css": "css/style.scss",
        },
      },
    },
    watch: {
      files: "css/*.scss",
      tasks: ["sass"],
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: ["css/*.css", "*.html", "js/*.js"],
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./",
          },
        },
      },
    },
  });
  grunt.registerTask("css", ["sass"]);
  grunt.registerTask("default", ["browserSync", "watch"]);
};
