webpackJsonp([46],{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(701)
  __webpack_require__(703)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(705)
/* template */
var __vue_template__ = __webpack_require__(706)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\access\\access.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75880e3f", Component.options)
  } else {
    hotAPI.reload("data-v-75880e3f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(702);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("270491b6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-75880e3f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/less-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./access.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-75880e3f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/less-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./access.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.access-user-con {\n  height: 200px;\n}\n.access-current-user-con {\n  text-align: center;\n  padding-top: 10px;\n}\n.access-current-user-con img {\n  display: block;\n  width: 100px;\n  height: 100px;\n  border: 2px solid #dddde2;\n  border-radius: 50%;\n  margin: 0px auto 10px;\n}\n.access-current-user-con p {\n  display: block;\n  padding: 20px 0 0;\n}\n.access-current-user-con p b {\n  margin: 0 10px;\n  color: #2d8cf0;\n}\n.access-change-access-con-row {\n  height: 200px;\n}\n", ""]);

// exports


/***/ }),

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(704);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("621a47aa", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-75880e3f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./access.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-75880e3f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./access.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_cookie__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_js_cookie__);
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
    name: 'access_index',
    data: function data() {
        return {
            accessCode: parseInt(__WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.get('access')),
            switchValue: parseInt(__WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.get('access')) === 1
        };
    },

    computed: {
        avatorPath: function avatorPath() {
            return localStorage.avatorImgPath;
        }
    },
    methods: {
        changeAccess: function changeAccess(res) {
            if (res) {
                this.accessCode = 1;
                __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.set('access', 1);
            } else {
                this.accessCode = 0;
                __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.set('access', 0);
            }
            this.$store.commit('updateMenulist');
        }
    }
});

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "access" },
    [
      _c(
        "Row",
        [
          _c(
            "Col",
            { attrs: { span: "8" } },
            [
              _c("Card", [
                _c(
                  "p",
                  { attrs: { slot: "title" }, slot: "title" },
                  [
                    _c("Icon", { attrs: { type: "android-contact" } }),
                    _vm._v("\n                    当前用户\n                ")
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "access-user-con access-current-user-con" },
                  [
                    _c("img", { attrs: { src: _vm.avatorPath, alt: "" } }),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v("当前用户权限值:"),
                      _c("b", [_vm._v(_vm._s(_vm.accessCode))])
                    ])
                  ]
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "Col",
            { staticClass: "padding-left-10", attrs: { span: "16" } },
            [
              _c("Card", [
                _c(
                  "p",
                  { attrs: { slot: "title" }, slot: "title" },
                  [
                    _c("Icon", { attrs: { type: "android-contacts" } }),
                    _vm._v(
                      "\n                    不同权限用户的不同菜单\n                "
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "access-user-con access-change-access-con" },
                  [
                    _c(
                      "Col",
                      { attrs: { span: "8" } },
                      [
                        _c(
                          "Row",
                          {
                            staticClass: "access-change-access-con-row",
                            attrs: {
                              type: "flex",
                              justify: "center",
                              align: "middle"
                            }
                          },
                          [
                            _c("i-switch", {
                              attrs: { value: _vm.switchValue, size: "large" },
                              on: { "on-change": _vm.changeAccess }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "Col",
                      { staticClass: "padding-left-10", attrs: { span: "16" } },
                      [
                        _c(
                          "Row",
                          {
                            staticClass: "access-change-access-con-row",
                            attrs: {
                              type: "flex",
                              justify: "center",
                              align: "middle"
                            }
                          },
                          [
                            _c("p", [
                              _vm._v(
                                "您可以通过左侧的开关来切换当前用户的权限值，然后您可以观察左侧菜单栏的变化，如果当前用户的权限值是"
                              ),
                              _c("b", [_vm._v(" 0 ")]),
                              _vm._v(
                                "，则左侧菜单栏会显示’权限测试页‘这一项('权限测试页'只用于测试，点击不会跳转)。"
                              )
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-75880e3f", module.exports)
  }
}

/***/ })

});