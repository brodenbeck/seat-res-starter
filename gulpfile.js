var gulp = require("gulp");
var stylus = require("gulp-stylus");
var concat = require("gulp-concat");
var browserSync = require("browser-sync").create();
var jshint = require("gulp-jshint");

gulp.task("styles", function() {
	return gulp.src("stylus.styl")
		.pipe(stylus())
		.pipe(gulp.dest("./css"));
});

gulp.task("merge", ["styles"], function() {
	return gulp.src("./css/*.css")
		.pipe(concat("merged.css"))
		.pipe(gulp.dest("./dist/"))
		.pipe(browserSync.stream());
});

gulp.task('lint', function() {
  return gulp.src('./*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task("bs", ["merge"], function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	gulp.watch("*.styl", ["merge"]);
	gulp.watch(["*.html", "*.js"])
		.on('change', browserSync.reload);
});

