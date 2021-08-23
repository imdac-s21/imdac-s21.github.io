(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{474:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("Youtube",{attrs:{id:"hOCYNdgsUfs",citation:"griffith"}}),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("localStorage")]),s("OutboundLink")],1),t._v(" property in JavaScript allows access to the browser's localStorage, which is a way of saving data across browser sessions. The data to localStorage is domain-specific.")]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("sessionStorage")]),s("OutboundLink")],1),t._v(" property and the browser's sessionStorage are similar to localStorage except that stored data will be cleared when the page session ends.")])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),s("p",[t._v("The values of data items stored to localStorage must be strings. This can be quite limiting for web applications that must store and keep track of many different data items.")]),t._v(" "),s("p",[t._v("A workaround for this is to store an entire object or array to a data item as a string using the "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("JSON.stringify()")]),s("OutboundLink")],1),t._v(" function. This function takes an object or an array and returns as a string. This string can then be stored to localStorage.")]),t._v(" "),t._m(12),s("p",[t._v("When it comes to retrieving the data item, the "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("JSON.parse()")]),s("OutboundLink")],1),t._v(" function can be used. This function takes a previously stringified object or array and returns a fully functional object or array.")]),t._v(" "),t._m(13)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"local-storage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#local-storage","aria-hidden":"true"}},[this._v("#")]),this._v(" Local Storage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"storing-to-localstorage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#storing-to-localstorage","aria-hidden":"true"}},[this._v("#")]),this._v(" Storing to localStorage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("setItem()")]),this._v(" function is used to store new data items to localStorage. The function takes two arguments, the first being the item's key and the second being the item's value. Both the key and value must be a string.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Michael'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlocalStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Professor'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"retrieving-localstorage-items"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#retrieving-localstorage-items","aria-hidden":"true"}},[this._v("#")]),this._v(" Retrieving localStorage Items")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("getItem()")]),this._v(" function is used to retrieve data items stored in localStorage. The function takes a single argument, the key of the desired item.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Michael")]),t._v("\nlocalStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Professor")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"deleting-localstorage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deleting-localstorage","aria-hidden":"true"}},[this._v("#")]),this._v(" Deleting localStorage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("removeItem()")]),this._v(" function is used to remove an item from localStorage. It takes a single argument, the key of the desired item.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("clear()")]),this._v(" function is used to clear all items stored in localStorage for the current domain.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlocalStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"storing-objects-to-localstorage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#storing-objects-to-localstorage","aria-hidden":"true"}},[this._v("#")]),this._v(" Storing Objects to localStorage")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" string "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Michael'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Professor'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "{"name":"Michael","title":"Professor"}"')]),t._v("\n\nlocalStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Michael")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);