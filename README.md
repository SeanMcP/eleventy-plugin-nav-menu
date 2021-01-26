# `eleventy-plugin-nav-menu`

[![npm](https://img.shields.io/npm/v/eleventy-plugin-nav-menu.svg)](https://npmjs.com/package/eleventy-plugin-nav-menu) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/eleventy-plugin-nav-menu.svg)](https://npmjs.com/package/eleventy-plugin-nav-menu) [![npm](https://img.shields.io/npm/dt/eleventy-plugin-nav-menu.svg)](https://npmjs.com/package/eleventy-plugin-nav-menu)

⛵️ A responsive nav menu shortcode for Eleventy

## Install

```sh
npm install eleventy-plugin-nav-menu
```

## Usage

```js
const navMenuPlugin = require('eleventy-plugin-nav-menu');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(navMenuPlugin)

    return { /* ... */ }
}
```

The plugin adds three shortcodes: 

- `navMenu`: A chunk of html
- `navMenuStyles`: Minimal (and minified) styles
- `navMenuScript`: Minified JavaScript

Add them to your layout like so:

```html
<!DOCTYPE html>
    <head>
        {% navMenuStyles %}
    </head>
    <body>
        <!-- Use with @11ty/eleventy-navigation is optional -->
        {% navMenu collections.all | eleventyNavigation %}
    </body>
    {% navMenuScript %}
</html>
```

## Warning

This library is a work in progress. Expect changes before `v1.0.0` release. Use at your own risk.

## License

MIT © [Sean McPherson](https://seanmcp.com)