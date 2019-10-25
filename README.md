# Design & Tech training course website
Website to promote the [Designit](https://www.designit.com/) + [Buildit](https://buildit.wiprodigital.com/) training course for design &amp; tech collaboration.

<!-- TOC depthfrom:2 -->

- [Pre-requisites](#pre-requisites)
- [Initial setup](#initial-setup)
- [Local dev](#local-dev)
  - [Where the source code lives](#where-the-source-code-lives)
- [Builds](#builds)
- [Clean](#clean)

<!-- /TOC -->

## Pre-requisites

* Node.js & NPM


## Initial setup

1. Clone this repo.
1. (Within the cloned repo) Run: `npm install`.

## Local dev

```sh
npm start
```

This will build the website, launch a local dev server and open the homepage in your default browser. The source files will be watched and any changes will trigger the necessary rebuilds and auto-reload in your browser.

Note: Build output will be placed into the `dist/` folder.

### Where the source code lives
This site uses the [Eleventy](https://www.11ty.io/) static site generator, so refer to its [docs](https://www.11ty.io/docs/) for usage. Eleventy's source directory has been configured to be `src/site/`, so all templates and other files that Eleventy processes live in there.

For styling, we use [SASS](https://sass-lang.com/) and the main SASS source file is: `src/sass/style.scss`. All styling-related changed must be made in that file.

(Note that this file initially gets compiled to `src/site/styles.css` and _then_ copied from the to the final build output folder by Eleventy. Therefore make sure you _never_ edit `src/site/styles.css`, because your changes will get lost next time the SASS is recompiled!)

## Builds
To "just" to a build, e.g. for deployment, without launching a local dev server and watching for changes run:

```sh
npm run build
```


## Clean
To nuke the build output from orbit run:

```sh
npm run clean
```