module.exports = function(grunt) {
  grunt.initConfig({
      uglify: {
        dist: {
          src: ['assets/js/jquery-3.2.1.js', 'assets/js/jquery-ui.js', 'assets/js/projet.js'],
          dest: 'assets/js/script.js',
        },
      },
      cssmin: {
        target: {
          files: {
            'assets/css/style.min.css': ['assets/css/style.css', 'assets/css/jquery-ui.css', 'assets/css/animate.css'],
          },
        },
      },
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('js',['uglify']);
  grunt.registerTask('css', 'cssmin');
};
