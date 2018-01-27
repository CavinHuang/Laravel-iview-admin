webpackJsonp([56],{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(343)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(345)
/* template */
var __vue_template__ = __webpack_require__(346)
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
Component.options.__file = "resources\\assets\\js\\views\\form\\article-publish\\preview.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-393aa279", Component.options)
  } else {
    hotAPI.reload("data-v-393aa279", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(344);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("48b2597c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-393aa279\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/index.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./preview.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-393aa279\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/index.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./preview.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.preview-main {\n  width: 100%;\n  height: 100%;\n  background: #d7e1ed;\n}\n.preview-header {\n  padding-right: 20px;\n  height: 60px;\n  background: #4a5161;\n  text-align: right;\n}\n.preview-header ul {\n  display: inline-block !important;\n}\n.preview-placeholderCon {\n  height: 200px;\n}\n.preview-placeholder {\n  height: 40px;\n  margin-bottom: 10px;\n  background: #9fafd4;\n  border-radius: 3px;\n}\n.preview-tags-con {\n  padding: 5px 0;\n  margin: 10px 0;\n}\n.preview-tip {\n  font-size: 12px;\n  color: #c3c3c3;\n}\n.preview-content-con {\n  border-top: 1px solid #edeff1;\n  border-bottom: 1px solid #edeff1;\n  padding: 12px 0 20px;\n  margin-bottom: 20px;\n}\n.preview-classifition-con {\n  padding: 5px 0;\n}\n.preview-classifition-item {\n  margin-right: 8px;\n}\n.preview-publish-time {\n  font-size: 12px;\n  color: gray;\n  margin-top: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    data: function data() {
        return {
            articleTitle: '',
            tagsList: '',
            classificationSelected: [],
            content: '',
            publishTime: ''
        };
    },
    mounted: function mounted() {
        this.articleTitle = localStorage.articleTitle;
        this.tagsList = localStorage.tagsList ? JSON.parse(localStorage.tagsList) : [];
        this.classificationSelected = localStorage.classificationSelected ? JSON.parse(localStorage.classificationSelected) : [];
        this.content = localStorage.content;
        this.publishTime = localStorage.publishTime;
    }
});

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "preview-main" },
    [
      _c(
        "div",
        { staticClass: "preview-header" },
        [
          _c(
            "Menu",
            {
              attrs: { mode: "horizontal", theme: "dark", "active-name": "1" }
            },
            [
              _c(
                "div",
                { staticClass: "preview-header-nav" },
                [
                  _c(
                    "MenuItem",
                    { attrs: { name: "1" } },
                    [
                      _c("Icon", { attrs: { type: "ios-navigate" } }),
                      _vm._v("\n                    导航一\n                ")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "MenuItem",
                    { attrs: { name: "2" } },
                    [
                      _c("Icon", { attrs: { type: "ios-keypad" } }),
                      _vm._v("\n                    导航二\n                ")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "MenuItem",
                    { attrs: { name: "3" } },
                    [
                      _c("Icon", { attrs: { type: "ios-analytics" } }),
                      _vm._v("\n                    导航三\n                ")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "MenuItem",
                    { attrs: { name: "4" } },
                    [
                      _c("Icon", { attrs: { type: "ios-paper" } }),
                      _vm._v("\n                    导航四\n                ")
                    ],
                    1
                  )
                ],
                1
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "Row",
        { staticClass: "margin-top-20" },
        [
          _c("Col", { attrs: { span: "12", offset: "5" } }, [
            _c(
              "div",
              [
                _c("Card", [
                  _c("h1", [_vm._v(_vm._s(_vm.articleTitle))]),
                  _vm._v(" "),
                  _c(
                    "p",
                    { staticClass: "preview-publish-time" },
                    [
                      _c("Icon", { attrs: { type: "android-alarm-clock" } }),
                      _vm._v(" 发布时间：" + _vm._s(_vm.publishTime))
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "preview-tags-con" },
                    [
                      _c(
                        "b",
                        { staticClass: "preview-tip" },
                        [
                          _c("Icon", {
                            attrs: { type: "ios-pricetags-outline" }
                          }),
                          _vm._v(" 标签：")
                        ],
                        1
                      ),
                      _vm._l(_vm.tagsList, function(item) {
                        return _c(
                          "Tag",
                          {
                            key: item,
                            attrs: { type: "border", color: "blue" }
                          },
                          [_vm._v(_vm._s(item))]
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "preview-content-con",
                    domProps: { innerHTML: _vm._s(_vm.content) }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "preview-classifition-con" },
                    [
                      _c(
                        "b",
                        { staticClass: "preview-tip" },
                        [
                          _c("Icon", { attrs: { type: "navicon-round" } }),
                          _vm._v(" 目录：")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.classificationSelected, function(item) {
                        return _c(
                          "a",
                          {
                            key: item,
                            staticClass: "preview-classifition-item"
                          },
                          [
                            _c("Icon", {
                              attrs: { type: "android-folder-open" }
                            }),
                            _vm._v(
                              "\n                            " +
                                _vm._s(item) +
                                "\n                        "
                            )
                          ],
                          1
                        )
                      })
                    ],
                    2
                  )
                ])
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("Col", { staticClass: "padding-left-10", attrs: { span: "4" } }, [
            _c(
              "div",
              [
                _c("Card", [
                  _c(
                    "p",
                    { attrs: { slot: "title" }, slot: "title" },
                    [
                      _c("Icon", { attrs: { type: "paper-airplane" } }),
                      _vm._v(
                        "\n                        热门文章\n                    "
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "preview-placeholderCon" }, [
                    _c("div", { staticClass: "preview-placeholder" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "preview-placeholder" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "preview-placeholder" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "preview-placeholder" })
                  ])
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "margin-top-10" },
              [
                _c("Card", [
                  _c(
                    "p",
                    { attrs: { slot: "title" }, slot: "title" },
                    [
                      _c("Icon", { attrs: { type: "paper-airplane" } }),
                      _vm._v(
                        "\n                        最新文章\n                    "
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "preview-placeholderCon" }, [
                    _c("div", { staticClass: "preview-placeholder" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "preview-placeholder" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "preview-placeholder" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "preview-placeholder" })
                  ])
                ])
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-393aa279", module.exports)
  }
}

/***/ })

});