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

        var welcome =
                "\n  ______________________________________________________________   " +
                "\n                                                                   " +
                "\n                                                        V: " + chalk.blue(this.pkg.version) +
                chalk.styles.blue.open +
                "\n  ____ ____ ____ ____ ___ ____ _  _ ____ _    ____ ___ ____ _  _   " +
                "\n  |    |__/ |__| |___  |  [__  |_/  |___ |    |___  |  |  | |\\ |  " +
                "\n  |___ |  \\ |  | |     |  ___] | \\_ |___ |___ |___  |  |__| | \\|" +
                chalk.styles.blue.close +
                "\n                                                                   " +
                "\n  is made with love in aarau, switzerland.                         " +
                "\n                                                                   " +
                "\n  author: selim «slim» imoberdorf (@slimiles)                      " +
                "\n  website: http://inter-punkt.ch                                   " +
                "\n  url: https://github.com/interpunkt/generator-craftskeleton       " +
                "\n                                                                   " +
                "\n  ______________________________________________________________   " +
                "\n                                                                   ";

        console.log(welcome);

        var prompts = [{
            name:    'projectName',
            message: 'Tell me the name of this project',
            default: 'craftskeleton'
        }, {
            type:    'confirm',
            name:    'installCraft',
            message: 'Would you like to download the latest Craft CMS?',
            default: true
        }, {
            name:    'dbLocalUrl',
            message: '[LOCAL] Domain of your local installation',
            default: 'craftskeleton.dev'
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
            message: '[LOCAL] Name of your local database',
            default: 'craftskeleton'
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
            var _self = this;

            this.spawnCommand('wget', ['http://buildwithcraft.com/latest.tar.gz\?accept_license\=yes']).on('close', function () {
                _self.spawnCommand('tar', ['-zxvf', 'latest.tar.gz\?accept_license=yes', 'craft/']).on('close', function () {
                    _self.spawnCommand('rm', ['-rf', 'latest.tar.gz\?accept_license=yes']).on('close', done);
                });
            });
        }

        // old installation with craft cli (doesn't work on sierra sometimes)
        //this.spawnCommand('craft', ['install', './']).on('close', done);

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
        this.copy('_editorconfig', '.editorconfig');
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
