webpackJsonp([11],{

/***/ 119:
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
Component.options.__file = "resources\\assets\\js\\views\\my-components\\text-editor\\text-editor.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18e6eb9c", Component.options)
  } else {
    hotAPI.reload("data-v-18e6eb9c", Component.options)
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
var update = __webpack_require__(5)("761b1f95", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-18e6eb9c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/index.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./text-editor.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-18e6eb9c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/index.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./text-editor.vue");
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

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.demo-spin-icon-load {\n  -webkit-animation: ani-demo-spin 1s linear infinite;\n          animation: ani-demo-spin 1s linear infinite;\n}\n@-webkit-keyframes ani-demo-spin {\nfrom {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n50% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes ani-demo-spin {\nfrom {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n50% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n", ""]);

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
var update = __webpack_require__(5)("b75e2ef6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-18e6eb9c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./text-editor.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-18e6eb9c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./text-editor.vue");
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

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 705:
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

//import tinymce from 'tinymce/tinymce';
/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'text-editor',
    data: function data() {
        return {
            spinShow: true
        };
    },

    methods: {
        init: function init() {
            var _this = this;

            this.$nextTick(function () {
                var vm = _this;
                var height = document.body.offsetHeight - 300;
                window.tinymce.init({
                    selector: '#tinymceEditer',
                    branding: false,
                    elementpath: false,
                    height: height,
                    language: 'zh_CN',
                    menubar: 'edit insert view format table tools',
                    plugins: ['advlist autolink lists link image charmap print preview hr anchor pagebreak imagetools', 'searchreplace visualblocks visualchars code fullpage', 'insertdatetime media nonbreaking save table contextmenu directionality', 'emoticons paste textcolor colorpicker textpattern imagetools codesample'],
                    toolbar1: ' newnote print preview | undo redo | insert | styleselect | forecolor backcolor bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons media codesample',
                    autosave_interval: '20s',
                    image_advtab: true,
                    table_default_styles: {
                        width: '100%',
                        borderCollapse: 'collapse'
                    },
                    setup: function setup(editor) {
                        editor.on('init', function (e) {
                            vm.spinShow = false;
                            if (localStorage.editorContent) {
                                tinymce.get('tinymceEditer').setContent(localStorage.editorContent);
                            }
                        });
                        editor.on('keydown', function (e) {
                            localStorage.editorContent = tinymce.get('tinymceEditer').getContent();
                        });
                    }
                });
            });
        }
    },
    mounted: function mounted() {
        this.init();
    },
    destroyed: function destroyed() {
        tinymce.get('tinymceEditer').destroy();
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
    [
      _c("Card", { attrs: { shadow: "" } }, [
        _c("textarea", {
          staticClass: "tinymce-textarea",
          attrs: { id: "tinymceEditer" }
        })
      ]),
      _vm._v(" "),
      _vm.spinShow
        ? _c(
            "Spin",
            { attrs: { fix: "" } },
            [
              _c("Icon", {
                staticClass: "demo-spin-icon-load",
                attrs: { type: "load-c", size: "18" }
              }),
              _vm._v(" "),
              _c("div", [_vm._v("加载组件中...")])
            ],
            1
          )
        : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-18e6eb9c", module.exports)
  }
}

/***/ })

});