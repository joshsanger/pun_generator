module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat : {
            basic : {
                src : [
                    './src/css/mixins.less',
                    './src/css/reset.less',
                    './src/css/global.less',
                    './src/css/material-icons.less',
                    './src/css/*.less',
                ],
                dest : './_assets/css/staging.less'
            }
        },
        less: {
            options: {
                compress: true,
                banner : '@charset "UTF-8";'
            },
            build: {
                src: './_assets/css/staging.less',
                dest: './_assets/css/master.min.css'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'less']);
    grunt.registerTask('buildCss', ['concat', 'less']);
};