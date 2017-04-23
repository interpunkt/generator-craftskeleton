# Craft CMS Generator
> Starterkit for Craft CMS (Mutli Envs, Gulp, Bower and SASS/SCSS with Sourcemaps)

***

## 1. Installation
First; install **wget**, because the generator use it for downloading the actual Craftcms version. Check the [wget for mac](https://www.hacksparrow.com/how-to-install-wget-on-your-mac.html) or [wget for windows](http://gnuwin32.sourceforge.net/packages/wget.htm).

Second; install [Yeoman](http://yeoman.io) and generator-craftskeleton using [npm](https://www.npmjs.com/) (I assume you have pre-installed [node.js](https://nodejs.org/)).
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

- [Cache Buster](https://github.com/focuslabllc/craftcms-cachebuster)
- [Control Panel Nav](https://github.com/engram-design/CPNav)
- [CP Field Links](https://github.com/mmikkel/CpFieldLinks-Craft)
- [Focal Point Field for Craft](https://github.com/aelvan/FocalPointField-Craft)
- [Hacksaw](https://github.com/ehousestudio/craft_hacksaw)
- [Imager](https://github.com/aelvan/Imager-Craft)
- [ImageResizer](https://github.com/engram-design/ImageResizer)
- [Kint](https://github.com/mildlygeeky/craft_kint)
- [Language Link](https://github.com/lindseydiloreto/craft-languagelink)
- [LinkIt](https://github.com/fruitstudios/LinkIt)
- [Neo](https://github.com/benjamminf/craft-neo)
- [Preparse Field](https://github.com/aelvan/Preparse-Field-Craft)
- [Quick Fields](https://github.com/benjamminf/craft-quick-field)
- [Reasons](https://github.com/mmikkel/Reasons-Craft)
- [Relabel](https://github.com/benjamminf/craft-relabel)
- [Retour](https://github.com/nystudio107/retour)
- [SEOmatic](https://github.com/nystudio107/seomatic)
- [Simple Sitemap](https://github.com/xodigital/SimpleSitemap)
- [Super Table](https://github.com/engram-design/SuperTable)
- [The Architect](https://github.com/Pennebaker/craftcms-thearchitect)
- [Video Embed Utility](https://github.com/Staplegun-US/craft-video-embed-utility)


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
