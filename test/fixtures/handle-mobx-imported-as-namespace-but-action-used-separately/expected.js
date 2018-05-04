import { flow as _flow } from "mobx";
import * as mobx from "mobx";
import { action } from "mobx";

action(_flow(function* () {
  yield 123;
}));

mobx.action(_flow(function* () {
  yield 123;
}));
