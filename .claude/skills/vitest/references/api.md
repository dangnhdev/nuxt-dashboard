# Vitest - Api

**Pages:** 17

---

## Custom Pool

**URL:** llms-txt#custom-pool

**Contents:**
- Usage
- API

::: warning
This is an advanced, experimental and very low-level API. If you just want to [run tests](/guide/), you probably don't need this. It is primarily used by library authors.
:::

Vitest runs tests in a pool. By default, there are several pool runners:

* `threads` to run tests using `node:worker_threads` (isolation is provided with a new worker context)
* `forks` to run tests using `node:child_process` (isolation is provided with a new `child_process.fork` process)
* `vmThreads` to run tests using `node:worker_threads` (but isolation is provided with `vm` module instead of a new worker context)
* `browser` to run tests using browser providers
* `typescript` to run typechecking on tests

::: tip
See [`vitest-pool-example`](https://www.npmjs.com/package/vitest-pool-example) for example of a custom pool runner implementation.
:::

You can provide your own pool runner by a function that returns `PoolRunnerInitializer`.

If you need to run tests in different pools, use the [`projects`](/guide/projects) feature:

The `pool` option accepts a `PoolRunnerInitializer` that can be used for custom pool runners. The `name` property should indicate name of the custom pool runner. It should be identical with your worker's `name` property.

In your `CustomPoolWorker` you need to define all required methods:

Your `CustomPoolRunner` will be controlling how your custom test runner worker life cycles and communication channel works. For example, your `CustomPoolRunner` could launch a `node:worker_threads` `Worker`, and provide communication via `Worker.postMessage` and `parentPort`.

In your worker file, you can import helper utilities from `vitest/worker`:

---
url: /guide/debugging.md
---

**Examples:**

Example 1 (unknown):
```unknown
If you need to run tests in different pools, use the [`projects`](/guide/projects) feature:
```

Example 2 (unknown):
```unknown
## API

The `pool` option accepts a `PoolRunnerInitializer` that can be used for custom pool runners. The `name` property should indicate name of the custom pool runner. It should be identical with your worker's `name` property.
```

Example 3 (unknown):
```unknown
In your `CustomPoolWorker` you need to define all required methods:
```

Example 4 (unknown):
```unknown
Your `CustomPoolRunner` will be controlling how your custom test runner worker life cycles and communication channel works. For example, your `CustomPoolRunner` could launch a `node:worker_threads` `Worker`, and provide communication via `Worker.postMessage` and `parentPort`.

In your worker file, you can import helper utilities from `vitest/worker`:
```

---

## Using Plugins

**URL:** llms-txt#using-plugins

Vitest can be extended using plugins, similar to how Vite plugins work. This allows you to enhance and customize Vitest's functionality by using the same API and concepts of Vite plugins.

For detailed guidance on how to write plugins, you can refer to the [Vite plugin documentation](https://vitejs.dev/guide/api-plugin).

---
url: /api/vi.md
---

---

## Task Metadata

**URL:** llms-txt#task-metadata

If you are developing a custom reporter or using Vitest Node.js API, you might find it useful to pass data from tests that are being executed in various contexts to your reporter or custom Vitest handler.

To accomplish this, relying on the [test context](/guide/test-context) is not feasible since it cannot be serialized. However, with Vitest, you can utilize the `meta` property available on every task (suite or test) to share data between your tests and the Node.js process. It's important to note that this communication is one-way only, as the `meta` property can only be modified from within the test context. Any changes made within the Node.js context will not be visible in your tests.

You can populate `meta` property on test context or inside `beforeAll`/`afterAll` hooks for suite tasks.

Once a test is completed, Vitest will send a task including the result and `meta` to the Node.js process using RPC, and then report it in `onTestCaseResult` and other hooks that have access to tasks. To process this test case, you can utilize the `onTestCaseResult` method available in your reporter implementation:

::: danger BEWARE
Vitest uses different methods to communicate with the Node.js process.

* If Vitest runs tests inside worker threads, it will send data via [message port](https://developer.mozilla.org/en-US/docs/Web/API/MessagePort)
* If Vitest uses child process, the data will be send as a serialized Buffer via [`process.send`](https://nodejs.org/api/process.html#processsendmessage-sendhandle-options-callback) API
* If Vitest runs tests in the browser, the data will be stringified using [flatted](https://www.npmjs.com/package/flatted) package

This property is also present on every test in the `json` reporter, so make sure that data can be serialized into JSON.

Also, make sure you serialize [Error properties](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#error_types) before you set them.
:::

You can also get this information from Vitest state when tests finished running:

It's also possible to extend type definitions when using TypeScript:

---
url: /guide/test-annotations.md
---

**Examples:**

Example 1 (ts):
```ts
afterAll((suite) => {
  suite.meta.done = true
})

test('custom', ({ task }) => {
  task.meta.custom = 'some-custom-handler'
})
```

Example 2 (unknown):
```unknown
::: danger BEWARE
Vitest uses different methods to communicate with the Node.js process.

* If Vitest runs tests inside worker threads, it will send data via [message port](https://developer.mozilla.org/en-US/docs/Web/API/MessagePort)
* If Vitest uses child process, the data will be send as a serialized Buffer via [`process.send`](https://nodejs.org/api/process.html#processsendmessage-sendhandle-options-callback) API
* If Vitest runs tests in the browser, the data will be stringified using [flatted](https://www.npmjs.com/package/flatted) package

This property is also present on every test in the `json` reporter, so make sure that data can be serialized into JSON.

Also, make sure you serialize [Error properties](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#error_types) before you set them.
:::

You can also get this information from Vitest state when tests finished running:
```

Example 3 (unknown):
```unknown
It's also possible to extend type definitions when using TypeScript:
```

---

## Parallelism

**URL:** llms-txt#parallelism

**Contents:**
- File Parallelism
- Test Parallelism

By default, Vitest runs *test files* in parallel. Depending on the specified `pool`, Vitest uses a different mechanism to parallelize test files:

* `forks` (the default) and `vmForks` run tests in different [child processes](https://nodejs.org/api/child_process.html)
* `threads` and `vmThreads` run tests in different [worker threads](https://nodejs.org/api/worker_threads.html)

Both "child processes" and "worker threads" are refered to as "workers". You can configure the number of running workers with [`maxWorkers`](/config/#maxworkers) option.

If you have a lot of tests, it is usually faster to run them in parallel, but it also depends on the project, the environment and [isolation](/config/#isolate) state. To disable file parallelisation, you can set [`fileParallelism`](/config/#fileparallelism) to `false`. To learn more about possible performance improvements, read the [Performance Guide](/guide/improving-performance).

Unlike *test files*, Vitest runs *tests* in sequence. This means that tests inside a single test file will run in the order they are defined.

Vitest supports the [`concurrent`](/api/#test-concurrent) option to run tests together. If this option is set, Vitest will group concurrent tests in the same *file* (the number of simultaneously running tests depends on the [`maxConcurrency`](/config/#maxconcurrency) option) and run them with [`Promise.all`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).

Vitest doesn't perform any smart analysis and doesn't create additional workers to run these tests. This means that the performance of your tests will improve only if you rely heavily on asynchronous operations. For example, these tests will still run one after another even though the `concurrent` option is specified. This is because they are synchronous:

If you wish to run all tests concurrently, you can set the [`sequence.concurrent`](/config/#sequence-concurrent) option to `true`.

---
url: /advanced/api/plugin.md
---

**Examples:**

Example 1 (ts):
```ts
test.concurrent('the first test', () => {
  expect(1).toBe(1)
})

test.concurrent('the second test', () => {
  expect(2).toBe(2)
})
```

---

## Configuring WebdriverIO

**URL:** llms-txt#configuring-webdriverio

::: info Playwright vs WebdriverIO
If you do not already use WebdriverIO in your project, we recommend starting with [Playwright](/guide/browser/playwright) as it is easier to configure and has more flexible API.
:::

To run tests using WebdriverIO, you need to install the [`@vitest/browser-webdriverio`](https://www.npmjs.com/package/@vitest/browser-webdriverio) npm package and specify its `webdriverio` export in the `test.browser.provider` property of your config:

You can configure all the parameters that [`remote`](https://webdriver.io/docs/api/modules/#remoteoptions-modifier) function accepts:

You can find most available options in the [WebdriverIO documentation](https://webdriver.io/docs/configuration/). Note that Vitest will ignore all test runner options because we only use `webdriverio`'s browser capabilities.

::: tip
Most useful options are located on `capabilities` object. WebdriverIO allows nested capabilities, but Vitest will ignore those options because we rely on a different mechanism to spawn several browsers.

Note that Vitest will ignore `capabilities.browserName` — use [`test.browser.instances.browser`](/guide/browser/config#browser-capabilities-name) instead.
:::

---
url: /guide/browser/context.md
---

**Examples:**

Example 1 (unknown):
```unknown
You can configure all the parameters that [`remote`](https://webdriver.io/docs/api/modules/#remoteoptions-modifier) function accepts:
```

---

## Improving Performance

**URL:** llms-txt#improving-performance

**Contents:**
- Test isolation
- Limiting directory search
- Pool
- Sharding

By default Vitest runs every test file in an isolated environment based on the [pool](/config/#pool):

* `threads` pool runs every test file in a separate [`Worker`](https://nodejs.org/api/worker_threads.html#class-worker)
* `forks` pool runs every test file in a separate [forked child process](https://nodejs.org/api/child_process.html#child_processforkmodulepath-args-options)
* `vmThreads` pool runs every test file in a separate [VM context](https://nodejs.org/api/vm.html#vmcreatecontextcontextobject-options), but it uses workers for parallelism

This greatly increases test times, which might not be desirable for projects that don't rely on side effects and properly cleanup their state (which is usually true for projects with `node` environment). In this case disabling isolation will improve the speed of your tests. To do that, you can provide `--no-isolate` flag to the CLI or set [`test.isolate`](/config/#isolate) property in the config to `false`.

You can also disable isolation for specific files only by using `projects`:

:::tip
If you are using `vmThreads` pool, you cannot disable isolation. Use `threads` pool instead to improve your tests performance.
:::

For some projects, it might also be desirable to disable parallelism to improve startup time. To do that, provide `--no-file-parallelism` flag to the CLI or set [`test.fileParallelism`](/config/#fileparallelism) property in the config to `false`.

## Limiting directory search

You can limit the working directory when Vitest searches for files using [`test.dir`](/config/#test-dir) option. This should make the search faster if you have unrelated folders and files in the root directory.

By default Vitest runs tests in `pool: 'forks'`. While `'forks'` pool is better for compatibility issues ([hanging process](/guide/common-errors.html#failed-to-terminate-worker) and [segfaults](/guide/common-errors.html#segfaults-and-native-code-errors)), it may be slightly slower than `pool: 'threads'` in larger projects.

You can try to improve test run time by switching `pool` option in configuration:

Test sharding is a process of splitting your test suite into groups, or shards. This can be useful when you have a large test suite and multiple machines that could run subsets of that suite simultaneously.

To split Vitest tests on multiple different runs, use [`--shard`](/guide/cli#shard) option with [`--reporter=blob`](/guide/reporters#blob-reporter) option:

> Vitest splits your *test files*, not your test cases, into shards. If you've got 1000 test files, the `--shard=1/4` option will run 250 test files, no matter how many test cases individual files have.

Collect the results stored in `.vitest-reports` directory from each machine and merge them with [`--merge-reports`](/guide/cli#merge-reports) option:

::: details GitHub Actions example
This setup is also used at https://github.com/vitest-tests/test-sharding.

**Examples:**

Example 1 (unknown):
```unknown

```

Example 2 (unknown):
```unknown
:::

You can also disable isolation for specific files only by using `projects`:
```

Example 3 (unknown):
```unknown
:::tip
If you are using `vmThreads` pool, you cannot disable isolation. Use `threads` pool instead to improve your tests performance.
:::

For some projects, it might also be desirable to disable parallelism to improve startup time. To do that, provide `--no-file-parallelism` flag to the CLI or set [`test.fileParallelism`](/config/#fileparallelism) property in the config to `false`.

::: code-group
```

Example 4 (unknown):
```unknown

```

---

## Extending Reporters

**URL:** llms-txt#extending-reporters

**Contents:**
- Extending Built-in Reporters
- Reported Tasks
- Exported Reporters
  - Built-in reporters:
  - Base Abstract reporters:
  - Interface reporters:

::: warning
This is an advanced API. If you just want to configure built-in reporters, read the ["Reporters"](/guide/reporters) guide.
:::

You can import reporters from `vitest/reporters` and extend them to create your custom reporters.

## Extending Built-in Reporters

In general, you don't need to create your reporter from scratch. `vitest` comes with several default reporting programs that you can extend.

Of course, you can create your reporter from scratch. Just extend the `BaseReporter` class and implement the methods you need.

And here is an example of a custom reporter:

Or implement the `Reporter` interface:

Then you can use your custom reporter in the `vitest.config.ts` file:

Instead of using the tasks that reporters receive, it is recommended to use the Reported Tasks API instead.

You can get access to this API by calling `vitest.state.getReportedEntity(runnerTask)`:

## Exported Reporters

`vitest` comes with a few [built-in reporters](/guide/reporters) that you can use out of the box.

### Built-in reporters:

1. `DefaultReporter`
2. `DotReporter`
3. `JsonReporter`
4. `VerboseReporter`
5. `TapReporter`
6. `JUnitReporter`
7. `TapFlatReporter`
8. `HangingProcessReporter`
9. `TreeReporter`

### Base Abstract reporters:

### Interface reporters:

---
url: /guide/features.md
---

**Examples:**

Example 1 (ts):
```ts
import { DefaultReporter } from 'vitest/reporters'

export default class MyDefaultReporter extends DefaultReporter {
  // do something
}
```

Example 2 (unknown):
```unknown
Or implement the `Reporter` interface:
```

Example 3 (unknown):
```unknown
Then you can use your custom reporter in the `vitest.config.ts` file:
```

Example 4 (unknown):
```unknown
## Reported Tasks

Instead of using the tasks that reporters receive, it is recommended to use the Reported Tasks API instead.

You can get access to this API by calling `vitest.state.getReportedEntity(runnerTask)`:
```

---

## Timers

**URL:** llms-txt#timers

**Contents:**
- Example

When we test code that involves timeouts or intervals, instead of having our tests wait it out or timeout, we can speed up our tests by using "fake" timers that mock calls to `setTimeout` and `setInterval`.

See the [`vi.useFakeTimers` API section](/api/vi#vi-usefaketimers) for a more in depth detailed API description.

---
url: /guide/browser/trace-view.md
---

**Examples:**

Example 1 (js):
```js
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

function executeAfterTwoHours(func) {
  setTimeout(func, 1000 * 60 * 60 * 2) // 2 hours
}

function executeEveryMinute(func) {
  setInterval(func, 1000 * 60) // 1 minute
}

const mock = vi.fn(() => console.log('executed'))

describe('delayed execution', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })
  it('should execute the function', () => {
    executeAfterTwoHours(mock)
    vi.runAllTimers()
    expect(mock).toHaveBeenCalledTimes(1)
  })
  it('should not execute the function', () => {
    executeAfterTwoHours(mock)
    // advancing by 2ms won't trigger the func
    vi.advanceTimersByTime(2)
    expect(mock).not.toHaveBeenCalled()
  })
  it('should execute every minute', () => {
    executeEveryMinute(mock)
    vi.advanceTimersToNextTimer()
    expect(mock).toHaveBeenCalledTimes(1)
    vi.advanceTimersToNextTimer()
    expect(mock).toHaveBeenCalledTimes(2)
  })
})
```

---

## Plugin API 3.1.0 {#plugin-api}

**URL:** llms-txt#plugin-api-3.1.0-{#plugin-api}

**Contents:**
- Context
  - project
  - vitest
  - injectTestProjects

::: warning
This is an advanced API. If you just want to [run tests](/guide/), you probably don't need this. It is primarily used by library authors.

This guide assumes you know how to work with [Vite plugins](https://vite.dev/guide/api-plugin.html).
:::

Vitest supports a `configureVitest` [plugin](https://vite.dev/guide/api-plugin.html) hook hook since version 3.1.

::: tip TypeScript
Vitest re-exports all Vite type-only imports via a `Vite` namespace, which you can use to keep your versions in sync. However, if you are writing a plugin for both Vite and Vitest, you can continue using the `Plugin` type from the `vite` entrypoint. Just make sure you have `vitest/config` referenced somewhere so that `configureVitest` is augmented correctly:

Unlike [`reporter.onInit`](/advanced/api/reporters#oninit), this hooks runs early in Vitest lifecycle allowing you to make changes to configuration like `coverage` and `reporters`. A more notable change is that you can manipulate the global config from a [test project](/guide/projects) if your plugin is defined in the project and not in the global config.

The current [test project](./test-project) that the plugin belongs to.

::: warning Browser Mode
Note that if you are relying on a browser feature, the `project.browser` field is not set yet. Use [`reporter.onBrowserInit`](./reporters#onbrowserinit) event instead.
:::

The global [Vitest](./vitest) instance. You can change the global configuration by directly mutating the `vitest.config` property:

::: warning Config is Resolved
Note that Vitest already resolved the config, so some types might be different from the usual user configuration. This also means that some properties will not be resolved again, like `setupFile`. If you are adding new files, make sure to resolve it first.

At this point reporters are not created yet, so modifying `vitest.reporters` will have no effect because it will be overwritten. If you need to inject your own reporter, modify the config instead.
:::

### injectTestProjects

This methods accepts a config glob pattern, a filepath to the config or an inline configuration. It returns an array of resolved [test projects](./test-project).

::: warning Projects are Filtered
Vitest filters projects during the config resolution, so if the user defined a filter, injected project might not be resolved unless it [matches the filter](./vitest#matchesprojectfilter). You can update the filter via the `vitest.config.project` option to always include your test project:

Note that this will only affect projects injected with [`injectTestProjects`](#injecttestprojects) method.
:::

::: tip Referencing the Current Config
If you want to keep the user configuration, you can specify the `extends` property. All other properties will be merged with the user defined config.

The project's `configFile` can be accessed in Vite's config: `project.vite.config.configFile`.

Note that this will also inherit the `name` - Vitest doesn't allow multiple projects with the same name, so this will throw an error. Make sure you specified a different name. You can access the current name via the `project.name` property and all used names are available in the `vitest.projects` array.
:::

---
url: /guide/profiling-test-performance.md
---

**Examples:**

Example 1 (unknown):
```unknown

```

Example 2 (unknown):
```unknown
:::

::: tip TypeScript
Vitest re-exports all Vite type-only imports via a `Vite` namespace, which you can use to keep your versions in sync. However, if you are writing a plugin for both Vite and Vitest, you can continue using the `Plugin` type from the `vite` entrypoint. Just make sure you have `vitest/config` referenced somewhere so that `configureVitest` is augmented correctly:
```

Example 3 (unknown):
```unknown
:::

Unlike [`reporter.onInit`](/advanced/api/reporters#oninit), this hooks runs early in Vitest lifecycle allowing you to make changes to configuration like `coverage` and `reporters`. A more notable change is that you can manipulate the global config from a [test project](/guide/projects) if your plugin is defined in the project and not in the global config.

## Context

### project

The current [test project](./test-project) that the plugin belongs to.

::: warning Browser Mode
Note that if you are relying on a browser feature, the `project.browser` field is not set yet. Use [`reporter.onBrowserInit`](./reporters#onbrowserinit) event instead.
:::

### vitest

The global [Vitest](./vitest) instance. You can change the global configuration by directly mutating the `vitest.config` property:
```

Example 4 (unknown):
```unknown
::: warning Config is Resolved
Note that Vitest already resolved the config, so some types might be different from the usual user configuration. This also means that some properties will not be resolved again, like `setupFile`. If you are adding new files, make sure to resolve it first.

At this point reporters are not created yet, so modifying `vitest.reporters` will have no effect because it will be overwritten. If you need to inject your own reporter, modify the config instead.
:::

### injectTestProjects
```

---

## Interactivity API

**URL:** llms-txt#interactivity-api

**Contents:**
- userEvent.setup
- userEvent.click
- userEvent.dblClick
- userEvent.tripleClick
- userEvent.fill
- userEvent.keyboard
- userEvent.tab
- userEvent.type
- userEvent.clear
- userEvent.selectOptions

Vitest implements a subset of [`@testing-library/user-event`](https://testing-library.com/docs/user-event/intro) APIs using [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/) or [webdriver](https://www.w3.org/TR/webdriver/) instead of faking events which makes the browser behaviour more reliable and consistent with how users interact with a page.

Almost every `userEvent` method inherits its provider options.

Creates a new user event instance. This is useful if you need to keep the state of keyboard to press and release buttons correctly.

::: warning
Unlike `@testing-library/user-event`, the default `userEvent` instance from `vitest/browser` is created once, not every time its methods are called! You can see the difference in how it works in this snippet:

This behaviour is more useful because we do not emulate the keyboard, we actually press the Shift, so keeping the original behaviour would cause unexpected issues when typing in the field.
:::

Click on an element. Inherits provider's options. Please refer to your provider's documentation for detailed explanation about how this method works.

* [Playwright `locator.click` API](https://playwright.dev/docs/api/class-locator#locator-click)
* [WebdriverIO `element.click` API](https://webdriver.io/docs/api/element/click/)
* [testing-library `click` API](https://testing-library.com/docs/user-event/convenience/#click)

## userEvent.dblClick

Triggers a double click event on an element.

Please refer to your provider's documentation for detailed explanation about how this method works.

* [Playwright `locator.dblclick` API](https://playwright.dev/docs/api/class-locator#locator-dblclick)
* [WebdriverIO `element.doubleClick` API](https://webdriver.io/docs/api/element/doubleClick/)
* [testing-library `dblClick` API](https://testing-library.com/docs/user-event/convenience/#dblClick)

## userEvent.tripleClick

Triggers a triple click event on an element. Since there is no `tripleclick` in browser api, this method will fire three click events in a row, and so you must check [click event detail](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event#usage_notes) to filter the event: `evt.detail === 3`.

Please refer to your provider's documentation for detailed explanation about how this method works.

* [Playwright `locator.click` API](https://playwright.dev/docs/api/class-locator#locator-click): implemented via `click` with `clickCount: 3` .
* [WebdriverIO `browser.action` API](https://webdriver.io/docs/api/browser/action/): implemented via actions api with `move` plus three `down + up + pause` events in a row
* [testing-library `tripleClick` API](https://testing-library.com/docs/user-event/convenience/#tripleClick)

Set a value to the `input`/`textarea`/`contenteditable` field. This will remove any existing text in the input before setting the new value.

This methods focuses the element, fills it and triggers an `input` event after filling. You can use an empty string to clear the field.

::: tip
This API is faster than using [`userEvent.type`](#userevent-type) or [`userEvent.keyboard`](#userevent-keyboard), but it **doesn't support** [user-event `keyboard` syntax](https://testing-library.com/docs/user-event/keyboard) (e.g., `{Shift}{selectall}`).

We recommend using this API over [`userEvent.type`](#userevent-type) in situations when you don't need to enter special characters or have granular control over keypress events.
:::

* [Playwright `locator.fill` API](https://playwright.dev/docs/api/class-locator#locator-fill)
* [WebdriverIO `element.setValue` API](https://webdriver.io/docs/api/element/setValue)
* [testing-library `type` API](https://testing-library.com/docs/user-event/utility/#type)

## userEvent.keyboard

The `userEvent.keyboard` allows you to trigger keyboard strokes. If any input has a focus, it will type characters into that input. Otherwise, it will trigger keyboard events on the currently focused element (`document.body` if there are no focused elements).

This API supports [user-event `keyboard` syntax](https://testing-library.com/docs/user-event/keyboard).

* [Playwright `Keyboard` API](https://playwright.dev/docs/api/class-keyboard)
* [WebdriverIO `action('key')` API](https://webdriver.io/docs/api/browser/action#key-input-source)
* [testing-library `type` API](https://testing-library.com/docs/user-event/utility/#type)

Sends a `Tab` key event. This is a shorthand for `userEvent.keyboard('{tab}')`.

* [Playwright `Keyboard` API](https://playwright.dev/docs/api/class-keyboard)
* [WebdriverIO `action('key')` API](https://webdriver.io/docs/api/browser/action#key-input-source)
* [testing-library `tab` API](https://testing-library.com/docs/user-event/convenience/#tab)

::: warning
If you don't rely on [special characters](https://testing-library.com/docs/user-event/keyboard) (e.g., `{shift}` or `{selectall}`), it is recommended to use [`userEvent.fill`](#userevent-fill) instead for better performance.
:::

The `type` method implements `@testing-library/user-event`'s [`type`](https://testing-library.com/docs/user-event/utility/#type) utility built on top of [`keyboard`](https://testing-library.com/docs/user-event/keyboard) API.

This function allows you to type characters into an `input`/`textarea`/`contenteditable` element. It supports [user-event `keyboard` syntax](https://testing-library.com/docs/user-event/keyboard).

If you just need to press characters without an input, use [`userEvent.keyboard`](#userevent-keyboard) API.

::: info
Vitest doesn't expose `.type` method on the locator like `input.type` because it exists only for compatibility with the `userEvent` library. Consider using `.fill` instead as it is faster.
:::

* [Playwright `locator.press` API](https://playwright.dev/docs/api/class-locator#locator-press)
* [WebdriverIO `action('key')` API](https://webdriver.io/docs/api/browser/action#key-input-source)
* [testing-library `type` API](https://testing-library.com/docs/user-event/utility/#type)

This method clears the input element content.

* [Playwright `locator.clear` API](https://playwright.dev/docs/api/class-locator#locator-clear)
* [WebdriverIO `element.clearValue` API](https://webdriver.io/docs/api/element/clearValue)
* [testing-library `clear` API](https://testing-library.com/docs/user-event/utility/#clear)

## userEvent.selectOptions

The `userEvent.selectOptions` allows selecting a value in a `<select>` element.

::: warning
If select element doesn't have [`multiple`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-multiple) attribute, Vitest will select only the first element in the array.

Unlike `@testing-library`, Vitest doesn't support [listbox](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role) at the moment, but we plan to add support for it in the future.
:::

::: warning
`webdriverio` provider doesn't support selecting multiple elements because it doesn't provide API to do so.
:::

* [Playwright `locator.selectOption` API](https://playwright.dev/docs/api/class-locator#locator-select-option)
* [WebdriverIO `element.selectByIndex` API](https://webdriver.io/docs/api/element/selectByIndex)
* [testing-library `selectOptions` API](https://testing-library.com/docs/user-event/utility/#-selectoptions-deselectoptions)

This method moves the cursor position to the selected element. Please refer to your provider's documentation for detailed explanation about how this method works.

::: warning
If you are using `webdriverio` provider, the cursor will move to the center of the element by default.

If you are using `playwright` provider, the cursor moves to "some" visible point of the element.
:::

* [Playwright `locator.hover` API](https://playwright.dev/docs/api/class-locator#locator-hover)
* [WebdriverIO `element.moveTo` API](https://webdriver.io/docs/api/element/moveTo/)
* [testing-library `hover` API](https://testing-library.com/docs/user-event/convenience/#hover)

This works the same as [`userEvent.hover`](#userevent-hover), but moves the cursor to the `document.body` element instead.

::: warning
By default, the cursor position is in "some" visible place (in `playwright` provider) or in the center (in `webdriverio` provider) of the body element, so if the currently hovered element is already in the same position, this method will have no effect.
:::

* [Playwright `locator.hover` API](https://playwright.dev/docs/api/class-locator#locator-hover)
* [WebdriverIO `element.moveTo` API](https://webdriver.io/docs/api/element/moveTo/)
* [testing-library `hover` API](https://testing-library.com/docs/user-event/convenience/#hover)

Change a file input element to have the specified files.

::: warning
`webdriverio` provider supports this command only in `chrome` and `edge` browsers. It also only supports string types at the moment.
:::

* [Playwright `locator.setInputFiles` API](https://playwright.dev/docs/api/class-locator#locator-set-input-files)
* [WebdriverIO `browser.uploadFile` API](https://webdriver.io/docs/api/browser/uploadFile)
* [testing-library `upload` API](https://testing-library.com/docs/user-event/utility/#upload)

## userEvent.dragAndDrop

Drags the source element on top of the target element. Don't forget that the `source` element has to have the `draggable` attribute set to `true`.

::: warning
This API is not supported by the default `preview` provider.
:::

* [Playwright `frame.dragAndDrop` API](https://playwright.dev/docs/api/class-frame#frame-drag-and-drop)
* [WebdriverIO `element.dragAndDrop` API](https://webdriver.io/docs/api/element/dragAndDrop/)

Copy the selected text to the clipboard.

* [testing-library `copy` API](https://testing-library.com/docs/user-event/convenience/#copy)

Cut the selected text to the clipboard.

* [testing-library `cut` API](https://testing-library.com/docs/user-event/clipboard#cut)

Paste the text from the clipboard. See [`userEvent.copy`](#userevent-copy) and [`userEvent.cut`](#userevent-cut) for usage examples.

* [testing-library `paste` API](https://testing-library.com/docs/user-event/clipboard#paste)

---
url: /guide/browser/locators.md
---

**Examples:**

Example 1 (ts):
```ts
import { userEvent } from 'vitest/browser'

await userEvent.click(document.querySelector('.button'))
```

Example 2 (ts):
```ts
function setup(): UserEvent
```

Example 3 (ts):
```ts
import { userEvent as vitestUserEvent } from 'vitest/browser'
import { userEvent as originalUserEvent } from '@testing-library/user-event'

await vitestUserEvent.keyboard('{Shift}') // press shift without releasing
await vitestUserEvent.keyboard('{/Shift}') // releases shift

await originalUserEvent.keyboard('{Shift}') // press shift without releasing
await originalUserEvent.keyboard('{/Shift}') // DID NOT release shift because the state is different
```

Example 4 (ts):
```ts
function click(
  element: Element | Locator,
  options?: UserEventClickOptions,
): Promise<void>
```

---

## Locators

**URL:** llms-txt#locators

**Contents:**
- getByRole
- getByAltText
- getByLabelText
- getByPlaceholder
- getByText
- getByTitle
- getByTestId
- nth
- first
- last

A locator is a representation of an element or a number of elements. Every locator is defined by a string called a selector. Vitest abstracts this selector by providing convenient methods that generate them behind the scenes.

The locator API uses a fork of [Playwright's locators](https://playwright.dev/docs/api/class-locator) called [Ivya](https://npmjs.com/ivya). However, Vitest provides this API to every [provider](/guide/browser/config.html#browser-provider), not just playwright.

::: tip
This page covers API usage. To better understand locators and their usage, read [Playwright's "Locators" documentation](https://playwright.dev/docs/locators).
:::

Creates a way to locate an element by its [ARIA role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles), [ARIA attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes) and [accessible name](https://developer.mozilla.org/en-US/docs/Glossary/Accessible_name).

::: tip
If you only query for a single element with `getByText('The name')` it's oftentimes better to use `getByRole(expectedRole, { name: 'The name' })`. The accessible name query does not replace other queries such as `*ByAltText` or `*ByTitle`. While the accessible name can be equal to these attributes, it does not replace the functionality of these attributes.
:::

Consider the following DOM structure.

You can locate each element by its implicit role:

::: warning
Roles are matched by string equality, without inheriting from the ARIA role hierarchy. As a result, querying a superclass role like `checkbox` will not include elements with a subclass role like `switch`.

By default, many semantic elements in HTML have a role; for example, `<input type="radio">` has the "radio" role. Non-semantic elements in HTML do not have a role; `<div>` and `<span>` without added semantics return `null`. The `role` attribute can provide semantics.

Providing roles via `role` or `aria-*` attributes to built-in elements that already have an implicit role is **highly discouraged** by ARIA guidelines.
:::

Whether the `name` is matched exactly: case-sensitive and whole-string. Disabled by default. This option is ignored if `name` is a regular expression. Note that exact match still trims whitespace.

Should checked elements (set by `aria-checked` or `<input type="checkbox"/>`) be included or not. By default, the filter is not applied.

See [`aria-checked`](https://www.w3.org/TR/wai-aria-1.2/#aria-checked) for more information

* `disabled: boolean`

Should disabled elements be included or not. By default, the filter is not applied. Note that unlike other attributes, `disable` state is inherited.

See [`aria-disabled`](https://www.w3.org/TR/wai-aria-1.2/#aria-disabled) for more information

* `expanded: boolean`

Should expanded elements be included or not. By default, the filter is not applied.

See [`aria-expanded`](https://www.w3.org/TR/wai-aria-1.2/#aria-expanded) for more information

* `includeHidden: boolean`

Should elements that are [normally excluded](https://www.w3.org/TR/wai-aria-1.2/#tree_exclusion) from the accessibility tree be queried. By default, only non-hidden elements are matched by role selector.

Note that roles `none` and `presentation` are always included.

A number attribute that is usually present for `heading`, `listitem`, `row`, `treeitem` roles with default values for `<h1>-<h6>` elements. By default, the filter is not applied.

See [`aria-level`](https://www.w3.org/TR/wai-aria-1.2/#aria-level) for more information

* `name: string | RegExp`

[An accessible name](https://developer.mozilla.org/en-US/docs/Glossary/Accessible_name). By default, matching is case-insensitive and searches for a substring. Use `exact` option to control this behavior.

Should pressed elements be included or not. By default, the filter is not applied.

See [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.2/#aria-pressed) for more information

* `selected: boolean`

Should selected elements be included or not. By default, the filter is not applied.

See [`aria-selected`](https://www.w3.org/TR/wai-aria-1.2/#aria-selected) for more information

* [List of ARIA roles at MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
* [List of ARIA roles at w3.org](https://www.w3.org/TR/wai-aria-1.2/#role_definitions)
* [testing-library's `ByRole`](https://testing-library.com/docs/queries/byrole/)

Creates a locator capable of finding an element with an `alt` attribute that matches the text. Unlike testing-library's implementation, Vitest will match any element that has a matching `alt` attribute.

Whether the `text` is matched exactly: case-sensitive and whole-string. Disabled by default. This option is ignored if `text` is a regular expression. Note that exact match still trims whitespace.

* [testing-library's `ByAltText`](https://testing-library.com/docs/queries/byalttext/)

Creates a locator capable of finding an element that has an associated label.

The `page.getByLabelText('Username')` locator will find every input in the example below:

Whether the `text` is matched exactly: case-sensitive and whole-string. Disabled by default. This option is ignored if `text` is a regular expression. Note that exact match still trims whitespace.

* [testing-library's `ByLabelText`](https://testing-library.com/docs/queries/bylabeltext/)

Creates a locator capable of finding an element that has the specified `placeholder` attribute. Vitest will match any element that has a matching `placeholder` attribute, not just `input`.

::: warning
It is generally better to rely on a label using [`getByLabelText`](#getbylabeltext) than a placeholder.
:::

Whether the `text` is matched exactly: case-sensitive and whole-string. Disabled by default. This option is ignored if `text` is a regular expression. Note that exact match still trims whitespace.

* [testing-library's `ByPlaceholderText`](https://testing-library.com/docs/queries/byplaceholdertext/)

Creates a locator capable of finding an element that contains the specified text. The text will be matched against TextNode's [`nodeValue`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeValue) or input's value if the type is `button` or `reset`. Matching by text always normalizes whitespace, even with exact match. For example, it turns multiple spaces into one, turns line breaks into spaces and ignores leading and trailing whitespace.

::: tip
This locator is useful for locating non-interactive elements. If you need to locate an interactive element, like a button or an input, prefer [`getByRole`](#getbyrole).
:::

Whether the `text` is matched exactly: case-sensitive and whole-string. Disabled by default. This option is ignored if `text` is a regular expression. Note that exact match still trims whitespace.

* [testing-library's `ByText`](https://testing-library.com/docs/queries/bytext/)

Creates a locator capable of finding an element that has the specified `title` attribute. Unlike testing-library's `getByTitle`, Vitest cannot find `title` elements within an SVG.

Whether the `text` is matched exactly: case-sensitive and whole-string. Disabled by default. This option is ignored if `text` is a regular expression. Note that exact match still trims whitespace.

* [testing-library's `ByTitle`](https://testing-library.com/docs/queries/bytitle/)

Creates a locator capable of finding an element that matches the specified test id attribute. You can configure the attribute name with [`browser.locators.testIdAttribute`](/guide/browser/config#browser-locators-testidattribute).

::: warning
It is recommended to use this only after the other locators don't work for your use case. Using `data-testid` attributes does not resemble how your software is used and should be avoided if possible.
:::

Whether the `text` is matched exactly: case-sensitive and whole-string. Disabled by default. This option is ignored if `text` is a regular expression. Note that exact match still trims whitespace.

* [testing-library's `ByTestId`](https://testing-library.com/docs/queries/bytestid/)

This method returns a new locator that matches only a specific index within a multi-element query result. It's zero based, `nth(0)` selects the first element. Unlike `elements()[n]`, the `nth` locator will be retried until the element is present.

::: tip
Before resorting to `nth`, you may find it useful to use chained locators to narrow down your search.
Sometimes there is no better way to distinguish than by element position; although this can lead to flake, it's better than nothing.
:::

This method returns a new locator that matches only the first index of a multi-element query result.
It is sugar for `nth(0)`.

This method returns a new locator that matches only the last index of a multi-element query result.
It is sugar for `nth(-1)`.

This method creates a new locator that matches both the parent and provided locator. The following example finds a button with a specific title:

This method creates a new locator that matches either one or both locators.

::: warning
Note that if locator matches more than a single element, calling another method might throw an error if it expects a single element:

This methods narrows down the locator according to the options, such as filtering by text. It can be chained to apply multiple filters.

* **Type:** `Locator`

This options narrows down the selector to match elements that contain other elements matching provided locator. For example, with this HTML:

We can narrow down the locator to only find the `article` with `Vitest` text inside:

::: warning
Provided locator (`page.getByText('Vitest')` in the example) must be relative to the parent locator (`page.getByRole('article')` in the example). It will be queried starting with the parent locator, not the document root.

Meaning, you cannot pass down a locator that queries the element outside of the parent locator:

This example will fail because the `article` element is outside the element with `Vitest` text.
:::

::: tip
This method can be chained to narrow down the element even further:

* **Type:** `Locator`

This option narrows down the selector to match elements that do not contain other elements matching provided locator. For example, with this HTML:

We can narrow down the locator to only find the `article` that doesn't have `Rolldown` inside.

::: warning
Note that provided locator is queried against the parent, not the document root, just like [`has`](#has) option.
:::

* **Type:** `string | RegExp`

This options narrows down the selector to only match elements that contain provided text somewhere inside. When the `string` is passed, matching is case-insensitive and searches for a substring.

Both locators will find the same element because the search is case-insensitive:

* **Type:** `string | RegExp`

This options narrows down the selector to only match elements that do not contain provided text somewhere inside. When the `string` is passed, matching is case-insensitive and searches for a substring.

All methods are asynchronous and must be awaited. Since Vitest 3, tests will fail if a method is not awaited.

Click on an element. You can use the options to set the cursor position.

* [See more at `userEvent.click`](/guide/browser/interactivity-api#userevent-click)

Triggers a double click event on an element. You can use the options to set the cursor position.

* [See more at `userEvent.dblClick`](/guide/browser/interactivity-api#userevent-dblclick)

Triggers a triple click event on an element. Since there is no `tripleclick` in browser api, this method will fire three click events in a row.

* [See more at `userEvent.tripleClick`](/guide/browser/interactivity-api#userevent-tripleclick)

Clears the input element content.

* [See more at `userEvent.clear`](/guide/browser/interactivity-api#userevent-clear)

Moves the cursor position to the selected element.

* [See more at `userEvent.hover`](/guide/browser/interactivity-api#userevent-hover)

This works the same as [`locator.hover`](#hover), but moves the cursor to the `document.body` element instead.

* [See more at `userEvent.unhover`](/guide/browser/interactivity-api#userevent-unhover)

Sets the value of the current `input`, `textarea` or `contenteditable` element.

* [See more at `userEvent.fill`](/guide/browser/interactivity-api#userevent-fill)

Drags the current element to the target location.

* [See more at `userEvent.dragAndDrop`](/guide/browser/interactivity-api#userevent-draganddrop)

Choose one or more values from a `<select>` element.

* [See more at `userEvent.selectOptions`](/guide/browser/interactivity-api#userevent-selectoptions)

Creates a screenshot of the element matching the locator's selector.

You can specify the save location for the screenshot using the `path` option, which is relative to the current test file. If the `path` option is not set, Vitest will default to using [`browser.screenshotDirectory`](/guide/browser/config#browser-screenshotdirectory) (`__screenshot__` by default), along with the names of the file and the test to determine the screenshot's filepath.

If you also need the content of the screenshot, you can specify `base64: true` to return it alongside the filepath where the screenshot is saved.

::: warning WARNING 3.2.0
Note that `screenshot` will always return a base64 string if `save` is set to `false`.
The `path` is also ignored in that case.
:::

This method returns a single element matching the locator's selector or `null` if no element is found.

If multiple elements match the selector, this method will throw an error.  Use [`.elements()`](#elements) when you need all matching DOM Elements or [`.all()`](#all) if you need an array of locators matching the selector.

Consider the following DOM structure:

These locators will not throw an error:

These locators will throw an error:

This method returns a single element matching the locator's selector.

If *no element* matches the selector, an error is thrown. Consider using [`.query()`](#query) when you just need to check if the element exists.

If *multiple elements* match the selector, an error is thrown. Use [`.elements()`](#elements) when you need all matching DOM Elements or [`.all()`](#all) if you need an array of locators matching the selector.

::: tip
This method can be useful if you need to pass it down to an external library. It is called automatically when locator is used with `expect.element` every time the assertion is [retried](/guide/browser/assertion-api):

Consider the following DOM structure:

These locators will not throw an error:

These locators will throw an error:

This method returns an array of elements matching the locator's selector.

This function never throws an error. If there are no elements matching the selector, this method will return an empty array.

Consider the following DOM structure:

These locators will always succeed:

This method returns an array of new locators that match the selector.

Internally, this method calls `.elements` and wraps every element using [`page.elementLocator`](/guide/browser/context#page).

* [See `locator.elements()`](#elements)

The `selector` is a string that will be used to locate the element by the browser provider. Playwright will use a `playwright` locator syntax while `preview` and `webdriverio` will use CSS.

::: danger
You should not use this string in your test code. The `selector` string should only be used when working with the Commands API:

This getter returns a number of elements that this locator is matching. It is equivalent to calling `locator.elements().length`.

Consider the following DOM structure:

This property will always succeed:

## Custom Locators 3.2.0 advanced {#custom-locators}

You can extend built-in locators API by defining an object of locator factories. These methods will exist as methods on the `page` object and any created locator.

These locators can be useful if built-in locators are not enough. For example, when you use a custom framework for your UI.

The locator factory needs to return a selector string or a locator itself.

::: tip
The selector syntax is identical to Playwright locators. Please, read [their guide](https://playwright.dev/docs/other-locators) to better understand how to work with them.
:::

If the method is called on the global `page` object, then selector will be applied to the whole page. In the example below, `getByArticleTitle` will find all elements with an attribute `data-title` with the value of `title`. However, if the method is called on the locator, then it will be scoped to that locator.

---
url: /guide/migration.md
---

**Examples:**

Example 1 (ts):
```ts
function getByRole(
  role: ARIARole | string,
  options?: LocatorByRoleOptions,
): Locator
```

Example 2 (html):
```html
<h3>Sign up</h3>
<label>
  Login
  <input type="text" />
</label>
<label>
  Password
  <input type="password" />
</label>
<br/>
<button>Submit</button>
```

Example 3 (ts):
```ts
await expect.element(
  page.getByRole('heading', { name: 'Sign up' })
).toBeVisible()

await page.getByRole('textbox', { name: 'Login' }).fill('admin')
await page.getByRole('textbox', { name: 'Password' }).fill('admin')

await page.getByRole('button', { name: /submit/i }).click()
```

Example 4 (tsx):
```tsx
<button>Hello World</button>

  page.getByRole('button', { name: 'hello world' }) // ✅
  page.getByRole('button', { name: 'hello world', exact: true }) // ❌
  page.getByRole('button', { name: 'Hello World', exact: true }) // ✅
```

---

## Trace View

**URL:** llms-txt#trace-view

**Contents:**
- Preview
- Limitations

Vitest Browser Mode supports generating Playwright's [trace files](https://playwright.dev/docs/trace-viewer#viewing-remote-traces). To enable tracing, you need to set the [`trace`](/guide/browser/config#browser-trace) option in the `test.browser` configuration.

::: warning
Generating trace files is only available when using the [Playwright provider](/guide/browser/playwright).
:::

By default, Vitest will generate a trace file for each test. You can also configure it to only generate traces on test failures by setting `trace` to `'on-first-retry'`, `'on-all-retries'` or `'retain-on-failure'`. The files will be saved in `__traces__` folder next to your test files. The name of the trace includes the project name, the test name, the [`repeats` count and `retry` count](/api/#test-api-reference):

To change the output directory, you can set the `tracesDir` option in the `test.browser.trace` configuration. This way all traces will be stored in the same directory, grouped by the test file.

The traces are available in reporters as [annotations](/guide/test-annotations). For example, in the HTML reporter, you can find the link to the trace file in the test details.

To open the trace file, you can use the Playwright Trace Viewer. Run the following command in your terminal:

This will start the Trace Viewer and load the specified trace file.

Alternatively, you can open the Trace Viewer in your browser at https://trace.playwright.dev and upload the trace file there.

At the moment, Vitest cannot populate the "Sources" tab in the Trace Viewer. This means that while you can see the actions and screenshots captured during the test, you won't be able to view the source code of your tests directly within the Trace Viewer. You will need to refer back to your code editor to see the test implementation.

---
url: /advanced/api/import-example.md
---

---
url: /guide/using-plugins.md
---

**Examples:**

Example 1 (unknown):
```unknown

```

Example 2 (unknown):
```unknown
:::

By default, Vitest will generate a trace file for each test. You can also configure it to only generate traces on test failures by setting `trace` to `'on-first-retry'`, `'on-all-retries'` or `'retain-on-failure'`. The files will be saved in `__traces__` folder next to your test files. The name of the trace includes the project name, the test name, the [`repeats` count and `retry` count](/api/#test-api-reference):
```

Example 3 (unknown):
```unknown
To change the output directory, you can set the `tracesDir` option in the `test.browser.trace` configuration. This way all traces will be stored in the same directory, grouped by the test file.
```

Example 4 (unknown):
```unknown
The traces are available in reporters as [annotations](/guide/test-annotations). For example, in the HTML reporter, you can find the link to the trace file in the test details.

## Preview

To open the trace file, you can use the Playwright Trace Viewer. Run the following command in your terminal:
```

---

## Commands

**URL:** llms-txt#commands

**Contents:**
- Built-in Commands
  - Files Handling
- CDP Session
- Custom Commands
  - Custom `playwright` commands
  - Custom `webdriverio` commands

Command is a function that invokes another function on the server and passes down the result back to the browser. Vitest exposes several built-in commands you can use in your browser tests.

You can use the `readFile`, `writeFile`, and `removeFile` APIs to handle files in your browser tests. Since Vitest 3.2, all paths are resolved relative to the [project](/guide/projects) root (which is `process.cwd()`, unless overridden manually). Previously, paths were resolved relative to the test file.

By default, Vitest uses `utf-8` encoding but you can override it with options.

::: tip
This API follows [`server.fs`](https://vitejs.dev/config/server-options.html#server-fs-allow) limitations for security reasons.
:::

Vitest exposes access to raw Chrome Devtools Protocol via the `cdp` method exported from `vitest/browser`. It is mostly useful to library authors to build tools on top of it.

::: warning
CDP session works only with `playwright` provider and only when using `chromium` browser. You can read more about it in playwright's [`CDPSession`](https://playwright.dev/docs/api/class-cdpsession) documentation.
:::

You can also add your own commands via [`browser.commands`](/guide/browser/config#browser-commands) config option. If you develop a library, you can provide them via a `config` hook inside a plugin:

Then you can call it inside your test by importing it from `vitest/browser`:

::: warning
Custom functions will override built-in ones if they have the same name.
:::

### Custom `playwright` commands

Vitest exposes several `playwright` specific properties on the command context.

* `page` references the full page that contains the test iframe. This is the orchestrator HTML and you most likely shouldn't touch it to not break things.
* `frame` is an async method that will resolve tester [`Frame`](https://playwright.dev/docs/api/class-frame). It has a similar API to the `page`, but it doesn't support certain methods. If you need to query an element, you should prefer using `context.iframe` instead because it is more stable and faster.
* `iframe` is a [`FrameLocator`](https://playwright.dev/docs/api/class-framelocator) that should be used to query other elements on the page.
* `context` refers to the unique [BrowserContext](https://playwright.dev/docs/api/class-browsercontext).

### Custom `webdriverio` commands

Vitest exposes some `webdriverio` specific properties on the context object.

* `browser` is the `WebdriverIO.Browser` API.

Vitest automatically switches the `webdriver` context to the test iframe by calling `browser.switchFrame` before the command is called, so `$` and `$$` methods refer to the elements inside the iframe, not in the orchestrator, but non-webdriver APIs will still refer to the parent frame context.

---
url: /guide/common-errors.md
---

**Examples:**

Example 1 (ts):
```ts
import { server } from 'vitest/browser'

const { readFile, writeFile, removeFile } = server.commands

it('handles files', async () => {
  const file = './test.txt'

  await writeFile(file, 'hello world')
  const content = await readFile(file)

  expect(content).toBe('hello world')

  await removeFile(file)
})
```

Example 2 (ts):
```ts
import { cdp } from 'vitest/browser'

const input = document.createElement('input')
document.body.appendChild(input)
input.focus()

await cdp().send('Input.dispatchKeyEvent', {
  type: 'keyDown',
  text: 'a',
})

expect(input).toHaveValue('a')
```

Example 3 (ts):
```ts
import type { Plugin } from 'vitest/config'
import type { BrowserCommand } from 'vitest/node'

const myCustomCommand: BrowserCommand<[arg1: string, arg2: string]> = ({
  testPath,
  provider
}, arg1, arg2) => {
  if (provider.name === 'playwright') {
    console.log(testPath, arg1, arg2)
    return { someValue: true }
  }

  throw new Error(`provider ${provider.name} is not supported`)
}

export default function BrowserCommands(): Plugin {
  return {
    name: 'vitest:custom-commands',
    config() {
      return {
        test: {
          browser: {
            commands: {
              myCustomCommand,
            }
          }
        }
      }
    }
  }
}
```

Example 4 (ts):
```ts
import { commands } from 'vitest/browser'
import { expect, test } from 'vitest'

test('custom command works correctly', async () => {
  const result = await commands.myCustomCommand('test1', 'test2')
  expect(result).toEqual({ someValue: true })
})

// if you are using TypeScript, you can augment the module
declare module 'vitest/browser' {
  interface BrowserCommands {
    myCustomCommand: (arg1: string, arg2: string) => Promise<{
      someValue: true
    }>
  }
}
```

---

## Context API

**URL:** llms-txt#context-api

**Contents:**
- `userEvent`
- `commands`
- `page`
  - frameLocator
- `cdp`
- `server`

Vitest exposes a context module via `vitest/browser` entry point. As of 2.0, it exposes a small set of utilities that might be useful to you in tests.

::: tip
The `userEvent` API is explained in detail at [Interactivity API](/guide/browser/interactivity-api).
:::

::: tip
This API is explained in detail at [Commands API](/guide/browser/commands).
:::

The `page` export provides utilities to interact with the current `page`.

::: warning
While it exposes some utilities from Playwright's `page`, it is not the same object. Since the browser context is evaluated in the browser, your tests don't have access to Playwright's `page` because it runs on the server.

Use [Commands API](/guide/browser/commands) if you need to have access to Playwright's `page` object.
:::

::: tip
The `getBy*` API is explained at [Locators API](/guide/browser/locators).
:::

::: warning WARNING 3.2.0
Note that `screenshot` will always return a base64 string if `save` is set to `false`.
The `path` is also ignored in that case.
:::

The `frameLocator` method returns a `FrameLocator` instance that can be used to find elements inside the iframe.

The frame locator is similar to `page`. It does not refer to the Iframe HTML element, but to the iframe's document.

::: danger IMPORTANT
At the moment, the `frameLocator` method is only supported by the `playwright` provider.

The interactive methods (like `click` or `fill`) are always available on elements within the iframe, but assertions with `expect.element` require the iframe to have the [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy).
:::

The `cdp` export returns the current Chrome DevTools Protocol session. It is mostly useful to library authors to build tools on top of it.

::: warning
CDP session works only with `playwright` provider and only when using `chromium` browser. You can read more about it in playwright's [`CDPSession`](https://playwright.dev/docs/api/class-cdpsession) documentation.
:::

The `server` export represents the Node.js environment where the Vitest server is running. It is mostly useful for debugging or limiting your tests based on the environment.

---
url: /guide/coverage.md
---

**Examples:**

Example 1 (ts):
```ts
/**
 * Handler for user interactions. The support is implemented by the browser provider (`playwright` or `webdriverio`).
 * If used with `preview` provider, fallbacks to simulated events via `@testing-library/user-event`.
 * @experimental
 */
export const userEvent: {
  setup: () => UserEvent
  cleanup: () => Promise<void>
  click: (element: Element, options?: UserEventClickOptions) => Promise<void>
  dblClick: (element: Element, options?: UserEventDoubleClickOptions) => Promise<void>
  tripleClick: (element: Element, options?: UserEventTripleClickOptions) => Promise<void>
  selectOptions: (
    element: Element,
    values: HTMLElement | HTMLElement[] | string | string[],
    options?: UserEventSelectOptions,
  ) => Promise<void>
  keyboard: (text: string) => Promise<void>
  type: (element: Element, text: string, options?: UserEventTypeOptions) => Promise<void>
  clear: (element: Element) => Promise<void>
  tab: (options?: UserEventTabOptions) => Promise<void>
  hover: (element: Element, options?: UserEventHoverOptions) => Promise<void>
  unhover: (element: Element, options?: UserEventHoverOptions) => Promise<void>
  fill: (element: Element, text: string, options?: UserEventFillOptions) => Promise<void>
  dragAndDrop: (source: Element, target: Element, options?: UserEventDragAndDropOptions) => Promise<void>
}
```

Example 2 (ts):
```ts
/**
 * Available commands for the browser.
 * A shortcut to `server.commands`.
 */
export const commands: BrowserCommands
```

Example 3 (ts):
```ts
export const page: {
  /**
   * Change the size of iframe's viewport.
   */
  viewport(width: number, height: number): Promise<void>
  /**
   * Make a screenshot of the test iframe or a specific element.
   * @returns Path to the screenshot file or path and base64.
   */
  screenshot(options: Omit<ScreenshotOptions, 'base64'> & { base64: true }): Promise<{
    path: string
    base64: string
  }>
  screenshot(options?: ScreenshotOptions): Promise<string>
  /**
   * Extend default `page` object with custom methods.
   */
  extend(methods: Partial<BrowserPage>): BrowserPage
  /**
   * Wrap an HTML element in a `Locator`. When querying for elements, the search will always return this element.
   */
  elementLocator(element: Element): Locator
  /**
   * The iframe locator. This is a document locator that enters the iframe body
   * and works similarly to the `page` object.
   * **Warning:** At the moment, this is supported only by the `playwright` provider.
   */
  frameLocator(iframeElement: Locator): FrameLocator

  /**
   * Locator APIs. See its documentation for more details.
   */
  getByRole(role: ARIARole | string, options?: LocatorByRoleOptions): Locator
  getByLabelText(text: string | RegExp, options?: LocatorOptions): Locator
  getByTestId(text: string | RegExp): Locator
  getByAltText(text: string | RegExp, options?: LocatorOptions): Locator
  getByPlaceholder(text: string | RegExp, options?: LocatorOptions): Locator
  getByText(text: string | RegExp, options?: LocatorOptions): Locator
  getByTitle(text: string | RegExp, options?: LocatorOptions): Locator
}
```

Example 4 (ts):
```ts
function frameLocator(iframeElement: Locator): FrameLocator
```

---

## Runner API

**URL:** llms-txt#runner-api

**Contents:**
- Tasks
- Your Task Function

::: warning
This is advanced API. If you just want to [run tests](/guide/), you probably don't need this. It is primarily used by library authors.
:::

You can specify a path to your test runner with the `runner` option in your configuration file. This file should have a default export with a class constructor implementing these methods:

When initiating this class, Vitest passes down Vitest config, - you should expose it as a `config` property:

::: warning
Vitest also injects an instance of `ModuleRunner` from `vite/module-runner` as `moduleRunner` property. You can use it to process files in `importFile` method (this is default behavior of `TestRunner` and `BenchmarkRunner`).

`ModuleRunner` exposes `import` method, which is used to import test files in a Vite-friendly environment. Meaning, it will resolve imports and transform file content at runtime so that Node can understand it:

::: warning
If you don't have a custom runner or didn't define `runTest` method, Vitest will try to retrieve a task automatically. If you didn't add a function with `setFn`, it will fail.
:::

::: tip
Snapshot support and some other features depend on the runner. If you don't want to lose it, you can extend your runner from `VitestTestRunner` imported from `vitest/runners`. It also exposes `NodeBenchmarkRunner`, if you want to extend benchmark functionality.
:::

::: warning
The "Runner Tasks API" is experimental and should primarily be used only in the test runtime. Vitest also exposes the ["Reported Tasks API"](/advanced/api/test-module), which should be preferred when working in the main thread (inside the reporter, for example).

The team is currently discussing if "Runner Tasks" should be replaced by "Reported Tasks" in the future.
:::

Suites and tests are called `tasks` internally. Vitest runner initiates a `File` task before collecting any tests - this is a superset of `Suite` with a few additional properties. It is available on every task (including `File`) as a `file` property.

Every suite has a `tasks` property that is populated during collection phase. It is useful to traverse the task tree from the top down.

Every task has a `suite` property that references a suite it is located in. If `test` or `describe` are initiated at the top level, they will not have a `suite` property (it will **not** be equal to `file`!). `File` also never has a `suite` property. It is useful to travers the tasks from the bottom up.

Every task can have a `result` field. Suites can only have this field if an error thrown within a suite callback or `beforeAll`/`afterAll` callbacks prevents them from collecting tests. Tests always have this field after their callbacks are called - the `state` and `errors` fields are present depending on the outcome. If an error was thrown in `beforeEach` or `afterEach` callbacks, the thrown error will be present in `task.result.errors`.

## Your Task Function

Vitest exposes `createTaskCollector` utility to create your own `test` method. It behaves the same way as a test, but calls a custom method during collection.

A task is an object that is part of a suite. It is automatically added to the current suite with a `suite.task` method:

---
url: /advanced/guide/tests.md
---

**Examples:**

Example 1 (ts):
```ts
export interface VitestRunner {
  /**
   * First thing that's getting called before actually collecting and running tests.
   */
  onBeforeCollect?: (paths: string[]) => unknown
  /**
   * Called after collecting tests and before "onBeforeRun".
   */
  onCollected?: (files: File[]) => unknown

  /**
   * Called when test runner should cancel next test runs.
   * Runner should listen for this method and mark tests and suites as skipped in
   * "onBeforeRunSuite" and "onBeforeRunTask" when called.
   */
  onCancel?: (reason: CancelReason) => unknown

  /**
   * Called before running a single test. Doesn't have "result" yet.
   */
  onBeforeRunTask?: (test: Test) => unknown
  /**
   * Called before actually running the test function. Already has "result" with "state" and "startTime".
   */
  onBeforeTryTask?: (test: Test, options: { retry: number; repeats: number }) => unknown
  /**
   * Called after result and state are set.
   */
  onAfterRunTask?: (test: Test) => unknown
  /**
   * Called right after running the test function. Doesn't have new state yet. Will not be called, if the test function throws.
   */
  onAfterTryTask?: (test: Test, options: { retry: number; repeats: number }) => unknown
  /**
   * Called after the retry resolution happend. Unlike `onAfterTryTask`, the test now has a new state.
   * All `after` hooks were also called by this point.
   */
  onAfterRetryTask?: (test: Test, options: { retry: number; repeats: number }) => unknown

  /**
   * Called before running a single suite. Doesn't have "result" yet.
   */
  onBeforeRunSuite?: (suite: Suite) => unknown
  /**
   * Called after running a single suite. Has state and result.
   */
  onAfterRunSuite?: (suite: Suite) => unknown

  /**
   * If defined, will be called instead of usual Vitest suite partition and handling.
   * "before" and "after" hooks will not be ignored.
   */
  runSuite?: (suite: Suite) => Promise<void>
  /**
   * If defined, will be called instead of usual Vitest handling. Useful, if you have your custom test function.
   * "before" and "after" hooks will not be ignored.
   */
  runTask?: (test: TaskPopulated) => Promise<void>

  /**
   * Called, when a task is updated. The same as "onTaskUpdate" in a reporter, but this is running in the same thread as tests.
   */
  onTaskUpdate?: (task: [string, TaskResult | undefined, TaskMeta | undefined][]) => Promise<void>

  /**
   * Called before running all tests in collected paths.
   */
  onBeforeRunFiles?: (files: File[]) => unknown
  /**
   * Called right after running all tests in collected paths.
   */
  onAfterRunFiles?: (files: File[]) => unknown
  /**
   * Called when new context for a test is defined. Useful, if you want to add custom properties to the context.
   * If you only want to define custom context with a runner, consider using "beforeAll" in "setupFiles" instead.
   */
  extendTaskContext?: (context: TestContext) => TestContext
  /**
   * Called when certain files are imported. Can be called in two situations: to collect tests and to import setup files.
   */
  importFile: (filepath: string, source: VitestRunnerImportSource) => unknown
  /**
   * Function that is called when the runner attempts to get the value when `test.extend` is used with `{ injected: true }`
   */
  injectValue?: (key: string) => unknown
  /**
   * Publicly available configuration.
   */
  config: VitestRunnerConfig
  /**
   * The name of the current pool. Can affect how stack trace is inferred on the server side.
   */
  pool?: string
}
```

Example 2 (unknown):
```unknown
::: warning
Vitest also injects an instance of `ModuleRunner` from `vite/module-runner` as `moduleRunner` property. You can use it to process files in `importFile` method (this is default behavior of `TestRunner` and `BenchmarkRunner`).

`ModuleRunner` exposes `import` method, which is used to import test files in a Vite-friendly environment. Meaning, it will resolve imports and transform file content at runtime so that Node can understand it:
```

Example 3 (unknown):
```unknown
:::

::: warning
If you don't have a custom runner or didn't define `runTest` method, Vitest will try to retrieve a task automatically. If you didn't add a function with `setFn`, it will fail.
:::

::: tip
Snapshot support and some other features depend on the runner. If you don't want to lose it, you can extend your runner from `VitestTestRunner` imported from `vitest/runners`. It also exposes `NodeBenchmarkRunner`, if you want to extend benchmark functionality.
:::

## Tasks

::: warning
The "Runner Tasks API" is experimental and should primarily be used only in the test runtime. Vitest also exposes the ["Reported Tasks API"](/advanced/api/test-module), which should be preferred when working in the main thread (inside the reporter, for example).

The team is currently discussing if "Runner Tasks" should be replaced by "Reported Tasks" in the future.
:::

Suites and tests are called `tasks` internally. Vitest runner initiates a `File` task before collecting any tests - this is a superset of `Suite` with a few additional properties. It is available on every task (including `File`) as a `file` property.
```

Example 4 (unknown):
```unknown
Every suite has a `tasks` property that is populated during collection phase. It is useful to traverse the task tree from the top down.
```

---

## Configuring Playwright

**URL:** llms-txt#configuring-playwright

**Contents:**
- launchOptions
- connectOptions
- contextOptions
- `actionTimeout`

To run tests using playwright, you need to install the [`@vitest/browser-playwright`](https://www.npmjs.com/package/@vitest/browser-playwright) npm package and specify its `playwright` export in the `test.browser.provider` property of your config:

You can configure the [`launchOptions`](https://playwright.dev/docs/api/class-browsertype#browser-type-launch), [`connectOptions`](https://playwright.dev/docs/api/class-browsertype#browser-type-connect) and [`contextOptions`](https://playwright.dev/docs/api/class-browser#browser-new-context) when calling `playwright` at the top level or inside instances:

::: warning
Unlike Playwright test runner, Vitest opens a *single* page to run all tests that are defined in the same file. This means that isolation is restricted to a single test file, not to every individual test.
:::

These options are directly passed down to `playwright[browser].launch` command. You can read more about the command and available arguments in the [Playwright documentation](https://playwright.dev/docs/api/class-browsertype#browser-type-launch).

::: warning
Vitest will ignore `launch.headless` option. Instead, use [`test.browser.headless`](/guide/browser/config#browser-headless).

Note that Vitest will push debugging flags to `launch.args` if [`--inspect`](/guide/cli#inspect) is enabled.
:::

These options are directly passed down to `playwright[browser].connect` command. You can read more about the command and available arguments in the [Playwright documentation](https://playwright.dev/docs/api/class-browsertype#browser-type-connect).

::: warning
Since this command connects to an existing Playwright server, any `launch` options will be ignored.
:::

Vitest creates a new context for every test file by calling [`browser.newContext()`](https://playwright.dev/docs/api/class-browsercontext). You can configure this behaviour by specifying [custom arguments](https://playwright.dev/docs/api/class-browser#browser-new-context).

::: tip
Note that the context is created for every *test file*, not every *test* like in playwright test runner.
:::

::: warning
Vitest always sets `ignoreHTTPSErrors` to `true` in case your server is served via HTTPS and `serviceWorkers` to `'allow'` to support module mocking via [MSW](https://mswjs.io).

It is also recommended to use [`test.browser.viewport`](/guide/browser/config#browser-headless) instead of specifying it here as it will be lost when tests are running in headless mode.
:::

* **Default:** no timeout

This value configures the default timeout it takes for Playwright to wait until all accessibility checks pass and [the action](/guide/browser/interactivity-api) is actually done.

You can also configure the action timeout per-action:

---
url: /guide/browser/preview.md
---

**Examples:**

Example 1 (unknown):
```unknown
You can configure the [`launchOptions`](https://playwright.dev/docs/api/class-browsertype#browser-type-launch), [`connectOptions`](https://playwright.dev/docs/api/class-browsertype#browser-type-connect) and [`contextOptions`](https://playwright.dev/docs/api/class-browser#browser-new-context) when calling `playwright` at the top level or inside instances:
```

Example 2 (unknown):
```unknown
::: warning
Unlike Playwright test runner, Vitest opens a *single* page to run all tests that are defined in the same file. This means that isolation is restricted to a single test file, not to every individual test.
:::

## launchOptions

These options are directly passed down to `playwright[browser].launch` command. You can read more about the command and available arguments in the [Playwright documentation](https://playwright.dev/docs/api/class-browsertype#browser-type-launch).

::: warning
Vitest will ignore `launch.headless` option. Instead, use [`test.browser.headless`](/guide/browser/config#browser-headless).

Note that Vitest will push debugging flags to `launch.args` if [`--inspect`](/guide/cli#inspect) is enabled.
:::

## connectOptions

These options are directly passed down to `playwright[browser].connect` command. You can read more about the command and available arguments in the [Playwright documentation](https://playwright.dev/docs/api/class-browsertype#browser-type-connect).

::: warning
Since this command connects to an existing Playwright server, any `launch` options will be ignored.
:::

## contextOptions

Vitest creates a new context for every test file by calling [`browser.newContext()`](https://playwright.dev/docs/api/class-browsercontext). You can configure this behaviour by specifying [custom arguments](https://playwright.dev/docs/api/class-browser#browser-new-context).

::: tip
Note that the context is created for every *test file*, not every *test* like in playwright test runner.
:::

::: warning
Vitest always sets `ignoreHTTPSErrors` to `true` in case your server is served via HTTPS and `serviceWorkers` to `'allow'` to support module mocking via [MSW](https://mswjs.io).

It is also recommended to use [`test.browser.viewport`](/guide/browser/config#browser-headless) instead of specifying it here as it will be lost when tests are running in headless mode.
:::

## `actionTimeout`

* **Default:** no timeout

This value configures the default timeout it takes for Playwright to wait until all accessibility checks pass and [the action](/guide/browser/interactivity-api) is actually done.

You can also configure the action timeout per-action:
```

---

## Browser Config Reference

**URL:** llms-txt#browser-config-reference

**Contents:**
- browser.enabled
- browser.instances
- browser.headless
- browser.isolate
- browser.testerHtmlPath
- browser.api
- browser.provider {#browser-provider}
  - Custom Provider advanced
- browser.ui
- browser.viewport

You can change the browser configuration by updating the `test.browser` field in your [config file](/config/). An example of a simple config file:

Please, refer to the ["Config Reference"](/config/) article for different config examples.

::: warning
*All listed options* on this page are located within a `test` property inside the configuration:

* **Type:** `boolean`
* **Default:** `false`
* **CLI:** `--browser`, `--browser.enabled=false`

Run all tests inside a browser by default. Note that `--browser` only works if you have at least one [`browser.instances`](#browser-instances) item.

* **Type:** `BrowserConfig`
* **Default:** `[]`

Defines multiple browser setups. Every config has to have at least a `browser` field.

You can specify most of the [project options](/config/) (not marked with a  icon) and some of the `browser` options like `browser.testerHtmlPath`.

::: warning
Every browser config inherits options from the root config:

For more examples, refer to the ["Multiple Setups" guide](/guide/browser/multiple-setups).
:::

List of available `browser` options:

* [`browser.headless`](#browser-headless)
* [`browser.locators`](#browser-locators)
* [`browser.viewport`](#browser-viewport)
* [`browser.testerHtmlPath`](#browser-testerhtmlpath)
* [`browser.screenshotDirectory`](#browser-screenshotdirectory)
* [`browser.screenshotFailures`](#browser-screenshotfailures)
* [`browser.provider`](#browser-provider)

Under the hood, Vitest transforms these instances into separate [test projects](/advanced/api/test-project) sharing a single Vite server for better caching performance.

* **Type:** `boolean`
* **Default:** `process.env.CI`
* **CLI:** `--browser.headless`, `--browser.headless=false`

Run the browser in a `headless` mode. If you are running Vitest in CI, it will be enabled by default.

* **Type:** `boolean`
* **Default:** `true`
* **CLI:** `--browser.isolate`, `--browser.isolate=false`

Run every test in a separate iframe.

## browser.testerHtmlPath

A path to the HTML entry point. Can be relative to the root of the project. This file will be processed with [`transformIndexHtml`](https://vite.dev/guide/api-plugin#transformindexhtml) hook.

* **Type:** `number | { port?, strictPort?, host? }`
* **Default:** `63315`
* **CLI:** `--browser.api=63315`, `--browser.api.port=1234, --browser.api.host=example.com`

Configure options for Vite server that serves code in the browser. Does not affect [`test.api`](#api) option. By default, Vitest assigns port `63315` to avoid conflicts with the development server, allowing you to run both in parallel.

## browser.provider {#browser-provider}

* **Type:** `BrowserProviderOption`
* **Default:** `'preview'`
* **CLI:** `--browser.provider=playwright`

The return value of the provider factory. You can import the factory from `@vitest/browser-<provider-name>` or make your own provider:

To configure how provider initializes the browser, you can pass down options to the factory function:

### Custom Provider advanced

::: danger ADVANCED API
The custom provider API is highly experimental and can change between patches. If you just need to run tests in a browser, use the [`browser.instances`](#browser-instances) option instead.
:::

* **Type:** `boolean`
* **Default:** `!isCI`
* **CLI:** `--browser.ui=false`

Should Vitest UI be injected into the page. By default, injects UI iframe during development.

* **Type:** `{ width, height }`
* **Default:** `414x896`

Default iframe's viewport.

Options for built-in [browser locators](/guide/browser/locators).

### browser.locators.testIdAttribute

* **Type:** `string`
* **Default:** `data-testid`

Attribute used to find elements with `getByTestId` locator.

## browser.screenshotDirectory

* **Type:** `string`
* **Default:** `__screenshots__` in the test file directory

Path to the screenshots directory relative to the `root`.

## browser.screenshotFailures

* **Type:** `boolean`
* **Default:** `!browser.ui`

Should Vitest take screenshots if the test fails.

## browser.orchestratorScripts

* **Type:** `BrowserScript[]`
* **Default:** `[]`

Custom scripts that should be injected into the orchestrator HTML before test iframes are initiated. This HTML document only sets up iframes and doesn't actually import your code.

The script `src` and `content` will be processed by Vite plugins. Script should be provided in the following shape:

* **Type:** `Record<string, BrowserCommand>`
* **Default:** `{ readFile, writeFile, ... }`

Custom [commands](/guide/browser/commands) that can be imported during browser tests from `vitest/browser`.

## browser.connectTimeout

* **Type:** `number`
* **Default:** `60_000`

The timeout in milliseconds. If connection to the browser takes longer, the test suite will fail.

::: info
This is the time it should take for the browser to establish the WebSocket connection with the Vitest server. In normal circumstances, this timeout should never be reached.
:::

* **Type:** `'on' | 'off' | 'on-first-retry' | 'on-all-retries' | 'retain-on-failure' | object`
* **CLI:** `--browser.trace=on`, `--browser.trace=retain-on-failure`
* **Default:** `'off'`

Capture a trace of your browser test runs. You can preview traces with [Playwright Trace Viewer](https://trace.playwright.dev/).

This options supports the following values:

* `'on'` - capture trace for all tests. (not recommended as it's performance heavy)
* `'off'` - do not capture traces.
* `'on-first-retry'` - capture trace only when retrying the test for the first time.
* `'on-all-retries'` - capture trace on every retry of the test.
* `'retain-on-failure'` - capture trace only for tests that fail. This will automatically delete traces for tests that pass.
* `object` - an object with the following shape:

::: danger WARNING
This option is supported only by the [**playwright**](/guide/browser/playwright) provider.
:::

## browser.trackUnhandledErrors

* **Type:** `boolean`
* **Default:** `true`

Enables tracking uncaught errors and exceptions so they can be reported by Vitest.

If you need to hide certain errors, it is recommended to use [`onUnhandledError`](/config/#onunhandlederror) option instead.

Disabling this will completely remove all Vitest error handlers, which can help debugging with the "Pause on exceptions" checkbox turned on.

* **Type:** `ExpectOptions`

### browser.expect.toMatchScreenshot

Default options for the
[`toMatchScreenshot` assertion](/guide/browser/assertion-api.html#tomatchscreenshot).
These options will be applied to all screenshot assertions.

::: tip
Setting global defaults for screenshot assertions helps maintain consistency
across your test suite and reduces repetition in individual tests. You can still
override these defaults at the assertion level when needed for specific test cases.
:::

[All options available in the `toMatchScreenshot` assertion](/guide/browser/assertion-api#options)
can be configured here. Additionally, two path resolution functions are
available: `resolveScreenshotPath` and `resolveDiffPath`.

#### browser.expect.toMatchScreenshot.resolveScreenshotPath

* **Type:** `(data: PathResolveData) => string`
* **Default output:** `` `${root}/${testFileDirectory}/${screenshotDirectory}/${testFileName}/${arg}-${browserName}-${platform}${ext}` ``

A function to customize where reference screenshots are stored. The function
receives an object with the following properties:

Path **without** extension, sanitized and relative to the test file.

This comes from the arguments passed to `toMatchScreenshot`; if called
  without arguments this will be the auto-generated name.

Screenshot extension, with leading dot.

This can be set through the arguments passed to `toMatchScreenshot`, but
  the value will fall back to `'.png'` if an unsupported extension is used.

* `browserName: string`

The instance's browser name.

* `platform: NodeJS.Platform`

The value of
  [`process.platform`](https://nodejs.org/docs/v22.16.0/api/process.html#processplatform).

* `screenshotDirectory: string`

The value provided to
  [`browser.screenshotDirectory`](/guide/browser/config#browser-screenshotdirectory),
  if none is provided, its default value.

Absolute path to the project's [`root`](/config/#root).

* `testFileDirectory: string`

Path to the test file, relative to the project's [`root`](/config/#root).

* `testFileName: string`

The [`test`](/api/#test)'s name, including parent
  [`describe`](/api/#describe), sanitized.

* `attachmentsDir: string`

The value provided to [`attachmentsDir`](/config/#attachmentsdir), if none is
  provided, its default value.

For example, to group screenshots by browser:

#### browser.expect.toMatchScreenshot.resolveDiffPath

* **Type:** `(data: PathResolveData) => string`
* **Default output:** `` `${root}/${attachmentsDir}/${testFileDirectory}/${testFileName}/${arg}-${browserName}-${platform}${ext}` ``

A function to customize where diff images are stored when screenshot comparisons
fail. Receives the same data object as
[`resolveScreenshotPath`](#browser-expect-tomatchscreenshot-resolvescreenshotpath).

For example, to store diffs in a subdirectory of attachments:

#### browser.expect.toMatchScreenshot.comparators

* **Type:** `Record<string, Comparator>`

Register custom screenshot comparison algorithms, like [SSIM](https://en.wikipedia.org/wiki/Structural_similarity_index_measure) or other perceptual similarity metrics.

To create a custom comparator, you need to register it in your config. If using TypeScript, declare its options in the `ScreenshotComparatorRegistry` interface.

Then use it in your tests:

**Comparator Function Signature:**

The `reference` and `actual` images are decoded using the appropriate codec (currently only PNG). The `data` property is a flat `TypedArray` (`Buffer`, `Uint8Array`, or `Uint8ClampedArray`) containing pixel data in RGBA format:

* **4 bytes per pixel**: red, green, blue, alpha (from `0` to `255` each)
* **Row-major order**: pixels are stored left-to-right, top-to-bottom
* **Total length**: `width × height × 4` bytes
* **Alpha channel**: always present. Images without transparency have alpha values set to `255` (fully opaque)

::: tip Performance Considerations
The `createDiff` option indicates whether a diff image is needed. During [stable screenshot detection](/guide/browser/visual-regression-testing#how-visual-tests-work), Vitest calls comparators with `createDiff: false` to avoid unnecessary work.

**Respect this flag to keep your tests fast**.
:::

::: warning Handle Missing Options
The `options` parameter in `toMatchScreenshot()` is optional, so users might not provide all your comparator options. Always make them optional with default values:

---
url: /guide/browser.md
---

**Examples:**

Example 1 (unknown):
```unknown
Please, refer to the ["Config Reference"](/config/) article for different config examples.

::: warning
*All listed options* on this page are located within a `test` property inside the configuration:
```

Example 2 (unknown):
```unknown
:::

## browser.enabled

* **Type:** `boolean`
* **Default:** `false`
* **CLI:** `--browser`, `--browser.enabled=false`

Run all tests inside a browser by default. Note that `--browser` only works if you have at least one [`browser.instances`](#browser-instances) item.

## browser.instances

* **Type:** `BrowserConfig`
* **Default:** `[]`

Defines multiple browser setups. Every config has to have at least a `browser` field.

You can specify most of the [project options](/config/) (not marked with a  icon) and some of the `browser` options like `browser.testerHtmlPath`.

::: warning
Every browser config inherits options from the root config:
```

Example 3 (unknown):
```unknown
For more examples, refer to the ["Multiple Setups" guide](/guide/browser/multiple-setups).
:::

List of available `browser` options:

* [`browser.headless`](#browser-headless)
* [`browser.locators`](#browser-locators)
* [`browser.viewport`](#browser-viewport)
* [`browser.testerHtmlPath`](#browser-testerhtmlpath)
* [`browser.screenshotDirectory`](#browser-screenshotdirectory)
* [`browser.screenshotFailures`](#browser-screenshotfailures)
* [`browser.provider`](#browser-provider)

Under the hood, Vitest transforms these instances into separate [test projects](/advanced/api/test-project) sharing a single Vite server for better caching performance.

## browser.headless

* **Type:** `boolean`
* **Default:** `process.env.CI`
* **CLI:** `--browser.headless`, `--browser.headless=false`

Run the browser in a `headless` mode. If you are running Vitest in CI, it will be enabled by default.

## browser.isolate

* **Type:** `boolean`
* **Default:** `true`
* **CLI:** `--browser.isolate`, `--browser.isolate=false`

Run every test in a separate iframe.

## browser.testerHtmlPath

* **Type:** `string`

A path to the HTML entry point. Can be relative to the root of the project. This file will be processed with [`transformIndexHtml`](https://vite.dev/guide/api-plugin#transformindexhtml) hook.

## browser.api

* **Type:** `number | { port?, strictPort?, host? }`
* **Default:** `63315`
* **CLI:** `--browser.api=63315`, `--browser.api.port=1234, --browser.api.host=example.com`

Configure options for Vite server that serves code in the browser. Does not affect [`test.api`](#api) option. By default, Vitest assigns port `63315` to avoid conflicts with the development server, allowing you to run both in parallel.

## browser.provider {#browser-provider}

* **Type:** `BrowserProviderOption`
* **Default:** `'preview'`
* **CLI:** `--browser.provider=playwright`

The return value of the provider factory. You can import the factory from `@vitest/browser-<provider-name>` or make your own provider:
```

Example 4 (unknown):
```unknown
To configure how provider initializes the browser, you can pass down options to the factory function:
```

---
