module.exports = function (grunt) {


    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            production: {
                options: {
                    paths: ["build/tmp/styles"],
                    compile: true,
                    compress: true
                },
                files: [
                    {src: ['build/tmp/styles/main.less'], dest: 'build/tmp/styles/main.min.css', nonull: true}
                ]
            },
            development: {
                options: {
                    compile: true,
                    compress: true,
                    optimization: 2,
                    sourceMap: true,
                    sourceMapFilename: "palatium/main.css.source-map.json", //Write the source map to a separate file with the given filename.
                    sourceMapBasepath: "palatium/styles", //Sets the base path for the Less file paths in the source map.
                    sourceMapRootpath: "/palatium/styles",//Adds this path onto the Less file paths in the source map.
                    sourceMapURL: "/palatium/main.css.source-map.json"
                },
                files: [
                    {src: ['palatium/styles/main.less'], dest: 'palatium/main.min.css', nonull: true}
                ]
            }
        },
        watch: {
            less: {
                files: ['palatium/**/*.less'],
                tasks: ['less:development'],
                options: {
                    nospaces: true,
                    livereload: true
                }
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default tasks

};
