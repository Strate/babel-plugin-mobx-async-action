import {action} from "mobx"
import * as tslib_1 from "tslib";
import * as mobx from "mobx";

action("name", async function() {
    await 1
    let a = await 2
    let c = await fn(a)
    return c
})

action(async function() {
    await 1
    let a = await 2
    let c = await fn(a)
    return c
})

class Class1 {
    @action
    async method1() {
        await 1
        let a = await 2
        let c = await fn(a)
        return c
    }

    @action.bound
    async method2() {
        await 1
        let a = await 2
        let c = await fn(a)
        return c
    }

    @action("name")
    async method3() {
        await 1
        let a = await 2
        let c = await fn(a)
        return c
    }

    @action.bound("name")
    async method4() {
        await 1
        let a = await 2
        let c = await fn(a)
        return c
    }

    @action
    prop1 = async () => {
        await 1
        let a = await 2
        let c = await fn(a)
        return c
    }

    @action.bound
    prop2 = async () => {
        await 1
        let a = await 2
        let c = await fn(a)
        return c
    }

    @action("name")
    prop3 = async () => {
        await 1
        let a = await 2
        let c = await fn(a)
        return c
    }

    @action.bound("name")
    prop4 = async () => {
        await 1
        let a = await 2
        let c = await fn(a)
        return c
    }
}
