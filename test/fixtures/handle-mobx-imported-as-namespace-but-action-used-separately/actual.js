import * as mobx from "mobx";
import {action} from "mobx";

action(async function () {
  await 123
});

mobx.action(async function () {
  await 123
});
