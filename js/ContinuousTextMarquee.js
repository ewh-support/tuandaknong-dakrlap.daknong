
// Continuous Text Marquee
// copyright 30th September 2009by Stephen Chapman
// http://javascript.about.com
// permission to use this Javascript on your web page is granted
// provided that all of the code below in this script (including these
// comments) is used without any alteration
function objWidth(obj, timeout) {
    if (obj.offsetWidth)
        return obj.offsetWidth;
    if (obj.clip)
        return obj.clip.width; return 0;
}
var mqr = [];
function mq(id, timeout) {
    this.mqo = document.getElementById(id);
    var wid = objWidth(this.mqo.getElementsByTagName('span')[0]) + 5;
    var fulwid = objWidth(this.mqo);
    var txt = this.mqo.getElementsByTagName('span')[0].innerHTML;
    this.mqo.innerHTML = '';
    var heit = this.mqo.style.height;
    this.mqo.onmouseout = function () { mqRotate(mqr, timeout); };
    this.mqo.onmouseover = function () { clearTimeout(mqr[0].TO); };
    this.mqo.ary = [];
    var maxw = Math.ceil(fulwid / wid) + 1;
    for (var i = 0; i < maxw; i++) {
        this.mqo.ary[i] = document.createElement('div');
        this.mqo.ary[i].innerHTML = txt;
        this.mqo.ary[i].style.position = 'absolute';
        this.mqo.ary[i].style.left = (wid * i) + 'px';
        this.mqo.ary[i].style.width = wid + 'px';
        this.mqo.ary[i].style.height = heit;
        this.mqo.appendChild(this.mqo.ary[i]);
    }
    mqr.push(this.mqo);
}
function mqRotate(mqr, timeout) {
    if (!mqr) return;
    for (var j = mqr.length - 1; j > -1; j--) {
        maxa = mqr[j].ary.length; for (var i = 0; i < maxa; i++) { var x = mqr[j].ary[i].style; x.left = (parseInt(x.left, 10) - 1) + 'px'; } var y = mqr[j].ary[0].style; if (parseInt(y.left, 10) + parseInt(y.width, 10) < 0) { var z = mqr[j].ary.shift(); z.style.left = (parseInt(z.style.left) + parseInt(z.style.width) * maxa) + 'px'; mqr[j].ary.push(z); }
    }
    mqr[0].TO = setTimeout('mqRotate(mqr, ' + timeout + ')', timeout);
}
function doublecast(fn1, fn2) {
    return function () {
        if (typeof (fn1) == "function")
            fn1();
        if (typeof (fn2) == "function")
            fn2();
    }
}
/*
     FILE ARCHIVED ON 19:32:17 Dec 15, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:00:30 Mar 27, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 211.098 (3)
  esindex: 0.008
  captures_list: 246.917
  CDXLines.iter: 15.353 (3)
  PetaboxLoader3.datanode: 226.726 (5)
  exclusion.robots: 0.133
  exclusion.robots.policy: 0.124
  RedisCDXSource: 17.465
  PetaboxLoader3.resolve: 69.514 (2)
  load_resource: 135.231
*/