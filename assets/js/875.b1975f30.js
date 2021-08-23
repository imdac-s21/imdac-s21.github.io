(window.webpackJsonp=window.webpackJsonp||[]).push([[875],{1096:function(t,e,s){"use strict";s.r(e);var a=s(0),i=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("For this assignment, you will use what you have learned about PHP, MySQL, and PDO to create a database-driven book catalogue based on the Seussology database.")]),t._v(" "),s("p",[t._v("The site will have the following pages:")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("The homepage should display all of the books in the databases. Just the book image should be displayed. If no book image is available, the book title should be displayed instead.")]),t._v(" "),s("p",[t._v("A search box should allow users to filter the books. The search form should submit to the homepage. Only those books that contain the search query in their title or description should be displayed.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("Click on any book from the homepage should take the user to that book's details page. The details page should include the book's title, image, description, published year, number of pages (if available), and book quotes (if any).")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("The details page should also include a link to edit the current book.")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("The edit book page should contain a form, pre-filled, that will allow the user to edit the book's details. The user should be allowed to edit the book's title, sort title, image, description, published year, and the number of pages. Submitting the form should update the book's details and return the user to the book details page.")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("A delete button should also be available on the Edit Book Page, which will allow the user to delete a book from the database.")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("The new book page should contain a form that will allow the user to add a new book to the database. The new book should include a book title, book sort title, published year, the number of pages, and a description. When the user submits the form, the database should be updated, and the user should be taken to the new book's details page.")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),s("p",[t._v("Clone this repository from GitHub and use the provided files to complete the assignment.")]),t._v(" "),t._m(21),t._v(" "),s("p",[t._v("To import the database, using phpMyAdmin, complete the following instructions.")]),t._v(" "),s("ol",[s("li",[t._v("Open phpMyAdmin at "),s("a",{attrs:{href:"http://phpmyadmin.test",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://phpmyadmin.test"),s("OutboundLink")],1),t._v(" (macOS) or "),s("a",{attrs:{href:"http://localhost/phpmyadmin",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost/phpmyadmin"),s("OutboundLink")],1),t._v(" (Windows)")]),t._v(" "),s("li",[t._v("Log in to phpMyAdmin using the root username and password")]),t._v(" "),s("li",[t._v('From the phpMyAdmin homepage, click on the "Import" tab found at the top of the page.')]),t._v(" "),t._m(22),t._v(" "),s("li",[t._v('Click the "Go" button found at the bottom of the page.')]),t._v(" "),s("li",[t._v("Once the importing has been completed, click on the Seussology database, which should appear in the list on the left side of the page.")]),t._v(" "),s("li",[t._v('With the Seussology database selected, click on the "SQL" tab at the top of the page. From this page, you can execute custom SQL commands.')])]),t._v(" "),s("p",[t._v("The following shows the structure of the Seussology tables and the column names, required data types, default values, and which columns are required.")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),s("p",[t._v("The following requirements must be met to complete the assignment successfully:")]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),s("ul",[t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),s("li",[t._v("It may be necessary to use two queries to retrieve the book's details and the book's quotes.")]),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),s("li",[t._v("Provide a data type on the "),s("a",{attrs:{href:"https://www.php.net/manual/en/pdostatement.bindvalue.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("bindValue()"),s("OutboundLink")],1),t._v(" function to pass a value other than a string.")])]),t._v(" "),t._m(40),t._v(" "),s("p",[t._v("You can find a completed version below:")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://eisenbm.edumedia.ca/mtm6405/seussology/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://eisenbm.edumedia.ca/mtm6405/seussology/"),s("OutboundLink")],1)]),t._v(" "),t._m(41),t._v(" "),s("p",[t._v("This assignment will be graded based on the following rubric.")]),t._v(" "),t._m(42)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"seussology"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#seussology","aria-hidden":"true"}},[this._v("#")]),this._v(" Seussology")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"objective"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#objective","aria-hidden":"true"}},[this._v("#")]),this._v(" Objective")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"danger custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),e("p",[this._v("Your site does not need to look like the one in the screenshots.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"homepage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#homepage","aria-hidden":"true"}},[this._v("#")]),this._v(" Homepage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/mtm6405-seussology-homepage.png",alt:"A screenshot of the Seussology Homepage"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"book-details-page"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#book-details-page","aria-hidden":"true"}},[this._v("#")]),this._v(" Book Details Page")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),e("p",[this._v("Anytime you receive data from the user, it is best to use "),e("strong",[this._v("prepared statements")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),e("p",[this._v("The book quotes are in the quotes tables.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/mtm6405-seussology-details-page.png",alt:"A screenshot of the Seussology Details page"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"edit-book-page"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#edit-book-page","aria-hidden":"true"}},[this._v("#")]),this._v(" Edit Book Page")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),e("p",[this._v("Anytime you receive data from the user, it is best to use "),e("strong",[this._v("prepared statements")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),e("p",[this._v("The book_title, book_year, and book_description are required fields in the database and should not be left blank.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),e("p",[this._v("The delete button should be part of a separate form, which will submit to a separate PHP file.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),e("p",[this._v("It may be necessary to delete all the quotes related to the book before deleting the book itself.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/mtm6405-seussology-edit-page.png",alt:"A screenshot of the Seussology Edit page"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"new-book-page"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#new-book-page","aria-hidden":"true"}},[this._v("#")]),this._v(" New Book Page")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),e("p",[this._v("Anytime you receive data from the user, it is best to use "),e("strong",[this._v("prepared statements")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),e("p",[this._v("The book_title, book_year, and book_description are required fields in the database and should not be left blank.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/mtm6405-seussology-add-page.png",alt:"A screenshot of the Seussology New book page"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"project-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#project-setup","aria-hidden":"true"}},[this._v("#")]),this._v(" Project Setup")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-clone-the-repository"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-clone-the-repository","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. Clone the Repository")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-import-the-seussology-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-import-the-seussology-database","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. Import the Seussology Database")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v('Under the "File to import" section, click the "Choose File" button. Choose the '),e("code",[this._v("seussology.sql")]),this._v(" file found in this repository.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("books")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Column Name")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Data Type")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Default Value")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Required")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("book_id")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("em",[t._v("None")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("yes")])])]),t._v(" "),s("tr",[s("td",[t._v("book_title")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("em",[t._v("None")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("yes")])])]),t._v(" "),s("tr",[s("td",[t._v("book_title_sort")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("NULL")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("no")])])]),t._v(" "),s("tr",[s("td",[t._v("book_year")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("4 digit year")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("NULL")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("no")])])]),t._v(" "),s("tr",[s("td",[t._v("book_description")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("NULL")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("no")])])]),t._v(" "),s("tr",[s("td",[t._v("book_pages")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("NULL")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("no")])])]),t._v(" "),s("tr",[s("td",[t._v("book_image")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("NULL")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("no")])])]),t._v(" "),s("tr",[s("td",[t._v("category_id")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("NULL")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("no")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("categories")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Column Name")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Data Type")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Default Value")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Required")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("category_id")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("em",[t._v("None")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("yes")])])]),t._v(" "),s("tr",[s("td",[t._v("category_name")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("em",[t._v("None")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("yes")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("quotes")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Column Name")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Data Type")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Default Value")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Required")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("quote_id")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("em",[t._v("None")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("yes")])])]),t._v(" "),s("tr",[s("td",[t._v("quote")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("em",[t._v("None")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("yes")])])]),t._v(" "),s("tr",[s("td",[t._v("book_id")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("integer")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("em",[t._v("None")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("yes")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Requirements")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("All books must be displayed on the homepage. Books with book covers should display the cover image, and books without book covers should display the book title. Clicking on either the book image or the book title should take the user to the book's details page.")]),t._v(" "),s("li",[t._v("On the homepage, the user should be able to filter the books using a search box. All books whose title and/or description contains the search term should be displayed.")]),t._v(" "),s("li",[t._v("The book's details page should include the book's cover image, the book's title, the book's description, the book's number of pages, and the quotes associated with the book. There should be an \"edit\" button on the book's details page, which will take the user to the book's edit page.")]),t._v(" "),s("li",[t._v("The book's edit page should contain a pre-populated form of the book's details. Submitting the form should update the book's details.")]),t._v(" "),s("li",[t._v("On the book's edit page, a delete button should allow the user to delete the current book.")]),t._v(" "),s("li",[t._v("A new book page should contain a form to allow the user to enter new book data. Submitting the form should add a new book.")]),t._v(" "),s("li",[t._v("For added security, prepared statements should be used any time a user provides data for a database query.")]),t._v(" "),s("li",[t._v("The web application should have an appealing and intuitive interface.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"hints"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hints","aria-hidden":"true"}},[this._v("#")]),this._v(" Hints")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("If a book does not have an image in the database, it will have a "),e("code",[this._v("NULL")]),this._v(" value. This is the same as "),e("code",[this._v("false")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("When performing a search on book titles and descriptions, it is best to use the "),e("code",[this._v("LIKE")]),this._v(" clause.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Passing the "),e("code",[this._v("book_id")]),this._v(" as a URL variable can be an effective way to specify a specific book.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Each quote in the quotes table has a "),e("code",[this._v("book_id")]),this._v(" that matches the respective book.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("A form's input can be pre-filled by echoing out a PHP value directly into the "),e("code",[this._v("value")]),this._v(" attribute.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("The "),e("code",[this._v("book_title")]),this._v(" cannot be "),e("code",[this._v("NULL")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("The "),e("code",[this._v("book_year")]),this._v(" must be a 4 digit number.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("The "),e("code",[this._v("book_pages")]),this._v(" must be a number.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"rubric"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rubric","aria-hidden":"true"}},[this._v("#")]),this._v(" Rubric")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Criteria")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Pts")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Displays all the books on the homepage")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("5")])]),t._v(" "),s("tr",[s("td",[t._v("Successfully implements the homepage search feature")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("5")])]),t._v(" "),s("tr",[s("td",[t._v("Displays the book's details on the book details page")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("5")])]),t._v(" "),s("tr",[s("td",[t._v("Displays the book's quotes on the book details page")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("5")])]),t._v(" "),s("tr",[s("td",[t._v("Displays the edit book form pre-filled with the book's details")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("5")])]),t._v(" "),s("tr",[s("td",[t._v("Successfully updates a book when edit book form is submitted")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("5")])]),t._v(" "),s("tr",[s("td",[t._v("Successfully deletes a book when the delete book button is pressed")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("5")])]),t._v(" "),s("tr",[s("td",[t._v("Successfully adds a new book when the add book form is submitted")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("5")])]),t._v(" "),s("tr",[s("td",[t._v("Used prepared statements when making queries that relied on user input.")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("5")])]),t._v(" "),s("tr",[s("td",[t._v("Provides an appealing and intuitive user experience")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("5")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("Total")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("50")])])])])])}],!1,null,null,null);e.default=i.exports}}]);