module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{html,css,png,jpg,ttf,webp,jpeg,svg,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};