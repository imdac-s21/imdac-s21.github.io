(window.webpackJsonp=window.webpackJsonp||[]).push([[800],{1021:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("Use Vue, Vue CLI, Vue Router, Fetch, and the Seussology API to create a simple books web application.")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("For this assignment, you will be using the "),s("a",{attrs:{href:"https://seussology.info",target:"_blank",rel:"noopener noreferrer"}},[t._v("Seussology API"),s("OutboundLink")],1),t._v(". This is a simple RESTful API for retrieving books written by Dr. Seuss and related information. The following will provide instruction on how to retrieve data from the Seussology API.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),s("div",{staticClass:"try"},[s("p",[s("a",{attrs:{href:"https://codepen.io/IMD/pen/vYyqqKw",target:"_blank",rel:"noopener noreferrer"}},[t._v("Try it yourself on CodePen"),s("OutboundLink")],1)])]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),s("div",{staticClass:"try"},[s("p",[s("a",{attrs:{href:"https://codepen.io/IMD/pen/WNoqqjo",target:"_blank",rel:"noopener noreferrer"}},[t._v("Try it yourself on CodePen"),s("OutboundLink")],1)])]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),s("div",{staticClass:"try"},[s("p",[s("a",{attrs:{href:"https://codepen.io/IMD/pen/gOLNNxp",target:"_blank",rel:"noopener noreferrer"}},[t._v("Try it yourself on CodePen"),s("OutboundLink")],1)])]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("Clone this repository from GitHub and use the provided file to complete the assignment.")]),t._v(" "),t._m(14),t._v(" "),s("p",[t._v("Install the project dependencies by running the following command from within the project directory:")]),t._v(" "),t._m(15),t._m(16),t._v(" "),s("p",[t._v("Start the development server by running the following command from within the project directory:")]),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),s("Youtube",{attrs:{id:"ccMJUyPnSxU"}}),t._v(" "),t._m(22),t._v(" "),s("Youtube",{attrs:{id:"mR3aog49Hew"}}),t._v(" "),t._m(23),t._v(" "),t._m(24)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"seuss-treasury"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#seuss-treasury","aria-hidden":"true"}},[this._v("#")]),this._v(" Seuss Treasury")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"objective"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#objective","aria-hidden":"true"}},[this._v("#")]),this._v(" Objective")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"resources"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resources","aria-hidden":"true"}},[this._v("#")]),this._v(" Resources")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"retrieving-all-books"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#retrieving-all-books","aria-hidden":"true"}},[this._v("#")]),this._v(" Retrieving all books")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To retrieve all the books, make a Fetch GET request to the URL "),e("code",[this._v("https://seussology.info/api/books")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// retrieves all books ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://seussology.info/api/books'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("json")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"retrieving-a-book-by-id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#retrieving-a-book-by-id","aria-hidden":"true"}},[this._v("#")]),this._v(" Retrieving a book by ID")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To retrieve a book by the book's ID, make a Fetch GET request to the URL "),e("code",[this._v("https://seussology.info/api/books/[id]")]),this._v(", with the last part being the desired book's ID.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// retrieves the book with the ID of 3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://seussology.info/api/books/3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("json")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"retrieving-random-quotes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#retrieving-random-quotes","aria-hidden":"true"}},[this._v("#")]),this._v(" Retrieving random quotes")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To retrieve random quotes, make a Fetch GET request to the URL "),e("code",[this._v("https://seussology.info/api/quotes/random/[limit]")]),this._v(", with the last part being the desired number of quotes.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// retrieves 10 random quotes")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://seussology.info/api/quotes/random/10'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("json")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"project-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#project-setup","aria-hidden":"true"}},[this._v("#")]),this._v(" Project Setup")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-clone-the-repository"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-clone-the-repository","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. Clone the Repository")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-install-dependencies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-install-dependencies","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. Install Dependencies")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-start-development-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-start-development-server","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. Start Development Server")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" run serve\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),e("p",[this._v("The terminal window must remain open to keep the server running.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Requirements")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("The web application must use Vue CLI to create the web application structure")]),t._v(" "),s("li",[t._v("The web application must use Vue Router to create routes for a books page, a book details page, and a quotes page.")]),t._v(" "),s("li",[t._v("The books page must dynamically retrieve and display the book cover images. Clicking on the a book image will take the user to that book's detail page.")]),t._v(" "),s("li",[t._v("The book's details page, must dynamically retrieve and display the book's title, book's cover image, and the book's description.")]),t._v(" "),s("li",[t._v("The quotes page must dynamically retrieve 10 random quotes and display them on the page.")]),t._v(" "),s("li",[t._v("The site must have a site wide navigation which allow moving to the books page and the quotes page.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"breakdown"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#breakdown","aria-hidden":"true"}},[this._v("#")]),this._v(" Breakdown")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"rubric"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rubric","aria-hidden":"true"}},[this._v("#")]),this._v(" Rubric")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Task")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Points")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Dynamically retrieves and displays books images on the books page")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("5")])]),t._v(" "),s("tr",[s("td",[t._v("Successfully links to a book's detail page when the corrosponding book's image is clicked")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),s("tr",[s("td",[t._v("Dynamically retrieves and displays a book's title, image, and description on the book's detail page")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("5")])]),t._v(" "),s("tr",[s("td",[t._v("Dynamically retrieves and displays 10 random quotes on the quotes page")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("5")])]),t._v(" "),s("tr",[s("td",[t._v("Implements a functional site navigation")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("3")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("Total")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("20")])])])])])}],!1,null,null,null);e.default=n.exports}}]);