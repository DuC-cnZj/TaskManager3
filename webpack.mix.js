const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/assets/js/app.js', 'public/js');
mix.sass('resources/assets/sass/app.scss', 'public/css');
// mix.js([
	// 'resources/assets/js/charts/Chart.min.js',
	// 'resources/assets/js/charts/pie.js',
	// 'resources/assets/js/charts/bar.js',
	// ],
	// 'public/js/charts.js');

	 // mix.js('resources/assets/js/vue/app.js', 'public/js/app1.js');
	 // mix.js('resources/assets/js/vue/search.js', 'public/js');