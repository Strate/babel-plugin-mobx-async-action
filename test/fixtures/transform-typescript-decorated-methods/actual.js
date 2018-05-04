import * as tslib_1 from "tslib";
import {action} from "mobx";
import * as mobx from "mobx";

class Class1 {
  constructor() {
    this.method1 = async () => {
      await 123
      await 321
    };
    this.method2 = async () => {
      await 123
      await 321
    }
  }

  async method() {
    await 123
    await 321
  }

  method2() {
    class Class2 {
      async method() {
        await 123
        await 321
      }
    }

    tslib_1.__decorate([
      action
    ], Class2.prototype, "method", null);
    return Class2;
  }
}

tslib_1.__decorate([
  mobx.action
], Class1.prototype, "method", null);
tslib_1.__decorate([
  action
], Class1.prototype, "method1", void 0);
export default class Class2 {
  async method() {
    await 123
    await 321
  }
}
tslib_1.__decorate([
  action
], Class2.prototype, "method", null);
