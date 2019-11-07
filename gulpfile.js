var gulp = require('gulp');
var browserSync = require("browser-sync").create();

gulp.task('start', function () {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(["./*.html", "./src/css/*.css"]).on('change', browserSync.reload);
});
