# Android development

 * Use the `Linkify` class or any `TextView`'s `autoLink` attribute to make links, email addresses and phone numbers clickable in your `TextView`.
 * Never change the class name or package name of your default Activity that is started by the launcher. It will break home screen shortcuts. If you really need to change your default Activity's class name or package name, add an alias with the old name for compatibility.
 * Always create one keystore per app for signing your APKs. Otherwise, when selling an app, you'll have to hand over the shared keystore.
 * The ratio for Android's density buckets from `ldpi` to `xxxhdpi` is `3:4:6:8:12:16`.
 * Apart from the normal `android:textColor`, you can also set `android:textColorHint`, `android:textColorLink` and `android:textColorHighlight` for a `TextView`.
 * When using an `ListView` or `GridView` (or any other `AbsListView`) and the `Adapter` has items of varying height, you must set `android:smoothScrollbar="false"` on the `View` in XML. While the scrollbar will not run smoothly anymore, it will have a fixed height and doesn't change its size all the time anymore.
