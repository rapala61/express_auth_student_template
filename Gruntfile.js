module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dist: {
        files: {
          'client/public/js/dest/react_components.js': ['client/public/js/src/react_components/*/main.jsx']
        }
      },
      options: {
        transform: [
          ["babelify", {presets: ["react"]}]
        ]
      }
    },
    // watch: {
    //   scripts: {
    //     files: ['**/*.jsx'],
    //     task: ['browserify'],
    //     options: {
    //       spawn: true
    //     }
    //   }
    // }
  });

  // load plugins
  // grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  // load custom tasks
  grunt.registerTask('default', ['browserify']);
}
