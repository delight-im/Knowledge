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

## Unique IDs inside `ng-repeat`

Whenever you're using HTML tags with an ID or `<label for="..."></label>` inside `ng-repeat`, append `{{$index}}` to the ID reference in HTML to make sure it is always unique.

If you have nested `ng-repeat` directives, you may use `{{$parent.$index}}` as well to access the index of the outer `ng-repeat`.

## Binding to primitives inside `ng-repeat`

You cannot bind to primitives directly in `ng-repeat`:

```
// { names: [ "John", "Jane" ] }
<div ng-repeat="name in names">
	<input type="text" ng-model="name" />
</div>
```

Instead, you have to reference the value using the parent and the index:

```
// { names: [ "John", "Jane" ] }
<div ng-repeat="name in names">
	<input type="text" ng-model="names[$index]" />
</div>
```
