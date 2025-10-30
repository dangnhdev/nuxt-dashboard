# Vitest - Advanced

**Pages:** 1

---

## ...browser setup

**URL:** llms-txt#...browser-setup

- name: Visual Regression Testing
  run: npm run test:visual
yaml [.github/workflows/update-screenshots.yml]
name: Update Visual Regression Screenshots

on:
  workflow_dispatch: # manual trigger only

env:
  AUTHOR_NAME: 'github-actions[bot]'
  AUTHOR_EMAIL: '41898282+github-actions[bot]@users.noreply.github.com'
  COMMIT_MESSAGE: |
    test: update visual regression screenshots

Co-authored-by: ${{ github.actor }} <${{ github.actor_id }}+${{ github.actor }}@users.noreply.github.com>

jobs:
  update-screenshots:
    runs-on: ubuntu-24.04

# safety first: don't run on main
    if: github.ref_name != github.event.repository.default_branch

# one at a time per branch
    concurrency:
      group: visual-regression-screenshots@${{ github.ref_name }}
      cancel-in-progress: true

permissions:
      contents: write # needs to push changes

steps:
      - name: Checkout selected branch
        uses: actions/checkout@v4
        with:
          ref: ${{ github.ref_name }}
          # use PAT if triggering other workflows
          # token: ${{ secrets.GITHUB_TOKEN }}

- name: Configure Git
        run: |
          git config --global user.name "${{ env.AUTHOR_NAME }}"
          git config --global user.email "${{ env.AUTHOR_EMAIL }}"

# your setup steps here (node, pnpm, whatever)
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 24

- name: Install dependencies
        run: npm ci

- name: Install Playwright Browsers
        run: npx --no playwright install --with-deps --only-shell

# the magic happens below 🪄
      - name: Update Visual Regression Screenshots
        run: npm run test:visual --update

# check what changed
      - name: Check for changes
        id: check_changes
        run: |
          CHANGED_FILES=$(git status --porcelain | awk '{print $2}')
          if [ "${CHANGED_FILES:+x}" ]; then
            echo "changes=true" >> $GITHUB_OUTPUT
            echo "Changes detected"

# save the list for the summary
            echo "changed_files<<EOF" >> $GITHUB_OUTPUT
            echo "$CHANGED_FILES" >> $GITHUB_OUTPUT
            echo "EOF" >> $GITHUB_OUTPUT
            echo "changed_count=$(echo "$CHANGED_FILES" | wc -l)" >> $GITHUB_OUTPUT
          else
            echo "changes=false" >> $GITHUB_OUTPUT
            echo "No changes detected"
          fi

# commit if there are changes
      - name: Commit changes
        if: steps.check_changes.outputs.changes == 'true'
        run: |
          git add -A
          git commit -m "${{ env.COMMIT_MESSAGE }}"

- name: Push changes
        if: steps.check_changes.outputs.changes == 'true'
        run: git push origin ${{ github.ref_name }}

# pretty summary for humans
      - name: Summary
        run: |
          if [[ "${{ steps.check_changes.outputs.changes }}" == "true" ]]; then
            echo "### 📸 Visual Regression Screenshots Updated" >> $GITHUB_STEP_SUMMARY
            echo "" >> $GITHUB_STEP_SUMMARY
            echo "Successfully updated **${{ steps.check_changes.outputs.changed_count }}** screenshot(s) on \`${{ github.ref_name }}\`" >> $GITHUB_STEP_SUMMARY
            echo "" >> $GITHUB_STEP_SUMMARY
            echo "#### Changed Files:" >> $GITHUB_STEP_SUMMARY
            echo "\`\`\`" >> $GITHUB_STEP_SUMMARY
            echo "${{ steps.check_changes.outputs.changed_files }}" >> $GITHUB_STEP_SUMMARY
            echo "\`\`\`" >> $GITHUB_STEP_SUMMARY
            echo "" >> $GITHUB_STEP_SUMMARY
            echo "✅ The updated screenshots have been committed and pushed. Your visual regression baseline is now up to date!" >> $GITHUB_STEP_SUMMARY
          else
            echo "### ℹ️ No Screenshot Updates Required" >> $GITHUB_STEP_SUMMARY
            echo "" >> $GITHUB_STEP_SUMMARY
            echo "The visual regression test command ran successfully but no screenshots needed updating." >> $GITHUB_STEP_SUMMARY
            echo "" >> $GITHUB_STEP_SUMMARY
            echo "All screenshots are already up to date! 🎉" >> $GITHUB_STEP_SUMMARY
          fi
ts [vitest.config.ts]
import { env } from 'node:process'
import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'

export default defineConfig({
  // ...global Vite config
  tests: {
    // ...global Vitest config
    projects: [
      {
        extends: true,
        test: {
          name: 'unit',
          include: ['tests/**/*.test.ts'],
          // regular config, can use local browsers
        },
      },
      {
        extends: true,
        test: {
          name: 'visual',
          // or you could use a different suffix, e.g.,: `tests/**/*.visual.ts?(x)`
          include: ['visual-regression-tests/**/*.test.ts?(x)'],
          browser: {
            enabled: true,
            provider: playwright({
              connectOptions: {
                wsEndpoint: `${env.PLAYWRIGHT_SERVICE_URL}?${new URLSearchParams({
                  'api-version': '2025-09-01',
                  os: 'linux', // always use Linux for consistency
                  // helps identifying runs in the service's dashboard
                  runName: `Vitest ${env.CI ? 'CI' : 'local'} run @${new Date().toISOString()}`,
                })}`,
                exposeNetwork: '<loopback>',
                headers: {
                  Authorization: `Bearer ${env.PLAYWRIGHT_SERVICE_ACCESS_TOKEN}`,
                },
                timeout: 30_000,
              }
            }),
            headless: true,
            instances: [
              {
                browser: 'chromium',
                viewport: { width: 2560, height: 1440 },
              },
            ],
          },
        },
      },
    ],
  },
})
json [package.json]
{
  "scripts": {
    "test:visual": "vitest --project visual",
    "test:unit": "vitest --project unit"
  }
}
bash

**Examples:**

Example 1 (unknown):
```unknown
#### The Update Workflow

Here's where it gets interesting. You don't want to update screenshots on every
PR automatically *(chaos!)*. Instead, create a
manually-triggered workflow that developers can run when they intentionally
change the UI.

The workflow below:

* Only runs on feature branches (never on main)
* Credits the person who triggered it as co-author
* Prevents concurrent runs on the same branch
* Shows a nice summary:
  * **When screenshots changed**, it lists what changed

  * **When nothing changed**, well, it tells you that too

::: tip
This is just one approach. Some teams prefer PR comments (`/update-screenshots`),
others use labels. Adjust it to fit your workflow!

The important part is having a controlled way to update baselines.
:::
```

Example 2 (unknown):
```unknown
\=== Azure App Testing

Your tests stay local, only the browsers run in the cloud. It's Playwright's
remote browser feature, but Microsoft handles all the infrastructure.

#### Organizing Your Tests

Keep visual tests separate to control costs. Only tests that actually take
screenshots should use the service.

The cleanest approach is using [Test Projects](/guide/projects):
```

Example 3 (unknown):
```unknown
Follow the [official guide to create a Playwright Workspace](https://learn.microsoft.com/en-us/azure/app-testing/playwright-workspaces/quickstart-run-end-to-end-tests?tabs=playwrightcli\&pivots=playwright-test-runner#create-a-workspace).

Once your workspace is created, configure Vitest to use it:

1. **Set the endpoint URL**: following the [official guide](https://learn.microsoft.com/en-us/azure/app-testing/playwright-workspaces/quickstart-run-end-to-end-tests?tabs=playwrightcli\&pivots=playwright-test-runner#configure-the-browser-endpoint), retrieve the URL and set it as the `PLAYWRIGHT_SERVICE_URL` environment variable.
2. **Enable token authentication**: [enable access tokens](https://learn.microsoft.com/en-us/azure/app-testing/playwright-workspaces/how-to-manage-authentication?pivots=playwright-test-runner#enable-authentication-using-access-tokens) for your workspace, then [generate a token](https://learn.microsoft.com/en-us/azure/app-testing/playwright-workspaces/how-to-manage-access-tokens#generate-a-workspace-access-token) and set it as the `PLAYWRIGHT_SERVICE_ACCESS_TOKEN` environment variable.

::: danger Keep that Token Secret!
Never commit `PLAYWRIGHT_SERVICE_ACCESS_TOKEN` to your repository. Anyone with
the token can rack up your bill. Use environment variables locally and secrets
in CI.
:::

Then split your `test` script like this:
```

Example 4 (unknown):
```unknown
#### Running Tests
```

---
