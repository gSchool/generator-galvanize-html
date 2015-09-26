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
      },
      {
        type: 'confirm',
        name: 'gulp',
        message: 'Gulp?',
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
      this.template('index2.html', 'index.html');
    } else {
      this.template('index.html', 'index.html');
    }
    // css
    this.copy('css/main.css', 'css/main.css');
    // javascript
    if(this.props.jquery) {
      this.copy('js/main-jquery.js', 'js/main.js');
    } else {
      this.copy('js/main.js', 'js/main.js');
    }
    // angular
    if(this.props.angular) {
      this.copy('js/main-angular.js', 'js/app.js');
    }
    // mocha
    if(this.props.mocha) {
      this.directory('test', 'test');
    }
    // gulp
    if(this.props.gulp) {
      this.copy('gulpfile.js', 'gulpfile.js');
      this.copy('package.json', 'package.json');
    }
  },

});

module.exports = GalvanizeHTMLGenerator;
