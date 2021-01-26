(function siteNav() {
  const closeButton = document.querySelector('[data-nav-menu="close"]');
  const mobileNav = document.querySelector('[data-nav-menu="mobile"]');
  const openButton = document.querySelector('[data-nav-menu="open"]');

  const mobileLinks = mobileNav.querySelectorAll("a");
  const firstMobileLink = mobileLinks[0];
  const lastMobileLink = mobileLinks[mobileLinks.length - 1];

  closeButton.addEventListener("keydown", (event) => {
    if (event.key === "Tab" && event.shiftKey) {
      event.preventDefault();
      lastMobileLink.focus();
    }
  });

  lastMobileLink.addEventListener("keydown", (event) => {
    if (event.key === "Tab" && !event.shiftKey) {
      event.preventDefault();
      closeButton.focus();
    }
  });

  function handleClose(event) {
    event.preventDefault();

    mobileNav.setAttribute("aria-hidden", true);
    mobileNav.hidden = true;
    openButton.focus();

    window.removeEventListener("keydown", handleClose);
  }

  openButton.addEventListener("click", (event) => {
    event.preventDefault();

    mobileNav.removeAttribute("aria-hidden");
    mobileNav.removeAttribute("hidden");
    // This timeout fixes a Safari bug where the
    // focus was staying on openButton when
    // selecting with the keyboard. I appears to
    // be caused by removing mobileNav's hidden
    // attribute. This seemed a reasonable work-
    // around.
    setTimeout(() => firstMobileLink.focus(), 0);

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        handleClose(event);
      }
    });
  });

  closeButton.addEventListener("click", handleClose);
})();
