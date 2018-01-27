webpackJsonp([5],{

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(758)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(760)
/* template */
var __vue_template__ = __webpack_require__(767)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-083e2a5c"
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
Component.options.__file = "resources\\assets\\js\\views\\my-components\\split-pane\\split-pane-page.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-083e2a5c", Component.options)
  } else {
    hotAPI.reload("data-v-083e2a5c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(759);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("28c51aec", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-083e2a5c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/index.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./split-pane-page.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-083e2a5c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/index.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./split-pane-page.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.split-pane-con[data-v-083e2a5c] {\n  width: 100%;\n  height: 89vh;\n}\n.custom-trigger[data-v-083e2a5c] {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background: white;\n  border-radius: 50%;\n  -webkit-box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.1), 2px 2px 10px 2px rgba(0, 0, 0, 0.2) inset;\n          box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.1), 2px 2px 10px 2px rgba(0, 0, 0, 0.2) inset;\n  border: 1px solid #c3c3c3;\n  cursor: pointer;\n}\n.introduce-left-con h4[data-v-083e2a5c] {\n  margin-bottom: 20px;\n}\n.introduce-left-con h5[data-v-083e2a5c] {\n  margin-bottom: 10px;\n  margin-left: 20px;\n}\n.split-pane-right-con[data-v-083e2a5c] {\n  padding: 30px;\n}\n.split-pane-right-con p[data-v-083e2a5c] {\n  font-size: 26px;\n  font-weight: 700;\n  color: white;\n}\n", ""]);

// exports


/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__split_pane__ = __webpack_require__(761);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'split-pane-page',
    components: {
        splitPane: __WEBPACK_IMPORTED_MODULE_0__split_pane__["a" /* default */]
    },
    data: function data() {
        return {
            triggerOffset: 50,
            triggerOffsetV: 70,
            triggerOffsetMin: 40,
            atMax: false,
            atMin: false
        };
    },

    methods: {
        handleMousedown: function handleMousedown(e) {
            this.$refs.pane.handleMousedown(e);
        },
        handleMoving: function handleMoving(e) {
            this.atMax = e.atMax;
            this.atMin = e.atMin;
        }
    }
});

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__split_pane_vue__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__split_pane_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__split_pane_vue__);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__split_pane_vue___default.a);

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(763)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(765)
/* template */
var __vue_template__ = __webpack_require__(766)
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
Component.options.__file = "resources\\assets\\js\\views\\my-components\\split-pane\\split-pane\\split-pane.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e6dd22d", Component.options)
  } else {
    hotAPI.reload("data-v-6e6dd22d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(764);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("3d55d997", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6e6dd22d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./split-pane.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6e6dd22d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/less-loader/index.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./split-pane.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.split-pane {\n  position: relative;\n}\n.split-pane-container {\n  height: 100%;\n  width: 100%;\n}\n.split-pane-horizontal > div > .split-pane-trigger {\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  cursor: col-resize;\n  width: 2px;\n  height: 100%;\n  margin: 0 1px;\n}\n.split-pane-vertical > div > .split-pane-trigger {\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  cursor: row-resize;\n  height: 2px;\n  width: 100%;\n  margin: 1px 0;\n}\n.split-pane-trigger {\n  position: absolute;\n  z-index: 3;\n  background: #BDBDBD;\n}\n.split-pane-left-area {\n  height: 100%;\n  float: left;\n  z-index: 2;\n  overflow: auto;\n}\n.split-pane-right-area {\n  height: 100%;\n  float: left;\n  z-index: 2;\n  overflow: auto;\n}\n.split-pane-top-area {\n  width: 100%;\n  z-index: 2;\n  overflow: auto;\n}\n.split-pane-bottom-area {\n  width: 100%;\n  z-index: 2;\n  overflow: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ 765:
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

var oneOf = function oneOf(ele, targetArr) {
    if (targetArr.indexOf(ele) >= 0) {
        return true;
    } else {
        return false;
    }
};
/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'splitPane',
    props: {
        value: {
            type: Number,
            default: 50
        },
        direction: {
            type: String,
            default: 'horizontal',
            validator: function validator(val) {
                return oneOf(val, ['vertical', 'horizontal']);
            }
        },
        min: {
            type: [Number, String],
            default: 3
        },
        max: {
            type: [Number, String],
            default: 97
        }
    },
    data: function data() {
        return {
            prefix: 'split-pane',
            canMove: false,
            triggerOffset: 50,
            triggerOldOffset: 50,
            offset: {},
            atMin: false,
            atMax: false
        };
    },

    computed: {
        wraperClasses: function wraperClasses() {
            return [this.prefix, this.direction === 'vertical' ? this.prefix + '-vertical' : this.prefix + '-horizontal'];
        },
        leftSize: function leftSize() {
            return this.triggerOffset + '%';
        },
        rightSize: function rightSize() {
            return 100 - this.triggerOffset + '%';
        }
    },
    methods: {
        handleMouseup: function handleMouseup() {
            this.canMove = false;
        },
        handleMousedown: function handleMousedown(e) {
            this.canMove = true;
            this.triggerOldOffset = this.triggerOffset;
            this.offset = {
                x: e.pageX,
                y: e.pageY
            };
            e.preventDefault();
        },
        handleMouseout: function handleMouseout() {
            this.canMove = false;
        },
        handleMousemove: function handleMousemove(e) {
            if (this.canMove) {
                var offset = void 0;
                if (this.direction === 'horizontal') {
                    offset = this.triggerOldOffset + Math.floor((e.clientX - this.offset.x) / this.$refs.wraper.offsetWidth * 10000) / 100;
                } else {
                    offset = this.triggerOldOffset + Math.floor((e.clientY - this.offset.y) / this.$refs.wraper.offsetHeight * 10000) / 100;
                }
                if (offset <= this.min) {
                    this.triggerOffset = Math.max(offset, this.min);
                } else {
                    this.triggerOffset = Math.min(offset, this.max);
                }
                this.atMin = this.triggerOffset === this.min;
                this.atMax = this.triggerOffset === this.max;
                e.atMin = this.atMin;
                e.atMax = this.atMax;
                this.$emit('input', offset);
                this.$emit('on-trigger-moving', e);
            }
        }
    },
    mounted: function mounted() {
        if (this.value !== undefined) {
            this.triggerOffset = this.value;
        }
    }
});

/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "wraper",
      class: _vm.wraperClasses,
      on: {
        mouseup: _vm.handleMouseup,
        mousemove: _vm.handleMousemove,
        mouseleave: _vm.handleMouseout
      }
    },
    [
      _vm.direction === "horizontal"
        ? _c(
            "div",
            { class: _vm.prefix + "-container" },
            [
              _c(
                "div",
                {
                  class: _vm.prefix + "-left-area",
                  style: { width: _vm.leftSize }
                },
                [_vm._t("left")],
                2
              ),
              _vm._v(" "),
              _vm._t("trigger", [
                _c("div", {
                  ref: "trigger",
                  class: _vm.prefix + "-trigger",
                  style: { left: _vm.triggerOffset + "%" },
                  attrs: { unselectable: "on" },
                  on: { mousedown: _vm.handleMousedown }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  class: _vm.prefix + "-right-area",
                  style: { width: _vm.rightSize }
                },
                [_vm._t("right")],
                2
              )
            ],
            2
          )
        : _c(
            "div",
            { class: _vm.prefix + "-container" },
            [
              _c(
                "div",
                {
                  class: _vm.prefix + "-top-area",
                  style: { height: _vm.leftSize }
                },
                [_vm._t("top")],
                2
              ),
              _vm._v(" "),
              _vm._t("trigger", [
                _c("div", {
                  ref: "trigger",
                  class: _vm.prefix + "-trigger",
                  style: { top: _vm.triggerOffset + "%" },
                  attrs: { unselectable: "on" },
                  on: { mousedown: _vm.handleMousedown }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  class: _vm.prefix + "-bottom-area",
                  style: { height: _vm.rightSize }
                },
                [_vm._t("bottom")],
                2
              )
            ],
            2
          )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6e6dd22d", module.exports)
  }
}

/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Card", { attrs: { padding: 0 } }, [
        _c(
          "div",
          { staticClass: "split-pane-con" },
          [
            _c(
              "split-pane",
              {
                style: { height: "100%" },
                attrs: { min: 30, max: 80, direction: "horizontal" },
                on: { "on-trigger-moving": _vm.handleMoving },
                model: {
                  value: _vm.triggerOffset,
                  callback: function($$v) {
                    _vm.triggerOffset = $$v
                  },
                  expression: "triggerOffset"
                }
              },
              [
                _c(
                  "div",
                  {
                    staticStyle: { height: "100%" },
                    attrs: { slot: "left" },
                    slot: "left"
                  },
                  [
                    _c(
                      "split-pane",
                      {
                        style: { height: "100%" },
                        attrs: { direction: "vertical" },
                        model: {
                          value: _vm.triggerOffsetV,
                          callback: function($$v) {
                            _vm.triggerOffsetV = $$v
                          },
                          expression: "triggerOffsetV"
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "introduce-left-con",
                            staticStyle: {
                              background: "#EDE3A0",
                              height: "100%",
                              padding: "30px"
                            },
                            attrs: { slot: "top" },
                            slot: "top"
                          },
                          [
                            _c("h4", [
                              _vm._v(
                                '- 该组件可以拖动修改左右尺寸，还可以绑定v-model来设置，如设置v-model="40"即左侧40%，右侧60%'
                              )
                            ]),
                            _vm._v(" "),
                            _c("h4", [
                              _vm._v(
                                '- 可设置最小和最大距离，如:min="80"即向右拖动到80%处就不能再拖动'
                              )
                            ]),
                            _vm._v(" "),
                            _c("h4", [
                              _vm._v(
                                "- 可绑定事件@on-trigger-moving，回调函数的返回值是鼠标事件对象，同时该对象还包括两个我们自定义的变量，即atMax和atMin，即此时是否是在最大或最小距离处，类型是Boolean。来拖动右边的trigger看看吧。"
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "h4",
                              { staticStyle: { "margin-bottom": "10px" } },
                              [
                                _vm._v(
                                  '- 可使用slot="trigger"自定义拖动触发器，但有三个注意点:'
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("h5", [
                              _vm._v("-- 样式需要设置position: absolute;")
                            ]),
                            _vm._v(" "),
                            _c("h5", [
                              _vm._v(
                                "-- 需要给trigger绑定mousedown事件，绑定的方法调用this.$refs.pane.handleMousedow(e)，e为mousedown事件的事件对象"
                              )
                            ]),
                            _vm._v(" "),
                            _c("h5", [
                              _vm._v(
                                "-- 给trigger添加:style=\"{width: offset + '%'}\"，这里的offset是通过v-model给split-pane组件绑定的值"
                              )
                            ]),
                            _vm._v(" "),
                            _c("h4", [_vm._v("- 其他api请看源码")])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              background: "#A2EDB6",
                              height: "100%"
                            },
                            attrs: { slot: "bottom" },
                            slot: "bottom"
                          },
                          [
                            _c(
                              "split-pane",
                              {
                                ref: "pane",
                                style: { height: "100%" },
                                attrs: { direction: "horizontal" },
                                model: {
                                  value: _vm.triggerOffsetMin,
                                  callback: function($$v) {
                                    _vm.triggerOffsetMin = $$v
                                  },
                                  expression: "triggerOffsetMin"
                                }
                              },
                              [
                                _c("div", {
                                  staticStyle: {
                                    background: "#EDACE2",
                                    height: "100%"
                                  },
                                  attrs: { slot: "left" },
                                  slot: "left"
                                }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass: "custom-trigger",
                                  style: { left: _vm.triggerOffsetMin + "%" },
                                  attrs: { slot: "trigger" },
                                  on: { mousedown: _vm.handleMousedown },
                                  slot: "trigger"
                                }),
                                _vm._v(" "),
                                _c("div", {
                                  staticStyle: {
                                    background: "#A2EDB6",
                                    height: "100%"
                                  },
                                  attrs: { slot: "right" },
                                  slot: "right"
                                })
                              ]
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
                  "div",
                  {
                    staticClass: "split-pane-right-con",
                    staticStyle: { background: "#8FB5ED", height: "100%" },
                    attrs: { slot: "right" },
                    slot: "right"
                  },
                  [
                    _c("p", [
                      _vm._v("是否是在最小距离处： " + _vm._s(_vm.atMin))
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v("是否是在最大距离处： " + _vm._s(_vm.atMax))
                    ])
                  ]
                )
              ]
            )
          ],
          1
        )
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-083e2a5c", module.exports)
  }
}

/***/ })

});