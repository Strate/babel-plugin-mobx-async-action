import * as mobxNamespace from "mobx";

function a1() {
}

mobxNamespace.action(async function doSome() {
  await 123
});

mobxNamespace.action.bound(async function doSome() {
  await 123
});

mobxNamespace.action("named", async function doSome() {
  await 123
});

mobxNamespace.action.bound("named", async function doSome() {
  await 123
});

mobxNamespace.action("named", async function doSome() {
  await 123
});

class SomeAsyncClass {
  @mobxNamespace.action("named")
  m3 = async function () {
    await 123
    await 321
  };
  m4 = mobxNamespace.action(async function () {
    await 123
    await 321
  });
  @mobxNamespace.action
  m5 = async () => {
  };
  m6 = mobxNamespace.action(async () => {
    await 123
    await 321
  });
  @mobxNamespace.action
  m7 = blabla;

  @mobxNamespace.action
  async m1() {
    await 123
    await 321
  }

  @mobxNamespace.action.bound
  async m1() {
    await 123
    await 321
  }

  @mobxNamespace.action("name")
  async m2() {
    await 123
    await 321
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
  m5 = () => {
  };
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
