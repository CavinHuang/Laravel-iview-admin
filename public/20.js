webpackJsonp([20],{

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(747)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(749)
/* template */
var __vue_template__ = __webpack_require__(750)
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
Component.options.__file = "resources\\assets\\js\\views\\my-components\\file-upload\\file-upload.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4aef1c34", Component.options)
  } else {
    hotAPI.reload("data-v-4aef1c34", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(748);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("9b8156dc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4aef1c34\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/index.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./file-upload.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4aef1c34\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/index.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./file-upload.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.admin-upload-list {\n  display: inline-block;\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  line-height: 60px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  overflow: hidden;\n  background: #fff;\n  position: relative;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  margin-right: 4px;\n}\n.admin-upload-list img {\n  width: 100%;\n  height: 100%;\n}\n.admin-upload-list-cover {\n  display: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.admin-upload-list:hover .admin-upload-list-cover {\n  display: block;\n}\n.admin-upload-list-cover i {\n  color: #fff;\n  font-size: 20px;\n  cursor: pointer;\n  margin: 0 2px;\n}\n", ""]);

// exports


/***/ }),

/***/ 749:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'file-upload',
    data: function data() {
        return {
            defaultList: [{
                'name': 'a42bdcc1178e62b4694c830f028db5c0',
                'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
            }, {
                'name': 'bc7521e033abdd1e92222d733590f104',
                'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
            }],
            imgName: '',
            visible: false,
            uploadList: []
        };
    },

    methods: {
        handleFormatError: function handleFormatError(file) {
            this.$Notice.warning({
                title: '文件格式不正确',
                desc: '文件 ' + file.name + ' 格式不正确，请选择图片文件。'
            });
        },
        handleBeforeUpload: function handleBeforeUpload(file) {
            this.$Notice.warning({
                title: '文件准备上传',
                desc: '文件 ' + file.name + ' 准备上传。'
            });
        },
        handleProgress: function handleProgress(event, file) {
            this.$Notice.info({
                title: '文件正在上传',
                desc: '文件 ' + file.name + ' 正在上传。'
            });
        },
        handleSuccess: function handleSuccess(evnet, file) {
            this.$Notice.success({
                title: '文件上传成功',
                desc: '文件 ' + file.name + ' 上传成功。'
            });
        },
        handleError: function handleError(event, file) {
            this.$Notice.error({
                title: '文件上传成功',
                desc: '文件 ' + file.name + ' 上传失败。'
            });
        },
        handleView: function handleView(name) {
            this.imgName = name;
            this.visible = true;
        },
        handleRemove: function handleRemove(file) {
            // 从 upload 实例删除数据
            var fileList = this.$refs.upload.fileList;
            this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
        },
        handleSuccess2: function handleSuccess2(res, file) {
            // 因为上传过程为实例，这里模拟添加 url
            file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
            file.name = '7eb99afb9d5f317c912f08b5212fd69a';
        },
        handleFormatError2: function handleFormatError2(file) {
            this.$Notice.warning({
                title: '文件格式不正确',
                desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
            });
        },
        handleMaxSize: function handleMaxSize(file) {
            this.$Notice.warning({
                title: '超出文件大小限制',
                desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
            });
        },
        handleBeforeUpload2: function handleBeforeUpload2() {
            var check = this.uploadList.length < 5;
            if (!check) {
                this.$Notice.warning({
                    title: '最多只能上传 5 张图片。'
                });
            }
            return check;
        }
    },
    mounted: function mounted() {
        this.uploadList = this.$refs.upload.fileList;
    }
});

/***/ }),

/***/ 750:
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
            { attrs: { span: "8" } },
            [
              _c("Card", [
                _c(
                  "p",
                  { attrs: { slot: "title" }, slot: "title" },
                  [
                    _c("Icon", { attrs: { type: "ios-cloud-upload-outline" } }),
                    _vm._v(
                      "\n                    基本上传功能\n                "
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "height-120px" },
                  [
                    _c(
                      "Row",
                      {
                        staticClass: "height-100",
                        attrs: {
                          type: "flex",
                          justify: "center",
                          align: "middle"
                        }
                      },
                      [
                        _c(
                          "Upload",
                          {
                            attrs: {
                              action: "//jsonplaceholder.typicode.com/posts/"
                            }
                          },
                          [
                            _c(
                              "Button",
                              {
                                attrs: {
                                  type: "ghost",
                                  icon: "ios-cloud-upload-outline"
                                }
                              },
                              [_vm._v("上传文件")]
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
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "Col",
            { staticClass: "padding-left-10", attrs: { span: "8" } },
            [
              _c("Card", [
                _c(
                  "p",
                  { attrs: { slot: "title" }, slot: "title" },
                  [
                    _c("Icon", { attrs: { type: "ios-copy-outline" } }),
                    _vm._v(
                      "\n                    可多选的上传\n                "
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "height-120px" },
                  [
                    _c(
                      "Row",
                      {
                        staticClass: "height-100",
                        attrs: {
                          type: "flex",
                          justify: "center",
                          align: "middle"
                        }
                      },
                      [
                        _c(
                          "Upload",
                          {
                            attrs: {
                              multiple: "",
                              action: "//jsonplaceholder.typicode.com/posts/"
                            }
                          },
                          [
                            _c("span", [_vm._v("多选文件上传  ")]),
                            _vm._v(" "),
                            _c(
                              "Button",
                              {
                                attrs: {
                                  type: "ghost",
                                  icon: "ios-cloud-upload-outline"
                                }
                              },
                              [_vm._v("上传文件")]
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
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "Col",
            { staticClass: "padding-left-10", attrs: { span: "8" } },
            [
              _c("Card", [
                _c(
                  "p",
                  { attrs: { slot: "title" }, slot: "title" },
                  [
                    _c("Icon", { attrs: { type: "upload" } }),
                    _vm._v(
                      "\n                    可限制文件类型\n                "
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "height-120px" },
                  [
                    _c(
                      "Row",
                      {
                        staticClass: "height-100",
                        attrs: {
                          type: "flex",
                          justify: "center",
                          align: "middle"
                        }
                      },
                      [
                        _c(
                          "Upload",
                          {
                            attrs: {
                              action: "//jsonplaceholder.typicode.com/posts/",
                              format: [
                                "jpg",
                                "png",
                                "jpeg",
                                "gif",
                                "bmp",
                                "svg"
                              ],
                              "on-format-error": _vm.handleFormatError
                            }
                          },
                          [
                            _c("span", [_vm._v("选择图片上传  ")]),
                            _vm._v(" "),
                            _c(
                              "Button",
                              {
                                attrs: {
                                  type: "ghost",
                                  icon: "ios-cloud-upload-outline"
                                }
                              },
                              [_vm._v("上传文件")]
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
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "margin-top-10" },
        [
          _c("Col", { attrs: { span: "8" } }, [
            _c(
              "div",
              [
                _c("Card", [
                  _c(
                    "p",
                    { attrs: { slot: "title" }, slot: "title" },
                    [
                      _c("Icon", { attrs: { type: "android-funnel" } }),
                      _vm._v(
                        "\n                        可监听上传各个阶段\n                    "
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "height-200px" },
                    [
                      _c(
                        "Row",
                        {
                          staticClass: "height-100",
                          attrs: {
                            type: "flex",
                            justify: "center",
                            align: "middle"
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                display: "block",
                                width: "100%",
                                "text-align": "center"
                              }
                            },
                            [
                              _c(
                                "Upload",
                                {
                                  attrs: {
                                    action:
                                      "//jsonplaceholder.typicode.com/posts/",
                                    "on-format-error": _vm.handleFormatError,
                                    "before-upload": _vm.handleBeforeUpload,
                                    "on-progress": _vm.handleProgress,
                                    "on-success": _vm.handleSuccess,
                                    "on-error": _vm.handleError
                                  }
                                },
                                [
                                  _c("span", [_vm._v("请选择文件  ")]),
                                  _vm._v(" "),
                                  _c(
                                    "Button",
                                    {
                                      attrs: {
                                        type: "ghost",
                                        icon: "ios-cloud-upload-outline"
                                      }
                                    },
                                    [_vm._v("上传文件")]
                                  )
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
                  )
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
                      _c("Icon", { attrs: { type: "android-hand" } }),
                      _vm._v(
                        "\n                        可拖拽上传\n                    "
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "height-200px" },
                    [
                      _c(
                        "Upload",
                        {
                          attrs: {
                            multiple: "",
                            type: "drag",
                            action: "//jsonplaceholder.typicode.com/posts/"
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                padding: "60px 0",
                                height: "200px"
                              }
                            },
                            [
                              _c("Icon", {
                                staticStyle: { color: "#3399ff" },
                                attrs: { type: "ios-cloud-upload", size: "52" }
                              }),
                              _vm._v(" "),
                              _c("p", [_vm._v("点击或将文件拖拽到这里上传")])
                            ],
                            1
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
          ]),
          _vm._v(" "),
          _c("Col", { attrs: { span: "16" } }, [
            _c(
              "div",
              { staticClass: "padding-left-10" },
              [
                _c("Card", [
                  _c(
                    "p",
                    { attrs: { slot: "title" }, slot: "title" },
                    [
                      _c("Icon", { attrs: { type: "ios-analytics" } }),
                      _vm._v(
                        "\n                        综合实例\n                    "
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "height-492px" },
                    [
                      _c(
                        "Col",
                        { attrs: { span: "8" } },
                        [
                          _c(
                            "Card",
                            [
                              _c(
                                "Upload",
                                {
                                  ref: "upload",
                                  staticStyle: {
                                    display: "inline-block",
                                    width: "58px"
                                  },
                                  attrs: {
                                    "show-upload-list": false,
                                    "default-file-list": _vm.defaultList,
                                    "on-success": _vm.handleSuccess2,
                                    format: ["jpg", "jpeg", "png"],
                                    "max-size": 2048,
                                    "on-format-error": _vm.handleFormatError2,
                                    "on-exceeded-size": _vm.handleMaxSize,
                                    "before-upload": _vm.handleBeforeUpload2,
                                    multiple: "",
                                    type: "drag",
                                    action:
                                      "//jsonplaceholder.typicode.com/posts/"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticStyle: {
                                        width: "58px",
                                        height: "58px",
                                        "line-height": "58px"
                                      }
                                    },
                                    [
                                      _c("Icon", {
                                        attrs: { type: "camera", size: "20" }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "Modal",
                                {
                                  attrs: { title: "查看图片" },
                                  model: {
                                    value: _vm.visible,
                                    callback: function($$v) {
                                      _vm.visible = $$v
                                    },
                                    expression: "visible"
                                  }
                                },
                                [
                                  _vm.visible
                                    ? _c("img", {
                                        staticStyle: { width: "100%" },
                                        attrs: {
                                          src:
                                            "https://o5wwk8baw.qnssl.com/" +
                                            _vm.imgName +
                                            "/large"
                                        }
                                      })
                                    : _vm._e()
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
                        {
                          staticClass: "padding-left-10",
                          attrs: { span: "16" }
                        },
                        [
                          _c("Card", [
                            _c(
                              "div",
                              { staticClass: "height-460px" },
                              _vm._l(_vm.uploadList, function(item) {
                                return _c(
                                  "div",
                                  {
                                    key: item.url,
                                    staticClass: "admin-upload-list"
                                  },
                                  [
                                    item.status === "finished"
                                      ? [
                                          _c("img", {
                                            attrs: { src: item.url }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "admin-upload-list-cover"
                                            },
                                            [
                                              _c("Icon", {
                                                attrs: {
                                                  type: "ios-eye-outline"
                                                },
                                                nativeOn: {
                                                  click: function($event) {
                                                    _vm.handleView(item.name)
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("Icon", {
                                                attrs: {
                                                  type: "ios-trash-outline"
                                                },
                                                nativeOn: {
                                                  click: function($event) {
                                                    _vm.handleRemove(item)
                                                  }
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ]
                                      : [
                                          item.showProgress
                                            ? _c("Progress", {
                                                attrs: {
                                                  percent: item.percentage,
                                                  "hide-info": ""
                                                }
                                              })
                                            : _vm._e()
                                        ]
                                  ],
                                  2
                                )
                              })
                            )
                          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-4aef1c34", module.exports)
  }
}

/***/ })

});