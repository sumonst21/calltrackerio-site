module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //uglify
    uglify: {
      main_bundle:{
        files: {
          'js/main_bundle.min.js':
          [
            'js/jquery-1.11.2.min.js',
            'js/bootstrap.min.js',
            'js/ouibounce.js',
            'js/main.js',
          ]
        }
      }
    },
    //jshint
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        },
      },
      main_bundle:[
        'js/main.js',
      ]
    }

  });


  // Load grunt plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask(
    'default', ['uglify','jshint']
  );

};
