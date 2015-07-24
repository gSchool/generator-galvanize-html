var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var GalvanizeHTMLGenerator = yeoman.generators.Base.extend({

  promptUser: function() {

    var done = this.async();

    // greeting
    console.log(this.yeoman);
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
        default: true,
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
        name: 'jasmine',
        message: 'Jasmine tests?',
        default: false
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));

  },
  createApp: function(){
    this.mkdir("app");
      this.mkdir("app/css");
      this.mkdir("app/sections");
      this.mkdir("build");

    this.template('index.html');
  },

});

module.exports = GalvanizeHTMLGenerator;
