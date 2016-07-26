'use strict';

var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var CraftSkeletonGenerator = yeoman.generators.Base.extend({
    init: function() {
        this.pkg = require('../../package.json');
        this.conflicter.force = true;
    },

    askFor: function() {
        var done = this.async();

        this.log(yosay('Welcome to the marvelous Craftcms generator!'));

        var prompts = [{
            name: 'projectName',
            message: 'What\'s the name of your project?',
            default: 'Craft Skeleton'
        }, {
            type: 'confirm',
            name: 'installCraft',
            message: 'Would you like to download the latest Craft CMS?',
            default: true
        }, {
            name: 'dbLocalUrl',
            message: '[LOCAL] Domain of your local installation',
            default: 'craft-skeleton.dev'
        }, {
            name: 'dbLocalServer',
            message: '[LOCAL] Name of your local database server',
            default: 'localhost'
        }, {
            name: 'dbLocalUser',
            message: '[LOCAL] Name of your local database user',
            default: 'root'
        }, {
            name: 'dbLocalPassword',
            message: '[LOCAL] Password of your local database user',
            default: 'root'
        }, {
            name: 'dbLocalName',
            message: '[LOCAL] Name of your local database'
        }, {
            name: 'dbStageUrl',
            message: '[STAGE] Domain of your stage installation'
        }, {
            name: 'dbStageServer',
            message: '[STAGE] Name of your stage database server'
        }, {
            name: 'dbStageUser',
            message: '[STAGE] Name of your stage database user'
        }, {
            name: 'dbStagePassword',
            message: '[STAGE] Password of your stage database user'
        }, {
            name: 'dbStageName',
            message: '[STAGE] Name of your stage database'
        }];

        //  --------------------------------------------------------
        //  get data from prompts
        //  --------------------------------------------------------
        this.prompt(prompts, function(props) {
            this.installCraft = props.installCraft;

            this.projectName = props.projectName;

            this.dbLocalUrl = props.dbLocalUrl;
            this.dbLocalServer = props.dbLocalServer;
            this.dbLocalUser = props.dbLocalUser;
            this.dbLocalPassword = props.dbLocalPassword;
            this.dbLocalName = props.dbLocalName;

            this.dbStageUrl = props.dbStageUrl;
            this.dbStageServer = props.dbStageServer;
            this.dbStageUser = props.dbStageUser;
            this.dbStagePassword = props.dbStagePassword;
            this.dbStageName = props.dbStageName;

            done();
        }.bind(this));
    },

    app: function() {
        //  --------------------------------------------------------
        //  bind data for project
        //  --------------------------------------------------------
        var installCraft = {
            install: this.installCraft
        };

        var projectName = {
            name: this.projectName
        };
        var dbLocal = {
            server: this.dbLocalServer,
            user: this.dbLocalUser,
            password: this.dbLocalPassword,
            dbname: this.dbLocalName
        };
        var dbStage = {
            server: this.dbStageServer,
            user: this.dbStageUser,
            password: this.dbStagePassword,
            dbname: this.dbStageName
        };
        var domains = {
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

        //  --------------------------------------------------------
        //  create folder structure
        //  --------------------------------------------------------
        this.directory('config');
        this.directory('config/redactor');

        this.directory('plugins');

        this.directory('public/assets');
        this.directory('public/assets/fonts');
        this.directory('public/assets/images');
        this.directory('public/assets/vendor');
        this.directory('public/assets/vendor/respimg');
        this.directory('public/dev');
        this.directory('public/dev/scripts');
        this.directory('public/dev/src');
        this.directory('public/dev/src/mixins');
        this.directory('public/dev/src/globals');
        this.directory('public/dev/src/navigations');
        this.directory('public/dev/src/layout');
        this.directory('public/dev/src/modules');
        this.directory('public/dev/src/components');
        this.directory('public/uploads');

        this.directory('templates');
        this.directory('templates/_layout');
        this.directory('templates/_partials');
        this.directory('templates/_components');
        this.directory('templates/_macros');
        this.directory('templates/_modules');

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
        this.copy('_db.php', 'config/db.php');
        this.copy('_imager.php', 'config/imager.php');
        this.copy('_general.php', 'config/general.php');
        this.copy('_routes.php', 'config/routes.php');
        this.copy('_Simple.json', 'config/redactor/Simple.json');
        this.copy('_Standard.json', 'config/redactor/Standard.json');
        this.copy('_Text.json', 'config/redactor/Text.json');

        this.copy('_gitkeep', 'plugins/.gitkeep');

        //  --------------------------------------------------------
        //  copy public related files
        //  --------------------------------------------------------
        this.copy('_index.php', 'public/index.php');
        this.copy('_robots.txt', 'public/robots.txt');
        this.copy('_htaccess', 'public/.htaccess');

        this.copy('_gitkeep', 'public/assets/fonts/.gitkeep');
        this.copy('_gitkeep', 'public/assets/images/.gitkeep');
        this.copy('_gitkeep', 'public/uploads/.gitkeep');

        this.copy('_ls.respimg.min.js', 'public/assets/vendor/respimg/ls.respimg.min.js');
        this.copy('_main.js', 'public/dev/scripts/main.js');

        this.copy('_main.scss', 'public/dev/src/main.scss');
        this.copy('_fallback.scss', 'public/dev/src/fallback.scss');
        
        this.copy('_mixins-global.scss', 'public/dev/src/mixins/_mixins-global.scss');

        this.copy('_defaults.scss', 'public/dev/src/globals/_defaults.scss');
        this.copy('_colors.scss', 'public/dev/src/globals/_colors.scss');
        this.copy('_typo.scss', 'public/dev/src/globals/_typo.scss');
        this.copy('_form.scss', 'public/dev/src/globals/_form.scss');

        this.copy('_navDefault.scss', 'public/dev/src/navigations/_navDefault.scss');

        this.copy('_l-default.scss', 'public/dev/src/layout/_l-default.scss');
        this.copy('_m-default.scss', 'public/dev/src/modules/_m-default.scss');
        this.copy('_c-default.scss', 'public/dev/src/components/_c-default.scss');

        //  --------------------------------------------------------
        //  copy template related files
        //  --------------------------------------------------------
        this.copy('_layout-main.twig', 'templates/_layout/_layout-main.twig');
        this.copy('_layout-head.twig', 'templates/_layout/_layout-head.twig');
        this.copy('_layout-scripts.twig', 'templates/_layout/_layout-scripts.twig');
        this.copy('_macros-global.twig', 'templates/_macros/_macros-global.twig');

        this.copy('_404.twig', 'templates/404.twig');
        this.copy('_cs.twig', 'templates/cs.twig');
        this.copy('_index.twig', 'templates/index.twig');
    },

    // installing npm & bower dependencies
    dependencies: function() {
        this.installDependencies();
    }

});

module.exports = CraftSkeletonGenerator;