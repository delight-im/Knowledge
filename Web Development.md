# Web development

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
 * If you don't have any favicon (yet), at least provide an empty icon using `<link rel="icon" type="image/png" href="data:image/png;base64,iVBORw0KGgo=">`. This prevents the additional requests by each client resulting in `404 Not Found` only.
 * Never store any credentials or secrets in your client-side code.
 * Enabling SSL/TLS on your site may cut your AdSense revenue in half because Google cannot show ads from any non-HTTPS ad server.
 * You should check [whether Google thinks you're web pages are mobile-optimized](https://www.google.com/webmasters/tools/mobile-friendly/) because such pages receive a ranking boost in Google's search results on mobile devices.
 * Read [Google's guidelines for mobile-optimized websites](https://developers.google.com/webmasters/mobile-sites/mobile-seo/) to see what you can do to ensure a great mobile experience on your website.
 * Always add `rel="nofollow"` to links in user-generated content to make spam useless to the spammers.
 * You may put static content up on a separate domain (*not* a subdomain) without cookies to speed up delivery of content.
 * Use HTTP caching (e.g. via the `Cache-Control` header) and understand what to cache and what *not* to cache. Usually, you'll want to cache media files, CSS and JavaScript resources. This will help you improve page load times and save bandwidth.
 * *Never* trust user input, i.e. you must always filter, validate or escape it.
 * Make as few separate HTTP request as possible.
 * Always put CSS and JavaScript code into separate files (from the HTML) so that they can be cached.
 * "By 'hypertext', I mean non-sequential writing — text that branches and allows choices to the reader, best read at an interactive screen. As popularly conceived, this is a series of text chunks connected by links which offer the reader different pathways." (Ted Nelson)
 * "[Users] said they were more likely to believe Web sites that looked professionally designed." (The Stanford Web Credibility Project)
 * If you don't want to exclude any pages as per robots exclusion standard, at least include an empty `robots.txt` file to prevent recurring `404 Not Found` errors.

## HTML

 * Every HTML page should start with the lines

   ```html
   <!DOCTYPE html>
   <html lang="{pageLanguage}">
   <head>
       <meta charset="{charset}">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1">
   ```

   in exactly that order, where `{pageLanguage}` is an [ISO 639](https://de.wikipedia.org/wiki/ISO_639) or [BCP47](http://www.ietf.org/rfc/bcp/bcp47.txt) code, e.g. `en` or `de`, and `{charset}` is the character encoding that the page uses, e.g. `utf-8`.

## Domains

 * Domain extensions (TLDs) that Google treats as *generic*, i.e. suitable for international applications that are not targeted at a specific country, are the gTLDs `.aero`, `.biz`, `.cat`, `.com`, `.coop`, `.edu`, `.gov`, `.info`, `.int`, `.jobs`, `.mil`, `.mobi`, `.museum`, `.name`, `.net`, `.org`, `.pro`, `.tel` and `.travel`, among more recent additions, and the ccTLDs `.ad`, `.as`, `.asia`, `.bz`, `.cc`, `.cd`, `.co`, `.dj`, `.eu`, `.fm`, `.io`, `.la`, `.me`, `.ms`, `.nu`, `.sc`, `.sr`, `.su`, `.tv`, `.tk` and `.ws`.

## RESTful APIs

 * "Objects in a typical REST system are addressable by URI and interacted with using verbs in the HTTP protocol. An HTTP GET to a particular URI fetches an object and returns a server-specified set of fields. An HTTP PUT edits an object; an HTTP DELETE deletes an object; and so on." (Nick Schrock)
 * Whenever you have successfully created a new resource via `POST`, send a `201 Created` response code and a `Location` header specifying where new new resource is located.
 * "Fetching complicated object graphs [from REST systems] require[s] multiple round trips between the client and server to render single views. For mobile applications operating in variable network conditions, these multiple roundtrips are highly undesirable." (Nick Schrock)
 * "REST endpoints are usually weakly-typed and lack machine-readable metadata. [...] Developer[s] deal with systems that lack this metadata by inspecting frequently out-of-date documentation and then writing code against the documentation." (Nick Schrock)

## Forms

 * "Literally including the phrase 'optional' after a label is much clearer than any visual symbol you could use to mean the same thing." (Luke Wroblewski)
