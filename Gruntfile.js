module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      foo: {
        src: [
          "src/*.js",
          "src/services/*.js",
          "src/controllers/*.js",
        ],
      },
    },
      concat: {
        foo: {
          src: [
          "src/*.js",
          "src/services/*.js",
          "src/controllers/*.js",
          ],
          dest: 'build/<%=pkg.name %>.js'
        },
      },

      uglify: {
        files: {
          src:'<%= concat.foo.dest %>',
          dest: 'build/<%= pkg.name %>.min.js'
        },
      },

      watch: {
        scripts: {
          files: [
          "src/*.js",
          "src/services/*.js",
          "src/controllers/*.js",
        ],
          tasks: ['jshint', 'concat', 'uglify']
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('dev', ['watch']);
  grunt.registerTask('default', ['jshint', 'uglify', 'concat']);
};