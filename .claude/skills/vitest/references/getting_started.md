# Vitest - Getting Started

**Pages:** 7

---

## To run in browser mode

**URL:** llms-txt#to-run-in-browser-mode

vitest --inspect-brk --browser --no-file-parallelism
```

Once Vitest starts it will stop execution and wait for you to open developer tools that can connect to [Node.js inspector](https://nodejs.org/en/docs/guides/debugging-getting-started/). You can use Chrome DevTools for this by opening `chrome://inspect` on browser.

In watch mode you can keep the debugger open during test re-runs by using the `--isolate false` options.

---
url: /api/expect.md
---

---

## Features

**URL:** llms-txt#features

**Contents:**
- Shared Config between Test, Dev and Build
- Watch Mode
- Common Web Idioms Out-Of-The-Box
- Threads
- Test Filtering
- Running Tests Concurrently
- Snapshot
- Chai and Jest `expect` Compatibility
- Mocking
- Coverage

## Shared Config between Test, Dev and Build

Vite's config, transformers, resolvers, and plugins. Use the same setup from your app to run the tests.

Learn more at [Configuring Vitest](/guide/#configuring-vitest).

When you modify your source code or the test files, Vitest smartly searches the module graph and only reruns the related tests, just like how HMR works in Vite!

`vitest` starts in `watch mode` **by default in development environment** and `run mode` in CI environment (when `process.env.CI` presents) smartly. You can use `vitest watch` or `vitest run` to explicitly specify the desired mode.

Start Vitest with the `--standalone` flag to keep it running in the background. It won't run any tests until they change. Vitest will not run tests if the source code is changed until the test that imports the source has been run

## Common Web Idioms Out-Of-The-Box

Out-of-the-box ES Module / TypeScript / JSX support / PostCSS

By default Vitest runs test files in [multiple processes](/guide/parallelism) using [`node:child_process`](https://nodejs.org/api/child_process.html), allowing tests to run simultaneously. If you want to speed up your test suite even further, consider enabling `--pool=threads` to run tests using [`node:worker_threads`](https://nodejs.org/api/worker_threads.html) (beware that some packages might not work with this setup).
To run tests in a single thread or process, see [`fileParallelism`](/config/#fileParallelism).

Vitest also isolates each file's environment so env mutations in one file don't affect others. Isolation can be disabled by passing `--no-isolate` to the CLI (trading correctness for run performance).

Vitest provides many ways to narrow down the tests to run in order to speed up testing so you can focus on development.

Learn more about [Test Filtering](/guide/filtering).

## Running Tests Concurrently

Use `.concurrent` in consecutive tests to start them in parallel.

If you use `.concurrent` on a suite, every test in it will be started in parallel.

You can also use `.skip`, `.only`, and `.todo` with concurrent suites and tests. Read more in the [API Reference](/api/#test-concurrent).

::: warning
When running concurrent tests, Snapshots and Assertions must use `expect` from the local [Test Context](/guide/test-context) to ensure the right test is detected.
:::

[Jest-compatible](https://jestjs.io/docs/snapshot-testing) snapshot support.

Learn more at [Snapshot](/guide/snapshot).

## Chai and Jest `expect` Compatibility

[Chai](https://www.chaijs.com/) is built-in for assertions with [Jest `expect`](https://jestjs.io/docs/expect)-compatible APIs.

Notice that if you are using third-party libraries that add matchers, setting [`test.globals`](/config/#globals) to `true` will provide better compatibility.

[Tinyspy](https://github.com/tinylibs/tinyspy) is built-in for mocking with `jest`-compatible APIs on `vi` object.

Vitest supports both [happy-dom](https://github.com/capricorn86/happy-dom) or [jsdom](https://github.com/jsdom/jsdom) for mocking DOM and browser APIs. They don't come with Vitest, you will need to install them separately:

After that, change the `environment` option in your config file:

Learn more at [Mocking](/guide/mocking).

Vitest supports Native code coverage via [`v8`](https://v8.dev/blog/javascript-code-coverage) and instrumented code coverage via [`istanbul`](https://istanbul.js.org/).

Learn more at [Coverage](/guide/coverage).

Vitest also provides a way to run tests within your source code along with the implementation, similar to [Rust's module tests](https://doc.rust-lang.org/book/ch11-03-test-organization.html#the-tests-module-and-cfgtest).

This makes the tests share the same closure as the implementations and able to test against private states without exporting. Meanwhile, it also brings the feedback loop closer for development.

Learn more at [In-source testing](/guide/in-source).

## Benchmarking Experimental {#benchmarking}

You can run benchmark tests with [`bench`](/api/#bench) function via [Tinybench](https://github.com/tinylibs/tinybench) to compare performance results.

## Type Testing Experimental {#type-testing}

You can [write tests](/guide/testing-types) to catch type regressions. Vitest comes with [`expect-type`](https://github.com/mmkal/expect-type) package to provide you with a similar and easy to understand API.

Run tests on different machines using [`--shard`](/guide/cli#shard) and [`--reporter=blob`](/guide/reporters#blob-reporter) flags.
All test and coverage results can be merged at the end of your CI pipeline using `--merge-reports` command:

See [`Improving Performance | Sharding`](/guide/improving-performance#sharding) for more information.

## Environment Variables

Vitest exclusively autoloads environment variables prefixed with `VITE_` from `.env` files to maintain compatibility with frontend-related tests, adhering to [Vite's established convention](https://vitejs.dev/guide/env-and-mode.html#env-files). To load every environmental variable from `.env` files anyway, you can use `loadEnv` method imported from `vite`:

By default, Vitest catches and reports all [unhandled rejections](https://developer.mozilla.org/en-US/docs/Web/API/Window/unhandledrejection_event), [uncaught exceptions](https://nodejs.org/api/process.html#event-uncaughtexception) (in Node.js) and [error](https://developer.mozilla.org/en-US/docs/Web/API/Window/error_event) events (in the [browser](/guide/browser/)).

You can disable this behaviour by catching them manually. Vitest assumes the callback is handled by you and won't report the error.

Alternatively, you can also ignore reported errors with a [`dangerouslyIgnoreUnhandledErrors`](/config/#dangerouslyignoreunhandlederrors) option. Vitest will still report them, but they won't affect the test result (exit code won't be changed).

If you need to test that error was not caught, you can create a test that looks like this:

---
url: /guide.md
---

**Examples:**

Example 1 (bash):
```bash
$ vitest
```

Example 2 (ts):
```ts
import { describe, it } from 'vitest'

// The two tests marked with concurrent will be started in parallel
describe('suite', () => {
  it('serial test', async () => { /* ... */ })
  it.concurrent('concurrent test 1', async ({ expect }) => { /* ... */ })
  it.concurrent('concurrent test 2', async ({ expect }) => { /* ... */ })
})
```

Example 3 (ts):
```ts
import { describe, it } from 'vitest'

// All tests within this suite will be started in parallel
describe.concurrent('suite', () => {
  it('concurrent test 1', async ({ expect }) => { /* ... */ })
  it('concurrent test 2', async ({ expect }) => { /* ... */ })
  it.concurrent('concurrent test 3', async ({ expect }) => { /* ... */ })
})
```

Example 4 (ts):
```ts
import { expect, it } from 'vitest'

it('renders correctly', () => {
  const result = render()
  expect(result).toMatchSnapshot()
})
```

---

## Why Vitest

**URL:** llms-txt#why-vitest

**Contents:**
- The Need for a Vite Native Test Runner
- How is Vitest Different from X?

:::tip NOTE
This guide assumes that you are familiar with Vite. A good way to start learning more is to read the [Why Vite Guide](https://vitejs.dev/guide/why.html), and [Next generation frontend tooling with ViteJS](https://www.youtube.com/watch?v=UJypSr8IhKY), a stream where [Evan You](https://bsky.app/profile/evanyou.me) did a demo explaining the main concepts.
:::

## The Need for a Vite Native Test Runner

Vite's out-of-the-box support for common web patterns, features like glob imports and SSR primitives, and its many plugins and integrations are fostering a vibrant ecosystem. Its dev and build story are key to its success. For docs, there are several SSG-based alternatives powered by Vite. Vite's Unit Testing story hasn't been clear though. Existing options like [Jest](https://jestjs.io/) were created in a different context. There is a lot of duplication between Jest and Vite, forcing users to configure two different pipelines.

Using Vite dev server to transform your files during testing, enables the creation of a simple runner that doesn't need to deal with the complexity of transforming source files and can solely focus on providing the best DX during testing. A test runner that uses the same configuration of your App (through `vite.config.js`), sharing a common transformation pipeline during dev, build, and test time. That is extensible with the same plugin API that lets you and the maintainers of your tools provide first-class integration with Vite. A tool that is built with Vite in mind from the start, taking advantage of its improvements in DX, like its instant Hot Module Reload (HMR). This is Vitest, a next generation testing framework powered by Vite.

Given Jest's massive adoption, Vitest provides a compatible API that allows you to use it as a drop-in replacement in most projects. It also includes the most common features required when setting up your unit tests (mocking, snapshots, coverage). Vitest cares a lot about performance and uses Worker threads to run as much as possible in parallel. Some ports have seen test running an order of magnitude faster. Watch mode is enabled by default, aligning itself with the way Vite pushes for a dev first experience. Even with all these improvements in DX, Vitest stays lightweight by carefully choosing its dependencies (or directly inlining needed pieces).

**Vitest aims to position itself as the Test Runner of choice for Vite projects, and as a solid alternative even for projects not using Vite.**

Continue reading in the [Getting Started Guide](./index)

## How is Vitest Different from X?

You can check out the [Comparisons](./comparisons) section for more details on how Vitest differs from other similar tools.

---

## Why Browser Mode

**URL:** llms-txt#why-browser-mode

**Contents:**
- Motivation
  - Different Ways of Testing
  - The Simulation Caveat
- Drawbacks
  - Early Development
  - Longer Initialization

We developed the Vitest browser mode feature to help improve testing workflows and achieve more accurate and reliable test results. This addition to our testing API allows developers to run tests in a native browser environment. In this section, we'll explore the motivations behind this feature and its benefits for testing.

### Different Ways of Testing

There are different ways to test JavaScript code. Some testing frameworks simulate browser environments in Node.js, while others run tests in real browsers. In this context, [jsdom](https://www.npmjs.com/package/jsdom) is an example of a spec implementation that simulates a browser environment by being used with a test runner like Jest or Vitest, while other testing tools such as [WebdriverIO](https://webdriver.io/) or [Cypress](https://www.cypress.io/) allow developers to test their applications in a real browser or in case of [Playwright](https://playwright.dev/) provide you a browser engine.

### The Simulation Caveat

Testing JavaScript programs in simulated environments such as jsdom or happy-dom has simplified the test setup and provided an easy-to-use API, making them suitable for many projects and increasing confidence in test results. However, it is crucial to keep in mind that these tools only simulate a browser environment and not an actual browser, which may result in some discrepancies between the simulated environment and the real environment. Therefore, false positives or negatives in test results may occur.

To achieve the highest level of confidence in our tests, it's crucial to test in a real browser environment. This is why we developed the browser mode feature in Vitest, allowing developers to run tests natively in a browser and gain more accurate and reliable test results. With browser-level testing, developers can be more confident that their application will work as intended in a real-world scenario.

When using Vitest browser, it is important to consider the following drawbacks:

### Early Development

The browser mode feature of Vitest is still in its early stages of development. As such, it may not yet be fully optimized, and there may be some bugs or issues that have not yet been ironed out. It is recommended that users augment their Vitest browser experience with a standalone browser-side test runner like WebdriverIO, Cypress or Playwright.

### Longer Initialization

Vitest browser requires spinning up the provider and the browser during the initialization process, which can take some time. This can result in longer initialization times compared to other testing patterns.

---
url: /guide/why.md
---

---

## Getting Started

**URL:** llms-txt#getting-started

**Contents:**
- Overview
- Trying Vitest Online
- Adding Vitest to Your Project
- Writing Tests
- Configuring Vitest
- Projects Support
- Command Line Interface
- Automatic Dependency Installation
- IDE Integrations
- Examples

Vitest (pronounced as *"veetest"*) is a next generation testing framework
powered by
Vite.

You can learn more about the rationale behind the project in the [Why Vitest](/guide/why) section.

## Trying Vitest Online

You can try Vitest online on [StackBlitz](https://vitest.new). It runs Vitest directly in the browser, and it is almost identical to the local setup but doesn't require installing anything on your machine.

## Adding Vitest to Your Project

Learn how to install by Video

:::tip
Vitest requires Vite >=v6.0.0 and Node >=v20.0.0
:::

It is recommended that you install a copy of `vitest` in your `package.json`, using one of the methods listed above. However, if you would prefer to run `vitest` directly, you can use `npx vitest` (the `npx` tool comes with npm and Node.js).

The `npx` tool will execute the specified command. By default, `npx` will first check if the command exists in the local project's binaries. If it is not found there, `npx` will look in the system's `$PATH` and execute it if found. If the command is not found in either location, `npx` will install it in a temporary location prior to execution.

As an example, we will write a simple test that verifies the output of a function that adds two numbers.

::: tip
By default, tests must contain `.test.` or `.spec.` in their file name.
:::

Next, in order to execute the test, add the following section to your `package.json`:

Finally, run `npm run test`, `yarn test` or `pnpm test`, depending on your package manager, and Vitest will print this message:

::: warning
If you are using Bun as your package manager, make sure to use `bun run test` command instead of `bun test`, otherwise Bun will run its own test runner.
:::

Learn more about the usage of Vitest, see the [API](https://vitest.dev/api/) section.

## Configuring Vitest

One of the main advantages of Vitest is its unified configuration with Vite. If present, `vitest` will read your root `vite.config.ts` to match with the plugins and setup as your Vite app. For example, your Vite [resolve.alias](https://vitejs.dev/config/shared-options.html#resolve-alias) and [plugins](https://vitejs.dev/guide/using-plugins.html) configuration will work out-of-the-box. If you want a different configuration during testing, you can:

* Create `vitest.config.ts`, which will have the higher priority
* Pass `--config` option to CLI, e.g. `vitest --config ./path/to/vitest.config.ts`
* Use `process.env.VITEST` or `mode` property on `defineConfig` (will be set to `test` if not overridden) to conditionally apply different configuration in `vite.config.ts`. Note that like any other environment variable, `VITEST` is also exposed on `import.meta.env` in your tests

Vitest supports the same extensions for your configuration file as Vite does: `.js`, `.mjs`, `.cjs`, `.ts`, `.cts`, `.mts`. Vitest does not support `.json` extension.

If you are not using Vite as your build tool, you can configure Vitest using the `test` property in your config file:

::: tip
Even if you do not use Vite yourself, Vitest relies heavily on it for its transformation pipeline. For that reason, you can also configure any property described in [Vite documentation](https://vitejs.dev/config/).
:::

If you are already using Vite, add `test` property in your Vite config. You'll also need to add a reference to Vitest types using a [triple slash directive](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-) at the top of your config file.

See the list of config options in the [Config Reference](../config/)

::: warning
If you decide to have two separate config files for Vite and Vitest, make sure to define the same Vite options in your Vitest config file since it will override your Vite file, not extend it. You can also use `mergeConfig` method from `vite` or `vitest/config` entries to merge Vite config with Vitest config:

However, we recommend using the same file for both Vite and Vitest, instead of creating two separate files.
:::

Run different project configurations inside the same project with [Test Projects](/guide/projects). You can define a list of files and folders that define your projects in `vitest.config` file.

## Command Line Interface

In a project where Vitest is installed, you can use the `vitest` binary in your npm scripts, or run it directly with `npx vitest`. Here are the default npm scripts in a scaffolded Vitest project:

To run tests once without watching for file changes, use `vitest run`.
You can specify additional CLI options like `--port` or `--https`. For a full list of CLI options, run `npx vitest --help` in your project.

Learn more about the [Command Line Interface](/guide/cli)

## Automatic Dependency Installation

Vitest will prompt you to install certain dependencies if they are not already installed. You can disable this behavior by setting the `VITEST_SKIP_INSTALL_CHECKS=1` environment variable.

We also provided an official extension for Visual Studio Code to enhance your testing experience with Vitest.

[Install from VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)

Learn more about [IDE Integrations](/guide/ide)

| Example | Source | Playground |
|---|---|---|
| `basic` | [GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/basic) | [Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/basic?initialPath=__vitest__/) |
| `fastify` | [GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/fastify) | [Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/fastify?initialPath=__vitest__/) |
| `in-source-test` | [GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/in-source-test) | [Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/in-source-test?initialPath=__vitest__/) |
| `lit` | [GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/lit) | [Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/lit?initialPath=__vitest__/) |
| `vue` | [GitHub](https://github.com/vitest-tests/browser-examples/tree/main/examples/vue) | [Play Online](https://stackblitz.com/fork/github/vitest-tests/browser-examples/tree/main/examples/vue?initialPath=__vitest__/) |
| `marko` | [GitHub](https://github.com/marko-js/examples/tree/master/examples/library-ts) | [Play Online](https://stackblitz.com/fork/github/marko-js/examples/tree/master/examples/library-ts/) |
| `preact` | [GitHub](https://github.com/vitest-tests/browser-examples/tree/main/examples/preact) | [Play Online](https://stackblitz.com/fork/github/vitest-tests/browser-examples/tree/main/examples/preact?initialPath=__vitest__/) |
| `react` | [GitHub](https://github.com/vitest-tests/browser-examples/tree/main/examples/react) | [Play Online](https://stackblitz.com/fork/github/vitest-tests/browser-examples/tree/main/examples/react?initialPath=__vitest__/) |
| `solid` | [GitHub](https://github.com/vitest-tests/browser-examples/tree/main/examples/solid) | [Play Online](https://stackblitz.com/fork/github/vitest-tests/browser-examples/tree/main/examples/solid?initialPath=__vitest__/) |
| `svelte` | [GitHub](https://github.com/vitest-tests/browser-examples/tree/main/examples/svelte) | [Play Online](https://stackblitz.com/fork/github/vitest-tests/browser-examples/tree/main/examples/svelte?initialPath=__vitest__/) |
| `sveltekit` | [GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/sveltekit) | [Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/sveltekit?initialPath=__vitest__/) |
| `profiling` | [GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/profiling) | Not Available |
| `typecheck` | [GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/typecheck) | [Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/typecheck?initialPath=__vitest__/) |
| `projects` | [GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/projects) | [Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/projects?initialPath=__vitest__/) |

## Projects using Vitest

* [unocss](https://github.com/unocss/unocss)
* [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
* [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
* [vue](https://github.com/vuejs/core)
* [vite](https://github.com/vitejs/vite)
* [vitesse](https://github.com/antfu/vitesse)
* [vitesse-lite](https://github.com/antfu/vitesse-lite)
* [fluent-vue](https://github.com/demivan/fluent-vue)
* [vueuse](https://github.com/vueuse/vueuse)
* [milkdown](https://github.com/Saul-Mirone/milkdown)
* [gridjs-svelte](https://github.com/iamyuu/gridjs-svelte)
* [spring-easing](https://github.com/okikio/spring-easing)
* [bytemd](https://github.com/bytedance/bytemd)
* [faker](https://github.com/faker-js/faker)
* [million](https://github.com/aidenybai/million)
* [Vitamin](https://github.com/wtchnm/Vitamin)
* [neodrag](https://github.com/PuruVJ/neodrag)
* [svelte-multiselect](https://github.com/janosh/svelte-multiselect)
* [iconify](https://github.com/iconify/iconify)
* [tdesign-vue-next](https://github.com/Tencent/tdesign-vue-next)
* [cz-git](https://github.com/Zhengqbbb/cz-git)

## Using Unreleased Commits

Each commit on main branch and a PR with a `cr-tracked` label are published to [pkg.pr.new](https://github.com/stackblitz-labs/pkg.pr.new). You can install it by `npm i https://pkg.pr.new/vitest@{commit}`.

If you want to test your own modification locally, you can build and link it yourself ([pnpm](https://pnpm.io/) is required):

Then go to the project where you are using Vitest and run `pnpm link --global vitest` (or the package manager that you used to link `vitest` globally).

If you have questions or need help, reach out to the community at [Discord](https://chat.vitest.dev) and [GitHub Discussions](https://github.com/vitest-dev/vitest/discussions).

---
url: /guide/ide.md
---

**Examples:**

Example 1 (unknown):
```unknown

```

Example 2 (unknown):
```unknown

```

Example 3 (unknown):
```unknown

```

Example 4 (unknown):
```unknown
:::

:::tip
Vitest requires Vite >=v6.0.0 and Node >=v20.0.0
:::

It is recommended that you install a copy of `vitest` in your `package.json`, using one of the methods listed above. However, if you would prefer to run `vitest` directly, you can use `npx vitest` (the `npx` tool comes with npm and Node.js).

The `npx` tool will execute the specified command. By default, `npx` will first check if the command exists in the local project's binaries. If it is not found there, `npx` will look in the system's `$PATH` and execute it if found. If the command is not found in either location, `npx` will install it in a temporary location prior to execution.

## Writing Tests

As an example, we will write a simple test that verifies the output of a function that adds two numbers.
```

---

## Configuring Preview

**URL:** llms-txt#configuring-preview

**Contents:**
- Differences with Other Providers

::: warning
The `preview` provider's main functionality is to show tests in a real browser environment. However, it does not support advanced browser automation features like multiple browser instances or headless mode. For more complex scenarios, consider using [Playwright](/guide/browser/playwright) or [WebdriverIO](/guide/browser/webdriverio).
:::

To see your tests running in a real browser, you need to install the [`@vitest/browser-preview`](https://www.npmjs.com/package/@vitest/browser-preview) npm package and specify its `preview` export in the `test.browser.provider` property of your config:

This will open a new browser window using your default browser to run the tests. You can configure which browser to use by setting the `browser` property in the `instances` array. Vitest will try to open that browser automatically, but it might not work in some environments. In that case, you can manually open the provided URL in your desired browser.

## Differences with Other Providers

The preview provider has some limitations compared to other providers like [Playwright](/guide/browser/playwright) or [WebdriverIO](/guide/browser/webdriverio):

* It does not support headless mode; the browser window will always be visible.
* It does not support multiple instances of the same browser; each instance must use a different browser.
* It does not support advanced browser capabilities or options; you can only specify the browser name.
* It does not support CDP (Chrome DevTools Protocol) commands or other low-level browser interactions. Unlike Playwright or WebdriverIO, the [`userEvent`](/guide/browser/interactivity-api) API is just re-exported from [`@testing-library/user-event`](https://www.npmjs.com/package/@testing-library/user-event) and does not have any special integration with the browser.

---
url: /config.md
---

---

## Migration Guide

**URL:** llms-txt#migration-guide

**Contents:**
- Migrating to Vitest 4.0 {#vitest-4}
  - V8 Code Coverage Major Changes
  - Removed options `coverage.all` and `coverage.extensions`
  - `spyOn` and `fn` Support Constructors
  - Changes to Mocking
  - Standalone mode with filename filter

## Migrating to Vitest 4.0 {#vitest-4}

### V8 Code Coverage Major Changes

Vitest's V8 code coverage provider is now using more accurate coverage result remapping logic.
It is expected for users to see changes in their coverage reports when updating from Vitest v3.

In the past Vitest used [`v8-to-istanbul`](https://github.com/istanbuljs/v8-to-istanbul) for remapping V8 coverage results into your source files.
This method wasn't very accurate and provided plenty of false positives in the coverage reports.
We've now developed a new package that utilizes AST based analysis for the V8 coverage.
This allows V8 reports to be as accurate as `@vitest/coverage-istanbul` reports.

* Coverage ignore hints have updated. See [Coverage | Ignoring Code](/guide/coverage.html#ignoring-code).
* `coverage.ignoreEmptyLines` is removed. Lines without runtime code are no longer included in reports.
* `coverage.experimentalAstAwareRemapping` is removed. This option is now enabled by default, and is the only supported remapping method.
* `coverage.ignoreClassMethods` is now supported by V8 provider too.

### Removed options `coverage.all` and `coverage.extensions`

In previous versions Vitest included all uncovered files in coverage report by default.
This was due to `coverage.all` defaulting to `true`, and `coverage.include` defaulting to `**`.
These default values were chosen for a good reason - it is impossible for testing tools to guess where users are storing their source files.

This ended up having Vitest's coverage providers processing unexpected files, like minified Javascript, leading to slow/stuck coverage report generations.
In Vitest v4 we have removed `coverage.all` completely and **defaulted to include only covered files in the report**.

When upgrading to v4 it is recommended to define `coverage.include` in your configuration, and then start applying simple `coverage.exclude` patterns if needed.

If `coverage.include` is not defined, coverage report will include only files that were loaded during test run:

* [Including and excluding files from coverage report](/guide/coverage.html#including-and-excluding-files-from-coverage-report) for examples
* [Profiling Test Performance | Code coverage](/guide/profiling-test-performance.html#code-coverage) for tips about debugging coverage generation

### `spyOn` and `fn` Support Constructors

Previously, if you tried to spy on a constructor with `vi.spyOn`, you would get an error like `Constructor <name> requires 'new'`. Since Vitest 4, all mocks called with a `new` keyword construct the instance instead of calling `mock.apply`. This means that the mock implementation has to use either the `function` or the `class` keyword in these cases:

Note that now if you provide an arrow function, you will get [`<anonymous> is not a constructor` error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_constructor) when the mock is called.

### Changes to Mocking

Alongside new features like supporting constructors, Vitest 4 creates mocks differently to address several module mocking issues that we received over the years. This release attempts to make module spies less confusing, especially when working with classes.

* `vi.fn().getMockName()` now returns `vi.fn()` by default instead of `spy`. This can affect snapshots with mocks - the name will be changed from `[MockFunction spy]` to `[MockFunction]`. Spies created with `vi.spyOn` will keep using the original name by default for better debugging experience
* `vi.restoreAllMocks` no longer resets the state of spies and only restores spies created manually with `vi.spyOn`, automocks are no longer affected by this function (this also affects the config option [`restoreMocks`](/config/#restoremocks)). Note that `.mockRestore` will still reset the mock implementation and clear the state
* Calling `vi.spyOn` on a mock now returns the same mock
* `mock.settledResults` are now populated immediately on function invocation with an `'incomplete'` result. When the promise is finished, the type is changed according to the result.
* Automocked instance methods are now properly isolated, but share a state with the prototype. Overriding the prototype implementation will always affect instance methods unless the methods have a custom mock implementation of their own. Calling `.mockReset` on the mock also no longer breaks that inheritance.

* Automocked methods can no longer be restored, even with a manual `.mockRestore`. Automocked modules with `spy: true` will keep working as before
* Automocked getters no longer call the original getter. By default, automocked getters now return `undefined`. You can keep using `vi.spyOn(object, name, 'get')` to spy on a getter and change its implementation
* The mock `vi.fn(implementation).mockReset()` now correctly returns the mock implementation in `.getMockImplementation()`
* `vi.fn().mock.invocationCallOrder` now starts with `1`, like Jest does, instead of `0`

### Standalone mode with filename filter

To improve user experience, Vitest will now start running the matched files when [`--standalone`](/guide/cli#standalone) is used with filename filter.

**Examples:**

Example 1 (unknown):
```unknown
If `coverage.include` is not defined, coverage report will include only files that were loaded during test run:
```

Example 2 (unknown):
```unknown
See also new guides:

* [Including and excluding files from coverage report](/guide/coverage.html#including-and-excluding-files-from-coverage-report) for examples
* [Profiling Test Performance | Code coverage](/guide/profiling-test-performance.html#code-coverage) for tips about debugging coverage generation

### `spyOn` and `fn` Support Constructors

Previously, if you tried to spy on a constructor with `vi.spyOn`, you would get an error like `Constructor <name> requires 'new'`. Since Vitest 4, all mocks called with a `new` keyword construct the instance instead of calling `mock.apply`. This means that the mock implementation has to use either the `function` or the `class` keyword in these cases:
```

Example 3 (unknown):
```unknown
Note that now if you provide an arrow function, you will get [`<anonymous> is not a constructor` error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_constructor) when the mock is called.

### Changes to Mocking

Alongside new features like supporting constructors, Vitest 4 creates mocks differently to address several module mocking issues that we received over the years. This release attempts to make module spies less confusing, especially when working with classes.

* `vi.fn().getMockName()` now returns `vi.fn()` by default instead of `spy`. This can affect snapshots with mocks - the name will be changed from `[MockFunction spy]` to `[MockFunction]`. Spies created with `vi.spyOn` will keep using the original name by default for better debugging experience
* `vi.restoreAllMocks` no longer resets the state of spies and only restores spies created manually with `vi.spyOn`, automocks are no longer affected by this function (this also affects the config option [`restoreMocks`](/config/#restoremocks)). Note that `.mockRestore` will still reset the mock implementation and clear the state
* Calling `vi.spyOn` on a mock now returns the same mock
* `mock.settledResults` are now populated immediately on function invocation with an `'incomplete'` result. When the promise is finished, the type is changed according to the result.
* Automocked instance methods are now properly isolated, but share a state with the prototype. Overriding the prototype implementation will always affect instance methods unless the methods have a custom mock implementation of their own. Calling `.mockReset` on the mock also no longer breaks that inheritance.
```

Example 4 (unknown):
```unknown
* Automocked methods can no longer be restored, even with a manual `.mockRestore`. Automocked modules with `spy: true` will keep working as before
* Automocked getters no longer call the original getter. By default, automocked getters now return `undefined`. You can keep using `vi.spyOn(object, name, 'get')` to spy on a getter and change its implementation
* The mock `vi.fn(implementation).mockReset()` now correctly returns the mock implementation in `.getMockImplementation()`
* `vi.fn().mock.invocationCallOrder` now starts with `1`, like Jest does, instead of `0`

### Standalone mode with filename filter

To improve user experience, Vitest will now start running the matched files when [`--standalone`](/guide/cli#standalone) is used with filename filter.
```

---
