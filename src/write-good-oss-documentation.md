---
title: How to Write Good Open Source Documentation
updated_at: 2018-10-11

subnav:
  - text: "Purpose of Documentation"
    href: "/write-good-oss-documentation.html#Purpose"
---

# Writing Good Documentation

## Introduction

### Purpose

Documentation introduces your project to visitors and provides easy-to-understand instructions for installing and using your project. 

Documentation also provides guidance for contributing including the process and requirements for submitting Pull Requests and Issues as well as any relatively small tasks like Commit messages. 

Not only does good documentation make your project user-friendly as a product but welcoming as a community. It also makes the community user-friendly by providing standards and guidelines not only for the above tasks but for conduct between community members.

## Writing a Good README.md

Your README is the first impression your project makes. Like any other "above the fold" content on a website home page, this is where visitors make the decision to user either the scrollbar or the Back button. You must simultaneously greet visitors with a smile and give your project's elevator pitch.

### Tips

- Provide links and explanations for other documentation you may have such as a CONTRIBUTING.md file, tutorials, other .md files for individual sections of a relatively large project, and to an online demo or the live app itself.
- 

## Writing a Good CONTRIBUTING.md

Provide preliminary guidance for Pull Requests such as "All pull requests should be a response to an active issue -- if there is no issue relevant to your contribution, create an issue so we can provide some feedback and nobody's time is wasted (or feelings hurt)."

### Tips

You might provide contact info for questions when opening an issue isn't appropriate.

## Writing Issues and Comments

A well-written issue includes everything you'd want to know before diving in. The issue might be something as simple as content, a tutorial or screenshot and those are often self-explanatory. 

Bug issues, on the other hand, should be described in depth. They should include:

- The expected behavior
- What actually happens instead
- Steps to reproduce the behavior
- Unique circumstances ("It only happens in Windows" or "It only happens in Netscape 7")

## Attracting Contributors with Labels

People contribute to open source for many reasons. They may be particularly interested in your project but they may also be searching for _any_ project that is a good fit for their time and skillset. When searching for a project to which they can contribute, potential contributors may filter them by language. They can further filter them by *label* so make your project and issues easy for those people to find in search results and target as a potential fit by labeling your issues. 

There are eight default labels including "help wanted", "bug", and "good first issue". You can also create your own custom labels. 

You can apply labels while creating an Issue or apply labels to one or more existing issues.

### Applying Labels While Creating a New Issue

While creating a new issue under the Issues tab, click the Labels button (looks like a Settings button or a gear) on the right and choose a label from the menu. 

<img width="500" height=auto src="https://github.com/jotasprout/code.mil/blob/how-to-write-documentation/src/assets/images/documentation/labelingNewIssue.png">

### Applying Labels to Existing Issues

Apply a label to one or more issues by selecting the issues' checkboxes under the Issues tab and choosing a label from the Label menu.

<img width="500" height=auto src="https://github.com/jotasprout/code.mil/blob/how-to-write-documentation/src/assets/images/documentation/labelMenu.png">

### Creating and Applying Custom Labels

Under the Issues tab, click the Labels button.

<img width="500" height=auto src="https://github.com/jotasprout/code.mil/blob/how-to-write-documentation/src/assets/images/documentation/issuesTab.png">

Give your label a name and choose a color.

<img width="500" height=auto src="https://github.com/jotasprout/code.mil/blob/how-to-write-documentation/src/assets/images/documentation/creatingLabel.png">

When creating your own, custom labels, make the names consistent with similar, common labels that others have created so potential contributors can find your Issues as easily as possible. Some common labels are

- "issue-type" (such as "documentation" or "content")
- "effort" required (i.e. "small")
- "skill-level" (i.e. "beginner")

Other less common but equally useful labels include:

- "low-hanging fruit"
- "Hacktoberfest"

Apply custom labels using the same process as default labels.

### Tips

- Provide guidelines for respect, courtesy, etc. in CONTRIBUTING.md or a "Code of Conduct" file.
- If your project uses multiple languages and skills, you might mention which specific language a potential contributor needs to work on this skill. Otherwise, they may start a task they expect only requires HTML and Javascript but quickly realizes they need some Ruby knowledge or something else the lack of which turns a "small" and "easy" issue into something prohibitive and discouraging. 

## Reviewing Pull Requests

Part of this is making sure the PR follows our own documentation, policies, and procedures.

It is always okay to say "no."

If the answer is "not yet," see Responding to Pull Requests.

### Responding to Pull Requests

- Respond promptly
- Respond, period. Repos with lists of unanswered PRs look bad and uninviting.
- Thank the contributor.
- If you're not accepting the PR, explain why in detail. Link to any relevant documentation. 
- If not accepting the PR, provide clear feedback so they can continue working
- Provide feedback, even if you're accepting the PR without changes. A lot of people are contributing as a learning experience.