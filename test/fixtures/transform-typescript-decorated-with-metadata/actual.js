import * as tslib_1 from "tslib";
import {action} from "mobx";

export default class Class2 {
  async method() {
    await 123
    await 321
  }
}
tslib_1.__decorate([
  action,
  tslib_1.__metadata("design:type", Function),
  tslib_1.__metadata("design:paramtypes", []),
  tslib_1.__metadata("design:returntype", Promise)
], Class2.prototype, "method", null);
