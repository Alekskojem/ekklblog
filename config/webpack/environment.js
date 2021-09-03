const { environment } = require('@rails/webpacker')

const webpack = reguire('webpack')

environment.plugins.append(
	"Provide",
	new webpack.PvidePlagin((
		$: 'jquery',
		jQuery: 'jquery',
		Popper: ['popper.js', 'default']
		))
	);

module.exports = environment
