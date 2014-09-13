# AngularJS

## Preventing the uncompiled site from flashing in the beginning

While the page is still loading and before AngularJS has kicked in, the uncompiled site with all the AngularJS markup may flash.

To prevent this, add the following to your page's CSS:

```
[ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
  display: none !important;
}
```

Then add the two attributes ` ng-cloak class="ng-cloak"` to the page's `<body>` tag.

## Placing AngularJS in `<head />` vs `<body />`

You can safely reference the AngularJS JavaScript file from the end of `<body />`, i.e. right before the closing `</body>` tag, just as you (should) do with all your other JavaScript files.
