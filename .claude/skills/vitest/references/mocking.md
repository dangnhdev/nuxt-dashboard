# Vitest - Mocking

**Pages:** 9

---

## Mocking Globals

**URL:** llms-txt#mocking-globals

You can mock global variables that are not present with `jsdom` or `node` by using [`vi.stubGlobal`](/api/vi#vi-stubglobal) helper. It will put the value of the global variable into a `globalThis` object.

By default, Vitest does not reset these globals, but you can turn on the [`unstubGlobals`](/config/#unstubglobals) option in your config to restore the original values after each test or call [`vi.unstubAllGlobals()`](/api/vi#vi-unstuballglobals) manually.

---
url: /guide/mocking/modules.md
---

**Examples:**

Example 1 (ts):
```ts
import { vi } from 'vitest'

const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}))

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)

// now you can access it as `IntersectionObserver` or `window.IntersectionObserver`
```

---

## Vi

**URL:** llms-txt#vi

**Contents:**
- Mock Modules
  - vi.mock
  - vi.doMock
  - vi.mocked
  - vi.importActual
  - vi.importMock
  - vi.unmock
  - vi.doUnmock
  - vi.resetModules
  - vi.dynamicImportSettled

Vitest provides utility functions to help you out through its `vi` helper. You can access it globally (when [globals configuration](/config/#globals) is enabled), or import it from `vitest` directly:

This section describes the API that you can use when [mocking a module](/guide/mocking/modules). Beware that Vitest doesn't support mocking modules imported using `require()`.

Substitutes all imported modules from provided `path` with another module. You can use configured Vite aliases inside a path. The call to `vi.mock` is hoisted, so it doesn't matter where you call it. It will always be executed before all imports. If you need to reference some variables outside of its scope, you can define them inside [`vi.hoisted`](#vi-hoisted) and reference them inside `vi.mock`.

::: warning
`vi.mock` works only for modules that were imported with the `import` keyword. It doesn't work with `require`.

In order to hoist `vi.mock`, Vitest statically analyzes your files. It indicates that `vi` that was not directly imported from the `vitest` package (for example, from some utility file) cannot be used. Use `vi.mock` with `vi` imported from `vitest`, or enable [`globals`](/config/#globals) config option.

Vitest will not mock modules that were imported inside a [setup file](/config/#setupfiles) because they are cached by the time a test file is running. You can call [`vi.resetModules()`](#vi-resetmodules) inside [`vi.hoisted`](#vi-hoisted) to clear all module caches before running a test file.
:::

If the `factory` function is defined, all imports will return its result. Vitest calls factory only once and caches results for all subsequent imports until [`vi.unmock`](#vi-unmock) or [`vi.doUnmock`](#vi-dounmock) is called.

Unlike in `jest`, the factory can be asynchronous. You can use [`vi.importActual`](#vi-importactual) or a helper with the factory passed in as the first argument, and get the original module inside.

You can also provide an object with a `spy` property instead of a factory function. If `spy` is `true`, then Vitest will automock the module as usual, but it won't override the implementation of exports. This is useful if you just want to assert that the exported method was called correctly by another method.

Vitest also supports a module promise instead of a string in the `vi.mock` and `vi.doMock` methods for better IDE support. When the file is moved, the path will be updated, and `importOriginal` inherits the type automatically. Using this signature will also enforce factory return type to be compatible with the original module (keeping exports optional).

Under the hood, Vitest still operates on a string and not a module object.

If you are using TypeScript with `paths` aliases configured in `tsconfig.json` however, the compiler won't be able to correctly resolve import types.
In order to make it work, make sure to replace all aliased imports, with their corresponding relative paths.
Eg. use `import('./path/to/module.js')` instead of `import('@/module')`.

::: warning
`vi.mock` is hoisted (in other words, *moved*) to **top of the file**. It means that whenever you write it (be it inside `beforeEach` or `test`), it will actually be called before that.

This also means that you cannot use any variables inside the factory that are defined outside the factory.

If you need to use variables inside the factory, try [`vi.doMock`](#vi-domock). It works the same way but isn't hoisted. Beware that it only mocks subsequent imports.

You can also reference variables defined by `vi.hoisted` method if it was declared before `vi.mock`:

::: warning
If you are mocking a module with default export, you will need to provide a `default` key within the returned factory function object. This is an ES module-specific caveat; therefore, `jest` documentation may differ as `jest` uses CommonJS modules. For example,

If there is a `__mocks__` folder alongside a file that you are mocking, and the factory is not provided, Vitest will try to find a file with the same name in the `__mocks__` subfolder and use it as an actual module. If you are mocking a dependency, Vitest will try to find a `__mocks__` folder in the [root](/config/#root) of the project (default is `process.cwd()`). You can tell Vitest where the dependencies are located through the [`deps.moduleDirectories`](/config/#deps-moduledirectories) config option.

For example, you have this file structure:

If you call `vi.mock` in a test file without a factory or options provided, it will find a file in the `__mocks__` folder to use as a module:

::: warning
Beware that if you don't call `vi.mock`, modules **are not** mocked automatically. To replicate Jest's automocking behaviour, you can call `vi.mock` for each required module inside [`setupFiles`](/config/#setupfiles).
:::

If there is no `__mocks__` folder or a factory provided, Vitest will import the original module and auto-mock all its exports. For the rules applied, see [algorithm](/guide/mocking/modules#automocking-algorithm).

The same as [`vi.mock`](#vi-mock), but it's not hoisted to the top of the file, so you can reference variables in the global file scope. The next [dynamic import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) of the module will be mocked.

::: warning
This will not mock modules that were imported before this was called. Don't forget that all static imports in ESM are always [hoisted](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#hoisting), so putting this before static import will not force it to be called before the import:

Type helper for TypeScript. Just returns the object that was passed.

When `partial` is `true` it will expect a `Partial<T>` as a return value. By default, this will only make TypeScript believe that the first level values are mocked. You can pass down `{ deep: true }` as a second argument to tell TypeScript that the whole object is mocked, if it actually is.

Imports module, bypassing all checks if it should be mocked. Can be useful if you want to mock module partially.

Imports a module with all of its properties (including nested properties) mocked. Follows the same rules that [`vi.mock`](#vi-mock) does. For the rules applied, see [algorithm](/guide/mocking/modules#automocking-algorithm).

Removes module from the mocked registry. All calls to import will return the original module even if it was mocked before. This call is hoisted to the top of the file, so it will only unmock modules that were defined in `setupFiles`, for example.

The same as [`vi.unmock`](#vi-unmock), but is not hoisted to the top of the file. The next import of the module will import the original module instead of the mock. This will not unmock previously imported modules.

Resets modules registry by clearing the cache of all modules. This allows modules to be reevaluated when reimported. Top-level imports cannot be re-evaluated. Might be useful to isolate modules where local state conflicts between tests.

::: warning
Does not reset mocks registry. To clear mocks registry, use [`vi.unmock`](#vi-unmock) or [`vi.doUnmock`](#vi-dounmock).
:::

### vi.dynamicImportSettled

Wait for all imports to load. Useful, if you have a synchronous call that starts importing a module that you cannot wait otherwise.

::: tip
If during a dynamic import another dynamic import is initiated, this method will wait until all of them are resolved.

This method will also wait for the next `setTimeout` tick after the import is resolved so all synchronous operations should be completed by the time it's resolved.
:::

## Mocking Functions and Objects

This section describes how to work with [method mocks](/api/mock) and replace environmental and global variables.

Creates a spy on a function, but can also be initiated without one. Every time a function is invoked, it stores its call arguments, returns, and instances. Additionally, you can manipulate its behavior with [methods](/api/mock).
If no function is given, mock will return `undefined` when invoked.

You can also pass down a class to `vi.fn`:

### vi.mockObject 3.2.0

Deeply mocks properties and methods of a given object in the same way as `vi.mock()` mocks module exports. See [automocking](/guide/mocking.html#automocking-algorithm) for the detail.

Just like `vi.mock()`, you can pass `{ spy: true }` as a second argument to keep function implementations:

### vi.isMockFunction

Checks that a given parameter is a mock function. If you are using TypeScript, it will also narrow down its type.

Calls [`.mockClear()`](/api/mock#mockclear) on all spies.
This will clear mock history without affecting mock implementations.

Calls [`.mockReset()`](/api/mock#mockreset) on all spies.
This will clear mock history and reset each mock's implementation.

### vi.restoreAllMocks

This restores all original implementations on spies created with [`vi.spyOn`](#vi-spyon).

After the mock was restored, you can spy on it again.

::: warning
This method also does not affect mocks created during [automocking](/guide/mocking/modules#mocking-a-module).

Note that unlike [`mock.mockRestore`](/api/mock#mockrestore), `vi.restoreAllMocks` will not clear mock history or reset the mock implementation
:::

Creates a spy on a method or getter/setter of an object similar to [`vi.fn()`](#vi-fn). It returns a [mock function](/api/mock).

If the spying method is a class definition, the mock implementations have to use the `function` or the `class` keyword:

If you provide an arrow function, you will get [`<anonymous> is not a constructor` error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_constructor) when the mock is called.

::: tip
In environments that support [Explicit Resource Management](https://github.com/tc39/proposal-explicit-resource-management), you can use `using` instead of `const` to automatically call `mockRestore` on any mocked function when the containing block is exited. This is especially useful for spied methods:

::: tip
You can call [`vi.restoreAllMocks`](#vi-restoreallmocks) inside [`afterEach`](/api/#aftereach) (or enable [`test.restoreMocks`](/config/#restoreMocks)) to restore all methods to their original implementations after every test. This will restore the original [object descriptor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), so you won't be able to change method's implementation anymore, unless you spy again:

::: tip
It is not possible to spy on exported methods in [Browser Mode](/guide/browser/). Instead, you can spy on every exported method by calling `vi.mock("./file-path.js", { spy: true })`. This will mock every export but keep its implementation intact, allowing you to assert if the method was called correctly.

And while it is possible to spy on exports in `jsdom` or other Node.js environments, this might change in the future.
:::

### vi.stubEnv {#vi-stubenv}

Changes the value of environmental variable on `process.env` and `import.meta.env`. You can restore its value by calling `vi.unstubAllEnvs`.

:::tip
You can also change the value by simply assigning it, but you won't be able to use `vi.unstubAllEnvs` to restore previous value:

### vi.unstubAllEnvs {#vi-unstuballenvs}

Restores all `import.meta.env` and `process.env` values that were changed with `vi.stubEnv`. When it's called for the first time, Vitest remembers the original value and will store it, until `unstubAllEnvs` is called again.

Changes the value of global variable. You can restore its original value by calling `vi.unstubAllGlobals`.

:::tip
You can also change the value by simply assigning it to `globalThis` or `window` (if you are using `jsdom` or `happy-dom` environment), but you won't be able to use `vi.unstubAllGlobals` to restore original value:

### vi.unstubAllGlobals {#vi-unstuballglobals}

Restores all global values on `globalThis`/`global` (and `window`/`top`/`self`/`parent`, if you are using `jsdom` or `happy-dom` environment) that were changed with `vi.stubGlobal`. When it's called for the first time, Vitest remembers the original value and will store it, until `unstubAllGlobals` is called again.

This sections describes how to work with [fake timers](/guide/mocking/timers).

### vi.advanceTimersByTime

This method will invoke every initiated timer until the specified number of milliseconds is passed or the queue is empty - whatever comes first.

### vi.advanceTimersByTimeAsync

This method will invoke every initiated timer until the specified number of milliseconds is passed or the queue is empty - whatever comes first. This will include asynchronously set timers.

### vi.advanceTimersToNextTimer

Will call next available timer. Useful to make assertions between each timer call. You can chain call it to manage timers by yourself.

### vi.advanceTimersToNextTimerAsync

Will call next available timer and wait until it's resolved if it was set asynchronously. Useful to make assertions between each timer call.

### vi.advanceTimersToNextFrame {#vi-advancetimerstonextframe}

Similar to [`vi.advanceTimersByTime`](https://vitest.dev/api/vi#vi-advancetimersbytime), but will advance timers by the milliseconds needed to execute callbacks currently scheduled with `requestAnimationFrame`.

Get the number of waiting timers.

### vi.clearAllTimers

Removes all timers that are scheduled to run. These timers will never run in the future.

### vi.getMockedSystemTime

Returns mocked current date. If date is not mocked the method will return `null`.

### vi.getRealSystemTime

When using `vi.useFakeTimers`, `Date.now` calls are mocked. If you need to get real time in milliseconds, you can call this function.

Calls every microtask that was queued by `process.nextTick`. This will also run all microtasks scheduled by themselves.

This method will invoke every initiated timer until the timer queue is empty. It means that every timer called during `runAllTimers` will be fired. If you have an infinite interval, it will throw after 10 000 tries (can be configured with [`fakeTimers.loopLimit`](/config/#faketimers-looplimit)).

### vi.runAllTimersAsync

This method will asynchronously invoke every initiated timer until the timer queue is empty. It means that every timer called during `runAllTimersAsync` will be fired even asynchronous timers. If you have an infinite interval,
it will throw after 10 000 tries (can be configured with [`fakeTimers.loopLimit`](/config/#faketimers-looplimit)).

### vi.runOnlyPendingTimers

This method will call every timer that was initiated after [`vi.useFakeTimers`](#vi-usefaketimers) call. It will not fire any timer that was initiated during its call.

### vi.runOnlyPendingTimersAsync

This method will asynchronously call every timer that was initiated after [`vi.useFakeTimers`](#vi-usefaketimers) call, even asynchronous ones. It will not fire any timer that was initiated during its call.

If fake timers are enabled, this method simulates a user changing the system clock (will affect date related API like `hrtime`, `performance.now` or `new Date()`) - however, it will not fire any timers. If fake timers are not enabled, this method will only mock `Date.*` calls.

Useful if you need to test anything that depends on the current date - for example [Luxon](https://github.com/moment/luxon/) calls inside your code.

Accepts the same string and number arguments as the `Date`.

To enable mocking timers, you need to call this method. It will wrap all further calls to timers (such as `setTimeout`, `setInterval`, `clearTimeout`, `clearInterval`, `setImmediate`, `clearImmediate`, and `Date`) until [`vi.useRealTimers()`](#vi-userealtimers) is called.

Mocking `nextTick` is not supported when running Vitest inside `node:child_process` by using `--pool=forks`. NodeJS uses `process.nextTick` internally in `node:child_process` and hangs when it is mocked. Mocking `nextTick` is supported when running Vitest with `--pool=threads`.

The implementation is based internally on [`@sinonjs/fake-timers`](https://github.com/sinonjs/fake-timers).

::: tip
`vi.useFakeTimers()` does not automatically mock `process.nextTick` and `queueMicrotask`.
But you can enable it by specifying the option in `toFake` argument: `vi.useFakeTimers({ toFake: ['nextTick', 'queueMicrotask'] })`.
:::

### vi.isFakeTimers {#vi-isfaketimers}

Returns `true` if fake timers are enabled.

When timers have run out, you may call this method to return mocked timers to its original implementations. All timers that were scheduled before will be discarded.

A set of useful helper functions that Vitest provides.

### vi.waitFor {#vi-waitfor}

Wait for the callback to execute successfully. If the callback throws an error or returns a rejected promise it will continue to wait until it succeeds or times out.

If options is set to a number, the effect is equivalent to setting `{ timeout: options }`.

This is very useful when you need to wait for some asynchronous action to complete, for example, when you start a server and need to wait for it to start.

It also works for asynchronous callbacks

If `vi.useFakeTimers` is used, `vi.waitFor` automatically calls `vi.advanceTimersByTime(interval)` in every check callback.

### vi.waitUntil {#vi-waituntil}

This is similar to `vi.waitFor`, but if the callback throws any errors, execution is immediately interrupted and an error message is received. If the callback returns falsy value, the next check will continue until truthy value is returned. This is useful when you need to wait for something to exist before taking the next step.

Look at the example below. We can use `vi.waitUntil` to wait for the element to appear on the page, and then we can do something with the element.

### vi.hoisted {#vi-hoisted}

All static `import` statements in ES modules are hoisted to the top of the file, so any code that is defined before the imports will actually be executed after imports are evaluated.

However, it can be useful to invoke some side effects like mocking dates before importing a module.

To bypass this limitation, you can rewrite static imports into dynamic ones like this:

When running `vitest`, you can do this automatically by using `vi.hoisted` method. Under the hood, Vitest will convert static imports into dynamic ones with preserved live-bindings.

::: warning IMPORTS ARE NOT AVAILABLE
Running code before the imports means that you cannot access imported variables because they are not defined yet:

This code will produce an error:

If you need to access a variable from another module inside of `vi.hoisted`, use dynamic import:

However, it is discourage to import anything inside of `vi.hoisted` because imports are already hoisted - if you need to execute something before the tests are running, just execute it in the imported module itself.
:::

This method returns the value that was returned from the factory. You can use that value in your `vi.mock` factories if you need easy access to locally defined variables:

Note that this method can also be called asynchronously even if your environment doesn't support top-level await:

Updates config for the current test file. This method supports only config options that will affect the current test file:

If [`vi.setConfig`](#vi-setconfig) was called before, this will reset config to the original state.

---
url: /guide/browser/visual-regression-testing.md
---

**Examples:**

Example 1 (js):
```js
import { vi } from 'vitest'
```

Example 2 (ts):
```ts
interface MockOptions {
  spy?: boolean
}

interface MockFactory<T> {
  (importOriginal: () => T): unknown
}

function mock(
  path: string,
  factory?: MockOptions | MockFactory<unknown>
): void
function mock<T>(
  module: Promise<T>,
  factory?: MockOptions | MockFactory<T>
): void
```

Example 3 (ts):
```ts
import { calculator } from './src/calculator.ts'

vi.mock('./src/calculator.ts', { spy: true })

// calls the original implementation,
// but allows asserting the behaviour later
const result = calculator(1, 2)

expect(result).toBe(3)
expect(calculator).toHaveBeenCalledWith(1, 2)
expect(calculator).toHaveReturned(3)
```

Example 4 (unknown):
```unknown
Under the hood, Vitest still operates on a string and not a module object.

If you are using TypeScript with `paths` aliases configured in `tsconfig.json` however, the compiler won't be able to correctly resolve import types.
In order to make it work, make sure to replace all aliased imports, with their corresponding relative paths.
Eg. use `import('./path/to/module.js')` instead of `import('@/module')`.

::: warning
`vi.mock` is hoisted (in other words, *moved*) to **top of the file**. It means that whenever you write it (be it inside `beforeEach` or `test`), it will actually be called before that.

This also means that you cannot use any variables inside the factory that are defined outside the factory.

If you need to use variables inside the factory, try [`vi.doMock`](#vi-domock). It works the same way but isn't hoisted. Beware that it only mocks subsequent imports.

You can also reference variables defined by `vi.hoisted` method if it was declared before `vi.mock`:
```

---

## Mocking Modules

**URL:** llms-txt#mocking-modules

**Contents:**
- Defining a Module
- Mocking a Module
- Mocking Non-existing Module
- How it Works
  - JSDOM, happy-dom, Node
  - Browser Mode
- Mocking Modules Pitfalls

Before mocking a "module", we should define what it is. In Vitest context, the "module" is a file that exports something. Using [plugins](https://vite.dev/guide/api-plugin.html), any file can be turned into a JavaScript module. The "module object" is a namespace object that holds dynamic references to exported identifiers. Simply put, it's an object with exported methods and properties. In this example, `example.js` is a module that exports `method` and `variable`:

The `exampleObject` here is a module object:

The `exampleObject` will always exist even if you imported the example using named imports:

You can only reference `exampleObject` outside the example module itself. For example, in a test.

For the purpose of this guide, let's introduce some definitions.

* **Mocked module** is a module that was completely replaced with another one.
* **Spied module** is a mocked module, but its exported methods keep the original implementation. They can also be tracked.
* **Mocked export** is a module export, which invocations can be tracked.
* **Spied export** is a mocked export.

To mock a module completely, you can use the [`vi.mock` API](/api/vi#vi-mock). You can define a new module dynamically by providing a factory that returns a new module as a second argument:

::: tip
Remember that you can call `vi.mock` in a [setup file](/config/#setupfiles) to apply the module mock in every test file automatically.
:::

::: tip
Note the usage of dynamic import: `import('./example.ts')`. Vitest will strip it before the code is executed, but it allows TypeScript to properly validate the string and type the `importOriginal` method in your IDE or CLI.
:::

If your code is trying to access a method that was not returned from this factory, Vitest will throw an error with a helpful message. Note that `answer` is not mocked, i.e. it cannot be tracked. To make it trackable, use `vi.fn()` instead:

The factory method accepts an `importOriginal` function that will execute the original module and return its module object:

::: warning
Note that `importOriginal` is asynchronous and needs to be awaited.
:::

In the above example, we provided the original `answer` to the `vi.fn()` call so it can keep calling it while being tracked at the same time.

If you require the use of `importOriginal`, consider spying on the export directly via another API: `vi.spyOn`. Instead of replacing the whole module, you can spy only on a single exported method. To do that, you need to import the module as a namespace object:

::: danger Browser Mode Support
This will not work in the [Browser Mode](/guide/browser/) because it uses the browser's native ESM support to serve modules. The module namespace object is sealed and can't be reconfigured. To bypass this limitation, Vitest supports `{ spy: true }` option in `vi.mock('./example.js')`. This will automatically spy on every export in the module without replacing them with fake ones.

::: warning
You only need to import the module as a namespace object in the file where you are using the `vi.spyOn` utility. If the `answer` is called in another file and is imported there as a named export, Vitest will be able to properly track it as long as the function that called it is called after `vi.spyOn`:

Note that `vi.spyOn` will only spy on calls that were done after it spied on the method. So, if the function is executed at the top level during an import or it was called before the spying, `vi.spyOn` will not be able to report on it.

To automatically mock any module before it is imported, you can call `vi.mock` with a path:

If the file `./__mocks__/example.js` exists, then Vitest will load it instead. Otherwise, Vitest will load the original module and replace everything recursively:

{#automocking-algorithm}

* All arrays will be empty
* All primitives will stay untouched
* All getters will return `undefined`
* All methods will return `undefined`
* All objects will be deeply cloned
* All instances of classes and their prototypes will be cloned

To disable this behavior, you can pass down `spy: true` as the second argument:

Instead of returning `undefined`, all methods will call the original implementation, but you can still keep track of these calls:

One nice thing that mocked modules support is sharing the state between the instance and its prototype. Consider this module:

By mocking it, we can keep track of every invocation of `.value()` even without having access to the instance itself:

This can be very useful to track calls to instances that are never exposed.

## Mocking Non-existing Module

Vitest supports mocking virtual modules. These modules don't exist on the file system, but your code imports them. For example, this can happen when your development environment is different from production. One common example is mocking `vscode` APIs in your unit tests.

By default, Vitest will fail transforming files if it cannot find the source of the import. To bypass this, you need to specify it in your config. You can either always redirect the import to a file, or just signal Vite to ignore it and use the `vi.mock` factory to define its exports.

To redirect the import, use [`test.alias`](/config/#alias) config option:

To mark the module as always resolved, return the same string from `resolveId` hook of a plugin:

Now you can use `vi.mock` as usual in your tests:

Vitest implements different module mocking mechanisms depending on the environment. The only feature they share is the plugin transformer. When Vitest sees that a file has `vi.mock` inside, it will transform every static import into a dynamic one and move the `vi.mock` call to the top of the file. This allows Vitest to register the mock before the import happens without breaking the ESM rule of hoisted imports.

The `__handle_mock__` wrapper just makes sure the mock is resolved before the import is initiated, it doesn't modify the module in any way.

The module mocking plugins are available in the [`@vitest/mocker` package](https://github.com/vitest-dev/vitest/tree/main/packages/mocker).

### JSDOM, happy-dom, Node

When you run your tests in an emulated environment, Vitest creates a [module runner](https://vite.dev/guide/api-environment-runtimes.html#modulerunner) that can consume Vite code. The module runner is designed in such a way that Vitest can hook into the module evaluation and replace it with the mock, if it was registered. This means that Vitest runs your code in an ESM-like environment, but it doesn't use native ESM mechanism directly. This allows the test runner to bend the rules around ES Modules immutability, allowing users to call `vi.spyOn` on a seemingly ES Module.

Vitest uses native ESM in the Browser Mode. This means that we cannot replace the module so easily. Instead, Vitest intercepts the fetch request (via playwright's `page.route` or a Vite plugin API if using `preview` or `webdriverio`) and serves transformed code, if the module was mocked.

For example, if the module is automocked, Vitest can parse static exports and create a placeholder module:

The example is simplified for brevity, but the concept is unchanged. We can inject a `__private_module__` variable into the module to hold the mocked values. If the user called `vi.mock` with `spy: true`, we pass down the original value; otherwise, we create a simple `vi.fn()` mock.

If user defined a custom factory, this makes it harder to inject the code, but not impossible. When the mocked file is served, we first resolve the factory in the browser, then pass down the keys back to the server, and use them to create a placeholder module:

This module can now be served back to the browser. You can inspect the code in the devtools when you run the tests.

## Mocking Modules Pitfalls

Beware that it is not possible to mock calls to methods that are called inside other methods of the same file. For example, in this code:

It is not possible to mock the `foo` method from the outside because it is referenced directly. So this code will have no effect on the `foo` call inside `foobar` (but it will affect the `foo` call in other modules):

You can confirm this behavior by providing the implementation to the `foobar` method directly:

This is the intended behavior, and we do not plan to implement a workaround. Consider refactoring your code into multiple files or use techniques such as [dependency injection](https://en.wikipedia.org/wiki/Dependency_injection). We believe that making the application testable is not the responsibility of the test runner, but of the application architecture.

---
url: /guide/mocking/requests.md
---

**Examples:**

Example 1 (unknown):
```unknown
The `exampleObject` here is a module object:
```

Example 2 (unknown):
```unknown
The `exampleObject` will always exist even if you imported the example using named imports:
```

Example 3 (unknown):
```unknown
You can only reference `exampleObject` outside the example module itself. For example, in a test.

## Mocking a Module

For the purpose of this guide, let's introduce some definitions.

* **Mocked module** is a module that was completely replaced with another one.
* **Spied module** is a mocked module, but its exported methods keep the original implementation. They can also be tracked.
* **Mocked export** is a module export, which invocations can be tracked.
* **Spied export** is a mocked export.

To mock a module completely, you can use the [`vi.mock` API](/api/vi#vi-mock). You can define a new module dynamically by providing a factory that returns a new module as a second argument:
```

Example 4 (unknown):
```unknown
::: tip
Remember that you can call `vi.mock` in a [setup file](/config/#setupfiles) to apply the module mock in every test file automatically.
:::

::: tip
Note the usage of dynamic import: `import('./example.ts')`. Vitest will strip it before the code is executed, but it allows TypeScript to properly validate the string and type the `importOriginal` method in your IDE or CLI.
:::

If your code is trying to access a method that was not returned from this factory, Vitest will throw an error with a helpful message. Note that `answer` is not mocked, i.e. it cannot be tracked. To make it trackable, use `vi.fn()` instead:
```

---

## Mocking Functions

**URL:** llms-txt#mocking-functions

**Contents:**
- Example

Mocking functions can be split up into two different categories: spying and mocking.

If you need to observe the behaviour of a method on an object, you can use [`vi.spyOn()`](/api/vi#vi-spyon) to create a spy that tracks calls to that method.

If you need to pass down a custom function implementation as an argument or create a new mocked entity, you can use [`vi.fn()`](/api/vi#vi-fn) to create a mock function.

Both `vi.spyOn` and `vi.fn` share the same methods.

---
url: /guide/mocking/globals.md
---

**Examples:**

Example 1 (js):
```js
import { afterEach, describe, expect, it, vi } from 'vitest'

const messages = {
  items: [
    { message: 'Simple test message', from: 'Testman' },
    // ...
  ],
  addItem(item) {
    messages.items.push(item)
    messages.callbacks.forEach(callback => callback(item))
  },
  onItem(callback) {
    messages.callbacks.push(callback)
  },
  getLatest, // can also be a `getter or setter if supported`
}

function getLatest(index = messages.items.length - 1) {
  return messages.items[index]
}

it('should get the latest message with a spy', () => {
  const spy = vi.spyOn(messages, 'getLatest')
  expect(spy.getMockName()).toEqual('getLatest')

  expect(messages.getLatest()).toEqual(
    messages.items[messages.items.length - 1],
  )

  expect(spy).toHaveBeenCalledTimes(1)

  spy.mockImplementationOnce(() => 'access-restricted')
  expect(messages.getLatest()).toEqual('access-restricted')

  expect(spy).toHaveBeenCalledTimes(2)
})

it('passing down the mock', () => {
  const callback = vi.fn()
  messages.onItem(callback)

  messages.addItem({ message: 'Another test message', from: 'Testman' })
  expect(callback).toHaveBeenCalledWith({
    message: 'Another test message',
    from: 'Testman',
  })
})
```

---

## Mocking Classes

**URL:** llms-txt#mocking-classes

You can mock an entire class with a single [`vi.fn`](/api/vi#fn) call.

We can re-create this class with `vi.fn` (or `vi.spyOn().mockImplementation()`):

::: warning
If a non-primitive is returned from the constructor function, that value will become the result of the new expression. In this case the `[[Prototype]]` may not be correctly bound:

If you are mocking classes, prefer the class syntax over the function.
:::

::: tip WHEN TO USE?
Generally speaking, you would re-create a class like this inside the module factory if the class is re-exported from another module:

This method can also be used to pass an instance of a class to a function that accepts the same interface:

Now, when we create a new instance of the `Dog` class its `speak` method (alongside `feed` and `greet`) is already mocked:

We can reassign the return value for a specific instance:

To mock the property, we can use the `vi.spyOn(dog, 'name', 'get')` method. This makes it possible to use spy assertions on the mocked property:

::: tip
You can also spy on getters and setters using the same method.
:::

::: danger
Using classes with `vi.fn()` was introduced in Vitest 4. Previously, you had to use `function` and `prototype` inheritence directly. See [v3 guide](https://v3.vitest.dev/guide/mocking.html#classes).
:::

---
url: /guide/mocking/dates.md
---

**Examples:**

Example 1 (ts):
```ts
class Dog {
  name: string

  constructor(name: string) {
    this.name = name
  }

  static getType(): string {
    return 'animal'
  }

  greet = (): string => {
    return `Hi! My name is ${this.name}!`
  }

  speak(): string {
    return 'bark!'
  }

  isHungry() {}
  feed() {}
}
```

Example 2 (ts):
```ts
const Dog = vi.fn(class {
  static getType = vi.fn(() => 'mocked animal')

  constructor(name) {
    this.name = name
  }

  greet = vi.fn(() => `Hi! My name is ${this.name}!`)
  speak = vi.fn(() => 'loud bark!')
  feed = vi.fn()
})
```

Example 3 (ts):
```ts
const CorrectDogClass = vi.fn(function (name) {
  this.name = name
})

const IncorrectDogClass = vi.fn(name => ({
  name
}))

const Marti = new CorrectDogClass('Marti')
const Newt = new IncorrectDogClass('Newt')

Marti instanceof CorrectDogClass // ✅ true
Newt instanceof IncorrectDogClass // ❌ false!
```

Example 4 (ts):
```ts
import { Dog } from './dog.js'

vi.mock(import('./dog.js'), () => {
  const Dog = vi.fn(class {
    feed = vi.fn()
    // ... other mocks
  })
  return { Dog }
})
```

---

## Mocking Requests

**URL:** llms-txt#mocking-requests

**Contents:**
- Configuration
- More

Because Vitest runs in Node, mocking network requests is tricky; web APIs are not available, so we need something that will mimic network behavior for us. We recommend [Mock Service Worker](https://mswjs.io/) to accomplish this. It allows you to mock `http`, `WebSocket` and `GraphQL` network requests, and is framework agnostic.

Mock Service Worker (MSW) works by intercepting the requests your tests make, allowing you to use it without changing any of your application code. In-browser, this uses the [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API). In Node.js, and for Vitest, it uses the [`@mswjs/interceptors`](https://github.com/mswjs/interceptors) library. To learn more about MSW, read their [introduction](https://mswjs.io/docs/)

You can use it like below in your [setup file](/config/#setupfiles)

> Configuring the server with `onUnhandledRequest: 'error'` ensures that an error is thrown whenever there is a request that does not have a corresponding request handler.

There is much more to MSW. You can access cookies and query parameters, define mock error responses, and much more! To see all you can do with MSW, read [their documentation](https://mswjs.io/docs).

---
url: /guide/mocking/file-system.md
---

**Examples:**

Example 1 (unknown):
```unknown

```

Example 2 (unknown):
```unknown

```

---

## Mocking the File System

**URL:** llms-txt#mocking-the-file-system

**Contents:**
- Example

Mocking the file system ensures that the tests do not depend on the actual file system, making the tests more reliable and predictable. This isolation helps in avoiding side effects from previous tests. It allows for testing error conditions and edge cases that might be difficult or impossible to replicate with an actual file system, such as permission issues, disk full scenarios, or read/write errors.

Vitest doesn't provide any file system mocking API out of the box. You can use `vi.mock` to mock the `fs` module manually, but it's hard to maintain. Instead, we recommend using [`memfs`](https://www.npmjs.com/package/memfs) to do that for you. `memfs` creates an in-memory file system, which simulates file system operations without touching the actual disk. This approach is fast and safe, avoiding any potential side effects on the real file system.

To automatically redirect every `fs` call to `memfs`, you can create `__mocks__/fs.cjs` and `__mocks__/fs/promises.cjs` files at the root of your project:

---
url: /api/mock.md
---

**Examples:**

Example 1 (unknown):
```unknown

```

Example 2 (unknown):
```unknown
:::
```

Example 3 (unknown):
```unknown

```

---

## Mocking

**URL:** llms-txt#mocking

**Contents:**
- Cheat Sheet
  - Mock exported variables
  - Mock an exported function
  - Mock an exported class implementation
  - Spy on an object returned from a function
  - Mock part of a module
  - Mock the current date
  - Mock a global variable
  - Mock `import.meta.env`

When writing tests it's only a matter of time before you need to create a "fake" version of an internal — or external — service. This is commonly referred to as **mocking**. Vitest provides utility functions to help you out through its `vi` helper. You can import it from `vitest` or access it globally if [`global` configuration](/config/#globals) is enabled.

::: warning
Always remember to clear or restore mocks before or after each test run to undo mock state changes between runs! See [`mockReset`](/api/mock#mockreset) docs for more info.
:::

If you are not familiar with `vi.fn`, `vi.mock` or `vi.spyOn` methods, check the [API section](/api/vi) first.

Vitest has a comprehensive list of guides regarding mocking:

* [Mocking Classes](/guide/mocking/classes.md)
* [Mocking Dates](/guide/mocking/dates.md)
* [Mocking the File System](/guide/mocking/file-system.md)
* [Mocking Functions](/guide/mocking/functions.md)
* [Mocking Globals](/guide/mocking/globals.md)
* [Mocking Modules](/guide/mocking/modules.md)
* [Mocking Requests](/guide/mocking/requests.md)
* [Mocking Timers](/guide/mocking/timers.md)

For a simpler and quicker way to get started with mocking, you can check the Cheat Sheet below.

### Mock exported variables

::: warning
This will not work in the Browser Mode. For a workaround, see [Limitations](/guide/browser/#spying-on-module-exports).
:::

### Mock an exported function

1. Example with `vi.mock`:

::: warning
Don't forget that a `vi.mock` call is hoisted to top of the file. It will always be executed before all imports.
:::

2. Example with `vi.spyOn`:

::: warning
`vi.spyOn` example will not work in the Browser Mode. For a workaround, see [Limitations](/guide/browser/#spying-on-module-exports).
:::

### Mock an exported class implementation

1. Example with a fake `class`:

2. Example with `vi.spyOn`:

::: warning
`vi.spyOn` example will not work in the Browser Mode. For a workaround, see [Limitations](/guide/browser/#spying-on-module-exports).
:::

### Spy on an object returned from a function

1. Example using cache:

### Mock part of a module

::: warning
Don't forget that this only [mocks *external* access](#mocking-pitfalls). In this example, if `original` calls `mocked` internally, it will always call the function defined in the module, not in the mock factory.
:::

### Mock the current date

To mock `Date`'s time, you can use `vi.setSystemTime` helper function. This value will **not** automatically reset between different tests.

Beware that using `vi.useFakeTimers` also changes the `Date`'s time.

### Mock a global variable

You can set global variable by assigning a value to `globalThis` or using [`vi.stubGlobal`](/api/vi#vi-stubglobal) helper. When using `vi.stubGlobal`, it will **not** automatically reset between different tests, unless you enable [`unstubGlobals`](/config/#unstubglobals) config option or call [`vi.unstubAllGlobals`](/api/vi#vi-unstuballglobals).

### Mock `import.meta.env`

1. To change environmental variable, you can just assign a new value to it.

::: warning
The environmental variable value will ***not*** automatically reset between different tests.
:::

2. If you want to automatically reset the value(s), you can use the `vi.stubEnv` helper with the [`unstubEnvs`](/config/#unstubenvs) config option enabled (or call [`vi.unstubAllEnvs`](/api/vi#vi-unstuballenvs) manually in a `beforeEach` hook):

---
url: /guide/mocking/classes.md
---

**Examples:**

Example 1 (unknown):
```unknown

```

Example 2 (unknown):
```unknown
::: warning
This will not work in the Browser Mode. For a workaround, see [Limitations](/guide/browser/#spying-on-module-exports).
:::

### Mock an exported function

1. Example with `vi.mock`:

::: warning
Don't forget that a `vi.mock` call is hoisted to top of the file. It will always be executed before all imports.
:::
```

Example 3 (unknown):
```unknown

```

Example 4 (unknown):
```unknown
2. Example with `vi.spyOn`:
```

---

## Mocking Dates

**URL:** llms-txt#mocking-dates

**Contents:**
- Example

Sometimes you need to be in control of the date to ensure consistency when testing. Vitest uses [`@sinonjs/fake-timers`](https://github.com/sinonjs/fake-timers) package for manipulating timers, as well as system date. You can find more about the specific API in detail [here](/api/vi#vi-setsystemtime).

---
url: /guide/mocking/functions.md
---

**Examples:**

Example 1 (js):
```js
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const businessHours = [9, 17]

function purchase() {
  const currentHour = new Date().getHours()
  const [open, close] = businessHours

  if (currentHour > open && currentHour < close) {
    return { message: 'Success' }
  }

  return { message: 'Error' }
}

describe('purchasing flow', () => {
  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers()
  })

  afterEach(() => {
    // restoring date after each test run
    vi.useRealTimers()
  })

  it('allows purchases within business hours', () => {
    // set hour within business hours
    const date = new Date(2000, 1, 1, 13)
    vi.setSystemTime(date)

    // access Date.now() will result in the date set above
    expect(purchase()).toEqual({ message: 'Success' })
  })

  it('disallows purchases outside of business hours', () => {
    // set hour outside business hours
    const date = new Date(2000, 1, 1, 19)
    vi.setSystemTime(date)

    // access Date.now() will result in the date set above
    expect(purchase()).toEqual({ message: 'Error' })
  })
})
```

---
