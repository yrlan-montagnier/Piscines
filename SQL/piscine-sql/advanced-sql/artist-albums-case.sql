SELECT artists.Name, COUNT(albums.AlbumId) AS NbAlbums, 
CASE
	WHEN COUNT(AlbumId) = 1 THEN 'Unproductive'
	WHEN COUNT(AlbumId) > 1 AND COUNT(AlbumId) < 10 THEN 'Productive'
	WHEN COUNT(AlbumId) >= 10 THEN 'Very Productive'
END IsProductive
FROM artists
INNER JOIN albums ON artists."ArtistId" = albums."ArtistId"
GROUP BY artists."ArtistId"
LIMIT 100