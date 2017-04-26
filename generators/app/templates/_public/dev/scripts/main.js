//  main
//  copyright 2015 - 2017 by interpunkt. ag
//  author: Selim Imoberdorf
//  --------------------------------------------------------

//  --------------------------------------------------------
//  init layzsizes plugin: respimg
//  --------------------------------------------------------

function loadJS(u) {
    var r = document.getElementsByTagName("script")[0], s = document.createElement("script");
    s.src = u;
    r.parentNode.insertBefore(s, r);
}
if (!window.HTMLPictureElement || !('sizes' in document.createElement('img'))) {
    loadJS("/assets/vendor/respimg/ls.respimg.min.js");
}

//  --------------------------------------------------------
//  init webfont
//  --------------------------------------------------------

// WebFont.load({
//   google: {
//     families: ['Montserrat:400,700']
//   }
// });