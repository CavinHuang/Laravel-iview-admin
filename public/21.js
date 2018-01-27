webpackJsonp([21],{

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(687)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(689)
/* template */
var __vue_template__ = __webpack_require__(690)
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
Component.options.__file = "resources\\assets\\js\\views\\message\\message.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d9eb3a56", Component.options)
  } else {
    hotAPI.reload("data-v-d9eb3a56", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(688);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("6ae84082", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d9eb3a56\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/less-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./message.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d9eb3a56\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/less-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./message.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.message-main-con {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n}\n.message-mainlist-con {\n  position: absolute;\n  left: 0;\n  top: 10px;\n  width: 300px;\n  bottom: 0;\n  padding: 10px 0;\n}\n.message-mainlist-con div {\n  padding: 10px;\n  margin: 0 20px;\n  border-bottom: 1px dashed #d2d3d2;\n}\n.message-mainlist-con div:last-child {\n  border: none;\n}\n.message-mainlist-con div .message-count-badge-outer {\n  float: right;\n}\n.message-mainlist-con div .message-count-badge {\n  background: #d2d3d2;\n}\n.message-mainlist-con div:first-child .message-count-badge {\n  background: #ed3f14;\n}\n.message-mainlist-con div .mes-type-btn-text {\n  margin-left: 10px;\n}\n.message-content-con {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  bottom: 10px;\n  left: 300px;\n  background: white;\n  border-radius: 3px;\n  -webkit-box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);\n          box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);\n  overflow: auto;\n}\n.message-content-con .message-title-list-con {\n  width: 100%;\n  height: 100%;\n}\n.message-content-con .message-content-top-bar {\n  height: 40px;\n  width: 100%;\n  background: white;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-bottom: 1px solid #dededb;\n}\n.message-content-con .message-content-top-bar .mes-back-btn-con {\n  position: absolute;\n  width: 70px;\n  height: 30px;\n  left: 0;\n  top: 5px;\n}\n.message-content-con .message-content-top-bar .mes-title {\n  position: absolute;\n  top: 0;\n  right: 70px;\n  bottom: 0;\n  left: 70px;\n  line-height: 40px;\n  padding: 0 30px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n}\n.message-content-con .mes-time-con {\n  position: absolute;\n  width: 100%;\n  top: 40px;\n  left: 0;\n  padding: 20px 0;\n  text-align: center;\n  font-size: 14px;\n  color: #b7b7b5;\n}\n.message-content-con .message-content-body {\n  position: absolute;\n  top: 90px;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: auto;\n}\n.message-content-con .message-content-body .message-content {\n  padding: 10px 20px;\n}\n.back-message-list-enter,\n.back-message-list-leave-to {\n  opacity: 0;\n}\n.back-message-list-enter-active,\n.back-message-list-leave-active {\n  -webkit-transition: all .5s;\n  transition: all .5s;\n}\n.back-message-list-enter-to,\n.back-message-list-leave {\n  opacity: 1;\n}\n.view-message-enter,\n.view-message-leave-to {\n  opacity: 0;\n}\n.view-message-enter-active,\n.view-message-leave-active {\n  -webkit-transition: all .5s;\n  transition: all .5s;\n}\n.view-message-enter-to,\n.view-message-leave {\n  opacity: 1;\n}\n.mes-current-type-btn-enter,\n.mes-current-type-btn-leave-to {\n  opacity: 0;\n  width: 0;\n}\n.mes-current-type-btn-enter-active,\n.mes-current-type-btn-leave-active {\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n.mes-current-type-btn-enter-to,\n.mes-current-type-btn-leave {\n  opacity: 1;\n  width: 12px;\n}\n", ""]);

// exports


/***/ }),

/***/ 689:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'message_index',
    data: function data() {
        var _this = this;

        var markAsreadBtn = function markAsreadBtn(h, params) {
            return h('Button', {
                props: {
                    size: 'small'
                },
                on: {
                    click: function click() {
                        _this.hasreadMesList.unshift(_this.currentMesList.splice(params.index, 1)[0]);
                        _this.$store.commit('setMessageCount', _this.unreadMesList.length);
                    }
                }
            }, '标为已读');
        };
        var deleteMesBtn = function deleteMesBtn(h, params) {
            return h('Button', {
                props: {
                    size: 'small',
                    type: 'error'
                },
                on: {
                    click: function click() {
                        _this.recyclebinList.unshift(_this.hasreadMesList.splice(params.index, 1)[0]);
                    }
                }
            }, '删除');
        };
        var restoreBtn = function restoreBtn(h, params) {
            return h('Button', {
                props: {
                    size: 'small'
                },
                on: {
                    click: function click() {
                        _this.hasreadMesList.unshift(_this.recyclebinList.splice(params.index, 1)[0]);
                    }
                }
            }, '还原');
        };
        return {
            currentMesList: [],
            unreadMesList: [],
            hasreadMesList: [],
            recyclebinList: [],
            currentMessageType: 'unread',
            showMesTitleList: true,
            unreadCount: 0,
            hasreadCount: 0,
            recyclebinCount: 0,
            noDataText: '暂无未读消息',
            mes: {
                title: '',
                time: '',
                content: ''
            },
            mesTitleColumns: [
            // {
            //     type: 'selection',
            //     width: 50,
            //     align: 'center'
            // },
            {
                title: ' ',
                key: 'title',
                align: 'left',
                ellipsis: true,
                render: function render(h, params) {
                    return h('a', {
                        on: {
                            click: function click() {
                                _this.showMesTitleList = false;
                                _this.mes.title = params.row.title;
                                _this.mes.time = _this.formatDate(params.row.time);
                                _this.getContent(params.index);
                            }
                        }
                    }, params.row.title);
                }
            }, {
                title: ' ',
                key: 'time',
                align: 'center',
                width: 180,
                render: function render(h, params) {
                    return h('span', [h('Icon', {
                        props: {
                            type: 'android-time',
                            size: 12
                        },
                        style: {
                            margin: '0 5px'
                        }
                    }), h('span', {
                        props: {
                            type: 'android-time',
                            size: 12
                        }
                    }, _this.formatDate(params.row.time))]);
                }
            }, {
                title: ' ',
                key: 'asread',
                align: 'center',
                width: 100,
                render: function render(h, params) {
                    if (_this.currentMessageType === 'unread') {
                        return h('div', [markAsreadBtn(h, params)]);
                    } else if (_this.currentMessageType === 'hasread') {
                        return h('div', [deleteMesBtn(h, params)]);
                    } else {
                        return h('div', [restoreBtn(h, params)]);
                    }
                }
            }]
        };
    },

    methods: {
        formatDate: function formatDate(time) {
            var date = new Date(time);
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var hour = date.getHours();
            var minute = date.getMinutes();
            var second = date.getSeconds();
            return year + '/' + month + '/' + day + '  ' + hour + ':' + minute + ':' + second;
        },
        backMesTitleList: function backMesTitleList() {
            this.showMesTitleList = true;
        },
        setCurrentMesType: function setCurrentMesType(type) {
            if (this.currentMessageType !== type) {
                this.showMesTitleList = true;
            }
            this.currentMessageType = type;
            if (type === 'unread') {
                this.noDataText = '暂无未读消息';
                this.currentMesList = this.unreadMesList;
            } else if (type === 'hasread') {
                this.noDataText = '暂无已读消息';
                this.currentMesList = this.hasreadMesList;
            } else {
                this.noDataText = '回收站无消息';
                this.currentMesList = this.recyclebinList;
            }
        },
        getContent: function getContent(index) {
            // you can write ajax request here to get message content
            var mesContent = '';
            switch (this.currentMessageType + index) {
                case 'unread0':
                    mesContent = '这是您点击的《欢迎登录iView-admin后台管理系统，来了解他的用途吧》的相关内容。';break;
                case 'unread1':
                    mesContent = '这是您点击的《使用iView-admin和iView-ui组件库快速搭建你的后台系统吧》的相关内容。';break;
                case 'unread2':
                    mesContent = '这是您点击的《喜欢iView-admin的话，欢迎到github主页给个star吧》的相关内容。';break;
                case 'hasread0':
                    mesContent = '这是您点击的《这是一条您已经读过的消息》的相关内容。';break;
                default:
                    mesContent = '这是您点击的《这是一条被删除的消息》的相关内容。';break;
            }
            this.mes.content = mesContent;
        }
    },
    mounted: function mounted() {
        this.currentMesList = this.unreadMesList = [{
            title: '欢迎登录iView-admin后台管理系统，来了解他的用途吧',
            time: 1507390106000
        }, {
            title: '使用iView-admin和iView-ui组件库快速搭建你的后台系统吧',
            time: 1507390106000
        }, {
            title: '喜欢iView-admin的话，欢迎到github主页给个star吧',
            time: 1507390106000
        }];
        this.hasreadMesList = [{
            title: '这是一条您已经读过的消息',
            time: 1507330106000
        }];
        this.recyclebinList = [{
            title: '这是一条被删除的消息',
            time: 1506390106000
        }];
        this.unreadCount = this.unreadMesList.length;
        this.hasreadCount = this.hasreadMesList.length;
        this.recyclebinCount = this.recyclebinList.length;
    },

    watch: {
        unreadMesList: function unreadMesList(arr) {
            this.unreadCount = arr.length;
        },
        hasreadMesList: function hasreadMesList(arr) {
            this.hasreadCount = arr.length;
        },
        recyclebinList: function recyclebinList(arr) {
            this.recyclebinCount = arr.length;
        }
    }
});

/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "message-main-con" }, [
    _c("div", { staticClass: "message-mainlist-con" }, [
      _c(
        "div",
        [
          _c(
            "Button",
            {
              attrs: { size: "large", long: "", type: "text" },
              on: {
                click: function($event) {
                  _vm.setCurrentMesType("unread")
                }
              }
            },
            [
              _c(
                "transition",
                { attrs: { name: "mes-current-type-btn" } },
                [
                  _c("Icon", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.currentMessageType === "unread",
                        expression: "currentMessageType === 'unread'"
                      }
                    ],
                    attrs: { type: "checkmark" }
                  })
                ],
                1
              ),
              _c("span", { staticClass: "mes-type-btn-text" }, [
                _vm._v("未读消息")
              ]),
              _c("Badge", {
                staticClass: "message-count-badge-outer",
                attrs: {
                  "class-name": "message-count-badge",
                  count: _vm.unreadCount
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        [
          _c(
            "Button",
            {
              attrs: { size: "large", long: "", type: "text" },
              on: {
                click: function($event) {
                  _vm.setCurrentMesType("hasread")
                }
              }
            },
            [
              _c(
                "transition",
                { attrs: { name: "mes-current-type-btn" } },
                [
                  _c("Icon", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.currentMessageType === "hasread",
                        expression: "currentMessageType === 'hasread'"
                      }
                    ],
                    attrs: { type: "checkmark" }
                  })
                ],
                1
              ),
              _c("span", { staticClass: "mes-type-btn-text" }, [
                _vm._v("已读消息")
              ]),
              _c("Badge", {
                staticClass: "message-count-badge-outer",
                attrs: {
                  "class-name": "message-count-badge",
                  count: _vm.hasreadCount
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        [
          _c(
            "Button",
            {
              attrs: { size: "large", long: "", type: "text" },
              on: {
                click: function($event) {
                  _vm.setCurrentMesType("recyclebin")
                }
              }
            },
            [
              _c(
                "transition",
                { attrs: { name: "mes-current-type-btn" } },
                [
                  _c("Icon", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.currentMessageType === "recyclebin",
                        expression: "currentMessageType === 'recyclebin'"
                      }
                    ],
                    attrs: { type: "checkmark" }
                  })
                ],
                1
              ),
              _c("span", { staticClass: "mes-type-btn-text" }, [
                _vm._v("回收站")
              ]),
              _c("Badge", {
                staticClass: "message-count-badge-outer",
                attrs: {
                  "class-name": "message-count-badge",
                  count: _vm.recyclebinCount
                }
              })
            ],
            1
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "message-content-con" },
      [
        _c("transition", { attrs: { name: "view-message" } }, [
          _vm.showMesTitleList
            ? _c(
                "div",
                { staticClass: "message-title-list-con" },
                [
                  _c("Table", {
                    ref: "messageList",
                    attrs: {
                      columns: _vm.mesTitleColumns,
                      data: _vm.currentMesList,
                      "no-data-text": _vm.noDataText
                    }
                  })
                ],
                1
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("transition", { attrs: { name: "back-message-list" } }, [
          !_vm.showMesTitleList
            ? _c("div", { staticClass: "message-view-content-con" }, [
                _c("div", { staticClass: "message-content-top-bar" }, [
                  _c(
                    "span",
                    { staticClass: "mes-back-btn-con" },
                    [
                      _c(
                        "Button",
                        {
                          attrs: { type: "text" },
                          on: { click: _vm.backMesTitleList }
                        },
                        [
                          _c("Icon", { attrs: { type: "chevron-left" } }),
                          _vm._v("  返回")
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("h3", { staticClass: "mes-title" }, [
                    _vm._v(_vm._s(_vm.mes.title))
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "p",
                  { staticClass: "mes-time-con" },
                  [
                    _c("Icon", { attrs: { type: "android-time" } }),
                    _vm._v("  " + _vm._s(_vm.mes.time))
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "message-content-body" }, [
                  _c("p", { staticClass: "message-content" }, [
                    _vm._v(_vm._s(_vm.mes.content))
                  ])
                ])
              ])
            : _vm._e()
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d9eb3a56", module.exports)
  }
}

/***/ })

});