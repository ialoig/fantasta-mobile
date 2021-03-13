console.log("[babel] - Start Babel config file")

module.exports = function(api) {
	api.cache(true)
	return {
		presets: [
			"babel-preset-expo",
			["@babel/preset-react", { "development": true }]
		],
	}
}
