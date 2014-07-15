module.exports = function (grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'delegate-event.js',
				dest: 'delegate-event.min.js'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['uglify']);

};
