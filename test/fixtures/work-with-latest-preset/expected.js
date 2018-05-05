"use strict";

var _mobx = require("mobx");

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

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

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

function a1() {}

(0, _mobx.action)( /*#__PURE__*/regeneratorRuntime.mark(function doSome() {
  return regeneratorRuntime.wrap(function doSome$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
          _context.next = 4;
          return 2;

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, doSome, this);
}));

(0, _mobx.action)(function () {
  var _ref = (0, _mobx.flow)( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return 1;

          case 2:
            _context2.next = 4;
            return 2;

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee, this);
  }));

  function doSomeSpecial() {
    return _ref.apply(this, arguments);
  }

  return doSomeSpecial;
}());

(0, _mobx.action)((0, _mobx.flow)( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  return regeneratorRuntime.wrap(function _callee2$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return 1;

        case 2:
          _context3.next = 4;
          return 2;

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee2, undefined);
})));

(0, _mobx.action)((0, _mobx.flow)( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
  var a;
  return regeneratorRuntime.wrap(function _callee3$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return 1;

        case 2:
          _context4.t0 = _context4.sent;
          _context4.next = 5;
          return 2;

        case 5:
          _context4.t1 = _context4.sent;
          a = [_context4.t0, _context4.t1];

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  }, _callee3, undefined);
})));

var SomeClass = (_dec = (0, _mobx.action)("named"), _dec2 = (0, _mobx.action)("named"), (_class = function () {
  function SomeClass() {
    _classCallCheck(this, SomeClass);

    _initDefineProp(this, "generatorMethod", _descriptor, this);

    _initDefineProp(this, "generatorMethod2", _descriptor2, this);

    _initDefineProp(this, "method2", _descriptor3, this);
  }

  _createClass(SomeClass, [{
    key: "method",
    value: function method() {
      var _this = this;

      return (0, _mobx.flow)( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return 1;

              case 2:
                _context5.next = 4;
                return 2;

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee4, _this);
      }))();
    }
  }, {
    key: "method1",
    value: function method1() {
      var _this2 = this;

      return (0, _mobx.flow)( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return 1;

              case 2:
                _context6.next = 4;
                return 2;

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee5, _this2);
      }))();
    }
  }]);

  return SomeClass;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "generatorMethod", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    return (/*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return 1;

              case 2:
                _context7.next = 4;
                return 2;

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee6, this);
      })
    );
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "generatorMethod2", [_dec], {
  enumerable: true,
  initializer: function initializer() {
    return (/*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        return regeneratorRuntime.wrap(function _callee7$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return 1;

              case 2:
                _context8.next = 4;
                return 2;

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee7, this);
      })
    );
  }
}), _applyDecoratedDescriptor(_class.prototype, "method", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "method"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "method1", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "method1"), _class.prototype), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "method2", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this3 = this;

    return (0, _mobx.flow)( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
      return regeneratorRuntime.wrap(function _callee8$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return 1;

            case 2:
              _context9.next = 4;
              return 2;

            case 4:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee8, _this3);
    }));
  }
})), _class));
