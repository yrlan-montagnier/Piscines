SELECT Name
FROM invoices
INNER JOIN invoice_items ON invoices."InvoiceId" = invoice_items."InvoiceId"
INNER JOIN tracks ON invoice_items."TrackId" = tracks."TrackId"
WHERE invoices."InvoiceId" = (
	SELECT invoices."InvoiceId"
	FROM tracks
)
ORDER BY invoices."InvoiceDate" DESC
LIMIT 1