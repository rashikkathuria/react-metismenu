!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.ReactMetismenu=t(require("react")):e.ReactMetismenu=t(e.React)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=r(i);n(5),t["default"]=o["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(2),c=r(u),l=n(3),f=r(l),p=function(e){function t(){return i(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return s(t,e),a(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:"metismenu"},c["default"].createElement(f["default"],{className:"metismenu",iconClassPrefix:this.props.iconClassPrefix||"fa fa-",iconLevelDown:this.props.iconLevelDown||"caret-left",iconLevelUp:this.props.iconLevelUp||"caret-down",content:this.props.content||[]}))}}]),t}(u.Component);t["default"]=p},function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),l=r(c),f=n(4),p=r(f),d=function(e){function t(){return i(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return s(t,e),u(t,[{key:"closeChildContainers",value:function(e){for(var t in this.refs)t!=e&&this.refs[t].closeContainer()}},{key:"render",value:function(){var e=this,t="metismenu-container";return this.props.visible&&(t+=" visible"),l["default"].createElement("ul",{className:t},this.props.content.map(function(t,n){return l["default"].createElement(p["default"],a({key:n,ref:n,closeFriendContainers:e.closeChildContainers.bind(e,n),iconClassPrefix:e.props.iconClassPrefix,iconLevelDown:e.props.iconLevelDown,iconLevelUp:e.props.iconLevelUp},t))}))}}]),t}(c.Component);t["default"]=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(2),c=r(u),l=n(3),f=r(l),p=function(e){function t(){i(this,t);var e=o(this,Object.getPrototypeOf(t).apply(this,arguments));return e.state={containerVisibility:!1},e}return s(t,e),a(t,[{key:"hasLevel",value:function(){return"undefined"!=typeof this.props.content}},{key:"isContainerClosed",value:function(){return!this.state.containerVisibility}},{key:"openContainer",value:function(){this.props.closeFriendContainers(),this.setState({containerVisibility:!0})}},{key:"closeContainer",value:function(){this.hasLevel()&&this.refs.container.closeChildContainers(),this.setState({containerVisibility:!1})}},{key:"toggleContainer",value:function(){this.isContainerClosed()?this.openContainer():this.closeContainer()}},{key:"render",value:function(){var e=this.hasLevel(),t="metismenu-icon "+this.props.iconClassPrefix+this.props.icon;if(e)var n="javascript:void(0);",r=this.toggleContainer.bind(this),i=c["default"].createElement("span",{className:"metismenu-iconlevel "+this.props.iconClassPrefix+(this.state.containerVisibility?this.props.iconLevelUp:this.props.iconLevelDown)});else var n=this.props.href,r=!1,i=null;if(this.props.externalLink)var o="_blank";else var o="";return c["default"].createElement("li",{className:"metismenu-item"},c["default"].createElement("a",{target:o,href:n,onClick:r},c["default"].createElement("span",{className:t}),this.props.label,i),e&&c["default"].createElement(f["default"],{ref:"container",visible:this.state.containerVisibility,iconClassPrefix:this.props.iconClassPrefix,iconLevelDown:this.props.iconLevelDown,iconLevelUp:this.props.iconLevelUp,content:this.props.content}))}}]),t}(u.Component);t["default"]=p},function(e,t,n){var r=n(6);"string"==typeof r&&(r=[[e.id,r,""]]);n(8)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(7)(),t.push([e.id,".metismenu{width:300px}.metismenu>.metismenu-container{background:#ccc}.metismenu>.metismenu-container>.metismenu-item>A,.metismenu>.metismenu-container>.metismenu-item>A .metismenu-iconlevel{line-height:2.2em}.metismenu-container,.metismenu-item{margin:0;padding:0}.metismenu-container{background:#ddd;list-style:none}.metismenu-container .metismenu-container{display:none}.metismenu-container .metismenu-container A{padding-left:1em}.metismenu-container .metismenu-container .metismenu-container A{padding-left:2em}.metismenu-container.visible{display:block}.metismenu-item>A{color:#555;display:block;line-height:1.8em;text-decoration:none}.metismenu-item>A:hover{background:#eee;color:#333}.metismenu-icon{display:inline-block;text-align:center;width:2.2em}SPAN.metismenu-iconlevel{float:right;line-height:1.8em;text-align:center;width:2.2em}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=d[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(c(r.parts[o],t))}else{for(var s=[],o=0;o<r.parts.length;o++)s.push(c(r.parts[o],t));d[r.id]={id:r.id,refs:1,parts:s}}}}function i(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],o=i[0],s=i[1],a=i[2],u=i[3],c={css:s,media:a,sourceMap:u};n[o]?n[o].parts.push(c):t.push(n[o]={id:o,parts:[c]})}return t}function o(e,t){var n=v(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function c(e,t){var n,r,i;if(t.singleton){var o=y++;n=b||(b=a(t)),r=l.bind(null,n,o,!1),i=l.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=p.bind(null,n),i=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=f.bind(null,n),i=function(){s(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function l(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=C(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=h(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,y=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return r(n,t),function(e){for(var o=[],s=0;s<n.length;s++){var a=n[s],u=d[a.id];u.refs--,o.push(u)}if(e){var c=i(e);r(c,t)}for(var s=0;s<o.length;s++){var u=o[s];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete d[u.id]}}}};var C=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()}])});