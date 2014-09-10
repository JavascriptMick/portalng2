module.exports = function(grunt) {

  grunt.initConfig({
    html2js: {
      options: {
        // custom options, see below
      },
      main: {
        src: ['public/partials/*.tpl.html'],
        dest: 'tmp/templates.js'
      },
    },
  })

  grunt.loadNpmTasks('grunt-html2js');

  // Default task(s).
  grunt.registerTask('default', ['html2js']);

};