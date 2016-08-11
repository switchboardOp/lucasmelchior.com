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
			},
			puredrawer: {
				files: {
					'css/pure-drawer.css': 'puredrawer/scss/pure-drawer.scss'
				}
			}
		},
		autoprefixer: {
			dist: {
				expand: true,
				src: ['**/*.css'],
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
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'images/',
					src: ['**/*.{png,jpg,gif,svg}'],
					dest: 'img/'
					}]
			}
		},
		watch: {
			styles: {
				files: '**/**/*.sass',
				tasks: ['styles']
			},
			images: {
				files: '**/*.{png,jpg,gif}',
				tasks: ['images']
			}
		}
	});
	grunt.registerTask('styles', 'Compiles the stylesheets.', ['newer:sass', 'newer:autoprefixer', 'newer:cssmin']);
	grunt.registerTask('images', ['newer:imagemin']);
	grunt.registerTask('default', ['styles', 'images', 'watch']);
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
}
