SELECT artists.Name AS ArtistName, Title AS AlbumName, tracks.Name AS TrackName, ROUND(tracks.Bytes / 1000000.0, 2) || ' MB' AS MegaBytes
FROM artists
INNER JOIN albums ON artists.ArtistId = albums.ArtistId
INNER JOIN tracks ON albums.AlbumId = tracks.AlbumId
WHERE albums.AlbumId = 89 AND artists.ArtistId = 54