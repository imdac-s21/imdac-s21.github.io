(window.webpackJsonp=window.webpackJsonp||[]).push([[552],{772:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("The following documentation comes directly from the "),s("a",{attrs:{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("router.vuejs.org"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),s("p",[t._v("You can check out a live example "),s("a",{attrs:{href:"https://jsfiddle.net/yyx990803/4xfa2f19/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("In addition to "),s("code",[t._v("$route.params")]),t._v(", the "),s("code",[t._v("$route")]),t._v(" object also exposes other useful information such as "),s("code",[t._v("$route.query")]),t._v(" (if there is a query in the URL), "),s("code",[t._v("$route.hash")]),t._v(", etc. You can check out the full details in the "),s("a",{attrs:{href:"https://router.vuejs.org/api/#the-route-object",target:"_blank",rel:"noopener noreferrer"}},[t._v("API Reference"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),s("p",[t._v("Or, use the "),s("code",[t._v("beforeRouteUpdate")]),t._v(" "),s("a",{attrs:{href:"https://router.vuejs.org/guide/advanced/navigation-guards.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("navigation guard"),s("OutboundLink")],1),t._v(" introduced in 2.2:")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),s("p",[t._v("When using "),s("em",[t._v("asterisk")]),t._v(" routes, make sure to correctly order your routes so that "),s("em",[t._v("asterisk")]),t._v(" ones are at the end.\nThe route "),s("code",[t._v("{ path: '*' }")]),t._v(" is usually used to 404 client side. If you are using "),s("em",[t._v("History mode")]),t._v(", make sure to "),s("router-link",{attrs:{to:"./history-mode.html"}},[t._v("correctly configure your server")]),t._v(" as well.")],1),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),s("p",[s("code",[t._v("vue-router")]),t._v(" uses "),s("a",{attrs:{href:"https://github.com/pillarjs/path-to-regexp",target:"_blank",rel:"noopener noreferrer"}},[t._v("path-to-regexp"),s("OutboundLink")],1),t._v(" as its path matching engine, so it supports many advanced matching patterns such as optional dynamic segments, zero or more / one or more requirements, and even custom regex patterns. Check out its "),s("a",{attrs:{href:"https://github.com/pillarjs/path-to-regexp#parameters",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentation"),s("OutboundLink")],1),t._v(" for these advanced patterns, and "),s("a",{attrs:{href:"https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("this example"),s("OutboundLink")],1),t._v(" of using them in "),s("code",[t._v("vue-router")]),t._v(".")]),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("Sometimes the same URL may be matched by multiple routes. In such a case the matching priority is determined by the order of route definition: the earlier a route is defined, the higher priority it gets.")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"dynamic-route-matching"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-route-matching","aria-hidden":"true"}},[this._v("#")]),this._v(" Dynamic Route Matching")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Very often we will need to map routes with the given pattern to the same component. For example we may have a "),e("code",[this._v("User")]),this._v(" component which should be rendered for all users but with different user IDs. In "),e("code",[this._v("vue-router")]),this._v(" we can use a dynamic segment in the path to achieve that:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>User</div>'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  routes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dynamic segments start with a colon")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user/:id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" User "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Now URLs like "),e("code",[this._v("/user/foo")]),this._v(" and "),e("code",[this._v("/user/bar")]),this._v(" will both map to the same route.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A dynamic segment is denoted by a colon "),e("code",[this._v(":")]),this._v(". When a route is matched, the value of the dynamic segments will be exposed as "),e("code",[this._v("this.$route.params")]),this._v(" in every component. Therefore, we can render the current user ID by updating "),e("code",[this._v("User")]),this._v("'s template to this:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>User {{ $route.params.id }}</div>'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You can have multiple dynamic segments in the same route, and they will map to corresponding fields on "),e("code",[this._v("$route.params")]),this._v(". Examples:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("pattern")]),t._v(" "),s("th",[t._v("matched path")]),t._v(" "),s("th",[t._v("$route.params")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("/user/:username")]),t._v(" "),s("td",[t._v("/user/evan")]),t._v(" "),s("td",[s("code",[t._v("{ username: 'evan' }")])])]),t._v(" "),s("tr",[s("td",[t._v("/user/:username/post/:post_id")]),t._v(" "),s("td",[t._v("/user/evan/post/123")]),t._v(" "),s("td",[s("code",[t._v("{ username: 'evan', post_id: '123' }")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"reacting-to-params-changes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reacting-to-params-changes","aria-hidden":"true"}},[this._v("#")]),this._v(" Reacting to Params Changes")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("One thing to note when using routes with params is that when the user navigates from "),s("code",[t._v("/user/foo")]),t._v(" to "),s("code",[t._v("/user/bar")]),t._v(", "),s("strong",[t._v("the same component instance will be reused")]),t._v(". Since both routes render the same component, this is more efficient than destroying the old instance and then creating a new one. "),s("strong",[t._v("However, this also means that the lifecycle hooks of the component will not be called")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To react to params changes in the same component, you can simply watch the "),e("code",[this._v("$route")]),this._v(" object:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  watch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$route'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// react to route changes...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteUpdate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// react to route changes...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// don't forget to call next()")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"catch-all-404-not-found-route"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#catch-all-404-not-found-route","aria-hidden":"true"}},[this._v("#")]),this._v(" Catch all / 404 Not found Route")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Regular params will only match characters in between url fragments, separated by "),e("code",[this._v("/")]),this._v(". If we want to match "),e("strong",[this._v("anything")]),this._v(", we can use the asterisk ("),e("code",[this._v("*")]),this._v("):")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// will match everything")]),t._v("\n  path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// will match anything starting with `/user-`")]),t._v("\n  path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user-*'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("When using an "),s("em",[t._v("asterisk")]),t._v(", a param named "),s("code",[t._v("pathMatch")]),t._v(" is automatically added to "),s("code",[t._v("$route.params")]),t._v(". It contains the rest of the url matched by the "),s("em",[t._v("asterisk")]),t._v(":")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Given a route { path: '/user-*' }")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user-admin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathMatch "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'admin'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Given a route { path: '*' }")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/non-existing'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathMatch "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// '/non-existing'")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"advanced-matching-patterns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#advanced-matching-patterns","aria-hidden":"true"}},[this._v("#")]),this._v(" Advanced Matching Patterns")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"matching-priority"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#matching-priority","aria-hidden":"true"}},[this._v("#")]),this._v(" Matching Priority")])}],!1,null,null,null);e.default=n.exports}}]);