# Nuxt - Deployment

**Pages:** 8

---

## Nuxt 2 Static Improvements

**URL:** llms-txt#nuxt-2-static-improvements

**Contents:**
- Introduction
- Faster Static Deployments
- Generate time: cache vs full webpack build
- Using in your projects
  - Excluding Files from Cache
  - Module Authors
- How it works
  - Back to old school commands
- What to do next

With Nuxt version 2.13, the [full-static mode](https://nuxt.com/blog/going-full-static) has been introduced. In addition, a new command `nuxt export` was added to pre-render your pages without triggering a webpack build with the goal to separate the rendering and build process. The only issue was that most Nuxt users weren't able to unleash the full potential of the separation... &#x2A;*until now.**

## Faster Static Deployments

With v2.14, `nuxt generate` will **automagically skip webpack build step when no code has been changed** and use the previous build using cache. This will help to drastically improve static deployments time by avoiding unnecessary builds which is usually the most time-consuming part of generation process. Cache support is **platform-agnostic** and works on Netlify, Vercel, or any other CI/CD setup that is caching `node_modules`.

:video{autoplay controls autoPlay="true" controls="true" poster="https://res.cloudinary.com/nuxt/video/upload/v1595852304/nuxt-smart-generate_pjaat1.jpg"}

## Generate time: cache vs full webpack build

See the comparison in seconds between two `nuxt generate`:

- `Build` is when a webpack build is required
- `Cache` is only when the content has changed (webpack build skipped)

![Comparison between build VS cache time](https://nuxt.com/assets/blog/bar-chart-cache-build.png)

::tip
The static site generation of our projects on content changes are now **\~3.6x times** faster 🚀
::

Project links: [Basic](https://github.com/pi0/nuxt-static-demo){rel="nofollow"}, [Strapi Module Docs](https://github.com/nuxt-community/strapi-module/tree/master/docs){rel="nofollow"}, [Content Module Docs](https://github.com/nuxt/content/tree/master/docs){rel="nofollow"} and [Nuxt 2 Docs](https://github.com/nuxt/website-v2){rel="nofollow"}.

## Using in your projects

1. Update `nuxt` to the latest minor version, which is v2.14.

2. Ensure `target` is `static` inside your `nuxt.config.js`

`nuxt generate` will behave as before to avoid breaking changes and provide legacy compatibility if you keep `target: ‘server’` or don't specify target.

Now, the `nuxt generate` command will build the project only if necessary, which is the case when files inside the project have been changed. It will always re-render your routes to static HTML files, like `nuxt export` is doing already.

Now you only have to change your build command back from `nuxt build && nuxt export` to `nuxt generate` on the platform you are using. If you are using a CI, ensure that you are properly caching `node_modules`.

### Excluding Files from Cache

By default, nuxt ignores these directories so if any change happens inside them, build will not be triggered:

- Build directory (`.nuxt/`)
- Static directory (`static/`)
- Generate dist (`dist/`)
- `node_modules`
- `README.md`
- Hidden dotfiles (like `.npmrc`)

You can add more patterns using [generate.cache.ignore](https://v2.nuxt.com/docs/configuration-glossary/configuration-generate/#cache){rel="nofollow"} option in `nuxt.config`:

It is also possible to use a function for `ignore` option to override default ignore entries.

What if you are developing a nuxt module that is working with files that should not trigger a rebuild? The best example is for [@nuxt/content](https://content.nuxt.com){rel="nofollow"} module that reads markdown files from the repository. In this case, these files are used within a runtime module, which is the case when using `@nuxt/content`, the module itself can tell nuxt to ignore these files for you already so you don't have to do anything! Module authors can use the new `generate:cache:ignore` hook to do so:

When using the new `nuxt generate` with `static` target, a snapshot including checksum of non-ignored project files as well as nuxt version and some other configuration will be written `.nuxt/build.json`. In addition, we also move the build directory to `node_modules/.cache/nuxt`. Because `node_modules` is cached by all major platforms (Netlify, Vercel, ...) and common CI/CD scripts, this solution works out of the box without additional configuration.

When `nuxt generate` is called subsequently, it will again create a checksum based on your project files and then compare it to the existing one inside `node_modules/.cache/nuxt/build.json`.

If they match, it means that nothing is changed that needs rebuild so we can directly start rendering pages.

If a mismatch is detected, it means that a full rebuild would be necessary. You can also see what file caused rebuild by checking console logs. After the build, nuxt generate will save the new checksum inside `.nuxt/build.json`. You can check full implementation [here](https://github.com/nuxt/nuxt.js/pull/7712){rel="nofollow"}.

### Back to old school commands

With Nuxt v2.13, we introduced `nuxt export` and `nuxt serve` specially designed for the static target. With Nuxt v2.14, they are deprecated as `nuxt generate` and `nuxt start` is smart to detect the target and build when necessary.

- `nuxt dev` = development server
- `nuxt build` = build your application for production
- `nuxt start` = start the production server (use it for Node.js hosting like Heroku, DigitalOcean, etc)

- `nuxt dev` = development server
- `nuxt generate` = build if needed and statically export to `dist/`
- `nuxt start` = serve the `dist/` directory like your static hosting would do (Netlify, Vercel, Surge, etc), great for testing before deploying

- Upgrade your project to [nuxt@2.14.0](https://github.com/nuxt/nuxt.js/releases/tag/v2.14.0){rel="nofollow"}
- Use `nuxt generate` instead of `nuxt export`
- Use `nuxt start` instead of `nuxt serve`
- Enjoy fast deployments 🤙

**Examples:**

Example 1 (unknown):
```unknown

```

Example 2 (unknown):
```unknown
::

2. Ensure `target` is `static` inside your `nuxt.config.js`
```

Example 3 (unknown):
```unknown
`nuxt generate` will behave as before to avoid breaking changes and provide legacy compatibility if you keep `target: ‘server’` or don't specify target.

3. That’s it 🙌

Now, the `nuxt generate` command will build the project only if necessary, which is the case when files inside the project have been changed. It will always re-render your routes to static HTML files, like `nuxt export` is doing already.

Now you only have to change your build command back from `nuxt build && nuxt export` to `nuxt generate` on the platform you are using. If you are using a CI, ensure that you are properly caching `node_modules`.

### Excluding Files from Cache

By default, nuxt ignores these directories so if any change happens inside them, build will not be triggered:

- Build directory (`.nuxt/`)
- Static directory (`static/`)
- Generate dist (`dist/`)
- `node_modules`
- `README.md`
- Hidden dotfiles (like `.npmrc`)

You can add more patterns using [generate.cache.ignore](https://v2.nuxt.com/docs/configuration-glossary/configuration-generate/#cache){rel="nofollow"} option in `nuxt.config`:
```

Example 4 (unknown):
```unknown
It is also possible to use a function for `ignore` option to override default ignore entries.

### Module Authors

What if you are developing a nuxt module that is working with files that should not trigger a rebuild? The best example is for [@nuxt/content](https://content.nuxt.com){rel="nofollow"} module that reads markdown files from the repository. In this case, these files are used within a runtime module, which is the case when using `@nuxt/content`, the module itself can tell nuxt to ignore these files for you already so you don't have to do anything! Module authors can use the new `generate:cache:ignore` hook to do so:
```

---

## Zerops

**URL:** llms-txt#zerops

**Contents:**
- Static
  - Creating a Project
  - Setting up Zerops YAML
- SSR Node.js
  - Setting up Zerops YAML
- Building & Deploying your App

**Nodejs Preset**: `SERVER_PRESET: zerops`**Static Preset**: `SERVER_PRESET: zerops-static`

::read-more{title="Zerops" to="https://zerops.io"}
::

::tip
**Nuxt x Zerops Quickrun ✨**

Want to test running Nuxt on Zerops without installing or setting up anything? Using repositories [Zerops x Nuxt - Static](https://github.com/zeropsio/recipe-nuxt-static){rel="nofollow"} or [Zerops x Nuxt - SSR on Node.js](https://github.com/zeropsio/recipe-nuxt-nodejs){rel="nofollow"} you can deploy example Nuxt app with a single click.
::

Zerops supports deploying both static and server-side rendered apps with a simple configuration file in your project root.

Projects and services can be added either through a [Project add wizard](https://app.zerops.io/dashboard/project-add){rel="nofollow"} or imported using a YAML structure:

### Creating a Project

This will create a project called `recipe-nuxt` with a Zerops Static service called `app`.

### Setting up Zerops YAML

To tell Zerops how to build and run your app, add a `zerops.yml` to your root:

Now you can trigger the [build & deploy pipeline using the Zerops CLI](https://nuxt.com/#building-deploying-your-app) or by connecting the app service with your [GitHub](https://docs.zerops.io/references/github-integration/){rel="nofollow"} / [GitLab](https://docs.zerops.io/references/gitlab-integration){rel="nofollow"} repository from inside the service detail.

Projects and services can be added either through a [Project add wizard](https://app.zerops.io/dashboard/project-add){rel="nofollow"} or imported using a YAML structure:

This will create a project called `recipe-nuxt` with a Zerops Node.js service called `app`.

### Setting up Zerops YAML

To tell Zerops how to build and run your app, add a `zerops.yml` to your root:

Now you can trigger the [build & deploy pipeline using the Zerops CLI](https://nuxt.com/#building-deploying-your-app) or by connecting the app service with your [GitHub](https://docs.zerops.io/references/github-integration/){rel="nofollow"} / [GitLab](https://docs.zerops.io/references/gitlab-integration){rel="nofollow"} repository from inside the service detail.

## Building & Deploying your App

- Install the [Zerops CLI](https://github.com/zeropsio/zcli){rel="nofollow"}.

- Open [Settings > Access Token Management](https://app.zerops.io/settings/token-management){rel="nofollow"} in the Zerops app and generate a new access token.
- Log in using your access token with the following command:

- Navigate to the root of your app (where `zerops.yml` is located) and run the following command to trigger the deploy:

Your code can be deployed automatically on each commit or a new tag by connecting the service with your [GitHub](https://docs.zerops.io/references/gitlab-integration){rel="nofollow"} / [GitLab](https://docs.zerops.io/references/gitlab-integration){rel="nofollow"} repository. This connection can be set up in the service detail.

::read-more{title="Zerops Documentation" to="https://docs.zerops.io/"}
::

**Examples:**

Example 1 (unknown):
```unknown
This will create a project called `recipe-nuxt` with a Zerops Static service called `app`.

### Setting up Zerops YAML

To tell Zerops how to build and run your app, add a `zerops.yml` to your root:
```

Example 2 (unknown):
```unknown
Now you can trigger the [build & deploy pipeline using the Zerops CLI](https://nuxt.com/#building-deploying-your-app) or by connecting the app service with your [GitHub](https://docs.zerops.io/references/github-integration/){rel="nofollow"} / [GitLab](https://docs.zerops.io/references/gitlab-integration){rel="nofollow"} repository from inside the service detail.

## SSR Node.js

Projects and services can be added either through a [Project add wizard](https://app.zerops.io/dashboard/project-add){rel="nofollow"} or imported using a YAML structure:
```

Example 3 (unknown):
```unknown
This will create a project called `recipe-nuxt` with a Zerops Node.js service called `app`.

### Setting up Zerops YAML

To tell Zerops how to build and run your app, add a `zerops.yml` to your root:
```

Example 4 (unknown):
```unknown
Now you can trigger the [build & deploy pipeline using the Zerops CLI](https://nuxt.com/#building-deploying-your-app) or by connecting the app service with your [GitHub](https://docs.zerops.io/references/github-integration/){rel="nofollow"} / [GitLab](https://docs.zerops.io/references/gitlab-integration){rel="nofollow"} repository from inside the service detail.

## Building & Deploying your App

- Install the [Zerops CLI](https://github.com/zeropsio/zcli){rel="nofollow"}.
```

---

## Heroku

**URL:** llms-txt#heroku

**Contents:**
- Using the Heroku CLI
- Learn more

Nuxt supports deploying on [Heroku](https://heroku.com/){rel="nofollow"} with minimal configuration.

## Using the Heroku CLI

1. Create a new Heroku app.
   
2. Configure Heroku to use the nodejs buildpack.
   
3. Configure your app.
   
4. Ensure you have `start` and `build` commands in your `package.json` file.

::read-more{target="_blank" to="https://nitro.unjs.io/deploy/providers/heroku"}
Head over **Nitro documentation** to learn more about the Heroku deployment preset.
::

**Examples:**

Example 1 (unknown):
```unknown
2. Configure Heroku to use the nodejs buildpack.
```

Example 2 (unknown):
```unknown
3. Configure your app.
```

Example 3 (unknown):
```unknown
4. Ensure you have `start` and `build` commands in your `package.json` file.
```

---

## Vercel

**URL:** llms-txt#vercel

**Contents:**
- Deploy using Git
- Vercel Edge Functions
- Vercel KV Storage
- Custom Build Output Configuration
- Templates
- Learn More

::tip
**Zero Configuration ✨**

Integration with Vercel is possible with zero configuration, [learn more](https://nitro.unjs.io/deploy#zero-config-providers){rel="nofollow"}.
::

1. Push your code to your git repository (GitHub, GitLab, Bitbucket).
2. [Import your project](https://vercel.com/new){rel="nofollow"} into Vercel.
3. Vercel will detect that you are using Nitro and will enable the correct settings for your deployment.
4. Your application is deployed!

After your project has been imported and deployed, all subsequent pushes to branches will generate [Preview Deployments](https://vercel.com/docs/concepts/deploy/environments#preview){rel="nofollow"}, and all changes made to the Production Branch (commonly “main”) will result in a [Production Deployment](https://vercel.com/docs/concepts/deploy/environments#production){rel="nofollow"}.

Learn more about Vercel’s [Git Integration](https://vercel.com/docs/concepts/git){rel="nofollow"}.

## Vercel Edge Functions

It is possible to deploy your Nuxt applications directly on [Vercel Edge Functions](https://vercel.com/docs/concepts/functions/edge-functions){rel="nofollow"}.

> Vercel Edge Functions allow you to deliver content to your site's visitors with speed and personalization.
> They are deployed globally by default on Vercel's Edge Network and enable you to move server-side logic to the Edge, close to your visitor's origin.
> Edge Functions use the Vercel Edge Runtime, which is built on the same high-performance V8 JavaScript and WebAssembly engine that is used by the Chrome browser.
> By taking advantage of this small runtime, Edge Functions can have faster cold boots and higher scalability than Serverless Functions.
> Edge Functions run after the cache, and can both cache and return responses. [Read More](https://vercel.com/docs/concepts/functions/edge-functions){rel="nofollow"}

In order to enable this target, set the following environment variable:

Or update the build command to `nuxt build --preset=vercel_edge`.

You can easily use [Vercel KV Storage](https://vercel.com/docs/storage/vercel-kv){rel="nofollow"} with [Nuxt Server Storage](https://nuxt.com/docs/guide/directory-structure/server#server-storage).

::read-more{target="_blank" to="https://unstorage.unjs.io/drivers/vercel-kv"}
Read more about the Vercel KV driver on Unstorage documentation.
::

1. Install `@vercel/kv` dependency:
   
2. Update your `nuxt.config.ts`:

::caution
You need to either set `KV_REST_API_URL` and `KV_REST_API_TOKEN` environment variables or pass `url` and `token` to driver options. Check [driver docs](https://unstorage.unjs.io/drivers/vercel-kv){rel="nofollow"} for more information about usage.
::

You can now access your data store anywhere in your `server/` directory:

## Custom Build Output Configuration

You can provide additional [build output configuration](https://vercel.com/docs/build-output-api/v3){rel="nofollow"} using `nitro.vercel.config` key inside `nuxt.config.ts`. It will be merged with built-in auto generated config.

::card-group
  :::card
  ---
  ui:
    icon:
      base: text-black dark:text-white
  icon: i-simple-icons-github
  target: _blank
  title: Nuxt Vercel ISR
  to: https://github.com/danielroe/nuxt-vercel-isr
  ---
  Example of a Nuxt application with hybrid rendering deployed on Vercel.
  :::

:::card
  ---
  ui:
    icon:
      base: text-black dark:text-white
  icon: i-simple-icons-github
  target: _blank
  title: Nuxt on the Edge on Vercel
  to: https://github.com/pi0/nuxt-on-the-edge
  ---
  Example of a Nuxt application running on Vercel Edge Functions.
  :::
::

::read-more{target="_blank" to="https://nitro.unjs.io/deploy/providers/vercel"}
Head over **Nitro documentation** to learn more about On-Demand Incremental Static Regeneration or more advanced options.
::

**Examples:**

Example 1 (bash):
```bash
SERVER_PRESET=vercel_edge
```

Example 2 (unknown):
```unknown
2. Update your `nuxt.config.ts`:
```

Example 3 (unknown):
```unknown
::caution
You need to either set `KV_REST_API_URL` and `KV_REST_API_TOKEN` environment variables or pass `url` and `token` to driver options. Check [driver docs](https://unstorage.unjs.io/drivers/vercel-kv){rel="nofollow"} for more information about usage.
::

You can now access your data store anywhere in your `server/` directory:
```

---

## Azure

**URL:** llms-txt#azure

**Contents:**
- Azure Static Web Apps
  - Local preview
  - Configuration
  - Custom Configuration
  - Deploy from CI/CD via GitHub Actions
- More options

## Azure Static Web Apps

::tip
**Zero Configuration ✨**

Integration with Azure Static Web Apps provider is possible with zero configuration, [learn more](https://nitro.unjs.io/deploy#zero-config-providers){rel="nofollow"}.
::

Azure Static Web Apps are designed to be deployed continuously in a [GitHub Actions workflow](https://docs.microsoft.com/en-us/azure/static-web-apps/github-actions-workflow){rel="nofollow"}. By default, Nuxt will detect this deployment environment to enable the `azure` preset.

Install [Azure Functions Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local){rel="nofollow"} if you want to test locally.

You can invoke a development environment to preview before deploying.

Azure Static Web Apps are [configured](https://learn.microsoft.com/en-us/azure/static-web-apps/configuration){rel="nofollow"} using the `staticwebapp.config.json` file.

Nuxt automatically generates this configuration file whenever the application is built with the `azure` preset.

It adds the following properties based on the following criteria:

| Property                                                                                                                                | Criteria                                                                                                                                                                                                                                                      | Default       |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| **[platform.apiRuntime](https://learn.microsoft.com/en-us/azure/static-web-apps/configuration#platform){rel="nofollow"}**               | Will automatically set to `node:16` or `node:14` depending on your package configuration.                                                                                                                                                                     | `node:16`     |
| **[navigationFallback.rewrite](https://learn.microsoft.com/en-us/azure/static-web-apps/configuration#fallback-routes){rel="nofollow"}** | Is always `/api/server`                                                                                                                                                                                                                                       | `/api/server` |
| **[routes](https://learn.microsoft.com/en-us/azure/static-web-apps/configuration#routes){rel="nofollow"}**                              | All prerendered routes are added. Additionally, if you do not have an `index.html` file an empty one is created for you for compatibility purposes and also requests to `/index.html` are redirected to the root directory which is handled by `/api/server`. | `[]`          |

### Custom Configuration

You can alter the generated configuration using `azure.config` option. For instance, if you wanted to specify a Node runtime for your Azure Functions, edit your `nuxt.config.ts` file to the following:

Custom routes will be added and matched first. In the case of a conflict (determined if an object has the same route property), custom routes will override generated ones.

### Deploy from CI/CD via GitHub Actions

When you link your GitHub repository to Azure Static Web Apps, a workflow file is added to the repository.

When you are asked to select your framework, select custom and provide the following information:

| Input                | Value            |
| -------------------- | ---------------- |
| **app\_location**    | '/'              |
| **api\_location**    | '.output/server' |
| **output\_location** | '.output/public' |

If you miss this step, you can always find the build configuration section in your workflow and update the build configuration:

::callout
That's it! Now Azure Static Web Apps will automatically deploy your Nitro-powered application on push.
::

If you are using `runtimeConfig`, you will likely want to configure the corresponding [environment variables on Azure](https://docs.microsoft.com/en-us/azure/static-web-apps/application-settings){rel="nofollow"}.

::read-more{target="_blank" to="https://nitro.unjs.io/deploy/providers/azure"}
Learn about the other Azure deployment presets on Nitro documentation.
::

**Examples:**

Example 1 (unknown):
```unknown
### Configuration

Azure Static Web Apps are [configured](https://learn.microsoft.com/en-us/azure/static-web-apps/configuration){rel="nofollow"} using the `staticwebapp.config.json` file.

Nuxt automatically generates this configuration file whenever the application is built with the `azure` preset.

It adds the following properties based on the following criteria:

| Property                                                                                                                                | Criteria                                                                                                                                                                                                                                                      | Default       |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| **[platform.apiRuntime](https://learn.microsoft.com/en-us/azure/static-web-apps/configuration#platform){rel="nofollow"}**               | Will automatically set to `node:16` or `node:14` depending on your package configuration.                                                                                                                                                                     | `node:16`     |
| **[navigationFallback.rewrite](https://learn.microsoft.com/en-us/azure/static-web-apps/configuration#fallback-routes){rel="nofollow"}** | Is always `/api/server`                                                                                                                                                                                                                                       | `/api/server` |
| **[routes](https://learn.microsoft.com/en-us/azure/static-web-apps/configuration#routes){rel="nofollow"}**                              | All prerendered routes are added. Additionally, if you do not have an `index.html` file an empty one is created for you for compatibility purposes and also requests to `/index.html` are redirected to the root directory which is handled by `/api/server`. | `[]`          |

### Custom Configuration

You can alter the generated configuration using `azure.config` option. For instance, if you wanted to specify a Node runtime for your Azure Functions, edit your `nuxt.config.ts` file to the following:
```

Example 2 (unknown):
```unknown
Custom routes will be added and matched first. In the case of a conflict (determined if an object has the same route property), custom routes will override generated ones.

### Deploy from CI/CD via GitHub Actions

When you link your GitHub repository to Azure Static Web Apps, a workflow file is added to the repository.

When you are asked to select your framework, select custom and provide the following information:

| Input                | Value            |
| -------------------- | ---------------- |
| **app\_location**    | '/'              |
| **api\_location**    | '.output/server' |
| **output\_location** | '.output/public' |

If you miss this step, you can always find the build configuration section in your workflow and update the build configuration:
```

---

## Zeabur

**URL:** llms-txt#zeabur

**Contents:**
- Setup
- Learn more

Nuxt supports deploying on [Zeabur](https://zeabur.com){rel="nofollow"} with minimal configuration.

1. Create a new Zeabur app for Nuxt following the [guide](https://zeabur.com/docs/guides/nodejs/nuxt){rel="nofollow"}.
2. During the deployment process, you can configure environment variables in Zeabur dashboard. In your service page, open the variables tab set the following [environment variable](https://zeabur.com/docs/deploy/variables){rel="nofollow"}:

::read-more{target="_blank" to="https://nitro.unjs.io/deploy/providers/zeabur"}
Head over **Nitro documentation** to learn more about the Zeabur deployment preset.
::

**Examples:**

Example 1 (bash):
```bash
SERVER_PRESET=zeabur
```

---

## NuxtHub

**URL:** llms-txt#nuxthub

**Contents:**
- Introduction
- NuxtHub CLI
- Deploy using Git
- Templates

::tip
**Zero Configuration ✨**

Integration with NuxtHub is possible with zero configuration, [learn more](https://nitro.unjs.io/deploy#zero-config-providers){rel="nofollow"}.
::

NuxtHub is a deployment and administration platform for Nuxt, powered by Cloudflare.

The main difference with the [Cloudflare](https://nuxt.com/deploy/cloudflare) deployment is that NuxtHub provides a zero-configuration deployment experience (provisioning, deployment, and administration).

It also provides a powerful admin interface to manage your Nuxt projects (database, blob, KV, ...) as well as [remote storage](https://hub.nuxt.com/docs/getting-started/remote-storage?utm_source=nuxt-website\&utm_medium=deploy-page){rel="nofollow"}.

Read more on [hub.nuxt.com](https://hub.nuxt.com/?utm_source=nuxt-website\&utm_medium=deploy-page){rel="nofollow"}.

You can deploy your local project with a single command:

1. Ensure you are logged in on [admin.hub.nuxt.com](https://admin.hub.nuxt.com/?utm_source=nuxt-website\&utm_medium=deploy-page){rel="nofollow"}
2. Link your local project with a NuxtHub project or help you create a new one
3. Build your Nuxt project with the correct preset
4. Deploy it to your Cloudflare account with all the necessary resources
5. Provide you with a URL to access your project

See an example in video:

:video{.rounded.dark:border.dark:border-gray-700.md:w-2/3 controls controls="true" poster="https://res.cloudinary.com/nuxt/video/upload/v1723569534/nuxthub/nuxthub-deploy_xxs5s8.jpg"}

::note
You can also install the [NuxtHub CLI](https://github.com/nuxt-hub/cli){rel="nofollow"} globally with: `npm i -g nuxthub`.
::

1. Push your code to your git repository (GitHub)
2. Click on `New Project` then `Import a Git repository`
3. Select your repository and click on `Import repository`
4. NuxtHub will configure a GitHub Action workflow to deploy your project
5. Your application is deployed with a `.nuxt.dev` domain

After your project has been imported and deployed, all subsequent pushes to branches will generate preview deployments and all changes made to the production branch (commonly “main”) will result in a production deployment.

::card-group
  :::card
  ---
  ui:
    icon:
      base: text-black dark:text-white
  icon: i-simple-icons-github
  target: _blank
  title: Hello Edge
  to: https://github.com/nuxt-hub/hello-edge
  ---
  A minimal Nuxt starter running on the edge.
  :::

:::card
  ---
  ui:
    icon:
      base: text-black dark:text-white
  icon: i-simple-icons-github
  target: _blank
  title: NuxtHub Starter
  to: https://github.com/nuxt-hub/starter
  ---
  A starter to get started with NuxtHub features (Database, Blob, KV, ...).
  :::

:::card
  ---
  ui:
    icon:
      base: text-black dark:text-white
  icon: i-simple-icons-github
  target: _blank
  title: Atidone
  to: https://github.com/atinux/atidone
  ---
  A full-stack application with authentication and a database to manage your Todos.
  :::

:::card
  ---
  ui:
    icon:
      base: text-black dark:text-white
  icon: i-simple-icons-github
  target: _blank
  title: Nuxt Image Gallery
  to: https://github.com/flosciante/nuxt-image-gallery
  ---
  An image gallery to upload, edit and share your images to the world.
  :::

:::card
  ---
  ui:
    icon:
      base: text-black dark:text-white
  icon: i-simple-icons-github
  target: _blank
  title: Atinotes
  to: https://github.com/atinux/atinotes
  ---
  An editable website powered by Markdown & Vue components with dynamic OG image generation.
  :::

:::card
  ---
  ui:
    icon:
      base: text-black dark:text-white
  icon: i-simple-icons-github
  target: _blank
  title: Atidraw
  to: https://github.com/atinux/atidraw
  ---
  Web application that lets you to draw and share your drawings with the world, with Cloudflare R2 & AI.
  :::
::

::callout
See the whole list of templates on <https://hub.nuxt.com/templates>{rel="nofollow"}
::

---

## Node dependencies

**URL:** llms-txt#node-dependencies

---
