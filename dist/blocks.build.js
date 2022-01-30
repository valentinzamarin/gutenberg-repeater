/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    TextControl = _wp$components.TextControl,\n    IconButton = _wp$components.IconButton;\nvar Fragment = wp.element.Fragment;\n\n\nregisterBlockType('cgb/block-gutenberg-repeater', {\n\ttitle: __('gutenberg-repeater'),\n\ticon: 'list-view',\n\tcategory: 'common',\n\tkeywords: [__('gutenberg-repeater')],\n\tattributes: {\n\t\trepeater: {\n\t\t\ttype: 'array',\n\t\t\tdefault: []\n\t\t}\n\t},\n\n\tedit: function edit(props) {\n\t\tvar handleAddField = function handleAddField() {\n\t\t\tvar repeater = [].concat(_toConsumableArray(props.attributes.repeater));\n\t\t\trepeater.push({\n\t\t\t\titem: ''\n\t\t\t});\n\t\t\tprops.setAttributes({ repeater: repeater });\n\t\t};\n\n\t\tvar handleChangeField = function handleChangeField(item, idx) {\n\t\t\tvar repeater = [].concat(_toConsumableArray(props.attributes.repeater));\n\t\t\trepeater[idx].item = item;\n\t\t\tprops.setAttributes({ repeater: repeater });\n\t\t};\n\n\t\tvar handleRemoveItem = function handleRemoveItem(idx) {\n\t\t\tvar repeater = [].concat(_toConsumableArray(props.attributes.repeater));\n\t\t\trepeater.splice(idx, 1);\n\t\t\tprops.setAttributes({ repeater: repeater });\n\t\t};\n\n\t\tvar repeaterField = void 0;\n\t\tif (props.attributes.repeater.length) {\n\t\t\trepeaterField = props.attributes.repeater.map(function (repeater, idx) {\n\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\tFragment,\n\t\t\t\t\t{ key: idx },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'repeater-item' },\n\t\t\t\t\t\twp.element.createElement(TextControl, {\n\t\t\t\t\t\t\tplaceholder: __('Repeater item'),\n\t\t\t\t\t\t\tvalue: props.attributes.repeater[idx].item,\n\t\t\t\t\t\t\tonChange: function onChange(item) {\n\t\t\t\t\t\t\t\treturn handleChangeField(item, idx);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}),\n\t\t\t\t\t\twp.element.createElement(IconButton, {\n\t\t\t\t\t\t\ticon: 'no-alt',\n\t\t\t\t\t\t\tlabel: __('Remove item'),\n\t\t\t\t\t\t\tonClick: function onClick() {\n\t\t\t\t\t\t\t\treturn handleRemoveItem(idx);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t);\n\t\t\t});\n\t\t}\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\trepeaterField,\n\t\t\twp.element.createElement(\n\t\t\t\tButton,\n\t\t\t\t{\n\t\t\t\t\tonClick: function onClick() {\n\t\t\t\t\t\treturn handleAddField();\n\t\t\t\t\t},\n\t\t\t\t\tclassName: 'button button-primary'\n\t\t\t\t},\n\t\t\t\t__('Add Field')\n\t\t\t)\n\t\t);\n\t},\n\n\tsave: function save(props) {\n\t\tvar repeaterFront = props.attributes.repeater.map(function (repeater, idx) {\n\t\t\treturn wp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\t{ key: idx },\n\t\t\t\trepeater.item\n\t\t\t);\n\t\t});\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\trepeaterFront\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIF93cCRjb21wb25lbnRzID0gd3AuY29tcG9uZW50cyxcbiAgICBCdXR0b24gPSBfd3AkY29tcG9uZW50cy5CdXR0b24sXG4gICAgVGV4dENvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5UZXh0Q29udHJvbCxcbiAgICBJY29uQnV0dG9uID0gX3dwJGNvbXBvbmVudHMuSWNvbkJ1dHRvbjtcbnZhciBGcmFnbWVudCA9IHdwLmVsZW1lbnQuRnJhZ21lbnQ7XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2NnYi9ibG9jay1ndXRlbmJlcmctcmVwZWF0ZXInLCB7XG5cdHRpdGxlOiBfXygnZ3V0ZW5iZXJnLXJlcGVhdGVyJyksXG5cdGljb246ICdsaXN0LXZpZXcnLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cdGtleXdvcmRzOiBbX18oJ2d1dGVuYmVyZy1yZXBlYXRlcicpXSxcblx0YXR0cmlidXRlczoge1xuXHRcdHJlcGVhdGVyOiB7XG5cdFx0XHR0eXBlOiAnYXJyYXknLFxuXHRcdFx0ZGVmYXVsdDogW11cblx0XHR9XG5cdH0sXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXHRcdHZhciBoYW5kbGVBZGRGaWVsZCA9IGZ1bmN0aW9uIGhhbmRsZUFkZEZpZWxkKCkge1xuXHRcdFx0dmFyIHJlcGVhdGVyID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShwcm9wcy5hdHRyaWJ1dGVzLnJlcGVhdGVyKSk7XG5cdFx0XHRyZXBlYXRlci5wdXNoKHtcblx0XHRcdFx0aXRlbTogJydcblx0XHRcdH0pO1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7IHJlcGVhdGVyOiByZXBlYXRlciB9KTtcblx0XHR9O1xuXG5cdFx0dmFyIGhhbmRsZUNoYW5nZUZpZWxkID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlRmllbGQoaXRlbSwgaWR4KSB7XG5cdFx0XHR2YXIgcmVwZWF0ZXIgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHByb3BzLmF0dHJpYnV0ZXMucmVwZWF0ZXIpKTtcblx0XHRcdHJlcGVhdGVyW2lkeF0uaXRlbSA9IGl0ZW07XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgcmVwZWF0ZXI6IHJlcGVhdGVyIH0pO1xuXHRcdH07XG5cblx0XHR2YXIgaGFuZGxlUmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIGhhbmRsZVJlbW92ZUl0ZW0oaWR4KSB7XG5cdFx0XHR2YXIgcmVwZWF0ZXIgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHByb3BzLmF0dHJpYnV0ZXMucmVwZWF0ZXIpKTtcblx0XHRcdHJlcGVhdGVyLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7IHJlcGVhdGVyOiByZXBlYXRlciB9KTtcblx0XHR9O1xuXG5cdFx0dmFyIHJlcGVhdGVyRmllbGQgPSB2b2lkIDA7XG5cdFx0aWYgKHByb3BzLmF0dHJpYnV0ZXMucmVwZWF0ZXIubGVuZ3RoKSB7XG5cdFx0XHRyZXBlYXRlckZpZWxkID0gcHJvcHMuYXR0cmlidXRlcy5yZXBlYXRlci5tYXAoZnVuY3Rpb24gKHJlcGVhdGVyLCBpZHgpIHtcblx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRGcmFnbWVudCxcblx0XHRcdFx0XHR7IGtleTogaWR4IH0sXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ3JlcGVhdGVyLWl0ZW0nIH0sXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGV4dENvbnRyb2wsIHtcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI6IF9fKCdSZXBlYXRlciBpdGVtJyksXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLnJlcGVhdGVyW2lkeF0uaXRlbSxcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGl0ZW0pIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gaGFuZGxlQ2hhbmdlRmllbGQoaXRlbSwgaWR4KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSWNvbkJ1dHRvbiwge1xuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm8tYWx0Jyxcblx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCdSZW1vdmUgaXRlbScpLFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBoYW5kbGVSZW1vdmVJdGVtKGlkeCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfSxcblx0XHRcdHJlcGVhdGVyRmllbGQsXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdEJ1dHRvbixcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gaGFuZGxlQWRkRmllbGQoKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNsYXNzTmFtZTogJ2J1dHRvbiBidXR0b24tcHJpbWFyeSdcblx0XHRcdFx0fSxcblx0XHRcdFx0X18oJ0FkZCBGaWVsZCcpXG5cdFx0XHQpXG5cdFx0KTtcblx0fSxcblxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0dmFyIHJlcGVhdGVyRnJvbnQgPSBwcm9wcy5hdHRyaWJ1dGVzLnJlcGVhdGVyLm1hcChmdW5jdGlvbiAocmVwZWF0ZXIsIGlkeCkge1xuXHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3AnLFxuXHRcdFx0XHR7IGtleTogaWR4IH0sXG5cdFx0XHRcdHJlcGVhdGVyLml0ZW1cblx0XHRcdCk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB9LFxuXHRcdFx0cmVwZWF0ZXJGcm9udFxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);