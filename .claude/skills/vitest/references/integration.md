# Vitest - Integration

**Pages:** 3

---

## Debugging

**URL:** llms-txt#debugging

**Contents:**
- VS Code
  - Browser mode
- IntelliJ IDEA
- Node Inspector, e.g. Chrome DevTools

:::tip
When debugging tests you might want to use following options:

* [`--test-timeout=0`](/guide/cli#testtimeout) to prevent tests from timing out when stopping at breakpoints
* [`--no-file-parallelism`](/guide/cli#fileparallelism) to prevent test files from running parallel

Quick way to debug tests in VS Code is via `JavaScript Debug Terminal`. Open a new `JavaScript Debug Terminal` and run `npm run test` or `vitest` directly. *this works with any code run in Node, so will work with most JS testing frameworks*

![image](https://user-images.githubusercontent.com/5594348/212169143-72bf39ce-f763-48f5-822a-0c8b2e6a8484.png)

You can also add a dedicated launch configuration to debug a test file in VS Code:

Then in the debug tab, ensure 'Debug Current Test File' is selected. You can then open the test file you want to debug and press F5 to start debugging.

To debug [Vitest Browser Mode](/guide/browser/index.md), pass `--inspect` or `--inspect-brk` in CLI or define it in your Vitest configuration:

By default Vitest will use port `9229` as debugging port. You can overwrite it with by passing value in `--inspect-brk`:

Use following [VSCode Compound configuration](https://code.visualstudio.com/docs/editor/debugging#_compound-launch-configurations) for launching Vitest and attaching debugger in the browser:

Create a [vitest](https://www.jetbrains.com/help/idea/vitest.html#createRunConfigVitest) run configuration. Use the following settings to run all tests in debug mode:

Setting | Value
\--- | ---
Working directory | `/path/to/your-project-root`

Then run this configuration in debug mode. The IDE will stop at JS/TS breakpoints set in the editor.

## Node Inspector, e.g. Chrome DevTools

Vitest also supports debugging tests without IDEs. However this requires that tests are not run parallel. Use one of the following commands to launch Vitest.

**Examples:**

Example 1 (json):
```json
{
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Current Test File",
      "autoAttachChildProcesses": true,
      "skipFiles": ["<node_internals>/**", "**/node_modules/**"],
      "program": "${workspaceRoot}/node_modules/vitest/vitest.mjs",
      "args": ["run", "${relativeFile}"],
      "smartStep": true,
      "console": "integratedTerminal"
    }
  ]
}
```

Example 2 (unknown):
```unknown

```

Example 3 (unknown):
```unknown
:::

By default Vitest will use port `9229` as debugging port. You can overwrite it with by passing value in `--inspect-brk`:
```

Example 4 (unknown):
```unknown
Use following [VSCode Compound configuration](https://code.visualstudio.com/docs/editor/debugging#_compound-launch-configurations) for launching Vitest and attaching debugger in the browser:
```

---

## IDE Integrations

**URL:** llms-txt#ide-integrations

**Contents:**
- VS Code Official {#vs-code}
- JetBrains IDE
- Wallaby.js Paid (free for OSS)

## VS Code Official {#vs-code}

[GitHub](https://github.com/vitest-dev/vscode) | [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)

![](https://i.ibb.co/bJCbCf2/202203292020.gif)

WebStorm, PhpStorm, IntelliJ IDEA Ultimate, and other JetBrains IDEs come with built-in support for Vitest.

[WebStorm Help](https://www.jetbrains.com/help/webstorm/vitest.html) | [IntelliJ IDEA Ultimate Help](https://www.jetbrains.com/help/idea/vitest.html) | [PhpStorm Help](https://www.jetbrains.com/help/phpstorm/vitest.html)

![Vitest WebStorm Demo](https://raw.githubusercontent.com/kricact/WS-info/main/gifs/vitest-run-all.gif)

## Wallaby.js Paid (free for OSS)

Created by [The Wallaby Team](https://wallabyjs.com)

[Wallaby.js](https://wallabyjs.com) runs your Vitest tests immediately as you type, highlighting results in your IDE right next to your code.

[VS Code](https://marketplace.visualstudio.com/items?itemName=WallabyJs.wallaby-vscode) | [JetBrains](https://plugins.jetbrains.com/plugin/15742-wallaby) |
[Visual Studio](https://marketplace.visualstudio.com/items?itemName=vs-publisher-999439.WallabyjsforVisualStudio2022) | [Sublime Text](https://packagecontrol.io/packages/Wallaby)

![Wallaby VS Code Demo](https://wallabyjs.com/assets/img/vitest_demo.gif)

---
url: /guide/improving-performance.md
---

---

## Recipes

**URL:** llms-txt#recipes

**Contents:**
- Disabling isolation for specific test files only
- Parallel and Sequential test files

## Disabling isolation for specific test files only

You can speed up your test run by disabling isolation for specific set of files by specifying `isolate` per `projects` entries:

## Parallel and Sequential test files

You can split test files into parallel and sequential groups by using `projects` option:

---
url: /advanced/api/reporters.md
---

**Examples:**

Example 1 (unknown):
```unknown
## Parallel and Sequential test files

You can split test files into parallel and sequential groups by using `projects` option:
```

---
