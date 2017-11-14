// Generated by CoffeeScript 1.12.7
(function() {
  module.exports = function(grunt) {
    grunt.initConfig({
      sass: {
        compile: {
          options: {
            style: 'expanded'
          },
          files: {
            'pub/css/styles.css': 'src/sass/manifest.sass'
          }
        }
      },
      coffee: {
        compile: {
          expand: true,
          flatten: true,
          cwd: 'src/js',
          src: ['**/*.coffee'],
          dest: 'src/js/compiled',
          ext: '.js'
        }
      },
      concat: {
        main: {
          src: ['src/js/compiled/*.js'],
          dest: 'pub/js/script.js'
        }
      },
      clean: {
        clean: ['pub']
      },
      assemble: {
        options: {
          assets: 'pub/img',
          partials: ['src/templates/partials/*.hbs'],
          layout: ['src/templates/layouts/main.hbs'],
          removeHbsWhitespace: true
        },
        "static": {
          expand: true,
          cwd: 'src/templates/pages/',
          src: ['*.hbs'],
          dest: 'pub/'
        }
      },
      prettify: {
        all: {
          expand: true,
          cwd: 'pub',
          ext: '.html',
          src: ['**/*.html'],
          dest: 'pub/'
        }
      },
      watch: {
        styles: {
          files: 'src/**/*.sass',
          tasks: ['sass']
        },
        scripts: {
          files: 'src/**/*.js',
          tasks: ['concat:main']
        },
        html: {
          files: ['src/**/*.hbs'],
          tasks: ['assemble']
        }
      },
      cssmin: {
        options: {
          shorthandCompacting: false,
          roundingPrecision: -1
        },
        target: {
          files: {
            'pub/css/styles.css': ['pub/css/styles.css']
          }
        }
      },
      uglify: {
        "public": {
          files: {
            'pub/js/script.js': ['pub/js/script.js']
          }
        }
      },
      imagemin: {
        files: {
          expand: true,
          cwd: 'pub/img',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'pub/img'
        }
      }
    });
    grunt.loadNpmTasks('grunt-assemble');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('basic', ['sass', 'concat', 'assemble']);
    grunt.registerTask('default', ['basic', 'watch']);
    return grunt.registerTask('deploy', ['default', 'uglify']);
  };

}).call(this);

//# sourceMappingURL=Gruntfile.js.map
