module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
      options: {
        plugins: ['transform-react-jsx'],
        presets: ['es2015', 'react']
      },
      jsx: {
        files: [{
          expand: true,
          cwd: 'client/public/js/dist/', // Custom folder
          src: ['*.jsx'],
          dest: 'client/public/js/src/', // Custom folder
          ext: '.js'
        }]
      }
    },
    watch: {
      scripts: {
        files: ['**/*.jsx'],
        task: ['babel'],
        options: {
          spawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['babel']);
}
