const mix = require("laravel-mix");
const path = require("path");

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

mix.ts("resources/js/app.tsx", "public/js")
	.postCss("resources/css/app.css", "public/css", [
		require("tailwindcss"),
		require("postcss-import"),
	])
	.webpackConfig({
		output: {
			chunkFilename: "js/[name].js?id=[chunkhash]",
		},
		resolve: {
			alias: { "@": path.resolve("resources/js") },
		},
	})
	.version()
	.sourceMaps();
