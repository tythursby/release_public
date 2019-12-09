/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.js","vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mdbvue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdbvue */ "./node_modules/mdbvue/src/index.js");
/* harmony import */ var _components_MenuMaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MenuMaker */ "./src/components/MenuMaker.vue");
/* harmony import */ var _components_CropComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/CropComponent */ "./src/components/CropComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AdminTemplate',
  components: {
    mdbContainer: mdbvue__WEBPACK_IMPORTED_MODULE_0__["mdbContainer"],
    mdbNavbar: mdbvue__WEBPACK_IMPORTED_MODULE_0__["mdbNavbar"],
    mdbNavbarBrand: mdbvue__WEBPACK_IMPORTED_MODULE_0__["mdbNavbarBrand"],
    mdbNavItem: mdbvue__WEBPACK_IMPORTED_MODULE_0__["mdbNavItem"],
    mdbNavbarNav: mdbvue__WEBPACK_IMPORTED_MODULE_0__["mdbNavbarNav"],
    mdbNavbarToggler: mdbvue__WEBPACK_IMPORTED_MODULE_0__["mdbNavbarToggler"],
    mdbBtn: mdbvue__WEBPACK_IMPORTED_MODULE_0__["mdbBtn"],
    mdbListGroup: mdbvue__WEBPACK_IMPORTED_MODULE_0__["mdbListGroup"],
    mdbListGroupItem: mdbvue__WEBPACK_IMPORTED_MODULE_0__["mdbListGroupItem"],
    mdbIcon: mdbvue__WEBPACK_IMPORTED_MODULE_0__["mdbIcon"],
    mdbCardBody: mdbvue__WEBPACK_IMPORTED_MODULE_0__["mdbCardBody"],
    'ftr': mdbvue__WEBPACK_IMPORTED_MODULE_0__["mdbFooter"],
    MenuMaker: _components_MenuMaker__WEBPACK_IMPORTED_MODULE_1__["default"],
    Crop: _components_CropComponent__WEBPACK_IMPORTED_MODULE_2__["default"]

  },
  data: function data() {
    return {
      activeItem: 1
    };
  },
  beforeMount: function beforeMount() {
    this.activeItem = this.$route.matched[0].props.default.page;
  },

  mixins: [mdbvue__WEBPACK_IMPORTED_MODULE_0__["waves"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/BadGateway.vue":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/BadGateway.vue ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mdbvue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdbvue */ "./node_modules/mdbvue/src/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BadGateway',
  components: {
    mdbRow: mdbvue__WEBPACK_IMPORTED_MODULE_0__["mdbRow"],
    mdbCol: mdbvue__WEBPACK_IMPORTED_MODULE_0__["mdbCol"]
  },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/CropCategory.vue":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/CropCategory.vue ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mdbvue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdbvue */ "./node_modules/mdbvue/src/index.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CropCategoryModal',
  props: {
    categoryImage: {
      type: String
    },
    categoryImageId: {
      type: String
    },
    categoryName: {
      type: String
    },
    show: {
      type: Boolean
    }
  },
  components: {
    mdbBtn: mdbvue__WEBPACK_IMPORTED_MODULE_2__["mdbBtn"],
    mdbSpinner: mdbvue__WEBPACK_IMPORTED_MODULE_2__["mdbSpinner"],
    mdbRow: mdbvue__WEBPACK_IMPORTED_MODULE_2__["mdbRow"],
    mdbCol: mdbvue__WEBPACK_IMPORTED_MODULE_2__["mdbCol"],
    mdbModalBody: mdbvue__WEBPACK_IMPORTED_MODULE_2__["mdbModalBody"],
    mdbModal: mdbvue__WEBPACK_IMPORTED_MODULE_2__["mdbModal"],
    mdbModalFooter: mdbvue__WEBPACK_IMPORTED_MODULE_2__["mdbModalFooter"],
    mdbModalHeader: mdbvue__WEBPACK_IMPORTED_MODULE_2__["mdbModalHeader"]
  },
  data: function data() {
    return {
      cropped: null,
      loading: false
    };
  },

  watch: {
    categoryImage: function categoryImage() {
      this.$refs.croppieRef.bind({
        url: this.categoryImage
      });
    }
  },
  methods: {
    crop: function crop() {
      var _this = this;

      this.$refs.croppieRef.result(function (output) {
        return _this.cropped = output;
      });
    },
    updatePreviewCat: function updatePreviewCat(id) {
      var _this2 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var preview;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.crop();

              case 2:
                preview = _this2.cropped;

                _this2.$parent.updatePreviewCat(id, preview);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },
    closeCategoryModal: function closeCategoryModal(id) {
      this.$emit('closeModal');
      this.$parent.resetInput(id);
    },
    post: function post() {
      var _this3 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var base64result;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.loading = true;
                _context2.next = 3;
                return _this3.crop();

              case 3:
                base64result = _this3.cropped.split(',')[1];

                _this3.axios.post('https://api.compassionate.cloud/photo/category', {
                  org: 'greenleaf',
                  category: _this3.categoryImageId,
                  photo: base64result
                }).then(function (response) {
                  this.$emit('closeModal');
                  this.loading = false;
                  console.log(response);
                  // if (response.data.success === true) {
                  //
                  // }
                }.bind(_this3)).catch(function (error) {
                  console.log(error);
                });

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }))();
    },
    result: function result(output) {
      this.cropped = output;
    },
    update: function update(val) {
      console.log(val);
    },
    rotate: function rotate(rotationAngle) {
      // Rotates the image
      this.$refs.croppieRef.rotate(rotationAngle);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/CropComponent.vue":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/CropComponent.vue ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mdbvue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdbvue */ "./node_modules/mdbvue/src/index.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CropModal',
  props: {
    productImage: {
      type: String
    },
    productImageId: {
      type: String
    },
    show: {
      type: Boolean
    }
  },
  components: {
    mdbBtn: mdbvue__WEBPACK_IMPORTED_MODULE_2__["mdbBtn"],
    mdbSpinner: mdbvue__WEBPACK_IMPORTED_MODULE_2__["mdbSpinner"],
    mdbRow: mdbvue__WEBPACK_IMPORTED_MODULE_2__["mdbRow"],
    mdbCol: mdbvue__WEBPACK_IMPORTED_MODULE_2__["mdbCol"],
    mdbModalBody: mdbvue__WEBPACK_IMPORTED_MODULE_2__["mdbModalBody"],
    mdbModal: mdbvue__WEBPACK_IMPORTED_MODULE_2__["mdbModal"],
    mdbModalFooter: mdbvue__WEBPACK_IMPORTED_MODULE_2__["mdbModalFooter"],
    mdbModalHeader: mdbvue__WEBPACK_IMPORTED_MODULE_2__["mdbModalHeader"]
  },
  data: function data() {
    return {
      cropped: null,
      loading: false
    };
  },

  watch: {
    productImage: function productImage() {
      this.$refs.croppieRef.bind({
        url: this.productImage
      });
    }
  },
  methods: {
    crop: function crop() {
      var _this = this;

      this.$refs.croppieRef.result(function (output) {
        return _this.cropped = output;
      });
    },
    updatePreviewItem: function updatePreviewItem(id) {
      var _this2 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var preview;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.crop();

              case 2:
                preview = _this2.cropped;

                _this2.$parent.updatePreviewItem(id, preview);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },
    closeModal: function closeModal(id) {
      this.$emit('closeModal');
      this.$parent.resetInput(id);
    },
    post: function post() {
      var _this3 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var base64result;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.loading = true;
                _context2.next = 3;
                return _this3.crop();

              case 3:
                _context2.next = 5;
                return _this3.updatePreviewItem();

              case 5:
                base64result = _this3.cropped.split(',')[1];

                _this3.axios.post('https://api.compassionate.cloud/photo/product', {
                  org: 'greenleaf',
                  product: _this3.productImageId,
                  photo: base64result
                }).then(function (response) {

                  this.$emit('closeModal');
                  this.loading = false;
                  console.log(response);
                  // if (response.data.success === true) {
                  //
                  // }
                }.bind(_this3)).catch(function (error) {
                  console.log(error);
                });

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }))();
    },
    result: function result(output) {
      this.cropped = output;
    },
    update: function update(val) {
      console.log(val);
    },
    rotate: function rotate(rotationAngle) {
      // Rotates the image
      this.$refs.croppieRef.rotate(rotationAngle);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/MenuMaker.vue":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/MenuMaker.vue ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/values */ "./node_modules/babel-runtime/core-js/object/values.js");
/* harmony import */ var babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mdbvue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdbvue */ "./node_modules/mdbvue/src/index.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CropComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CropComponent */ "./src/components/CropComponent.vue");
/* harmony import */ var _CropCategory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CropCategory */ "./src/components/CropCategory.vue");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MenuMaker',
  components: {
    mdbRow: mdbvue__WEBPACK_IMPORTED_MODULE_1__["mdbRow"],
    mdbCol: mdbvue__WEBPACK_IMPORTED_MODULE_1__["mdbCol"],
    mdbCard: mdbvue__WEBPACK_IMPORTED_MODULE_1__["mdbCard"],
    mdbCardHeader: mdbvue__WEBPACK_IMPORTED_MODULE_1__["mdbCardHeader"],
    mdbCardBody: mdbvue__WEBPACK_IMPORTED_MODULE_1__["mdbCardBody"],
    mdbCardTitle: mdbvue__WEBPACK_IMPORTED_MODULE_1__["mdbCardTitle"],
    mdbCardText: mdbvue__WEBPACK_IMPORTED_MODULE_1__["mdbCardText"],
    mdbCardFooter: mdbvue__WEBPACK_IMPORTED_MODULE_1__["mdbCardFooter"],
    mdbIcon: mdbvue__WEBPACK_IMPORTED_MODULE_1__["mdbIcon"],
    mdbBtn: mdbvue__WEBPACK_IMPORTED_MODULE_1__["mdbBtn"],
    mdbTbl: mdbvue__WEBPACK_IMPORTED_MODULE_1__["mdbTbl"],
    mdbTblHead: mdbvue__WEBPACK_IMPORTED_MODULE_1__["mdbTblHead"],
    mdbTblBody: mdbvue__WEBPACK_IMPORTED_MODULE_1__["mdbTblBody"],
    mdbInput: mdbvue__WEBPACK_IMPORTED_MODULE_1__["mdbInput"],
    mdbFileInput: mdbvue__WEBPACK_IMPORTED_MODULE_1__["mdbFileInput"],
    mdbSelect: mdbvue__WEBPACK_IMPORTED_MODULE_1__["mdbSelect"],
    mdbModal: mdbvue__WEBPACK_IMPORTED_MODULE_1__["mdbModal"],
    mdbModalBody: mdbvue__WEBPACK_IMPORTED_MODULE_1__["mdbModalBody"],
    mdbModalHeader: mdbvue__WEBPACK_IMPORTED_MODULE_1__["mdbModalHeader"],
    mdbNumericInput: mdbvue__WEBPACK_IMPORTED_MODULE_1__["mdbNumericInput"],
    mdbContainer: mdbvue__WEBPACK_IMPORTED_MODULE_1__["mdbContainer"],
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_2___default.a,
    CropModal: _CropComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
    CropCategoryModal: _CropCategory__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      categoryModal: false,
      showCropProductModal: false,
      showCropCategoryModal: false,
      productImage: '',
      productImageId: null,
      categoryImage: '',
      categoryImageId: null,
      cropped: null,
      productImageFile: '',
      categoryImageFile: '',
      categories: [],
      categoryOrder: [],
      productOrder: [],
      selectedCategory: null,
      selectedCategoryItems: [],
      products: [],
      menu: null,
      editCategoryOptions: [{
        text: 'Choose Category',
        value: null,
        disabled: true,
        selected: true
      }]
    };
  },

  methods: {
    closeProductModal: function closeProductModal() {
      this.showCropProductModal = false;
    },
    closeCategoryModal: function closeCategoryModal() {
      this.showCropCategoryModal = false;
    },
    updatePreviewItem: function updatePreviewItem(id, preview) {
      var _this = this;

      var currentObj = this.products.filter(function (x) {
        return x.category === _this.selectedCategory;
      });
      var currentItem = currentObj[0].items;
      for (var i = 0; i < currentItem.length; i++) {
        if (currentItem[i].id === id) {
          currentItem[i].imagePreview = preview;
        }
      }
    },
    updatePreviewCat: function updatePreviewCat(id, preview) {
      var cats = this.categories;
      for (var i = 0; i < cats.length; i++) {
        if (cats[i].id === id) {
          cats[i].imagePreview = preview;
        }
      }
    },
    resetInput: function resetInput(id) {
      document.getElementById('img_' + id).value = '';
    },
    postRenameProduct: function postRenameProduct(newName, id) {
      this.axios.post('https://api.compassionate.cloud/rename/product', {
        org: 'greenleaf',
        id: id,
        name: newName
      }).then(function (response) {
        console.log(response);
        // if (response.data.success === true) {
        //
        // }
      }).catch(function (error) {
        console.log(error);
      });
    },
    postRenameCategory: function postRenameCategory(newName, id) {
      this.axios.post('https://api.compassionate.cloud/rename/category', {
        org: 'greenleaf',
        id: id,
        name: newName
      }).then(function (response) {
        console.log(response);
        // if (response.data.success === true) {
        //
        // }
      }).catch(function (error) {
        console.log(error);
      });
    },
    postCategoryOrder: function postCategoryOrder() {
      this.categoryOrder = this.editCategoryOptions.filter(function (x) {
        return x.value != null;
      }).map(function (y) {
        return y.id;
      });

      this.axios.post('https://api.compassionate.cloud/reorder/category', {
        org: 'greenleaf',
        categories: this.categoryOrder
      }).then(function (response) {
        console.log(response);
        // if (response.data.success === true) {
        //
        // }
      }).catch(function (error) {
        console.log(error);
      });
    },
    postProductOrder: function postProductOrder(obj) {
      var category = obj.id;
      var orderInCat = obj.items.map(function (x) {
        return x.id;
      });

      // alert(JSON.stringify(object));
      this.axios.post('https://api.compassionate.cloud/reorder/products', {
        org: 'greenleaf',
        products: orderInCat,
        category: category
      }).then(function (response) {
        console.log(response);
        // if (response.data.success === true) {
        //
        // }
      }).catch(function (error) {
        console.log(error);
      });
    },
    handleFileUploadCategory: function handleFileUploadCategory(x) {

      this.categoryImageFile = this.$refs[x][0].files[0];

      if (/\.(jpe?g|png|gif)$/i.test(this.categoryImageFile.name)) {

        var reader = new FileReader();

        reader.addEventListener("load", function () {

          this.categoryImage = reader.result;
        }.bind(this), false);

        reader.readAsDataURL(this.categoryImageFile);
      }
      this.showCropCategoryModal = true;
    },
    handleFileUploadProducts: function handleFileUploadProducts(x) {

      this.productImageFile = this.$refs[x][0].files[0];

      if (/\.(jpe?g|png|gif)$/i.test(this.productImageFile.name)) {

        var reader = new FileReader();

        reader.addEventListener("load", function () {

          this.productImage = reader.result;
        }.bind(this), false);

        reader.readAsDataURL(this.productImageFile);
      }
      this.showCropProductModal = true;
    },
    getSelectedCategory: function getSelectedCategory(value) {
      this.selectedCategory = value;

      for (var i = 0; i < this.menu.length; i++) {
        var cats = this.menu[i].name;
        var items = this.menu[i].items;
        if (cats.indexOf(value) > 0) {
          this.selectedCategoryItems = items;
        }
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.axios.get('https://api.compassionate.cloud/greenleaf/menu2').then(function (response) {
      _this2.menu = response.data.data;
      var organized = _this2.menu.map(function (cat) {
        return new Object({
          category: cat.name,
          id: cat.id,
          items: babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(cat.items).map(function (x) {
            return new Object({
              name: x.name,
              id: x.id,
              price: x.price,
              photo: x.photo,
              showEditing: false,
              editedName: '',
              file: '',
              imagePreview: ''
            });
          })

        });
      });

      _this2.products = [].concat.apply([], organized);

      for (var i = 0; i < _this2.menu.length; i++) {

        var catImageObj = {
          name: _this2.menu[i].name,
          id: _this2.menu[i].id,
          photo: _this2.menu[i].photo,
          editedName: '',
          file: '',
          imagePreview: '',
          showPreview: false
        };
        var catObj = {
          text: _this2.menu[i].name,
          id: _this2.menu[i].id,
          value: _this2.menu[i].name,
          selected: false
        };

        _this2.editCategoryOptions.push(catObj);

        _this2.categories.push(catImageObj);
      };
    }).catch(function (error) {
      console.log(error);
      _this2.errored = true;
    }).finally(function () {
      return _this2.loading = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-2822785c\",\"scoped\":true,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MenuMaker.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"sourceMap":true}!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-2822785c","scoped":true,"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MenuMaker.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-52f7109e\",\"scoped\":true,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/CropComponent.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"sourceMap":true}!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-52f7109e","scoped":true,"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/CropComponent.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-65822436\",\"scoped\":true,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/CropCategory.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"sourceMap":true}!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-65822436","scoped":true,"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/CropCategory.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-9cbefb02\",\"scoped\":true,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/BadGateway.vue":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"sourceMap":true}!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-9cbefb02","scoped":true,"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/BadGateway.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-badcb320\",\"scoped\":true,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/App.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"sourceMap":true}!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-badcb320","scoped":true,"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/App.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=1!./src/App.vue":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"sourceMap":true}!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=1!./src/App.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2822785c\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/MenuMaker.vue":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2822785c","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/MenuMaker.vue ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{attrs:{"id":"profile"}},[_c('mdb-row',[_c('mdb-col',{attrs:{"lg":"12","md":"12"}},[_c('mdb-card',[_c('mdb-card-body',{staticClass:"text-center"},[_c('mdb-row',[_c('mdb-col',{attrs:{"lg":"4","md":"6"}},[_c('mdb-select',{staticStyle:{"max-height":"30rem"},attrs:{"color":"default","options":_vm.editCategoryOptions,"label":"Edit Category"},on:{"getValue":_vm.getSelectedCategory}})],1),_vm._v(" "),_c('mdb-col',{staticClass:"alignLeft",attrs:{"lg":"2","md":"6"}},[_c('mdb-container',[_c('p',{staticClass:"label"},[_vm._v("Category Order")]),_vm._v(" "),_c('mdb-btn',{staticClass:"center",attrs:{"size":"sm","outline":"default","darkWaves":"","rounded":""},nativeOn:{"click":function($event){_vm.categoryModal = true}}},[_vm._v("Arrange Categories")])],1)],1),_vm._v(" "),_c('mdb-col',{staticClass:"alignLeft",attrs:{"lg":"4","md":"6"}},[_c('p',{staticClass:"label"},[_vm._v("Category Image")]),_vm._v(" "),_vm._l((_vm.categories),function(x,index){return _c('tr',{directives:[{name:"show",rawName:"v-show",value:(x.name === _vm.selectedCategory),expression:"x.name === selectedCategory"}],key:index,staticStyle:{"flex-direction":"row"}},[_c('img',{staticClass:"img-thumbnails left",staticStyle:{"margin-right":"10px"},attrs:{"src":x.imagePreview ? x.imagePreview : x.photo,"alt":"thumbnail","width":"100px"}}),_vm._v(" "),_c('td',{staticStyle:{"vertical-align":"top","padding-left":"0"}},[_c('input',{ref:x.id,refInFor:true,staticClass:"category",staticStyle:{"font-size":"14px","line-height":"1.2em"},attrs:{"type":"file","accept":"image/*","id":'img_'+x.id},on:{"change":function($event){_vm.handleFileUploadCategory(x.id); _vm.categoryImageId = x.id}}})])])})],2)],1)],1)],1)],1)],1),_vm._v(" "),_c('mdb-modal',{attrs:{"size":"lg","show":_vm.categoryModal},on:{"close":function($event){_vm.categoryModal = false}}},[_c('mdb-modal-header',[_vm._v("\n      Drag and Drop to Arrange\n    ")]),_vm._v(" "),_c('mdb-modal-body',[_c('draggable',{on:{"start":function($event){_vm.drag=true},"end":_vm.postCategoryOrder},model:{value:(_vm.editCategoryOptions),callback:function ($$v) {_vm.editCategoryOptions=$$v},expression:"editCategoryOptions"}},_vm._l((_vm.editCategoryOptions),function(cat,index){return _c('div',{key:index,staticStyle:{"cursor":"pointer"},attrs:{"onmouseover":""}},[(cat.value != null)?_c('mdb-btn',{attrs:{"sm":"","color":"default","disabled":""}},[_vm._v(_vm._s(cat.value))]):_vm._e()],1)}),0)],1)],1),_vm._v(" "),_c('mdb-card',{directives:[{name:"show",rawName:"v-show",value:(_vm.selectedCategory),expression:"selectedCategory"}],attrs:{"cascade":"","narrow":""}},[_c('mdb-card-header',{staticClass:"font-bold mb-2"},_vm._l((_vm.categories),function(x,index){return (x.name === _vm.selectedCategory)?_c('mdb-row',{key:index},[_c('mdb-col',{staticClass:"mb-r",attrs:{"lg":"6","md":"6"}},[_c('mdb-input',{attrs:{"label":x.name,"icon":"edit"},model:{value:(x.editedName),callback:function ($$v) {_vm.$set(x, "editedName", $$v)},expression:"x.editedName"}}),_vm._v(" "),_c('ul',{staticClass:"info"},[_c('li',[_vm._v("Drag and drop item rows to rearrange")]),_vm._v(" "),_c('li',[_vm._v("Click Item Name to edit")])])],1),_vm._v(" "),_c('mdb-btn',{staticStyle:{"height":"40px"},attrs:{"size":"sm","outline":"default","darkWaves":"","rounded":""},nativeOn:{"click":function($event){return _vm.postRenameCategory(x.editedName, x.id)}}},[_vm._v("rename")])],1):_vm._e()}),1),_vm._v(" "),_c('mdb-col',{staticClass:"mb-r",attrs:{"lg":"12","md":"12"}},[_c('mdb-tbl',{attrs:{"responsiveLg":""}},[_c('mdb-tbl-head',{attrs:{"color":"primary-color","textWhite":""}},[_c('tr',[_c('th',[_c('mdb-icon',{attrs:{"far":"","icon":"file-image"}}),_vm._v(" Image\n            ")],1),_vm._v(" "),_c('th'),_vm._v(" "),_c('th',[_vm._v("Item Name\n              "),_c('mdb-icon',{attrs:{"far":"","icon":"edit"}})],1),_vm._v(" "),_c('th',[_vm._v("Price")])])]),_vm._v(" "),_vm._l((_vm.products),function(obj,index){return _c('draggable',{key:index,attrs:{"list":obj.items,"tag":'tbody',"ghost-class":"ghost"},on:{"end":function($event){return _vm.postProductOrder(obj)}}},_vm._l((obj.items),function(x,index){return (obj.category === _vm.selectedCategory)?_c('tr',{staticClass:"tableRow",staticStyle:{"cursor":"pointer"},attrs:{"scope":"row","onmouseover":""}},[_c('th',{attrs:{"scope":"row"}},[_c('img',{key:index,staticClass:"img-thumbnails left",staticStyle:{"margin-right":"5px"},attrs:{"src":x.imagePreview ? x.imagePreview : x.photo,"alt":"thumbnail","width":80}})]),_vm._v(" "),_c('td',{staticStyle:{"vertical-align":"middle","padding-left":"0"}},[_c('input',{key:index,ref:x.id,refInFor:true,staticStyle:{"font-size":"14px","line-height":"1.2em"},attrs:{"type":"file","accept":"image/*","id":'img_'+x.id},on:{"change":function($event){_vm.handleFileUploadProducts(x.id); _vm.productImageId = x.id}}})]),_vm._v(" "),_c('td',{staticStyle:{"vertical-align":"middle","width":"auto"}},[_c('div',[_c('label',{directives:[{name:"show",rawName:"v-show",value:(x.showEditing === false && x.editedName === ""),expression:"x.showEditing === false && x.editedName === \"\""}],staticClass:"nameLabel",staticStyle:{"cursor":"text"},attrs:{"onmouseover":""},on:{"click":function($event){x.showEditing = true}}},[_vm._v(_vm._s(x.name))]),_vm._v(" "),_c('label',{directives:[{name:"show",rawName:"v-show",value:(x.showEditing === false && x.editedName != ""),expression:"x.showEditing === false && x.editedName != \"\""}],staticClass:"nameLabel",staticStyle:{"cursor":"text"},attrs:{"onmouseover":""},on:{"click":function($event){x.showEditing = true}}},[_vm._v(_vm._s(x.editedName))]),_vm._v(" "),_c('input',{directives:[{name:"show",rawName:"v-show",value:(x.showEditing),expression:"x.showEditing"},{name:"model",rawName:"v-model",value:(x.editedName),expression:"x.editedName"}],staticStyle:{"overflow":"visible","border":"none"},attrs:{"placeholder":"Rename"},domProps:{"value":(x.editedName)},on:{"blur":function($event){x.showEditing=false; _vm.$emit('update'); _vm.postRenameProduct(x.editedName, x.id)},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }x.showEditing=false; _vm.$emit('update')},"input":function($event){if($event.target.composing){ return; }_vm.$set(x, "editedName", $event.target.value)}}})])]),_vm._v(" "),_c('td',{staticStyle:{"vertical-align":"middle"}},[_vm._v(_vm._s(x.price))])]):_vm._e()}),0)})],2)],1)],1),_vm._v(" "),_c('CropModal',{attrs:{"productImage":_vm.productImage,"productImageId":_vm.productImageId,"show":_vm.showCropProductModal},on:{"closeModal":_vm.closeProductModal}}),_vm._v(" "),_c('CropCategoryModal',{attrs:{"categoryImage":_vm.categoryImage,"categoryImageId":_vm.categoryImageId,"categoryName":_vm.selectedCategory,"show":_vm.showCropCategoryModal},on:{"closeModal":_vm.closeCategoryModal}})],1)}
var staticRenderFns = []


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-52f7109e\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/CropComponent.vue":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-52f7109e","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/CropComponent.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('mdb-modal',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],attrs:{"size":"lg","removeBackdrop":false},on:{"close":function($event){return _vm.closeModal()}}},[_c('mdb-modal-header',[_vm._v("\n    Crop Image - Product# "+_vm._s(_vm.productImageId)+"\n  ")]),_vm._v(" "),_c('mdb-modal-body',[_c('div',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"loading"},[_c('mdb-spinner',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],attrs:{"big":""}}),_vm._v(" "),_c('label',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"loadingText"},[_vm._v(" ...uploading")])],1),_vm._v(" "),_c('vue-croppie',{ref:"croppieRef",attrs:{"enforceBoundary":true,"enableOrientation":true,"enableResize:":false,"viewport":{ width: 500, height: 500, type: 'square' },"boundary":{ width: '100%', height: 600 }},on:{"result":_vm.result,"update":_vm.update}})],1)]),_vm._v(" "),_c('mdb-modal-footer',[_c('mdb-btn',{staticStyle:{"float":"right"},attrs:{"size":"sm","color":"default","darkWaves":"","disabled":_vm.loading},nativeOn:{"click":function($event){return _vm.closeModal(_vm.productImageId)}}},[_vm._v("cancel")]),_vm._v(" "),_c('mdb-btn',{staticStyle:{"float":"right"},attrs:{"size":"sm","color":"default","darkWaves":"","disabled":_vm.loading},nativeOn:{"click":function($event){_vm.crop(); _vm.updatePreviewItem(_vm.productImageId); _vm.post()}}},[_vm._v("Crop + Upload")])],1)],1)}
var staticRenderFns = []


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-65822436\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/CropCategory.vue":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-65822436","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/CropCategory.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('mdb-modal',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],attrs:{"size":"lg","removeBackdrop":false},on:{"close":function($event){return _vm.closeCategoryModal()}}},[_c('mdb-modal-header',[_vm._v("\n    Crop Image - "+_vm._s(_vm.categoryName)+"\n  ")]),_vm._v(" "),_c('mdb-modal-body',[_c('div',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"loading"},[_c('mdb-spinner',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],attrs:{"big":""}}),_vm._v(" "),_c('label',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"loadingText"},[_vm._v(" ...uploading")])],1),_vm._v(" "),_c('vue-croppie',{ref:"croppieRef",attrs:{"enforceBoundary":true,"enableOrientation":true,"enableResize:":false,"viewport":{ width: 500, height: 500, type: 'square' },"boundary":{ width: '100%', height: 600 }},on:{"result":_vm.result,"update":_vm.update}})],1)]),_vm._v(" "),_c('mdb-modal-footer',[_c('mdb-btn',{staticStyle:{"float":"right"},attrs:{"size":"sm","color":"default","darkWaves":"","disabled":_vm.loading},nativeOn:{"click":function($event){return _vm.closeCategoryModal(_vm.categoryImageId)}}},[_vm._v("cancel")]),_vm._v(" "),_c('mdb-btn',{staticStyle:{"float":"right"},attrs:{"size":"sm","color":"default","darkWaves":"","disabled":_vm.loading},nativeOn:{"click":function($event){_vm.crop(); _vm.updatePreviewCat(_vm.categoryImageId); _vm.post()}}},[_vm._v("Crop + Upload")])],1)],1)}
var staticRenderFns = []


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-9cbefb02\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/BadGateway.vue":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9cbefb02","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/BadGateway.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{attrs:{"id":"bad-gateway"}},[_c('div',{staticClass:"full"},[_c('mdb-row',{staticClass:"bad-gateway-row"},[_c('mdb-col',{attrs:{"md":"8"}},[_c('img',{staticClass:"img-fluid",attrs:{"alt":"Error 404","hieght":"20px","src":__webpack_require__(/*! ../assets/greenleaf-logo.png */ "./src/assets/greenleaf-logo.png")}}),_vm._v(" "),_c('h2',{staticClass:"h2-responsive mt-3 mb-2"},[_vm._v("404. That's an error.")]),_vm._v(" "),_c('h4',[_vm._v("The requested URL was not found on this server.")])]),_vm._v(" "),_c('mdb-col',{attrs:{"md":"4"}},[_c('img',{staticClass:"img-fluid",attrs:{"alt":"Error 404","src":"https://mdbootstrap.com/img/Others/grafika404-bf.png"}})])],1)],1)])}
var staticRenderFns = []


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-badcb320\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-badcb320","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flexible-content"},[_c('mdb-navbar',{staticClass:"flexible-navbar white",attrs:{"light":"","position":"top","scrolling":""}},[_c('mdb-navbar-brand',[_vm._v("ADMIN")]),_vm._v(" "),_c('mdb-navbar-toggler',[_c('mdb-navbar-nav',{attrs:{"right":""}})],1)],1),_vm._v(" "),_c('div',{staticClass:"sidebar-fixed position-fixed"},[_c('img',{staticStyle:{"margin-top":"40px","margin-bottom":"40px"},attrs:{"src":__webpack_require__(/*! ./assets/greenleaf-logo.png */ "./src/assets/greenleaf-logo.png"),"height":"50"}}),_vm._v(" "),_c('mdb-list-group',{staticClass:"list-group-flush"},[_c('router-link',{attrs:{"to":"/menuMaker"},nativeOn:{"click":function($event){_vm.activeItem = 1}}},[_c('mdb-list-group-item',{class:_vm.activeItem === 1 && 'active',attrs:{"action":true}},[_c('mdb-icon',{staticClass:"mr-3",attrs:{"icon":"cannabis"}}),_vm._v("Menu Manager")],1)],1)],1)],1),_vm._v(" "),_c('main',[_c('div',{staticClass:"mt-5 p-5"},[_c('router-view')],1)])],1)}
var staticRenderFns = []


/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../node_modules/vue-loader/lib/selector?type=script&index=0!./App.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_badcb320_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-badcb320","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector?type=template&index=0!./App.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-badcb320\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
function injectStyle (context) {
  __webpack_require__(/*! !../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"sourceMap":true}!../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-badcb320","scoped":true,"sourceMap":false}!../node_modules/vue-loader/lib/selector?type=styles&index=0!./App.vue */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-badcb320\",\"scoped\":true,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/App.vue")
  __webpack_require__(/*! !../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"sourceMap":true}!../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":false}!../node_modules/vue-loader/lib/selector?type=styles&index=1!./App.vue */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=1!./src/App.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-badcb320"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_badcb320_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_badcb320_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./src/assets/greenleaf-logo.png":
/*!***************************************!*\
  !*** ./src/assets/greenleaf-logo.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/greenleaf-logo.ec54efc.png";

/***/ }),

/***/ "./src/components/BadGateway.vue":
/*!***************************************!*\
  !*** ./src/components/BadGateway.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BadGateway_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./BadGateway.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/BadGateway.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_9cbefb02_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BadGateway_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-9cbefb02","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./BadGateway.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-9cbefb02\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/BadGateway.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
function injectStyle (context) {
  __webpack_require__(/*! !../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"sourceMap":true}!../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-9cbefb02","scoped":true,"sourceMap":false}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./BadGateway.vue */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-9cbefb02\",\"scoped\":true,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/BadGateway.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9cbefb02"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BadGateway_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_9cbefb02_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BadGateway_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_9cbefb02_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BadGateway_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./src/components/CropCategory.vue":
/*!*****************************************!*\
  !*** ./src/components/CropCategory.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CropCategory_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./CropCategory.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/CropCategory.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_65822436_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CropCategory_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-65822436","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./CropCategory.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-65822436\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/CropCategory.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
function injectStyle (context) {
  __webpack_require__(/*! !../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"sourceMap":true}!../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-65822436","scoped":true,"sourceMap":false}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./CropCategory.vue */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-65822436\",\"scoped\":true,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/CropCategory.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-65822436"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CropCategory_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_65822436_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CropCategory_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_65822436_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CropCategory_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./src/components/CropComponent.vue":
/*!******************************************!*\
  !*** ./src/components/CropComponent.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CropComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./CropComponent.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/CropComponent.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_52f7109e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CropComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-52f7109e","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./CropComponent.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-52f7109e\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/CropComponent.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
function injectStyle (context) {
  __webpack_require__(/*! !../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"sourceMap":true}!../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-52f7109e","scoped":true,"sourceMap":false}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./CropComponent.vue */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-52f7109e\",\"scoped\":true,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/CropComponent.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-52f7109e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CropComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_52f7109e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CropComponent_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_52f7109e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CropComponent_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./src/components/MenuMaker.vue":
/*!**************************************!*\
  !*** ./src/components/MenuMaker.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_MenuMaker_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./MenuMaker.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/MenuMaker.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_2822785c_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MenuMaker_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-2822785c","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./MenuMaker.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2822785c\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/MenuMaker.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
function injectStyle (context) {
  __webpack_require__(/*! !../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"sourceMap":true}!../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-2822785c","scoped":true,"sourceMap":false}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./MenuMaker.vue */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-2822785c\",\"scoped\":true,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MenuMaker.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2822785c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_MenuMaker_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_2822785c_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MenuMaker_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_2822785c_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MenuMaker_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-css-only/css/bootstrap.min.css */ "./node_modules/bootstrap-css-only/css/bootstrap.min.css");
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mdbvue_build_css_mdb_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdbvue/build/css/mdb.css */ "./node_modules/mdbvue/build/css/mdb.css");
/* harmony import */ var mdbvue_build_css_mdb_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mdbvue_build_css_mdb_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router */ "./src/router/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-axios */ "./node_modules/vue-axios/dist/vue-axios.min.js");
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_croppie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-croppie */ "./node_modules/vue-croppie/dist/vue-croppie.es.js");
/* harmony import */ var croppie_croppie_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! croppie/croppie.css */ "./node_modules/croppie/croppie.css");
/* harmony import */ var croppie_croppie_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(croppie_croppie_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_CropComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/CropComponent */ "./src/components/CropComponent.vue");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.











vue__WEBPACK_IMPORTED_MODULE_2__["default"].use(vue_croppie__WEBPACK_IMPORTED_MODULE_7__["default"]);

vue__WEBPACK_IMPORTED_MODULE_2__["default"].config.productionTip = false;
vue__WEBPACK_IMPORTED_MODULE_2__["default"].use(vue_axios__WEBPACK_IMPORTED_MODULE_6___default.a, axios__WEBPACK_IMPORTED_MODULE_5___default.a);

/* eslint-disable no-new */
new vue__WEBPACK_IMPORTED_MODULE_2__["default"]({
  el: '#app',
  router: _router__WEBPACK_IMPORTED_MODULE_4__["default"],
  components: { App: _App__WEBPACK_IMPORTED_MODULE_3__["default"], Crop: _components_CropComponent__WEBPACK_IMPORTED_MODULE_9__["default"] },
  template: '<App/>'

});

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _components_BadGateway__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/BadGateway */ "./src/components/BadGateway.vue");
/* harmony import */ var _components_MenuMaker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/MenuMaker */ "./src/components/MenuMaker.vue");





vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  mode: 'history',
  routes: [{
    path: '/menuMaker',
    name: 'MenuMaker',
    props: { page: 1 },
    component: _components_MenuMaker__WEBPACK_IMPORTED_MODULE_3__["default"],
    alias: '/'
  }, {
    path: '/404',
    name: 'BadGateway',
    props: { page: 2 },
    component: _components_BadGateway__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, {
    path: '*',
    props: { page: 3 },
    redirect: '/404'
  }]
}));

/***/ })

/******/ });
//# sourceMappingURL=app.11eb5c69b2aa04c91150.js.map