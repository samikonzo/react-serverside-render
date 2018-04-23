const gulp = require('gulp')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')

gulp.task('webpack', function(){
	return webpack(webpackConfig)
})


gulp.task('server', function(){
	gulp.src('./dist/server.js')
})


gulp.task('default', ['webpack','server'])