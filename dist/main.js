!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist",n(n.s=0)}([function(e,t){const n=document.querySelectorAll(".image-selector"),r=document.querySelector("#main-container"),o=document.querySelector("#wide-image-container");let a=setInterval(c,5e3);function c(){const e=document.querySelector(".selected-image-selector");let t=parseInt(e.getAttribute("data-number"))+1;t>n.length&&(t=1),i(document.querySelector(`.image-selector-${t}`))}function i(e){n.forEach(e=>e.classList.remove("selected-image-selector")),e.classList.add("selected-image-selector"),function(e){const t=e.getAttribute("data-orientation");r.className="",o.className="","landscape"==t?r.classList.add("main-container-landscape"):r.classList.add("main-container-portrait"),o.classList.add(`image-view-${e.getAttribute("data-number")}`)}(e)}function u(){i(this)}function l(){a=setInterval(c,5e3)}function s(){clearInterval(a)}n.forEach(e=>e.addEventListener("click",u)),n.forEach(e=>e.addEventListener("mouseenter",s)),n.forEach(e=>e.addEventListener("mouseout",l))}]);