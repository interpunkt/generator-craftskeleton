'use strict';

var yeoman = require('yeoman-generator');
var yosay  = require('yosay');
var chalk  = require('chalk');

var CraftSkeletonGenerator = yeoman.generators.Base.extend({
    init: function () {
        this.pkg              = require('../../package.json');
        this.conflicter.force = true;
    },

    askFor: function () {
        var done = this.async();

        this.log(yosay('Welcome to the awesome' + chalk.red(' craftskeleton') + ' generator!'));

        var welcome =
                "\n   ___ _ __ __ _ / _| |_ ___| | _____| | ___| |_ ___  _ __     " +
                "\n  / __| '__/ _` | |_| __/ __| |/ / _ \ |/ _ \ __/ _ \| '_ \    " +
                "\n | (__| | | (_| |  _| |_\__ \   <  __/ |  __/ || (_) | | | |   " +
                "\n  \___|_|  \__,_|_|  \__|___/_|\_\___|_|\___|\__\___/|_| |_|   " +
                "\n                                                               " +
                "\n -----------------------------------------------------------   " +
                "\n craftkseleton is made with love in aarau, switzerland.        " +
                "\n -----------------------------------------------------------   " +
                "\n                                                               " +
                "\n Author: Selim Imoberdorf                                      " +
                "\n Website: Website: http://inter-punkt.ch                       " +
                "\n NPM: https://www.npmjs.com/package/generator-craftskeleton    " +
                "\n                                                               ";

        console.log(welcome);

        var prompts = [{
            name:    'projectName',
            message: 'Tell me the name of this project',
            default: 'Craft Skeleton'
        }, {
            type:    'confirm',
            name:    'installCraft',
            message: 'Would you like to download the latest Craft CMS?',
            default: true
        }, {
            name:    'dbLocalUrl',
            message: '[LOCAL] Domain of your local installation',
            default: 'craft-skeleton.dev'
        }, {
            name:    'dbLocalServer',
            message: '[LOCAL] Name of your local database server',
            default: 'localhost'
        }, {
            name:    'dbLocalUser',
            message: '[LOCAL] Name of your local database user',
            default: 'root'
        }, {
            name:    'dbLocalPassword',
            message: '[LOCAL] Password of your local database user',
            default: 'root'
        }, {
            name:    'dbLocalName',
            message: '[LOCAL] Name of your local database'
        }, {
            name:    'dbStageUrl',
            message: '[STAGE] Domain of your stage installation'
        }, {
            name:    'dbStageServer',
            message: '[STAGE] Name of your stage database server'
        }, {
            name:    'dbStageUser',
            message: '[STAGE] Name of your stage database user'
        }, {
            name:    'dbStagePassword',
            message: '[STAGE] Password of your stage database user'
        }, {
            name:    'dbStageName',
            message: '[STAGE] Name of your stage database'
        }];

        //  --------------------------------------------------------
        //  get data from prompts
        //  --------------------------------------------------------
        this.prompt(prompts, function (props) {
            this.installCraft = props.installCraft;

            this.projectName = props.projectName;

            this.dbLocalUrl      = props.dbLocalUrl;
            this.dbLocalServer   = props.dbLocalServer;
            this.dbLocalUser     = props.dbLocalUser;
            this.dbLocalPassword = props.dbLocalPassword;
            this.dbLocalName     = props.dbLocalName;

            this.dbStageUrl      = props.dbStageUrl;
            this.dbStageServer   = props.dbStageServer;
            this.dbStageUser     = props.dbStageUser;
            this.dbStagePassword = props.dbStagePassword;
            this.dbStageName     = props.dbStageName;

            done();
        }.bind(this));
    },

    app: function () {
        //  --------------------------------------------------------
        //  bind data for project
        //  --------------------------------------------------------
        var installCraft = {
            install: this.installCraft
        };

        var projectName = {
            name: this.projectName
        };
        var dbLocal     = {
            server:   this.dbLocalServer,
            user:     this.dbLocalUser,
            password: this.dbLocalPassword,
            dbname:   this.dbLocalName
        };
        var dbStage     = {
            server:   this.dbStageServer,
            user:     this.dbStageUser,
            password: this.dbStagePassword,
            dbname:   this.dbStageName
        };
        var domains     = {
            local: this.dbLocalUrl,
            stage: this.dbStageUrl
        };

        //  --------------------------------------------------------
        //  installing craft
        //  --------------------------------------------------------
        if (installCraft) {
            var done = this.async();
            this.spawnCommand('craft', ['install', './']).on('close', done);
        }

        //  --------------------------------------------------------
        //  copy folder structure
        //  --------------------------------------------------------
        this.directory('_config', 'config');
        this.directory('_plugins', 'plugins');
        this.directory('_public', 'public');
        this.directory('_templates', 'templates');
        this.directory('_translations', 'translations');

        //  --------------------------------------------------------
        //  copy and create hearty configs for db & domains
        //  --------------------------------------------------------
        this.fs.copyTpl(
            this.templatePath('_config.local.php'),
            this.destinationPath('config/config.local.php'),
            dbLocal
        );
        this.fs.copyTpl(
            this.templatePath('_config.stage.php'),
            this.destinationPath('config/config.stage.php'),
            dbStage
        );
        this.fs.copyTpl(
            this.templatePath('_hearty.php'),
            this.destinationPath('config/hearty.php'),
            domains
        );

        //  --------------------------------------------------------
        //  copy dev & git related files
        //  --------------------------------------------------------
        this.copy('_bowerrc', '.bowerrc');
        this.copy('_package.json', 'package.json');
        this.copy('_gitignore', '.gitignore');
        this.fs.copyTpl(
            this.templatePath('_gulpfile.js'),
            this.destinationPath('gulpfile.js'),
            domains
        );
        this.fs.copyTpl(
            this.templatePath('_bower.json'),
            this.destinationPath('bower.json'),
            projectName
        );
        this.fs.copyTpl(
            this.templatePath('_readme.md'),
            this.destinationPath('readme.md'),
            projectName
        );
    },

    //  --------------------------------------------------------
    //  installing npm & bower dependencies
    //  --------------------------------------------------------
    dependencies: function () {
        this.installDependencies();
    }

});

module.exports = CraftSkeletonGenerator;
