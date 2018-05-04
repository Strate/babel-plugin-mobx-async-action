import {action} from "mobx";

function a1() {
}

action(async function doSome() {
  const response = fetch("/api/list")
  this.items = await response.json();
});

action(async function doSome() {
  await 123
});

action.bound(async function doSome() {
  await 123
});

action("named", async function doSome() {
  await 123
});

action.bound("named", async function doSome() {
  await 123
});

action("named", async function doSome() {
  await 123
});

class SomeAsyncClass {
  @action("named")
  m3 = async function () {
    await 123
    await 321
  };
  m4 = action(async function () {
    await 123
    await 321
  });
  @action
  m5 = async () => {
  };
  m6 = action(async () => {
    await 123
    await 321
  });
  @action
  m7 = blabla;

  @action
  async m1() {
    await 123
    await 321
  }

  @action.bound
  async m1() {
    await 123
    await 321
  }

  @action("name")
  async m2() {
    await 123
    await 321
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
  m5 = () => {
  };
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
