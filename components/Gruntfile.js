module.exports = function(grunt) {

  grunt.initConfig({
    meta: {
      version: '0.0.1',
      banner: '/*! portalng - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://www.portalng.com/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'Michael Dausmann; */'
    },
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js']
    },    
    html2js: {
      options: {
        // custom options, see below
      },
      main: {
        src: ['src/**/*.tpl.html'],
        dest: 'dist/tmp/templates.js'
      },
    },
    concat: {
      dist: {
        src: ['<banner:meta.banner>', 'src/**/*.js', 'dist/tmp/*.js'],
        dest: 'dist/portalng.<%= meta.version %>.js'
      }
    },
    copy: {
      dist: {
        files: [
          {src: 'dist/portalng.<%= meta.version %>.js', dest: '../portal/public/js/lib/portalng/portalng.<%= meta.version %>.js'},
          {src: 'dist/portalng.<%= meta.version %>.js', dest: '../applet1/public/js/lib/portalng/portalng.<%= meta.version %>.js'}
        ]
      }
    }    

  });

  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['html2js', 'concat', 'copy']);

};