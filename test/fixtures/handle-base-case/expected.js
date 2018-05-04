import { flow as _flow } from "mobx";
import { action } from "mobx";

function a1() {}

action((() => {
  var _ref = _flow(function* () {
    const response = fetch("/api/list");
    this.items = yield response.json();
  });

  function doSome() {
    return _ref.apply(this, arguments);
  }

  return doSome;
})());

action((() => {
  var _ref2 = _flow(function* () {
    yield 123;
  });

  function doSome() {
    return _ref2.apply(this, arguments);
  }

  return doSome;
})());

action.bound((() => {
  var _ref3 = _flow(function* () {
    yield 123;
  });

  function doSome() {
    return _ref3.apply(this, arguments);
  }

  return doSome;
})());

action("named", (() => {
  var _ref4 = _flow(function* () {
    yield 123;
  });

  function doSome() {
    return _ref4.apply(this, arguments);
  }

  return doSome;
})());

action.bound("named", (() => {
  var _ref5 = _flow(function* () {
    yield 123;
  });

  function doSome() {
    return _ref5.apply(this, arguments);
  }

  return doSome;
})());

action("named", (() => {
  var _ref6 = _flow(function* () {
    yield 123;
  });

  function doSome() {
    return _ref6.apply(this, arguments);
  }

  return doSome;
})());

class SomeAsyncClass {
  @action("named")
  m3 = _flow(function* () {
    yield 123;
    yield 321;
  });
  m4 = action(_flow(function* () {
    yield 123;
    yield 321;
  }));

  @action
  m5 = _flow(function* () {});
  m6 = action(_flow(function* () {
    yield 123;
    yield 321;
  }));

  @action
  m7 = blabla;

  @action
  m1() {
    return _flow(function* () {
      yield 123;
      yield 321;
    })();
  }

  @action.bound
  m1() {
    return _flow(function* () {
      yield 123;
      yield 321;
    })();
  }

  @action("name")
  m2() {
    return _flow(function* () {
      yield 123;
      yield 321;
    })();
  }
}

class SomeSyncClass {
  @action("named")
  m3 = function () {
    123;
    this;
  };
  m4 = action(function () {
    123;
    this;
  });

  @action
  m5 = () => {};
  m6 = action(() => {
    123;
    this;
  });

  @action
  m7 = blabla;

  @action
  m1() {
    123;
    this;
  }

  @action.bound
  m1() {
    123;
    this;
  }

  @action("name")
  m2() {
    123;
    this;
  }
}
