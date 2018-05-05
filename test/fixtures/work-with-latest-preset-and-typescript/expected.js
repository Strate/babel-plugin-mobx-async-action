"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _mobx = require("mobx");

var mobx = _interopRequireWildcard(_mobx);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _tslib = require("tslib");

var tslib_1 = _interopRequireWildcard(_tslib);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Class1 = (_class = function () {
  function Class1() {
    var _this = this;

    _classCallCheck(this, Class1);

    this.method1 = (0, _mobx.flow)( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return 123;

            case 2:
              _context.next = 4;
              return 321;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));
    this.method2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return 123;

            case 2:
              _context2.next = 4;
              return 321;

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    }));
  }

  _createClass(Class1, [{
    key: "method",
    value: function method() {
      var _this2 = this;

      return (0, _mobx.flow)( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return 123;

              case 2:
                _context3.next = 4;
                return 321;

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }))();
    }
  }, {
    key: "method2",
    value: function method2() {
      var Class2 = function () {
        function Class2() {
          _classCallCheck(this, Class2);
        }

        _createClass(Class2, [{
          key: "method",
          value: function method() {
            var _this3 = this;

            return (0, _mobx.flow)( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return 123;

                    case 2:
                      _context4.next = 4;
                      return 321;

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, _this3);
            }))();
          }
        }]);

        return Class2;
      }();

      tslib_1.__decorate([_mobx.action], Class2.prototype, "method", null);
      return Class2;
    }
  }, {
    key: "method3",
    value: function method3() {
      var _this5 = this;

      return (0, _mobx.flow)( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var Class2;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                Class2 = function () {
                  function Class2() {
                    _classCallCheck(this, Class2);
                  }

                  _createClass(Class2, [{
                    key: "method",
                    value: function method() {
                      var _this4 = this;

                      return (0, _mobx.flow)( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                _context5.next = 2;
                                return 123;

                              case 2:
                                _context5.next = 4;
                                return 321;

                              case 4:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _callee5, _this4);
                      }))();
                    }
                  }]);

                  return Class2;
                }();

                tslib_1.__decorate([_mobx.action], Class2.prototype, "method", null);
                return _context6.abrupt("return", Class2);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, _this5);
      }))();
    }
  }]);

  return Class1;
}(), (_applyDecoratedDescriptor(_class.prototype, "method3", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "method3"), _class.prototype)), _class);


tslib_1.__decorate([mobx.action], Class1.prototype, "method", null);
tslib_1.__decorate([_mobx.action], Class1.prototype, "method1", void 0);

var Class2 = function () {
  function Class2() {
    _classCallCheck(this, Class2);
  }

  _createClass(Class2, [{
    key: "method",
    value: function method() {
      var _this6 = this;

      return (0, _mobx.flow)( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return 123;

              case 2:
                _context7.next = 4;
                return 321;

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, _this6);
      }))();
    }
  }]);

  return Class2;
}();

exports.default = Class2;

tslib_1.__decorate([_mobx.action], Class2.prototype, "method", null);
