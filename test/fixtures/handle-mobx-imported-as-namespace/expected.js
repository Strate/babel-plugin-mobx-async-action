import { flow as _flow } from "mobx";
import * as mobxNamespace from "mobx";

function a1() {}

mobxNamespace.action((() => {
  var _ref = _flow(function* () {
    yield 123;
  });

  function doSome() {
    return _ref.apply(this, arguments);
  }

  return doSome;
})());

mobxNamespace.action.bound(async function doSome() {
  await 123;
});

mobxNamespace.action("named", (() => {
  var _ref2 = _flow(function* () {
    yield 123;
  });

  function doSome() {
    return _ref2.apply(this, arguments);
  }

  return doSome;
})());

mobxNamespace.action.bound("named", async function doSome() {
  await 123;
});

mobxNamespace.action("named", (() => {
  var _ref3 = _flow(function* () {
    yield 123;
  });

  function doSome() {
    return _ref3.apply(this, arguments);
  }

  return doSome;
})());

class SomeAsyncClass {
  @mobxNamespace.action("named")
  m3 = _flow(function* () {
    yield 123;
    yield 321;
  });
  m4 = mobxNamespace.action(_flow(function* () {
    yield 123;
    yield 321;
  }));

  @mobxNamespace.action
  m5 = _flow(function* () {});
  m6 = mobxNamespace.action(_flow(function* () {
    yield 123;
    yield 321;
  }));

  @mobxNamespace.action
  m7 = blabla;

  @mobxNamespace.action
  m1() {
    return _flow(function* () {
      yield 123;
      yield 321;
    })();
  }

  @mobxNamespace.action.bound
  async m1() {
    await 123;
    await 321;
  }

  @mobxNamespace.action("name")
  m2() {
    return _flow(function* () {
      yield 123;
      yield 321;
    })();
  }
}

class SomeSyncClass {
  @mobxNamespace.action("named")
  m3 = function () {
    123;
    this;
  };
  m4 = mobxNamespace.action(function () {
    123;
    this;
  });

  @mobxNamespace.action
  m5 = () => {};
  m6 = mobxNamespace.action(() => {
    123;
    this;
  });

  @mobxNamespace.action
  m7 = blabla;

  @mobxNamespace.action
  m1() {
    123;
    this;
  }

  @mobxNamespace.action.bound
  m1() {
    123;
    this;
  }

  @mobxNamespace.action("name")
  m2() {
    123;
    this;
  }
}
