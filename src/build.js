const fs = require("fs");

(async () => {
  const index = fs.readFileSync("./src/index.js").toString();
  const css = fs.readFileSync("./src/nav-menu.css").toString();
  const js = fs.readFileSync("./src/nav-menu.js").toString();

  const minifiedCSS = require("cssmin")(css);
  const minifiedJS = await require("terser").minify(js);

  const built = index.replace(/%CSS%/, minifiedCSS).replace(/%JS%/, minifiedJS.code);
  fs.writeFileSync("./lib.js", built);
})();
