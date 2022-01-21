SELECT EmployeeId, LastName, FirstName, strftime('%d/%m/%Y', employees.HireDate) AS HireFrenchDate 
FROM employees 
ORDER BY HireDate