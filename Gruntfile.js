module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					compass: true
				},
				files: {
					'css/style.css' : 'sass/style.scss'
				}
			}
		},
		cssmin : {
			dist: {
				options: {},
				files: {
					'css/style.min.css' : 'css/style.css'
				}
			}
		},
		concat: {
			dist: {
				options: {},
				files: {
					'js/script.js' : ['js/src/script.js']
				}
			}
		},
		uglify: {
			dist: {
				options: {},
				files: {
					'js/plugins.min.js': 'js/plugins.js',
					'js/script.min.js': 'js/script.js',
				}
			}
		},
		watch: {
			css: {
				files: ['sass/**/*.scss'],
				tasks: ['sass', 'cssmin']
			},
			js: {
				files: ['js/src/**/*.js'],
				tasks: ['concat', 'uglify']
			}
		},
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['sass', 'cssmin', 'concat', 'uglify']);

};