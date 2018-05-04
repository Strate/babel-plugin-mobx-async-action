import { flow as _flow } from "mobx";
import * as tslib_1 from "tslib";
import { action } from "mobx";

export default class Class2 {
  method() {
    return _flow(function* () {
      yield 123;
      yield 321;
    })();
  }
}
tslib_1.__decorate([action, tslib_1.__metadata("design:type", Function), tslib_1.__metadata("design:paramtypes", []), tslib_1.__metadata("design:returntype", Promise)], Class2.prototype, "method", null);
