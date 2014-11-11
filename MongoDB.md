# MongoDB

 * If you want to search for string values with a regular expression, write `db.collection.find({ "name": { "$regex": "^a"})`, for example. This will find all records that have a `name` beginning with `a`. An index can only be used if you search for a prefix using `^`. You can even search on the `_id` field, but only if you're using plain strings there and no auto-generated `ObjectId` values.
