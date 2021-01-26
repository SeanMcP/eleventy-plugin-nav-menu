const CSS_STRING = `%CSS%`;
const JS_STRING = `%JS%`;

module.exports = function navMenuPlugin(config) {
  config.addShortcode("navMenuStyles", () => {
    return '<style data-nav-menu="css">' + CSS_STRING + "</style> ";
  });

  config.addShortcode("navMenuScript", () => {
    return '<script data-nav-menu="js">' + JS_STRING + "</script> ";
  });

  config.addShortcode("navMenu", function (nav) {
    const items = nav.reduce((acc, item) => {
      acc += `<a ${
        item.url === this.page.url ? `aria-current="page"` : ""
      } href="${config.getFilter("url")(item.url)}">${item.title}</a>`;
      return acc;
    }, "");
    return `
        <div data-nav-menu="container">
            <nav aria-label="desktop site navigation" data-nav-menu="desktop">
                ${items}
            </nav>
            <button data-nav-menu="open">Menu</button>
            <nav
                aria-hidden="true"
                aria-label="mobile site navigation"
                data-nav-menu="mobile"
                hidden="true"
            >
                <button data-nav-menu="close">Close</button>
                ${items}
            </nav>
        </div>
        `;
  });
};
