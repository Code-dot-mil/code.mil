---
---

/*
 * The lines above allow Jekyll to run through this file during building, that
 * means we can use any site config variables! Just be careful, any double
 * curly braces will be interpreted by Jekyll, so escape them if you need them.
 */

(function() {

  // This is super fragile, but otherwise the header reads like we're
  // less official: "The .gov means it's official."
  var govBanner = document.querySelector('.usa-banner-guidance-gov strong');
  govBanner.innerText = govBanner.innerText.replace(/\.gov/, '.mil');

  /**
   * Finds nodes based on the given selector, starting from the provided root
   * node (or the document). The nodes are returned in a real Array versus a
   * NodeList for easier traversal
   * @param  {String} selector
   * @param  {Node} root
   * @return {Array}
   */
  function find(selector, root) {
    root = root || document;
    return Array.prototype.concat.apply([], root.querySelectorAll(selector));
  }

  /*
   * Find all instances of {{site.email}} and fill them with the actual email
   * from the site config.
   */
  var siteEmail = '{{site.email}}';
  find('[href*="\{\{site.email\}\}"]').forEach(function useConfigEmail(n) {
    n.innerHTML = n.innerHTML.replace(/\{\{site\.email\}\}/, siteEmail);
    n.setAttribute('href', n.getAttribute('href').replace(/\{\{site\.email\}\}/, siteEmail));
  });

  find('#main-content [href^="mailto"]').forEach(function addExternalClass(n) {
    n.classList.add('usa-external_link');
  });
  find('#main-content [href^="http"]').forEach(function addExternalClass(n) {
    if (!/code\.mil/.test(n.getAttribute('href'))) {
      n.classList.add('usa-external_link');
    }
  });


  /*
   * This block auto-identifies the subnav items for the left sidebar where
   * needed. This "if" block is where we specify the pages that will use it,
   * and the function below is where we do the work.
   */
  (function SubNav() {
    if (/^\/frequently\-asked\-questions/.test(window.location.pathname)) {
      insertSubNav('#main-content h1', '/frequently-asked-questions.html', 1);
    } else if (/^\/how\-to\-open\-source/.test(window.location.pathname)) {
      insertSubNav('#main-content h3', '/how-to-open-source.html', 1);
    }

    function insertSubNav(jumpNodeSelector, basePath, skipCount) {
      var list = document.querySelector('.usa-sidenav-sub_list');
      jumpNodeSelector = jumpNodeSelector || 'h1';
      basePath = basePath || '/';
      skipCount = skipCount || 0;

      if (list) {
        find(jumpNodeSelector)
          .forEach(function(node, i) {
            if (i < skipCount) { return; }

            var item = document.createElement('li');
            item.innerHTML = '<a href="' + basePath + '#' + node.getAttribute('id') + '">' + node.innerText + '</a>';
            list.appendChild(item);
          });
      }
    }
  })();

  (function DecisionTree() {
    var tree = document.querySelector('.decision-tree');
    if (!tree) { return; }

    var nodes = find('.tree-node', tree);
    nodes[0].classList.add('active');

    tree.addEventListener('click', function treeNodeButtonClick(e) {
      if (!e.target.classList.contains('tree-link')) { return; }

      e.preventDefault();

      var node = nodes.filter(function(n) { return n.getAttribute('id') === e.target.getAttribute('href').substr(1); })[0];
      if (node) {
        node.classList.add('active');
        window.scrollTo({ top: node.offsetTop });
        var answer = document.createElement('p');
        answer.classList.add('tree-node-answer');
        answer.innerText = e.target.innerText;
        e.target.parentNode.parentNode.appendChild(answer);
        e.target.parentNode.classList.add('hidden');
      }
    });

    tree.querySelector('a.tree-reset').addEventListener('click', function treeNodeButtonClick(e) {
      e.preventDefault();
      nodes.forEach(function(n, i) {
        if (i === 0) { return; }
        n.classList.remove('active');
      });
      find('.tree-node-options', tree).forEach(function(n) { n.classList.remove('hidden'); });
      find('.tree-node-answer', tree).forEach(function(n) { n.parentNode.removeChild(n); });
    });
  })();

})();
