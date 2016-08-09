module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			options: {
				sourcemap: 'none'
			},
			dist: {
				files: {
					'css/style.css': 'style.sass',
					'avatar/style.css': 'avatar/style.sass'
				}
			}
		},
		autoprefixer: {
			build: {
				expand: true,
				src: ['**/**/*.css'],
			}
		},
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'css/style.min.css': 'css/style.css',
					'avatar/style.min.css': 'avatar/style.css'
				}
			}
		},
		watch: {
			stylesheets: {
				files: '**/*.sass',
				tasks: ['stylesheets']
			}
		}
	});
	grunt.registerTask('stylesheets', 'Compiles the stylesheets.', ['sass', 'autoprefixer', 'cssmin']);
	grunt.registerTask('default', ['watch']);
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
}
