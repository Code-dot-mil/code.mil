---
---

/*
 * The lines above allow Jekyll to run through this file during building, that
 * means we can use any site config variables! Just be careful, any double
 * curly braces will be interpreted by Jekyll, so escape them if you need them.
 */

(function() {

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
      insertSubNav('#main-content h2', '/frequently-asked-questions.html', 1);
    } else if (/^\/how\-to\-open\-source/.test(window.location.pathname)) {
      insertSubNav('#main-content h3', '/how-to-open-source.html', 1);
    }

    function insertSubNav(jumpNodeSelector, basePath, skipCount) {
      var list = document.querySelector('.usa-sidenav-sub_list');

      jumpNodeSelector = jumpNodeSelector || 'h1';
      basePath = basePath || '/';
      skipCount = skipCount || 0;

      if (list) {
        find(jumpNodeSelector).forEach(function(node, i) {
          if (i < skipCount) {
            return;
          }

          var item = document.createElement('li');

          item.innerHTML = '<a href="' + basePath + '#' + node.getAttribute('id') + '">' + node.innerText + '</a>';
          list.appendChild(item);
        });
      }
    }
  })();

  (function DecisionTree() {
    var tree = document.querySelector('.decision-tree');

    if (!tree) {
      return;
    }

    var nodes = find('.tree-node', tree),
        hashHistory = [];

    // Pull tree history from hash
    function updateHashHistory() {
      hashHistory = window.location.hash.replace('#','').split('!');

      if (hashHistory.length == 1) {
        hashHistory = ['tree-node-start'];
      }
    }

    // Update tree to reflect hash state
    function renderTree() {
      updateHashHistory();

      var treeNodes = nodes.filter(function(n) {
        return n.classList && n.classList.contains('tree-node');
      });

      for (var i = 0; i < treeNodes.length; i++) {
        var node = treeNodes[i];

        if (hashHistory.includes(node.getAttribute('id'))) {
          node.classList.add('active');
        } else {
          node.classList.remove('active');
        }

        var childNodes = Array.prototype.concat.apply([], node.childNodes),
            childNode = childNodes.filter(function(n) {
              return n.classList && n.classList.contains('tree-node-options');
            })[0];

        if (!childNode) {
          continue;
        }

        if (hashHistory[hashHistory.length - 1] == node.getAttribute('id')) {
          childNode.classList.remove('hidden');
        } else {
          childNode.classList.add('hidden');
        }
      }

      if (hashHistory.length > 1) {
        var node = document.getElementById(hashHistory[hashHistory.length - 1]);

        node.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }

    // Render tree as it is now
    renderTree();

    // Re-render tree each time the hash changes
    window.addEventListener('hashchange', function treeNodeHashChange() {
      renderTree();
    });

    // Update hash each time the tree is clicked
    tree.addEventListener('click', function treeNodeButtonClick(event) {
      if (!event.target.classList.contains('tree-link')) {
        return;
      }

      event.preventDefault();

      var node = nodes.filter(function(n) {
        return n.getAttribute('id') === event.target.getAttribute('href').substr(1);
      })[0];

      if (node) {
        hashHistory.push(node.getAttribute('id'));
        window.location.hash = hashHistory.join('!');
      }
    });

    // support reset
    tree.querySelector('.tree-reset button').addEventListener('click', function treeNodeButtonClick(event) {
      event.preventDefault();

      window.location.hash = '';
    });
  })();
  
  (function highlightFormErrors() {
    var inputs = find('.usa-form input, .usa-form textarea, .usa-form select');
    
    function highlightInput(n) {
      if (n.validity.valid) {
        if (n.getAttribute('required') !== null) {
          n.classList.add('usa-input-success');
        }
        n.parentNode.classList.remove('usa-input-error');
        var label = find('label', n.parentNode);
        if (label.length) {
          label[0].classList.remove('usa-input-error-label');
        }
      } else {
        n.classList.remove('usa-input-success');
        n.parentNode.classList.add('usa-input-error');
        var label = find('label', n.parentNode);
        if (label.length) {
          label[0].classList.add('usa-input-error-label');
        }
      }
    }
    
    find('.usa-form button, .usa-form [type="submit"]').forEach(function(n) {
      n.addEventListener('click', function() {
        inputs.forEach(highlightInput);
      });
    });
    
    find('.usa-form .past_dates').forEach(function(n) {
      n.setAttribute('max', (new Date()).toISOString().split('T')[0]);
    });
    
    inputs.forEach(function(n) {
      n.addEventListener('blur', function() {
        highlightInput(n);
      });
    });
  })();
})();
