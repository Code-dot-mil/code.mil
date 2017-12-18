
// This is super fragile, but otherwise the header reads like we're
// less official: "The .gov means it's official."
let govBanner = document.querySelector('.usa-banner-guidance-gov strong');
govBanner.innerText = govBanner.innerText.replace(/\.gov/, '.mil');

if (window.location.pathname === '/frequently-asked-questions') {
  var list = document.querySelector('.usa-sidenav-sub_list');

  if (list) {
    Array.prototype.concat.apply([], document.querySelectorAll('#main-content h1'))
      .forEach(function(node, i) {
        if (i === 0) { return; }  // We manual add the first FAQ because otherwise the subnav ul won't exist

        var item = document.createElement('li');
        item.innerHTML = '<a href="/frequently-asked-questions#' + node.getAttribute('id') + '">' + node.innerText + '</a>';
        list.appendChild(item);
      });
  }
}
