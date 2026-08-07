---
layout: home

class: page-home

tagline: Open Source at DoW

hero:
  image: /assets/images/hero.jpg
  callout:
    alt: "DoW Project Owners:"
    text: Learn more about open source at DoW
  button:
    text: Get Started
    href: /getting-started.html

graphics:
  - image:
      src: /assets/images/arrow-right-white.png
      alt: arrow right
    title: Connect with us.
    description: We believe that software created by the government should be shared with the public, and we want to collaborate with civic-minded peers to make this happen. Reach out to us to start the discussion!<br><a href="mailto:{{site.email}}" class="usa-button usa-button-small">{{site.email}}</a> <a href="https://github.com/Code-dot-mil/code.mil" class="usa-button usa-button-small">Check us out on GitHub</a>
  - image:
      src: /assets/images/arrow-right-white.png
      alt: arrow right
    title: Make us better.
    description: We've drafted this documentation in partnership with the open source community. You can help improve our open source strategy by improving these documents! Open an issue or a pull request with your suggestions.

intro: |
  The U.S. Department of War (<abbr title="Department of War">DoW</abbr>) faces unique challenges in open sourcing its code. Unlike most software projects, code written by U.S. Federal government employees typically does not have copyright protections under U.S. and some international laws. This can make it difficult to attach an open source license to our code. The Defense Digital Service (<abbr title="Defense Digital Service">DDS</abbr>) worked with the open source community starting in early 2017 to develop a guideline for supporting open source software (<abbr title="open source software">OSS</abbr>) within the Department. Code.mil is now maintained by the DoW CIO.
---

<div class="usa-width-two-thirds" markdown="1">

## What is Code.mil?

Code.mil is an experiment in open source at the U.S. Department of War. The goal is to foster open collaboration with the developer community around the world on DoW open source projects. During the first phase, which launched in early 2017, we wrote a strategy for open sourcing code written by DoW employees, and then we called upon the OSS developer community to help us finalize that plan.

We are calling on the entire DoW developer community to reach out to the DoW CIO to begin tracking open source projects coming out of the Department.

In the future we will tackle issues around procuring source code and addressing how this strategy might facilitate technology transfer. The hope is that Code.mil will encourage conversation around these topics and allow anyone around the world to contribute knowledge and code for DoW projects.

This initiative is not intended to set DoW policy, but rather is exploring alternate ways to join the open source and free software communities. You can read more about the [U.S. Federal Source Code Policy](https://digital.gov/resources/requirements-for-achieving-efficiency-transparency-and-innovation-through-reusable-and-open-source-software/) on the [Digital.gov](https://digital.gov) web site.

</div>
<div class="usa-width-one-third" markdown="1">

## Press

<ul>
  {%- for story in site.data.press -%}
    <li>
      <a href="{{ story.press_url }}">{{ story.title }} ~{{ story.author}}</a>
    </li>
  {%- endfor -%}
</ul>

</div>
