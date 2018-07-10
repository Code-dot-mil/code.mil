---
title: Getting Started
updated_at: 2018-04-03
---

This page will help you understand how to participate in Code.mil and comply with [OMB policy (M-16-21)](https://code.gov/#/policy-guide/docs/overview/introduction) for [open source code](https://code.gov/#/policy-guide/policy/open-source). Get started by answering a few questions, and then we can direct you to the right information or start a more in depth conversation.

<section class="decision-tree">
  {%- for node in site.data.tree_nodes -%}
    <div class="tree-node" id="tree-node-{{node.id}}">
      <h3>{{ node.title }}</h3>
      <p>{{ node.content | markdownify }}</p>

      {%- if node.options -%}
        <aside class="tree-node-options">
          {%- for option in node.options -%}
            <a href="#tree-node-{{ option.link }}" class="usa-button-primary tree-link">{{ option.text }}</a>
          {%- endfor -%}
        </aside>
      {%- endif -%}
    </div>
  {%- endfor -%}

  <div class="tree-reset">
    <button class="usa-button-secondary">Reset Guide</button>
  </div>
</section>
