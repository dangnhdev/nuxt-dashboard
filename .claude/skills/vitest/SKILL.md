---
name: vitest
description: Vitest unit testing framework. Use for writing and running tests, mocking, coverage, snapshots, and test configuration in Vite projects.
---

# Vitest Skill

Comprehensive assistance with Vitest development, generated from official documentation.

## When to Use This Skill

This skill should be triggered when:
- Setting up or configuring Vitest in a project
- Writing unit tests, integration tests, or browser tests
- Working with mocks, spies, or test doubles
- Configuring test coverage (v8 or istanbul)
- Creating snapshot tests
- Debugging test failures or performance issues
- Setting up test reporters (JUnit, JSON, HTML, TAP, etc.)
- Running tests in CI/CD pipelines
- Implementing concurrent or parallel test execution
- Working with Vitest's browser mode
- Creating custom reporters or test runners
- Troubleshooting test configuration issues

## Key Concepts

### Test Execution Modes
- **Watch Mode**: Default in development, automatically reruns tests on file changes
- **Run Mode**: Default in CI environments, runs tests once and exits
- **Browser Mode**: Runs tests in real browsers for accurate DOM testing

### Pool Types
Vitest runs tests in different execution environments:
- **`forks`** (default): Runs tests in separate child processes (best compatibility)
- **`threads`**: Uses worker threads (faster for large projects)
- **`vmThreads`**: VM contexts with worker threads
- **`browser`**: Runs tests in actual browser environments

### Test Isolation
- **Isolated** (default): Each test file runs in separate environment
- **Non-isolated** (`--no-isolate`): Faster but tests share environment
- **File Parallelism**: Tests run concurrently across multiple workers

## Quick Reference

### Common Patterns

#### 1. Basic Test Structure

```ts
import { describe, it, expect } from 'vitest'

describe('suite', () => {
  it('serial test', async () => {
    const result = 2 + 2
    expect(result).toBe(4)
  })
})
```

#### 2. Concurrent Tests

```ts
import { describe, it, expect } from 'vitest'

// Run individual tests in parallel
describe('suite', () => {
  it.concurrent('concurrent test 1', async ({ expect }) => {
    const result = await fetchUser(1)
    expect(result.id).toBe(1)
  })

  it.concurrent('concurrent test 2', async ({ expect }) => {
    const result = await fetchUser(2)
    expect(result.id).toBe(2)
  })
})
```

#### 3. Concurrent Suite (All Tests Run in Parallel)

```ts
import { describe, it, expect } from 'vitest'

// All tests within this suite run in parallel
describe.concurrent('suite', () => {
  it('concurrent test 1', async ({ expect }) => { /* ... */ })
  it('concurrent test 2', async ({ expect }) => { /* ... */ })
  it('concurrent test 3', async ({ expect }) => { /* ... */ })
})
```

#### 4. Snapshot Testing

```ts
import { expect, it } from 'vitest'

it('renders correctly', () => {
  const result = render()
  expect(result).toMatchSnapshot()
})
```

#### 5. Basic Configuration

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    reporters: ['verbose'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html']
    }
  }
})
```

#### 6. Multi-Project Configuration

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: 'unit',
          include: ['tests/**/*.test.ts'],
        }
      },
      {
        test: {
          name: 'browser',
          include: ['tests/**/*.browser.test.ts'],
          browser: {
            enabled: true,
            name: 'chromium',
          }
        }
      }
    ]
  }
})
```

#### 7. Running Tests (CLI)

```bash
# Run all tests
vitest

# Run in watch mode explicitly
vitest watch

# Run once and exit
vitest run

# Run with coverage
vitest --coverage

# Run specific test file
vitest path/to/test.ts

# Run with specific reporter
vitest --reporter=verbose
```

#### 8. Task Metadata (Advanced)

```ts
import { afterAll, test } from 'vitest'

afterAll((suite) => {
  suite.meta.done = true
})

test('custom', ({ task }) => {
  task.meta.custom = 'some-custom-handler'
})
```

#### 9. Filtering Tests by Pattern

```bash
# Run tests matching pattern
vitest run --grep="user authentication"

# Exclude tests matching pattern
vitest run --grep="user" --grep.invert="admin"
```

#### 10. Performance Optimization

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // Disable isolation for faster tests (if tests don't rely on side effects)
    isolate: false,

    // Use threads pool for better performance
    pool: 'threads',

    // Disable file parallelism if needed
    fileParallelism: false,
  }
})
```

## Reference Files

This skill includes comprehensive documentation in `references/`:

### **getting_started.md** - Getting Started
Foundation for Vitest beginners:
- Installation and setup instructions
- First test examples
- Configuring Vitest basics
- Watch mode vs run mode
- IDE integrations
- Environment variables

### **testing.md** - Testing Guide
Core testing concepts:
- Writing tests with `describe`, `it`, `expect`
- Snapshot testing
- Concurrent tests
- Test filtering and running
- Test context and annotations
- In-source testing

### **mocking.md** - Mocking Documentation
Everything about test doubles:
- Creating mocks and spies with `vi` object
- Mocking modules and dependencies
- Timer mocking (`vi.useFakeTimers`)
- DOM and browser API mocking
- Module mocking strategies

### **api.md** - API Reference
Complete API documentation:
- Test functions (`test`, `describe`, `it`, `bench`)
- Expect matchers and assertions
- Vi utilities for mocking
- Custom pool runners (advanced)
- Task metadata API
- Plugin system

### **config.md** - Configuration Guide
Vitest configuration options:
- Test configuration options
- Reporter configuration (default, verbose, tree, dot, junit, json, html, tap, blob, github-actions)
- Coverage configuration
- Browser mode configuration
- Custom reporters
- Multiple reporters setup

### **integration.md** - Integration Guide
Integration with tools and frameworks:
- Vite plugin integration
- UI framework testing (React, Vue, Svelte)
- TypeScript configuration
- CSS and asset handling
- Environment setup (jsdom, happy-dom, edge-runtime)

### **advanced.md** - Advanced Topics
Advanced features and use cases:
- Visual regression testing with browser mode
- Azure Playwright Testing integration
- Custom pool implementations
- GitHub Actions workflows
- Remote browser testing
- Advanced CI/CD patterns

### **other.md** - Other Features
Additional documentation:
- Debugging tests
- Parallelism and performance
- Sharding test suites
- WebdriverIO configuration
- Playwright integration
- Test projects

## Working with This Skill

### For Beginners
1. Start with **getting_started.md** for installation and basic concepts
2. Review **Quick Reference** examples above for common patterns
3. Read **testing.md** to understand test structure and assertions
4. Learn about **mocking.md** when you need to isolate dependencies

### For Intermediate Users
1. Explore **config.md** for advanced configuration options
2. Learn concurrent testing patterns for faster test execution
3. Set up coverage reporting for code quality metrics
4. Configure multiple reporters for CI/CD integration
5. Explore **integration.md** for framework-specific testing

### For Advanced Users
1. Review **advanced.md** for custom reporters and runners
2. Implement visual regression testing with browser mode
3. Optimize test performance with pool configuration and sharding
4. Create custom plugins using Vitest's plugin API
5. Set up advanced CI/CD workflows with sharding and blob reports

### Quick Navigation Tips
- **Need to write tests?** → Start with Quick Reference examples
- **Configuration issues?** → Check config.md
- **Mocking problems?** → See mocking.md
- **Performance slow?** → Read other.md (Parallelism & Improving Performance sections)
- **CI/CD setup?** → Check advanced.md and config.md (reporters section)
- **Browser testing?** → See advanced.md and integration.md

## Common Use Cases

### Running Different Test Types
```json
{
  "scripts": {
    "test": "vitest",
    "test:unit": "vitest run",
    "test:watch": "vitest watch",
    "test:coverage": "vitest --coverage",
    "test:ui": "vitest --ui"
  }
}
```

### Combining Multiple Reporters
```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    reporters: [
      'default',
      ['junit', { outputFile: './test-results/junit.xml' }],
      ['json', { outputFile: './test-results/results.json' }],
      'html'
    ]
  }
})
```

### CI/CD with Sharding
```bash
# Split tests across 4 machines and store results
vitest --shard=1/4 --reporter=blob
vitest --shard=2/4 --reporter=blob
vitest --shard=3/4 --reporter=blob
vitest --shard=4/4 --reporter=blob

# Merge all results and generate report
vitest --merge-reports --reporter=default --reporter=html
```

## Resources

### references/
Organized documentation extracted from official Vitest sources:
- Detailed explanations of all features
- Comprehensive code examples with proper syntax highlighting
- Links to original documentation
- Table of contents for quick navigation

### scripts/
Add helper scripts here for common automation tasks like:
- Test generation scripts
- Coverage threshold checks
- Custom test runners

### assets/
Add templates, boilerplate, or example projects:
- Test templates for different frameworks
- Configuration presets
- Example test suites

## Notes

- This skill was automatically generated from official Vitest documentation
- Reference files preserve the structure and examples from source docs
- Code examples include language detection for better syntax highlighting
- Quick reference patterns extracted from common usage in the docs
- All examples use Vitest's latest API conventions

## Performance Tips

1. **Use appropriate pool**: `forks` for compatibility, `threads` for speed
2. **Disable isolation when safe**: `--no-isolate` for faster non-isolated tests
3. **Limit file parallelism**: Adjust `maxWorkers` based on your CPU cores
4. **Use concurrent tests**: Mark independent tests with `.concurrent`
5. **Shard in CI**: Split tests across multiple machines with `--shard`
6. **Limit directory search**: Use `test.dir` to narrow down file search

## Troubleshooting

### Tests Running Slowly
- Check if isolation can be disabled (`--no-isolate`)
- Consider switching from `forks` to `threads` pool
- Use concurrent tests where applicable
- Check `maxWorkers` configuration

### Hanging Processes
- Use `hanging-process` reporter to debug
- Check for unclosed resources (database connections, timers)
- Ensure mocked timers are cleared

### False Positives/Negatives
- Use browser mode for accurate DOM testing
- Ensure test isolation is enabled
- Check for shared state between tests

## Updating

To refresh this skill with updated documentation:
1. Re-run the scraper with the same configuration
2. The skill will be rebuilt with the latest information
3. Review Quick Reference section for new examples
