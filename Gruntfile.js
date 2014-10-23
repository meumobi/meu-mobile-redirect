/*global module:false*/
module.exports = function(grunt) {
	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
	connect: {
		options:{
			port: 9001,
			//base: '.',
			livereload: 35729,
			//keepalive: true
		},
		livereload: {
			options: {
				base: '.',
			}
		}
	},

	// Watches files for changes and runs tasks based on the changed files
	watch: {
		livereload: {
			files: [
				'**/*.html',
				'index.html',
				'js/*.js'
			],
			options: {
				livereload: '<%= connect.options.livereload %>'	
			}
		}
	},

	jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
  });

  // These plugins provide necessary tasks.
  //grunt.loadNpmTasks('grunt-contrib-jshint');
	//grunt.loadNpmTasks('grunt-contrib-connect');
  //grunt.loadNpmTasks('grunt-contrib-watch');
	
	// Default task.
  grunt.registerTask('default', ['jshint']);

	grunt.registerTask('serve', function (target) {
		grunt.task.run([
			'connect:livereload',
			'watch'
			]);
	});
};
