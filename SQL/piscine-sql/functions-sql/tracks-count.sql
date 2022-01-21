Select genres.Name, COUNT(genres.GenreId) AS NumberOfTracks
FROM genres
INNER JOIN tracks ON genres."GenreId" = tracks."GenreId"
GROUP BY genres.GenreId
ORDER BY genres.Name