(function() {

  'use strict';

  var yeoman = require('yeoman-generator');
  var chalk = require('chalk');
  var yosay = require('yosay');

  module.exports = yeoman.Base.extend({
    prompting: function () {
      this.log(yosay(
        'Welcome to the finest ' + chalk.red('generator-galvanize-html') + ' generator!'
      ));
      var prompts = [
        {
          type: 'confirm',
          name: 'angular',
          message: 'Angular?',
          default: false
        }
      ];
      return this.prompt(prompts).then(function (props) {
        // To access props later use this.props.someAnswer;
        this.props = props;
      }.bind(this));
    },
    writingHTML: function () {
      if (this.props.angular) {
        this.fs.copy(
          this.templatePath('./src/index2.html'),
          this.destinationPath('./src/index.html')
        );
      } else {
        this.fs.copy(
          this.templatePath('./src/index.html'),
          this.destinationPath('./src/index.html')
        );
      }
    },
    writingJavaScript: function () {
      if (this.props.angular) {
        this.fs.copy(
          this.templatePath('./src/js/ng-app.js'),
          this.destinationPath('./src/js/app.js')
        );
        this.fs.copy(
          this.templatePath('./src/js/ng-config.js'),
          this.destinationPath('./src/js/config.js')
        );
        this.fs.copy(
          this.templatePath('./src/js/components/main/main.controller.js'),
          this.destinationPath('./src/js/components/main/main.controller.js')
        );
      } else {
        this.fs.copy(
          this.templatePath('./src/js/main.js'),
          this.destinationPath('./src/js/main.js')
        );
      }
    },
    writingCSS: function () {
      this.fs.copy(
        this.templatePath('./src/css/main.css'),
        this.destinationPath('./src/css/main.css')
      );
    },
    writingMocha: function () {
      if (!this.props.angular) {
        this.fs.copy(
          this.templatePath('./src/test/index.html'),
          this.destinationPath('./src/test/index.html')
        );
        this.fs.copy(
          this.templatePath('./src/test/test.js'),
          this.destinationPath('./src/test/test.js')
        );
      }
    },
    writingFiles: function () {
      this.fs.copy(
        this.templatePath('package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
      this.fs.copy(
        this.templatePath('.jscsrc'),
        this.destinationPath('.jscsrc')
      );
      this.fs.copy(
        this.templatePath('.jshintrc'),
        this.destinationPath('.jshintrc')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
    }
  });

}());
