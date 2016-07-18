var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var GalvanizeHTMLGenerator = yeoman.generators.Base.extend({

  promptUser: function() {

    var done = this.async();

    // greeting
    console.log(chalk.magenta("Welcome to Galvanize's HTML Generator"));

    var prompts = [
      {
        type: 'confirm',
        name: 'bootstrap',
        message: 'Bootstrap?',
        default: false
      },
      {
        type: 'confirm',
        name: 'normalize',
        message: 'Normalize.css?',
        default: false,
        when: function(answers) {
          return !answers.bootstrap;
        }
      },
      {
        type: 'confirm',
        name: 'jquery',
        message: 'jQuery?',
        default: false
      },
      {
        type: 'confirm',
        name: 'underscore',
        message: 'Underscore?',
        default: false
      },
      {
        type: 'confirm',
        name: 'mocha',
        message: 'Mocha tests?',
        default: false
      },
      {
        type: 'confirm',
        name: 'angular',
        message: 'Angular?',
        default: false
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));

  },
  createApp: function(){
    // html
    if(this.props.angular) {
      this.template('./src/index2.html', './src/index.html');
    } else {
      this.template('./src/index.html', './src/index.html');
    }
    // css
    this.copy('./src/css/main.css', './src/css/main.css');
    // javascript
    if(this.props.jquery) {
      this.copy('./src/js/main-jquery.js', './src/js/main.js');
    } else {
      this.copy('./src/js/main.js', './src/js/main.js');
    }
    // angular
    if(this.props.angular) {
      this.copy('./src/js/main-angular.js', './src/js/app.js');
    }
    // mocha
    if(this.props.mocha) {
      this.directory('./src/test', './src/test');
    }
    // gulp
    this.copy('gulpfile.js', 'gulpfile.js');
    // package.json
    this.copy('package.json', 'package.json');
    // .jscsrc
    this.copy('.jscsrc', '.jscsrc');
  },

});

module.exports = GalvanizeHTMLGenerator;
