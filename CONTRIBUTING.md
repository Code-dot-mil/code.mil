# Contributing to Our Projects, Version 1.5

**NOTE: This CONTRIBUTING.md is for software contributions. You do not need to follow the Developer's Certificate of Origin (DCO) process for commenting on the Code.mil repository documentation, such as CONTRIBUTING.md, INTENT.md, etc. or for submitting issues.**

Thanks for thinking about using or contributing to this software ("Project") and its documentation!

* [Policy & Legal Info](#policy)
* [Getting Started](#getting-started)
* [Submitting an Issue](#submitting-an-issue)
* [Submitting Code](#submitting-code)

## Policy

### 1. Introduction

The project maintainer for this Project will only accept contributions using the Developer's Certificate of Origin 1.1 located at [developercertificate.org](https://developercertificate.org) ("DCO"). The DCO is a legally binding statement asserting that you are the creator of your contribution, or that you otherwise have the authority to distribute the contribution, and that you are intentionally making the contribution available under the license associated with the Project ("License").

### 2. Developer Certificate of Origin Process

Before submitting contributing code to this repository for the first time, you'll need to sign a Developer Certificate of Origin (DCO) (see below). To agree to the DCO, add your name and email address to the [CONTRIBUTORS.md](https://github.com/Code-dot-mil/code.mil/blob/master/CONTRIBUTORS.md) file. At a high level, adding your information to this file tells us that you have the right to submit the work you're contributing and indicates that you consent to our treating the contribution in a way consistent with the license associated with this software (as described in [LICENSE.md](https://github.com/Code-dot-mil/code.mil/blob/master/LICENSE.md)) and its documentation ("Project").

### 3. Important Points

Pseudonymous or anonymous contributions are permissible, but you must be reachable at the email address provided in the Signed-off-by line.

If your contribution is significant, you are also welcome to add your name and copyright date to the source file header.

U.S. Federal law prevents the government from accepting gratuitous services unless certain conditions are met. By submitting a pull request, you acknowledge that your services are offered without expectation of payment and that you expressly waive any future pay claims against the U.S. Federal government related to your contribution.

If you are a U.S. Federal government employee and use a `*.mil` or `*.gov` email address, we interpret your Signed-off-by to mean that the contribution was created in whole or in part by you and that your contribution is not subject to copyright protections.

### 4. DCO Text

The full text of the DCO is included below and is available online at [developercertificate.org](https://developercertificate.org):

```txt
Developer Certificate of Origin
Version 1.1

Copyright (C) 2004, 2006 The Linux Foundation and its contributors.
1 Letterman Drive
Suite D4700
San Francisco, CA, 94129

Everyone is permitted to copy and distribute verbatim copies of this
license document, but changing it is not allowed.

Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

(a) The contribution was created in whole or in part by me and I
    have the right to submit it under the open source license
    indicated in the file; or

(b) The contribution is based upon previous work that, to the best
    of my knowledge, is covered under an appropriate open source
    license and I have the right under that license to submit that
    work with modifications, whether created in whole or in part
    by me, under the same open source license (unless I am
    permitted to submit under a different license), as indicated
    in the file; or

(c) The contribution was provided directly to me by some other
    person who certified (a), (b) or (c) and I have not modified
    it.

(d) I understand and agree that this project and the contribution
    are public and that a record of the contribution (including all
    personal information I submit with it, including my sign-off) is
    maintained indefinitely and may be redistributed consistent with
    this project or the open source license(s) involved.
```

## Getting Started

Code.mil is a static website generated using [Jekyll](https://jekyllrb.com), a static website generator written in the [Ruby](https://ruby-lang.org) programming language. Development dependences are managed using the [Bundler](https://bundler.io) gem.

This project uses Ruby version 2.6.2 which may be installed using a Ruby version manager like [rbenv](https://github.com/rbenv/rbenv), [chruby](https://github.com/postmodern/chruby), or [rvm](https://github.com/rvm/rvm).

```sh
rbenv install 2.6.2
```

Once you've installed Ruby 2.6.2 and the Bundler gem (`gem install bundler`), install the project's gems by running::

```sh
bundle install
```

### Making Changes

Now you're ready to [clone the repository](https://help.github.com/articles/cloning-a-repository/) locally and start making changes. The website's source code is in the `src` folder which contains content pages authored in the [Markdown text format](https://daringfireball.net/projects/markdown/syntax). Jekyll configuration is defined in the `src/_config.yml` file. Additional configuration files are located in the `src/_data` folder.

Once you've installed the project's dependencies as outlined above, you're ready to run Jekyll and browse the website locally:

```sh
./scripts/serve
```

This command will build the website to the `public` folder and start up a local server, making the website available at `http://localhost:4000` (or `http://127.0.0.1:4000`). Fire up your favorite Web browser to view the website locally!

### Code Style

Code formatting conventions are defined in the `.editorconfig` file which uses the [EditorConfig syntax](http://editorconfig.org). There are plugins for a variety of editors that utilize the settings in the `.editorconfig` file. It is recommended that you install the EditorConfig plugin for your editor of choice.

Your bug fix or feature addition won't be rejected if it runs afoul of any (or all) of these guidelines, but following the guidelines will definitely make everyone's lives a little easier.

## Submitting an Issue

You should feel free to [submit an issue](https://github.com/Code-dot-mil/code.mil/issues) on our GitHub repository for anything you find that needs attention on the website. That includes content, functionality, design, or anything else!

### Submitting a Bug Report

When submitting a bug report on the website, please be sure to include accurate and thorough information about the problem you're observing. Be sure to include:

* Steps to reproduce the problem,
* The URL of the page where you observed the problem,
* What you expected to happen,
* What actually happend (or didn't happen), and
* Technical details including your Operating System name and version and Web browser name and version number.

## Submitting Code

When making your changes, it is highly encouraged that you use a [branch in Git](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging), then submit a [pull request](https://github.com/Code-dot-mil/code.mil/pulls) (PR) on GitHub. Your pull request will go through some automated checks using [Travis CI](https://travis-ci.com/Code-dot-mil/code.mil/), a continuous integration and deployment tool.

After review by the Code.mil team, your PR will either be commented on with a request for more information or changes, or it will be merged into the `master` branch and deployed to a URL for testing purposes.

Assuming everything checks out, the Code.mil team will merge the `master` branch into the `production` branch which will be automatically deployed to the production hosting environment, making your changes available on [code.mil](https://code.mil).

Note that if you're updating content on policy-specific pages (e.g. Getting Started, How to Open Source, Frequently Asked Questions), be sure to update the `updated_at` value in the file's YAML Front Matter (in the format `YYYY-MM-DD`):

```yaml
---
title: Getting Started
updated_at: 2018-04-03
---
```

### Check Your Changes

Before submitting your pull request, you should run the build process locally first to ensure things are working as expected.

```sh
./scripts/build
```

You should also run the testing script against your local build. This script will check the built website using the [html-proofer](https://github.com/gjtorikian/html-proofer) Ruby gem. You may run the test script using the following command:

```sh
./scripts/test
```

## Submitting Your Open Source Project

If you have a project that you have open sourced, then you need to add (or update) your project in the [code inventory](https://code.mil/code.json) file that the DoD uses to comply with [OMB Policy (M-16-21)](https://sourcecode.cio.gov/OSS/). You can read more about the format of the [code inventory format](https://code.gov/about/compliance/inventory-code) on the Code.gov website.

To add your project you will need to submit a Pull Request to this project on GitHub. You can follow the instructions here for doing so, but if you are not familiar with GitHub, you can also just [tell us about your project](https://code.mil/tell-us-about-your-code.html) and we can get the process started.

### Understand the format of the JSON file

Each open sourced project is represented by a JSON object block in the final [code.json file](https://code.mil/code.json). In order to make it easy for us to manage the JSON data, each project is represented as a separate file in our code repository. You can see an [example of a project](https://github.com/Code-dot-mil/code.mil/blob/master/src/_releases/github.com/USArmyResearchLab/DCCSO.json) for the US Army Research Lab in the repo.

### Create your JSON file

Start by [forking our repository](https://help.github.com/en/github/getting-started-with-github/fork-a-repo), and then creating a file within the ["_releases" directory](https://github.com/Code-dot-mil/code.mil/tree/master/src/_releases). This file should have a name that matches your project and should be a JSON file with a single object (`{ ... }`) at the root. For example, your file might be called "foobar.json" with this content:

```
{
  "name": "FooBar",
  "organization": "DoD FooBar",
  "description": "A project to track all the foobars in the DoD.",
  "tags": [ "foo", "bar", ... ],
  ...
}
```

Note the file structure in the repo! It starts at "_releases" and then goes to the domain it is hosted on such as "github.com" or "gitlab.com". Under that each organization or user account is represented, followed by the project's json file. For example, our "FooBar" project above may be located here:

`src/_releases/github.com/MyOrg/foobar.json`

### Test it out, then submit your pull request

Once you have your JSON file created you should build and run the site locally to ensure everything works, then submit your pull request. To test the site, run the commands listed above for "[Getting Started](#getting-started)" and for "[Making Chnages](#making-changes)". You should now be able to see the compiled JSON file at `http://0.0.0.0:4000/code.json`. Look through that file to find your project. If it shows up, you should be good!

Now you need to submit your [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) to the base Code.mil website repository. Be sure to fill out the description of why this change is being done and that you tested things! We'll check the work and then merge the code into our base and it will be live in minutes.
