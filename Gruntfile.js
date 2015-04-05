var grunt = require('grunt');

module.exports = function() {
	// Load plugins
	[
		'grunt-cafe-mocha',
		'grunt-contrib-jshint'
	].forEach(function(task) {
			grunt.loadNpmTasks(task);
		});
	// Configure plugins
	grunt.initConfig({
		cafemocha: {
			all: {src: 'qa/tests-*.js', options: {ui: 'tdd'}}
		},
		jshint: {
			app: ['meadowlark.js', 'public/js/**/*.js', 'lib/**/*.js'],
			qa: ['Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js']
		}
	});
	// Register Tasks
	grunt.registerTask('default', ['cafemocha', 'jshint']);
};