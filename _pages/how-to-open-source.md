---
title: How to Open Source Code
permalink: /how-to-open-source.html

layout: page
sidenav: side
subnav:
  - text: "Step 1: Approval"
    href: "/how-to-open-source.html#step-1-approval"
---

## How to Open Source Code

There are a few steps you will need to take to open source any project. Some of these steps are more administrative, and some involve adding things to your codebase. If you're not sure if you can open source your project, checkout our [getting started](/getting-started.html) workflow.

<section class='usa-alert usa-alert-info' >
  <article class='usa-alert-body'>
    <h4 class='usa-alert-heading'>Is this process for you?</h4>
    <p class='usa-alert-text'>
      This is one suggested workflow for opening sourcing an existing project (whether there is code or not yet), but you may want - or need - to follow a different process. Be sure to check with your organization to see if there is already a defined path to open source for you! If you aren't sure, send us an <a href='mailto:{{site.email}}'>email</a>!
    </p>
  </article>
</section>

### Step 1: Approval

You will need to get approval from various people, exactly who isn't up to us! In general this will probably be your security manager and program manager, but it may include other folks as well, depending on the project type. If you aren't sure, feel free to shoot us an [email](mailto:{{site.email}}) and we can look into it!

### Step 2: Choose a License

You may not be aware, but just about any code produced by a federal employee is in the public domain, meaning any US citizen has a right to access the code and use it - even if it's not open sourced (with certain security exceptions). This impacts your open source efforts because it means that you cannot restrict any usage rights to any US citizen.

However, other countries can enforce our open source licenses, even for code in the public domain in the United States. Additionally, it can be good guidance for public contributors to identify what open source license and contribution policy govern a project. The code.mil team recommends attaching an open source license along with an "intent" document that clearly indicates how the government intends the code to be released, even if in the United States the law says it is public domain.

You can use [this site to explore (and choose) an open source license](https://choosealicense.com). The code.mil team recommends using a permissive license where possible as the code is general under the public domain anyway, which is as permissive as it gets! Our suggestion would be to use **MIT** or **ISC**, but other options like Apache 2.0 or BSD could do just as well.

### Step 3: Add License Documents

Now that you've chosen a license you should add a few documents to the codebase to identify the project and provide the guidance mentioned above in Step 2. The first document is your license itself, typically this will be named "LICENSE" (or maybe "LICENSE.md"). You should accompany this with a document outlining your intent for the use of this code. We suggest adding a document called "INTENT.md" to the code.

You can see examples of these documents in the code repository for this very website!

* [LICENSE.md](/LICENSE.md)
* [INTENT.md](/INTENT.md)

<section class='usa-alert usa-alert-info' >
  <article class='usa-alert-body'>
    <h4 class='usa-alert-heading'>Keep the Copyright!</h4>
    <p class='usa-alert-text'>
      You might notice in the [LICENSE.md](/LICENSE.md) file that there is a copyright line. That one is key, and you should keep it, even if you switch to a different license. Note that if this project was developed <strong>with a contractor</strong> that the contractor company name should also be listed here.
    </p>
    <p><em>"Copyright (c) 2017-2018 U.S. Federal Government (in countries where recognized)"</em></p>
  </article>
</section>

### Step 4: Contributions

The last piece of documentation you absolutely need is how people can contribute to your project, and what they must do. The code.mil team has taken the approach of using a Developer Certificate of Origin (DCO) process, but a slightly lighter version. Essentially, contributors agree that their submission is their own original work and release any expectation of compensation, etc.

You can read the contributing documentation for this site to see an example of what this looks like:

* [CONTRIBUTING.md](/CONTRIBUTING.md)
* [CONTRIBUTORS.md](/CONTRIBUTORS.md)

### Step 5: Release it!

Now that you have all the pieces in place, it's time to release the code publicly! There are lots of ways to do this, but essentially you are posting the source code (and documentation) online for all to see. Sites like GitHub, BitBucket, and GitLab provide an easy way for the public to track your progress and submit contributions. That said, if you aren't using Git as your source control tool you can put the code up in any manner you wish, so long as changes can be tracked.

If you aren't sure where to post the code, or you need help getting source control set up, [contact us](mailto:{{site.email}}) and we can advise you!

<section class='usa-alert usa-alert-info' >
  <article class='usa-alert-body'>
    <h4 class='usa-alert-heading'>Using GitHub?</h4>
    <p class='usa-alert-text'>
      If you plan to use GitHub then we encourage you to add the <a href='https://github.com/topics/code-mil'><strong><code>code-mil</code></strong></a> topic to your repository. This will allow for easy discoverability by other developers within and outside of the government.
    </p>
  </article>
</section>

### Step 6: OMB Policy Tracking

The last piece of this process is adding your project to the [code inventory](https://code.gov/#/policy-guide/docs/compliance/inventory-code) file that the DoD uses to comply with [OMB Policy (M-16-21)](https://code.gov/#/policy-guide/policy/open-source). But don't worry, **we'll take care of that for you**. You just need to contact us to tell us abotu your project!

<a href='mailto:{{site.email}}' class='usa-button'>Tell us about your project</a>
