# MySQL

## Geographic coordinates

### Storing data

Save your geographic coordinates (latitude and longitude) in a `Point` column and add a `SPATIAL` index on that column. Insert values into that column as `Point(lat_dec, lon_dec)`, e.g. `Point(52.518611111111, 13.408333333333)`.

### Querying with a distance search

In order to get all rows with a `Point` in `point_column` that are within `$radius` kilometers of `($lat, $lon)`, use the following condition:

```
WHERE
	MBRContains(
		LineString(
			Point(
				$lat - $radius / 111.133,
				$lon - $radius / 111.320 * COS(RADIANS($lat))
			),
			Point(
				$lat + $radius / 111.133,
				$lon + $radius / 111.320 * COS(RADIANS($lat))
			)
		),
		point_column
	)
```

### Selecting distances

In order to calculate an approximation of the distance between the `Point` in `point_column` and `($lat, $lon)`, use the following expression:

```
SELECT
	SQRT(POW((X(point_column) - $lat) * 111.133, 2) + POW((Y(point_column) - $lon) * 111.320 / COS(RADIANS($lat)), 2)) AS distance
```
