(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var c="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},d;if("function"==typeof Object.setPrototypeOf)d=Object.setPrototypeOf;else{var e;a:{var f={a:!0},g={};try{g.__proto__=f;e=g.a;break a}catch(a){}e=!1}d=e?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var h=d,l=this||self;function m(a,b){this.m=a===p&&b||"";this.o=q}m.prototype.i=!0;m.prototype.h=function(){return this.m};var q={},p={};var r=new m(p,"_newtab");function t(a,b){this.g=b===u?a:""}t.prototype.toString=function(){return this.g.toString()};t.prototype.i=!0;t.prototype.h=function(){return this.g.toString()};var v=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,u={};function w(){var a=HTMLElement.call(this)||this;a.i=!1;a.l=a.s.bind(a);a.h=null;a.j=null;return a}var x=HTMLElement;w.prototype=c(x.prototype);w.prototype.constructor=w;if(h)h(w,x);else for(var y in x)if("prototype"!=y)if(Object.defineProperties){var z=Object.getOwnPropertyDescriptor(x,y);z&&Object.defineProperty(w,y,z)}else w[y]=x[y];
w.prototype.connectedCallback=function(){var a=this;this.i||(document.body.style.opacity="0");setTimeout(function(){a.g=a.querySelector("gwd-pagedeck");a.h=document.querySelector("gwd-responsive-attributes-helper");a.h&&a.h.applyOverrides();window.addEventListener("resize",a.l,!1)},1)};w.prototype.disconnectedCallback=function(){window.removeEventListener("resize",this.l,!1)};
w.prototype.initAd=function(){this.i=!0;document.body.style.opacity="";var a=void 0===a?null:a;var b=document.createEvent("CustomEvent");b.initCustomEvent("adinitialized",!0,!0,a);this.dispatchEvent(b);this.goToPage()};w.prototype.goToPage=function(a,b,n,k,A){if(a=void 0!=a?this.g.getPage(a):this.g.getDefaultPage())a=this.g.getOrientationSpecificPage(window.innerHeight>=window.innerWidth?1:2,a.id),void 0!=b?this.g.goToPage(a.id,b,n,k,A):this.g.goToPage(a.id)};
w.prototype.s=function(){this.i&&this.h&&this.h.applyOverrides();var a=window.innerHeight>=window.innerWidth?1:2;this.j!=a&&(this.j=a,(a=this.g.getPage(Number(this.g.currentIndex)))&&this.goToPage(a.id))};
w.prototype.exit=function(a,b,n){b=void 0===b?!1:b;a instanceof t||a instanceof t||(a="object"==typeof a&&a.i?a.h():String(a),v.test(a)||(a="about:invalid#zClosurez"),a=new t(a,u));var k;r instanceof m?k=r instanceof m&&r.constructor===m&&r.o===q?r.m:"type_error:Const":k=r||"";l.open(a instanceof t&&a.constructor===t?a.g:"type_error:SafeUrl",k);b&&this.goToPage(n)};customElements.define("gwd-genericad",w);/*

 SPDX-License-Identifier: Apache-2.0
*/
}).call(this);
