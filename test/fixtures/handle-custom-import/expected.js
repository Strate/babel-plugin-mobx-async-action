import { flow as _flow } from "mobx";
import { action as otherName } from "mobx";

otherName(_flow(function* () {
  yield 123;
  yield 321;
}));
