import { flow as _flow } from "mobx";
import { action } from "mobx";

function a1() {}

action(function* doSome() {
  yield 1;
  yield 2;
});

action((() => {
  var _ref = _flow(function* () {
    yield 1;
    yield 2;
  });

  function doSomeSpecial() {
    return _ref.apply(this, arguments);
  }

  return doSomeSpecial;
})());

action(_flow(function* () {
  yield 1;
  yield 2;
}));

action(_flow(function* () {
  const a = [yield 1, yield 2];
}));

class SomeClass {
  @action
  generatorMethod = function* () {
    yield 1;
    yield 2;
  };

  @action("named")
  generatorMethod2 = function* () {
    yield 1;
    yield 2;
  };

  @action
  method() {
    return _flow(function* () {
      yield 1;
      yield 2;
    })();
  }

  @action("named")
  method1() {
    return _flow(function* () {
      yield 1;
      yield 2;
    })();
  }
}
