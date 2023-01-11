/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createBlog.js":
/*!***************************!*\
  !*** ./src/createBlog.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ \"./src/state.js\");\n\r\n\r\n///-------------------------------------------------\r\n/// Renders CreateBlog page\r\n///\r\nfunction renderCreateBlog(){\r\n    const template = `\r\n    <h1>Create a New Blog</h1>\r\n\r\n    <form id=\"blogForm\" onsubmit=\"createPost()\">\r\n        <input type=\"text\" name=\"title\" required placeholder=\"Blog title\">\r\n        <textarea name=\"body\" required placeholder=\"Blog body\"></textarea>\r\n        <button>Create</button>\r\n    </form>\r\n    `;\r\n\r\n    const container = document.querySelector('#root');\r\n    container.innerHTML = template;\r\n} // end-renderCreateBlog\r\n  \r\nfunction createPost(){\r\n    const e = window.event;  // Get the event\r\n    e.preventDefault();\r\n\r\n    const form = document.querySelector('#blogForm');\r\n\r\n    const title = form.title.value.trim()\r\n    const body = form.body.value.trim()\r\n    if (title == \"\"){\r\n      alert(\"title cannot be empty\")\r\n      return;\r\n    } // end-if\r\n\r\n    if (body == \"\"){\r\n      alert(\"body cannot be empty\")\r\n      return;\r\n    } // end-if\r\n\r\n    const doc = {\r\n      title: title,\r\n      body: body,\r\n      likes: 0,\r\n    };\r\n\r\n    // Add the new post to the end of the posts\r\n    (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.addPost)(doc);\r\n    renderPosts();\r\n} // end-createPost   \r\n\r\n// Add button callback functions to the global scope    \r\n// If we do not do this, callback's are NOT found\r\nwindow.renderCreateBlog = renderCreateBlog;\r\nwindow.createPost = createPost;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCreateBlog);\r\n\r\n\n\n//# sourceURL=webpack://01-demo/./src/createBlog.js?");

/***/ }),

/***/ "./src/details.js":
/*!************************!*\
  !*** ./src/details.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ \"./src/state.js\");\n\r\n\r\n///-------------------------------------------------\r\n/// Renders Details page\r\n///\r\nfunction renderDetails(id){\r\n    const post = (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.getPost)(id);\r\n    const template = `\r\n        <div>\r\n            <h1>${post.title}</h1>\r\n            <p>${post.body}</p>\r\n        </div>\r\n        <button onClick=\"renderPosts()\">back</button>\r\n        <button onClick=\"deleteBlog(${post.id})\">delete</button>\r\n    `;\r\n\r\n    const container = document.querySelector('#root');\r\n    container.innerHTML = template;\r\n} // end-renderDetails\r\n\r\nfunction deleteBlog(id){\r\n    (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.deletePost)(id);\r\n    renderPosts();\r\n} // end-deleteBlog\r\n\r\n// Add button callback functions to the global scope    \r\n// If we do not do this, callback's are NOT found\r\nwindow.renderDetails = renderDetails;\r\nwindow.deleteBlog = deleteBlog;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderDetails);\n\n//# sourceURL=webpack://01-demo/./src/details.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ \"./src/state.js\");\n/* harmony import */ var _createBlog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createBlog.js */ \"./src/createBlog.js\");\n/* harmony import */ var _details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details.js */ \"./src/details.js\");\n/* harmony import */ var _posts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts.js */ \"./src/posts.js\");\n// Include all project files here so that webpack\n// can bundle them together\n\n\n\n\n\n// Render all posts after the page is loaded\nwindow.addEventListener('DOMContentLoaded', () => (0,_posts_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n\n//# sourceURL=webpack://01-demo/./src/index.js?");

/***/ }),

/***/ "./src/posts.js":
/*!**********************!*\
  !*** ./src/posts.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ \"./src/state.js\");\n\r\n\r\n///-------------------------------------------------\r\n/// Renders Blog posts page\r\n///\r\nfunction renderPosts() {\r\n    const posts = (0,_state_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    let template = `\r\n        <nav>\r\n        <h1>All Blogs</h1>\r\n        <button onClick=\"renderCreateBlog()\">Add a new blog</button>\r\n        </nav>\r\n        <div>\r\n        `;\r\n\r\n    posts.forEach(post => {\r\n        template += `\r\n        <div class=\"post\">\r\n            <h2>${post.title}</h2>\r\n            <p><small>${post.likes} likes</small></p>\r\n            <p>${post.body.slice(0, 200)}...</p>\r\n            <button onClick=\"renderDetails(${post.id})\">Read more</button>\r\n        </div>\r\n        `\r\n    });\r\n\r\n    template += \"</div>\";\r\n\r\n    const container = document.querySelector('#root');\r\n    container.innerHTML = template;\r\n} // end-renderPosts\r\n  \r\n// Add button callback functions to the global scope    \r\n// If we do not do this, callback's are NOT found\r\nwindow.renderPosts = renderPosts;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPosts);\n\n//# sourceURL=webpack://01-demo/./src/posts.js?");

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addPost\": () => (/* binding */ addPost),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"deletePost\": () => (/* binding */ deletePost),\n/* harmony export */   \"getPost\": () => (/* binding */ getPost)\n/* harmony export */ });\n// Global state of the project (Kind of the state manager)\r\nlet nextPostId = 3;\r\n\r\nlet posts = [\r\n    {\r\n      id: 1,\r\n      likes: 30,\r\n      title: \"Welcome to the new blog\",\r\n      body: \"Lorem ninja ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut ninja wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit ninja lobortis nisl ut aliquip ex ea commodo consequat. Duis ninja autem vel eum iriure dolor in hendrerit in vulputate ninja velit esse molestie consequat, vel illum dolore eu feugiat nulla ninja facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam ninja ipsum liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi ninja non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes ninja demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas ninja est etiam processus dynamicus, qui ninja sequitur mutationem consuetudium lectorum. Mirum ninja est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem ninja ipsum modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in ninja futurum.\"\r\n    },\r\n    {\r\n      id: 2,\r\n      likes: 15,\r\n      title: \"How to be a good programmer\",\r\n      body: \"Lorem ninja ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut ninja wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit ninja lobortis nisl ut aliquip ex ea commodo consequat. Duis ninja autem vel eum iriure dolor in hendrerit in vulputate ninja velit esse molestie consequat, vel illum dolore eu feugiat nulla ninja facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam ninja ipsum liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi ninja non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes ninja demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas ninja est etiam processus dynamicus, qui ninja sequitur mutationem consuetudium lectorum. Mirum ninja est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem ninja ipsum modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in ninja futurum.\"\r\n    }\r\n];\r\n\r\nfunction getPosts(){return posts;}\r\n\r\nfunction getPost(id){\r\n  return posts.filter((post)=>post.id == id)[0]  \r\n} // end-getPost\r\n\r\nfunction addPost(doc){\r\n  doc.id = nextPostId++;\r\n  posts.push(doc);\r\n} // end-addPost\r\n\r\nfunction deletePost(id){\r\n  posts = posts.filter((post)=>post.id != id);\r\n} // end-deletePost\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPosts);  // Must have one default export\r\n\n\n//# sourceURL=webpack://01-demo/./src/state.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;