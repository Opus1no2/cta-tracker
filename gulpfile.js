var gulp = require('gulp');

gulp.task('build', function () {
  gulp.src(['./node_modules/angular/angular.min.js', './node_modules/angular-route/angular-route.min.js'])
  .pipe(gulp.dest('./src/client/app/lib'));
});
