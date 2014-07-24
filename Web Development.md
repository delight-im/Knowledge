# Web Development

 * Always have three versions of your CSS stylesheet files: style.css, style.min.css (minified) and style.min.css.gz (minified + gzipped).
 * Always have three versions of your JavaScript files: script.js, script.min.js (minified) and script.min.js.gz (minified + gzipped).
 * Minifiy your CSS and JavaScript files by removing unnecessary characters (white spaces, new lines etc.) without changing the functionality.
 * You can use the free online tool "cssminifier.com" if you want to minify your CSS stylesheets.
 * You can use the free online tool "jscompress.com" or the library "UglifyJS" if you want to minify your JavaScript files.
 * Always set the HTTP header "Cache-Control" to something like "max-age=604800" for CSS, JS and other assets to enable long-time caching.
 * If you make use of client-side caching of resources, you should version your file references in HTML like this: "style.css?v=123".
 * If you have versioned your referenced resources in HTML, you can just increase the version number to invalidate the cached file for users.
 * Use the free tool OptiPNG to post-process your PNG files. It does significantly shrink your file sizes and is a lossless optimization.
 * If you don't enable client-side caching of resources, the browser always checks for modifications, returning with status code 200 or 301.
 * In your server-side code, check whether the HTTP request header "Accept-Encoding" contains "gzip" and return gzipped resources accordingly.
 * Try to give every part of your website, every entity, a unique and permanent URL (permalink) for sharing and search engine optimization.
 * Usually, you only need a single font per website. Never use more than two different fonts, unless you have an exceptional reason for that.
 * Don't use too small objects, graphics, texts and menus. Be generous with spacing, for reasons of visual design and ease of use.
 * Use common design patterns from the web wherever possible, and repeat them across your pages. Users like simplicity more than creativity.
 * Never make your full website that wide that the browser has to add horizontal scrollbars. When users scroll, they scroll vertically.
 * Use loading graphics (e.g. rotating circles) for all asynchronous requests that are started by the client to make the progress visual.
 * Use as little audio as possible: It is expected almost only in videos and on music sites, and you can never rely on audio to be switched on.
 * Make clickable things visually different from the rest of the page: Special coloring, hover effects, pointer symbol for mouse cursor.
 * For desktop computers, limit the maximum width of your content. Nobody likes to read texts that flow from the very left to the very right.
 * Don't make use of special browser plugins (Flash, Silverlight, Java, etc.) if possible. There are good alternatives in almost every case.
 * Always set your pages' charset, the same both in your server-side code and in your HTML markup. There are very few reasons not to use UTF-8.
 * Always set a favicon for your website. Users will see it in their tab lists and in their bookmarks, and will recognize your website.
 * Never store any credentials or secrets in your client-side code.
* Black (`#000`) on white is never good, it makes for high contrast and is difficult to use. Possible alternatives include `#333`, `#545454`, `#141823` or `#292f33`
