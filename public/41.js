webpackJsonp([41],{

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(765)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(767)
/* template */
var __vue_template__ = __webpack_require__(771)
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
Component.options.__file = "resources\\assets\\js\\views\\my-components\\count-to\\count-to.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72abbeda", Component.options)
  } else {
    hotAPI.reload("data-v-72abbeda", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(a,t){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=t(require,exports,module):a.CountUp=t()}(this,function(a,t,n){var e=function(a,t,n,e,i,r){for(var o=0,s=["webkit","moz","ms","o"],m=0;m<s.length&&!window.requestAnimationFrame;++m)window.requestAnimationFrame=window[s[m]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[s[m]+"CancelAnimationFrame"]||window[s[m]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a,t){var n=(new Date).getTime(),e=Math.max(0,16-(n-o)),i=window.setTimeout(function(){a(n+e)},e);return o=n+e,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)});var u=this;u.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:null,formattingFn:null};for(var l in r)r.hasOwnProperty(l)&&(u.options[l]=r[l]);""===u.options.separator&&(u.options.useGrouping=!1),u.options.prefix||(u.options.prefix=""),u.options.suffix||(u.options.suffix=""),u.d="string"==typeof a?document.getElementById(a):a,u.startVal=Number(t),u.endVal=Number(n),u.countDown=u.startVal>u.endVal,u.frameVal=u.startVal,u.decimals=Math.max(0,e||0),u.dec=Math.pow(10,u.decimals),u.duration=1e3*Number(i)||2e3,u.formatNumber=function(a){a=a.toFixed(u.decimals),a+="";var t,n,e,i;if(t=a.split("."),n=t[0],e=t.length>1?u.options.decimal+t[1]:"",i=/(\d+)(\d{3})/,u.options.useGrouping)for(;i.test(n);)n=n.replace(i,"$1"+u.options.separator+"$2");return u.options.prefix+n+e+u.options.suffix},u.easeOutExpo=function(a,t,n,e){return n*(-Math.pow(2,-10*a/e)+1)*1024/1023+t},u.easingFn=u.options.easingFn?u.options.easingFn:u.easeOutExpo,u.formattingFn=u.options.formattingFn?u.options.formattingFn:u.formatNumber,u.version=function(){return"1.7.1"},u.printValue=function(a){var t=u.formattingFn(a);"INPUT"===u.d.tagName?this.d.value=t:"text"===u.d.tagName||"tspan"===u.d.tagName?this.d.textContent=t:this.d.innerHTML=t},u.count=function(a){u.startTime||(u.startTime=a),u.timestamp=a;var t=a-u.startTime;u.remaining=u.duration-t,u.options.useEasing?u.countDown?u.frameVal=u.startVal-u.easingFn(t,0,u.startVal-u.endVal,u.duration):u.frameVal=u.easingFn(t,u.startVal,u.endVal-u.startVal,u.duration):u.countDown?u.frameVal=u.startVal-(u.startVal-u.endVal)*(t/u.duration):u.frameVal=u.startVal+(u.endVal-u.startVal)*(t/u.duration),u.countDown?u.frameVal=u.frameVal<u.endVal?u.endVal:u.frameVal:u.frameVal=u.frameVal>u.endVal?u.endVal:u.frameVal,u.frameVal=Math.round(u.frameVal*u.dec)/u.dec,u.printValue(u.frameVal),t<u.duration?u.rAF=requestAnimationFrame(u.count):u.callback&&u.callback()},u.start=function(a){return u.callback=a,u.rAF=requestAnimationFrame(u.count),!1},u.pauseResume=function(){u.paused?(u.paused=!1,delete u.startTime,u.duration=u.remaining,u.startVal=u.frameVal,requestAnimationFrame(u.count)):(u.paused=!0,cancelAnimationFrame(u.rAF))},u.reset=function(){u.paused=!1,delete u.startTime,u.startVal=t,cancelAnimationFrame(u.rAF),u.printValue(u.startVal)},u.update=function(a){cancelAnimationFrame(u.rAF),u.paused=!1,delete u.startTime,u.startVal=u.frameVal,u.endVal=Number(a),u.countDown=u.startVal>u.endVal,u.rAF=requestAnimationFrame(u.count)},u.printValue(u.startVal)};return e});

/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(766);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("6a76dddc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-72abbeda\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/index.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./count-to.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-72abbeda\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/index.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./count-to.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.countto-page-row {\n  height: 200px;\n}\n.count-to-con {\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n.pre-code-show-con p {\n  height: 30px;\n  margin: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CountTo_vue__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CountTo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__CountTo_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'count-to',
    components: {
        CountTo: __WEBPACK_IMPORTED_MODULE_0__CountTo_vue___default.a
    },
    data: function data() {
        return {
            endVal: 0,
            mainStyle: {
                fontSize: '30px'
            },
            countStyle: {
                fontSize: '50px',
                color: '#dc9387'
            },
            mainStyle2: {
                fontSize: '22px'
            },
            countStyle2: {
                fontSize: '30px',
                color: '#dc9387'
            },
            unit: [[3, '千多'], [4, '万多'], [5, '十万多']],
            unit2: [[1, '十多'], [2, '百多'], [3, '千多'], [4, '万多'], [5, '十万多'], [6, '百万多'], [7, '千万多'], [8, '亿多']],
            asynEndVal: 487,
            integratedEndVal: 3
        };
    },

    methods: {
        init: function init() {
            var _this = this;

            setInterval(function () {
                _this.asynEndVal += parseInt(Math.random() * 20);
                _this.integratedEndVal += parseInt(Math.random() * 30);
            }, 2000);
        }
    },
    mounted: function mounted() {
        this.init();
    }
});

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(769)
/* template */
var __vue_template__ = __webpack_require__(770)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources\\assets\\js\\views\\my-components\\count-to\\CountTo.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3debd379", Component.options)
  } else {
    hotAPI.reload("data-v-3debd379", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_countup__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_countup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_countup__);
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'CountTo',
    data: function data() {
        return {
            counter: {},
            unitText: '',
            countId: 'count' + parseInt(Math.random() * 1000000)
        };
    },

    props: {
        mainClass: String,
        countClass: String,
        mainStyle: {
            type: Object,
            default: function _default() {
                return {
                    fontSize: '16px',
                    fontWeight: 500,
                    color: 'gray'
                };
            }
        },
        countStyle: Object,
        initCount: {
            type: Number,
            default: 0
        },
        startVal: {
            type: Number,
            default: 0
        },
        endVal: {
            type: Number,
            required: true
        },
        simplify: {
            type: Boolean,
            default: false
        },
        duration: {
            type: Number,
            default: 2
        },
        delay: {
            type: Number,
            default: 200
        },
        uneasing: {
            type: Boolean,
            default: false
        },
        ungroup: {
            type: Boolean,
            default: false
        },
        separator: {
            type: String,
            default: ','
        },
        decimals: {
            type: Number,
            default: 0
        },
        decimal: {
            type: String,
            default: '.'
        },
        unit: {
            type: Array,
            default: function _default() {
                return [[3, 'K+'], [6, 'M+'], [9, 'B+']];
            }
        }
    },
    methods: {
        transformValue: function transformValue(val) {
            var endVal = 0;
            var unit = '';
            var len = this.unit.length;
            if (val < Math.pow(10, this.unit[0][0])) {
                endVal = val;
            } else {
                for (var i = 1; i < len; i++) {
                    if (val >= Math.pow(10, this.unit[i - 1][0]) && val < Math.pow(10, this.unit[i][0])) {
                        endVal = parseInt(val / Math.pow(10, this.unit[i - 1][0]));
                        unit = this.unit[i - 1][1];
                    }
                }
            }
            if (val > Math.pow(10, this.unit[len - 1][0])) {
                endVal = parseInt(val / Math.pow(10, this.unit[len - 1][0]));
                unit = this.unit[len - 1][1];
            }
            return {
                val: endVal,
                unit: unit
            };
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            setTimeout(function () {
                var endVal = 0;
                var res = {};
                if (_this.simplify) {
                    res = _this.transformValue(_this.endVal);
                    endVal = res.val;
                    _this.unitText = res.unit;
                } else {
                    endVal = _this.endVal;
                }
                var counter = {};
                _this.counter = counter = new __WEBPACK_IMPORTED_MODULE_0_countup___default.a(_this.countId, _this.startVal, endVal, _this.decimals, _this.duration, {
                    useEasing: !_this.uneasing,
                    useGrouping: !_this.ungroup,
                    separator: _this.separator,
                    decimal: _this.decimal
                });
                if (!counter.error) {
                    counter.start();
                }
            }, _this.delay);
        });
    },

    watch: {
        endVal: function endVal(val) {
            var endVal = 0;
            if (this.simplify) {
                var res = this.transformValue(this.endVal);
                endVal = res.val;
                this.unitText = res.unit;
            } else {
                endVal = this.endVal;
            }
            this.counter.update(endVal);
        }
    }
});

/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "p",
    { class: _vm.mainClass, style: _vm.mainStyle },
    [
      _vm._t("leftText"),
      _vm._v(" "),
      _c("span", { class: _vm.countClass, style: _vm.countStyle }, [
        _c("span", { attrs: { id: _vm.countId } }, [
          _vm._v(_vm._s(_vm.initCount))
        ]),
        _c("span", [_vm._v(_vm._s(_vm.unitText))])
      ]),
      _vm._v(" "),
      _vm._t("rightText")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3debd379", module.exports)
  }
}

/***/ }),

/***/ 771:
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
            { attrs: { span: "3" } },
            [
              _c(
                "Card",
                [
                  _c(
                    "p",
                    { attrs: { slot: "title" }, slot: "title" },
                    [
                      _c("Icon", { attrs: { type: "waterdrop" } }),
                      _vm._v(
                        "\n                    CountTo组件基础用法\n                "
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "Row",
                    {
                      staticClass: "countto-page-row",
                      attrs: {
                        type: "flex",
                        justify: "center",
                        align: "middle"
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "count-to-con" },
                        [_c("CountTo", { attrs: { endVal: 2534 } })],
                        1
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "Col",
            { staticClass: "padding-left-10", attrs: { span: "5" } },
            [
              _c(
                "Card",
                [
                  _c(
                    "p",
                    { attrs: { slot: "title" }, slot: "title" },
                    [
                      _c("Icon", { attrs: { type: "code" } }),
                      _vm._v(
                        "\n                    可添加左右文字\n                "
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "Row",
                    {
                      staticClass: "countto-page-row",
                      attrs: {
                        type: "flex",
                        justify: "center",
                        align: "middle"
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "count-to-con" },
                        [
                          _c("CountTo", { attrs: { endVal: 2534 } }, [
                            _c(
                              "span",
                              { attrs: { slot: "leftText" }, slot: "leftText" },
                              [_vm._v("Total: ")]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                attrs: { slot: "rightText" },
                                slot: "rightText"
                              },
                              [_vm._v(" times")]
                            )
                          ])
                        ],
                        1
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "Col",
            { staticClass: "padding-left-10", attrs: { span: "8" } },
            [
              _c(
                "Card",
                [
                  _c(
                    "p",
                    { attrs: { slot: "title" }, slot: "title" },
                    [
                      _c("Icon", { attrs: { type: "paintbucket" } }),
                      _vm._v(
                        "\n                    自定义样式\n                "
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "Row",
                    {
                      staticClass: "countto-page-row",
                      attrs: {
                        type: "flex",
                        justify: "center",
                        align: "middle"
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "count-to-con" },
                        [
                          _c(
                            "CountTo",
                            {
                              attrs: {
                                endVal: 2534,
                                mainStyle: _vm.mainStyle,
                                countStyle: _vm.countStyle
                              }
                            },
                            [
                              _c(
                                "span",
                                {
                                  attrs: { slot: "leftText" },
                                  slot: "leftText"
                                },
                                [_vm._v("Total: ")]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  attrs: { slot: "rightText" },
                                  slot: "rightText"
                                },
                                [_vm._v(" times")]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "Col",
            { staticClass: "padding-left-10", attrs: { span: "8" } },
            [
              _c(
                "Card",
                [
                  _c(
                    "p",
                    { attrs: { slot: "title" }, slot: "title" },
                    [
                      _c("Icon", { attrs: { type: "settings" } }),
                      _vm._v(
                        "\n                    设置数据格式\n                "
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "Row",
                    {
                      staticClass: "countto-page-row",
                      attrs: {
                        type: "flex",
                        justify: "center",
                        align: "middle"
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "count-to-con" },
                        [
                          _c(
                            "CountTo",
                            {
                              attrs: {
                                endVal: 2534,
                                mainStyle: _vm.mainStyle,
                                countStyle: _vm.countStyle,
                                decimals: 2
                              }
                            },
                            [
                              _c(
                                "span",
                                {
                                  attrs: { slot: "leftText" },
                                  slot: "leftText"
                                },
                                [_vm._v("Total: ")]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  attrs: { slot: "rightText" },
                                  slot: "rightText"
                                },
                                [_vm._v(" times")]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]
                  )
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
            "Col",
            { attrs: { span: "8" } },
            [
              _c(
                "Card",
                [
                  _c(
                    "p",
                    { attrs: { slot: "title" }, slot: "title" },
                    [
                      _c("Icon", { attrs: { type: "ios-color-wand" } }),
                      _vm._v(
                        "\n                    转换单位简化数据\n                "
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "Row",
                    {
                      staticClass: "countto-page-row",
                      attrs: {
                        type: "flex",
                        justify: "center",
                        align: "middle"
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "count-to-con" },
                        [
                          _c(
                            "CountTo",
                            {
                              attrs: {
                                simplify: true,
                                endVal: 2534,
                                mainStyle: _vm.mainStyle,
                                countStyle: _vm.countStyle
                              }
                            },
                            [
                              _c(
                                "span",
                                {
                                  attrs: { slot: "leftText" },
                                  slot: "leftText"
                                },
                                [_vm._v("Total: ")]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  attrs: { slot: "rightText" },
                                  slot: "rightText"
                                },
                                [_vm._v(" times")]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "Col",
            { staticClass: "padding-left-10", attrs: { span: "8" } },
            [
              _c(
                "Card",
                [
                  _c(
                    "p",
                    { attrs: { slot: "title" }, slot: "title" },
                    [
                      _c("Icon", { attrs: { type: "ios-shuffle-strong" } }),
                      _vm._v(
                        "\n                    自定义单位\n                "
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "Row",
                    {
                      staticClass: "countto-page-row",
                      attrs: {
                        type: "flex",
                        justify: "center",
                        align: "middle"
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "count-to-con" },
                        [
                          _c(
                            "CountTo",
                            {
                              attrs: {
                                simplify: true,
                                unit: _vm.unit,
                                endVal: 253,
                                mainStyle: _vm.mainStyle2,
                                countStyle: _vm.countStyle2
                              }
                            },
                            [
                              _c(
                                "span",
                                {
                                  attrs: { slot: "leftText" },
                                  slot: "leftText"
                                },
                                [_vm._v("原始数据：253 => ")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "CountTo",
                            {
                              attrs: {
                                simplify: true,
                                unit: _vm.unit,
                                endVal: 2534,
                                mainStyle: _vm.mainStyle2,
                                countStyle: _vm.countStyle2
                              }
                            },
                            [
                              _c(
                                "span",
                                {
                                  attrs: { slot: "leftText" },
                                  slot: "leftText"
                                },
                                [_vm._v("原始数据：2534 => ")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "CountTo",
                            {
                              attrs: {
                                simplify: true,
                                unit: _vm.unit,
                                endVal: 257678,
                                mainStyle: _vm.mainStyle2,
                                countStyle: _vm.countStyle2
                              }
                            },
                            [
                              _c(
                                "span",
                                {
                                  attrs: { slot: "leftText" },
                                  slot: "leftText"
                                },
                                [_vm._v("原始数据：257678 => ")]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "Col",
            { staticClass: "padding-left-10", attrs: { span: "8" } },
            [
              _c(
                "Card",
                [
                  _c(
                    "p",
                    { attrs: { slot: "title" }, slot: "title" },
                    [
                      _c("Icon", { attrs: { type: "android-stopwatch" } }),
                      _vm._v(
                        "\n                    可异步更新数据\n                "
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "Row",
                    {
                      staticClass: "countto-page-row",
                      attrs: {
                        type: "flex",
                        justify: "center",
                        align: "middle"
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "count-to-con" },
                        [
                          _c(
                            "CountTo",
                            {
                              attrs: {
                                endVal: _vm.asynEndVal,
                                mainStyle: _vm.mainStyle,
                                countStyle: _vm.countStyle
                              }
                            },
                            [
                              _c(
                                "span",
                                {
                                  attrs: { slot: "leftText" },
                                  slot: "leftText"
                                },
                                [_vm._v("Total: ")]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  attrs: { slot: "rightText" },
                                  slot: "rightText"
                                },
                                [_vm._v(" times")]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]
                  )
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
              _c(
                "p",
                { attrs: { slot: "title" }, slot: "title" },
                [
                  _c("Icon", { attrs: { type: "ios-analytics" } }),
                  _vm._v("\n                综合实例\n            ")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Row",
                {
                  staticClass: "countto-page-row",
                  attrs: { type: "flex", justify: "center", align: "middle" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "count-to-con" },
                    [
                      _c(
                        "CountTo",
                        {
                          attrs: {
                            delay: 500,
                            simplify: true,
                            unit: _vm.unit2,
                            endVal: _vm.integratedEndVal,
                            mainStyle: _vm.mainStyle,
                            countStyle: _vm.countStyle
                          }
                        },
                        [
                          _c(
                            "span",
                            { attrs: { slot: "leftText" }, slot: "leftText" },
                            [
                              _vm._v(
                                "原始数据: " +
                                  _vm._s(_vm.integratedEndVal) +
                                  " => "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            { attrs: { slot: "rightText" }, slot: "rightText" },
                            [_vm._v(" times")]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]
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
    require("vue-hot-reload-api")      .rerender("data-v-72abbeda", module.exports)
  }
}

/***/ })

});