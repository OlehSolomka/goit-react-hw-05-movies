(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[223],{7757:function(t,n,r){t.exports=r(9727)},9031:function(t,n,r){"use strict";r.d(n,{Z:function(){return f}});var e=r(1523),o=r(2315),i="MovieList_list__yjDCC",c="MovieList_link__+cn-g",u="MovieList_image__FfCvJ",a="MovieList_item__tDivI",s=r(184);function f(t){var n=t.movies;return(0,s.jsx)(s.Fragment,{children:n&&(0,s.jsx)("ul",{className:i,children:n.map((function(t){return(0,s.jsx)("li",{className:a,children:(0,s.jsxs)(e.rU,{to:"movies/".concat(t.id),className:c,children:[(0,s.jsx)("h3",{children:t.title}),(0,s.jsx)("img",{className:u,src:t.poster_path?"https://image.tmdb.org/t/p/w200".concat(t.poster_path):o,alt:t.title,width:"200px"})]})},t.id)}))})})}},680:function(t,n,r){"use strict";r.r(n);var e=r(8152),o=r(2791),i=r(56),c=r(9031),u=r(184);n.default=function(){var t=(0,o.useState)(""),n=(0,e.Z)(t,2),r=n[0],a=n[1];return(0,o.useEffect)((function(){i.KS().then(a)}),[]),(0,u.jsx)(u.Fragment,{children:r&&(0,u.jsx)(c.Z,{movies:r.results})})}},56:function(t,n,r){"use strict";function e(t,n,r,e,o,i,c){try{var u=t[i](c),a=u.value}catch(s){return void r(s)}u.done?n(a):Promise.resolve(a).then(e,o)}function o(t){return function(){var n=this,r=arguments;return new Promise((function(o,i){var c=t.apply(n,r);function u(t){e(c,o,i,u,a,"next",t)}function a(t){e(c,o,i,u,a,"throw",t)}u(void 0)}))}}r.d(n,{uM:function(){return v},VQ:function(){return d},k5:function(){return m},Bt:function(){return h},KS:function(){return l}});var i=r(7757),c=r.n(i),u="?api_key=f13d574bf8d052eda50f9ad2f6a4d7c7",a="https://api.themoviedb.org/3";function s(){return f.apply(this,arguments)}function f(){return f=o(c().mark((function t(){var n,r,e=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:"",t.next=3,fetch(n);case 3:return r=t.sent,t.abrupt("return",r.ok?r.json():Promise.reject(new Error("404 Not Found")));case 5:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}function l(){return s("".concat(a,"/trending/movie/day").concat(u))}function d(t){return s("".concat(a,"/movie/").concat(t).concat(u))}function v(t){return s("".concat(a,"/movie/").concat(t,"/credits").concat(u))}function h(t){return s("".concat(a,"/movie/").concat(t,"/reviews").concat(u))}function m(t){return s("".concat(a,"/search/movie").concat(u,"&query=").concat(t))}},2315:function(t,n,r){"use strict";t.exports=r.p+"static/media/backup.5ee7b37bd19fd9f63307.jpg"},8152:function(t,n,r){"use strict";function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var e,o,i=[],c=!0,u=!1;try{for(r=r.call(t);!(c=(e=r.next()).done)&&(i.push(e.value),!n||i.length!==n);c=!0);}catch(a){u=!0,o=a}finally{try{c||null==r.return||r.return()}finally{if(u)throw o}}return i}}(t,n)||function(t,n){if(t){if("string"===typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(n,{Z:function(){return o}})}}]);
//# sourceMappingURL=home-page.b0809751.chunk.js.map