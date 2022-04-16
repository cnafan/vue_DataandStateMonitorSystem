"use strict";

let _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
let _crender = _interopRequireDefault(require("./class/crender.class"));
Object.defineProperty(exports, "CRender", {
  enumerable: true,
  get: function get() {
    return _crender["default"];
  }
});
let _graphs = require("./config/graphs");
Object.defineProperty(exports, "extendNewGraph", {
  enumerable: true,
  get: function get() {
    return _graphs.extendNewGraph;
  }
});
exports["default"] = void 0;


let _default = _crender["default"];
exports["default"] = _default;
