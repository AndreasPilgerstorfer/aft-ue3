module.exports = function(grunt) {

    grunt.initConfig({
        concat : {
            dist: {
                src: ['node_modules/bootstrap/js/dist/collapse.js'],
                dest: 'public/main.js',
            }
        },
        watch: {
            css: {
                files: ['**/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: true,
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'public/main.css': 'scss/main.scss',
                }
            }
        }
    });

    // Hier definert man die Tasks, dass man sie auch benutzen kann
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');



    grunt.registerTask('default', ['sass', 'concat']);       // wird bei nur grunt ausgeführt
};