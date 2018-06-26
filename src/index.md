---
layout: home

tagline: Open Source at DoD

hero:
  image: /assets/images/hero.jpg
  callout:
    alt: "DoD Project Owners:"
    text: Learn more about open source at DoD
  button:
    text: Get Started
    href: /getting-started.html

graphics:
  - image:
      src: /assets/images/arrow-right-white.png
      alt: 'arrow right'
    title: Connect with us.
    description: We believe that software created by the government should be shared with the public, and we want to collaborate with civic-minded peers to make this happen. Reach out to us to start the discussion!<br><a href='mailto:{{site.email}}' class='usa-button usa-button-small'>{{site.email}}</a> <a href='https://github.com/Code-dot-mil/code.mil' class='usa-button usa-button-small'>Check us out on GitHub</a>
  - image:
      src: /assets/images/arrow-right-white.png
      alt: 'arrow right'
    title: Make us better.
    description: We've drafted this documentation in partnership with the open source community. You can help improve our open source strategy by improving these documents! Open an issue or a pull request with your suggestions.


intro: |
  The U.S. Department of Defense (<abbr title='Department of Defense'>DoD</abbr>) faces unique challenges in open sourcing its code. Unlike most software projects, code written by U.S. Federal government employees typically does not have copyright protections under U.S. and some international laws. This can make it difficult to attach an open source license to our code. The [Defense Digital Service](https://dds.mil) (<abbr title='Defense Digital Service'>DDS</abbr>) has been working with DoD and the open source community since early 2017 to develop a guideline for supporting open source software (<abbr title='open source software'>OSS</abbr>) within the Department.

---

## What is Code.mil?

Code.mil is an experiment in open source at the U.S. Department of Defense. The goal is to foster open collaboration with the developer community around the world on DoD open source projects. During the first phase, which launched in early 2017, we wrote a strategy for open sourcing code written by DoD employees, and then we called upon the OSS developer community to help us finalize that plan. You can read the official [press release](https://www.defense.gov/News/News-Releases/News-Release-View/Article/1092364/dod-announces-the-launch-of-codemil-an-experiment-in-open-source/) on the DoD website.

At the moment we're getting our first open source projects published in the open. We are also calling on the entire DoD developer community to reach out to DDS to begin tracking all of the great OSS projects coming out.

In the future we will tackle issues around procuring source code and addressing how this strategy might facilitate technology transfer. The hope is that Code.mil will encourage conversation around these topics and allow anyone around the world to contribute knowledge and code for DoD projects.

This initiative is not intended to set DoD policy, but rather is exploring alternate ways to join the open source and free software communities. You can read more about the [U.S. Federal Source Code Policy](https://code.gov/#/policy-guide/docs/overview/introduction) on the [Code.gov](https://code.gov) web site.

## Press

<ul>
  {% for story in site.data.press %}
  <li>
    <a href="{{ story.press_url }}">
      {{ story.title }} ~{{ story.author }}
    </a>
  </li>
  {% endfor %}
</ul>
