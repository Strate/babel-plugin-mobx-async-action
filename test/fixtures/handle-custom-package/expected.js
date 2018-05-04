import { flow as _flow } from "mobx-custom";
import { action as otherName } from "mobx-custom";

otherName(_flow(function* () {
  yield 123;
  yield 321;
}));
