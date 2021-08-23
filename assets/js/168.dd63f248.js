(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{388:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"declarative-programming"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#declarative-programming","aria-hidden":"true"}},[t._v("#")]),t._v(" Declarative Programming")]),t._v(" "),e("p",[t._v("Declarative programming is a style of programming that can make your code more concise and easier to read. It is also a subset of functional programming, a programming paradigm growing in popularity among JavaScript developers.")]),t._v(" "),e("h2",{attrs:{id:"declarative-vs-imperative"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#declarative-vs-imperative","aria-hidden":"true"}},[t._v("#")]),t._v(" Declarative vs Imperative")]),t._v(" "),e("p",[t._v("When comparing declarative programming with imperative programming, it is often said to be the "),e("strong",[t._v("WHAT")]),t._v(" vs "),e("strong",[t._v("HOW")]),t._v(". In traditional imperative programs, we tell the computer "),e("strong",[t._v("HOW")]),t._v(" to complete a task, whereas, in declarative programming, we tell the computer "),e("strong",[t._v("WHAT")]),t._v(" we want. Let's look at a real-world example.")]),t._v(" "),e("p",[t._v("Let's say we are hungry, and we want a sandwich. An imperative request might look like this:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET OUT BREAD, PEANUT BUTTER, AND JELLY\nTAKE TWO SLICES OF BREAD\nPUT PEANUT BUTTER ON ONE SLICE\nPUT JELLY ON THE OTHER SLICE\nPUT SLICES TOGETHER\n")])])]),e("p",[t._v("Whereas a declarative request could look like this:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("MAKE ME A PEANUT BUTTER AND JELLY SANDWICH\n")])])]),e("p",[t._v("In this second request, we are not worried about the particulars of how to make the actual sandwich. We tell the computer what we want and let it figure out the rest.")]),t._v(" "),e("p",[t._v("But, the good news is that we already have experience with declarative programming in the form of HTML. HTML is a declarative programming language. When we want to display our page title as a heading 1, we do not have to tell the computer each step. Instead, we tell the computer what we want by using the "),e("code",[t._v("<h1>")]),t._v(" tag.")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Page Title"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("Now let's look at how to write Declarative JavaScript.")]),t._v(" "),e("h2",{attrs:{id:"declarative-javascript"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#declarative-javascript","aria-hidden":"true"}},[t._v("#")]),t._v(" Declarative JavaScript")]),t._v(" "),e("p",[t._v("Most of the JavaScript we have written up to this point has been imperative. Each script is providing each step the computer must take to complete a task. Let's look at a simple example.")]),t._v(" "),e("p",[t._v("In this example, we want to take an array of numbers and create a copy containing only even numbers.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" numbers "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" evens "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" number "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" numbers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    evens"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("The example above is not particularly complicated, but we still had to provide each step to the computer. Now, let's look at how this code could look if we used declarative JavaScript. Don't worry too much about the syntax at this point. We will cover the specifics later.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" numbers "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" evens "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" numbers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("number")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" number "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Using the "),e("code",[t._v("filter")]),t._v(" method and an arrow function, two topics we will discuss later, we were able to complete the same task with far less code. Furthermore, the code is easier to read. No longer are we providing each step. We are simply requesting "),e("strong",[t._v("WHAT")]),t._v(" we want.")]),t._v(" "),e("p",[t._v("Now that we feel for declarative programming let us look at the tools we will need, starting with the arrow functions.")])])}],!1,null,null,null);a.default=n.exports}}]);