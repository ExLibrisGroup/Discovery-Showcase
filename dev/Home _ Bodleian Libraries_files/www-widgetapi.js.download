(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var q;function ca(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function t(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&da(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;da(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&da(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ja(ca(this))}})}return a});
function ja(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}}
function ka(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function la(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ma="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)la(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||ma});
var na="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},oa;
if("function"==typeof Object.setPrototypeOf)oa=Object.setPrototypeOf;else{var pa;a:{var qa={a:!0},ra={};try{ra.__proto__=qa;pa=ra.a;break a}catch(a){}pa=!1}oa=pa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=oa;
function w(a,b){a.prototype=na(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.pa=b.prototype}
function ta(){this.H=!1;this.m=null;this.i=void 0;this.h=1;this.v=this.s=0;this.X=this.j=null}
function ua(a){if(a.H)throw new TypeError("Generator is already running");a.H=!0}
ta.prototype.N=function(a){this.i=a};
function xa(a,b){a.j={ec:b,pc:!0};a.h=a.s||a.v}
ta.prototype.return=function(a){this.j={return:a};this.h=this.v};
function x(a,b,c){a.h=c;return{value:b}}
ta.prototype.D=function(a){this.h=a};
function ya(a,b,c){a.s=b;void 0!=c&&(a.v=c)}
function Aa(a,b){a.h=b;a.s=0}
function Ba(a){a.s=0;var b=a.j.ec;a.j=null;return b}
function Ca(a){a.X=[a.j];a.s=0;a.v=0}
function Da(a){var b=a.X.splice(0)[0];(b=a.j=a.j||b)?b.pc?a.h=a.s||a.v:void 0!=b.D&&a.v<b.D?(a.h=b.D,a.j=null):a.h=a.v:a.h=0}
function Ea(a){this.h=new ta;this.i=a}
function Fa(a,b){ua(a.h);var c=a.h.m;if(c)return Ga(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ha(a)}
function Ga(a,b,c,d){try{var e=b.call(a.h.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.H=!1,e;var f=e.value}catch(g){return a.h.m=null,xa(a.h,g),Ha(a)}a.h.m=null;d.call(a.h,f);return Ha(a)}
function Ha(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.H=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,xa(a.h,c)}a.h.H=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.pc)throw b.ec;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ja(a){this.next=function(b){ua(a.h);a.h.m?b=Ga(a,a.h.m.next,b,a.h.N):(a.h.N(b),b=Ha(a));return b};
this.throw=function(b){ua(a.h);a.h.m?b=Ga(a,a.h.m["throw"],b,a.h.N):(xa(a.h,b),b=Ha(a));return b};
this.return=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ka(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function y(a){return Ka(new Ja(new Ea(a)))}
function La(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
t("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.H=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.v()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.v=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.m(l)}}}this.h=null};
c.prototype.m=function(g){this.j(function(){throw g;})};
b.prototype.m=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Gb),reject:g(this.v)}};
b.prototype.Gb=function(g){if(g===this)this.v(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Gc(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.Fb(g):this.s(g)}};
b.prototype.Fb=function(g){var h=void 0;try{h=g.then}catch(k){this.v(k);return}"function"==typeof h?this.Hc(h,g):this.s(g)};
b.prototype.v=function(g){this.N(2,g)};
b.prototype.s=function(g){this.N(1,g)};
b.prototype.N=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Hb();this.X()};
b.prototype.Hb=function(){var g=this;e(function(){if(g.Ga()){var h=fa.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.Ga=function(){if(this.H)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.X=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.Gc=function(g){var h=this.m();g.tb(h.resolve,h.reject)};
b.prototype.Hc=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,p){return"function"==typeof r?function(v){try{l(r(v))}catch(A){m(A)}}:p}
var l,m,n=new b(function(r,p){l=r;m=p});
this.tb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.tb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.H=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).tb(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(A){r[v]=A;p--;0==p&&l(r)}}
var r=[],p=0;do r.push(void 0),p++,d(k.value).tb(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!la(k,g)){var l=new c;da(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!la(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&la(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ja(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&la(h.data_,l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ma(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ma(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ma(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
t("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Na(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Na(this,function(b,c){return[b,c]})}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Array.prototype.keys",function(a){return a?a:function(){return Na(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Na(this,function(b,c){return c})}});
t("Array.prototype.fill",function(a){return a?a:function(b,c,d){var e=this.length||0;0>c&&(c=Math.max(0,e+c));if(null==d||d>e)d=e;d=Number(d);0>d&&(d=Math.max(0,e+d));for(c=Number(c||0);c<d;c++)this[c]=b;return this}});
function Oa(a){return a?a:Array.prototype.fill}
t("Int8Array.prototype.fill",Oa);t("Uint8Array.prototype.fill",Oa);t("Uint8ClampedArray.prototype.fill",Oa);t("Int16Array.prototype.fill",Oa);t("Uint16Array.prototype.fill",Oa);t("Int32Array.prototype.fill",Oa);t("Uint32Array.prototype.fill",Oa);t("Float32Array.prototype.fill",Oa);t("Float64Array.prototype.fill",Oa);t("Object.setPrototypeOf",function(a){return a||sa});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push([d,b[d]]);return c}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ma(this,b,"includes").indexOf(b,c||0)}});
var z=this||self;function B(a,b,c){a=a.split(".");c=c||z;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function C(a,b){a=a.split(".");b=b||z;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Pa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ra(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(1E9*Math.random()>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Ya(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Za(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Za=Va:Za=Ya;return Za.apply(null,arguments)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.pa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ld=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function $a(a){return a}
;function ab(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ab);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
D(ab,Error);ab.prototype.name="CustomError";function bb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function cb(){}
function db(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var eb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},E=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},fb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},gb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
E(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function hb(a,b){b=eb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function ib(a){return Array.prototype.concat.apply([],arguments)}
function jb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function kb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function nb(a){var b=ob,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function pb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function qb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=qb(a[c]);return b}
var rb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<rb.length;f++)c=rb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var tb;function ub(){}
function vb(a){return new ub(wb,a)}
var wb={};vb("");var xb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},yb=/&/g,zb=/</g,Ab=/>/g,Bb=/"/g,Cb=/'/g,Db=/\x00/g,Eb=/[\x00&<>"']/;function Fb(a,b){this.h=b===Lb?a:""}
Fb.prototype.toString=function(){return this.h.toString()};
var Lb={},Mb=new Fb("about:invalid#zClosurez",Lb);function Nb(){var a=z.navigator;return a&&(a=a.userAgent)?a:""}
function F(a){return-1!=Nb().indexOf(a)}
;function Ob(){return(F("Chrome")||F("CriOS"))&&!F("Edge")||F("Silk")}
;var Pb={};function Qb(a){this.h=Pb===Pb?a:""}
Qb.prototype.toString=function(){return this.h.toString()};function Rb(a){Eb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(yb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(zb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Ab,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Bb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Cb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Db,"&#0;")));return a}
;var Sb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tb(a){return a?decodeURI(a):a}
function Ub(a){return Tb(a.match(Sb)[3]||null)}
function Vb(a){var b=a.match(Sb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Wb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Wb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Xb(a){var b=[],c;for(c in a)Wb(c,a[c],b);return b.join("&")}
var Yb=/#|$/;function Zb(a,b){var c=a.search(Yb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function $b(a){z.setTimeout(function(){throw a;},0)}
;function ac(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function bc(a){bc[" "](a);return a}
bc[" "]=function(){};var cc=F("Opera"),dc=F("Trident")||F("MSIE"),ec=F("Edge"),fc=F("Gecko")&&!(-1!=Nb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),gc=-1!=Nb().toLowerCase().indexOf("webkit")&&!F("Edge");function hc(){var a=z.document;return a?a.documentMode:void 0}
var ic;a:{var nc="",oc=function(){var a=Nb();if(fc)return/rv:([^\);]+)(\)|;)/.exec(a);if(ec)return/Edge\/([\d\.]+)/.exec(a);if(dc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(gc)return/WebKit\/(\S+)/.exec(a);if(cc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
oc&&(nc=oc?oc[1]:"");if(dc){var pc=hc();if(null!=pc&&pc>parseFloat(nc)){ic=String(pc);break a}}ic=nc}var qc=ic,rc;if(z.document&&dc){var sc=hc();rc=sc?sc:parseInt(qc,10)||void 0}else rc=void 0;var tc=rc;var uc=ac()||F("iPod"),vc=F("iPad");!F("Android")||Ob();Ob();var wc=F("Safari")&&!(Ob()||F("Coast")||F("Opera")||F("Edge")||F("Edg/")||F("OPR")||F("Firefox")||F("FxiOS")||F("Silk")||F("Android"))&&!(ac()||F("iPad")||F("iPod"));var xc={},yc=null;
function zc(a,b){Qa(a);void 0===b&&(b=0);if(!yc){yc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));xc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===yc[h]&&(yc[h]=g)}}}b=xc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Ac="undefined"!==typeof Uint8Array,Bc=!dc&&"function"===typeof z.btoa;var Cc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function Dc(a,b){if(Cc)return a[Cc]|=b;if(void 0!==a.ma)return a.ma|=b;Object.defineProperties(a,{ma:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}
function Ec(a,b){Cc?a[Cc]&&(a[Cc]&=~b):void 0!==a.ma&&(a.ma&=~b)}
function G(a){var b;Cc?b=a[Cc]:b=a.ma;return null==b?0:b}
function Fc(a,b){Cc?a[Cc]=b:void 0!==a.ma?a.ma=b:Object.defineProperties(a,{ma:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function Gc(a){Dc(a,1);return a}
function Hc(a){return!!(G(a)&2)}
function Ic(a,b){Fc(b,(a|0)&-51)}
function Jc(a,b){Fc(b,(a|18)&-41)}
;var Kc={};function Lc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Mc,Oc,Pc=[];Fc(Pc,23);Oc=Object.freeze(Pc);function Qc(a){if(Hc(a.J))throw Error("Cannot mutate an immutable Message");}
function Rc(a){var b=a.length;(b=b?a[b-1]:void 0)&&Lc(b)?b.g=1:(b={},a.push((b.g=1,b)))}
;function Sc(a){return a.displayName||a.name||"unknown type name"}
function Tc(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Sc(b)+" but got "+(a&&Sc(a.constructor)));return a}
;function Uc(a){var b=a.h+a.Ia;return a.ha||(a.ha=a.J[b]={})}
function Vc(a,b,c){return-1===b?null:b>=a.h?a.ha?a.ha[b]:void 0:c&&a.ha&&(c=a.ha[b],null!=c)?c:a.J[b+a.Ia]}
function H(a,b,c,d){Qc(a);return Wc(a,b,c,d)}
function Wc(a,b,c,d){a.i&&(a.i=void 0);if(b>=a.h||d)return Uc(a)[b]=c,a;a.J[b+a.Ia]=c;(c=a.ha)&&b in c&&delete c[b];return a}
function Xc(a,b){a&&Hc(b.J)&&Hc(a.J);return a}
function Yc(a,b,c,d){var e=Vc(a,b,d);Array.isArray(e)||(e=Oc);var f=G(e);f&1||Gc(e);var g=!(c&2),h=f&2;c&1||!h?g&&f&16&&!h&&Ec(e,16):(e=Gc(Array.prototype.slice.call(e)),Wc(a,b,e,d));return e}
function Zc(a,b,c,d){Qc(a);(c=$c(a,c))&&c!==b&&null!=d&&Wc(a,c,void 0,!1);Wc(a,b,d)}
function $c(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Vc(a,e)&&(0!==c&&Wc(a,c,void 0,!1),c=e)}return c}
function ad(a,b,c){var d=void 0===d?!1:d;var e=Vc(a,c,d);var f=!1;var g=null==e||"object"!==typeof e||(f=Array.isArray(e))||e.Qb!==Kc?f?new b(e):void 0:e;g!==e&&null!=g&&(Wc(a,c,g,d),Dc(g.J,G(a.J)&18));b=Xc(g,a);if(null==b)return b;Hc(a.J)||(e=b,Hc(e.J)&&(g=bd(e,!1),g.i=e,e=g),e!==b&&(b=e,Wc(a,c,b,d)));return Xc(b,a)}
function J(a,b,c,d){Qc(a);null!=d?Tc(d,b):d=void 0;return Wc(a,c,d)}
function cd(a,b,c,d,e){Qc(a);null!=e?Tc(e,b):e=void 0;Zc(a,c,d,e)}
function dd(a,b,c,d,e){Qc(a);var f=null==d?Oc:Gc([]);if(null!=d){for(var g=!!d.length,h=0;h<d.length;h++){var k=d[h];Tc(k,b);g=g&&!Hc(k.J);f[h]=k.J}b=f;g=(g?8:0)|1;f=G(b);(f&g)!==g&&(Object.isFrozen(b)&&(b=Array.prototype.slice.call(b)),Fc(b,f|g));f=b;a.ca||(a.ca={});a.ca[c]=d}else a.ca&&(a.ca[c]=void 0);return Wc(a,c,f,e)}
function hd(a,b,c,d){Qc(a);a.ca||(a.ca={});var e=a.ca[b];var f=Yc(a,b,3);if(e)Object.isFrozen(e)&&(e=Array.prototype.slice.call(e),a.ca[b]=e);else{var g=f;e=[];var h=!!(G(a.J)&16),k=Hc(g);f=g;k&&(g=Array.prototype.slice.call(g));for(var l=k,m=0;m<g.length;m++){var n=g[m];var r=c,p=!1;p=void 0===p?!1:p;n=Array.isArray(n)?new r(n):p?new r:void 0;if(void 0!==n){r=n.J;var v=p=G(r);k&&(v|=2);h&&(v|=16);v!=p&&Fc(r,v);r=v;l||(l=!!(2&r));e.push(n)}}a.ca[b]=e;k=!l;l=G(g);h=l|33;h=k?h|8:h&-9;l!=h&&(Object.isFrozen(g)&&
(g=Array.prototype.slice.call(g)),Fc(g,h));f!==g&&Wc(a,b,g)}c=null!=d?Tc(d,c):new c;a=Yc(a,b,2);e.push(c);a.push(c.J);Hc(c.J)&&Ec(a,8)}
function id(a,b){a=Vc(a,b);return null==a?"":a}
function jd(a,b){var c=$c(a,kd)===b;return Vc(a,c?b:-1)}
;var ld;function md(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(G(a)&128))return a=Array.prototype.slice.call(a),Rc(a),a}else if(Ac&&null!=a&&a instanceof Uint8Array){if(Bc){for(var b="";10240<a.length;)b+=String.fromCharCode.apply(null,a.subarray(0,10240)),a=a.subarray(10240);b+=String.fromCharCode.apply(null,a);a=btoa(b)}else a=zc(a);return a}}return a}
;function nd(a,b,c,d){if(null!=a){if(Array.isArray(a))a=od(a,b,c,void 0!==d);else if(Lc(a)){var e={},f;for(f in a)e[f]=nd(a[f],b,c,d);a=e}else a=b(a,d);return a}}
function od(a,b,c,d){var e=G(a);d=d?!!(e&16):void 0;a=Array.prototype.slice.call(a);for(var f=0;f<a.length;f++)a[f]=nd(a[f],b,c,d);c(e,a);return a}
function pd(a){return a.Qb===Kc?a.toJSON():md(a)}
function qd(a,b){a&128&&Rc(b)}
;function rd(a,b,c){c=void 0===c?Jc:c;if(null!=a){if(Ac&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=G(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return Fc(a,d|2),a;a=od(a,rd,d&4?Jc:c,!0);b=G(a);b&4&&b&2&&Object.freeze(a);return a}return a.Qb===Kc?sd(a):a}}
function td(a,b,c,d,e,f,g){(a=a.ca&&a.ca[c])?(d=0<a.length?a[0].constructor:void 0,f=G(a),f&2||(a=fb(a,sd),Jc(f,a),Object.freeze(a)),dd(b,d,c,a,e)):H(b,c,rd(d,f,g),e)}
function sd(a){if(Hc(a.J))return a;a=bd(a,!0);Dc(a.J,2);return a}
function bd(a,b){var c=a.J,d=[];Dc(d,16);var e=a.constructor.h;e&&d.push(e);e=a.ha;if(e){d.length=c.length;d.fill(void 0,d.length,c.length);var f={};d[d.length-1]=f}0!==(G(c)&128)&&Rc(d);b=b||Hc(a.J)?Jc:Ic;f=a.constructor;G(d);ld=d;d=new f(d);ld=void 0;a.oc&&(d.oc=a.oc.slice());f=!!(G(c)&16);for(var g=e?c.length-1:c.length,h=0;h<g;h++)td(a,d,h-a.Ia,c[h],!1,f,b);if(e)for(var k in e)c=e[k],g=+k,Number.isNaN(g),td(a,d,g,c,!0,f,b);return d}
;function K(a,b,c,d){null==a&&(a=ld);ld=void 0;var e=this.constructor.h,f=!1;if(null==a){a=e?[e]:[];var g=48;var h=!0;d&&(g|=128);Fc(a,g)}else{if(!Array.isArray(a))throw Error();if(e&&e!==a[0])throw Error();var k=g=Dc(a,0);if(h=0!==(16&k))(f=0!==(32&k))||(k|=32);if(d){if(!(k&128)&&0<a.length){var l=a[a.length-1];if(Lc(l)&&"g"in l){k|=128;delete l.g;var m=!0,n;for(n in l){m=!1;break}m&&a.pop()}else throw Error();}}else if(128&k)throw Error();g!==k&&Fc(a,k)}this.Ia=e?0:-1;this.ca=void 0;this.J=a;a:{g=
this.J.length;e=g-1;if(g&&(g=this.J[e],Lc(g))){this.ha=g;this.h=e-this.Ia;break a}void 0!==b&&-1<b?(this.h=Math.max(b,e+1-this.Ia),this.ha=void 0):this.h=Number.MAX_VALUE}if(!d&&this.ha&&"g"in this.ha)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c){b=h&&!f&&!0;d=this.h;var r;for(h=0;h<c.length;h++)f=c[h],f<d?(f+=this.Ia,(e=a[f])?ud(e,b):a[f]=Oc):(r||(r=Uc(this)),(e=r[f])?ud(e,b):r[f]=Oc)}}
K.prototype.toJSON=function(){var a=this.J,b;Mc?b=a:b=od(a,pd,qd);return b};
function vd(a){Mc=!0;try{return JSON.stringify(a.toJSON(),wd)}finally{Mc=!1}}
K.prototype.clone=function(){return bd(this,!1)};
function ud(a,b){if(Array.isArray(a)){var c=G(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&Fc(a,c|d)}}
K.prototype.Qb=Kc;K.prototype.toString=function(){return this.J.toString()};
function wd(a,b){return md(b)}
;var xd=window;vb("csi.gstatic.com");vb("googleads.g.doubleclick.net");vb("partner.googleadservices.com");vb("pubads.g.doubleclick.net");vb("securepubads.g.doubleclick.net");vb("tpc.googlesyndication.com");function yd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
q=yd.prototype;q.clone=function(){return new yd(this.x,this.y)};
q.equals=function(a){return a instanceof yd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
q.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
q.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
q.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function zd(a,b){this.width=a;this.height=b}
q=zd.prototype;q.clone=function(){return new zd(this.width,this.height)};
q.aspectRatio=function(){return this.width/this.height};
q.Lb=function(){return!(this.width*this.height)};
q.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
q.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
q.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ad(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Bd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Cd(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||z.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Dd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ed[c])c=Ed[c];else{c=String(c);if(!Ed[c]){var f=/function\s+([^\(]+)/m.exec(c);Ed[c]=f?f[1]:"[Anonymous]"}c=Ed[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Dd(a,b){b||(b={});b[Fd(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Fd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Dd(a,b));return c}
function Fd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Ed={};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Gd;try{new URL("s://g"),Gd=!0}catch(a){Gd=!1}var Hd=Gd;function Id(a,b){a.removeAttribute("srcdoc");if(b instanceof Fb)b instanceof Fb&&b.constructor===Fb?b=b.h:(Pa(b),b="type_error:SafeUrl");else{b:if(Hd){try{var c=new URL(b)}catch(d){c="https:";break b}c=c.protocol}else c:{c=document.createElement("a");try{c.href=b}catch(d){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b);for(b="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");0<
a.sandbox.length;)a.sandbox.remove(a.sandbox.item(0));for(c=0;c<b.length;c++)a.sandbox.supports&&!a.sandbox.supports(b[c])||a.sandbox.add(b[c])}
;function Jd(a){this.cd=a}
function Kd(a){return new Jd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Ld=[Kd("data"),Kd("http"),Kd("https"),Kd("mailto"),Kd("ftp"),new Jd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Md(a,b){b=void 0===b?Ld:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Jd&&d.cd(a))return new Fb(a,Lb)}}
function Nd(a){var b=void 0===b?Ld:b;return Md(a,b)||Mb}
;function Od(a){var b=Pd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Qd(){var a=[];Od(function(b){a.push(b)});
return a}
var Pd={sd:"allow-forms",td:"allow-modals",ud:"allow-orientation-lock",vd:"allow-pointer-lock",wd:"allow-popups",xd:"allow-popups-to-escape-sandbox",yd:"allow-presentation",zd:"allow-same-origin",Ad:"allow-scripts",Bd:"allow-top-navigation",Cd:"allow-top-navigation-by-user-activation"},Rd=db(function(){return Qd()});
function Sd(){var a=Td(),b={};E(Rd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Td(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var Ud=(new Date).getTime();function Vd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var Wd="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ka(Wd);function Xd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,p=0;64>p;p+=4)r[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=r[p-3]^r[p-8]^r[p-14]^r[p-16],r[p]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],A=e[2],I=e[3],M=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var S=I^v&(A^I);var O=1518500249}else S=v^A^I,O=1859775393;else 60>p?(S=v&A|I&(v|A),O=2400959708):(S=v^A^I,O=3395469782);S=((n<<5|n>>>27)&4294967295)+S+M+O+r[p]&4294967295;M=I;I=A;A=(v<<30|v>>>2)&4294967295;v=n;n=S}e[0]=e[0]+n&4294967295;e[1]=e[1]+v&4294967295;e[2]=
e[2]+A&4294967295;e[3]=e[3]+I&4294967295;e[4]=e[4]+M&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],v=0,A=n.length;v<A;++v)p.push(n.charCodeAt(v));n=p}r||(r=n.length);p=0;if(0==l)for(;p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<r;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=r&255,r>>>=8;b(f);for(p=r=0;5>p;p++)for(var v=24;0<=v;v-=8)n[r++]=e[p]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Mc:function(){for(var n=d(),r="",p=0;p<n.length;p++)r+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return r}}}
;function Yd(a,b,c){var d=String(z.location.href);return d&&a&&b?[b,Zd(Vd(d),a,c||null)].join(" "):null}
function Zd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],E(d,function(h){e.push(h)}),$d(e.join(" "));
var f=[],g=[];E(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];E(d,function(h){e.push(h)});
a=$d(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function $d(a){var b=Xd();b.update(a);return b.Mc().toLowerCase()}
;var ae={};function be(a){this.h=a||{cookie:""}}
q=be.prototype;q.isEnabled=function(){if(!z.navigator.cookieEnabled)return!1;if(!this.Lb())return!0;this.set("TESTCOOKIESENABLED","1",{Nb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
q.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Td;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Nb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
q.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=xb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
q.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Nb:0,path:b,domain:c});return d};
q.Lb=function(){return!this.h.cookie};
q.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=xb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var ce=new be("undefined"==typeof document?null:document);function de(a){return!!ae.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function ee(a,b,c,d){(a=z[a])||(a=(new be(document)).get(b));return a?Yd(a,c,d):null}
function fe(a){var b=void 0===b?!1:b;var c=Vd(String(z.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=z.__SAPISID||z.__APISID||z.__3PSAPISID||z.__OVERRIDE_SID;de(e)&&(f=f||z.__1PSAPISID);if(f)e=!0;else{var g=new be(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID")||g.get("OSID");de(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?z.__SAPISID:z.__APISID,e||(e=new be(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Yd(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&de(b)&&((b=ee("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=ee("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;"undefined"!==typeof TextDecoder&&new TextDecoder;var ge="undefined"!==typeof TextEncoder?new TextEncoder:null,he=ge?function(a){return ge.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function ie(){this.j=this.j;this.v=this.v}
ie.prototype.j=!1;ie.prototype.dispose=function(){this.j||(this.j=!0,this.Sa())};
ie.prototype.Sa=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function je(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
je.prototype.stopPropagation=function(){this.j=!0};
je.prototype.preventDefault=function(){this.defaultPrevented=!0};var ke=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{z.addEventListener("test",function(){},b),z.removeEventListener("test",function(){},b)}catch(c){}return a}();function le(a,b){je.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
D(le,je);var me={2:"touch",3:"pen",4:"mouse"};
le.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(fc){a:{try{bc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:me[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&le.pa.preventDefault.call(this)};
le.prototype.stopPropagation=function(){le.pa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
le.prototype.preventDefault=function(){le.pa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ne="closure_listenable_"+(1E6*Math.random()|0);var qe=0;function re(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.xb=e;this.key=++qe;this.lb=this.sb=!1}
function se(a){a.lb=!0;a.listener=null;a.proxy=null;a.src=null;a.xb=null}
;function te(a){this.src=a;this.listeners={};this.h=0}
te.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=ue(a,b,d,e);-1<g?(b=a[g],c||(b.sb=!1)):(b=new re(b,this.src,f,!!d,e),b.sb=c,a.push(b));return b};
te.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ue(e,b,c,d);return-1<b?(se(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ve(a,b){var c=b.type;c in a.listeners&&hb(a.listeners[c],b)&&(se(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function ue(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.lb&&f.listener==b&&f.capture==!!c&&f.xb==d)return e}return-1}
;var we="closure_lm_"+(1E6*Math.random()|0),xe={},ye=0;function ze(a,b,c,d,e){if(d&&d.once)Ae(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ze(a,b[f],c,d,e);else c=Be(c),a&&a[ne]?a.Ka(b,c,Ra(d)?!!d.capture:!!d,e):Ce(a,b,c,!1,d,e)}
function Ce(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ra(e)?!!e.capture:!!e,h=De(a);h||(a[we]=h=new te(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ee();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ke||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Fe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ye++}}
function Ee(){function a(c){return b.call(a.src,a.listener,c)}
var b=Ge;return a}
function Ae(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ae(a,b[f],c,d,e);else c=Be(c),a&&a[ne]?a.h.add(String(b),c,!0,Ra(d)?!!d.capture:!!d,e):Ce(a,b,c,!0,d,e)}
function He(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)He(a,b[f],c,d,e);else(d=Ra(d)?!!d.capture:!!d,c=Be(c),a&&a[ne])?a.h.remove(String(b),c,d,e):a&&(a=De(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ue(b,c,d,e)),(c=-1<a?b[a]:null)&&Ie(c))}
function Ie(a){if("number"!==typeof a&&a&&!a.lb){var b=a.src;if(b&&b[ne])ve(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Fe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ye--;(c=De(b))?(ve(c,a),0==c.h&&(c.src=null,b[we]=null)):se(a)}}}
function Fe(a){return a in xe?xe[a]:xe[a]="on"+a}
function Ge(a,b){if(a.lb)a=!0;else{b=new le(b,this);var c=a.listener,d=a.xb||a.src;a.sb&&Ie(a);a=c.call(d,b)}return a}
function De(a){a=a[we];return a instanceof te?a:null}
var Je="__closure_events_fn_"+(1E9*Math.random()>>>0);function Be(a){if("function"===typeof a)return a;a[Je]||(a[Je]=function(b){return a.handleEvent(b)});
return a[Je]}
;function Ke(){ie.call(this);this.h=new te(this);this.Ga=this;this.N=null}
D(Ke,ie);Ke.prototype[ne]=!0;Ke.prototype.addEventListener=function(a,b,c,d){ze(this,a,b,c,d)};
Ke.prototype.removeEventListener=function(a,b,c,d){He(this,a,b,c,d)};
function Le(a,b){var c=a.N;if(c){var d=[];for(var e=1;c;c=c.N)d.push(c),++e}a=a.Ga;c=b.type||b;"string"===typeof b?b=new je(b,a):b instanceof je?b.target=b.target||a:(e=b,b=new je(c,a),sb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Me(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Me(g,c,!0,b)&&e,b.j||(e=Me(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Me(g,c,!1,b)&&e}
Ke.prototype.Sa=function(){Ke.pa.Sa.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,se(d[e]);delete a.listeners[c];a.h--}}this.N=null};
Ke.prototype.Ka=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
function Me(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.lb&&g.capture==c){var h=g.listener,k=g.xb||g.src;g.sb&&ve(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Ne(a){Ke.call(this);var b=this;this.X=this.m=0;this.ia=null!=a?a:{ka:function(e,f){return setTimeout(e,f)},
Qa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.s=function(){return y(function(e){return x(e,Oe(b),0)})};
window.addEventListener("offline",this.s);window.addEventListener("online",this.s);this.X||Pe(this)}
w(Ne,Ke);function Qe(){var a=Re;Ne.h||(Ne.h=new Ne(a));return Ne.h}
Ne.prototype.dispose=function(){window.removeEventListener("offline",this.s);window.removeEventListener("online",this.s);this.ia.Qa(this.X);delete Ne.h};
Ne.prototype.da=function(){return this.i};
function Pe(a){a.X=a.ia.ka(function(){var b;return y(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.D(3):x(c,Oe(a),3):x(c,Oe(a),3);Pe(a);c.h=0})},3E4)}
function Oe(a,b){return a.H?a.H:a.H=new Promise(function(c){var d,e,f,g;return y(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,ya(h,2,3),d&&(a.m=a.ia.ka(function(){d.abort()},b||2E4)),x(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ca(h);a.H=void 0;a.m&&(a.ia.Qa(a.m),a.m=0);g!==a.i&&(a.i=g,a.i?Le(a,"networkstatus-online"):Le(a,"networkstatus-offline"));c(g);Da(h);break;case 2:Ba(h),g=!1,h.D(3)}})})}
;function Se(){this.data_=[];this.h=-1}
Se.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.h=-1)};
Se.prototype.get=function(a){return!!this.data_[a]};
function Te(a){-1===a.h&&(a.h=gb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Ue(a){K.call(this,a)}
w(Ue,K);function Ve(a){K.call(this,a,-1,We)}
w(Ve,K);function Xe(a,b){return H(a,2,b)}
function Ye(a,b){return H(a,3,b)}
function Ze(a,b){return H(a,4,b)}
function $e(a,b){return H(a,5,b)}
function af(a,b){return H(a,9,b)}
function bf(a,b){return dd(a,Ue,10,b)}
function cf(a,b){return H(a,11,b)}
function df(a,b){return H(a,1,b)}
function ef(a,b){return H(a,7,b)}
var We=[10,6];var ff="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function gf(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function hf(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function jf(){var a=window;if(!hf(a))return null;var b=gf(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(ff).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function kf(a){var b;return cf(bf($e(Xe(df(Ze(ef(af(Ye(new Ve,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new Ue;d=H(d,1,c.brand);return H(d,2,c.version)}))||[]),a.wow64||!1)}
function lf(){var a,b;return null!=(b=null==(a=jf())?void 0:a.then(function(c){return kf(c)}))?b:null}
;function mf(a,b){this.j=a;this.m=b;this.i=0;this.h=null}
mf.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function nf(a,b){a.m(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var of;function pf(){var a=z.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Ad();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Za(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!F("Trident")&&!F("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ac;c.ac=null;e()}};
return function(e){d.next={ac:e};d=d.next;b.port2.postMessage(0)}}return function(e){z.setTimeout(e,0)}}
;function qf(){this.i=this.h=null}
qf.prototype.add=function(a,b){var c=rf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
qf.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var rf=new mf(function(){return new sf},function(a){return a.reset()});
function sf(){this.next=this.scope=this.h=null}
sf.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
sf.prototype.reset=function(){this.next=this.scope=this.h=null};var tf,uf=!1,vf=new qf;function wf(a,b){tf||xf();uf||(tf(),uf=!0);vf.add(a,b)}
function xf(){if(z.Promise&&z.Promise.resolve){var a=z.Promise.resolve(void 0);tf=function(){a.then(yf)}}else tf=function(){var b=yf;
"function"!==typeof z.setImmediate||z.Window&&z.Window.prototype&&!F("Edge")&&z.Window.prototype.setImmediate==z.setImmediate?(of||(of=pf()),of(b)):z.setImmediate(b)}}
function yf(){for(var a;a=vf.remove();){try{a.h.call(a.scope)}catch(b){$b(b)}nf(rf,a)}uf=!1}
;function zf(a,b){this.h=a[z.Symbol.iterator]();this.i=b}
zf.prototype[Symbol.iterator]=function(){return this};
zf.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Af(a,b){return new zf(a,b)}
;function Bf(){this.blockSize=-1}
;function Cf(){this.blockSize=-1;this.blockSize=64;this.h=[];this.v=[];this.s=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.m=this.i=0;this.reset()}
D(Cf,Bf);Cf.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.m=this.i=0};
function Df(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Cf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.v,f=this.i;d<b;){if(0==f)for(;d<=c;)Df(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Df(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Df(this,e);f=0;break}}this.i=f;this.m+=b}};
Cf.prototype.digest=function(){var a=[],b=8*this.m;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.v[c]=b&255,b/=256;Df(this,this.v);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Ef(){}
Ef.prototype.next=function(){return Ff};
var Ff={done:!0,value:void 0};function Gf(a){return{value:a,done:!1}}
Ef.prototype.ja=function(){return this};function Hf(a){if(a instanceof If||a instanceof Jf||a instanceof Kf)return a;if("function"==typeof a.next)return new If(function(){return a});
if("function"==typeof a[Symbol.iterator])return new If(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ja)return new If(function(){return a.ja()});
throw Error("Not an iterator or iterable.");}
function If(a){this.i=a}
If.prototype.ja=function(){return new Jf(this.i())};
If.prototype[Symbol.iterator]=function(){return new Kf(this.i())};
If.prototype.h=function(){return new Kf(this.i())};
function Jf(a){this.i=a}
w(Jf,Ef);Jf.prototype.next=function(){return this.i.next()};
Jf.prototype[Symbol.iterator]=function(){return new Kf(this.i)};
Jf.prototype.h=function(){return new Kf(this.i)};
function Kf(a){If.call(this,function(){return a});
this.j=a}
w(Kf,If);Kf.prototype.next=function(){return this.j.next()};function Lf(a,b){this.i={};this.h=[];this.j=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Lf)for(c=Mf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Mf(a){Nf(a);return a.h.concat()}
q=Lf.prototype;q.has=function(a){return Of(this.i,a)};
q.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Pf;Nf(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Pf(a,b){return a===b}
q.Lb=function(){return 0==this.size};
q.clear=function(){this.i={};this.j=this.size=this.h.length=0};
q.remove=function(a){return this.delete(a)};
q.delete=function(a){return Of(this.i,a)?(delete this.i[a],--this.size,this.j++,this.h.length>2*this.size&&Nf(this),!0):!1};
function Nf(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Of(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Of(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
q.get=function(a,b){return Of(this.i,a)?this.i[a]:b};
q.set=function(a,b){Of(this.i,a)||(this.size+=1,this.h.push(a),this.j++);this.i[a]=b};
q.forEach=function(a,b){for(var c=Mf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
q.clone=function(){return new Lf(this)};
q.keys=function(){return Hf(this.ja(!0)).h()};
q.values=function(){return Hf(this.ja(!1)).h()};
q.entries=function(){var a=this;return Af(this.keys(),function(b){return[b,a.get(b)]})};
q.ja=function(a){Nf(this);var b=0,c=this.j,d=this,e=new Ef;e.next=function(){if(c!=d.j)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Ff;var f=d.h[b++];return Gf(a?f:d.i[f])};
return e};
function Of(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var Qf=z.JSON.stringify;function Rf(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Sf(a){this.h=0;this.H=void 0;this.m=this.i=this.j=null;this.v=this.s=!1;if(a!=cb)try{var b=this;a.call(void 0,function(c){Tf(b,2,c)},function(c){Tf(b,3,c)})}catch(c){Tf(this,3,c)}}
function Uf(){this.next=this.context=this.i=this.j=this.h=null;this.m=!1}
Uf.prototype.reset=function(){this.context=this.i=this.j=this.h=null;this.m=!1};
var Vf=new mf(function(){return new Uf},function(a){a.reset()});
function Wf(a,b,c){var d=Vf.get();d.j=a;d.i=b;d.context=c;return d}
Sf.prototype.then=function(a,b,c){return Xf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Sf.prototype.$goog_Thenable=!0;Sf.prototype.cancel=function(a){if(0==this.h){var b=new Yf(a);wf(function(){Zf(this,b)},this)}};
function Zf(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.m||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Zf(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):$f(c),ag(c,e,3,b)))}a.j=null}else Tf(a,3,b)}
function bg(a,b){a.i||2!=a.h&&3!=a.h||cg(a);a.m?a.m.next=b:a.i=b;a.m=b}
function Xf(a,b,c,d){var e=Wf(null,null,null);e.h=new Sf(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.i=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Yf?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;bg(a,e);return e.h}
Sf.prototype.X=function(a){this.h=0;Tf(this,2,a)};
Sf.prototype.Ga=function(a){this.h=0;Tf(this,3,a)};
function Tf(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.X,f=a.Ga;if(d instanceof Sf){bg(d,Wf(e||cb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ra(d))try{var k=d.then;if("function"===typeof k){dg(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.H=c,a.h=b,a.j=null,cg(a),3!=b||c instanceof Yf||eg(a,c))}}
function dg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function cg(a){a.s||(a.s=!0,wf(a.N,a))}
function $f(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.m=null);return b}
Sf.prototype.N=function(){for(var a;a=$f(this);)ag(this,a,this.h,this.H);this.s=!1};
function ag(a,b,c,d){if(3==c&&b.i&&!b.m)for(;a&&a.v;a=a.j)a.v=!1;if(b.h)b.h.j=null,fg(b,c,d);else try{b.m?b.j.call(b.context):fg(b,c,d)}catch(e){gg.call(null,e)}nf(Vf,b)}
function fg(a,b,c){2==b?a.j.call(a.context,c):a.i&&a.i.call(a.context,c)}
function eg(a,b){a.v=!0;wf(function(){a.v&&gg.call(null,b)})}
var gg=$b;function Yf(a){ab.call(this,a)}
D(Yf,ab);Yf.prototype.name="cancel";function L(a){ie.call(this);this.H=1;this.m=[];this.s=0;this.h=[];this.i={};this.N=!!a}
D(L,ie);q=L.prototype;q.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.H;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.H=e+3;d.push(e);return e};
function hg(a,b,c){var d=ig;if(a=d.i[a]){var e=d.h;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.nb(a)}}
q.nb=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.s?(this.m.push(a),this.h[a+1]=function(){}):(c&&hb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
q.ab=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.N)for(e=0;e<c.length;e++){var g=c[e];jg(this.h[g+1],this.h[g+2],d)}else{this.s++;try{for(e=0,f=c.length;e<f&&!this.j;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.s--,0<this.m.length&&0==this.s)for(;c=this.m.pop();)this.nb(c)}}return 0!=e}return!1};
function jg(a,b,c){wf(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.nb,this),delete this.i[a])}else this.h.length=0,this.i={}};
q.Sa=function(){L.pa.Sa.call(this);this.clear();this.m.length=0};function kg(a){this.h=a}
kg.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Qf(b))};
kg.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
kg.prototype.remove=function(a){this.h.remove(a)};function lg(a){this.h=a}
D(lg,kg);function mg(a){this.data=a}
function ng(a){return void 0===a||a instanceof mg?a:new mg(a)}
lg.prototype.set=function(a,b){lg.pa.set.call(this,a,ng(b))};
lg.prototype.i=function(a){a=lg.pa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
lg.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function og(a){this.h=a}
D(og,lg);og.prototype.set=function(a,b,c){if(b=ng(b)){if(c){if(c<Date.now()){og.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}og.pa.set.call(this,a,b)};
og.prototype.i=function(a){var b=og.pa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())og.prototype.remove.call(this,a);else return b}};function pg(){}
;function qg(){}
D(qg,pg);qg.prototype[Symbol.iterator]=function(){return Hf(this.ja(!0)).h()};
qg.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function rg(a){this.h=a}
D(rg,qg);q=rg.prototype;q.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
q.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.h.removeItem(a)};
q.ja=function(a){var b=0,c=this.h,d=new Ef;d.next=function(){if(b>=c.length)return Ff;var e=c.key(b++);if(a)return Gf(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Gf(e)};
return d};
q.clear=function(){this.h.clear()};
q.key=function(a){return this.h.key(a)};function sg(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
D(sg,rg);function tg(a,b){this.i=a;this.h=null;var c;if(c=dc)c=!(9<=Number(tc));if(c){ug||(ug=new Lf);this.h=ug.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),ug.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
D(tg,qg);var vg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ug=null;function wg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return vg[b]})}
q=tg.prototype;q.set=function(a,b){this.h.setAttribute(wg(a),b);xg(this)};
q.get=function(a){a=this.h.getAttribute(wg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.h.removeAttribute(wg(a));xg(this)};
q.ja=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Ef;d.next=function(){if(b>=c.length)return Ff;var e=c[b++];if(a)return Gf(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Gf(e)};
return d};
q.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);xg(this)};
function xg(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function yg(a,b){this.i=a;this.h=b+"::"}
D(yg,qg);yg.prototype.set=function(a,b){this.i.set(this.h+a,b)};
yg.prototype.get=function(a){return this.i.get(this.h+a)};
yg.prototype.remove=function(a){this.i.remove(this.h+a)};
yg.prototype.ja=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Ef;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Gf(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},zg="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.Ub=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Ag={Pa:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
fc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Bg={Pa:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
fc:function(a){return[].concat.apply([],a)}};
N.md=function(){zg?(N.Ha=Uint8Array,N.qa=Uint16Array,N.Fc=Int32Array,N.assign(N,Ag)):(N.Ha=Array,N.qa=Array,N.Fc=Array,N.assign(N,Bg))};
N.md();var Cg=!0;try{new Uint8Array(1)}catch(a){Cg=!1}for(var Dg=new N.Ha(256),Eg=0;256>Eg;Eg++)Dg[Eg]=252<=Eg?6:248<=Eg?5:240<=Eg?4:224<=Eg?3:192<=Eg?2:1;Dg[254]=Dg[254]=1;
function Fg(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new N.Ha(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Gg={};Gg=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var dh={},eh,fh=[],gh=0;256>gh;gh++){eh=gh;for(var hh=0;8>hh;hh++)eh=eh&1?3988292384^eh>>>1:eh>>>1;fh[gh]=eh}dh=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^fh[(a^b[d])&255];return a^-1};var ih={};ih={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function jh(a){for(var b=a.length;0<=--b;)a[b]=0}
var kh=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],lh=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],mh=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],nh=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],oh=Array(576);jh(oh);var ph=Array(60);jh(ph);var qh=Array(512);jh(qh);var rh=Array(256);jh(rh);var sh=Array(29);jh(sh);var th=Array(30);jh(th);function uh(a,b,c,d,e){this.Ac=a;this.Rc=b;this.Qc=c;this.Nc=d;this.gd=e;this.jc=a&&a.length}
var vh,wh,xh;function yh(a,b){this.dc=a;this.Xa=0;this.Ca=b}
function zh(a,b){a.K[a.pending++]=b&255;a.K[a.pending++]=b>>>8&255}
function P(a,b,c){a.P>16-c?(a.V|=b<<a.P&65535,zh(a,a.V),a.V=b>>16-a.P,a.P+=c-16):(a.V|=b<<a.P&65535,a.P+=c)}
function Ah(a,b,c){P(a,c[2*b],c[2*b+1])}
function Bh(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Ch(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Bh(d[e]++,e))}
function Dh(a){var b;for(b=0;286>b;b++)a.Y[2*b]=0;for(b=0;30>b;b++)a.Ja[2*b]=0;for(b=0;19>b;b++)a.S[2*b]=0;a.Y[512]=1;a.wa=a.bb=0;a.ea=a.matches=0}
function Eh(a){8<a.P?zh(a,a.V):0<a.P&&(a.K[a.pending++]=a.V);a.V=0;a.P=0}
function Fh(a,b,c){Eh(a);zh(a,c);zh(a,~c);N.Pa(a.K,a.window,b,c,a.pending);a.pending+=c}
function Gh(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Hh(a,b,c){for(var d=a.M[c],e=c<<1;e<=a.va;){e<a.va&&Gh(b,a.M[e+1],a.M[e],a.depth)&&e++;if(Gh(b,d,a.M[e],a.depth))break;a.M[c]=a.M[e];c=e;e<<=1}a.M[c]=d}
function Ih(a,b,c){var d=0;if(0!==a.ea){do{var e=a.K[a.fb+2*d]<<8|a.K[a.fb+2*d+1];var f=a.K[a.Mb+d];d++;if(0===e)Ah(a,f,b);else{var g=rh[f];Ah(a,g+256+1,b);var h=kh[g];0!==h&&(f-=sh[g],P(a,f,h));e--;g=256>e?qh[e]:qh[256+(e>>>7)];Ah(a,g,c);h=lh[g];0!==h&&(e-=th[g],P(a,e,h))}}while(d<a.ea)}Ah(a,256,b)}
function Jh(a,b){var c=b.dc,d=b.Ca.Ac,e=b.Ca.jc,f=b.Ca.Nc,g,h=-1;a.va=0;a.Ua=573;for(g=0;g<f;g++)0!==c[2*g]?(a.M[++a.va]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.va;){var k=a.M[++a.va]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.wa--;e&&(a.bb-=d[2*k+1])}b.Xa=h;for(g=a.va>>1;1<=g;g--)Hh(a,c,g);k=f;do g=a.M[1],a.M[1]=a.M[a.va--],Hh(a,c,1),d=a.M[1],a.M[--a.Ua]=g,a.M[--a.Ua]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.M[1]=k++,Hh(a,c,1);while(2<=a.va);a.M[--a.Ua]=
a.M[1];g=b.dc;k=b.Xa;d=b.Ca.Ac;e=b.Ca.jc;f=b.Ca.Rc;var l=b.Ca.Qc,m=b.Ca.gd,n,r=0;for(n=0;15>=n;n++)a.ra[n]=0;g[2*a.M[a.Ua]+1]=0;for(b=a.Ua+1;573>b;b++){var p=a.M[b];n=g[2*g[2*p+1]+1]+1;n>m&&(n=m,r++);g[2*p+1]=n;if(!(p>k)){a.ra[n]++;var v=0;p>=l&&(v=f[p-l]);var A=g[2*p];a.wa+=A*(n+v);e&&(a.bb+=A*(d[2*p+1]+v))}}if(0!==r){do{for(n=m-1;0===a.ra[n];)n--;a.ra[n]--;a.ra[n+1]+=2;a.ra[m]--;r-=2}while(0<r);for(n=m;0!==n;n--)for(p=a.ra[n];0!==p;)d=a.M[--b],d>k||(g[2*d+1]!==n&&(a.wa+=(n-g[2*d+1])*g[2*d],g[2*
d+1]=n),p--)}Ch(c,h,a.ra)}
function Kh(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.S[2*l]+=g:0!==l?(l!==e&&a.S[2*l]++,a.S[32]++):10>=g?a.S[34]++:a.S[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Lh(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Ah(a,l,a.S);while(0!==--g)}else 0!==l?(l!==e&&(Ah(a,l,a.S),g--),Ah(a,16,a.S),P(a,g-3,2)):10>=g?(Ah(a,17,a.S),P(a,g-3,3)):(Ah(a,18,a.S),P(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Mh(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.Y[2*c])return 0;if(0!==a.Y[18]||0!==a.Y[20]||0!==a.Y[26])return 1;for(c=32;256>c;c++)if(0!==a.Y[2*c])return 1;return 0}
var Nh=!1;function Oh(a,b,c){a.K[a.fb+2*a.ea]=b>>>8&255;a.K[a.fb+2*a.ea+1]=b&255;a.K[a.Mb+a.ea]=c&255;a.ea++;0===b?a.Y[2*c]++:(a.matches++,b--,a.Y[2*(rh[c]+256+1)]++,a.Ja[2*(256>b?qh[b]:qh[256+(b>>>7)])]++);return a.ea===a.ib-1}
;function Ph(a,b){a.msg=ih[b];return b}
function Qh(a){for(var b=a.length;0<=--b;)a[b]=0}
function Rh(a){var b=a.state,c=b.pending;c>a.F&&(c=a.F);0!==c&&(N.Pa(a.jb,b.K,b.kb,c,a.Ya),a.Ya+=c,b.kb+=c,a.Vb+=c,a.F-=c,b.pending-=c,0===b.pending&&(b.kb=0))}
function Q(a,b){var c=0<=a.aa?a.aa:-1,d=a.l-a.aa,e=0;if(0<a.level){2===a.B.Ib&&(a.B.Ib=Mh(a));Jh(a,a.zb);Jh(a,a.vb);Kh(a,a.Y,a.zb.Xa);Kh(a,a.Ja,a.vb.Xa);Jh(a,a.Yb);for(e=18;3<=e&&0===a.S[2*nh[e]+1];e--);a.wa+=3*(e+1)+14;var f=a.wa+3+7>>>3;var g=a.bb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)P(a,b?1:0,3),Fh(a,c,d);else if(4===a.strategy||g===f)P(a,2+(b?1:0),3),Ih(a,oh,ph);else{P(a,4+(b?1:0),3);c=a.zb.Xa+1;d=a.vb.Xa+1;e+=1;P(a,c-257,5);P(a,d-1,5);P(a,e-4,4);for(f=0;f<e;f++)P(a,a.S[2*nh[f]+
1],3);Lh(a,a.Y,c-1);Lh(a,a.Ja,d-1);Ih(a,a.Y,a.Ja)}Dh(a);b&&Eh(a);a.aa=a.l;Rh(a.B)}
function T(a,b){a.K[a.pending++]=b}
function Sh(a,b){a.K[a.pending++]=b>>>8&255;a.K[a.pending++]=b&255}
function Th(a,b){var c=a.qc,d=a.l,e=a.ba,f=a.tc,g=a.l>a.T-262?a.l-(a.T-262):0,h=a.window,k=a.Da,l=a.oa,m=a.l+258,n=h[d+e-1],r=h[d+e];a.ba>=a.ic&&(c>>=2);f>a.o&&(f=a.o);do{var p=b;if(h[p+e]===r&&h[p+e-1]===n&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<m;);p=258-(m-d);d=m-258;if(p>e){a.Wa=b;e=p;if(p>=f)break;n=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.o?e:a.o}
function Uh(a){var b=a.T,c;do{var d=a.Dc-a.o-a.l;if(a.l>=b+(b-262)){N.Pa(a.window,a.window,b,b,0);a.Wa-=b;a.l-=b;a.aa-=b;var e=c=a.yb;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.oa[--e],a.oa[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.B.U)break;e=a.B;c=a.window;f=a.l+a.o;var g=e.U;g>d&&(g=d);0===g?c=0:(e.U-=g,N.Pa(c,e.input,e.Na,g,f),1===e.state.wrap?e.A=Gg(e.A,c,g,f):2===e.state.wrap&&(e.A=dh(e.A,c,g,f)),e.Na+=g,e.Oa+=g,c=g);a.o+=c;if(3<=a.o+a.Z)for(d=a.l-a.Z,a.C=a.window[d],a.C=
(a.C<<a.ta^a.window[d+1])&a.sa;a.Z&&!(a.C=(a.C<<a.ta^a.window[d+3-1])&a.sa,a.oa[d&a.Da]=a.head[a.C],a.head[a.C]=d,d++,a.Z--,3>a.o+a.Z););}while(262>a.o&&0!==a.B.U)}
function Vh(a,b){for(var c;;){if(262>a.o){Uh(a);if(262>a.o&&0===b)return 1;if(0===a.o)break}c=0;3<=a.o&&(a.C=(a.C<<a.ta^a.window[a.l+3-1])&a.sa,c=a.oa[a.l&a.Da]=a.head[a.C],a.head[a.C]=a.l);0!==c&&a.l-c<=a.T-262&&(a.G=Th(a,c));if(3<=a.G)if(c=Oh(a,a.l-a.Wa,a.G-3),a.o-=a.G,a.G<=a.Ob&&3<=a.o){a.G--;do a.l++,a.C=(a.C<<a.ta^a.window[a.l+3-1])&a.sa,a.oa[a.l&a.Da]=a.head[a.C],a.head[a.C]=a.l;while(0!==--a.G);a.l++}else a.l+=a.G,a.G=0,a.C=a.window[a.l],a.C=(a.C<<a.ta^a.window[a.l+1])&a.sa;else c=Oh(a,0,a.window[a.l]),
a.o--,a.l++;if(c&&(Q(a,!1),0===a.B.F))return 1}a.Z=2>a.l?a.l:2;return 4===b?(Q(a,!0),0===a.B.F?3:4):a.ea&&(Q(a,!1),0===a.B.F)?1:2}
function Wh(a,b){for(var c,d;;){if(262>a.o){Uh(a);if(262>a.o&&0===b)return 1;if(0===a.o)break}c=0;3<=a.o&&(a.C=(a.C<<a.ta^a.window[a.l+3-1])&a.sa,c=a.oa[a.l&a.Da]=a.head[a.C],a.head[a.C]=a.l);a.ba=a.G;a.vc=a.Wa;a.G=2;0!==c&&a.ba<a.Ob&&a.l-c<=a.T-262&&(a.G=Th(a,c),5>=a.G&&(1===a.strategy||3===a.G&&4096<a.l-a.Wa)&&(a.G=2));if(3<=a.ba&&a.G<=a.ba){d=a.l+a.o-3;c=Oh(a,a.l-1-a.vc,a.ba-3);a.o-=a.ba-1;a.ba-=2;do++a.l<=d&&(a.C=(a.C<<a.ta^a.window[a.l+3-1])&a.sa,a.oa[a.l&a.Da]=a.head[a.C],a.head[a.C]=a.l);while(0!==
--a.ba);a.La=0;a.G=2;a.l++;if(c&&(Q(a,!1),0===a.B.F))return 1}else if(a.La){if((c=Oh(a,0,a.window[a.l-1]))&&Q(a,!1),a.l++,a.o--,0===a.B.F)return 1}else a.La=1,a.l++,a.o--}a.La&&(Oh(a,0,a.window[a.l-1]),a.La=0);a.Z=2>a.l?a.l:2;return 4===b?(Q(a,!0),0===a.B.F?3:4):a.ea&&(Q(a,!1),0===a.B.F)?1:2}
function Xh(a,b){for(var c,d,e,f=a.window;;){if(258>=a.o){Uh(a);if(258>=a.o&&0===b)return 1;if(0===a.o)break}a.G=0;if(3<=a.o&&0<a.l&&(d=a.l-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.l+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.G=258-(e-d);a.G>a.o&&(a.G=a.o)}3<=a.G?(c=Oh(a,1,a.G-3),a.o-=a.G,a.l+=a.G,a.G=0):(c=Oh(a,0,a.window[a.l]),a.o--,a.l++);if(c&&(Q(a,!1),0===a.B.F))return 1}a.Z=0;return 4===b?(Q(a,!0),0===a.B.F?3:4):a.ea&&
(Q(a,!1),0===a.B.F)?1:2}
function Yh(a,b){for(var c;;){if(0===a.o&&(Uh(a),0===a.o)){if(0===b)return 1;break}a.G=0;c=Oh(a,0,a.window[a.l]);a.o--;a.l++;if(c&&(Q(a,!1),0===a.B.F))return 1}a.Z=0;return 4===b?(Q(a,!0),0===a.B.F?3:4):a.ea&&(Q(a,!1),0===a.B.F)?1:2}
function Zh(a,b,c,d,e){this.Uc=a;this.fd=b;this.jd=c;this.ed=d;this.Sc=e}
var $h;$h=[new Zh(0,0,0,0,function(a,b){var c=65535;for(c>a.fa-5&&(c=a.fa-5);;){if(1>=a.o){Uh(a);if(0===a.o&&0===b)return 1;if(0===a.o)break}a.l+=a.o;a.o=0;var d=a.aa+c;if(0===a.l||a.l>=d)if(a.o=a.l-d,a.l=d,Q(a,!1),0===a.B.F)return 1;if(a.l-a.aa>=a.T-262&&(Q(a,!1),0===a.B.F))return 1}a.Z=0;if(4===b)return Q(a,!0),0===a.B.F?3:4;a.l>a.aa&&Q(a,!1);return 1}),
new Zh(4,4,8,4,Vh),new Zh(4,5,16,8,Vh),new Zh(4,6,32,32,Vh),new Zh(4,4,16,16,Wh),new Zh(8,16,32,32,Wh),new Zh(8,16,128,128,Wh),new Zh(8,32,128,256,Wh),new Zh(32,128,258,1024,Wh),new Zh(32,258,258,4096,Wh)];
function ai(){this.B=null;this.status=0;this.K=null;this.wrap=this.pending=this.kb=this.fa=0;this.u=null;this.ga=0;this.method=8;this.Va=-1;this.Da=this.Wb=this.T=0;this.window=null;this.Dc=0;this.head=this.oa=null;this.tc=this.ic=this.strategy=this.level=this.Ob=this.qc=this.ba=this.o=this.Wa=this.l=this.La=this.vc=this.G=this.aa=this.ta=this.sa=this.Jb=this.yb=this.C=0;this.Y=new N.qa(1146);this.Ja=new N.qa(122);this.S=new N.qa(78);Qh(this.Y);Qh(this.Ja);Qh(this.S);this.Yb=this.vb=this.zb=null;
this.ra=new N.qa(16);this.M=new N.qa(573);Qh(this.M);this.Ua=this.va=0;this.depth=new N.qa(573);Qh(this.depth);this.P=this.V=this.Z=this.matches=this.bb=this.wa=this.fb=this.ea=this.ib=this.Mb=0}
function bi(a,b){if(!a||!a.state||5<b||0>b)return a?Ph(a,-2):-2;var c=a.state;if(!a.jb||!a.input&&0!==a.U||666===c.status&&4!==b)return Ph(a,0===a.F?-5:-2);c.B=a;var d=c.Va;c.Va=b;if(42===c.status)if(2===c.wrap)a.A=0,T(c,31),T(c,139),T(c,8),c.u?(T(c,(c.u.text?1:0)+(c.u.Aa?2:0)+(c.u.za?4:0)+(c.u.name?8:0)+(c.u.comment?16:0)),T(c,c.u.time&255),T(c,c.u.time>>8&255),T(c,c.u.time>>16&255),T(c,c.u.time>>24&255),T(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),T(c,c.u.Rd&255),c.u.za&&c.u.za.length&&(T(c,
c.u.za.length&255),T(c,c.u.za.length>>8&255)),c.u.Aa&&(a.A=dh(a.A,c.K,c.pending,0)),c.ga=0,c.status=69):(T(c,0),T(c,0),T(c,0),T(c,0),T(c,0),T(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),T(c,3),c.status=113);else{var e=8+(c.Wb-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.l&&(e|=32);c.status=113;Sh(c,e+(31-e%31));0!==c.l&&(Sh(c,a.A>>>16),Sh(c,a.A&65535));a.A=1}if(69===c.status)if(c.u.za){for(e=c.pending;c.ga<(c.u.za.length&65535)&&(c.pending!==c.fa||(c.u.Aa&&c.pending>
e&&(a.A=dh(a.A,c.K,c.pending-e,e)),Rh(a),e=c.pending,c.pending!==c.fa));)T(c,c.u.za[c.ga]&255),c.ga++;c.u.Aa&&c.pending>e&&(a.A=dh(a.A,c.K,c.pending-e,e));c.ga===c.u.za.length&&(c.ga=0,c.status=73)}else c.status=73;if(73===c.status)if(c.u.name){e=c.pending;do{if(c.pending===c.fa&&(c.u.Aa&&c.pending>e&&(a.A=dh(a.A,c.K,c.pending-e,e)),Rh(a),e=c.pending,c.pending===c.fa)){var f=1;break}f=c.ga<c.u.name.length?c.u.name.charCodeAt(c.ga++)&255:0;T(c,f)}while(0!==f);c.u.Aa&&c.pending>e&&(a.A=dh(a.A,c.K,c.pending-
e,e));0===f&&(c.ga=0,c.status=91)}else c.status=91;if(91===c.status)if(c.u.comment){e=c.pending;do{if(c.pending===c.fa&&(c.u.Aa&&c.pending>e&&(a.A=dh(a.A,c.K,c.pending-e,e)),Rh(a),e=c.pending,c.pending===c.fa)){f=1;break}f=c.ga<c.u.comment.length?c.u.comment.charCodeAt(c.ga++)&255:0;T(c,f)}while(0!==f);c.u.Aa&&c.pending>e&&(a.A=dh(a.A,c.K,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.u.Aa?(c.pending+2>c.fa&&Rh(a),c.pending+2<=c.fa&&(T(c,a.A&255),T(c,a.A>>8&255),a.A=0,
c.status=113)):c.status=113);if(0!==c.pending){if(Rh(a),0===a.F)return c.Va=-1,0}else if(0===a.U&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Ph(a,-5);if(666===c.status&&0!==a.U)return Ph(a,-5);if(0!==a.U||0!==c.o||0!==b&&666!==c.status){d=2===c.strategy?Yh(c,b):3===c.strategy?Xh(c,b):$h[c.level].Sc(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.F&&(c.Va=-1),0;if(2===d&&(1===b?(P(c,2,3),Ah(c,256,oh),16===c.P?(zh(c,c.V),c.V=0,c.P=0):8<=c.P&&(c.K[c.pending++]=c.V&255,c.V>>=8,c.P-=
8)):5!==b&&(P(c,0,3),Fh(c,0,0),3===b&&(Qh(c.head),0===c.o&&(c.l=0,c.aa=0,c.Z=0))),Rh(a),0===a.F))return c.Va=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(T(c,a.A&255),T(c,a.A>>8&255),T(c,a.A>>16&255),T(c,a.A>>24&255),T(c,a.Oa&255),T(c,a.Oa>>8&255),T(c,a.Oa>>16&255),T(c,a.Oa>>24&255)):(Sh(c,a.A>>>16),Sh(c,a.A&65535));Rh(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var ci={};ci=function(){this.input=null;this.Oa=this.U=this.Na=0;this.jb=null;this.Vb=this.F=this.Ya=0;this.msg="";this.state=null;this.Ib=2;this.A=0};var di=Object.prototype.toString;
function ei(a){if(!(this instanceof ei))return new ei(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,Ea:15,hd:8,strategy:0,Cc:""},a||{});a.raw&&0<a.Ea?a.Ea=-a.Ea:a.Vc&&0<a.Ea&&16>a.Ea&&(a.Ea+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.B=new ci;this.B.F=0;var b=this.B;var c=a.level,d=a.method,e=a.Ea,f=a.hd,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Ph(b,-2);else{8===e&&(e=9);var k=new ai;
b.state=k;k.B=b;k.wrap=h;k.u=null;k.Wb=e;k.T=1<<k.Wb;k.Da=k.T-1;k.Jb=f+7;k.yb=1<<k.Jb;k.sa=k.yb-1;k.ta=~~((k.Jb+3-1)/3);k.window=new N.Ha(2*k.T);k.head=new N.qa(k.yb);k.oa=new N.qa(k.T);k.ib=1<<f+6;k.fa=4*k.ib;k.K=new N.Ha(k.fa);k.fb=1*k.ib;k.Mb=3*k.ib;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.Oa=b.Vb=0;b.Ib=2;c=b.state;c.pending=0;c.kb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.A=2===c.wrap?0:1;c.Va=0;if(!Nh){d=Array(16);for(f=g=0;28>f;f++)for(sh[f]=g,e=0;e<1<<kh[f];e++)rh[g++]=
f;rh[g-1]=f;for(f=g=0;16>f;f++)for(th[f]=g,e=0;e<1<<lh[f];e++)qh[g++]=f;for(g>>=7;30>f;f++)for(th[f]=g<<7,e=0;e<1<<lh[f]-7;e++)qh[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)oh[2*e+1]=8,e++,d[8]++;for(;255>=e;)oh[2*e+1]=9,e++,d[9]++;for(;279>=e;)oh[2*e+1]=7,e++,d[7]++;for(;287>=e;)oh[2*e+1]=8,e++,d[8]++;Ch(oh,287,d);for(e=0;30>e;e++)ph[2*e+1]=5,ph[2*e]=Bh(e,5);vh=new uh(oh,kh,257,286,15);wh=new uh(ph,lh,0,30,15);xh=new uh([],mh,0,19,7);Nh=!0}c.zb=new yh(c.Y,vh);c.vb=new yh(c.Ja,wh);c.Yb=new yh(c.S,
xh);c.V=0;c.P=0;Dh(c);c=0}else c=Ph(b,-2);0===c&&(b=b.state,b.Dc=2*b.T,Qh(b.head),b.Ob=$h[b.level].fd,b.ic=$h[b.level].Uc,b.tc=$h[b.level].jd,b.qc=$h[b.level].ed,b.l=0,b.aa=0,b.o=0,b.Z=0,b.G=b.ba=2,b.La=0,b.C=0);b=c}}else b=-2;if(0!==b)throw Error(ih[b]);a.header&&(b=this.B)&&b.state&&2===b.state.wrap&&(b.state.u=a.header);if(a.gb){var l;"string"===typeof a.gb?l=Fg(a.gb):"[object ArrayBuffer]"===di.call(a.gb)?l=new Uint8Array(a.gb):l=a.gb;a=this.B;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,
2===b||1===b&&42!==l.status||l.o)b=-2;else{1===b&&(a.A=Gg(a.A,f,g,0));l.wrap=0;g>=l.T&&(0===b&&(Qh(l.head),l.l=0,l.aa=0,l.Z=0),c=new N.Ha(l.T),N.Pa(c,f,g-l.T,l.T,0),f=c,g=l.T);c=a.U;d=a.Na;e=a.input;a.U=g;a.Na=0;a.input=f;for(Uh(l);3<=l.o;){f=l.l;g=l.o-2;do l.C=(l.C<<l.ta^l.window[f+3-1])&l.sa,l.oa[f&l.Da]=l.head[l.C],l.head[l.C]=f,f++;while(--g);l.l=f;l.o=2;Uh(l)}l.l+=l.o;l.aa=l.l;l.Z=l.o;l.o=0;l.G=l.ba=2;l.La=0;a.Na=d;a.input=e;a.U=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(ih[b]);this.Id=!0}}
ei.prototype.push=function(a,b){var c=this.B,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=Fg(a):"[object ArrayBuffer]"===di.call(a)?c.input=new Uint8Array(a):c.input=a;c.Na=0;c.U=c.input.length;do{0===c.F&&(c.jb=new N.Ha(d),c.Ya=0,c.F=d);a=bi(c,e);if(1!==a&&0!==a)return fi(this,a),this.ended=!0,!1;if(0===c.F||0===c.U&&(4===e||2===e))if("string"===this.options.Cc){var f=N.Ub(c.jb,c.Ya);b=f;f=f.length;if(65537>f&&(b.subarray&&Cg||!b.subarray))b=
String.fromCharCode.apply(null,N.Ub(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.Ub(c.jb,c.Ya),this.chunks.push(b)}while((0<c.U||0===c.F)&&1!==a);if(4===e)return(c=this.B)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Ph(c,-2):(c.state=null,a=113===d?Ph(c,-3):0)):a=-2,fi(this,a),this.ended=!0,0===a;2===e&&(fi(this,0),c.F=0);return!0};
function fi(a,b){0===b&&(a.result="string"===a.options.Cc?a.chunks.join(""):N.fc(a.chunks));a.chunks=[];a.err=b;a.msg=a.B.msg}
;function gi(a){this.name=a}
;var hi=new gi("rawColdConfigGroup");var ii=new gi("rawHotConfigGroup");function ji(a){K.call(this,a)}
w(ji,K);function ki(a){K.call(this,a)}
w(ki,K);function li(a){K.call(this,a,-1,mi)}
w(li,K);var mi=[2];function ni(a){K.call(this,a,-1,oi)}
w(ni,K);ni.prototype.getPlayerType=function(){return Vc(this,36)};
ni.prototype.setHomeGroupInfo=function(a){return J(this,li,81,a)};
var oi=[9,66,24,32,86,100,101];function pi(a){K.call(this,a)}
w(pi,K);pi.prototype.getKey=function(){return id(this,1)};
pi.prototype.la=function(){return id(this,2===$c(this,qi)?2:-1)};
var qi=[2,3,4,5,6];function ri(a){K.call(this,a,-1,si)}
w(ri,K);var si=[15,26,28];function ti(a){K.call(this,a,-1,ui)}
w(ti,K);var ui=[5];function vi(a){K.call(this,a)}
w(vi,K);function wi(a){K.call(this,a,-1,xi)}
w(wi,K);wi.prototype.setSafetyMode=function(a){return H(this,5,a)};
var xi=[12];function yi(a){K.call(this,a,-1,zi)}
w(yi,K);var zi=[12];var Ai={Hd:"WEB_DISPLAY_MODE_UNKNOWN",Dd:"WEB_DISPLAY_MODE_BROWSER",Fd:"WEB_DISPLAY_MODE_MINIMAL_UI",Gd:"WEB_DISPLAY_MODE_STANDALONE",Ed:"WEB_DISPLAY_MODE_FULLSCREEN"};function Bi(a){K.call(this,a)}
w(Bi,K);Bi.prototype.getKey=function(){return id(this,1)};
Bi.prototype.la=function(){return id(this,2)};function Ci(a){K.call(this,a,-1,Di)}
w(Ci,K);var Di=[4,5];function Ei(a){K.call(this,a)}
w(Ei,K);function Fi(a){K.call(this,a)}
w(Fi,K);var Gi=[2,3,4];function Hi(a){K.call(this,a)}
w(Hi,K);function Ii(a){K.call(this,a)}
w(Ii,K);function Ji(a){K.call(this,a)}
w(Ji,K);function Ki(a){K.call(this,a,-1,Li)}
w(Ki,K);var Li=[10,17];function Mi(a){K.call(this,a)}
w(Mi,K);function Ni(a){K.call(this,a)}
w(Ni,K);function Oi(a){K.call(this,a)}
w(Oi,K);function Pi(a){K.call(this,a,459)}
w(Pi,K);
var Qi=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458];function Ri(a){K.call(this,a)}
w(Ri,K);function Si(a){K.call(this,a)}
w(Si,K);Si.prototype.getPlaylistId=function(){return jd(this,2)};
var kd=[1,2];function Ti(a){K.call(this,a,-1,Ui)}
w(Ti,K);var Ui=[3];var Vi=z.window,Wi,Xi,Yi=(null==Vi?void 0:null==(Wi=Vi.yt)?void 0:Wi.config_)||(null==Vi?void 0:null==(Xi=Vi.ytcfg)?void 0:Xi.data_)||{};B("yt.config_",Yi);function Zi(){var a=arguments;1<a.length?Yi[a[0]]=a[1]:1===a.length&&Object.assign(Yi,a[0])}
function V(a,b){return a in Yi?Yi[a]:b}
function $i(){return V("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function aj(){var a=Yi.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var bj=[];function cj(a){bj.forEach(function(b){return b(a)})}
function dj(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){ej(b)}}:a}
function ej(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=V("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Zi("ERRORS",e));cj(a)}
function fj(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=V("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Zi("ERRORS",e))}
;function W(a){a=gj(a);return"string"===typeof a&&"false"===a?!1:!!a}
function hj(a,b){a=gj(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function gj(a){var b=V("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:V("EXPERIMENT_FLAGS",{})[a]}
function ij(){for(var a=[],b=V("EXPERIMENTS_FORCED_FLAGS",{}),c=u(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=V("EXPERIMENT_FLAGS",{});var e=u(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var jj=0;B("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++jj});var kj={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function lj(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in kj||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function mj(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
lj.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
lj.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
lj.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ob=z.ytEventsEventsListeners||{};B("ytEventsEventsListeners",ob);var nj=z.ytEventsEventsCounter||{count:0};B("ytEventsEventsCounter",nj);
function oj(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return nb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ra(e[4])&&Ra(d)&&pb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function pj(a){a&&("string"==typeof a&&(a=[a]),E(a,function(b){if(b in ob){var c=ob[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?qj()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ob[b]}}))}
var qj=db(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function rj(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=oj(a,b,c,d);if(e)return e;e=++nj.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new lj(h);if(!Bd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new lj(h);
h.currentTarget=a;return c.call(a,h)};
g=dj(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),qj()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ob[e]=[a,b,c,g,d];return e}
;function sj(a,b){"function"===typeof a&&(a=dj(a));return window.setTimeout(a,b)}
function tj(a,b){"function"===typeof a&&(a=dj(a));return window.setInterval(a,b)}
;var uj=/^[\w.]*$/,vj={q:!0,search_query:!0};function wj(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=xj(f[0]||""),h=xj(f[1]||"");g in c?Array.isArray(c[g])?kb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,l=f[0],m=String(wj);k.args=[{key:l,value:f[1],query:a,method:yj==m?"unchanged":m}];vj.hasOwnProperty(l)||fj(k)}}return c}
var yj=String(wj);function zj(a){var b=[];lb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];E(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Aj(a){"?"==a.charAt(0)&&(a=a.substr(1));return wj(a,"&")}
function Bj(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Aj(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Xb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Cj(a){if(!b)var b=window.location.href;var c=a.match(Sb)[1]||null,d=Ub(a);c&&d?(a=a.match(Sb),b=b.match(Sb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Ub(b)==d&&(Number(b.match(Sb)[4]||null)||null)==(Number(a.match(Sb)[4]||null)||null):!0;return a}
function xj(a){return a&&a.match(uj)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Dj(a){var b=Ej;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Ud;e.flash="0";a:{try{var f=b.h.top.location.href}catch(aa){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?xd:g;try{var h=g.history.length}catch(aa){h=0}e.u_his=h;var k;e.u_h=null==(k=xd.screen)?void 0:k.height;var l;e.u_w=null==(l=xd.screen)?void 0:l.width;var m;e.u_ah=null==(m=xd.screen)?void 0:m.availHeight;var n;e.u_aw=
null==(n=xd.screen)?void 0:n.availWidth;var r;e.u_cd=null==(r=xd.screen)?void 0:r.colorDepth}catch(aa){}h=b.h;try{var p=h.screenX;var v=h.screenY}catch(aa){}try{var A=h.outerWidth;var I=h.outerHeight}catch(aa){}try{var M=h.innerWidth;var S=h.innerHeight}catch(aa){}try{var O=h.screenLeft;var va=h.screenTop}catch(aa){}try{M=h.innerWidth,S=h.innerHeight}catch(aa){}try{var Nc=h.screen.availWidth;var Ia=h.screen.availTop}catch(aa){}p=[O,va,p,v,Nc,Ia,A,I,M,S];v=b.h.top;try{var wa=(v||window).document,ba=
"CSS1Compat"==wa.compatMode?wa.documentElement:wa.body;var ha=(new zd(ba.clientWidth,ba.clientHeight)).round()}catch(aa){ha=new zd(-12245933,-12245933)}wa=ha;ha={};var ia=void 0===ia?z:ia;ba=new Se;ia.SVGElement&&ia.document.createElementNS&&ba.set(0);v=Sd();v["allow-top-navigation-by-user-activation"]&&ba.set(1);v["allow-popups-to-escape-sandbox"]&&ba.set(2);ia.crypto&&ia.crypto.subtle&&ba.set(3);ia.TextDecoder&&ia.TextEncoder&&ba.set(4);ia=Te(ba);ha.bc=ia;ha.bih=wa.height;ha.biw=wa.width;ha.brdim=
p.join();b=b.i;b=(ha.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ha.wgl=!!xd.WebGLRenderingContext,ha);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Ej=new function(){var a=window.document;this.h=window;this.i=a};
B("yt.ads_.signals_.getAdSignalsString",function(a){return zj(Dj(a))});Date.now();var Fj="XMLHttpRequest"in z?function(){return new XMLHttpRequest}:null;
function Gj(){if(!Fj)return null;var a=Fj();return"open"in a?a:null}
;var Hj={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Ij="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ka(Wd)),Jj=!1;
function Kj(a,b){b=void 0===b?{}:b;var c=Cj(a),d=W("web_ajax_ignore_global_headers_if_set"),e;for(e in Hj){var f=V(Hj[e]);"X-Goog-Visitor-Id"!==e||f||(f=V("VISITOR_DATA"));!f||!c&&Ub(a)||d&&void 0!==b[e]||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Ub(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Ub(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}document.location.hostname.endsWith("youtubeeducation.com")||
!c&&Ub(a)||(b["X-YouTube-Ad-Signals"]=zj(Dj()));return b}
function Lj(a){var b=window.location.search,c=Ub(a);W("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Cj(a)&&(c=document.location.hostname);var d=Tb(a.match(Sb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Aj(b),f={};E(Ij,function(g){e[g]&&(f[g]=e[g])});
return Bj(a,f||{},!1)}
function Mj(a,b){var c=b.format||"JSON";a=Nj(a,b);var d=Oj(a,b),e=!1,f=Pj(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||n||r)m=Qj(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};n=b.context||z;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=sj(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||z,f))},d)}return f}
function Nj(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=V("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Bj(a,b||{},!0);return a}
function Oj(a,b){var c=V("XSRF_FIELD_NAME"),d=V("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=V("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Ub(a)&&!b.withCredentials&&Ub(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(W("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Aj(e),sb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):Xb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!Jj&&a&&"POST"!=b.method&&(Jj=!0,ej(Error("AJAX request with postData should use POST")));return e}
function Qj(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,fj(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Rj(a):null)e={},E(a.getElementsByTagName("*"),function(g){e[g.tagName]=Sj(g)})}d&&Tj(e);
return e}
function Tj(a){if(Ra(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===tb){var e=null;var f=z.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:$a,createScript:$a,createScriptURL:$a})}catch(g){z.console&&z.console.error(g.message)}tb=e}else tb=e}d=(e=tb)?e.createHTML(d):d;a[c]=new Qb(d)}else Tj(a[b])}}
function Rj(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Sj(a){var b="";E(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Uj(a,b){b.method="POST";b.postParams||(b.postParams={});return Mj(a,b)}
function Pj(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&dj(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Gj();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;W("debug_forward_web_query_parameters")&&(a=Lj(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Kj(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Vj=uc||vc;var Wj=[{Pb:function(a){return"Cannot read property '"+a.key+"'"},
Ab:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Pb:function(a){return"Cannot call '"+a.key+"'"},
Ab:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Pb:function(a){return a.key+" is not defined"},
Ab:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Yj={Ba:[],ya:[{Kc:Xj,weight:500}]};function Xj(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Zj(){this.ya=[];this.Ba=[]}
var ak;function bk(){if(!ak){var a=ak=new Zj;a.Ba.length=0;a.ya.length=0;Yj.Ba&&a.Ba.push.apply(a.Ba,Yj.Ba);Yj.ya&&a.ya.push.apply(a.ya,Yj.ya)}return ak}
;var ck=new L;function dk(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=ek(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=ek(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=ek(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function ek(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function fk(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=gk(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=dk(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?gk(e+".ve",f,g,h):0;d+=g;d+=gk(e,a[e],b,c);if(500<d)break}}else c[b]=hk(a),d+=c[b].length;else c[b]=hk(a),d+=c[b].length;return d}
function gk(a,b,c,d){c+="."+a;a=hk(b);d[c]=a;return c.length+a.length}
function hk(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function ik(){}
;function jk(){if(!z.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return z.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":z.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":z.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":z.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;B("ytglobal.prefsUserPrefsPrefs_",C("ytglobal.prefsUserPrefsPrefs_")||{});var kk={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},lk={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},mk={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},nk={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function ok(){var a=z.navigator;return a?a.connection:void 0}
;function pk(a){var b=La.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ka(b))}
w(pk,Error);function qk(){try{return rk(),!0}catch(a){return!1}}
function rk(){if(void 0!==V("DATASYNC_ID"))return V("DATASYNC_ID");throw new pk("Datasync ID not set","unknown");}
;function sk(){}
function tk(a,b){return uk(a,0,b)}
sk.prototype.ka=function(a,b){return uk(a,1,b)};function vk(){sk.apply(this,arguments)}
w(vk,sk);function wk(){vk.h||(vk.h=new vk);return vk.h}
function uk(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):sj(a,c||0)}
vk.prototype.Qa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
vk.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
var Re=wk();function xk(a){var b=new sg;if(b.h)try{b.h.setItem("__sak","1");b.h.removeItem("__sak");var c=!0}catch(d){c=!1}else c=!1;(b=c?a?new yg(b,a):b:null)||(a=new tg(a||"UserDataSharedStore"),b=a.h?a:null);this.h=(a=b)?new og(a):null;this.i=document.domain||window.location.hostname}
xk.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Qf(b))}catch(f){return}else e=escape(b);b=this.i;ce.set(""+a,e,{Nb:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
xk.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=ce.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
xk.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;ce.remove(""+a,"/",void 0===b?"youtube.com":b)};var yk=function(){var a;return function(){a||(a=new xk("ytidb"));return a}}();
function zk(){var a;return null==(a=yk())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Ak=[],Bk=!1;function Ck(a){Bk||(Ak.push({type:"ERROR",payload:a}),10<Ak.length&&Ak.shift())}
function Dk(a,b){Bk||(Ak.push({type:"EVENT",eventType:a,payload:b}),10<Ak.length&&Ak.shift())}
;function Ek(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Fk(a){return a.substr(0,a.indexOf(":"))||a}
;var Gk={},Hk=(Gk.AUTH_INVALID="No user identifier specified.",Gk.EXPLICIT_ABORT="Transaction was explicitly aborted.",Gk.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Gk.MISSING_INDEX="Index not created.",Gk.MISSING_OBJECT_STORES="Object stores not created.",Gk.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Gk.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Gk.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Gk.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Gk.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Gk.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Gk.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Gk),Ik={},Jk=(Ik.AUTH_INVALID="ERROR",Ik.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Ik.EXPLICIT_ABORT="IGNORED",Ik.IDB_NOT_SUPPORTED="ERROR",Ik.MISSING_INDEX=
"WARNING",Ik.MISSING_OBJECT_STORES="ERROR",Ik.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Ik.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Ik.QUOTA_EXCEEDED="WARNING",Ik.QUOTA_MAYBE_EXCEEDED="WARNING",Ik.UNKNOWN_ABORT="WARNING",Ik.INCOMPATIBLE_DB_VERSION="WARNING",Ik),Kk={},Lk=(Kk.AUTH_INVALID=!1,Kk.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Kk.EXPLICIT_ABORT=!1,Kk.IDB_NOT_SUPPORTED=!1,Kk.MISSING_INDEX=!1,Kk.MISSING_OBJECT_STORES=!1,Kk.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Kk.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Kk.QUOTA_EXCEEDED=!1,Kk.QUOTA_MAYBE_EXCEEDED=!0,Kk.UNKNOWN_ABORT=!0,Kk.INCOMPATIBLE_DB_VERSION=!1,Kk);function X(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Hk[a]:c;d=void 0===d?Jk[a]:d;e=void 0===e?Lk[a]:e;pk.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,X.prototype)}
w(X,pk);function Mk(a,b){X.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Hk.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Mk.prototype)}
w(Mk,X);function Nk(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Nk.prototype)}
w(Nk,Error);var Ok=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Pk(a,b,c,d){b=Fk(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof X)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new X("QUOTA_EXCEEDED",a);if(wc&&"UnknownError"===e.name)return new X("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Nk)return new X("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Ok.some(function(f){return e.message.includes(f)}))return new X("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new X("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Qd:e.name})];e.level="WARNING";return e}
function Qk(a,b,c){var d=zk();return new X("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Rk(a){if(!a)throw Error();throw a;}
function Sk(a){return a}
function Tk(a){this.h=a}
function Uk(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Uk.resolve=function(a){return new Uk(new Tk(function(b,c){a instanceof Uk?a.then(b,c):b(a)}))};
Uk.reject=function(a){return new Uk(new Tk(function(b,c){c(a)}))};
Uk.prototype.then=function(a,b){var c=this,d=null!=a?a:Sk,e=null!=b?b:Rk;return new Uk(new Tk(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Vk(c,c,d,f,g)}),c.i.push(function(){Wk(c,c,e,f,g)})):"FULFILLED"===c.state.status?Vk(c,c,d,f,g):"REJECTED"===c.state.status&&Wk(c,c,e,f,g)}))};
function Xk(a,b){a.then(void 0,b)}
function Vk(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Uk?Yk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Wk(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Uk?Yk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Yk(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Uk?Yk(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Zk(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function $k(a){return new Promise(function(b,c){Zk(a,b,c)})}
function al(a){return new Uk(new Tk(function(b,c){Zk(a,b,c)}))}
;function bl(a,b){return new Uk(new Tk(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Ql=window,Y=Ql.ytcsi&&Ql.ytcsi.now?Ql.ytcsi.now:Ql.performance&&Ql.performance.timing&&Ql.performance.now&&Ql.performance.timing.navigationStart?function(){return Ql.performance.timing.navigationStart+Ql.performance.now()}:function(){return(new Date).getTime()};function Rl(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(Y());this.i=!1}
q=Rl.prototype;q.add=function(a,b,c){return Sl(this,[a],{mode:"readwrite",W:!0},function(d){return d.objectStore(a).add(b,c)})};
q.clear=function(a){return Sl(this,[a],{mode:"readwrite",W:!0},function(b){return b.objectStore(a).clear()})};
q.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function Tl(a,b,c){a=a.h.createObjectStore(b,c);return new Ul(a)}
q.delete=function(a,b){return Sl(this,[a],{mode:"readwrite",W:!0},function(c){return c.objectStore(a).delete(b)})};
q.get=function(a,b){return Sl(this,[a],{mode:"readonly",W:!0},function(c){return c.objectStore(a).get(b)})};
function Vl(a,b,c){return Sl(a,[b],{mode:"readwrite",W:!0},function(d){d=d.objectStore(b);return al(d.h.put(c,void 0))})}
q.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Sl(a,b,c,d){var e,f,g,h,k,l,m,n,r,p,v,A;return y(function(I){switch(I.h){case 1:var M={mode:"readonly",W:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?M.mode=c:Object.assign(M,c);e=M;a.transactionCount++;f=e.W?3:1;g=0;case 2:if(h){I.D(3);break}g++;k=Math.round(Y());ya(I,4);l=a.h.transaction(b,e.mode);M=new Wl(l);M=Xl(M,d);return x(I,M,6);case 6:return m=I.i,n=Math.round(Y()),Yl(a,k,n,g,void 0,b.join(),e),I.return(m);case 4:r=Ba(I);p=Math.round(Y());v=Pk(r,a.h.name,b.join(),a.h.version);
if((A=v instanceof X&&!v.h)||g>=f)Yl(a,k,p,g,v,b.join(),e),h=v;I.D(2);break;case 3:return I.return(Promise.reject(h))}})}
function Yl(a,b,c,d,e,f,g){b=c-b;e?(e instanceof X&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Dk("QUOTA_EXCEEDED",{dbName:Fk(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof X&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Dk("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Zl(a,!1,d,f,b,g.tag),Ck(e)):Zl(a,!0,d,f,b,g.tag)}
function Zl(a,b,c,d,e,f){Dk("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
q.getName=function(){return this.h.name};
function Ul(a){this.h=a}
q=Ul.prototype;q.add=function(a,b){return al(this.h.add(a,b))};
q.autoIncrement=function(){return this.h.autoIncrement};
q.clear=function(){return al(this.h.clear()).then(function(){})};
function $l(a,b,c){a.h.createIndex(b,c,{unique:!1})}
function am(a,b){return bm(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
q.delete=function(a){return a instanceof IDBKeyRange?am(this,a):al(this.h.delete(a))};
q.get=function(a){return al(this.h.get(a))};
q.index=function(a){try{return new cm(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Nk(a,this.h.name);throw b;}};
q.getName=function(){return this.h.name};
q.keyPath=function(){return this.h.keyPath};
function bm(a,b,c){a=a.h.openCursor(b.query,b.direction);return dm(a).then(function(d){return bl(d,c)})}
function Wl(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=X;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Xl(a,b){var c=new Promise(function(d,e){try{Xk(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Wl.prototype.abort=function(){this.h.abort();this.i=!0;throw new X("EXPLICIT_ABORT");};
Wl.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new Ul(a),this.j.set(a,b));return b};
function cm(a){this.h=a}
q=cm.prototype;q.delete=function(a){return em(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
q.get=function(a){return al(this.h.get(a))};
q.getKey=function(a){return al(this.h.getKey(a))};
q.keyPath=function(){return this.h.keyPath};
q.unique=function(){return this.h.unique};
function em(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return dm(a).then(function(d){return bl(d,c)})}
function fm(a,b){this.request=a;this.cursor=b}
function dm(a){return al(a).then(function(b){return b?new fm(a,b):null})}
q=fm.prototype;q.advance=function(a){this.cursor.advance(a);return dm(this.request)};
q.continue=function(a){this.cursor.continue(a);return dm(this.request)};
q.delete=function(){return al(this.cursor.delete()).then(function(){})};
q.getKey=function(){return this.cursor.key};
q.la=function(){return this.cursor.value};
q.update=function(a){return al(this.cursor.update(a))};function gm(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Rl(g.result,{closed:n}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Ic,k=c.Jc,l=c.nd,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&Dk("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:Fk(a)});var v=f(),A=new Wl(g.transaction);m&&
m(v,function(I){return p.oldVersion<I&&p.newVersion>=I},A);
A.done.catch(function(I){e(I)})}catch(I){e(I)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){Dk("IDB_UNEXPECTEDLY_CLOSED",{dbName:Fk(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function hm(a,b,c){c=void 0===c?{}:c;return gm(a,b,c)}
function im(a,b){b=void 0===b?{}:b;var c,d,e,f;return y(function(g){if(1==g.h)return ya(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Ic)&&c.addEventListener("blocked",function(){e()}),x(g,$k(c),4);
if(2!=g.h)return Aa(g,0);f=Ba(g);throw Pk(f,a,"",-1);})}
;function jm(a,b){this.name=a;this.options=b;this.j=!0;this.v=this.m=0}
jm.prototype.i=function(a,b,c){c=void 0===c?{}:c;return hm(a,b,c)};
jm.prototype.delete=function(a){a=void 0===a?{}:a;return im(this.name,a)};
function km(a,b){return new X("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function lm(a,b){if(!b)throw Qk("openWithToken",Fk(a.name));return mm(a)}
function mm(a){function b(){var f,g,h,k,l,m,n,r,p,v;return y(function(A){switch(A.h){case 1:return g=null!=(f=Error().stack)?f:"",ya(A,2),x(A,a.i(a.name,a.options.version,d),4);case 4:h=A.i;for(var I=a.options,M=[],S=u(Object.keys(I.Za)),O=S.next();!O.done;O=S.next()){O=O.value;var va=I.Za[O],Nc=void 0===va.ld?Number.MAX_VALUE:va.ld;!(h.h.version>=va.eb)||h.h.version>=Nc||h.h.objectStoreNames.contains(O)||M.push(O)}k=M;if(0===k.length){A.D(5);break}l=Object.keys(a.options.Za);m=h.objectStoreNames();
if(a.v<hj("ytidb_reopen_db_retries",0))return a.v++,h.close(),Ck(new X("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),A.return(b());if(!(a.m<hj("ytidb_remake_db_retries",1))){A.D(6);break}a.m++;return x(A,a.delete(),7);case 7:return Ck(new X("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),A.return(b());case 6:throw new Mk(m,l);case 5:return A.return(h);case 2:n=Ba(A);if(n instanceof DOMException?
"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){A.D(8);break}return x(A,a.i(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:r=A.i;p=r.h.version;if(void 0!==a.options.version&&p>a.options.version+1)throw r.close(),a.j=!1,km(a,p);return A.return(r);case 8:throw c(),n instanceof Error&&!W("ytidb_async_stack_killswitch")&&
(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Pk(n,a.name,"",null!=(v=a.options.version)?v:-1);}})}
function c(){a.h===e&&(a.h=void 0)}
if(!a.j)throw km(a);if(a.h)return a.h;var d={Jc:function(f){f.close()},
closed:c,nd:c,upgrade:a.options.upgrade};var e=b();a.h=e;return a.h}
;var nm=new jm("YtIdbMeta",{Za:{databases:{eb:1}},upgrade:function(a,b){b(1)&&Tl(a,"databases",{keyPath:"actualName"})}});
function om(a,b){var c;return y(function(d){if(1==d.h)return x(d,lm(nm,b),2);c=d.i;return d.return(Sl(c,["databases"],{W:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return al(f.h.put(a,void 0)).then(function(){})})}))})}
function pm(a,b){var c;return y(function(d){if(1==d.h)return a?x(d,lm(nm,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function qm(a,b){var c,d;return y(function(e){return 1==e.h?(c=[],x(e,lm(nm,b),2)):3!=e.h?(d=e.i,x(e,Sl(d,["databases"],{W:!0,mode:"readonly"},function(f){c.length=0;return bm(f.objectStore("databases"),{},function(g){a(g.la())&&c.push(g.la());return g.continue()})}),3)):e.return(c)})}
function rm(a){return qm(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var sm,tm=new function(){}(new function(){});
function um(){var a,b,c,d;return y(function(e){switch(e.h){case 1:a=zk();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Vj)f=/WebKit\/([0-9]+)/.exec(Nb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Nb()),f=!(f&&602<=parseInt(f[1],10)));if(f||ec)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ya(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return x(e,om(d,tm),4);case 4:return x(e,pm("yt-idb-test-do-not-use",tm),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function vm(){if(void 0!==sm)return sm;Bk=!0;return sm=um().then(function(a){Bk=!1;var b;if(null!=(b=yk())&&b.h){var c;b={hasSucceededOnce:(null==(c=zk())?void 0:c.hasSucceededOnce)||a};var d;null==(d=yk())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function wm(){return C("ytglobal.idbToken_")||void 0}
function xm(){var a=wm();return a?Promise.resolve(a):vm().then(function(b){(b=b?tm:void 0)&&B("ytglobal.idbToken_",b);return b})}
;new Rf;function ym(a){if(!qk())throw a=new X("AUTH_INVALID",{dbName:a}),Ck(a),a;var b=rk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function zm(a,b,c,d){var e,f,g,h,k,l;return y(function(m){switch(m.h){case 1:return f=null!=(e=Error().stack)?e:"",x(m,xm(),2);case 2:g=m.i;if(!g)throw h=Qk("openDbImpl",a,b),W("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Ck(h),h;Ek(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:ym(a);ya(m,3);return x(m,om(k,g),5);case 5:return x(m,hm(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=Ba(m),ya(m,7),x(m,pm(k.actualName,g),9);case 9:Aa(m,
8);break;case 7:Ba(m);case 8:throw l;}})}
function Am(a,b,c){c=void 0===c?{}:c;return zm(a,b,!1,c)}
function Bm(a,b,c){c=void 0===c?{}:c;return zm(a,b,!0,c)}
function Cm(a,b){b=void 0===b?{}:b;var c,d;return y(function(e){if(1==e.h)return x(e,xm(),2);if(3!=e.h){c=e.i;if(!c)return e.return();Ek(a);d=ym(a);return x(e,im(d.actualName,b),3)}return x(e,pm(d.actualName,c),0)})}
function Dm(a,b,c){a=a.map(function(d){return y(function(e){return 1==e.h?x(e,im(d.actualName,b),2):x(e,pm(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Em(){var a=void 0===a?{}:a;var b,c;return y(function(d){if(1==d.h)return x(d,xm(),2);if(3!=d.h){b=d.i;if(!b)return d.return();Ek("LogsDatabaseV2");return x(d,rm(b),3)}c=d.i;return x(d,Dm(c,a,b),0)})}
function Fm(a,b){b=void 0===b?{}:b;var c;return y(function(d){if(1==d.h)return x(d,xm(),2);if(3!=d.h){c=d.i;if(!c)return d.return();Ek(a);return x(d,im(a,b),3)}return x(d,pm(a,c),0)})}
;function Gm(a,b){jm.call(this,a,b);this.options=b;Ek(a)}
w(Gm,jm);function Hm(a,b){var c;return function(){c||(c=new Gm(a,b));return c}}
Gm.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.Eb?Bm:Am)(a,b,Object.assign({},c))};
Gm.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Eb?Fm:Cm)(this.name,a)};
function Im(a,b){return Hm(a,b)}
;var Jm={},Km=Im("ytGcfConfig",{Za:(Jm.coldConfigStore={eb:1},Jm.hotConfigStore={eb:1},Jm),Eb:!1,upgrade:function(a,b){b(1)&&($l(Tl(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),$l(Tl(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Lm(a){return lm(Km(),a)}
function Mm(a,b,c){var d,e,f;return y(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:Y()},x(g,Lm(c),2);case 2:return e=g.i,x(g,e.clear("hotConfigStore"),3);case 3:return x(g,Vl(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Nm(a,b,c,d){var e,f,g;return y(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:Y()},x(h,Lm(d),2);case 2:return f=h.i,x(h,f.clear("coldConfigStore"),3);case 3:return x(h,Vl(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Om(a){var b,c;return y(function(d){return 1==d.h?x(d,Lm(a),2):3!=d.h?(b=d.i,c=void 0,x(d,Sl(b,["coldConfigStore"],{mode:"readwrite",W:!0},function(e){return em(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.la()})}),3)):d.return(c)})}
function Pm(a){var b,c;return y(function(d){return 1==d.h?x(d,Lm(a),2):3!=d.h?(b=d.i,c=void 0,x(d,Sl(b,["hotConfigStore"],{mode:"readwrite",W:!0},function(e){return em(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.la()})}),3)):d.return(c)})}
;function Qm(){this.h=0}
function Rm(a,b,c){var d,e,f;return y(function(g){if(1==g.h){if(!W("update_log_event_config"))return g.D(0);c&&(a.i=c,B("yt.gcf.config.hotConfigGroup",a.i));a.hotHashData=b;B("yt.gcf.config.hotHashData",a.hotHashData);return(d=wm())?c?g.D(4):x(g,Pm(d),5):g.D(0)}4!=g.h&&(e=g.i,c=null==(f=e)?void 0:f.config);return x(g,Mm(c,b,d),0)})}
function Sm(a,b,c){var d,e,f,g;return y(function(h){if(1==h.h){if(!W("update_log_event_config"))return h.D(0);a.coldHashData=b;B("yt.gcf.config.coldHashData",a.coldHashData);return(d=wm())?c?h.D(4):x(h,Om(d),5):h.D(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.D(0);g=c.configData;return x(h,Nm(c,b,g,d),0)})}
;function Tm(){return"INNERTUBE_API_KEY"in Yi&&"INNERTUBE_API_VERSION"in Yi}
function Um(){return{Wc:V("INNERTUBE_API_KEY"),Xc:V("INNERTUBE_API_VERSION"),Kb:V("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),kc:V("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Yc:V("INNERTUBE_CONTEXT_CLIENT_NAME",1),lc:V("INNERTUBE_CONTEXT_CLIENT_VERSION"),nc:V("INNERTUBE_CONTEXT_HL"),mc:V("INNERTUBE_CONTEXT_GL"),Zc:V("INNERTUBE_HOST_OVERRIDE")||"",bd:!!V("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ad:!!V("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:V("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Vm(a){var b={client:{hl:a.nc,gl:a.mc,clientName:a.kc,clientVersion:a.lc,configInfo:a.Kb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=z.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=V("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=ij();0<c.length&&(b.request={internalExperimentFlags:c});Wm(a,void 0,b);Xm(void 0,b);Ym(void 0,b);Zm(a,void 0,b);$m(void 0,b);W("start_sending_config_hash")&&an(void 0,b);V("DELEGATED_SESSION_ID")&&
!W("pageid_as_header_web")&&(b.user={onBehalfOfUser:V("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=u(Object.entries(Aj(V("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function bn(a){var b=new yi,c=new ni;H(c,1,a.nc);H(c,2,a.mc);H(c,16,a.Yc);H(c,17,a.lc);if(a.Kb){var d=a.Kb,e=new ji;d.coldConfigData&&H(e,1,d.coldConfigData);d.appInstallData&&H(e,6,d.appInstallData);d.coldHashData&&H(e,3,d.coldHashData);d.hotHashData&&H(e,5,d.hotHashData);J(c,ji,62,e)}if((d=z.devicePixelRatio)&&1!=d){if(null!=d&&"number"!==typeof d)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof d+": "+d);H(c,65,d)}d=V("EXPERIMENTS_TOKEN","");""!==d&&H(c,
54,d);d=ij();if(0<d.length){e=new ri;for(var f=0;f<d.length;f++){var g=new pi;H(g,1,d[f].key);Zc(g,2,qi,d[f].value);hd(e,15,pi,g)}J(b,ri,5,e)}Wm(a,c);Xm(b);Ym(c);Zm(a,c);$m(c);W("start_sending_config_hash")&&an(c);V("DELEGATED_SESSION_ID")&&!W("pageid_as_header_web")&&(a=new wi,H(a,3,V("DELEGATED_SESSION_ID")));a=u(Object.entries(Aj(V("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=u(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?H(c,12,e):"cmodel"===d?H(c,13,e):"cbr"===d?H(c,87,e):"cbrver"===
d?H(c,88,e):"cos"===d?H(c,18,e):"cosver"===d?H(c,19,e):"cplatform"===d&&H(c,42,e);J(b,ni,1,c);return b}
function Wm(a,b,c){a=a.kc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=ad(b,ki,96)||new ki;var d=jk();d=Object.keys(Ai).indexOf(d);d=-1===d?null:d;null!==d&&H(c,3,d);J(b,ki,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=jk())}
function Xm(a,b){var c=C("yt.embedded_player.embed_url");c&&(a?(b=ad(a,ti,7)||new ti,H(b,4,c),J(a,ti,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Ym(a,b){var c;if(W("web_log_memory_total_kbytes")&&(null==(c=z.navigator)?0:c.deviceMemory)){var d;c=null==(d=z.navigator)?void 0:d.deviceMemory;a?H(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Zm(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=ad(b,ji,62))?d:new ji;H(c,6,a.appInstallData);J(b,ji,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function $m(a,b){a:{var c=ok();if(c){var d=kk[c.type||"unknown"]||"CONN_UNKNOWN";c=kk[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?H(a,61,lk[d]):b&&(b.client.connectionType=d));W("web_log_effective_connection_type")&&(d=ok(),d=null!=d&&d.effectiveType?nk.hasOwnProperty(d.effectiveType)?nk[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?H(a,94,mk[d]):
b&&(b.client.effectiveConnectionType=d)))}
function cn(a,b,c){c=void 0===c?{}:c;var d={};V("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":V("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||V("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.Kd||V("AUTHORIZATION");if(!b)if(a)b="Bearer "+C("gapi.auth.getToken")().Jd;else{ik.h||(ik.h=new ik);a={};if(c=fe([]))a.Authorization=c,c=void 0,void 0===c&&(c=Number(V("SESSION_INDEX",0)),c=isNaN(c)?0:c),W("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
c.toString()),"INNERTUBE_HOST_OVERRIDE"in Yi||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in Yi&&(a["X-Goog-PageId"]=V("DELEGATED_SESSION_ID"));W("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function an(a,b){Qm.h||(Qm.h=new Qm);var c=Qm.h;var d=Y()-c.h;if(0!==c.h&&d<hj("send_config_hash_timer"))c=void 0;else{d=C("yt.gcf.config.coldConfigData");var e=C("yt.gcf.config.hotHashData"),f=C("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=Y());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=ad(a,ji,62))?g:new ji;H(b,1,c);H(b,3,d);H(b,5,e);J(a,ji,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},
b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;var dn=C("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.nb;L.prototype.publish=L.prototype.ab;L.prototype.clear=L.prototype.clear;B("ytPubsub2Pubsub2Instance",dn);B("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});B("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});B("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});B("ytPubsub2Pubsub2SkipSubKey",null);
function en(a,b){var c=C("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var fn=!0,gn=hj("compression_performance_threshold",250);
function hn(a,b,c,d){var e={startTime:Y()};if(fn)try{var f=he(b);var g=g||{};g.Vc=!0;var h=new ei(g);h.push(f,!0);if(h.err)throw h.msg||ih[h.err];var k=h.result;e.endTime=Y();W("disable_compression_due_to_performance_degredation")&&e.endTime-e.startTime>=gn&&(fn=!1);!W("gel_compression_csi_killswitch")&&W("log_gel_compression_latency")&&.01>=Math.random()&&en("gel_compression_latency_payload",e);if(!W("only_compress_gel_if_smaller")||(window.Blob?k.length<(new Blob(b.split(""))).size:1))c.headers||
(c.headers={}),c.headers["Content-Encoding"]="gzip",c.postBody=k,c.postParams=void 0;d(a,c)}catch(l){fj(l),d(a,c)}else d(a,c)}
;function jn(a){a=Object.assign({},a);delete a.Authorization;var b=fe();if(b){var c=new Cf;c.update(V("INNERTUBE_API_KEY"));c.update(b);a.hash=zc(c.digest(),3)}return a}
;var kn;function ln(){kn||(kn=new xk("yt.innertube"));return kn}
function mn(a,b,c,d){if(d)return null;d=ln().get("nextId",!0)||1;var e=ln().get("requests",!0)||{};e[d]={method:a,request:b,authState:jn(c),requestTime:Math.round(Y())};ln().set("nextId",d+1,86400,!0);ln().set("requests",e,86400,!0);return d}
function nn(a){var b=ln().get("requests",!0)||{};delete b[a];ln().set("requests",b,86400,!0)}
function on(a){var b=ln().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Y())-d.requestTime)){var e=d.authState,f=jn(cn(!1));pb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),pn(a,d.method,e,{}));delete b[c]}}ln().set("requests",b,86400,!0)}}
;function qn(a){this.rb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.Ta=function(){};
this.now=Date.now;this.hb=!1;var b;this.Bc=null!=(b=a.Bc)?b:100;var c;this.zc=null!=(c=a.zc)?c:1;var d;this.xc=null!=(d=a.xc)?d:2592E6;var e;this.wc=null!=(e=a.wc)?e:12E4;var f;this.yc=null!=(f=a.yc)?f:5E3;var g;this.I=null!=(g=a.I)?g:void 0;this.wb=!!a.wb;var h;this.ub=null!=(h=a.ub)?h:.1;var k;this.Bb=null!=(k=a.Bb)?k:10;a.handleError&&(this.handleError=a.handleError);a.Ta&&(this.Ta=a.Ta);a.hb&&(this.hb=a.hb);a.rb&&(this.rb=a.rb);this.L=a.L;this.ia=a.ia;this.O=a.O;this.R=a.R;this.xa=a.xa;this.Sb=
a.Sb;this.Rb=a.Rb;rn(this)&&(!this.L||this.L("networkless_logging"))&&sn(this)}
function sn(a){rn(a)&&!a.hb&&(a.h=!0,a.wb&&Math.random()<=a.ub&&a.O.Lc(a.I),tn(a),a.R.da()&&a.mb(),a.R.Ka(a.Sb,a.mb.bind(a)),a.R.Ka(a.Rb,a.Zb.bind(a)))}
q=qn.prototype;q.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(rn(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.O.set(d,this.I).then(function(e){d.id=e;c.R.da()&&un(c,d)}).catch(function(e){un(c,d);
vn(c,e)})}else this.xa(a,b)};
q.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(rn(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.L&&this.L("nwl_skip_retry")&&(e.skipRetry=c);if(this.R.da()||this.L&&this.L("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return y(function(k){if(1==k.h)return x(k,d.O.set(e,d.I).catch(function(l){vn(d,l)}),2);
f(g,h);k.h=0})}}this.xa(a,b,e.skipRetry)}else this.O.set(e,this.I).catch(function(g){d.xa(a,b,e.skipRetry);
vn(d,g)})}else this.xa(a,b,this.L&&this.L("nwl_skip_retry")&&c)};
q.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(rn(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.O.Ra(d.id,c.I):e=!0;c.R.Ma&&c.L&&c.L("vss_network_hint")&&c.R.Ma(!0);f(g,h)};
this.xa(d.url,d.options);this.O.set(d,this.I).then(function(g){d.id=g;e&&c.O.Ra(d.id,c.I)}).catch(function(g){vn(c,g)})}else this.xa(a,b)};
q.mb=function(){var a=this;if(!rn(this))throw Qk("throttleSend");this.i||(this.i=this.ia.ka(function(){var b;return y(function(c){if(1==c.h)return x(c,a.O.hc("NEW",a.I),2);if(3!=c.h)return b=c.i,b?x(c,un(a,b),3):(a.Zb(),c.return());a.i&&(a.i=0,a.mb());c.h=0})},this.Bc))};
q.Zb=function(){this.ia.Qa(this.i);this.i=0};
function un(a,b){var c,d;return y(function(e){switch(e.h){case 1:if(!rn(a))throw c=Qk("immediateSend"),c;if(void 0===b.id){e.D(2);break}return x(e,a.O.dd(b.id,a.I),3);case 3:(d=e.i)||a.Ta(Error("The request cannot be found in the database."));case 2:if(wn(a,b,a.xc)){e.D(4);break}a.Ta(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.D(5);break}return x(e,a.O.Ra(b.id,a.I),5);case 5:return e.return();case 4:b.skipRetry||(b=xn(a,b));if(!b){e.D(0);break}if(!b.skipRetry||
void 0===b.id){e.D(8);break}return x(e,a.O.Ra(b.id,a.I),8);case 8:a.xa(b.url,b.options,!!b.skipRetry),e.h=0}})}
function xn(a,b){if(!rn(a))throw Qk("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return y(function(m){switch(m.h){case 1:g=yn(f);h=zn(f);if(!(a.L&&a.L("nwl_consider_error_code")&&g||a.L&&!a.L("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Bb)){m.D(2);break}if(!a.R.Db){m.D(3);break}return x(m,a.R.Db(),3);case 3:if(a.R.da()){m.D(2);break}c(e,f);if(!a.L||!a.L("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){m.D(6);break}return x(m,a.O.Tb(b.id,a.I,!1),6);case 6:return m.return();case 2:if(a.L&&a.L("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.Bb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){m.D(8);break}return b.sendCount<a.zc?x(m,a.O.Tb(b.id,a.I,!0,h?!1:void 0),12):x(m,a.O.Ra(b.id,a.I),8);case 12:a.ia.ka(function(){a.R.da()&&a.mb()},a.yc);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return y(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.D(2):x(h,a.O.Ra(b.id,a.I),2);a.R.Ma&&a.L&&a.L("vss_network_hint")&&a.R.Ma(!0);d(e,f);h.h=0})};
return b}
function wn(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function tn(a){if(!rn(a))throw Qk("retryQueuedRequests");a.O.hc("QUEUED",a.I).then(function(b){b&&!wn(a,b,a.wc)?a.ia.ka(function(){return y(function(c){if(1==c.h)return void 0===b.id?c.D(2):x(c,a.O.Tb(b.id,a.I),2);tn(a);c.h=0})}):a.R.da()&&a.mb()})}
function vn(a,b){a.Ec&&!a.R.da()?a.Ec(b):a.handleError(b)}
function rn(a){return!!a.I||a.rb}
function yn(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function zn(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var An;
function Bn(){if(An)return An();var a={};An=Im("LogsDatabaseV2",{Za:(a.LogsRequestsStore={eb:2},a),Eb:!1,upgrade:function(b,c,d){c(2)&&Tl(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),$l(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return An()}
;function Cn(a){return lm(Bn(),a)}
function Dn(a,b){var c,d,e,f;return y(function(g){if(1==g.h)return c={startTime:Y(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},x(g,Cn(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:V("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),x(g,Vl(d,"LogsRequestsStore",e),3);f=g.i;c.od=Y();En(c);return g.return(f)})}
function Fn(a,b){var c,d,e,f,g,h,k;return y(function(l){if(1==l.h)return c={startTime:Y(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},x(l,Cn(b),2);if(3!=l.h)return d=l.i,e=V("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Y()],h=IDBKeyRange.bound(f,g),k=void 0,x(l,Sl(d,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(m){return em(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(n){n.la()&&(k=n.la(),"NEW"===a&&(k.status="QUEUED",n.update(k)))})}),
3);
c.od=Y();En(c);return l.return(k)})}
function Gn(a,b){var c;return y(function(d){if(1==d.h)return x(d,Cn(b),2);c=d.i;return d.return(Sl(c,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",al(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Hn(a,b,c,d){c=void 0===c?!0:c;var e;return y(function(f){if(1==f.h)return x(f,Cn(b),2);e=f.i;return f.return(Sl(e,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),al(h.h.put(k,void 0)).then(function(){return k})):Uk.resolve(void 0)})}))})}
function In(a,b){var c;return y(function(d){if(1==d.h)return x(d,Cn(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Jn(a){var b,c;return y(function(d){if(1==d.h)return x(d,Cn(a),2);b=d.i;c=Y()-2592E6;return x(d,Sl(b,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){return bm(e.objectStore("LogsRequestsStore"),{},function(f){if(f.la().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Kn(){y(function(a){return x(a,Em(),0)})}
function En(a){W("nwl_csi_killswitch")||.01>=Math.random()&&en("nwl_transaction_latency_payload",a)}
;var Ln={},Mn=Im("ServiceWorkerLogsDatabase",{Za:(Ln.SWHealthLog={eb:1},Ln),Eb:!0,upgrade:function(a,b){b(1)&&$l(Tl(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Nn(a){return lm(Mn(),a)}
function On(a){var b,c;y(function(d){if(1==d.h)return x(d,Nn(a),2);b=d.i;c=Y()-2592E6;return x(d,Sl(b,["SWHealthLog"],{mode:"readwrite",W:!0},function(e){return bm(e.objectStore("SWHealthLog"),{},function(f){if(f.la().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Pn(a){var b;return y(function(c){if(1==c.h)return x(c,Nn(a),2);b=c.i;return x(c,b.clear("SWHealthLog"),0)})}
;var Qn={},Rn=0;function Sn(a){var b=new Image,c=""+Rn++;Qn[c]=b;b.onload=b.onerror=function(){delete Qn[c]};
b.src=a}
;function Tn(){this.h=new Map;this.i=!1}
function Un(){if(!Tn.h){var a=C("yt.networkRequestMonitor.instance")||new Tn;B("yt.networkRequestMonitor.instance",a);Tn.h=a}return Tn.h}
Tn.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Tn.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Tn.prototype.removeParams=function(a){return a.split("?")[0]};
Tn.prototype.removeParams=Tn.prototype.removeParams;Tn.prototype.isEndpointCFR=Tn.prototype.isEndpointCFR;Tn.prototype.requestComplete=Tn.prototype.requestComplete;Tn.getInstance=Un;var Vn;function Wn(){Vn||(Vn=new xk("yt.offline"));return Vn}
function Xn(a){if(W("offline_error_handling")){var b=Wn().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Wn().set("errors",b,2592E3,!0)}}
;function Z(){Ke.call(this);var a=this;this.m=!1;this.i=Qe();this.i.Ka("networkstatus-online",function(){if(a.m&&W("offline_error_handling")){var b=Wn().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new pk(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;ej(d)}Wn().set("errors",{},2592E3,!0)}}})}
w(Z,Ke);function Yn(){if(!Z.h){var a=C("yt.networkStatusManager.instance")||new Z;B("yt.networkStatusManager.instance",a);Z.h=a}return Z.h}
q=Z.prototype;q.da=function(){return this.i.da()};
q.Ma=function(a){this.i.i=a};
q.Tc=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
q.Oc=function(){this.m=!0};
q.Ka=function(a,b){return this.i.Ka(a,b)};
q.Db=function(a){a=Oe(this.i,a);a.then(function(b){W("use_cfr_monitor")&&Un().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.Db;Z.prototype.listen=Z.prototype.Ka;Z.prototype.enableErrorFlushing=Z.prototype.Oc;Z.prototype.getWindowStatus=Z.prototype.Tc;Z.prototype.networkStatusHint=Z.prototype.Ma;Z.prototype.isNetworkAvailable=Z.prototype.da;Z.getInstance=Yn;function Zn(a){a=void 0===a?{}:a;Ke.call(this);var b=this;this.i=this.H=0;this.m=Yn();var c=C("yt.networkStatusManager.instance.listen").bind(this.m);c&&(a.Cb?(this.Cb=a.Cb,c("networkstatus-online",function(){$n(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){$n(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Le(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Le(b,"publicytnetworkstatus-offline")})))}
w(Zn,Ke);Zn.prototype.da=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.m)():!0};
Zn.prototype.Ma=function(a){var b=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.m);b&&b(a)};
Zn.prototype.Db=function(a){var b=this,c;return y(function(d){c=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.m);return W("skip_network_check_if_cfr")&&Un().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.Ma((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.da())})):c?d.return(c(a)):d.return(!0)})};
function $n(a,b){a.Cb?a.i?(Re.Qa(a.H),a.H=Re.ka(function(){a.s!==b&&(Le(a,b),a.s=b,a.i=Y())},a.Cb-(Y()-a.i))):(Le(a,b),a.s=b,a.i=Y()):Le(a,b)}
;var ao;function bo(){var a=qn.call;ao||(ao=new Zn({Od:!0,Nd:!0}));a.call(qn,this,{O:{Lc:Jn,Ra:In,hc:Fn,dd:Gn,Tb:Hn,set:Dn},R:ao,handleError:ej,Ta:fj,xa:co,now:Y,Ec:Xn,ia:wk(),Sb:"publicytnetworkstatus-online",Rb:"publicytnetworkstatus-offline",wb:!0,ub:.1,Bb:hj("potential_esf_error_limit",10),L:W,hb:!(qk()&&"www.youtube-nocookie.com"!==Ub(document.location.toString()))});this.j=new Rf;W("networkless_immediately_drop_all_requests")&&Kn();Fm("LogsDatabaseV2")}
w(bo,qn);function eo(){var a=C("yt.networklessRequestController.instance");a||(a=new bo,B("yt.networklessRequestController.instance",a),W("networkless_logging")&&xm().then(function(b){a.I=b;sn(a);a.j.resolve();a.wb&&Math.random()<=a.ub&&a.I&&On(a.I);W("networkless_immediately_drop_sw_health_store")&&fo(a)}));
return a}
bo.prototype.writeThenSend=function(a,b){b||(b={});qk()||(this.h=!1);qn.prototype.writeThenSend.call(this,a,b)};
bo.prototype.sendThenWrite=function(a,b,c){b||(b={});qk()||(this.h=!1);qn.prototype.sendThenWrite.call(this,a,b,c)};
bo.prototype.sendAndWrite=function(a,b){b||(b={});qk()||(this.h=!1);qn.prototype.sendAndWrite.call(this,a,b)};
bo.prototype.awaitInitialization=function(){return this.j.promise};
function fo(a){var b;y(function(c){if(!a.I)throw b=Qk("clearSWHealthLogsDb"),b;return c.return(Pn(a.I).catch(function(d){a.handleError(d)}))})}
function co(a,b,c){W("use_cfr_monitor")&&go(a,b);if(W("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(Y())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)Pj(a,void 0,"POST",e);else if(V("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Pj(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=new bb({url:a});if(g.j&&g.i||
g.m){var h=Tb(a.match(Sb)[5]||null);var k=!(!h||!h.endsWith("/aclk")||"1"!==Zb(a,"ri"));break b}}catch(m){}k=!1}if(k){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var l=!0;break b}}catch(m){}l=!1}c=l?!0:!1}else c=!1;c||Sn(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),hn(a,b.postBody,b,Mj)):hn(a,JSON.stringify(b.postParams),b,Uj):Mj(a,b)}
function go(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Un().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Un().requestComplete(a,!0);d(e,f)}}
;var ho=z.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};B("ytNetworklessLoggingInitializationOptions",ho);function io(a){var b=this;this.config_=null;a?this.config_=a:Tm()&&(this.config_=Um());tk(function(){on(b)},5E3)}
io.prototype.isReady=function(){!this.config_&&Tm()&&(this.config_=Um());return!!this.config_};
function pn(a,b,c,d){function e(v){v=void 0===v?!1:v;var A;if(d.retry&&"www.youtube-nocookie.com"!=h&&(v||W("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(A=mn(b,c,l,k)),A)){var I=g.onSuccess,M=g.onFetchSuccess;g.onSuccess=function(O,va){nn(A);I(O,va)};
c.onFetchSuccess=function(O,va){nn(A);M(O,va)}}try{if(v&&d.retry&&!d.sc.bypassNetworkless)g.method="POST",d.sc.writeThenSend?eo().writeThenSend(p,g):eo().sendAndWrite(p,g);
else if(d.compress)if(g.postBody){var S=g.postBody;"string"!==typeof S&&(S=JSON.stringify(g.postBody));hn(p,S,g,Mj)}else hn(p,JSON.stringify(g.postParams),g,Uj);else W("web_all_payloads_via_jspb")?Mj(p,g):Uj(p,g)}catch(O){if("InvalidAccessError"==O.name)A&&(nn(A),A=0),fj(Error("An extension is blocking network request."));else throw O;}A&&tk(function(){on(a)},5E3)}
!V("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&fj(new pk("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new pk("innertube xhrclient not ready",b,c,d);ej(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(v,A){if(d.onSuccess)d.onSuccess(A)},
onFetchSuccess:function(v){if(d.onSuccess)d.onSuccess(v)},
onError:function(v,A){if(d.onError)d.onError(A)},
onFetchError:function(v){if(d.onError)d.onError(v)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Zc)&&(h=f);var k=a.config_.bd||!1,l=cn(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.Xc+"/"+b,n={alt:"json"},r=a.config_.ad&&f;r=r&&f.startsWith("Bearer");r||(n.key=a.config_.Wc);var p=Bj(""+h+m,n||{},!0);C("ytNetworklessLoggingInitializationOptions")&&
ho.isNwlInitialized?vm().then(function(v){e(v)}):e(!1)}
;function jo(a){this.X=a;this.h=null;this.s=0;this.N=null;this.H=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.m=0;this.Fb=rj(window,"mousemove",Za(this.Gb,this));this.Hb=tj(Za(this.Ga,this),25)}
D(jo,ie);jo.prototype.Gb=function(a){void 0===a.h&&mj(a);var b=a.h;void 0===a.i&&mj(a);this.h=new yd(b,a.i)};
jo.prototype.Ga=function(){if(this.h){var a=Y();if(0!=this.s){var b=this.N,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.s);this.i[this.m]=.5<Math.abs((d-this.H)/this.H)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.X();this.H=d}this.s=a;this.N=this.h;this.m=(this.m+1)%4}};
jo.prototype.Sa=function(){window.clearInterval(this.Hb);pj(this.Fb)};var ko={};
function lo(){var a={},b=void 0===a.kd?!1:a.kd;a=void 0===a.Pc?!0:a.Pc;if(null==C("_lact",window)){var c=parseInt(V("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;B("_lact",c,window);B("_fact",c,window);-1==c&&mo();rj(document,"keydown",mo);rj(document,"keyup",mo);rj(document,"mousedown",mo);rj(document,"mouseup",mo);b?rj(window,"touchmove",function(){no("touchmove",200)},{passive:!0}):(rj(window,"resize",function(){no("resize",200)}),a&&rj(window,"scroll",function(){no("scroll",200)}));
new jo(function(){no("mouse",100)});
rj(document,"touchstart",mo,{passive:!0});rj(document,"touchend",mo,{passive:!0})}}
function no(a,b){ko[a]||(ko[a]=!0,Re.ka(function(){mo();ko[a]=!1},b))}
function mo(){null==C("_lact",window)&&lo();var a=Date.now();B("_lact",a,window);-1==C("_fact",window)&&B("_fact",a,window);(a=C("ytglobal.ytUtilActivityCallback_"))&&a()}
function oo(){var a=C("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var po=z.ytPubsubPubsubInstance||new L,qo=z.ytPubsubPubsubSubscribedKeys||{},ro=z.ytPubsubPubsubTopicToKeys||{},so=z.ytPubsubPubsubIsSynchronous||{};L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.nb;L.prototype.publish=L.prototype.ab;L.prototype.clear=L.prototype.clear;B("ytPubsubPubsubInstance",po);B("ytPubsubPubsubTopicToKeys",ro);B("ytPubsubPubsubIsSynchronous",so);B("ytPubsubPubsubSubscribedKeys",qo);var to=Symbol("injectionDeps");function uo(){this.key=Qm}
function vo(){this.i=new Map;this.h=new Map}
vo.prototype.resolve=function(a){return a instanceof uo?wo(this,a.key,[],!0):wo(this,a,[])};
function wo(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.rd)var e=d.rd;else if(d.qd)e=d[to]?xo(a,d[to],c):[],e=d.qd.apply(d,ka(e));else if(d.pd){e=d.pd;var f=e[to]?xo(a,e[to],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ka(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Ud||a.h.set(b,e);return e}
function xo(a,b,c){return b?b.map(function(d){return d instanceof uo?wo(a,d.key,c,!0):wo(a,d,c)}):[]}
;var yo;function zo(){this.store={};this.h={}}
zo.prototype.storePayload=function(a,b){a=Ao(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
zo.prototype.extractMatchingEntries=function(a){a=Bo(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ka(this.store[a[c]])),delete this.store[a[c]]);return b};
zo.prototype.getSequenceCount=function(a){a=Bo(this,a);for(var b=0,c=0;c<a.length;c++)b+=this.store[a[c]].length||0;return b};
function Bo(a,b){var c=Ao(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&Ao(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Co(b.auth,g[0])){var h=b.isJspb;Co(void 0===h?"undefined":h?"true":"false",g[1])&&Co(b.cttAuthInfo,g[2])&&e.push(d[f])}}return a.h[c]=e}
function Co(a,b){return void 0===a||"undefined"===a?!0:a===b}
zo.prototype.getSequenceCount=zo.prototype.getSequenceCount;zo.prototype.extractMatchingEntries=zo.prototype.extractMatchingEntries;zo.prototype.storePayload=zo.prototype.storePayload;function Ao(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/")}
;var Do=hj("initial_gel_batch_timeout",2E3),Eo=hj("gel_queue_timeout_max_ms",6E4),Fo=Math.pow(2,16)-1,Go=void 0;function Ho(){this.j=this.h=this.i=0}
var Io=new Ho,Jo=new Ho,Ko,Lo=!0,Mo=z.ytLoggingTransportTokensToCttTargetIds_||{};B("ytLoggingTransportTokensToCttTargetIds_",Mo);var No=z.ytLoggingTransportTokensToJspbCttTargetIds_||{};B("ytLoggingTransportTokensToJspbCttTargetIds_",No);var Oo={};function Po(){var a=C("yt.logging.ims");a||(a=new zo,B("yt.logging.ims",a));return a}
function Qo(a,b){W("web_all_payloads_via_jspb")&&fj(new pk("transport.log called for JSON in JSPB only experiment"));if("log_event"===a.endpoint){Ro(a);var c=So(a);Oo[c]=!0;var d={cttAuthInfo:c,isJspb:!1};Po().storePayload(d,a.payload);To(b,c,!1,d)}}
function Uo(a,b){if("log_event"===a.endpoint){Ro(void 0,a);var c=So(a,!0);Oo[c]=!0;var d={cttAuthInfo:c,isJspb:!0};Po().storePayload(d,a.payload.toJSON());To(b,c,!0,d)}}
function To(a,b,c,d){c=void 0===c?!1:c;a&&(Go=new a);a=hj("tvhtml5_logging_max_batch_ads_fork")||hj("tvhtml5_logging_max_batch")||hj("web_logging_max_batch")||100;var e=Y(),f=c?Jo.j:Io.j,g=0;d&&(g=Po().getSequenceCount(d));g>=a?Ko||(Ko=Vo(function(){Wo({writeThenSend:!0},W("flush_only_full_queue")?b:void 0,c);Ko=void 0},0)):10<=e-f&&(Xo(c),c?Jo.j=e:Io.j=e)}
function Yo(a,b){W("web_all_payloads_via_jspb")&&fj(new pk("transport.logIsolatedGelPayload called in JSPB only experiment"));if("log_event"===a.endpoint){Ro(a);var c=So(a),d=new Map;d.set(c,[a.payload]);b&&(Go=new b);return new Sf(function(e,f){Go&&Go.isReady()?Zo(d,Go,e,f,{bypassNetworkless:!0},!0):e()})}}
function $o(a,b){if("log_event"===a.endpoint){Ro(void 0,a);var c=So(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(Go=new b);return new Sf(function(e){Go&&Go.isReady()?ap(d,Go,e,{bypassNetworkless:!0},!0):e()})}}
function So(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Si;c.videoId?Zc(d,1,kd,c.videoId):c.playlistId&&Zc(d,2,kd,c.playlistId);No[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Mo[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Wo(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;!c&&W("web_all_payloads_via_jspb")&&fj(new pk("transport.flushLogs called for JSON in JSPB only experiment"));new Sf(function(d,e){c?(bp(Jo.i),bp(Jo.h),Jo.h=0):(bp(Io.i),bp(Io.h),Io.h=0);if(Go&&Go.isReady()){var f=a,g=c,h=Go;f=void 0===f?{}:f;g=void 0===g?!1:g;var k=new Map,l=new Map;if(void 0!==b)g?(e=Po().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),k.set(b,e),ap(k,h,d,f)):(k=Po().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),l.set(b,
k),Zo(l,h,d,e,f));else if(g){e=u(Object.keys(Oo));for(g=e.next();!g.done;g=e.next())l=g.value,g=Po().extractMatchingEntries({isJspb:!0,cttAuthInfo:l}),0<g.length&&k.set(l,g),delete Oo[l];ap(k,h,d,f)}else{k=u(Object.keys(Oo));for(g=k.next();!g.done;g=k.next()){g=g.value;var m=Po().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<m.length&&l.set(g,m);delete Oo[g]}Zo(l,h,d,e,f)}}else Xo(c),d()})}
function Xo(a){a=void 0===a?!1:a;if(W("web_gel_timeout_cap")&&(!a&&!Io.h||a&&!Jo.h)){var b=Vo(function(){Wo({writeThenSend:!0},void 0,a)},Eo);
a?Jo.h=b:Io.h=b}bp(a?Jo.i:Io.i);b=V("LOGGING_BATCH_TIMEOUT",hj("web_gel_debounce_ms",1E4));W("shorten_initial_gel_batch_timeout")&&Lo&&(b=Do);b=Vo(function(){Wo({writeThenSend:!0},void 0,a)},b);
a?Jo.i=b:Io.i=b}
function Zo(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(Y()),h=a.size,k={};a=u(a);for(var l=a.next();!l.done;k={ob:k.ob,Fa:k.Fa,cb:k.cb,qb:k.qb,pb:k.pb},l=a.next()){var m=u(l.value);l=m.next().value;m=m.next().value;k.Fa=qb({context:Vm(b.config_||Um())});if(!Qa(m)&&!W("throw_err_when_logevent_malformed_killswitch")){d();break}k.Fa.events=m;(m=Mo[l])&&cp(k.Fa,l,m);delete Mo[l];k.cb="visitorOnlyApprovedKey"===l;dp(k.Fa,g,k.cb);ep(e);k.qb=function(n){W("update_log_event_config")&&Re.ka(function(){return y(function(r){return x(r,
fp(n),0)})});
h--;h||c()};
k.ob=0;k.pb=function(n){return function(){n.ob++;if(e.bypassNetworkless&&1===n.ob)try{pn(b,"log_event",n.Fa,gp({writeThenSend:!0},n.cb,n.qb,n.pb,f)),Lo=!1}catch(r){ej(r),d()}h--;h||c()}}(k);
try{pn(b,"log_event",k.Fa,gp(e,k.cb,k.qb,k.pb,f)),Lo=!1}catch(n){ej(n),d()}}}
function ap(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(Y()),g=a.size,h=new Map([].concat(ka(a)));h=u(h);for(var k=h.next();!k.done;k=h.next()){var l=u(k.value).next().value,m=a.get(l);k=new Ti;var n=bn(b.config_||Um());J(k,yi,1,n);m=m?hp(m):[];m=u(m);for(n=m.next();!n.done;n=m.next())hd(k,3,Pi,n.value);(m=No[l])&&ip(k,l,m);delete No[l];l="visitorOnlyApprovedKey"===l;jp(k,f,l);ep(d);k=vd(k);l=gp(d,l,function(r){W("update_log_event_config")&&Re.ka(function(){return y(function(p){return x(p,fp(r),
0)})});
g--;g||c()},function(){g--;
g||c()},e);
l.headers["Content-Type"]="application/json+protobuf";l.postBodyFormat="JSPB";l.postBody=k;pn(b,"log_event","",l);Lo=!1}}
function ep(a){W("always_send_and_write")&&(a.writeThenSend=!1)}
function gp(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,sc:a,dangerousLogToVisitorSession:b,Md:!!e,headers:{},postBodyFormat:"",postBody:"",compress:W("compress_gel")};kp()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));return a}
function dp(a,b,c){kp()||(a.requestTimeMs=String(b));W("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=V("EVENT_ID"))&&(c=lp(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function jp(a,b,c){kp()||H(a,2,b);if(!c&&(b=V("EVENT_ID"))){c=lp();var d=new Ri;H(d,1,b);H(d,2,c);J(a,Ri,5,d)}}
function lp(){var a=V("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Fo/2));a++;a>Fo&&(a=1);Zi("BATCH_CLIENT_COUNTER",a);return a}
function cp(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function ip(a,b,c){if(jd(c,1))var d=1;else if(c.getPlaylistId())d=2;else return;J(a,Si,4,c);a=ad(a,yi,1)||new yi;c=ad(a,wi,3)||new wi;var e=new vi;H(e,2,b);H(e,1,d);hd(c,12,vi,e);J(a,wi,3,c)}
function hp(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new Pi(a[c]))}catch(d){ej(new pk("Transport failed to deserialize "+String(a[c])))}return b}
function Ro(a,b){if(C("yt.logging.transport.enableScrapingForTest")){var c=C("yt.logging.transport.scrapedPayloadsForTesting"),d=C("yt.logging.transport.payloadToScrape","");b&&(b=C("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);B("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function kp(){return W("use_request_time_ms_header")||W("lr_use_request_time_ms_header")}
function Vo(a,b){return W("transport_use_scheduler")?tk(a,b):sj(a,b)}
function bp(a){W("transport_use_scheduler")?Re.Qa(a):window.clearTimeout(a)}
function fp(a){var b,c,d,e,f,g,h,k,l,m;return y(function(n){if(1==n.h){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var r=d?d[ii.name]:void 0;e=r;g=null==(f=d)?void 0:f.hotHashData;r=d?d[hi.name]:void 0;h=r;l=null==(k=d)?void 0:k.coldHashData;yo||(yo=new vo);r=yo;return(m=r.resolve.call(r,new uo))?g?e?x(n,Rm(m,g,e),2):x(n,Rm(m,g),2):n.D(2):n.return()}return l?h?x(n,Sm(m,l,h),0):x(n,Sm(m,l),0):n.D(0)})}
;var mp=z.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",mp);function np(a){Wo(void 0,void 0,void 0===a?!1:a)}
function op(a){mp[a]=a in mp?mp[a]+1:0;return mp[a]}
;var pp=[];
function qp(a,b){var c=void 0===c?{}:c;var d=io;V("ytLoggingEventsDefaultDisabled",!1)&&io===io&&(d=null);if(W("web_all_payloads_via_jspb"))pp.push({Sd:a,payload:b,options:c});else{c=void 0===c?{}:c;var e={},f=Math.round(c.timestamp||Y());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;W("enable_unknown_lact_fix_on_html5")&&lo();a=oo();e.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};W("log_sequence_info_on_gel_web")&&c.sequenceGroup&&(a=e.context,b=c.sequenceGroup,b={index:op(b),
groupKey:b},a.sequence=b,c.endOfSequence&&delete mp[c.sequenceGroup]);(c.sendIsolatedPayload?Yo:Qo)({endpoint:"log_event",payload:e,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},d)}}
;var rp=z.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",rp);function sp(a){var b=void 0;b=void 0===b?{}:b;var c=!1;V("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);c=c?null:io;b=void 0===b?{}:b;var d=Math.round(b.timestamp||Y());H(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=oo();d=new Oi;H(d,1,b.timestamp||!isFinite(e)?-1:e);if(W("log_sequence_info_on_gel_web")&&b.sequenceGroup){e=b.sequenceGroup;var f=op(e),g=new Ni;H(g,2,f);H(g,1,e);J(d,Ni,3,g);b.endOfSequence&&delete rp[b.sequenceGroup]}J(a,Oi,33,d);(b.sendIsolatedPayload?$o:Uo)({endpoint:"log_event",payload:a,
cttAuthInfo:b.cttAuthInfo,dangerousLogToVisitorSession:b.dangerousLogToVisitorSession},c)}
;var tp=new Set,up=0,vp=0,wp=0,xp=[],yp=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function zp(){for(var a=u(yp),b=a.next();!b.done;b=a.next()){var c=Nb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
;function Ap(){var a;return y(function(b){return(a=lf())?b.return(a.then(function(c){c=vd(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return zc(d,3)})):b.return(Promise.resolve(null))})}
;var Bp={};function Cp(a){return Bp[a]||(Bp[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Dp={},Ep=[],ig=new L,Fp={};function Gp(){for(var a=u(Ep),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Hp(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Cp(b)]:a.getAttribute("data-"+b):null;return c}
function Ip(a){ig.ab.apply(ig,arguments)}
;function Jp(a){this.h=a||{};a=[this.h,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Kp(a,b){a=[a.h,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Lp(a,b,c){Mp||(Mp={},rj(window,"message",function(d){a:{if(d.origin===Kp(a,"host")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}if(d=Mp[e.id])d.H=!0,d.H&&(E(d.s,d.sendMessage,d),d.s.length=0),d.Xb(e)}e=void 0}return e}));
Mp[c]=b}
var Mp=null;var Np=window;
function Op(a,b,c){this.v=this.h=this.i=null;this.j=0;this.H=!1;this.s=[];this.m=null;this.X={};if(!a)throw Error("YouTube player element ID required.");this.id=Sa(this);this.N=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Vb(a.src):"https://www.youtube.com"),this.i=new Jp(b),c||(b=Pp(this,a),this.v=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.h=a,this.h.id||(this.h.id="widget"+Sa(this.h)),Dp[this.h.id]=this,window.postMessage){this.m=
new L;Qp(this);b=Kp(this.i,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Fp)Fp.hasOwnProperty(e)&&Rp(this,e)}}
q=Op.prototype;q.setSize=function(a,b){this.h.width=a.toString();this.h.height=b.toString();return this};
q.getIframe=function(){return this.h};
q.Xb=function(a){Sp(this,a.event,a)};
q.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.m.subscribe(a,c);Tp(this,a);return this};
function Rp(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.N===b[0]&&Tp(a,c)}}
q.destroy=function(){this.h&&this.h.id&&(Dp[this.h.id]=null);var a=this.m;a&&"function"==typeof a.dispose&&a.dispose();if(this.v){a=this.h;var b=a.parentNode;b&&b.replaceChild(this.v,a)}else(a=this.h)&&a.parentNode&&a.parentNode.removeChild(a);Mp&&(Mp[this.id]=null);this.i=null;a=this.h;for(var c in ob)ob[c][0]==a&&pj(c);this.v=this.h=null};
q.cc=function(){return{}};
function Up(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.H?a.sendMessage(b):a.s.push(b)}
function Sp(a,b,c){a.m.j||(c={target:a,data:c},a.m.ab(b,c),Ip(a.N+"."+b,c))}
function Pp(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");c.setAttribute("title","YouTube "+Kp(a.i,"title"));(b=Kp(a.i,"width"))&&c.setAttribute("width",b.toString());(b=Kp(a.i,"height"))&&
c.setAttribute("height",b.toString());var g=a.cc();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&E(["debugjs","debugcss"],function(k){var l=Zb(window.location.href,k);null!==l&&(g[k]=l)});
var h=""+Kp(a.i,"host")+("/embed/"+Kp(a.i,"videoId"))+"?"+Xb(g);Np.yt_embedsEnableUaChProbe?Ap().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=Md(l.href).toString();Id(c,Nd(k));c.sandbox.add("allow-presentation","allow-top-navigation");return k}):Np.yt_embedsEnableIframeSrcWithIntent?(Id(c,Nd(h)),
c.sandbox.add("allow-presentation","allow-top-navigation")):c.src=h;
return c}
q.uc=function(){this.h&&this.h.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.j)};
function Qp(a){Lp(a.i,a,a.id);a.j=tj(a.uc.bind(a),250);rj(a.h,"load",function(){window.clearInterval(a.j);a.j=tj(a.uc.bind(a),250)})}
function Tp(a,b){a.X[b]||(a.X[b]=!0,Up(a,"addEventListener",[b]))}
q.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[Vb(this.h.src||"").replace("http:","https:")];if(this.h.contentWindow)for(var d=0;d<c.length;d++)try{this.h.contentWindow.postMessage(b,c[d])}catch(jc){if(jc.name&&"SyntaxError"===jc.name){if(!(jc.message&&0<jc.message.indexOf("target origin ''"))){var e=void 0,f=jc;e=void 0===e?{}:e;e.name=V("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=V("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=e||{},h="WARNING";h=void 0===h?"ERROR":
h;if(f){f.hasOwnProperty("level")&&f.level&&(h=f.level);if(W("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=up)){var m=void 0,n=void 0,r=f,p=g,v=Cd(r),A=v.message||"Unknown Error",I=v.name||"UnknownError",
M=v.stack||r.i||"Not available";if(M.startsWith(I+": "+A)){var S=M.split("\n");S.shift();M=S.join("\n")}var O=v.lineNumber||"Not available",va=v.fileName||"Not available",Nc=M,Ia=0;if(r.hasOwnProperty("args")&&r.args&&r.args.length)for(var wa=0;wa<r.args.length&&!(Ia=fk(r.args[wa],"params."+wa,p,Ia),500<=Ia);wa++);else if(r.hasOwnProperty("params")&&r.params){var ba=r.params;if("object"===typeof r.params)for(n in ba){if(ba[n]){var ha="params."+n,ia=hk(ba[n]);p[ha]=ia;Ia+=ha.length+ia.length;if(500<
Ia)break}}else p.params=hk(ba)}if(xp.length)for(var aa=0;aa<xp.length&&!(Ia=fk(xp[aa],"params.context."+aa,p,Ia),500<=Ia);aa++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var U={message:A,name:I,lineNumber:O,fileName:va,stack:Nc,params:p,sampleWeight:1},cl=Number(r.columnNumber);isNaN(cl)||(U.lineNumber=U.lineNumber+":"+cl);if("IGNORED"===r.level)m=0;else a:{for(var dl=bk(),el=u(dl.Ba),Hg=el.next();!Hg.done;Hg=el.next()){var fl=Hg.value;if(U.message&&U.message.match(fl.Pd)){m=
fl.weight;break a}}for(var gl=u(dl.ya),Ig=gl.next();!Ig.done;Ig=gl.next()){var hl=Ig.value;if(hl.Kc(U)){m=hl.weight;break a}}m=1}U.sampleWeight=m;for(var il=u(Wj),Jg=il.next();!Jg.done;Jg=il.next()){var Kg=Jg.value;if(Kg.Ab[U.name])for(var jl=u(Kg.Ab[U.name]),Lg=jl.next();!Lg.done;Lg=jl.next()){var kl=Lg.value,oe=U.message.match(kl.regexp);if(oe){U.params["params.error.original"]=oe[0];for(var Mg=kl.groups,ll={},kc=0;kc<Mg.length;kc++)ll[Mg[kc]]=oe[kc+1],U.params["params.error."+Mg[kc]]=oe[kc+1];
U.message=Kg.Pb(ll);break}}}U.params||(U.params={});var ml=bk();U.params["params.errorServiceSignature"]="msg="+ml.Ba.length+"&cb="+ml.ya.length;U.params["params.serviceWorker"]="false";z.document&&z.document.querySelectorAll&&(U.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));vb("sample").constructor!==ub&&(U.params["params.fconst"]="true");var za=U;window.yterr&&"function"===typeof window.yterr&&window.yterr(za);if(0!==za.sampleWeight&&!tp.has(za.message)){if("ERROR"===
h){ck.ab("handleError",za);if(W("record_app_crashed_web")&&0===wp&&1===za.sampleWeight)if(wp++,W("errors_via_jspb")){var Ng=new Mi;H(Ng,1,1);if(!W("report_client_error_with_app_crash_ks")){var nl=new Hi;H(nl,1,za.message);var ol=new Ii;J(ol,Hi,3,nl);var pl=new Ji;J(pl,Ii,5,ol);var ql=new Ki;J(ql,Ji,9,pl);J(Ng,Ki,4,ql)}var $p=Ng,rl=new Pi;cd(rl,Mi,20,Qi,$p);sp(rl)}else{var sl={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};W("report_client_error_with_app_crash_ks")||(sl.systemHealth={crashData:{clientError:{logMessage:{message:za.message}}}});
qp("appCrashed",sl)}vp++}else"WARNING"===h&&ck.ab("handleWarning",za);if(W("kevlar_gel_error_routing"))a:{var Og=void 0,Pg=void 0,ed=h,R=za;if(W("errors_via_jspb")){if(zp())Pg=void 0;else{var lc=new Ei;H(lc,1,R.stack);R.fileName&&H(lc,4,R.fileName);var Wa=R.lineNumber&&R.lineNumber.split?R.lineNumber.split(":"):[];0!==Wa.length&&(1!==Wa.length||isNaN(Number(Wa[0]))?2!==Wa.length||isNaN(Number(Wa[0]))||isNaN(Number(Wa[1]))||(H(lc,2,Number(Wa[0])),H(lc,3,Number(Wa[1]))):H(lc,2,Number(Wa[0])));var Gb=
new Hi;H(Gb,1,R.message);H(Gb,3,R.name);H(Gb,6,R.sampleWeight);"ERROR"===ed?H(Gb,2,2):"WARNING"===ed?H(Gb,2,1):H(Gb,2,0);var Qg=new Fi;H(Qg,1,!0);cd(Qg,Ei,3,Gi,lc);var Hb=new Ci;H(Hb,3,window.location.href);for(var tl=V("FEXP_EXPERIMENTS",[]),Rg=0;Rg<tl.length;Rg++){var ul=Hb,aq=tl[Rg];Qc(ul);Yc(ul,5,2,!1).push(aq)}var Sg=$i();if(!aj()&&Sg)for(var vl=u(Object.keys(Sg)),Ib=vl.next();!Ib.done;Ib=vl.next()){var wl=Ib.value,Tg=new Bi;H(Tg,1,wl);H(Tg,2,String(Sg[wl]));hd(Hb,4,Bi,Tg)}var Ug=R.params;if(Ug){var xl=
u(Object.keys(Ug));for(Ib=xl.next();!Ib.done;Ib=xl.next()){var yl=Ib.value,Vg=new Bi;H(Vg,1,"client."+yl);H(Vg,2,String(Ug[yl]));hd(Hb,4,Bi,Vg)}}var zl=V("SERVER_NAME"),Al=V("SERVER_VERSION");if(zl&&Al){var Wg=new Bi;H(Wg,1,"server.name");H(Wg,2,zl);hd(Hb,4,Bi,Wg);var Xg=new Bi;H(Xg,1,"server.version");H(Xg,2,Al);hd(Hb,4,Bi,Xg)}var pe=new Ii;J(pe,Ci,1,Hb);J(pe,Fi,2,Qg);J(pe,Hi,3,Gb);Pg=pe}var Bl=Pg;if(!Bl)break a;var Cl=new Pi;cd(Cl,Ii,163,Qi,Bl);sp(Cl)}else{if(zp())Og=void 0;else{var fd={stackTrace:R.stack};
R.fileName&&(fd.filename=R.fileName);var Xa=R.lineNumber&&R.lineNumber.split?R.lineNumber.split(":"):[];0!==Xa.length&&(1!==Xa.length||isNaN(Number(Xa[0]))?2!==Xa.length||isNaN(Number(Xa[0]))||isNaN(Number(Xa[1]))||(fd.lineNumber=Number(Xa[0]),fd.columnNumber=Number(Xa[1])):fd.lineNumber=Number(Xa[0]));var Yg={level:"ERROR_LEVEL_UNKNOWN",message:R.message,errorClassName:R.name,sampleWeight:R.sampleWeight};"ERROR"===ed?Yg.level="ERROR_LEVEL_ERROR":"WARNING"===ed&&(Yg.level="ERROR_LEVEL_WARNNING");
var bq={isObfuscated:!0,browserStackInfo:fd},mc={pageUrl:window.location.href,kvPairs:[]};V("FEXP_EXPERIMENTS")&&(mc.experimentIds=V("FEXP_EXPERIMENTS"));var Zg=$i();if(!aj()&&Zg)for(var Dl=u(Object.keys(Zg)),Jb=Dl.next();!Jb.done;Jb=Dl.next()){var El=Jb.value;mc.kvPairs.push({key:El,value:String(Zg[El])})}var $g=R.params;if($g){var Fl=u(Object.keys($g));for(Jb=Fl.next();!Jb.done;Jb=Fl.next()){var Gl=Jb.value;mc.kvPairs.push({key:"client."+Gl,value:String($g[Gl])})}}var Hl=V("SERVER_NAME"),Il=V("SERVER_VERSION");
Hl&&Il&&(mc.kvPairs.push({key:"server.name",value:Hl}),mc.kvPairs.push({key:"server.version",value:Il}));Og={errorMetadata:mc,stackTrace:bq,logMessage:Yg}}var Jl=Og;if(!Jl)break a;qp("clientError",Jl)}if("ERROR"===ed||W("errors_flush_gel_always_killswitch"))b:{if(W("web_fp_via_jspb")&&(np(!0),!W("web_fp_via_jspb_and_json")))break b;np()}}if(!W("suppress_error_204_logging")){var Kb=za,gd=Kb.params||{},mb={urlParams:{a:"logerror",t:"jserror",type:Kb.name,msg:Kb.message.substr(0,250),line:Kb.lineNumber,
level:h,"client.name":gd.name},postParams:{url:V("PAGE_NAME",window.location.href),file:Kb.fileName},method:"POST"};gd.version&&(mb["client.version"]=gd.version);if(mb.postParams){Kb.stack&&(mb.postParams.stack=Kb.stack);for(var Kl=u(Object.keys(gd)),ah=Kl.next();!ah.done;ah=Kl.next()){var Ll=ah.value;mb.postParams["client."+Ll]=gd[Ll]}var bh=$i();if(bh)for(var Ml=u(Object.keys(bh)),ch=Ml.next();!ch.done;ch=Ml.next()){var Nl=ch.value;mb.postParams[Nl]=bh[Nl]}var Ol=V("SERVER_NAME"),Pl=V("SERVER_VERSION");
Ol&&Pl&&(mb.postParams["server.name"]=Ol,mb.postParams["server.version"]=Pl)}Mj(V("ECATCHER_REPORT_HOST","")+"/error_204",mb)}try{tp.add(za.message)}catch(gq){}up++}}}}}else throw jc;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Vp(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Wp(a){return 0===a.search("get")||0===a.search("is")}
;function Xp(a,b){Op.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.na={};this.playerInfo={};this.videoTitle=""}
w(Xp,Op);q=Xp.prototype;q.cc=function(){var a=Kp(this.i,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Kp(this.i,"embedConfig")){if(Ra(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
q.Xb=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Ra(a))for(var c in a)a.hasOwnProperty(c)&&(this.na[c]=a[c]);break;case "infoDelivery":Yp(this,a);break;case "initialDelivery":Ra(a)&&(window.clearInterval(this.j),this.playerInfo={},this.na={},Zp(this,a.apiInterface),Yp(this,a));break;default:Sp(this,b,a)}};
function Yp(a,b){if(Ra(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.h.setAttribute("title",b))):(a.videoTitle="",a.h.setAttribute("title","YouTube "+Kp(a.i,"title"))))}}
function Zp(a,b){E(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Vp(c)?this[c]=function(){this.playerInfo={};
this.na={};Up(this,c,arguments);return this}:Wp(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Up(this,c,arguments);
return this})},a)}
q.getVideoEmbedCode=function(){var a=Kp(this.i,"host")+("/embed/"+Kp(this.i,"videoId")),b=Number(Kp(this.i,"width")),c=Number(Kp(this.i,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=Rb(a);d=Rb(null!=d?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')};
q.getOptions=function(a){return this.na.namespaces?a?this.na[a]?this.na[a].options||[]:[]:this.na.namespaces||[]:[]};
q.getOption=function(a,b){if(this.na.namespaces&&a&&b&&this.na[a])return this.na[a][b]};
function cq(a){if("iframe"!==a.tagName.toLowerCase()){var b=Hp(a,"videoid");b&&(b={videoId:b,width:Hp(a,"width"),height:Hp(a,"height")},new Xp(a,b))}}
;B("YT.PlayerState.UNSTARTED",-1);B("YT.PlayerState.ENDED",0);B("YT.PlayerState.PLAYING",1);B("YT.PlayerState.PAUSED",2);B("YT.PlayerState.BUFFERING",3);B("YT.PlayerState.CUED",5);B("YT.get",function(a){return Dp[a]});
B("YT.scan",Gp);B("YT.subscribe",function(a,b,c){ig.subscribe(a,b,c);Fp[a]=!0;for(var d in Dp)Dp.hasOwnProperty(d)&&Rp(Dp[d],a)});
B("YT.unsubscribe",function(a,b,c){hg(a,b,c)});
B("YT.Player",Xp);Op.prototype.destroy=Op.prototype.destroy;Op.prototype.setSize=Op.prototype.setSize;Op.prototype.getIframe=Op.prototype.getIframe;Op.prototype.addEventListener=Op.prototype.addEventListener;Xp.prototype.getVideoEmbedCode=Xp.prototype.getVideoEmbedCode;Xp.prototype.getOptions=Xp.prototype.getOptions;Xp.prototype.getOption=Xp.prototype.getOption;
Ep.push(function(a){var b=a;b||(b=document);a=jb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=eb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=jb(b);E(ib(a,b),cq)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Gp();var dq=z.onYTReady;dq&&dq();var eq=z.onYouTubeIframeAPIReady;eq&&eq();var fq=z.onYouTubePlayerAPIReady;fq&&fq();}).call(this);
