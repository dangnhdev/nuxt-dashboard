# Vitest - Config

**Pages:** 1

---

## Reporters

**URL:** llms-txt#reporters

**Contents:**
- Reporter Output
- Combining Reporters
- Built-in Reporters
  - Default Reporter
  - Verbose Reporter
  - Tree Reporter
  - Dot Reporter
  - JUnit Reporter
  - JSON Reporter
  - HTML Reporter

Vitest provides several built-in reporters to display test output in different formats, as well as the ability to use custom reporters. You can select different reporters either by using the `--reporter` command line option, or by including a `reporters` property in your [configuration file](/config/#reporters). If no reporter is specified, Vitest will use the `default` reporter as described below.

Using reporters via command line:

Using reporters via [`vitest.config.ts`](/config/):

Some reporters can be customized by passing additional options to them. Reporter specific options are described in sections below.

By default, Vitest's reporters will print their output to the terminal. When using the `json`, `html` or `junit` reporters, you can instead write your tests' output to a file by including an `outputFile` [configuration option](/config/#outputfile) either in your Vite configuration file or via CLI.

## Combining Reporters

You can use multiple reporters simultaneously to print your test results in different formats. For example:

The above example will both print the test results to the terminal in the default style and write them as JSON to the designated output file.

When using multiple reporters, it's also possible to designate multiple output files, as follows:

This example will write separate JSON and XML reports as well as printing a verbose report to the terminal.

## Built-in Reporters

By default (i.e. if no reporter is specified), Vitest will display summary of running tests and their status at the bottom. Once a suite passes, its status will be reported on top of the summary.

You can disable the summary by configuring the reporter:

Example output for tests in progress:

Final output after tests have finished:

If there is only one test file running, Vitest will output the full test tree of that file, similar to the [`tree`](#tree-reporter) reporter. The default reporter will also print the test tree if there is at least one failed test in the file.

The verbose reporter prints every test case once it is finished. It does not report suites or files separately. If `--includeTaskLocation` is enabled, it will also include the location of each test in the output. Similar to `default` reporter, you can disable the summary by configuring the reporter.

In addition to this, the `verbose` reporter prints test error messages right away. The full test error is reported when the test run is finished.

This is the only terminal reporter that reports [annotations](/guide/test-annotations) when the test doesn't fail.

An example with `--includeTaskLocation`:

The tree reporter is same as `default` reporter, but it also displays each individual test after the suite has finished. Similar to `default` reporter, you can disable the summary by configuring the reporter.

Example output for tests in progress with default `slowTestThreshold: 300`:

Example of final terminal output for a passing test suite:

Prints a single dot for each completed test to provide minimal output while still showing all tests that have run. Details are only provided for failed tests, along with the summary for the suite.

Example terminal output for a passing test suite:

Outputs a report of the test results in JUnit XML format. Can either be printed to the terminal or written to an XML file using the [`outputFile`](/config/#outputfile) configuration option.

Example of a JUnit XML report:

The outputted XML contains nested `testsuites` and `testcase` tags. These can also be customized via reporter options `suiteName` and `classnameTemplate`. `classnameTemplate` can either be a template string or a function.

The supported placeholders for the `classnameTemplate` option are:

* filename
* filepath

Generates a report of the test results in a JSON format compatible with Jest's `--json` option. Can either be printed to the terminal or written to a file using the [`outputFile`](/config/#outputfile) configuration option.

Example of a JSON report:

::: info
Since Vitest 3, the JSON reporter includes coverage information in `coverageMap` if coverage is enabled.
:::

Generates an HTML file to view test results through an interactive [GUI](/guide/ui). After the file has been generated, Vitest will keep a local development server running and provide a link to view the report in a browser.

Output file can be specified using the [`outputFile`](/config/#outputfile) configuration option. If no `outputFile` option is provided, a new HTML file will be created.

::: tip
This reporter requires installed [`@vitest/ui`](/guide/ui) package.
:::

Outputs a report following [Test Anything Protocol](https://testanything.org/) (TAP).

Example of a TAP report:

### TAP Flat Reporter

Outputs a TAP flat report. Like the `tap` reporter, test results are formatted to follow TAP standards, but test suites are formatted as a flat list rather than a nested hierarchy.

Example of a TAP flat report:

### Hanging Process Reporter

Displays a list of hanging processes, if any are preventing Vitest from exiting safely. The `hanging-process` reporter does not itself display test results, but can be used in conjunction with another reporter to monitor processes while tests run. Using this reporter can be resource-intensive, so should generally be reserved for debugging purposes in situations where Vitest consistently cannot exit the process.

### GitHub Actions Reporter {#github-actions-reporter}

Output [workflow commands](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-error-message)
to provide annotations for test failures. This reporter is automatically enabled with a [`default`](#default-reporter) reporter when `process.env.GITHUB_ACTIONS === 'true'`.

If you configure non-default reporters, you need to explicitly add `github-actions`.

You can customize the file paths that are printed in [GitHub's annotation command format](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/workflow-commands-for-github-actions) by using the `onWritePath` option. This is useful when running Vitest in a containerized environment, such as Docker, where the file paths may not match the paths in the GitHub Actions environment.

If you are using [Annotations API](/guide/test-annotations), the reporter will automatically inline them in the GitHub UI. You can disable this by setting `displayAnnotations` option to `false`:

Stores test results on the machine so they can be later merged using [`--merge-reports`](/guide/cli#merge-reports) command.
By default, stores all results in `.vitest-reports` folder, but can be overridden with `--outputFile` or `--outputFile.blob` flags.

We recommend using this reporter if you are running Vitest on different machines with the [`--shard`](/guide/cli#shard) flag.
All blob reports can be merged into any report by using `--merge-reports` command at the end of your CI pipeline:

::: tip
Both `--reporter=blob` and `--merge-reports` do not work in watch mode.
:::

You can use third-party custom reporters installed from NPM by specifying their package name in the reporters' option:

Additionally, you can define your own [custom reporters](/advanced/reporters) and use them by specifying their file path:

Custom reporters should implement the [Reporter interface](https://github.com/vitest-dev/vitest/blob/main/packages/vitest/src/node/types/reporter.ts).

---
url: /advanced/runner.md
---

**Examples:**

Example 1 (bash):
```bash
npx vitest --reporter=verbose
```

Example 2 (ts):
```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    reporters: ['verbose']
  },
})
```

Example 3 (ts):
```ts
export default defineConfig({
  test: {
    reporters: [
      'default',
      ['junit', { suiteName: 'UI tests' }]
    ],
  },
})
```

Example 4 (unknown):
```unknown

```

---
