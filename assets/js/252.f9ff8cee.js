(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{472:function(t,e,n){"use strict";n.r(e);var s=n(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("Youtube",{attrs:{id:"hctu-11hYpc",citation:"griffith"}}),t._v(" "),n("p",[t._v("One of the core reasons for the JavaScript's existence, was the creation and insertion of new HTML elements. Now, how elements are inserted in the HTML generally depends on where they need to be inserted. But, there typically four locations: before the target element, after the target element, the first child of the target element, or the last child of the target element.")]),t._v(" "),n("p",[t._v("The jQuery library provides these exact same option for use using the "),n("a",{attrs:{href:"https://api.jquery.com/before/",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("before()")]),n("OutboundLink")],1),t._v(", "),n("a",{attrs:{href:"https://api.jquery.com/after/",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("after()")]),n("OutboundLink")],1),t._v(", "),n("a",{attrs:{href:"https://api.jquery.com/prepend/",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("prepend()")]),n("OutboundLink")],1),t._v(", "),n("a",{attrs:{href:"https://api.jquery.com/append/",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("append()")]),n("OutboundLink")],1),t._v(" methods.")]),t._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),n("p",[t._v("All of methods above, the target element precedes the method, which is the followed by the content or the new element. The jQuery library also has methods in which the content precedes the method. They are "),n("a",{attrs:{href:"https://api.jquery.com/insertBefore/",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("insertBefore()")]),n("OutboundLink")],1),t._v(", "),n("a",{attrs:{href:"https://api.jquery.com/insertAfter/",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("insertAfter()")]),n("OutboundLink")],1),t._v(", "),n("a",{attrs:{href:"https://api.jquery.com/prependTo/",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("prependTo()")]),n("OutboundLink")],1),t._v(", "),n("a",{attrs:{href:"https://api.jquery.com/appendTo/",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("appendTo()")]),n("OutboundLink")],1),t._v(".")])]),t._v(" "),t._m(1),t._v(" "),t._m(2),n("p",[t._v("Now, the jQuery can be used to insert new element in HTML at each of the four locations.")]),t._v(" "),t._m(3),n("div",{staticClass:"try"},[n("p",[n("a",{attrs:{href:"https://codepen.io/IMD/pen/OJJJOdw",target:"_blank",rel:"noopener noreferrer"}},[t._v("Try it yourself on CodePen"),n("OutboundLink")],1)])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"inserting-html-with-jquery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inserting-html-with-jquery","aria-hidden":"true"}},[this._v("#")]),this._v(" Inserting HTML with jQuery")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Assume the following HTML element with the four locations marked with "),n("em",[t._v("one")]),t._v(" (before element), "),n("em",[t._v("two")]),t._v(" (first child), "),n("em",[t._v("three")]),t._v(" (last child), "),n("em",[t._v("four")]),t._v(" (after element).")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- one --\x3e")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("original"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- two --\x3e")]),t._v("\n  This is the original paragraph.\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- three --\x3e")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- four --\x3e")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Before Element")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.original'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("before")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<p>One</p>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// After Element")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.original'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("after")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<p>Four</p>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// First Child")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.original'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("prepend")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<span>Two</span>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Last Child")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.original'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<span>Three</span>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);e.default=a.exports}}]);