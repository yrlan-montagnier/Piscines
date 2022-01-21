Select genres.Name, AVG(tracks."Milliseconds") AS AverageDuration
FROM genres
INNER JOIN tracks ON genres."GenreId" = tracks."GenreId"
GROUP BY genres.GenreId
ORDER BY AverageDuration DESC