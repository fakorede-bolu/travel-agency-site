const gulp = require ('gulp'),
watch = require ('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
variables = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import')

gulp.task('default', () => {
    console.log('Hurray - you created a Gulp task');
})

gulp.task('html', () => {
    console.log('Imagine something useful with html');
});

gulp.task('styles', () => {
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, variables, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
})


gulp.task('watch', () => {
    watch('./app/index.html', () => {
        gulp.start('html');
    });
    watch('./app/assets/styles/**/*.css', () => {
        gulp.start('styles')
    })
})

