webpackJsonp([60],{

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(824)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(826)
/* template */
var __vue_template__ = __webpack_require__(827)
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
Component.options.__file = "resources\\assets\\js\\views\\advanced-router\\mutative-router.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ffb7c90", Component.options)
  } else {
    hotAPI.reload("data-v-3ffb7c90", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 824:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(825);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("5ca8e98c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3ffb7c90\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/less-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./mutative-router.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3ffb7c90\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/less-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./mutative-router.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 825:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.advanced-router {\n  height: 240px !important;\n}\n.advanced-router-tip-p {\n  padding: 10px 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 826:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'mutative-router',
    data: function data() {
        var _this = this;

        return {
            orderColumns: [{
                type: 'index',
                title: '序号',
                width: 60
            }, {
                title: '订单号',
                key: 'order_id',
                align: 'center'
            }, {
                title: '用户',
                key: 'user_name'
            }, {
                title: '详情',
                key: 'show_more',
                align: 'center',
                render: function render(h, params) {
                    return h('Button', {
                        props: {
                            type: 'text',
                            size: 'small'
                        },
                        on: {
                            click: function click() {
                                var argu = { order_id: params.row.order_id };
                                _this.$router.push({
                                    name: 'order-info',
                                    params: argu
                                });
                            }
                        }
                    }, '了解详情');
                }
            }],
            orderData: [{
                order_id: '1000001',
                user_name: 'Aresn'
            }, {
                order_id: '1000002',
                user_name: 'Lison'
            }, {
                order_id: '1000003',
                user_name: 'lili'
            }, {
                order_id: '1000004',
                user_name: 'lala'
            }]
        };
    },

    computed: {
        avatorImage: function avatorImage() {
            return localStorage.avatorImgPath;
        }
    }
});

/***/ }),

/***/ 827:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "Row",
        [
          _c(
            "Col",
            { attrs: { span: "24" } },
            [
              _c(
                "Card",
                [
                  _c(
                    "p",
                    { attrs: { slot: "title" }, slot: "title" },
                    [
                      _c("Icon", { attrs: { type: "ios-list" } }),
                      _vm._v(
                        "\n                    订单详情(动态路由)\n                "
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "Row",
                    {
                      staticClass: "advanced-router",
                      attrs: {
                        type: "flex",
                        justify: "center",
                        align: "middle"
                      }
                    },
                    [
                      _c("Table", {
                        staticStyle: { width: "100%" },
                        attrs: {
                          columns: _vm.orderColumns,
                          data: _vm.orderData
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
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
    require("vue-hot-reload-api")      .rerender("data-v-3ffb7c90", module.exports)
  }
}

/***/ })

});