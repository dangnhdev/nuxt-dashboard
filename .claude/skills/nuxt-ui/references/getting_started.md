# Nuxt-Ui - Getting Started

**Pages:** 3

---

## Installation

**URL:** llms-txt#installation

**Contents:**
- Setup
  - Add to a Vue project
  - Use a Vue template
- Options
  - `prefix`
  - `ui`
  - `colorMode`
  - `theme.colors`
  - `theme.transitions`
  - `theme.defaultVariants`

::callout
---
class: hidden
icon: i-logos-nuxt-icon
to: https://ui.nuxt.com/docs/getting-started/installation/nuxt
---
Looking for the **Nuxt** version?
::

### Add to a Vue project

::steps{level="4"}
#### Install the Nuxt UI package

:::code-group{sync="pm"}
  
  
  
  
  
  
  
  :::

:::warning
  If you're using **pnpm**, ensure that you either set [`shamefully-hoist=true`](https://pnpm.io/npmrc#shamefully-hoist){rel="nofollow"} in your `.npmrc` file or install `tailwindcss`, `vue-router` and `@unhead/vue` in your project's root directory.
  :::

#### Add the Nuxt UI Vite plugin in your `vite.config.ts`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

:::code-group{sync="vite"}
  
  
  
  
  
  :::

:::tip
  Nuxt UI registers `unplugin-auto-import` and `unplugin-vue-components`, which will generate `auto-imports.d.ts` and `components.d.ts` type declaration files. You will likely want to gitignore these, and add them to your `tsconfig`.
  
  
  
  
  :::

:::tip
  Internally, Nuxt UI relies on custom alias to resolve the theme types. If you're using TypeScript, you should add an alias to your `tsconfig` to enable auto-completion in your `vite.config.ts`.
  
  
  :::

#### Use the Nuxt UI Vue plugin

:::code-group{sync="vite"}
  
  
  
  
  
  :::

#### Import Tailwind CSS and Nuxt UI in your CSS

:::code-group{sync="vite"}
  
  
  
  
  
  :::

:::tip
  Import the CSS file in your entrypoint.
  
    ::::code-group{sync="vite"}
    
    
    
    
    
    ::::
  :::

:::callout{icon="i-simple-icons-visualstudiocode"}
  It's recommended to install the [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss){rel="nofollow"} extension for VSCode and add the following settings:
  
  
  :::

#### Wrap your app with App component

:::code-group{sync="vite"}
  
  
  
  
  
  :::

:::note{to="https://ui.nuxt.com/docs/components/app"}
  The `App` component sets up global config and is required for **Toast**, **Tooltip** and **programmatic overlays**.
  :::

#### Add the `isolate` class to your root container

:::code-group{sync="vite"}
  
  
  
  
  
  :::

:::note
  This ensures styles are scoped to your app and prevents issues with overlays and stacking contexts.
  :::
::

### Use a Vue template

To quickly get started with Nuxt UI, you can use the [starter template](https://github.com/nuxt-ui-templates/starter-vue){rel="nofollow"} by running:

You can also get started with one of our [official templates](https://ui.nuxt.com/templates):

::card-group
  :::card
  ---
  color: neutral
  icon: i-simple-icons-github
  target: _blank
  title: Starter
  to: https://github.com/nuxt-ui-templates/starter-vue
  ---
  A minimal template to get started with Nuxt UI.
  :::

:::card
  ---
  color: neutral
  icon: i-simple-icons-github
  target: _blank
  title: Dashboard
  to: https://github.com/nuxt-ui-templates/dashboard-vue
  variant: subtle
  ---
  A dashboard template with multi-column layout for building sophisticated admin interfaces.
  :::

:::card
  ---
  color: neutral
  icon: i-simple-icons-github
  target: _blank
  title: Starter Adonis
  to: https://github.com/nuxt-ui-templates/starter-adonis
  ---
  A minimal Nuxt UI template for AdonisJS using Inertia.js.
  :::

:::card
  ---
  color: neutral
  icon: i-simple-icons-github
  target: _blank
  title: Starter Laravel
  to: https://github.com/nuxt-ui-templates/starter-laravel
  ---
  A minimal Nuxt UI template for Laravel using Inertia.js.
  :::
::

You can use the `Use this template` button on GitHub to create a new repository or use the CLI:

You can customize Nuxt UI by providing options in your `vite.config.ts`.

Use the `prefix` option to change the prefix of the components.

- Default: `U`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

Use the `ui` option to provide configuration for Nuxt UI.

Use the `colorMode` option to enable or disable the color mode integration from `@vueuse/core`.

- Default: `true`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

Use the `theme.colors` option to define the dynamic color aliases used to generate components theme.

- Default: `['primary', 'secondary', 'success', 'info', 'warning', 'error']`{.inline,language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

::tip{to="https://ui.nuxt.com/docs/getting-started/theme/design-system#colors"}
Learn more about color customization and theming in the Theme section.
::

### `theme.transitions`

Use the `theme.transitions` option to enable or disable transitions on components.

- Default: `true`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

::note
This option adds the `transition-colors` class on components with hover or active states.
::

### `theme.defaultVariants`

Use the `theme.defaultVariants` option to override the default `color` and `size` variants for components.

- Default: `{ color: 'primary', size: 'md' }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

Use the `inertia` option to enable compatibility with [Inertia.js](https://inertiajs.com/){rel="nofollow"}.

::note
When using this option, `vue-router` is not required as Inertia.js provides its own routing system. The components that would normally use `RouterLink` will automatically use Inertia's `InertiaLink` component instead.
::

## Continuous releases

Nuxt UI uses [pkg.pr.new](https://github.com/stackblitz-labs/pkg.pr.new){rel="nofollow"} for continuous preview releases, providing developers with instant access to the latest features and bug fixes without waiting for official releases.

Automatic preview releases are created for all commits and PRs to the `v4` branch. Use them by replacing your package version with the specific commit hash or PR number.

::note
**pkg.pr.new** will automatically comment on PRs with the installation URL, making it easy to test changes.
::

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

  :::warning
  If you're using **pnpm**, ensure that you either set [`shamefully-hoist=true`](https://pnpm.io/npmrc#shamefully-hoist){rel="nofollow"} in your `.npmrc` file or install `tailwindcss`, `vue-router` and `@unhead/vue` in your project's root directory.
  :::

#### Add the Nuxt UI Vite plugin in your `vite.config.ts`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

  :::code-group{sync="vite"}
```

---

## Content

**URL:** llms-txt#content

**Contents:**
- Installation
- Configuration
- Components
- Typography
- Utils
  - `mapContentNavigation`

To get started, you can follow the official [guide](https://content.nuxt.com/docs/getting-started/installation){rel="nofollow"} or in summary:

::code-group{sync="pm"}

Then, add the `@nuxt/content` module in your `nuxt.config.ts`:

::caution
You need to register `@nuxt/content` after `@nuxt/ui` in the `modules` array, otherwise the prose components will not be available.
::

When using Tailwind CSS classes in your markdown content files, you need to ensure Tailwind can detect and generate the necessary utility classes. By default, Tailwind's automatic content detection might not pick up classes written in markdown files.

To fix this, use the [`@source` directive](https://tailwindcss.com/docs/functions-and-directives#source-directive){rel="nofollow"} in your CSS file to explicitly include your content directory:

- Tailwind scans all markdown files in your content directory
- Any utility classes used in your markdown (like `text-primary`) are included in the final CSS
- Dynamic classes in MDC components or custom Vue components within your content work properly

::tip
You can also use glob patterns to be more specific about which files to scan:

- `@source "../../../content/docs/**/*.md"` - Only scan markdown in the docs folder
- `@source "../../../content/**/*.{md,yml}"` - Include both markdown and YAML files
::

::note
---
target: _blank
to: https://tailwindcss.com/docs/detecting-classes-in-source-files
---
Learn more about Tailwind's automatic content detection and best practices for optimizing build performance.
::

You might be using `@nuxt/content` to build a documentation. To help you with that, we've built some components that you can use in your pages:

- a built-in full-text search command palette with [ContentSearch](https://ui.nuxt.com/docs/components/content-search), replacing the need for Algolia DocSearch
- a navigation tree with the [ContentNavigation](https://ui.nuxt.com/docs/components/content-navigation) component
- a sticky Table of Contents with the [ContentToc](https://ui.nuxt.com/docs/components/content-toc) component
- a prev / next navigation with the [ContentSurround](https://ui.nuxt.com/docs/components/content-surround) component

Nuxt UI provides its own custom implementations of all prose components for seamless integration with `@nuxt/content`. This approach ensures consistent styling, complete control over typography, and perfect alignment with the Nuxt UI design system so your content always looks and feels cohesive out of the box.

::note{to="https://ui.nuxt.com/docs/typography"}
Discover the full **Typography** system and explore all available prose components for rich, consistent content presentation.
::

### `mapContentNavigation`

This util will map the navigation from `queryCollectionNavigation` and transform it recursively into an array of objects that can be used by various components.

`mapContentNavigation(navigation, options?)`

- `navigation`: The navigation tree (array of ContentNavigationItem).
- `options` (optional):

- `labelAttribute`: (string) Which field to use as label (`title` by default)
  - `deep`: (number or undefined) Controls how many levels of navigation are included (`undefined` by default : includes all levels)

**Example:** As shown in the breadcrumb example below, it's commonly used to transform the navigation data into the correct format.

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
::

Then, add the `@nuxt/content` module in your `nuxt.config.ts`:
```

---

## Color Mode

**URL:** llms-txt#color-mode

**Contents:**
- Usage
  - Components
  - Configuration

::callout
---
class: hidden
icon: i-logos-nuxt-icon
to: https://ui.nuxt.com/docs/getting-started/integrations/color-mode/nuxt
---
Looking for the **Nuxt** version?
::

Nuxt UI automatically registers the [useDark](https://vueuse.org/core/useDark){rel="nofollow"} composable as a Vue plugin, so there's no additional setup required.

You can use the built-in [ColorModeAvatar](https://ui.nuxt.com/docs/components/color-mode-avatar) or [ColorModeImage](https://ui.nuxt.com/docs/components/color-mode-image) components to display different images for light and dark mode and the [ColorModeButton](https://ui.nuxt.com/docs/components/color-mode-button), [ColorModeSwitch](https://ui.nuxt.com/docs/components/color-mode-switch) or [ColorModeSelect](https://ui.nuxt.com/docs/components/color-mode-select) components to switch between light and dark modes.

You can also use the [useColorMode](https://vueuse.org/core/useColorMode){rel="nofollow"} composable to build your own custom component:

You can disable this plugin with the `colorMode` option in your `vite.config.ts`:

**Examples:**

Example 1 (unknown):
```unknown
### Configuration

You can disable this plugin with the `colorMode` option in your `vite.config.ts`:
```

---
