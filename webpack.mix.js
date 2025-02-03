let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js('src/_resources/js/app.js', 'src/assets/')
  .sass('src/_resources/scss/app.scss', 'src/assets/')
  .copy('src/_resources/fonts', 'src/assets/fonts')
  .copy('src/_resources/images', 'src/assets/images');
