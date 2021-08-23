(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{394:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("innerHTML")]),s("OutboundLink")],1),t._v(" property can be used to get and set the HTML contained within an existing element. When getting HTML, the "),s("code",[t._v("innerHTML")]),t._v(" property will return a string. When setting HTML, a string must be provided. JavaScript will automatically convert to the string into an HTML element.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("Of course, this is limited to just inserting elements to be a first child or last child. In contrast, the "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("insertAdjacentHTML()")]),s("OutboundLink")],1),t._v(" method inserts a HTML string into a specified position.")]),t._v(" "),s("p",[t._v("The method takes two arguments. The first is the position, which will consist of one of the four predefined positions (see below). The second is a string of HTML.")]),t._v(" "),s("p",[t._v("The four predefined positions are:")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._m(17)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"using-a-string"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-a-string","aria-hidden":"true"}},[this._v("#")]),this._v(" Using a String")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"adding-an-html-element"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-an-html-element","aria-hidden":"true"}},[this._v("#")]),this._v(" Adding an HTML Element")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Adding a simple HTML element to the page requires creating string, then add or insert then HTML element contained within the string to an existing HTML element using the "),e("code",[this._v("innerHTML")]),this._v(" property or  the "),e("code",[this._v("insertAdjacentHTML()")]),this._v(" method.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A string literal can be used to represent a simple, static HTML element, which will be added to the existing HTML element, retrieved using either "),e("code",[this._v("getElementById()")]),this._v(" or "),e("code",[this._v("querySelector()")]),this._v(". With the existing HTML element retrieved, the "),e("code",[this._v("innerHTML")]),this._v(" property method can be used to add the new HTML element to the existing HTML element.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),e("p",[this._v("When adding HTML using "),e("code",[this._v("innerHTML")]),this._v(", any existing HTML inside of the target element will be overwritten.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" simpleHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<h1>New Title</h1>'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" body "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'body'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nbody"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" simpleHTML\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"HTML Creation - Using a String",src:"https://codepen.io/IMD/embed/ExKmqpa?height=265&theme-id=light&default-tab=result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),e("a",{attrs:{href:"https://codepen.io/IMD/pen/ExKmqpa"}},[this._v("HTML Creation - Using a String")]),this._v(" by IMD\n  ("),e("a",{attrs:{href:"https://codepen.io/IMD"}},[this._v("@IMD")]),this._v(") on "),e("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"inserting-an-html-element"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inserting-an-html-element","aria-hidden":"true"}},[this._v("#")]),this._v(" Inserting an HTML Element")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"using-concatenation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-concatenation","aria-hidden":"true"}},[this._v("#")]),this._v(" Using concatenation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When using the "),e("code",[this._v("innerHTML")]),this._v(" property, the existing HTML will be overwritten. However, there will be times when we will want to insert HTML and keep the existing HTML. This can be accomplished by using "),e("code",[this._v("innerHTML")]),this._v(" by using the concatenation operator ("),e("code",[this._v("+")]),this._v(").")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" simpleHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<h1>New Title</h1>'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" body "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'body'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// insert the new element at the beginning")]),t._v("\nbody"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" simpleHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// insert the new element at the end")]),t._v("\nbody"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" simpleHTML\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("iframe",{staticStyle:{width:"100%"},attrs:{height:"315",scrolling:"no",title:"HTML Creation - Using a String",src:"https://codepen.io/IMD/embed/YzqVmdV?height=315&theme-id=light&default-tab=result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),e("a",{attrs:{href:"https://codepen.io/IMD/pen/YzqVmdV"}},[this._v("HTML Creation - Using a String")]),this._v(" by IMD\n  ("),e("a",{attrs:{href:"https://codepen.io/IMD"}},[this._v("@IMD")]),this._v(") on "),e("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"using-insertadjacenthtml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-insertadjacenthtml","aria-hidden":"true"}},[this._v("#")]),this._v(" Using insertAdjacentHTML")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("beforebegin")]),t._v(": Before the element")]),t._v(" "),s("li",[s("code",[t._v("afterbegin")]),t._v(": Inside the element, before its first child")]),t._v(" "),s("li",[s("code",[t._v("beforeend")]),t._v(": Inside the element, after its last child")]),t._v(" "),s("li",[s("code",[t._v("afterend")]),t._v(": After the element")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- beforebegin --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- afterbegin --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- beforeend --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- afterend --\x3e")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("With the "),e("code",[this._v("insertAdjacentHTML()")]),this._v(" method, it is possible to insert HTML anywhere on the page.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" simpleHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<h1>New Title</h1>'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" body "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'body'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" firstChild "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("':first-child'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// insert the new element as after the first child")]),t._v("\nfirstChild"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertAdjacentHTML")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'afterend'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" simpleHTML"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("iframe",{staticStyle:{width:"100%"},attrs:{height:"315",scrolling:"no",title:"HTML Creation - Using a String",src:"https://codepen.io/IMD/embed/yLObmrW?height=315&theme-id=light&default-tab=result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),e("a",{attrs:{href:"https://codepen.io/IMD/pen/yLObmrW"}},[this._v("HTML Creation - Using a String")]),this._v(" by IMD\n  ("),e("a",{attrs:{href:"https://codepen.io/IMD"}},[this._v("@IMD")]),this._v(") on "),e("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])}],!1,null,null,null);e.default=a.exports}}]);