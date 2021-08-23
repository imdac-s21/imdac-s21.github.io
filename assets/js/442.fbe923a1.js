(window.webpackJsonp=window.webpackJsonp||[]).push([[442],{662:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("Youtube",{attrs:{id:"vgU9cjr6QsM",citation:"griffith"}}),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),e("div",{staticClass:"try"},[e("p",[e("a",{attrs:{href:"https://www.db-fiddle.com/f/fbeoS61n7D1JDFYbFSZLrw/0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Try it yourself on DB Fiddle"),e("OutboundLink")],1)])]),t._v(" "),t._m(4),t._v(" "),t._m(5),e("div",{staticClass:"try"},[e("p",[e("a",{attrs:{href:"https://www.db-fiddle.com/f/fbeoS61n7D1JDFYbFSZLrw/1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Try it yourself on DB Fiddle"),e("OutboundLink")],1)])])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"update-statements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-statements","aria-hidden":"true"}},[this._v("#")]),this._v(" UPDATE Statements")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("The "),e("code",[t._v("UPDATE")]),t._v(" statement is use to modify or update the existing records in a table. The "),e("code",[t._v("UPDATE")]),t._v(" statement is followed by the table name. The "),e("code",[t._v("SET")]),t._v(" clause is used to update the value of a specified column. The "),e("code",[t._v("WHERE")]),t._v(" clause is use to specify which records should be updated.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"danger custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("If the "),e("code",[t._v("WHERE")]),t._v(" clause is omitted, "),e("strong",[t._v("ALL")]),t._v(" records will be updated. "),e("strong",[t._v("There is no UNDO command on a database.")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Update the `director` for the movie with ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the `movie_title` 'Transcendence' and the `year` 2014")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("movies"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("director"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Wally Pfister'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("movie_title"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Transcendence'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("year")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2014")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To update more than one column of a record, a comma should be used between each column / value pair. Subqueries can also be used with the "),s("code",[this._v("UPDATE")]),this._v(" statement.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Update the `director` and `genre_id` for the movie with")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the `movie_title` 'Contact' and the `year` 1997")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("movies"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("director"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Robert Zemekis'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("genre_id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("genre_id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("genres"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("genre_title"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Action'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LIMIT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("movie_title"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Contact'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("year")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1997")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);