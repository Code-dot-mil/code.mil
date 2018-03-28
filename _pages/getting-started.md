---
title: Getting Started
permalink: /getting-started.html

layout: page
sidenav: side

tree-nodes:
  - title: Has the project started?
    id: start
    content: Depending on where you are in a project can change how you participate in the open source pilot. Let's start with **whether or not there is any code written yet**. This does not exclude your project in any way, it's just a starting point!
    options:
      - text: We have code
        link: yes-code
      - text: No code yet
        link: contractor
      - text: Just looking for info
        link: info-only

  - title: Will the work be done by a contractor?
    id: contractor
    content: Code produced by a contractor can still be open sourced! The easiest way to do this is to work language into the contract to require open sourcing the code as the delivery method.
    options:
      - text: No, gov only
        link: gov-only
      - text: Yes, contract is complete
        link: contract
      - text: Yes, but no contract yet
        link: no-contract

  - title: Require Delivery by OSS
    id: no-contract
    content: |
      The easiest way to make this project open source is going to be to include language in the contract requiring delivery of the source code as an open source repository. We have some sample language that we can provide to start down that path!

      If you need help, please reach out to us by email at [{{site.email}}](mailto:{{site.email}}) so that we can start the conversation.

  - title: Who wrote the code?
    id: yes-code
    content: We need to know who developed the code in order to determine how it can be open sourced. Regardless of what the case was, the code may be able to be open sourced! The question comes down to who holds the copyright.
    options:
      - text: Contractor Only
        link: contract-state
      - text: Gov Only (Military, et al.)
        link: gov-only
      - text: Mix of Gov and Contractor
        link: mixed-code

  - title: Is the project completed?
    id: contract-state
    content: Depending on whether or not the development is ongoing the answer might be different for how to open source this code. Primarily this question is asking **if you have received delivery** of the final product - and what form that delivery was in.
    options:
      - text: "Yes"
        link: contract-complete
      - text: "No"
        link: contract

  - title: ""
    id: contract-complete
    content: |
      Since the project has been completed, you should have received final delivery. What's key now is how that delivery was made: did you receive all of the source code, including any testing resources, build artifacts, documentation, etc? Or did you only receive a final built product?

      If it was only the _final built product_ there might a problem, **you should review your contract** to see if you were supposed to receive the full source code. If you were, it looks like it's time to get the lawyers involved.

      ### We have the source code

      If you did receive **all** source code, artifacts, and documentation then we should be able to help you open source that. We suggest that you **send us an email at [{{site.email}}](mailto:{{site.email}})** to start the process. What we'll need to determine is who holds the copyright. Typically this is the contractor (yes, even if they delivered the code to the government), and they would need to attach the open source license.

      <a href='/how-to-open-source.html' class='usa-button'>How to Open Source</a>

  - title: Two Options
    id: contract
    content: |
      You should **review your contract** to see how delivery of the final product is expected. What we'd like to see is that delivery will be of all source code, development operations and testing code and artifacts, build code and artifacts, etc. If the contractor is only expected to deliver a working product then you might not get access to the code at all.

      Your main options at this point (although there are others) are to:
        * modify the contract to require delivery by open source code repository; or
        * wait for delivery and open source the resulting code (this could be tricky).

      There are a lot of possibilities within those options, however. We encourage you to read our [frequently asked questions](/frequently-asked-questions.html) and then reach out to us by email at [{{site.email}}](mailto:{{site.email}}) to continue the conversation.

  - title: ""
    id: gov-only
    content: |
      Awesome! We're really happy to hear about all the great things that the DoD is doing on a regular basis. You may not be aware, but most code produced by a U.S. federal employee within the scope of their employment does not have copyright protections in the U.S. and certain foreign jurisdictions. In the U.S., creative works (like code) without copyright protections are sometimes referred to as "public domain." Not all countries recognize the concept of public domain, and many countries actually recognize copyright protections for code written by U.S. federal employees.

      However, other countries can enforce our open source licenses, even for code in the public domain. Additionally, it can be good guidance for public contributors to identify what open source license and contribution policy govern a project. The Code.mil team recommends attaching an open source license along with an "intent" document that clearly indicates how the government intends the code to be released, even if in the United States the law says it is public domain.

      ### Next Steps

      Read up on exactly what steps you can take to release your code project as open source software...

      <a href='/how-to-open-source.html' class='usa-button'>How to Open Source</a>

  - title: ""
    id: mixed-code
    content: |
      Great! We understand that partnering with the private sector is how most project development happens in the DoD. You may still be able to open source the resulting code for the project depending on the U.S. federal government's data rights in the contract! The key is to **identify any pieces of the code that are proprietary to the contractor or otherwise restricted from public disclosure**. If there are such pieces then you may need to segment those so that you don't violate the license terms in the contract. That said, if you have Unlimited Rights in segregable portions of the code, you should be able to follow the Code.mil guideline for open sourcing that code!

      You will need to attach an appropriate license to the project, and because it was developed in part by the U.S. Federal Government you will need to specify the "intent" of the licensing (we have recommended language in the "How to" section). This  language is recommended because most code produced by a U.S. federal employee within the scope of their employment does not have copyright protections in the U.S. and certain foreign jurisdictions. This matters because  it affects the enforceability of your chosen license depending on the jurisdiction and who wrote the code. But no worries! You can still attach an open source license to your project and govern your project per that license.

      ### Next Steps

      Read up on exactly what steps you can take to release your code project as open source software...

      <a href='/how-to-open-source.html' class='usa-button'>How to Open Source</a>

  - title: ""
    id: info-only
    content: |
      That's great! We're glad you are interested in open source. You may want to start by reading our [Why Open Source](/why-open-source.html) page and some of the [Frequently Asked Questions](/frequently-asked-questions.html). You can also explore information on the OMB policy itself over on the [Code.gov](https://code.gov) website.

      If you would like to have a follow up conversation, feel free to reach out to us at [{{site.email}}](mailto:{{site.email}})
---

## Getting Started

This page will help you understand how to participate in Code.mil and comply with [OMB policy (M-16-21)](https://code.gov/#/policy-guide/docs/overview/introduction) for [open source code](https://code.gov/#/policy-guide/policy/open-source). Get started by answering a few questions, and then we can direct you to the right information or start a more in depth conversation.

<section class='decision-tree'>
  {% for node in page.tree-nodes %}
  <article class='tree-node' id='tree-node-{{node.id}}'>
    <h3>{{ node.title }}</h3>
    <p>{{ node.content | markdownify }}</p>

    {% if node.options%}
      <aside class='tree-node-options'>
        {% for option in node.options %}
        <a class='usa-button-primary tree-link' href='#tree-node-{{ option.link }}'>{{ option.text }}</a>
        {% endfor %}
      </aside>
    {% endif %}
  </article>
  {% endfor %}
</section>
