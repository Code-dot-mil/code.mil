
// This is super fragile, but otherwise the header reads like we're
// less official: "The .gov means it's official."
let govBanner = document.querySelector('.usa-banner-guidance-gov strong');
govBanner.innerText = govBanner.innerText.replace(/\.gov/, '.mil');
