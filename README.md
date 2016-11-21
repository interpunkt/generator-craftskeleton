# Craft CMS Generator
> Starterkit for Craft CMS (Mutli Envs, Gulp, Bower and SASS/SCSS with Sourcemaps)

***

## 1. Installation
First, install [Yeoman](http://yeoman.io) and generator-craftskeleton using [npm](https://www.npmjs.com/) (I assume you have pre-installed [node.js](https://nodejs.org/)).
```bash
npm install -g yo
npm install -g generator-craftskeleton
```

***

## 2. Getting started
Now you’re ready to run the generator:
```bash
yo craftskeleton
```

### The Craft CMS Plugins
This generator use some plugins. The plugins are already downloaded in `/plugins/`. If you want to use them, you have to activate them in the backend.

- [Kint](https://github.com/mildlygeeky/craft_kint)
- [Imager](https://github.com/aelvan/Imager-Craft)
- [SEOmatic](https://github.com/nystudio107/seomatic)
- [Simple Sitemap](https://github.com/xodigital/SimpleSitemap)
- [Cache Buster](https://github.com/focuslabllc/craftcms-cachebuster)

### Run your Development Environment
To start coding you can run `gulp` in your root directory. If you want to get your production-files just run `gulp build`.

### Add new Development Dependencies
Bower is used for the frontend dependencies. To add new dependencies you have to run following command in your bash:
```bash
bower install --save [DEPENDENCIE NAME]
```

***
## Thanks [WebDevs Family](http://webdevs.xyz/)
Big thanks to my friends [Sascha Fuchs](https://github.com/gisu), [David Hellmann](https://github.com/davidhellmann) and [Martin Herweg](https://github.com/martinherweg) and of course to all the members from our Slack Channel [webdevs](http://webdevs.xyz/) (feel free to join us). Your helped me a lot and you guys are a big inspiration!

***
## License
MIT © [inter-punkt. ag](http://inter-punkt.ch/)
