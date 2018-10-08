---
title: How to Write Good Open Source Documentation
updated_at: 2018-10-08

subnav:
  - text: "Step 1: Approval"
    href: "/how-to-open-source.html#step-1-approval"
---

# Writing Good Documentation

## Introduction

This is not �How to Open Source� (that�s here) � actually, this may be Step 7 of How to Open Source � but how to write great documentation for your project as it applies to GitHub or Open Source which is to say, how it applies to new users and contributors. 

### Purpose

Specifically, documentation introduces your project to visitors and provides easy-to-understand instructions for installing and using your project. 

Generally, documentation provides guidance for contributing including your process and requirements for submitting Pull Requests and Issues as well as relatively small tasks like Commit messages. 

Not only does good documentation make your project user-friendly as a product but welcoming as a community. It also makes the community user-friendly by providing standards and guidelines not only for the above tasks but for conduct between community members.

## Writing a Good README.md

Your README is the first impression your project makes. Like any other "above the fold" website home page, this is where visitors make the decision to user either the scrollbar or the Back button. You must simultaneously greet visitors with a smile and give your project's elevator pitch.

### Tips

- Provide links and explanations for other documentation you may have such as a CONTRIBUTING.md file, tutorials, .md files for individual sections of a relatively large project, and to an online demo or the live app.
- 

## Writing a Good CONTRIBUTING.md

### Tips

You might provide contact info for questions when opening an issue isn't appropriate.

## Writing and Reviewing Pull Requests


## Writing Issues and Comments

A well-written issue includes everything you'd want to know before diving in. The issue might be something as simple as content, a tutorial or screenshot and those are often self-explanatory. 

Bugs, on the other hand, should be described in depth. Include:

- The expected behavior
- What actually happens instead
- Steps to reproduce the behavior
- Unique circumstances ("it only happens in Windows" or "It only happens in Netscape 7")

## Attracting Contributors with Labels

People contribute to open source for many reasons. They may be particularly interested in your project but they may also be searching for _any_ project that is a good fit for their time and skillset. When searching for a project to which they can contribute, potential contributors may filter them by language. They can further filter them by *label* so make your project and issues easy for those people to find in search results and target as a potential fit by labeling your issues. 

### Applying Labels

While creating a new issue, click the Labels button to the right and choose a label. 

Apply a label to multiple issues at once by selecting the issues' checkboxes under the Issues tab and choosing a label (can you select multiple?) from the Labels menu.

### Creating Labels

There are eight default labels including "help wanted", "bug", and "good first issue".

- "issue-type" (such as "documentation" or "content")
- "effort" required (i.e. "small")
- "skill-level" (i.e. "beginner")

When creating your own, custom labels, make them consisten with how most people have created them to make your Issues as easy to find as possible. 

There are even several newbie-related labels such as "low-hanging fruit", [issue-type] good first issue, and, during October, "Hacktoberfest".

### Tips

- Provide guidelines for respect, courtesy, etc. in CONTRIBUTING.md or a "Code of Conduct" file.
- If your project uses multiple languages and skills, you might mention which specific language a potential contributor needs to work on this skill. Otherwise, they may start a task they expect only requires HTML and Javascript but quickly realizes they need some Ruby knowledge or something else the lack of which turns a "small" and "easy" issue into something prohibitive and discouraging. 



EVERYTHING BELOW THIS IS FOR FORMATTING REFERENCE AND SHOULD BE DELETED

There are a few steps you will need to take to open source any project. Some of these steps are more administrative, and some involve adding things to your codebase. If you're not sure if you can open source your project, checkout our [getting started](/getting-started.html) workflow.

<section class="usa-alert usa-alert-info">
  <article class="usa-alert-body">
    <h4 class="usa-alert-heading">Is this process for you?</h4>
    <p class="usa-alert-text">
      This is one suggested workflow for open sourcing an existing project (whether there is code or not yet), but you may want - or need - to follow a different process. Be sure to check with your organization to see if there is already a defined path to open source for you! If you aren't sure, send us an <a href="mailto:{{site.email}}">email</a>!
    </p>
  </article>
</section>

### Step 1: Approval

You will need to get approval from various people -- exactly who isn't up to us! In general this will probably be your security manager and program manager, but it may include other folks as well, depending on the project type. If you aren't sure, feel free to shoot us an [email](mailto:{{site.email}}) and we can look into it!

### Step 2: Choose a License

This gets a little complicated because of how U.S. law treats creative works by U.S. federal government employees.

You may not be aware, but most code produced by a U.S. federal employee within the scope of their employment does not have copyright protections in the U.S. and certain foreign jurisdictions. In the U.S., creative works (like code) without copyright protections are sometimes referred to as "public domain." Not all countries recognize the concept of public domain, and many countries actually recognize copyright protections for code written by U.S. federal employees.

Even if the code was completely written by U.S. federal employees, it is still good practice to attach a license to the project so that the applicable license terms are clear: 1) in countries where U.S. federal employees have recognized copyright and 2) for contributions from public contributors. The Code.mil team recommends attaching an open source license along with an "intent" document that clearly indicates how the government intends the code to be released, even if in the United States public domain applies.

You can use [this site to explore (and choose) an open source license](https://choosealicense.com). The Code.mil team recommends using a permissive license unless someone very familiar with copyleft licenses and how they operate both legally and technically is directly involved with the project. Our suggestions for permissive licenses are **MIT**, **ISC**, or **BSD-3** unless patents are potentially involved in which case we suggest Apache 2.0 although the others work too. Do not misunderstand these suggestions -- many of us on the Code.mil believe in the free software movement and GPL based licenses, but projects managed by the Federal government are not always the best candidates for copyleft licenses.

### Step 3: Add License Documents

Now that you've chosen a license you should add a few documents to the codebase to identify the project and provide the guidance mentioned above in Step 2. The first document is your license itself, typically this will be named "LICENSE" (or maybe "LICENSE.md"). You should accompany this with a document outlining your intent for the use of this code. We suggest adding a document called "INTENT.md" to the code.

You can see examples of these documents in the code repository for this very website!

* [LICENSE.md](https://github.com/Code-dot-mil/code.mil/blob/master/LICENSE.md)
* [INTENT.md](https://github.com/Code-dot-mil/code.mil/blob/master/INTENT.md)

<section class="usa-alert usa-alert-info">
  <article class="usa-alert-body">
    <h4 class="usa-alert-heading">Keep the Copyright!</h4>
    <p class="usa-alert-text">
      You might notice in the <a href="https://github.com/Code-dot-mil/code.mil/blob/master/LICENSE.md">LICENSE.md</a> file that there is a copyright line. That one is key, and you should keep it, even if you switch to a different license. Note that if this project was developed <strong>with a contractor</strong> that the contractor company name should also be listed here. Here is an example:
    </p>
    <p><em>
      "Copyright (c) 2017-2018 U.S. Federal Government (in countries where recognized)<br>
      Copyright (c) 2018 ABC Company, Inc."
    </em></p>
  </article>
</section>

### Step 4: Contributions

The last piece of documentation you absolutely need is how people can contribute to your project, and what they must do. The Code.mil team has taken the approach of using a Developer Certificate of Origin (DCO) process, but a slightly lighter version. Essentially, contributors agree that their submission is their own original work and release any expectation of compensation, etc. The difference between a traditional DCO process and this slightly lighter version is that with the lighter version the DCO "sign off" is only made one time for the entire project in `CONTRIBUTORS.md` as opposed to the traditional DCO process, which requires a sign off for every commit.

You can read the contributing documentation for this site to see an example of what this looks like:

* [CONTRIBUTING.md](https://github.com/Code-dot-mil/code.mil/blob/master/CONTRIBUTING.md)
* [CONTRIBUTORS.md](https://github.com/Code-dot-mil/code.mil/blob/master/CONTRIBUTORS.md)

### Step 5: Release it!

Now that you have all the pieces in place, it's time to release the code publicly! There are lots of ways to do this, but essentially you are posting the source code (and documentation) online for all to see. Sites like GitHub, BitBucket, and GitLab provide an easy way for the public to track your progress and submit contributions. That said, if you aren't using Git as your source control tool you can put the code up in any manner you wish, so long as changes can be tracked.

If you aren't sure where to post the code, or you need help getting source control set up, [contact us](mailto:{{site.email}}) and we can advise you!

<section class="usa-alert usa-alert-info">
  <article class="usa-alert-body">
    <h4 class="usa-alert-heading">Using GitHub?</h4>
    <p class="usa-alert-text">
      If you plan to use GitHub then we encourage you to add the <a href="https://github.com/topics/code-mil"><strong><code>code-mil</code></strong></a> topic to your repository. This will allow for easy discoverability by other developers within and outside of the government.
    </p>
  </article>
</section>

### Step 6: OMB Policy Tracking

The last piece of this process is adding your project to the [code inventory](https://code.gov/#/policy-guide/docs/compliance/inventory-code) file that the DoD uses to comply with [OMB Policy (M-16-21)](https://code.gov/#/policy-guide/policy/open-source). But don't worry, **we'll take care of that for you**. You just need to contact us to tell us about your project!

<a href="/tell-us-about-your-code.html" class="usa-button">Tell us about your project</a>
