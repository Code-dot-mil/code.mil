# Contributing to Our Projects, Version 1.4

**NOTE: This CONTRIBUTING.md is for software contributions. You do not need to follow the Developer's Certificate of Origin (DCO) process for commenting on the Code.mil repository documentation, such as CONTRIBUTING.md, INTENT.md, etc. or for submitting issues.**

Thanks for thinking about using or contributing to this software ("Project") and its documentation!

* [Policy & Legal Info](#policy)
* [Getting Started](#getting-started)
* [Submitting an Issue](#submitting-an-issue)
* [Submitting Code](#submitting-code)

## Policy

### 1. Introduction

The project maintainer for this Project will only accept contributions using the Developer’s Certificate of Origin 1.1 located at https://developercertificate.org (“DCO”). The DCO is a legally binding statement asserting that you are the creator of your contribution, or that you otherwise have the authority to distribute the contribution, and that you are intentionally making the contribution available under the license associated with the Project ("License").

### 2. Developer Certificate of Origin Process

Before submitting contributing code to this repository for the first time, you'll need to sign a Developer Certificate of Origin (DCO) (see below). To agree to the DCO, you'll add your name and email address to [CONTRIBUTORS.md](CONTRIBUTORS.md) file. At a high level, this tells us that you have the right to submit the work you're contributing and says that you consent to us treating the contribution in a way consistent with the license associated with this software (as described in [LICENSE.md](LICENSE.md)) and its documentation ("Project").

### 3. Important Points

Pseudonymous or anonymous contributions are permissible, but you must be reachable at the email provided in the Signed-off-by line.

If your contribution is significant, you are also welcome to add your name and copyright date to the source file header.

U.S. Federal law prevents the government from accepting gratuitous services unless certain conditions are met. By submitting a pull request, you acknowledge that your services are offered without expectation of payment and that you expressly waive any future pay claims against the U.S. Federal government related to your contribution.

If you are a U.S. Federal government employee and use a *.mil or *.gov email address, we interpret your Signed-off-by to mean that the contribution was created in whole or in part by you and that your contribution is not subject to copyright protections.

### 4. DCO Text

The text of the DCO is (from https://developercertificate.org):
```
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

Code.mil is a static web site generated using a piece of software called [Jekyll](https://jekyllrb.com/) which runs in the programming language [Ruby](https://www.ruby-lang.org). Development dependencies are managed using the [Bundler gem](http://bundler.io).

This project uses Ruby version 2.5.0 which can be installed using a Ruby version manager like [rbenv](https://github.com/rbenv/rbenv).

```
rbenv install 2.5.0
```

Once you've installed Ruby 2.5.0, install the Bundler gem and jekyll:

```
gem install bundler
gem install jekyll
```

### Making Changes

Now you're ready to [clone the repository](https://help.github.com/articles/cloning-a-repository/) locally and start making changes. All site pages are in the `_pages` directory and are in [Markdown format](https://daringfireball.net/projects/markdown/syntax). There is configuration in the `_config.yml` file as well as in the `_data` directory.

Once you've cloned the repository you will need to install the dependencies using bundler:

```
bundle install
```

Once you're ready to run the site generator and see the site (locally), run:

```
bundle exec jekyll serve
```

Now you can head to `http://127.0.0.1:3000` to see the site locally!

### Code Style

Code formatting conventions are defined in the `.editorconfig` file which uses the [EditorConfig syntax](http://editorconfig.org). There are plugins for a variety of editors that utilize the settings in the `.editorconfig` file. It is recommended that you install the EditorConfig plugin for your editor of choice.

Your bug fix or feature addition won't be rejected if it runs afoul of any (or all) of these guidelines, but following the guidelines will definitely make everyone's lives a little easier.

## Submitting an Issue

You should feel free to [submit an issue](https://github.com/deptofdefense/code.mil/issues) on our GitHub repository for anything you feel needs attention on the site. That includes content, functionality, design, or anything else!

### Submitting a Bug

When submitting a bug on the site please be sure to add extensive information about the problem you're having. Be sure to include (at least):

* What page you were on
* What you did (which could just be trying to load the page)
* What you expected to happen
* What actually happened (or didn't)
* Your browser (including the version number if possible)

## Submitting Code

When making your changes, it is highly encouraged that you use a [branch in Git](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging), then submit a [Pull Request (PR)](https://github.com/deptofdefense/move.mil/pulls) on GitHub. Your request will go through some automated checks using [Travis CI](https://travis-ci.org/deptofdefense/code.mil/), a continuous integration and deployment tool.

After review by the Code.mil team your PR will either be commented on with a request for more information or changes, or it will be merged into the codebase which will automatically deploy the changes.

### Check Your Changes

While there are automated checks on every PR, you can run the build process locally first to ensure things are working as expected before submitting your PR. This includes running check against the built HTML using a tool called [html-proofer](https://github.com/gjtorikian/html-proofer). You can run the build and the html-proofer tool using the following command:

```
./cibuild
```
