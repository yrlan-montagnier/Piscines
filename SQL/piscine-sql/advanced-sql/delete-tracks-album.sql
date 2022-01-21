DELETE FROM tracks
WHERE 'Facelift' IN (
	SELECT albums.Title
	FROM albums
	)