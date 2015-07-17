var gobble = require( 'gobble' );

gobble.cwd( __dirname );

var lib = gobble( 'src' )
	.transform( 'babel', {
		blacklist: [ 'es6.modules', 'useStrict' ],
		sourceMap: false
	})
	.transform( 'esperanto-bundle', {
		entry: 'ractive-decorators-sortable',
		type: 'umd',
		name: 'Ractive.decorators.sortable',
		sourceMap: false
	});

module.exports = gobble([
	lib,
	lib.transform( 'uglifyjs', {
		ext: '.min.js'
	})
]);
