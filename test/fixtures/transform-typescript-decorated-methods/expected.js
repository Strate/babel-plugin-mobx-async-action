import { flow as _flow } from "mobx";
import * as tslib_1 from "tslib";
import { action } from "mobx";
import * as mobx from "mobx";

class Class1 {
  constructor() {
    this.method1 = _flow(function* () {
      yield 123;
      yield 321;
    });
    this.method2 = async () => {
      await 123;
      await 321;
    };
  }

  method() {
    return _flow(function* () {
      yield 123;
      yield 321;
    })();
  }

  method2() {
    class Class2 {
      method() {
        return _flow(function* () {
          yield 123;
          yield 321;
        })();
      }
    }

    tslib_1.__decorate([action], Class2.prototype, "method", null);
    return Class2;
  }
}

tslib_1.__decorate([mobx.action], Class1.prototype, "method", null);
tslib_1.__decorate([action], Class1.prototype, "method1", void 0);
export default class Class2 {
  method() {
    return _flow(function* () {
      yield 123;
      yield 321;
    })();
  }
}
tslib_1.__decorate([action], Class2.prototype, "method", null);
