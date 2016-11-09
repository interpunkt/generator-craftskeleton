//  MAIN JS
//  Copyright 2016 by inter-punkt.ag
//  Autor: Selim Imoberdorf
//  --------------------------------------------------------

// Initial layzsizes Plugin: respimg
function loadJS(u) {
    var r = document.getElementsByTagName("script")[0], s = document.createElement("script");
    s.src = u;
    r.parentNode.insertBefore(s, r);
}
if (!window.HTMLPictureElement || !('sizes' in document.createElement('img'))) {
    loadJS("/assets/vendor/respimg/ls.respimg.min.js");
}

// Initial Webfont
// WebFont.load({
//   google: {
//     families: ['Montserrat:400,700']
//   }
// });