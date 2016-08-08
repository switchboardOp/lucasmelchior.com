module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
		, sass: {
			dist: {
				files: {
					'css/style.css': 'style.sass',
					'avatar/style.css': 'avatar/style.sass'
				}
			}
		}
		, cssmin: {
			options: {
				shorthandCompacting: false
				, roundingPrecision: -1
			}
			, target: {
				files: {
					'css/style.min.css': 'css/style.css'
				}
			}
		}
		, watch: {
			css: {
				files: '**/*.sass'
				, tasks: ['sass', 'cssmin']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.registerTask('default', ['watch']);
}
