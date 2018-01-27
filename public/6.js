webpackJsonp([6],{

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(674)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(676)
/* template */
var __vue_template__ = __webpack_require__(682)
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
Component.options.__file = "resources\\assets\\js\\views\\advanced-router\\component\\order-info.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01a11501", Component.options)
  } else {
    hotAPI.reload("data-v-01a11501", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(675);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("72487624", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01a11501\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/index.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./order-info.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01a11501\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/index.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./order-info.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.advanced-router {\n  height: 240px !important;\n}\n.advanced-router-tip-p {\n  padding: 10px 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__expandRow_vue__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__expandRow_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__expandRow_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'order-info',
    components: {
        expandRow: __WEBPACK_IMPORTED_MODULE_0__expandRow_vue___default.a
    },
    data: function data() {
        return {
            showInfo: false,
            order_col: [{
                title: '订单号',
                key: 'order_id',
                align: 'center'
            }, {
                title: '买家',
                key: 'buyer',
                align: 'center'
            }, {
                title: '地址',
                key: 'addr',
                align: 'center'
            }, {
                title: '下单时间',
                key: 'time',
                align: 'center'
            }, {
                title: '交易状态',
                key: 'state',
                align: 'center'
            }],
            order_data: [],
            columns10: [{
                type: 'expand',
                width: 50,
                render: function render(h, params) {
                    return h(__WEBPACK_IMPORTED_MODULE_0__expandRow_vue___default.a, {
                        props: {
                            row: params.row
                        }
                    });
                }
            }, {
                title: '姓名',
                key: 'name'
            }, {
                title: '年龄',
                key: 'age'
            }, {
                title: '地址',
                key: 'address'
            }],
            data9: [{
                name: '王小明',
                age: 18,
                address: '北京市朝阳区芍药居',
                job: '数据工程师',
                interest: '羽毛球',
                birthday: '1991-05-14',
                book: '乔布斯传',
                movie: '致命魔术',
                music: 'I Cry'
            }, {
                name: '张小刚',
                age: 25,
                address: '北京市海淀区西二旗',
                job: '数据科学家',
                interest: '排球',
                birthday: '1989-03-18',
                book: '我的奋斗',
                movie: '罗马假日',
                music: 'My Heart Will Go On'
            }, {
                name: '李小红',
                age: 30,
                address: '上海市浦东新区世纪大道',
                job: '数据产品经理',
                interest: '网球',
                birthday: '1992-01-31',
                book: '赢',
                movie: '乔布斯',
                music: 'Don’t Cry'
            }, {
                name: '周小伟',
                age: 26,
                address: '深圳市南山区深南大道',
                job: '数据分析师',
                interest: '桌球，跑步',
                birthday: '1988-7-25',
                book: '红楼梦',
                movie: '倩女幽魂',
                music: '演员'
            }]
        };
    },

    methods: {
        init: function init() {
            var index = parseInt(this.$route.params.order_id.toString().substr(-1, 1));
            var buyer = '';
            var addr = '';
            var time = '';
            var state = '';
            switch (index) {
                case 1:
                    buyer = 'Arasn';addr = '北京市东直门外大街39号院2号楼航空服务大厦';time = '2017年10月20日 13：33：24';state = '已付款';break;
                case 2:
                    buyer = 'Lison';addr = '北京市东直门外大街39号院2号楼航空服务大厦';time = '2017年10月21日 19：13：24';state = '已付款';break;
                case 3:
                    buyer = 'lili';addr = 'TalkingData总部';time = '2017年10月12日 10：39：24';state = '待收货';break;
                case 4:
                    buyer = 'lala';addr = '国家统计局';time = '2017年8月20日 11：45：24';state = '已收货';break;
            }
            var order = {
                order_id: this.$route.params.order_id,
                buyer: buyer,
                addr: addr,
                time: time,
                state: state
            };
            this.order_data = [order];
        }
    },
    mounted: function mounted() {
        this.init();
    },
    activated: function activated() {
        this.init();
    }
});

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(678)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(680)
/* template */
var __vue_template__ = __webpack_require__(681)
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
Component.options.__file = "resources\\assets\\js\\views\\advanced-router\\component\\expandRow.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fabcba48", Component.options)
  } else {
    hotAPI.reload("data-v-fabcba48", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(679);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("5450a73c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fabcba48\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/index.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./expandRow.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fabcba48\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/index.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./expandRow.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.advanced-router {\n  height: 240px !important;\n}\n.advanced-router-tip-p {\n  padding: 10px 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 680:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        row: Object
    }
});

/***/ }),

/***/ 681:
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
        { staticClass: "advanced-router" },
        [
          _c("Col", { attrs: { span: "8" } }, [
            _c("span", { staticClass: "expand-key" }, [_vm._v("职业：")]),
            _vm._v(" "),
            _c("span", { staticClass: "expand-value" }, [
              _vm._v(_vm._s(_vm.row.job))
            ])
          ]),
          _vm._v(" "),
          _c("Col", { attrs: { span: "8" } }, [
            _c("span", { staticClass: "expand-key" }, [_vm._v("兴趣：")]),
            _vm._v(" "),
            _c("span", { staticClass: "expand-value" }, [
              _vm._v(_vm._s(_vm.row.interest))
            ])
          ]),
          _vm._v(" "),
          _c("Col", { attrs: { span: "8" } }, [
            _c("span", { staticClass: "expand-key" }, [_vm._v("生日：")]),
            _vm._v(" "),
            _c("span", { staticClass: "expand-value" }, [
              _vm._v(_vm._s(_vm.row.birthday))
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "Row",
        [
          _c("Col", { attrs: { span: "8" } }, [
            _c("span", { staticClass: "expand-key" }, [_vm._v("最喜欢的书：")]),
            _vm._v(" "),
            _c("span", { staticClass: "expand-value" }, [
              _vm._v("《" + _vm._s(_vm.row.book) + "》")
            ])
          ]),
          _vm._v(" "),
          _c("Col", { attrs: { span: "8" } }, [
            _c("span", { staticClass: "expand-key" }, [
              _vm._v("最喜欢的电影：")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "expand-value" }, [
              _vm._v(_vm._s(_vm.row.movie))
            ])
          ]),
          _vm._v(" "),
          _c("Col", { attrs: { span: "8" } }, [
            _c("span", { staticClass: "expand-key" }, [
              _vm._v("最喜欢的音乐：")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "expand-value" }, [
              _vm._v(_vm._s(_vm.row.music))
            ])
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
    require("vue-hot-reload-api")      .rerender("data-v-fabcba48", module.exports)
  }
}

/***/ }),

/***/ 682:
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
            "Card",
            [
              _c(
                "p",
                { attrs: { slot: "title" }, slot: "title" },
                [
                  _c("Icon", { attrs: { type: "compose" } }),
                  _vm._v("\n                订单详情\n            ")
                ],
                1
              ),
              _vm._v(" "),
              _c("Table", {
                attrs: { columns: _vm.order_col, data: _vm.order_data }
              }),
              _vm._v(" "),
              _c(
                "Modal",
                {
                  attrs: { width: "700", title: "订单信息" },
                  model: {
                    value: _vm.showInfo,
                    callback: function($$v) {
                      _vm.showInfo = $$v
                    },
                    expression: "showInfo"
                  }
                },
                [
                  _c("Table", {
                    attrs: { columns: _vm.order_col, data: _vm.order_data }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "Row",
        { staticClass: "margin-top-10" },
        [
          _c(
            "Card",
            [
              _c("Row", [
                _c("p", { staticClass: "advanced-router-tip-p" }, [
                  _vm._v(
                    "虽然iview-admin支持打开带参数的页面，但是类似于这种需求，还是建议用iview的Modal或者使用表格直接在表格内展开数据"
                  )
                ]),
                _vm._v(" "),
                _c(
                  "p",
                  [
                    _c(
                      "Button",
                      {
                        attrs: { type: "primary" },
                        on: {
                          click: function($event) {
                            _vm.showInfo = true
                          }
                        }
                      },
                      [_vm._v("点击按钮弹出Modal")]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "margin-top-10" },
                [
                  _c("p", { staticClass: "advanced-router-tip-p" }, [
                    _vm._v("iview官方示例"),
                    _c(
                      "a",
                      {
                        attrs: {
                          href: "https://www.iviewui.com/components/table"
                        }
                      },
                      [_vm._v("表格")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("Table", {
                    attrs: { columns: _vm.columns10, data: _vm.data9 }
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-01a11501", module.exports)
  }
}

/***/ })

});