# Craft CMS Generator
> Starterkit for Craft CMS (Mutli Envs, Gulp, Bower and SASS/SCSS with Sourcemaps)

***

## 1. Installation
First, install [Craft CLI](https://github.com/rsanchez/craft-cli) to download Craft CMS trough your command line (it’s used by the generator).

### The Craft CLI 
The generator needs this [Craft CLI](https://github.com/rsanchez/craft-cli) for installing it trough bash.

```bash
brew tap rsanchez/homebrew-craft-cli
brew install craft-cli
```

### The Generator
Second, install [Yeoman](http://yeoman.io) and generator-craftskeleton using [npm](https://www.npmjs.com/) (I assume you have pre-installed [node.js](https://nodejs.org/)).

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
This generator needs some plugins for the whole setup. Download this plugins and move the files in `/plugins/`. Of course you have to remove the `-master` in the directoryname if it exists.

- [Hearty Config](https://github.com/mmikkel/HeartyConfig-Craft)
- [Imager](https://github.com/aelvan/Imager-Craft)
- [Minify](https://github.com/nystudio107/minify)
- [Simple Sitemap](https://github.com/xodigital/SimpleSitemap)
- [SEOmatic](https://github.com/nystudio107/seomatic)

### Run your Development Environment
To start coding you can run `gulp` in your root directory. If you want to get your production-files just run `gulp build`.

### Add new Development Dependencies
Bower is used for the frontend dependencies. To add new dependencies you have to run following command in your bash:
```bash
bower install --save [DEPENDENCIE NAME]
```

***
## Thanks [WebDevs Family](http://webdevs.xyz/)
Big thanks to my friends [Sascha Fuchs](https://github.com/gisu), [David Hellmann](https://github.com/davidhellmann) and [Martin Herweg](https://github.com/martinherweg) and of course to all the members from our Slack Channel [webdevs](http://webdevs.xyz/) (feel free to join us).  
Your helped me a lot and you guys are a big inspiration!

***
## License
MIT © [inter-punkt. ag](http://inter-punkt.ch/)