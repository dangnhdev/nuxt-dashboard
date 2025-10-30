# Vitest - Other

**Pages:** 11

---

## Command Line Interface

**URL:** llms-txt#command-line-interface

**Contents:**
- Commands
  - `vitest`
  - `vitest run`
  - `vitest watch`
  - `vitest dev`
  - `vitest related`
  - `vitest bench`
  - `vitest init`
  - `vitest list`
- Options

Start Vitest in the current directory. Will enter the watch mode in development environment and run mode in CI (or non-interactive terminal) automatically.

You can pass an additional argument as the filter of the test files to run. For example:

Will run only the test file that contains `foobar` in their paths. This filter only checks inclusion and doesn't support regexp or glob patterns (unless your terminal processes it before Vitest receives the filter).

Since Vitest 3, you can also specify the test by filename and line number:

::: warning
Note that Vitest requires the full filename for this feature to work. It can be relative to the current working directory or an absolute file path.

At the moment Vitest also doesn't support ranges:

Perform a single run without watch mode.

Run all test suites but watch for changes and rerun tests when they change. Same as calling `vitest` without an argument. Will fallback to `vitest run` in CI or when stdin is not a TTY (non-interactive environment).

Alias to `vitest watch`.

Run only tests that cover a list of source files. Works with static imports (e.g., `import('./index.js')` or `import index from './index.js`), but not the dynamic ones (e.g., `import(filepath)`). All files should be relative to root folder.

Useful to run with [`lint-staged`](https://github.com/okonet/lint-staged) or with your CI setup.

::: tip
Don't forget that Vitest runs with enabled watch mode by default. If you are using tools like `lint-staged`, you  should also pass `--run` option, so that command can exit normally.

Run only [benchmark](/guide/features.html#benchmarking) tests, which compare performance results.

`vitest init <name>` can be used to setup project configuration. At the moment, it only supports [`browser`](/guide/browser/) value:

`vitest list` command inherits all `vitest` options to print the list of all matching tests. This command ignores `reporters` option. By default, it will print the names of all tests that matched the file filter and name pattern:

You can pass down `--json` flag to print tests in JSON format or save it in a separate file:

If `--json` flag doesn't receive a value, it will output the JSON into stdout.

You also can pass down `--filesOnly` flag to print the test files only:

::: tip
Vitest supports both camel case and kebab case for CLI arguments. For example, `--passWithNoTests` and `--pass-with-no-tests` will both work (`--no-color` and `--inspect-brk` are the exceptions).

Vitest also supports different ways of specifying the value: `--reporter dot` and `--reporter=dot` are both valid.

If option supports an array of values, you need to pass the option multiple times:

Boolean options can be negated with `no-` prefix. Specifying the value as `false` also works:

* **Type**: `boolean | string`
* **Default**: false

Run tests only against changed files. If no value is provided, it will run tests against uncommitted changes (including staged and unstaged).

To run tests against changes made in the last commit, you can use `--changed HEAD~1`. You can also pass commit hash (e.g. `--changed 09a9920`) or branch name (e.g. `--changed origin/develop`).

When used with code coverage the report will contain only the files that were related to the changes.

If paired with the [`forceRerunTriggers`](/config/#forcereruntriggers) config option it will run the whole test suite if at least one of the files listed in the `forceRerunTriggers` list changes. By default, changes to the Vitest config file and `package.json` will always rerun the whole suite.

* **Type**: `string`
* **Default**: disabled

Test suite shard to execute in a format of `<index>`/`<count>`, where

* `count` is a positive integer, count of divided parts
* `index` is a positive integer, index of divided part

This command will divide all tests into `count` equal parts, and will run only those that happen to be in an `index` part. For example, to split your tests suite into three parts, use this:

:::warning
You cannot use this option with `--watch` enabled (enabled in dev by default).
:::

::: tip
If `--reporter=blob` is used without an output file, the default path will include the current shard config to avoid collisions with other Vitest processes.
:::

* **Type:** `boolean | string`

Merges every blob report located in the specified folder (`.vitest-reports` by default). You can use any reporters with this command (except [`blob`](/guide/reporters#blob-reporter)):

[cac's dot notation]: https://github.com/cacjs/cac#dot-nested-options

---
url: /guide/browser/commands.md
---

**Examples:**

Example 1 (bash):
```bash
vitest foobar
```

Example 2 (bash):
```bash
$ vitest basic/foo.test.ts:10
```

Example 3 (bash):
```bash
$ vitest basic/foo.js:10 # ✅
$ vitest ./basic/foo.js:10 # ✅
$ vitest /users/project/basic/foo.js:10 # ✅
$ vitest foo:10 # ❌
$ vitest ./basic/foo:10 # ❌
```

Example 4 (bash):
```bash
$ vitest basic/foo.test.ts:10, basic/foo.test.ts:25 # ✅
$ vitest basic/foo.test.ts:10-25 # ❌
```

---

## change a branch and compare against main

**URL:** llms-txt#change-a-branch-and-compare-against-main

**Contents:**
  - alias
  - globals
  - environment
  - environmentOptions
  - update
  - watch
  - watchTriggerPatterns 3.2.0 {#watchtriggerpatterns}
  - root
  - dir
  - reporters

git checkout feature
vitest bench --compare main.json
ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
  },
})
json [tsconfig.json]
{
  "compilerOptions": {
    "types": ["vitest/globals"]
  }
}
json [tsconfig.json]
{
  "compilerOptions": {
    "typeRoots": ["./types", "./node_modules/@types", "./node_modules"],
    "types": ["vitest/globals"]
  }
}
ts [vitest.config.js]
import { defineConfig } from 'vitest/config'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['vitest'],
      dts: true, // generate TypeScript declaration
    }),
  ],
})
js
/**
 * @vitest-environment jsdom
 */

test('use jsdom in this test file', () => {
  const element = document.createElement('div')
  expect(element).not.toBeNull()
})
js
// @vitest-environment happy-dom

test('use happy-dom in this test file', () => {
  const element = document.createElement('div')
  expect(element).not.toBeNull()
})
js
/**
 * @jest-environment jsdom
 */

test('use jsdom in this test file', () => {
  const element = document.createElement('div')
  expect(element).not.toBeNull()
})
ts [environment.js]
import type { Environment } from 'vitest'

export default <Environment>{
  name: 'custom',
  viteEnvironment: 'ssr',
  setup() {
    // custom setup
    return {
      teardown() {
        // called after all tests with this env have been run
      }
    }
  }
}
json [tsconfig.json]
{
  "compilerOptions": {
    "types": ["vitest/jsdom"]
  }
}
ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    watchTriggerPatterns: [
      {
        pattern: /^src\/(mailers|templates)\/(.*)\.(ts|html|txt)$/,
        testsToRun: (id, match) => {
          // relative to the root value
          return `./api/tests/mailers/${match[2]}.test.ts`
        },
      },
    ],
  },
})
ts
try {
  fs.writeFileSync('/doesnt exist')
}
catch (err) {
  console.log(err instanceof Error) // false
}
ts
import { config } from '@some-testing-lib'

if (!globalThis.defined) {
  config.plugins = [myCoolPlugin]
  computeHeavyThing()
  globalThis.defined = true
}

// hooks are reset before each suite
afterEach(() => {
  cleanup()
})

globalThis.resetBeforeEachTest = true
ts [vitest.config.js]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    provide: {
      API_KEY: '123',
    },
  },
})
ts [api.test.js]
import { expect, inject, test } from 'vitest'

test('api key is defined', () => {
  expect(inject('API_KEY')).toBe('123')
})
ts [vitest.shims.d.ts]
declare module 'vitest' {
  export interface ProvidedContext {
    API_KEY: string
  }
}

// mark this file as a module so augmentation works correctly
export {}
ts [example.test.js]
import { inject } from 'vitest'

inject('wsPort') === 3000
ts [globalSetup.ts <Version>3.0.0</Version>]
import type { TestProject } from 'vitest/node'

export default function setup(project: TestProject) {
  project.provide('wsPort', 3000)
}

declare module 'vitest' {
  export interface ProvidedContext {
    wsPort: number
  }
}
ts [globalSetup.ts <Version>2.0.0</Version>]
import type { GlobalSetupContext } from 'vitest/node'

export default function setup({ provide }: GlobalSetupContext) {
  provide('wsPort', 3000)
}

declare module 'vitest' {
  export interface ProvidedContext {
    wsPort: number
  }
}
ts [globalSetup.ts]
import type { TestProject } from 'vitest/node'

export default function setup(project: TestProject) {
  project.onTestsRerun(async () => {
    await restartDb()
  })
}
ts
test('execute a script', async () => {
  // Vitest cannot rerun this test, if content of `dist/index.js` changes
  await execa('node', ['dist/index.js'])
})
sh
npx vitest --coverage.enabled --coverage.provider=istanbul
ts
  {
    reporter: [
      ['lcov', { 'projectRoot': './src' }],
      ['json', { 'file': 'coverage.json' }],
      ['text']
    ]
  }
  ts
  {
    reporter: [
      // Specify reporter using name of the NPM package
      '@vitest/custom-coverage-reporter',
      ['@vitest/custom-coverage-reporter', { someOption: true }],

// Specify reporter using local path
      '/absolute/path/to/custom-reporter.cjs',
      ['/absolute/path/to/custom-reporter.cjs', { someOption: true }],
    ]
  }
ts
{
  coverage: {
    thresholds: {
      // Requires 90% function coverage
      functions: 90,

// Require that no more than 10 lines are uncovered
      lines: -10,
    }
  }
}
ts
{
  coverage: {
    thresholds: {
      // Update thresholds without decimals
      autoUpdate: (newThreshold) => Math.floor(newThreshold),

// 95.85 -> 95
      functions: 95,
    }
  }
}
ts
{
  coverage: {
    thresholds: {
      // Thresholds for all files
      functions: 95,
      branches: 70,

// Thresholds for matching glob pattern
      'src/utils/**.ts': {
        statements: 95,
        functions: 90,
        branches: 85,
        lines: 80,
      },

// Files matching this pattern will only have lines thresholds set.
      // Global thresholds are not inherited.
      '**/math.ts': {
        lines: 100,
      }
    }
  }
}
ts
{
  coverage: {
    thresholds: {
      // Thresholds for all files
      functions: 95,
      branches: 70,

// Thresholds for matching glob pattern
      'src/utils/**.ts': { 100: true },
      '**/math.ts': { 100: true }
    }
  }
}
ts
{
  statements?: [number, number],
  functions?: [number, number],
  branches?: [number, number],
  lines?: [number, number]
}
ts
{
  statements: [50, 80],
  functions: [50, 80],
  branches: [50, 80],
  lines: [50, 80]
}
js
import { expect, test } from 'vitest'

// run
test('OnlyRunThis', () => {
  expect(true).toBe(true)
})

// skipped
test('doNotRun', () => {
  expect(true).toBe(true)
})
ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    resolveSnapshotPath: (testPath, snapExtension) => testPath + snapExtension,
  },
})
ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  cacheDir: 'custom-folder/.vitest'
})
ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  cacheDir: process.env.VITEST ? 'custom-folder/.vitest' : undefined
})
sh
npx vitest --sequence.shuffle --sequence.seed=1000
ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: 'slow',
          sequence: {
            groupOrder: 0,
          },
        },
      },
      {
        test: {
          name: 'fast',
          sequence: {
            groupOrder: 0,
          },
        },
      },
      {
        test: {
          name: 'flaky',
          sequence: {
            groupOrder: 1,
          },
        },
      },
    ],
  },
})

0. slow  |
          |> running together
 0. fast  |

1. flaky |> runs after slow and fast alone
ts
function onConsoleLog(
  log: string,
  type: 'stdout' | 'stderr',
  entity: TestModule | TestSuite | TestCase | undefined,
): boolean | void
ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    onConsoleLog(log: string, type: 'stdout' | 'stderr'): boolean | void {
      return !(log === 'message from third party library' && type === 'stdout')
    },
  },
})
ts
import type { ParsedStack } from 'vitest'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    onStackTrace(error: Error, { file }: ParsedStack): boolean | void {
      // If we've encountered a ReferenceError, show the whole stack.
      if (error.name === 'ReferenceError') {
        return
      }

// Reject all frames from third party libraries.
      if (file.includes('node_modules')) {
        return false
      }
    },
  },
})
ts
import type { ParsedStack } from 'vitest'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    onUnhandledError(error): boolean | void {
      // Ignore all errors with the name "MySpecialError".
      if (error.name === 'MySpecialError') {
        return false
      }
    },
  },
})
ts
import { defineConfig } from 'vitest/config'
import c from 'picocolors'

export default defineConfig({
  test: {
    diff: {
      aIndicator: c.bold('--'),
      bIndicator: c.bold('++'),
      omitAnnotationLines: true,
    },
  },
})
ts [vitest.config.js]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    diff: './vitest.diff.ts',
  },
})
ts [vitest.diff.ts]
import type { DiffOptions } from 'vitest'
import c from 'picocolors'

export default {
  aIndicator: c.bold('--'),
  bIndicator: c.bold('++'),
  omitAnnotationLines: true,
} satisfies DiffOptions
ts
export interface SnapshotEnvironment {
  getVersion: () => string
  getHeader: () => string
  resolvePath: (filepath: string) => Promise<string>
  resolveRawPath: (testPath: string, rawPath: string) => Promise<string>
  saveSnapshotFile: (filepath: string, snapshot: string) => Promise<void>
  readSnapshotFile: (filepath: string) => Promise<string | null>
  removeSnapshotFile: (filepath: string) => Promise<void>
}
```

You can extend default `VitestSnapshotEnvironment` from `vitest/snapshot` entry point if you need to overwrite only a part of the API.

::: warning
This is a low-level option and should be used only for advanced cases where you don't have access to default Node.js APIs.

If you just need to configure snapshots feature, use [`snapshotFormat`](#snapshotformat) or [`resolveSnapshotPath`](#resolvesnapshotpath) options.
:::

* **Type:** `Partial<NodeJS.ProcessEnv>`

Environment variables available on `process.env` and `import.meta.env` during tests. These variables will not be available in the main process (in `globalSetup`, for example).

* **Type:** `ExpectOptions`

#### expect.requireAssertions

* **Type:** `boolean`
* **Default:** `false`

The same as calling [`expect.hasAssertions()`](/api/expect#expect-hasassertions) at the start of every test. This makes sure that no test will pass accidentally.

::: tip
This only works with Vitest's `expect`. If you use `assert` or `.should` assertions, they will not count, and your test will fail due to the lack of expect assertions.

You can change the value of this by calling `vi.setConfig({ expect: { requireAssertions: false } })`. The config will be applied to every subsequent `expect` call until the `vi.resetConfig` is called manually.
:::

::: warning
When you run tests with `sequence.concurrent` and `expect.requireAssertions` set to `true`, you should use [local expect](/guide/test-context.html#expect) instead of the global one. Otherwise, this may cause false negatives in [some situations (#8469)](https://github.com/vitest-dev/vitest/issues/8469).
:::

Global configuration options for [`expect.poll`](/api/expect#poll). These are the same options you can pass down to `expect.poll(condition, options)`.

##### expect.poll.interval

* **Type:** `number`
* **Default:** `50`

Polling interval in milliseconds

##### expect.poll.timeout

* **Type:** `number`
* **Default:** `1000`

Polling timeout in milliseconds

### printConsoleTrace

* **Type:** `boolean`
* **Default:** `false`

Always print console traces when calling any `console` method. This is useful for debugging.

### attachmentsDir 3.2.0 {#attachmentsdir}

* **Type:** `string`
* **Default:** `'.vitest-attachments'`

Directory path for storing attachments created by [`context.annotate`](/guide/test-context#annotate) relative to the project root.

---
url: /guide/browser/webdriverio.md
---

**Examples:**

Example 1 (unknown):
```unknown
#### benchmark.compare {#benchmark-compare}

* **Type:** `string | undefined`
* **Default:** `undefined`

A file path to a previous benchmark result to compare against current runs.

### alias

* **Type:** `Record<string, string> | Array<{ find: string | RegExp, replacement: string, customResolver?: ResolverFunction | ResolverObject }>`

Define custom aliases when running inside tests. They will be merged with aliases from `resolve.alias`.

::: warning
Vitest uses Vite SSR primitives to run tests which has [certain pitfalls](https://vitejs.dev/guide/ssr.html#ssr-externals).

1. Aliases affect only modules imported directly with an `import` keyword by an [inlined](#server-deps-inline) module (all source code is inlined by default).
2. Vitest does not support aliasing `require` calls.
3. If you are aliasing an external dependency (e.g., `react` -> `preact`), you may want to alias the actual `node_modules` packages instead to make it work for externalized dependencies. Both [Yarn](https://classic.yarnpkg.com/en/docs/cli/add/#toc-yarn-add-alias) and [pnpm](https://pnpm.io/aliases/) support aliasing via the `npm:` prefix.
   :::

### globals

* **Type:** `boolean`
* **Default:** `false`
* **CLI:** `--globals`, `--globals=false`

By default, `vitest` does not provide global APIs for explicitness. If you prefer to use the APIs globally like Jest, you can pass the `--globals` option to CLI or add `globals: true` in the config.
```

Example 2 (unknown):
```unknown
To get TypeScript working with the global APIs, add `vitest/globals` to the `types` field in your `tsconfig.json`
```

Example 3 (unknown):
```unknown
If you have redefined your [`typeRoots`](https://www.typescriptlang.org/tsconfig/#typeRoots) to include more types in your compilation, you will have to add back the `node_modules` to make `vitest/globals` discoverable.
```

Example 4 (unknown):
```unknown
If you are already using [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) in your project, you can also use it directly for auto importing those APIs.
```

---

## Common Errors

**URL:** llms-txt#common-errors

**Contents:**
- Cannot find module './relative-path'
- Failed to terminate worker
- Segfaults and native code errors

## Cannot find module './relative-path'

If you receive an error that module cannot be found, it might mean several different things:

* 1. You misspelled the path. Make sure the path is correct.

* 2. It's possible that you rely on `baseUrl` in your `tsconfig.json`. Vite doesn't take into account `tsconfig.json` by default, so you might need to install [`vite-tsconfig-paths`](https://www.npmjs.com/package/vite-tsconfig-paths) yourself, if you rely on this behaviour.

Or rewrite your path to not be relative to root:

* 3. Make sure you don't have relative [aliases](/config/#alias). Vite treats them as relative to the file where the import is instead of the root.

## Failed to terminate worker

This error can happen when NodeJS's `fetch` is used with default [`pool: 'threads'`](/config/#threads). This issue is tracked on issue [Timeout abort can leave process(es) running in the background #3077](https://github.com/vitest-dev/vitest/issues/3077).

As work-around you can switch to [`pool: 'forks'`](/config/#forks) or [`pool: 'vmForks'`](/config/#vmforks).

## Segfaults and native code errors

Running [native NodeJS modules](https://nodejs.org/api/addons.html) in `pool: 'threads'` can run into cryptic errors coming from the native code.

* `Segmentation fault (core dumped)`
* `thread '<unnamed>' panicked at 'assertion failed`
* `Abort trap: 6`
* `internal error: entered unreachable code`

In these cases the native module is likely not built to be multi-thread safe. As work-around, you can switch to `pool: 'forks'` which runs the test cases in multiple `node:child_process` instead of multiple `node:worker_threads`.

---
url: /guide/comparisons.md
---

**Examples:**

Example 1 (ts):
```ts
import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()]
})
```

Example 2 (diff):
```diff
- import helpers from 'src/helpers'
+ import helpers from '../src/helpers'
```

Example 3 (ts):
```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    alias: {
      '@/': './src/', // [!code --]
      '@/': new URL('./src/', import.meta.url).pathname, // [!code ++]
    }
  }
})
```

Example 4 (unknown):
```unknown

```

---

## Multiple Setups

**URL:** llms-txt#multiple-setups

**Contents:**
- Several Browsers
- Different Setups
- Filtering

You can specify several different browser setups using the [`browser.instances`](/guide/browser/config#browser-instances) option.

The main advantage of using the `browser.instances` over the [test projects](/guide/projects) is improved caching. Every project will use the same Vite server meaning the file transform and [dependency pre-bundling](https://vite.dev/guide/dep-pre-bundling.html) has to happen only once.

You can use the `browser.instances` field to specify options for different browsers. For example, if you want to run the same tests in different browsers, the minimal configuration will look like this:

You can also specify different config options independently from the browser (although, the instances *can* also have `browser` fields):

In this example Vitest will run all tests in `chromium` browser, but execute a `'./ratio-setup.ts'` file only in the first configuration and inject a different `ratio` value depending on the [`provide` field](/config/#provide).

::: warning
Note that you need to define the custom `name` value if you are using the same browser name because Vitest will assign the `browser` as the project name otherwise.
:::

You can filter what projects to run with the [`--project` flag](/guide/cli#project). Vitest will automatically assign the browser name as a project name if it is not assigned manually. If the root config already has a name, Vitest will merge them: `custom` -> `custom (browser)`.

---
url: /guide/parallelism.md
---

**Examples:**

Example 1 (unknown):
```unknown
## Different Setups

You can also specify different config options independently from the browser (although, the instances *can* also have `browser` fields):

::: code-group
```

Example 2 (unknown):
```unknown

```

Example 3 (unknown):
```unknown
:::

In this example Vitest will run all tests in `chromium` browser, but execute a `'./ratio-setup.ts'` file only in the first configuration and inject a different `ratio` value depending on the [`provide` field](/config/#provide).

::: warning
Note that you need to define the custom `name` value if you are using the same browser name because Vitest will assign the `browser` as the project name otherwise.
:::

## Filtering

You can filter what projects to run with the [`--project` flag](/guide/cli#project). Vitest will automatically assign the browser name as a project name if it is not assigned manually. If the root config already has a name, Vitest will merge them: `custom` -> `custom (browser)`.
```

Example 4 (unknown):
```unknown
::: code-group
```

---

## Update screenshots

**URL:** llms-txt#update-screenshots

**Contents:**
  - So Which One?

npm run test:visual -- --update
yaml
env:
  PLAYWRIGHT_SERVICE_URL: ${{ vars.PLAYWRIGHT_SERVICE_URL }}
  PLAYWRIGHT_SERVICE_ACCESS_TOKEN: ${{ secrets.PLAYWRIGHT_SERVICE_ACCESS_TOKEN }}
```

Then run your tests like normal. The service handles the rest.

Both approaches work. The real question is what pain points matter most to your
team.

If you're already deep in the GitHub ecosystem, GitHub Actions is hard to beat.
Free for open source, works with any browser provider, and you control
everything.

The downside? That "works on my machine" conversation when someone generates
screenshots locally and they don't match CI expectations anymore.

A cloud service makes sense if developers need to run visual tests locally.

Some teams have designers checking their work or developers who prefer catching
issues before pushing. It allows skipping the push-wait-check-fix-push cycle.

Still on the fence? Start with GitHub Actions. You can always add a cloud
service later if local testing becomes a pain point.

---
url: /advanced/api/vitest.md
---

**Examples:**

Example 1 (unknown):
```unknown
The best part of this approach is that it just works:

* **Consistent screenshots**, everyone uses the same cloud browsers
* **Works locally**, developers can run and update visual tests on their machines
* **Pay for what you use**, only visual tests consume service minutes
* **No Docker or workflow setups needed**, nothing to manage or maintain

#### CI Setup

In your CI, add the secrets:
```

---

## Local development

**URL:** llms-txt#local-development

npm run test:unit    # free, runs locally
npm run test:visual  # uses cloud browsers

---

## To run in a single worker

**URL:** llms-txt#to-run-in-a-single-worker

vitest --inspect-brk --no-file-parallelism

---

## ...the rest of the workflow

**URL:** llms-txt#...the-rest-of-the-workflow

---

## save main branch's result

**URL:** llms-txt#save-main-branch's-result

git checkout main
vitest bench --outputJson main.json

---

## ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                  ^^^^^

**URL:** llms-txt#^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^----------------------------------^^^^^

---

## ---

**URL:** llms-txt#---

url: /advanced/api.md
---

---
