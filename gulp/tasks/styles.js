const gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    variables = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import');
    mixins = require('postcss-mixins');

gulp.task('styles', () => {
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, variables, nested, autoprefixer]))
    .on('error', (errorInfo) => {
        console.log(errorInfo.toString());
        this.emitOne('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
})