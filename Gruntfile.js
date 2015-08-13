'use strict';
module.exports = function(grunt) {

  grunt.initConfig({

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-wp-i18n');



  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'less',
    'uglify',
    'grunticon',
    'version'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'less',
    'uglify',
    'grunticon',
    'version'
  ]);

  grunt.registerTask('dev', [
    'grunticon',
    'watch'
  ]);

};
